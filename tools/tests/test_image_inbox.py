import copy
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

from PIL import Image, ImageDraw

SPEC = importlib.util.spec_from_file_location('inbox', Path(__file__).parents[1] / 'image-inbox.py')
app = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(app)


class InboxTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.repo = (Path(self.tmp.name) / 'repo').resolve()
        self.batch = self.repo / '.image-inbox/incoming/demo'
        self.batch.mkdir(parents=True)
        self.look = 'look/berlin-complete/Sunny/Hot/Male/35+/day/06-street'
        self.meta = {'schemaVersion': '1.0', 'id': 'test-sunny-hot', 'gender': 'men', 'ageGroup': '35+', 'style': 'street',
                     'weather': {'condition': 'clear', 'timeOfDay': 'day', 'feelsLikeBand': 'hot', 'temperatureC': 25, 'feelsLikeC': None},
                     'approval': {'editorial': 'approved'}, 'productionStatus': 'ready', 'editorialImage': 'editorial.jpg',
                     'productCount': 1, 'products': [{'id': '01-top', 'image': 'products/01-top.webp', 'descriptionKo': '앞단만 넣고 소매를 한 번 접어요.'}]}
        self.master = {'language': 'ko', 'lookId': self.meta['id'], 'stylingIntentKo': '밑단과 소매로 가벼운 비율을 만든다.',
                       'products': [{'id': '01-top', 'howToWearKo': self.meta['products'][0]['descriptionKo']}]}
        self.manifest = {'schemaVersion': 1, 'batchId': 'demo', 'lookPath': self.look,
                         'approval': {'status': 'approved', 'approvedBy': 'user', 'approvedAt': '2026-10-24', 'evidence': 'explicit test fixture approval, not production'}, 'files': []}
        editorial = io.BytesIO()
        Image.new('RGB', (1024, 1536), 'orange').save(editorial, 'JPEG')
        self.asset('editorial.jpg', editorial.getvalue(), 'editorial', 'editorial.jpg')
        im = Image.new('RGBA', (500, 500), (0, 0, 0, 0))
        ImageDraw.Draw(im).rectangle((80, 80, 420, 420), fill='blue')
        product = io.BytesIO()
        im.save(product, 'WEBP')
        self.asset('top.webp', product.getvalue(), 'product', 'products/01-top.webp')
        self.save()

    def asset(self, source, data, role, dest):
        (self.batch / source).write_bytes(data)
        self.manifest['files'].append({'source': source, 'path': self.look + '/' + dest, 'sha256': app.digest(data), 'role': role})

    def save(self):
        for key, name, obj in [('metadata', 'products.json', self.meta), ('masterCopy', 'master-copy.ko.json', self.master)]:
            data = (json.dumps(obj, ensure_ascii=False, indent=2) + '\n').encode()
            (self.batch / name).write_bytes(data)
            self.manifest[key] = {'source': name, 'sha256': app.digest(data)}
        (self.batch / 'approval.json').write_text(json.dumps(self.manifest), encoding='utf-8')

    def run_ingest(self, **kwargs):
        return app.ingest(self.batch, self.repo, **kwargs)

    def test_dry_run_atomic_resume_and_preserved_master(self):
        self.assertEqual(self.run_ingest(dry_run=True)['status'], 'validated')
        self.assertFalse((self.repo / '.image-inbox/ready').exists())
        result = self.run_ingest()
        ready = Path(result['path'])
        self.assertEqual((ready / 'master-copy.ko.json').read_bytes(), (self.batch / 'master-copy.ko.json').read_bytes())
        self.assertEqual(self.run_ingest()['status'], 'already-ready')
        self.assertFalse((self.repo / 'look').exists())

    def test_duplicate_across_ready_batches(self):
        self.run_ingest()
        self.manifest['batchId'] = 'second-batch'
        self.save()
        with self.assertRaisesRegex(ValueError, 'another ready batch'):
            self.run_ingest()

    def test_duplicate_json_keys(self):
        (self.batch / 'approval.json').write_text('{"schemaVersion":1,"schemaVersion":1}')
        with self.assertRaisesRegex(ValueError, 'duplicate JSON key'):
            self.run_ingest()

    def test_hash_mismatch_and_unapproved(self):
        (self.batch / 'top.webp').write_bytes(b'partial-download')
        with self.assertRaisesRegex(ValueError, 'SHA-256 mismatch'):
            self.run_ingest()
        self.manifest['approval']['status'] = 'draft'
        self.save()
        with self.assertRaisesRegex(ValueError, 'approval'):
            self.run_ingest()

    def test_conflict_does_not_overwrite(self):
        target = self.repo / self.look / 'products/01-top.webp'
        target.parent.mkdir(parents=True)
        target.write_bytes(b'keep-original')
        with self.assertRaisesRegex(ValueError, 'existing asset conflict'):
            self.run_ingest()
        self.assertEqual(target.read_bytes(), b'keep-original')

    def test_duplicate_bytes_and_existing_repository_duplicate(self):
        self.manifest['files'].append(copy.deepcopy(self.manifest['files'][1]))
        self.manifest['files'][-1]['path'] = self.look + '/products/copy.webp'
        self.save()
        with self.assertRaisesRegex(ValueError, 'duplicate image bytes'):
            self.run_ingest()
        self.manifest['files'].pop()
        self.save()
        other = self.repo / 'look/berlin-complete/other.webp'
        other.parent.mkdir(parents=True)
        other.write_bytes((self.batch / 'top.webp').read_bytes())
        with self.assertRaisesRegex(ValueError, 'duplicate existing image'):
            self.run_ingest()

    def test_traversal_and_symlinks(self):
        self.manifest['files'][1]['source'] = '../top.webp'
        self.save()
        with self.assertRaisesRegex(ValueError, 'unsafe path'):
            self.run_ingest()
        self.manifest['files'][1]['source'] = 'link.webp'
        (self.batch / 'link.webp').symlink_to(self.batch / 'top.webp')
        self.save()
        with self.assertRaisesRegex(ValueError, 'symlink'):
            self.run_ingest()

    def test_count_folder_master_failures(self):
        for change, message in [('count', 'count'), ('folder', 'band/folder'), ('copy', 'preserve Korean')]:
            with self.subTest(change=change):
                original = copy.deepcopy(self.meta)
                if change == 'count':
                    self.meta['productCount'] = 3
                elif change == 'folder':
                    self.meta['weather']['feelsLikeBand'] = 'chilly'
                else:
                    self.meta['products'][0]['descriptionKo'] = 'changed'
                self.save()
                with self.assertRaisesRegex(ValueError, message):
                    self.run_ingest()
                self.meta = original

    def test_opaque_disguised_truncated_and_wrong_size(self):
        for mode in ['opaque', 'png', 'truncated', 'size']:
            with self.subTest(mode=mode):
                im = Image.new('RGB' if mode == 'opaque' else 'RGBA', (100, 100) if mode == 'size' else (500, 500), 'blue')
                buf = io.BytesIO()
                im.save(buf, 'PNG' if mode == 'png' else 'WEBP')
                data = buf.getvalue()[:30] if mode == 'truncated' else buf.getvalue()
                (self.batch / 'top.webp').write_bytes(data)
                self.manifest['files'][1]['sha256'] = app.digest(data)
                self.save()
                with self.assertRaises((ValueError, OSError)):
                    self.run_ingest()

    def test_legacy_editorial_reference_no_duplicate(self):
        self.meta['editorialImage'] = '../06-street.jpg'
        entry = self.manifest['files'].pop(0)
        target = (self.repo / self.look / '../06-street.jpg').resolve()
        target.parent.mkdir(parents=True)
        target.write_bytes((self.batch / 'editorial.jpg').read_bytes())
        self.manifest['existingEditorial'] = {'path': target.resolve().relative_to(self.repo).as_posix(), 'sha256': entry['sha256']}
        self.save()
        ready = Path(self.run_ingest()['path'])
        self.assertFalse((ready / 'repository' / self.look / 'editorial.jpg').exists())

    def test_interrupted_publish_is_resumable(self):
        with patch.object(app.os, 'rename', side_effect=OSError('simulated interruption')):
            with self.assertRaises(OSError):
                self.run_ingest()
        self.assertFalse((self.repo / '.image-inbox/ready/demo').exists())
        self.assertEqual(self.run_ingest()['status'], 'ready')

    def test_batch_identity_and_ready_tampering(self):
        ready = Path(self.run_ingest()['path'])
        self.manifest['approval']['evidence'] = 'different approval'
        self.save()
        with self.assertRaisesRegex(ValueError, 'batch ID reused'):
            self.run_ingest()
        (ready / 'extra.txt').write_text('unexpected')
        with self.assertRaisesRegex(ValueError, 'file list changed'):
            self.run_ingest()

    def test_export_no_overwrite_alpha_and_no_crop(self):
        src = self.batch / 'raw.png'
        im = Image.new('RGBA', (1000, 1000), (0, 0, 0, 0))
        ImageDraw.Draw(im).rectangle((200, 200, 800, 800), fill='red')
        im.save(src)
        original = src.read_bytes()
        result = app.export_image(src, self.batch / 'export.webp', 'product')
        self.assertEqual(result['sourceSha256'], app.digest(original))
        self.assertEqual(src.read_bytes(), original)
        with self.assertRaisesRegex(ValueError, 'already exists'):
            app.export_image(src, self.batch / 'export.webp', 'product')
        im.resize((1000, 900)).save(src)
        with self.assertRaisesRegex(ValueError, 'aspect ratio'):
            app.export_image(src, self.batch / 'another.webp', 'product')


if __name__ == '__main__':
    unittest.main()
