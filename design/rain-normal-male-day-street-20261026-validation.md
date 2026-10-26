# Rain / Normal / Chilly / Male / 35+ / Day / Street — 2026-10-26 set — b164 verification

- Delivery order (user, 2026-10-26): the user explicitly authorized this approved batch's integration, publication to `origin/main` and actual web-app delivery (direct-main watcher flow, `IMAGE_INBOX_HANDOFF.md`). Archiving the originals to iCloud and deleting verified local originals is the parent task's job after independent deployment verification. **None of that happened in this step**; the outbox batch was not moved or modified.
- Source: local outbox batch `rain-normal-chilly-male-day-street-20261026`. READY.json has `approved: true` and `products_complete: true`. All 99 listed files match their SHA-256; none missing, none unlisted (READY.json itself is outside the list).
- Approval basis: editorials approved by the user; the 23 products were made and reviewed under the user's end-to-end workflow authorization. No separate per-product user visual approval is claimed, and none is claimed for the how-to-wear lines.
- Copied byte for byte (by the parent task, from the target products.json mapping; re-hashed here): `NN/editorial.jpg` (5) and `NN/products/*.webp` (23), renamed `NN-<app category>.webp`. The delivered name is in `deliveredImage`; each `sha256` matches both READY.json and the committed file.
- Not committed (archive-only): editorial PNG masters, product PNG masters (`product-breakdown/originals/`), `PROMPTS.md`, `VERIFICATION.json`, `PLAN.json`, `CHECKS.json`, `VISUAL_REVIEW.md`, `progress/`, `bulk_finish.py`, review sheets, READY.json, and the root `NN-editorial.jpg` duplicates (same bytes as `complete/NN/editorial.jpg`).

## Visual inspection (every file opened with Read and viewed)

| Look | Editorial (1024×1536 JPG) | Products (500×500 transparent WebP) | Matches metadata |
| --- | --- | --- | --- |
| 01 | Man stepping around a puddle by a green door, 296,057 B | charcoal hooded rain parka · oatmeal fleece zip · navy crewneck sweatshirt · charcoal cargo trousers · black lace-up lug boots (pair) | yes |
| 02 | Man in a cobalt hooded jacket reaching into a black crossbody, 292,716 B | cobalt hooded rain jacket · charcoal melange scarf · black wide-leg trousers · black crossbody bag | yes |
| 03 | Man under a black umbrella, rust jacket held closed, 292,123 B | rust hooded rain jacket · charcoal button overshirt · cream crewneck knit · dark brown trousers · black umbrella | yes |
| 04 | Man in an olive shell locking a bicycle, 298,156 B | olive hooded rain shell · burgundy hoodie · black straight-leg jeans · black chunky boots (pair) | yes; see boots note |
| 05 | Man in a navy shell and beanie at a grocery door, back view, 284,317 B | navy hooded rain shell · mustard fleece zip · grey crewneck sweatshirt (hem only, inferred) · navy ribbed beanie · grey relaxed trousers | yes |

- Delivered review sheets (white/black/grey/app navy) viewed: every product whole, no matte rectangle, halo or clipped edge.
- Decoded pixels (AppKit via JXA, repo copies): all 23 are 500×500 with alpha, all four corners alpha 0, no opaque pixels on the border, transparent share 0.44–0.69.
- Note (not changed, reported): the 01 and 04 boot renders are near-identical (different files and hashes). Both editorials show black lace-up lug boots.
- Scene props, not products: 04 bicycle and lock, 05 paper grocery bag. Shoes/socks hidden by the crops of 02, 03 and 05 were not added; socks are not visible in 01 or 04.

## Mapping

- `look/rain-normal-male-day-street-20261026.js` (before `look/cutouts.js`). Looks `rn-chilly-m35-day-street-20261026-01`–`05`: `sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: street`, no `time` key (day). Items `<look>.NN-<cat>` in delivery order, `bg` `#F3EFE8`. No ID or path with `rn-chilly-m35-day-street` or `Rain/Normal/Chilly/Male/35+/day/street` existed before.
- Categories (live `CAT_LABEL`, no new codes): delivered `midlayer` (fleece zips, button overshirt) → `top`; the delivered `top` worn under a midlayer in the same look (01 navy sweatshirt, 03 cream knit, 05 grey sweatshirt) → `under`; 04 hoodie (no midlayer) → `top`; `hat` → `headwear`; `umbrella` → `accessory` (calendar rain rule `["accessory", /우산/]`). Delivered `category` kept, app category in `appCategory`.
- Copy:
  - Korean title, caption, intro and all product names are the delivered master, byte for byte (`deck.ko`, `article.intro.ko`, `name.ko`, products.json `copy.ko`).
  - The delivered product how-to-wear was mostly cross-look template sentences: 5 sentences used 19 times (the outer line in all 5 looks). Under §5-1 they were replaced by per-product ko/en/de lines written from the editorials; the 4 product-specific delivered Korean lines (02 scarf, 02 bag, 03 umbrella, 05 beanie) were kept verbatim.
  - The parent task (Korean creative owner) reviewed all 23 lines against the editorials and accepted them as the revised Korean master (`automation/state/rain-normal-chilly-male-day-street-20261026-COPY_REVIEW.json`). One exaggeration fixed in all languages: 05 shell, "a hand's width" of fleece → "a little". Runtime `note` and products.json `howToWear` equal that file exactly. Every delivered line is kept untouched in `sourceHowToWear`.
  - en/de caption and intro are translations of the Korean master (delivered en/de captions added items the Korean does not mention, e.g. 02 trousers).
  - Display titles are the supplied English titles. New uppercase pull lines from the scenes: LONG STRIDE, SMALL GRIN. · THE KEYS ARE IN HERE SOMEWHERE. · IS IT EASING OFF? · LOCKED UP, HOOD UP. · HOOD ON, GROCERIES IN. No `tip`: the Korean master has none and none was invented.
  - 02 bag line keeps the delivered disclaimer that water resistance is unverified; no brand, price, link, fibre, waterproof or temperature claim anywhere.
- Hero (b134 title-word rule): 01 A STEP AROUND THE PUDDLE (PUDDLE is a weather word, no match) → parka; 02 COBALT → cobalt jacket; 03 RUST → rust jacket; 04 OLIVE → olive shell; 05 MUSTARD → mustard fleece (`02-top`). Each cut is that product's own WebP (no new cutout, no copy); HERO and CUTS 5 rows each, `lum` null (unused since b137).
- Casting: model appearance 28–32, audience 35+. `temperatureC`/`feelsLikeC` null, `isLiveMeasurement: false`.

## Checks

- Content gate (`python3 -I`, scratch scripts): 28 repo files re-hashed = READY.json = products.json `sha256`; WebP VP8X 500×500 with alpha flag, ≤ 50,000 B; editorial JPEG 1024×1536 ≤ 300,000 B; Korean master and names unchanged vs delivery; `sourceHowToWear` = delivered `howToWear`; runtime notes = copy review in ko/en/de; 23 unique notes per language; deck/intro list < 2 product names; no `/Users` paths; no byte-duplicate of these images elsewhere under `look/`.
- Runtime (macOS JavaScriptCore via `osascript -l JavaScript`, all 18 look scripts in `index.html` order, `node` is not installed): 210 looks, 1324 items, 210 article looks, 210 heroes with a cut (+5 looks, +23 items vs. without the new script). Every new look/item has ko/en/de, `#` bg, existing image file; no library editorial missing. This replaces `tools/make-cutouts.py --check`, which needs `node` (missing cutouts: 0 from the hero count).
- Selection regression: the page's own `BANDS`, `isRain`, `rainLevel` and `lookFits` source evaluated with and without the new script; 336 cases (bands cold/chilly/cool/pleasant × dry clear/cloudy, light 61, normal 63/66/81, pouring 65 × day/evening × 3 styles × m/f) compared on the lookPool outcome (placeholder vs best-fit set). Only 9 changed, all normal-rain · day · street · male, placeholder → these 5 looks (chilly, and the neighbouring cold/cool bands by the existing one-band rule). Light rain, pouring, evening, dry days, other styles and women are unchanged.
- Rendering: not done — no browser tooling is available in this environment. A device check of home and the sheet under normal-rain daytime weather is still needed.
- Diff scope: `index.html` (new `<script>` before cutouts.js, `cutouts.js?v=b164`, BUILD b163 → b164), `look/cutouts.js` (5 CUTS + 5 HERO rows), docs (`CLAUDE.md`, `IMAGE_MAPPING_HANDOFF.md`, `look-library.md`, `look-coverage.md`, this file); everything else new. No existing image, look script or record modified.
