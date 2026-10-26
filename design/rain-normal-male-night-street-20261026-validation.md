# Validation · b171 · Rain / Normal / Chilly / Male / 35+ / night / Street — 2026-10-26 set

Batch `rain-normal-chilly-male-night-street-20261026` (local outbox, `originals/product-breakdown/complete/01`–`05` only).

## Source and scope

- READY.json: `approved: true`, `products_complete: true`, category `Rain/Normal/Chilly/Male/35+/night/street`, 5 editorials, 21 products, `product_visual_approval: producer-reviewed` (no separate user visual approval). All 110 listed files match SHA-256 and byte size; no file on disk outside the list (besides READY.json).
- Entry point `LOOKS_READY.json` → `NN/products-ready.json`; copy from `KOREAN_MASTER_FINAL.json` and `originals/COPY_FINAL_v2.json`. The three agree exactly (look title/deck/intro/tip/pull, product names and How to Wear). Draft history (`products.json`, `products-final.json`, `LOOKS*.json`, `KOREAN_MASTER.json`, `COPY_FINAL.json`, `COPY_L10N.json`, `COPY_REVIEWED.json`) not used. `FORMAT_REPORT.json` and `VISUAL_REVIEW.json` (`passed`) checked before integration.
- Committed: 5 `editorial.jpg` + 21 product WebP (bytes unchanged; renamed `NN-<id>.webp` → `<id>.webp`, delivered name in `deliveredImage`), 5 sanitised `products.json` (no `prompt`, `masterSource`, `generationSource`, local paths), category `README.md`, `look/rain-normal-male-night-street-20261026.js`, 5 HERO + 5 CUTS rows in `look/cutouts.js`, BUILD b171 and cache keys in `index.html`, docs.
- Not committed: `originals/*.png`, `masters/*.png`, QA sheets, `PROMPTS.md`, `PRODUCT_INVENTORY.json`, `generation-records/*`, `bulk_finish.py`, READY/HANDOFF/CHECKPOINT/FORMAT_REPORT/VISUAL_REVIEW.
- The outbox was only read; nothing moved, changed or deleted. iCloud archive and local cleanup are left to the parent task.
- Collision check on latest main (fa60f86, b170): no file or script contained `rn-chilly-m35-night-street-20261026`, and `Rain/Normal/Chilly/Male/35+/night/street/` did not exist.

## Images

- SHA-256 of all 26 committed images equals the delivery file and the READY.json entry (0 mismatches).
- Editorials: JPEG, all 2:3 — 01 900×1350 279,820 B · 02 960×1440 280,841 B · 03 1024×1536 270,040 B · 04 1024×1536 277,372 B · 05 1024×1536 275,113 B (≤300,000 B, no upscale).
- Products: RIFF/WebP `VP8X` (alpha flag) + `ALPH` (lossless, no filter) + `VP8`, 500×500, 18,248–48,696 B (≤50,000 B). Alpha decoded with a pure-Python VP8L decoder: all four corners and the whole 1-px border are 0 on all 21; alpha range [0, 255] and alpha bounds equal FORMAT_REPORT `export.alphaBounds` exactly for every file. Garment interiors sit at alpha 253 (≈99 %, from the producer masters; visually opaque).
- Visual review — Claude opened all 5 editorials and all 21 products:
  - 01 charcoal hooded parka, oatmeal pile-fleece zip jacket, navy crewneck sweatshirt, charcoal cargo trousers, black lace-up lug-sole boots (one pair, upright) ✓ — side-stepping a puddle on wet cobbles.
  - 02 cobalt hooded half-zip anorak, grey ribbed turtleneck, black wide cargo-style trousers, black nylon crossbody ✓ — looking for keys at a doorway.
  - 03 rust hooded rain jacket, charcoal wool overshirt, cream crewneck knit, dark brown pleated wide trousers ✓ — steadying an umbrella (prop, not mapped).
  - 04 olive field jacket with stand collar (no hood), burgundy hoodie (the hood worn up), black relaxed jeans ✓ — locking a bicycle (bicycle/key not mapped).
  - 05 navy hooded shell, mustard pile fleece, slate crewneck sweatshirt, grey pleated trousers, navy ribbed beanie ✓ — pulling the hood up with a paper grocery bag (not mapped).
- Observed, unchanged (report only): the 02–05 outerwear product cuts carry a printed raindrop speckle from generation; 02 trousers are named "wide-leg" and the cut shows cargo flap pockets (the editorial is consistent with both). Names kept (section 5-1: report, don't rename).
- Reconstructions (producer `reconstruction` / `reconstructionNote`, kept in products.json, not shown as UI copy): garment backs, sleeves, hidden hems and waistbands. Only 01 footwear is visible, so no shoes/socks for 02–05. No brand, price, fibre composition, temperature or waterproof claim (`temperatureC`/`feelsLikeC` null, `isLiveMeasurement: false`).

## Mapping

- 5 looks `rn-chilly-m35-night-street-20261026-01`–`05`: `sky rain`, `rain normal`, `bands [chilly]`, `gender m`, `age "35"`, `style street`, `time evening`.
- 21 items `<look id>.<product id>` (5/4/4/3/5). App categories (existing codes only): outer, top (fleece/overshirt midlayers, 02 turtleneck, 04 hoodie), under (01/03/05 inner sweatshirt or knit, b164/b166 convention), bottom, shoes, bag, headwear (`hat`). Supplied `category` kept in products.json beside `appCategory`. `bg` `#F3EFE8`.
- Hero: first colour word of each title (CHARCOAL · COBALT · RUST · OLIVE · NAVY) → the outer in all five (01 charcoal cargo and 05 navy beanie lose to the larger garment, rule 3); cut = that product's own WebP, `lum` null, no new cutout. All 5 HERO/CUTS rows resolve to committed files.
- Runtime: b170 235 looks · 1456 items · 235 articles + 5 / 21 / 5 = 240 · 1477 · 240 (no ID collision).
- Selection (Python port of `lookFits` + the `lookPool` best-rank filter, outfits read from every look script in index.html order; the b164 day male street literals use string concatenation and are not parsed, which cannot affect evening pools): 300 cases (3 styles × 2 genders × day/evening × clear/cloudy/light/normal/pouring × 5 bands) — only 3 change: normal rain · evening · male · street at cold/chilly/cool, placeholder → these 5 looks. Light-rain evening male street keeps its rank-0 b161 looks; pouring stays a placeholder; day and dry evenings never see these looks.

## Copy

- Korean master used verbatim for deck (caption), tip, product names and all 21 product How to Wear; Korean title preserved in products.json `copy.title.ko` (the app title is the English uppercase title). Reviewed en/de used as supplied except:
  - Intros 03, 04, 05 contained production notes ("우산은 장면 소품이며 제품 목록에 포함하지 않습니다", "검정 진은 여유롭게 떨어지는 형태로 복원했습니다", "자전거와 열쇠는 제품이 아닌 장면 소품입니다", "종이봉투와 식료품은 장면 소품으로만 남깁니다" and their en/de equivalents). Per the handoff (keep reconstruction notes out of UI text) those sentences were removed; the remaining sentences are unchanged. Originals in `copy.sourceIntro`.
  - German: 03 intro `Dunkelbraune Hosen führen …` → `Die dunkelbraune Hose führt …`; 02 turtleneck and 03 cream knit notes `stauen` → `auftragen` (originals in `copy.sourceIntro` / `sourceHowToWear`).
- `pull` = supplied English pull (already uppercase, different per look). 63/63 product notes (21 × ko/en/de) are distinct; no note contains reconstruction wording. Deck/intro are scene sentences, not product-name lists.
- Kept as supplied, reported: 04 tip ends with "사진 속 레이어만으로 실제 방수 성능을 판단할 수는 없습니다" (a performance disclaimer, not a production note).

## Checks run

- READY.json hash/size of all 110 files; FORMAT_REPORT bounds vs decoded alpha (21/21 match).
- Focused script: look attributes, deck/tip/title/pull vs master, ko intro is a verbatim prefix of the master, ko/en/de presence, no production notes in UI copy, distinct notes, `bg`, every image path exists, HERO/CUTS rows, index.html script order (`…night-street-20261026.js?v=b171` right before `cutouts.js?v=b171`) and `BUILD = "b171"`, products.json sanitised and `mappingStatus: mapped`, category folder holds exactly 26 images + 5 products.json + README (no PNG).
- Loader frame identical to the b170 supplementary file (data lines aside).

## Not verified here

- No JS engine (node/jsc/JXA) or Pillow could be run in this session, so the app itself was not executed and screens (home, Today's Look sheet) were not rendered; check on device after deployment.
- Per-product user visual approval is not claimed (Codex producer review + Claude visual read).
