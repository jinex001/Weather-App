#!/usr/bin/env python3
"""Approved image delivery to a local, resumable Claude handoff (never maps/pushes)."""
import argparse
import fcntl
import hashlib
import io
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import tempfile
import warnings

from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = 30_000_000
warnings.simplefilter('error', Image.DecompressionBombWarning)
ROOT = Path(__file__).resolve().parents[1]


def require(ok, message):
    if not ok:
        raise ValueError(message)


def digest(data):
    return hashlib.sha256(data).hexdigest()


def safe(root, name):
    require(isinstance(name, str) and name and '\\' not in name, 'invalid path')
    p = PurePosixPath(name)
    require(not p.is_absolute() and all(x not in ('..', '.') for x in name.split('/')),
            'unsafe path: ' + name)
    current = root
    for part in p.parts:
        current = current / part
        require(not current.is_symlink(), 'symlink forbidden: ' + name)
    require(current.resolve().is_relative_to(root.resolve()), 'path escapes root')
    return current


def read(root, name, expected=None):
    p = safe(root, name)
    require(p.is_file(), 'missing file: ' + name)
    require(p.stat().st_size <= 25_000_000, 'file too large: ' + name)
    data = p.read_bytes()
    if expected is not None:
        require(re.fullmatch('[0-9a-f]{64}', str(expected)) is not None, 'invalid SHA-256')
        require(digest(data) == expected, 'SHA-256 mismatch: ' + name)
    return data


def load(data):
    def pairs(values):
        obj = {}
        for k, v in values:
            require(k not in obj, 'duplicate JSON key: ' + k)
            obj[k] = v
        return obj
    return json.loads(data, object_pairs_hook=pairs)


def image_check(data, role, suffix, exception=None):
    with Image.open(io.BytesIO(data)) as im:
        im.load()
        require(getattr(im, 'n_frames', 1) == 1, 'animated images forbidden')
        if role == 'editorial':
            require(im.format == 'JPEG' and suffix == '.jpg', 'editorial must be real JPG')
            require(im.size == (1024, 1536) and len(data) <= 300_000,
                    'editorial requires 1024x1536, <=300000 bytes')
        else:
            require(role == 'product', 'unknown image role')
            require(im.format == 'WEBP' and suffix == '.webp', 'new product must be real WebP')
            require(im.size == (500, 500), 'product requires 500x500')
            require(len(data) <= 100_000, 'product exceeds 100000-byte ceiling')
            require(len(data) <= 50_000 or isinstance(exception, str) and exception.strip(),
                    'product >50000 bytes requires sizeException reason')
            require('A' in im.getbands(), 'product needs real alpha')
            alpha = im.getchannel('A')
            require(alpha.getextrema()[0] == 0 and alpha.getextrema()[1] > 0,
                    'product must have transparent and visible pixels')
            require(all(alpha.getpixel(p) == 0 for p in [(0, 0), (499, 0), (0, 499), (499, 499)]),
                    'product corners must be transparent')


def check_folder(path, meta):
    parts = PurePosixPath(path).parts
    w = meta['weather']
    require(parts[:2] == ('look', 'berlin-complete'), 'lookPath must be in library')
    require(len(parts) in (8, 9, 10), 'unexpected look folder structure')
    condition = {'Sunny': 'clear', 'Overcast': 'cloudy', 'Rain': 'rain'}
    require(parts[2] in condition and w['condition'] == condition[parts[2]], 'weather/folder conflict')
    offset = 3
    if parts[2] == 'Rain':
        require(w['rainIntensity'] == parts[3].lower(), 'rain intensity/folder conflict')
        require(parts[3] in ('Light', 'Normal', 'Pouring'), 'unknown rain intensity')
        offset = 4
    band, gender, age, time = parts[offset:offset + 4]
    require(band.lower() in ('freeze', 'verycold', 'cold', 'chilly', 'cool', 'pleasant', 'warm', 'hot', 'scorching'), 'unclassified band needs user decision')
    require(w['feelsLikeBand'] == band.lower(), 'band/folder conflict')
    require(meta['gender'] == {'Male': 'men', 'Female': 'women'}.get(gender), 'gender/folder conflict')
    require(meta['ageGroup'] == age, 'age/folder conflict')
    require(time in ('day', 'night') and w['timeOfDay'] in ({'day'} if time == 'day' else {'night', 'evening'}), 'time/folder conflict')
    tail = parts[offset + 4:]
    if len(tail) == 1:
        match = re.fullmatch(r'\d{2}-(running|street|minimal)', tail[0])
        require(match is not None, 'unknown numbered style folder')
        style = match.group(1)
    else:
        require(len(tail) == 2 and re.fullmatch(r'\d{2}', tail[1]), 'unknown style folder')
        style = tail[0]
    require(meta['style'] == {'running': 'run', 'street': 'street', 'minimal': 'minimal'}.get(style), 'style needs user decision or folder conflict')
    for key in ('temperatureC', 'feelsLikeC'):
        require(key in w and (w[key] is None or type(w[key]) in (int, float)), 'temperature must be explicit number or null')


def validate(batch, repo):
    manifest_bytes = read(batch, 'approval.json')
    m = load(manifest_bytes)
    require(m['schemaVersion'] == 1, 'unsupported manifest version')
    require(re.fullmatch('[a-zA-Z0-9][a-zA-Z0-9_-]{0,79}', m['batchId']), 'invalid batchId')
    a = m['approval']
    require(a['status'] == 'approved' and all(isinstance(a[k], str) and a[k].strip()
            for k in ('approvedBy', 'approvedAt', 'evidence')), 'explicit approval record required')
    meta_bytes = read(batch, m['metadata']['source'], m['metadata']['sha256'])
    master_bytes = read(batch, m['masterCopy']['source'], m['masterCopy']['sha256'])
    meta, master = load(meta_bytes), load(master_bytes)
    look = m['lookPath']
    safe(repo, look)
    check_folder(look, meta)
    require(meta['approval']['editorial'] == 'approved', 'metadata editorial not approved')
    require(meta['productionStatus'] == 'ready', 'metadata must be reviewed ready')
    products = meta['products']
    ids = [p['id'] for p in products]
    require(len(products) > 0 and meta['productCount'] == len(products) and len(set(ids)) == len(ids), 'product count or ID mismatch')
    require(master['language'] == 'ko' and master['lookId'] == meta['id'], 'master language/look ID mismatch')
    require(isinstance(master['stylingIntentKo'], str) and master['stylingIntentKo'].strip(), 'styling intent required')
    notes = master['products']
    require(len(notes) == len(ids) and {p['id'] for p in notes} == set(ids), 'master product IDs mismatch')
    texts = [p['howToWearKo'] for p in notes]
    require(all(isinstance(t, str) and t.strip() for t in texts) and len(set(t.strip() for t in texts)) == len(texts), 'empty or repeated How to Wear')
    require(not any('원본처럼' in t or '레이어에 맞춰 더해' in t for t in texts), 'placeholder How to Wear')
    by_id = {p['id']: p['howToWearKo'] for p in notes}
    for p in products:
        require(p.get('descriptionKo') == by_id[p['id']] or p.get('description', {}).get('ko') == by_id[p['id']], 'metadata must preserve Korean master: ' + p['id'])
    # Only destinations declared in the manifest may appear in the delivery.
    outputs, hashes, roles = {}, set(), {}
    for f in m['files']:
        target = f['path']
        require(target.startswith(look + '/'), 'asset destination outside this look')
        safe(repo, target)
        require(target not in outputs, 'duplicate destination')
        data = read(batch, f['source'], f['sha256'])
        require(f['sha256'] not in hashes, 'duplicate image bytes in batch')
        hashes.add(f['sha256'])
        image_check(data, f['role'], PurePosixPath(target).suffix, f.get('sizeException'))
        if safe(repo, target).exists():
            require(read(repo, target) == data, 'existing asset conflict: ' + target)
        outputs[target] = data
        roles[target] = f['role']
    expected_products = {str(PurePosixPath(look) / p['image']) for p in products}
    for p in products:
        safe(Path('/library'), p['image'])
    require(len(expected_products) == len(products), 'products share an image')
    require({k for k, v in roles.items() if v == 'product'} == expected_products, 'product files/references mismatch')
    editorial = meta['editorialImage']
    require(editorial == 'editorial.jpg' or re.fullmatch(r'\.\./\d{2}-(running|street|minimal)\.jpg', editorial), 'unsupported editorial reference')
    # ../NN-style.jpg is the documented legacy Sunny reference, and is read-only.
    resolved_editorial = (repo / look / editorial).resolve()
    require(resolved_editorial.is_relative_to((repo / 'look/berlin-complete').resolve()), 'editorial escapes library')
    editorial_path = resolved_editorial.relative_to(repo.resolve()).as_posix()
    existing = m.get('existingEditorial')
    if existing:
        require(existing['path'] == editorial_path and not any(v == 'editorial' for v in roles.values()), 'existing editorial must be referenced without a copy')
        read(repo, existing['path'], existing['sha256'])
    else:
        require(roles.get(editorial_path) == 'editorial' and sum(v == 'editorial' for v in roles.values()) == 1, 'one editorial required')
    # Detect duplicate bytes elsewhere in the repository; reference the existing asset instead.
    incoming = {digest(v): k for k, v in outputs.items()}
    library = repo / 'look/berlin-complete'
    for p in library.rglob('*'):
        if p.is_file() and p.suffix.lower() in ('.jpg', '.webp'):
            require(not p.is_symlink(), 'symlink in library')
            h = digest(p.read_bytes())
            if h in incoming:
                require(p.relative_to(repo).as_posix() == incoming[h], 'duplicate existing image: ' + str(p.relative_to(repo)))
    for p in library.rglob('products.json'):
        old = load(p.read_bytes())
        if old.get('id') == meta['id']:
            require(p.parent == repo / look, 'look ID already used in another folder')
    metadata_target = look + '/products.json'
    require(metadata_target not in outputs, 'metadata destination collision')
    outputs[metadata_target] = meta_bytes
    return m, manifest_bytes, master_bytes, outputs


def ingest(batch, repo=ROOT, inbox=None, dry_run=False):
    repo, batch = Path(repo).resolve(), Path(batch).resolve()
    inbox = Path(inbox or repo / '.image-inbox').resolve()
    # Serialize ingest; process death releases flock, so reruns need no stale lock deletion.
    inbox.mkdir(parents=True, exist_ok=True)
    with open(inbox / '.lock', 'a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        m, manifest, master, outputs = validate(batch, repo)
        expected = {'approval.json': manifest, 'master-copy.ko.json': master}
        expected.update({'repository/' + k: v for k, v in outputs.items()})
        report = {'batchId': m['batchId'], 'approvalSha256': digest(manifest),
                  'status': 'awaiting-claude-review', 'files': {k: digest(v) for k, v in expected.items()}}
        expected['receipt.json'] = (json.dumps(report, ensure_ascii=False, indent=2) + '\n').encode()
        ready = safe(inbox, 'ready/' + m['batchId'])
        if ready.exists():
            actual = {p.relative_to(ready).as_posix() for p in ready.rglob('*') if p.is_file()}
            require(actual == set(expected), 'existing ready bundle file list changed')
            for name, data in expected.items():
                require(read(ready, name) == data, 'batch ID reused or ready bundle modified')
            return {'status': 'already-ready', 'path': str(ready)}
        image_hashes = {digest(v) for k, v in outputs.items() if k.endswith(('.jpg', '.webp'))}
        for other in safe(inbox, 'ready').glob('*/receipt.json'):
            receipt = load(read(other.parent, 'receipt.json'))
            for name, sha in receipt['files'].items():
                if name.endswith(('.jpg', '.webp')):
                    require(sha not in image_hashes, 'duplicate image in another ready batch: ' + other.parent.name)
        if dry_run:
            return {'status': 'validated', 'files': len(outputs), 'path': str(ready)}
        ready.parent.mkdir(parents=True, exist_ok=True)
        # Publish a complete directory atomically. Interrupted temp dirs are never treated as ready.
        tmp = Path(tempfile.mkdtemp(prefix='.pending-', dir=ready.parent))
        try:
            for name, data in expected.items():
                p = safe(tmp, name)
                p.parent.mkdir(parents=True, exist_ok=True)
                with open(p, 'xb') as out:
                    out.write(data)
                    out.flush()
                    os.fsync(out.fileno())
            os.rename(tmp, ready)
        finally:
            if tmp.exists():
                shutil.rmtree(tmp)
        return {'status': 'ready', 'path': str(ready)}


def export_image(source, target, role):
    """Explicit derivative export; source never changed, no crop or background removal."""
    source, target = Path(source), Path(target)
    require(not target.exists(), 'export target already exists')
    data = source.read_bytes()
    with Image.open(io.BytesIO(data)) as raw:
        raw.load()
        im = ImageOps.exif_transpose(raw)
        size = (1024, 1536) if role == 'editorial' else (500, 500)
        require(im.width * size[1] == im.height * size[0], 'aspect ratio mismatch; no automatic crop')
        if role == 'product':
            require('A' in im.getbands(), 'opaque product needs separate approved background work')
        im = im.resize(size, Image.Resampling.LANCZOS)
        if role == 'editorial':
            im = im.convert('RGB')
        result = None
        for quality in range(90, 39, -5):
            buf = io.BytesIO()
            im.save(buf, format='JPEG' if role == 'editorial' else 'WEBP', quality=quality)
            if len(buf.getvalue()) <= (300_000 if role == 'editorial' else 50_000):
                result = buf.getvalue()
                break
        require(result is not None, 'cannot meet size target; manual quality review needed')
    image_check(result, role, target.suffix)
    target.parent.mkdir(parents=True, exist_ok=True)
    with open(target, 'xb') as f:
        f.write(result)
    return {'sourceSha256': digest(data), 'sha256': digest(result), 'bytes': len(result)}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo', type=Path, default=ROOT)
    sub = parser.add_subparsers(dest='command', required=True)
    sub.add_parser('init')
    check = sub.add_parser('ingest')
    check.add_argument('batch', type=Path)
    check.add_argument('--dry-run', action='store_true')
    export = sub.add_parser('export')
    export.add_argument('role', choices=['editorial', 'product'])
    export.add_argument('source', type=Path)
    export.add_argument('target', type=Path)
    args = parser.parse_args()
    try:
        if args.command == 'init':
            for folder in ('incoming', 'ready'):
                (args.repo / '.image-inbox' / folder).mkdir(parents=True, exist_ok=True)
            result = {'inbox': str((args.repo / '.image-inbox').resolve())}
        elif args.command == 'export':
            result = export_image(args.source, args.target, args.role)
        else:
            result = ingest(args.batch, args.repo, dry_run=args.dry_run)
        print(json.dumps(result, ensure_ascii=False))
    except (ValueError, KeyError, TypeError, OSError, SyntaxError) as e:
        parser.exit(1, 'Image inbox rejected: ' + str(e) + '\n')


if __name__ == '__main__':
    main()
