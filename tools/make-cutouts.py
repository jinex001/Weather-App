#!/usr/bin/env python3
"""Background-free hero cutouts for the home headline (b133, hero by title b134). Rules: design/CUTOUTS.md.

For every article look: pick the product its title is about (first title word that names an item's color or
material, e.g. CITRON ON THE TERRACE -> the citron knit; none -> the outer), remove the ivory background of that
product JPG with rembg (isnet-general-use), crop to the garment, save next to it as `<name>.cut.webp`, and write
look/cutouts.js: CUTS (item -> [path, luminance]) and HERO (look -> item). Looks already in HERO keep their entry
(so a hand fix stays); delete a look's HERO row to pick again. Then writes a contact sheet to check by eye.

  pip install "rembg[cpu]"          # once per container; the model (~180MB) downloads on first run
  python3 tools/make-cutouts.py --check     # show each look's hero and what is missing, change nothing
  python3 tools/make-cutouts.py [--sheet out.png]
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CUTS_JS = os.path.join(ROOT, "look", "cutouts.js")

# Title word -> words to look for in the product names (en). Same color, other name.
SYN = {"blue": ["blue", "cobalt"], "red": ["red", "cherry", "crimson"], "cream": ["cream", "ivory", "ecru"],
       "cocoa": ["cocoa", "chocolate"], "espresso": ["espresso", "chocolate"], "oat": ["oat", "oatmeal"],
       "oxblood": ["oxblood", "burgundy"], "check": ["check"], "checks": ["check"], "quilting": ["quilted"],
       "pattern": ["geometric", "graphic"], "texture": ["textured", "texture"]}
# Words that never pick a product: small words, and weather (GRAY DAY, RAIN, DRIZZLE are the sky, not a garment)
SKIP = set("the a an at on in of and with after before under between to for up out one more your is that all dark home way "
           "door soft small shot little just line hour hours gray grey grays rain drizzle puddle".split())
# Several products with the title's color: the bigger, more visible piece first
PRI = ["outer", "top", "scarf", "bottom", "bag", "headwear", "shoes", "under", "socks", "hands", "gloves", "jewelry",
       "gear", "accessory", "eyewear", "watch", "hosiery", "shorts"]

def words(s): return re.findall(r"[a-z]+", s.lower().replace("é", "e"))

def pick(look):
    items = [i for i in look["items"] if i["image"]]
    for w in words(look["title"]):
        if w in SKIP: continue
        keys = SYN.get(w, [w])
        m = [i for i in items if any(k in words(i["name"]) for k in keys)]
        if m:
            m.sort(key=lambda i: PRI.index(i["cat"]) if i["cat"] in PRI else 99)
            return m[0], w
    outer = [i for i in items if i["cat"] == "outer"]
    return (outer[0], "outer") if outer else (None, None)

# Same script order as index.html (cutouts.js last), so supplements are applied and existing cuts are known
html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
scripts = re.findall(r'<script src="(look/[^"?]+\.js)', html)
NODE = """
global.window = {}; const fs = require('fs');
for (const f of %s) eval(fs.readFileSync(%s + '/' + f, 'utf8'));
const L = window.WX_LOOKS, out = [];
for (const o of L.outfits) {
  if (!o.article) continue;
  out.push({ look: o.id, title: o.article.title, hero: o.hero || null, items: o.items.map(i => L.items[i]).filter(Boolean)
    .map(i => ({ id: i.id, cat: i.cat, name: (i.name && (i.name.en || i.name)) || '', image: i.image || null,
                 cut: i.cut ? [i.cut, i.lum] : null })) });
}
console.log(JSON.stringify(out));
""" % (json.dumps(scripts), json.dumps(ROOT))
looks = json.loads(subprocess.check_output(["node", "-e", NODE]))

cuts, hero, todo, none = {}, {}, [], []
for lk in looks:
    for i in lk["items"]:
        if i["cut"]: cuts[i["id"]] = i["cut"]
    byId = {i["id"]: i for i in lk["items"]}
    if lk["hero"] and lk["hero"] in byId: it, why = byId[lk["hero"]], "kept"
    else: it, why = pick(lk)
    if not it: none.append(lk["look"]); continue
    hero[lk["look"]] = it["id"]
    if it["id"] not in cuts and it["id"] not in [t["id"] for t in todo]: todo.append(it)
    print("%-40s %-28s -> %s [%s]%s" % (lk["look"], lk["title"][:28], it["name"], why, "" if it["id"] in cuts else "  * new cut"))

print("\nmissing cutouts: %d" % len(todo))
if none: print("article looks without any usable product (home shows text only):", ", ".join(none))

if todo and "--check" not in sys.argv:
    import numpy as np
    from PIL import Image
    from rembg import remove, new_session
    ses = new_session("isnet-general-use")
    for t in todo:
        rel = t["image"].rsplit(".", 1)[0] + ".cut.webp"
        c = remove(Image.open(os.path.join(ROOT, t["image"])), session=ses, post_process_mask=True).convert("RGBA")
        c = c.crop(c.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox())  # tight to the garment
        c.save(os.path.join(ROOT, rel), quality=80, method=6)
        a = np.asarray(c).astype(float); rgb = a[..., :3][a[..., 3] > 128] / 255
        lin = np.where(rgb <= .04045, rgb / 12.92, ((rgb + .055) / 1.055) ** 2.4)
        cuts[t["id"]] = [rel, round(float((lin @ [.2126, .7152, .0722]).mean()), 3)]
        print("cut", t["id"], cuts[t["id"]], os.path.getsize(os.path.join(ROOT, rel)), "bytes")

    sheet = sys.argv[sys.argv.index("--sheet") + 1] if "--sheet" in sys.argv else "/tmp/cutouts-sheet.png"
    T, cols = 140, 8; r = (len(todo) + cols - 1) // cols
    im = Image.new("RGB", (cols * T, r * T * 2), "white")
    for n, t in enumerate(todo):
        c = Image.open(os.path.join(ROOT, cuts[t["id"]][0])).convert("RGBA"); c.thumbnail((T - 10, T - 10))
        for j, bg in enumerate(("#F2C14E", "#1B2140")):
            tile = Image.new("RGBA", (T, T), bg); tile.alpha_composite(c, ((T - c.width) // 2, (T - c.height) // 2))
            im.paste(tile.convert("RGB"), ((n % cols) * T, (n // cols) * T * 2 + j * T))
    im.save(sheet)
    print("check %s by eye: every garment whole (cream and white too), no ivory edge" % sheet)

if "--check" in sys.argv: sys.exit(0)
used = set(hero.values())
rows = ",\n".join("    %s: [%s, %s]" % (json.dumps(k), json.dumps(v[0]), v[1]) for k, v in cuts.items() if k in used)
hrows = ",\n".join("    %s: %s" % (json.dumps(k), json.dumps(v)) for k, v in hero.items())
open(CUTS_JS, "w", encoding="utf-8").write("""// Home headline hero (b133, picked by title b134): for each article look, the product its title is about, background
// removed (rembg isnet-general-use from the product JPG, cropped to the garment). Written by tools/make-cutouts.py —
// rules in design/CUTOUTS.md. CUTS: item -> [path, mean relative luminance of the garment] (the luminance picks the
// color of the headline letters that cross it). HERO: look -> item (edit a row by hand to fix a pick; the tool keeps it).
(function () {
  var L = window.WX_LOOKS; if (!L) return;
  var CUTS = {
%s
  };
  var HERO = {
%s
  };
  Object.keys(CUTS).forEach(function (id) { var it = L.items[id]; if (it) { it.cut = CUTS[id][0]; it.lum = CUTS[id][1]; } });
  L.outfits.forEach(function (o) { if (HERO[o.id]) o.hero = HERO[o.id]; });
})();
""" % (rows, hrows))
print("wrote look/cutouts.js: %d heroes, %d cuts" % (len(hero), len(used)))
