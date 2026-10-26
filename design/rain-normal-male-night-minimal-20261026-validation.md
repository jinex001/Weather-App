# Validation · b167 · Rain / Normal / Chilly / Male / 35+ / night / Minimal — 2026-10-26 set

Batch `rain-normal-chilly-male-night-minimal-20261026` (local outbox, `delivery-v2` only; the earlier `delivery/` export is an incomplete attempt and was not used).

## Source and scope

- READY.json: `approved`, `editorialsApproved`, `products_complete`, category `Rain/Normal/Chilly/Male/35+/night/minimal`, 103 listed files, all SHA-256 and byte counts match, no unlisted files besides READY.json itself.
- Committed: 5 `editorial.jpg` + 21 product WebP (renamed `NN-<app category>.webp`, bytes unchanged), 5 sanitized `products.json` (no local master/generation paths), set README, `look/rain-normal-male-night-minimal-20261026.js`, 5 HERO + 5 CUTS rows in `look/cutouts.js`.
- Not committed (archive-only): editorial PNGs, `masters/`, `generation/`, PROMPTS.md, QA sheets, FORMAT_CHECKS/VISUAL_REVIEW/PRODUCT_INVENTORY/SOURCE_INDEX/WEARING_COPY JSON, `bulk_finish.py`, READY.json, `delivery/`.
- Source files were only read; nothing in the outbox was moved, changed or deleted.

## Images

- Editorials: all JPEG 1024×1536, 235,073–298,229 B (≤300 KB).
- Products: all RIFF/WebP `VP8X` + `ALPH` (lossless-compressed alpha) + `VP8`, 500×500, 11,824–49,880 B (≤50,000 B); SHA-256 and bytes equal products.json and READY.json.
- Alpha decoded with a pure-Python VP8L decoder (no Pillow/node/browser allowed here): for all 21, the four corners and every border pixel are alpha 0, and the decoded alpha bounds equal the producer's recorded `bounds` exactly. Interior alpha is ~253 (≈99 % opaque), the same as the PNG master (decoded with zlib: 253 is the dominant value there too) — a property of the source, visually negligible.
- Visual review (each editorial and product opened): 01 charcoal mac open over grey crewneck, black trousers, black Chelsea boots, black leather gloves ✓ · 02 stone beige balmacaan, espresso crewneck, dark brown fringed scarf worn long, taupe trousers ✓ · 03 ink navy hooded raincoat, cobalt ribbed knit, charcoal pleated trousers, black crossbody worn in front ✓ · 04 deep olive hooded coat, oatmeal high-neck knit, dark charcoal trousers, black ankle boots ✓ · 05 black rain coat (back strap visible in the editorial), rust fringed scarf, cream knit (cuff only), black trousers (crop) ✓.
- Notes, no regeneration needed: 03 knit neck reads higher than the crewneck product because the head is tilted down; colour, rib and cuffs match and the name claims no neckline. 04 editorial neck is a soft high/rolled neck, product is a mockneck (name "목넥"). 04 boot side zips and 05 coat front are inferred. 05 coat product shows rain droplets printed on the fabric (as in the wet editorial).

## Mapping (JavaScriptCore `jsc`, index.html scripts in order, 20 scripts)

- Runtime 220 looks · 1370 items · 220 article looks (before: 215 · 1349). No duplicate outfit IDs; new item IDs `rn-chilly-m35-night-min-20261026-NN.NN-<cat>`.
- New looks: `sky rain`, `rain normal`, `time evening`, `style minimal`, `gender m`, `age "35"`, `bands [chilly]`. Categories outer/top/bottom/shoes/hands/scarf/bag (all existing; gloves → `hands`). `bg` `#F3EFE8`.
- Every image path of the whole library exists on disk (0 missing). Each new look has title, deck, intro, pull, tip, ko/en/de names and notes; no repeated note inside a look or across the set; no deck/intro (en) with two or more product names verbatim.
- Hero (b134 title word): 01 `01-outer`, 02 `01-outer`, 03 `02-top` (COBALT), 04 `01-outer`, 05 `02-scarf` (RUST); cut = that product's WebP. `tools/make-cutouts.py --check` could not run (needs `node`, not installed); the jsc check confirms each hero has a HERO row and an existing cut file.
- Selection regression with the app's own `rainLevel`/`lookFits` source: 384 cases (codes 0 · 3 · 61 · 63 · 66 · 81 · 65 · 95 × bands cold · chilly · cool · pleasant × day/evening × 3 styles × m/f). Changed: 9 — exactly normal rain (63 · 66 · 81) × evening × male × minimal × cold/chilly/cool, placeholder → these 5 looks (3 drawn at random). Nothing else changed.

## Copy

- Korean master verbatim: title (kept in products.json, app title is English uppercase), caption → `deck.ko`, intro, tip, product names, per-product how-to-wear (all distinct and matching the editorials).
- en/de: supplied text kept, except 02 intro en/de (was a bare product list, IMAGE_MAPPING_HANDOFF 5-1) re-translated from the Korean, 02 tip en/de closer to the Korean ("펼쳐 말려"), and German grammar/wording fixes (01 intro/tip, 01 grey knit, 02 espresso knit, 03 intro, 04 intro, 05 deck/intro, rust scarf, cream knit). Delivered lines kept in `copy.sourceCopy` / `sourceHowToWear`.
- `pull` written from each scene (supplied set had none).

## Not verified here

- Screen rendering (no browser in this environment) — check on a device.
- Per-product user visual approval is not claimed (producer review only).
