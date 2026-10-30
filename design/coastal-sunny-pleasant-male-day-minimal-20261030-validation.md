# b190 · Sunny / Pleasant / Male / Day / Minimal — coastal, mixed gaze (2026-10-30)

The user approved the five mixed-gaze editorials and the automation, and delegated publication of this one batch to `origin/main` to Claude Code (superseding the watcher's earlier PR-only flow). The producer reviewed the products technically and on four backgrounds; the user did not approve each product image individually. Archiving originals and deleting local sources are left to the parent workflow after the live deployment is verified.

## Content and scope

- 5 looks, 18 products (4/3/4/4/3), 23 deployed images. Look IDs are `coastal-pleasant-m35-day-minimal-20261030-01`–`05`, and items are `<look ID>.<product id>` (all new IDs). The module `look/coastal-sunny-pleasant-male-day-minimal-20261030.js` loads after the b188/b189 module and before `cutouts.js` and `global-context.js`.
- Assets live in `look/global/coastal-sunny-pleasant-male-day-minimal-20261030/<look ID>/`: `editorial.jpg`, `products/<product id>.webp` and `products.json`. Delivery bytes are copied unchanged: all 23 SHA-256 values match READY.json and each look's products.json. PNG masters, the `editorials/*.png` originals, QA sheets, journals, prompts and scripts are not committed.
- Mapping: sky `clear` · band `pleasant` · style `minimal` · gender `m` · age storage `"35"` · daytime (no `time`) · `visualRegion: warm-coastal-urban` · `humidityContext: unknown` · context reviewed. The model's appearance is 28–32. Feels-like 22 °C is a creative assumption, not a measurement. Actual temperature, humidity, wind and city are null.
- Scenes: 01 straightens a blue cup lid (eye contact) · 02 is tickled by a flower from the bouquet · 03 catches an orange in the tote · 04 sits on steps with an upside-down map · 05 tries a key at a blue door (eye contact). Scene props are not products: cup/lid, flowers/kraft paper, oranges, map, keys.
- Products and categories: shirts, polo and tee are `top`; trousers are `bottom`; sneakers and loafers are `shoes`; the 01 cream tote, the 03 rust tote (a real product) and the 04 navy canvas crossbody are `bag`; the 05 silver round watch is `watch`.
  - Omitted: 05 shoes (outside the crop) and 02 socks (not clearly visible).
  - Inferred from the visible waist only: the full leg shape of the 05 trousers.
  - Reconstructed for every product: backs, soles and the second item of each pair. Brands, fibre composition and retail identity are unknown.
- Heroes and cutouts: 01 shirt · 02 polo · 03 rust tote · 04 tee · 05 shirt. Each reuses the product's own transparent WebP; there are no duplicate files and no rembg step.

## Copy

These are used unchanged: the Korean master (title, deck, intro, product names, all 18 per-product how-to-wear notes), and the producer's en/de intros, names and notes. The English article title and pull quote are the producer's. Claude's review changed the following fields. Each look's `products.json` keeps the original text under `copy.sourceCopy` / `products[].sourceCopy`.

- **Tip (ko/en/de, all 5 looks):** each supplied tip was word-for-word the how-to-wear of the look's first product, so the same sentence appeared twice on the sheet. New look-level tips about colour or proportion were written from the editorials. The Korean tip is the only Korean master text that was changed, and the original is preserved.
- **en deck (all 5):** each one started with the English article title shown directly above it. They were replaced with scene sentences. ko/de decks are unchanged.
- **`products.json` description ko/de (18):** these were a generic template ("…복원한 AI 스타일링 제품 이미지입니다"). They now give concrete visible details taken from the producer's en description and the cut, plus the reconstruction notice. This text is not shown in the app.

The 05 trousers how-to-wear keeps its supplied note that the legs outside the frame are an inferred design (the same practice as b184).

Checks:
- The 18 notes are distinct in every language, and no tip equals any note.
- Intros do not list product names.
- No brand, price, fibre or performance claims are made.

## Validation (this session)

- **READY.json and copied assets:** 108/108 files match size and SHA-256. The source and outbox were not modified. All 23 copied files have the hashes listed in READY.
- **Visual check:** Claude opened all 5 editorials and all 18 product images and compared them with the metadata above (colours, collar types, pleats, the cuffed 03 hems, the taupe suede 04 sneakers, the zip pouch with adjustable strap, the plain-dial bracelet watch).
- **Image files:**
  - Editorials are 1024×1536 JPEG, 222,311–288,904 B (≤300,000).
  - Products are 500×500 WebP with VP8X and the alpha flag plus an ALPH chunk, 19,616–44,074 B (≤50,000).
  - The producer's technical QA reports alpha extrema 0–254/255. Pillow is not installed here, so corner pixels were not re-decoded.
- **Runtime (Node, all 40 `look/*.js` scripts in index.html order, in a VM):**
  - 306 looks (306 unique) and 1,791 items, which is b189's 301 / 1,773 plus 5 / 18.
  - 0 missing editorial, product or cut paths, and 0 missing item references.
  - New looks have complete ko/en/de copy and `#` backgrounds, and global-context gives them humidity `unknown`.
- `python3 tools/make-cutouts.py --check`: **missing cutouts: 0**, with the 5 new HERO rows kept.
- `node tools/tests/location-first.cjs`: **72 live-library cases passed**, including the legacy exclusion, rain and temperature guards.
- **Not done:** browser or device rendering. Live deployment, the 23 public images and the archive are verified separately after the push.

## Expected effect

In coastal locations, clear pleasant (and the adjacent warm band) daytime male minimal looks now come from these 5; before, no look matched that cell exactly. Berlin, unknown regions, other cells, existing looks and assets, and selector code are unchanged.
