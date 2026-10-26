# Validation · b169 · Rain / Normal / Chilly / Male / 35+ / day / Running — 2026-10-26 set

Batch `rain-normal-chilly-male-day-running-20261026` (local outbox, `product-breakdown/delivery/01-running`–`05-running` only).

## Source and scope

- READY.json: `approved: true`, `products_complete: true`, category `Rain/Normal/Chilly/Male/35+/day/running`, 5 editorials, 27 products. All 124 listed files match their SHA-256 and byte size.
- Committed: 5 `editorial.jpg` + 27 product WebP (renamed `NN-<app category>.webp`; `06-cap` → `06-headwear`; bytes unchanged), 5 sanitized `products.json` (no prompts, no local `generationSource`/`masterSource` paths), `look/rain-normal-male-day-running-20261026.js`, 5 HERO + 5 CUTS rows in `look/cutouts.js`, BUILD b169 and cache keys in `index.html`.
- Not committed: root `NN-editorial.jpg/.png`, `complete/masters/*.png`, QA four-background sheets, PROMPTS.md, generation journal, `bulk_finish.py`.
- The outbox was only read; nothing was moved, changed or deleted. iCloud archiving and local cleanup are left to the parent task.

## Images

- SHA-256 of all 32 committed image files equals the delivery file and the READY.json entry (0 mismatches).
- Editorials: baseline JPEG 1024×1536, 272,946–292,394 B (≤300,000 B).
- Products: RIFF/WebP `VP8X` (alpha flag set) + `ALPH` (VP8L-compressed, no filter) + `VP8`, 500×500, 11,908–49,264 B (≤50,000 B). Alpha planes decoded with a pure-Python VP8L decoder (no Pillow/sips/node/jsc/JXA permitted in this session): all 27 have alpha 0 at the four corners and on the whole 1-px border; silhouettes are inset (bounding boxes 30–469 px), none cropped.
- Visual review (Claude opened every editorial and every product with the image viewer):
  - 01 slate blue hooded shell, charcoal zip-neck base, black tights with silver thigh/calf bars, light grey crew socks, silver mesh trainers ✓ (puddle splash, leafy pavement).
  - 02 sage hooded shell with chest reflector, ivory crewneck base, charcoal tights with curved knee seams, grey socks, off-white mesh trainers ✓ (tying a lace on a stone ledge).
  - 03 cobalt hooded shell with chest zip and forearm reflectors, dark charcoal crewneck, black tights with thigh bar, dark socks, black/grey trainers ✓ (holding the hood while running).
  - 04 warm grey shell with forearm reflector, burgundy base, espresso tights, charcoal socks, grey trainers, black round sports watch ✓ (checking the watch).
  - 05 burnt orange shell (back view, forearm and back stripes), black tights with calf reflector, grey socks, dark grey trainers, navy cap ✓ (crossing in the rain); graphite base layer is fully hidden.
- Uncertainty (AI styling reconstructions, not observed facts): 05 base layer fully inferred; 05 shell front reconstructed; small reflective stripes on socks and base-layer cuffs are inferred design details; hidden torsos, sleeves, sock feet and shoe fronts in 02–05 are conservative reconstructions (per producer `evidence`/`restorationNote`). 03 trainers follow the dark shoe in the final photo. Brands, prices, fibre composition, waterproof ratings and temperatures are not claimed (`temperatureC`/`feelsLikeC` null, not a live measurement).
- Scene props, not products: cars, bicycles, leaves. The thin black band on the 05 wrist was not produced as a product (not in the batch).

## Mapping

- 5 looks `rn-chilly-m35-day-run-20261026-01`–`05`: `sky rain`, `rain normal`, `bands [chilly]`, `gender m`, `age "35"`, `style run`, no `time` key → day only. `rain normal` = WMO 63 · 66 · 81; light and pouring rain keep their own sets / placeholder.
- 27 new items `…-NN.MM-<cat>` (5/5/5/6/6): outer, top, bottom, socks, shoes, watch, headwear — all existing app categories. `bg` `#F3EFE8`.
- Hero: each look's shell (05 title ORANGE names the shell colour; 01–04 titles name no colour), cut = that product's own WebP, `lum` null, no new background extraction. Every HERO row in `cutouts.js` resolves to an existing file (missing cutouts: 0).
- No ID or path collision with existing content (searched all look scripts; target folder did not exist).
- Runtime (Python decode of every look script's literals in index.html order, merged by id like the scripts): b168 225 looks · 1393 items · 225 articles (matches the documented b168 count) → b169 230 · 1420 · 230.
- Selection regression (Python port of `lookFits` + the best-sky-rank/placeholder rule of `lookPool`): 240 cases (dry clear/cloudy, light/normal/pouring rain × day/evening × bands cold/chilly/cool/comfortable × m/f × 3 styles). Changed: only normal rain · day · male · running for bands cold/chilly/cool (placeholder → these 5 looks). Evening, other rain strengths, dry days, women and other styles unchanged.

## Copy

- Korean master verbatim: look `title.ko` → `deck.ko`, look `howToWear.ko` → `article.intro.ko`, product `nameKo`. Supplied en/de title and howToWear used verbatim except one German fix: 05 intro `Kombiniere die orange Jacke` → `Kombiniere die orangefarbene Jacke` (original in `copy.sourceCopy`).
- `article.title` = supplied English title in uppercase. `pull` written from each scene (STEP LIGHT, SPLASH ANYWAY. · ONE KNOT, THEN BACK TO IT. · HOOD UP, PACE ON. · TEN SECONDS FOR THE NUMBERS. · LOOK TWICE, THEN GO.). No `tip`: the batch supplies none; the intro's second sentence already carries the safety advice.
- Product descriptions in the batch are one template sentence per product ("… — 에디토리얼 기준의 스타일링 복원 이미지 …"), which fails section 5-1 → 27 per-product How to Wear notes written from the editorials in ko/en/de (`sourceDescription` keeps the originals). All 27 notes are unique in each language; no deck/intro lists two or more product names.

## Not verified here

- Screen rendering (home, Today's Look sheet, calendar card) was not run: no browser/node/jsc permitted in this session. Check on a device after deployment.
- Per-product user visual approval is not claimed (Codex agent review under user workflow authorization; Claude also viewed all files).
