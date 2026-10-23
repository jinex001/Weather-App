#!/usr/bin/env python3
"""Background-free hero cutouts for the home headline (b133). Rules: design/CUTOUTS.md.

For every article look whose outer has no `cut` yet, remove the ivory background of its product JPG with rembg
(isnet-general-use), crop to the garment, save next to it as `<name>.cut.webp`, and add [path, luminance] to
look/cutouts.js. Then writes a contact sheet to check by eye.

  pip install "rembg[cpu]"          # once per container; the model (~180MB) downloads on first run
  python3 tools/make-cutouts.py --check     # list looks still missing a cutout, change nothing
  python3 tools/make-cutouts.py [--sheet out.png]
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CUTS_JS = os.path.join(ROOT, "look", "cutouts.js")

# Same script order as index.html, cutouts.js last, so supplements are applied and existing cuts are known
html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
scripts = re.findall(r'<script src="(look/[^"?]+\.js)', html)
NODE = """
global.window = {}; const fs = require('fs');
for (const f of %s) eval(fs.readFileSync(%s + '/' + f, 'utf8'));
const L = window.WX_LOOKS, out = [];
for (const o of L.outfits) {
  if (!o.article) continue;
  const it = o.items.map(i => L.items[i]).find(i => i && i.cat === 'outer' && i.image);
  if (it && !it.cut) out.push({ look: o.id, item: it.id, image: it.image });
  if (!it) out.push({ look: o.id, item: null, image: null });
}
console.log(JSON.stringify(out));
""" % (json.dumps(scripts), json.dumps(ROOT))
todo = json.loads(subprocess.check_output(["node", "-e", NODE]))
noOuter = [t["look"] for t in todo if not t["item"]]
todo = [t for t in todo if t["item"]]

print("missing cutouts: %d" % len(todo))
for t in todo: print("  ", t["item"], t["image"])
if noOuter: print("article looks without an outer product (home shows text only):", ", ".join(noOuter))
if "--check" in sys.argv or not todo: sys.exit(0)

import numpy as np
from PIL import Image
from rembg import remove, new_session

ses = new_session("isnet-general-use")
rows = {}
for t in todo:
    src = os.path.join(ROOT, t["image"]); rel = t["image"].rsplit(".", 1)[0] + ".cut.webp"
    c = remove(Image.open(src), session=ses, post_process_mask=True).convert("RGBA")
    c = c.crop(c.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox())  # tight to the garment
    c.save(os.path.join(ROOT, rel), quality=80, method=6)
    a = np.asarray(c).astype(float); rgb = a[..., :3][a[..., 3] > 128] / 255
    lin = np.where(rgb <= .04045, rgb / 12.92, ((rgb + .055) / 1.055) ** 2.4)
    rows[t["item"]] = [rel, round(float((lin @ [.2126, .7152, .0722]).mean()), 3)]
    print("cut", t["item"], rows[t["item"]], os.path.getsize(os.path.join(ROOT, rel)), "bytes")

# Append to the CUTS table in look/cutouts.js
js = open(CUTS_JS, encoding="utf-8").read()
add = "".join(',\n    %s: [%s, %s]' % (json.dumps(k), json.dumps(v[0]), v[1]) for k, v in rows.items())
js = re.sub(r'(\]\s*)(\n  \};)', lambda m: m.group(1).rstrip() + add + m.group(2), js, count=1)
open(CUTS_JS, "w", encoding="utf-8").write(js)

# Contact sheet on the sunny and rain backgrounds: every cut must be whole (cream and white garments included)
sheet = sys.argv[sys.argv.index("--sheet") + 1] if "--sheet" in sys.argv else "/tmp/cutouts-sheet.png"
T, cols = 140, 8; ks = list(rows); n = len(ks); r = (n + cols - 1) // cols
im = Image.new("RGB", (cols * T, r * T * 2), "white")
for i, k in enumerate(ks):
    c = Image.open(os.path.join(ROOT, rows[k][0])).convert("RGBA"); c.thumbnail((T - 10, T - 10))
    for j, bg in enumerate(("#F2C14E", "#1B2140")):
        tile = Image.new("RGBA", (T, T), bg); tile.alpha_composite(c, ((T - c.width) // 2, (T - c.height) // 2))
        im.paste(tile.convert("RGB"), ((i % cols) * T, (i // cols) * T * 2 + j * T))
im.save(sheet)
print("added %d rows to look/cutouts.js; check %s by eye" % (len(rows), sheet))
