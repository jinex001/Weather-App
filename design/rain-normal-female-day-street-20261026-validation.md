# Rain / Normal / Chilly / Female / 35+ / Day / Street — 2026-10-26 set — b166 verification

- Delivery order (user, 2026-10-26): the user explicitly authorized this single approved batch's integration, publication to `origin/main` and actual web-app delivery (direct-main watcher flow, `IMAGE_INBOX_HANDOFF.md`). Archiving the originals to iCloud and deleting verified local originals is the parent task's job after independent deployment verification. **None of that happened in this step**; the outbox batch was not moved or modified.
- Source: local outbox batch `rain-normal-chilly-female-day-street-20261026`. READY.json has `approved: true`, `editorialsApproved: true`, `products_complete: true`. All 116 listed files match their SHA-256 and size.
- Approval basis: editorials approved by the user; the 25 products were made and reviewed by the producer (Codex) under the user's authorization. No separate per-product user visual approval is claimed.
- Copied byte for byte from `originals/product-breakdown/complete/NN/`: `editorial.jpg` (5) and `products/*.webp` (25), renamed `NN-<app category>.webp`. The delivered name is in `deliveredImage`; each `sha256` matches READY.json, the delivered products.json and the committed file.
- Not committed (archive-only): editorial PNGs (`originals/*.png`, `original-age35-40/`), product PNG masters (`complete/masters/`), prompts, `generation/`, journal, `bulk_finish.py`, `BREAKDOWN.json`, `VALIDATION.json`, `VISUAL_REVIEW.json`, review sheets, READY.json, workflow/style copies.

## Visual inspection (every file opened with Read and viewed)

| Look | Editorial (1024×1536 JPG) | Products (500×500 transparent WebP) | Matches metadata |
| --- | --- | --- | --- |
| 01 | Woman stepping around a puddle on wet cobbles, hood held, 298,886 B | stone beige hooded raincoat · oatmeal turtleneck · charcoal wide-leg trousers · black lug-sole ankle boots (pair) · black shoulder bag | yes |
| 02 | Woman in a cobalt hooded jacket searching her crossbody for keys at a door, 288,773 B | cobalt hooded rain jacket · grey turtleneck · black technical trousers · black crossbody bag | yes |
| 03 | Woman under a black umbrella, rust jacket held closed, gold hoop visible, 280,129 B | rust hooded rain jacket · charcoal padded midlayer · cream crewneck knit · dark brown wide-leg trousers · black umbrella · small gold hoops (pair) | yes |
| 04 | Woman in an olive hooded jacket unlocking a bicycle, backpack on, 284,472 B | olive hooded field jacket · burgundy hoodie · black loose jeans · black ankle boots (pair) · black backpack | yes |
| 05 | Woman in a navy raincoat and beanie leaving a shop with a paper bag, back view, 270,100 B | navy hooded raincoat · mustard fleece · slate grey knit · grey loose trousers · navy ribbed beanie | yes |

- Delivered review sheets (black, app ivory) viewed: every product whole, no matte rectangle, halo or clipped edge.
- Decoded alpha (pure-Python VP8L decoder of each WebP `ALPH` chunk — no Pillow/node/browser here; decoder checked by rendering the alpha planes of 01 coat and 03 hoops, which match the silhouettes): all 25 are VP8X 500×500 with an alpha chunk, all four corners alpha 0, every border pixel alpha 0, coverage 11–57 %. Sizes 19,394–49,566 B (all ≤ 50 KB).
- Notes (reported, not changed): 03 padded midlayer reads near-black in the editorial (named charcoal); 01 boots render as Chelsea boots, consistent with the editorial; 05 coat front and slate knit are mostly hidden by the back-view pose and are reconstructions.
- Scene props, not products: 02 keys, 04 bicycle/lock/key, 05 paper grocery bag. The black umbrella and gold hoops are delivered accessories and are mapped.

## Mapping

- `look/rain-normal-female-day-street-20261026.js` (before `look/cutouts.js`). Looks `rn-chilly-f35-day-street-20261026-01`–`05`: `sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: f`, `age: "35"`, `style: street`, no `time` key (day). Items `<look>.NN-<cat>` in delivery order, `bg` `#F3EFE8`. No ID or path with `rn-chilly-f35-day-street` or `Rain/Normal/Chilly/Female/35+/day/street` existed before.
- Categories (live `CAT_LABEL`, no new codes): delivered `midlayer` → `top`; the delivered `top` under it (03, 05) → `under`; `umbrella` → `accessory` (calendar rain rule `["accessory", /우산/]`); `jewelry` → `jewelry`; `hat` → `headwear`.
- Copy:
  - Korean master byte for byte: `titleKo` → `deck.ko` (the app's display title is the English uppercase `article.title`, so the Korean title is shown as the caption), `introKo` → `article.intro.ko`, `wearingGuideKo` → `article.tip.ko`, `nameKo` → `name.ko`.
  - en/de caption, intro and tip re-translated idiomatically from the Korean master without adding facts (delivered en/de kept in products.json `copy.sourceCopy`).
  - Delivered product `description*` were one reconstruction template per product ("…의 에디토리얼 기반 제품 복원 이미지…") — §5-1 fail, so per-product how-to-wear ko/en/de was written from the editorials (`note`, products.json `howToWear`); delivered lines kept in `sourceDescription`. 25 unique notes per language.
  - German names: `Anthrazitfarbene Steppzwischenlage` → `Anthrazitfarbene Steppjacke`, `Senfgelbe Fleecezwischenlage` → `Senfgelbe Fleecejacke` (same item, idiomatic; `sourceName` keeps the delivered names). All other names as delivered.
  - New English titles: BEIGE OVER THE PUDDLE · COBALT AT THE FRONT DOOR · RUST UNDER THE UMBRELLA · OLIVE AT THE BIKE RACK · MUSTARD ON THE WAY OUT (German versions in `copy.de.title`, not shown by the app). Pull lines from the scenes: NOT TODAY, PUDDLE. · THEY WERE HERE A SECOND AGO. · STILL COMING DOWN? · ONE MORE TURN OF THE KEY. · BREAD FIRST, HOOD SECOND.
- Hero (b134 title-word rule): 01 BEIGE → stone beige raincoat, 02 COBALT → cobalt jacket, 03 RUST → rust jacket, 04 OLIVE → olive jacket, 05 MUSTARD → mustard fleece (`02-top`). Each cut is that product's own WebP (no new cutout); HERO and CUTS 5 rows each, `lum` null (unused since b137).
- Casting: audience 30–44, model appearance 25–28, storage age group 35+. `temperatureC`/`feelsLikeC` null, `isLiveMeasurement: false`.

## Checks

- Runtime (macOS JavaScriptCore `jsc`, all 19 look scripts in `index.html` order; `node` is not installed): 215 looks, 1349 items, 215 article looks (+5 / +25 / +5 vs. without the new script). Every new look/item has ko/en/de, `#` bg, an existing image file whose hash matches the delivery; every article look in the library has a hero with a cut (missing cutouts: 0 — replaces `tools/make-cutouts.py --check`, which needs `node`); no duplicate outfit IDs; deck/intro contain < 2 product names; deck ≠ intro.
- Selection regression: the page's own `rainLevel` and `lookFits` source evaluated with and without the new script; 468 cases (3 styles × m/f × day/evening × codes 0, 2, 3, 45, 51, 61, 80, 63, 66, 81, 65, 82, 95 × bands cold/chilly/cool) compared on the lookPool outcome (placeholder vs best-fit set). Only 9 changed, all normal-rain (63/66/81) · day · street · female: placeholder → these 5 looks (fit 0 in chilly; neighbouring cold/cool bands at fit 2 by the existing one-band rule). Light rain, pouring, evening, dry days, other styles and men are unchanged.
- Rendering: not done — no browser tooling is available in this environment. A device check of home and the sheet under normal-rain daytime weather is still needed.
- Diff scope: `index.html` (new `<script>` before cutouts.js, `cutouts.js?v=b166`, BUILD b165 → b166), `look/cutouts.js` (5 CUTS + 5 HERO rows), docs (`CLAUDE.md`, `IMAGE_MAPPING_HANDOFF.md`, `look-library.md`, `look-coverage.md`, this file); everything else new. No existing image, look script or record modified.
