# b223 · Neutral urban · clear · chilly · male 35+ · day · minimal + street — validation

Batch `clear-chilly-male-day-20261114`, build b223, base `97898a6` (b222).

## Delivery
- READY.json 116 files: every SHA-256 and size re-read before import (0 mismatches). Authoritative: `originals/APP_MAPPING.json` and `originals/delivery/male-01…05/`. `READY.json`: `userApprovedEditorials` true, `individualProductHumanApproval` false (APPROVAL_INVENTORY: "01/04/05 originals with 02/03 v2").
- IDs: delivered `male-01`…`male-05` are batch-local; app outfits `neutral-clear-chilly-m35-day-minimal-20261114-01`, `-02` and `neutral-clear-chilly-m35-day-street-20261114-03`, `-04`, `-05` (batch number kept); items `<outfit>.<slug of the en name>`, producer IDs `m0N-p0N` kept in each products.json (`producerId`). No collision with the library (module throws on duplicates).
- Editorials: 5 × 1024×1536 JPG (291,564–298,759 B), bytes unchanged. Products: 40 × 500×500 WebP with VP8X alpha flag + ALPH chunk (≤ 49,736 B), bytes unchanged, every hash = READY.json. No PNG master, QA sheet or superseded editorial (02/03 v1) committed.
- Claude Code opened all 5 editorials and 40 products: each matches its spec and the photo. Report only (names kept): male-01 boots are cap-toe derbies in the photo, the product is plain-toe; male-03 sunglasses look squarer in the photo than the aviator product; male-04 white tee is a partial-visibility reconstruction (only the hem shows, `evidence: partially-visible-reconstructed`).
- Mapping: clear · chilly · m · "35" · day (no `time`) · `visualRegion: neutral-urban` · `contextReview: reviewed` · humidity unknown · `climateContext.temperatureC` null · `feelsLikeC` 7 (styling setting, not a measurement). Categories as delivered: outer/top/bottom/shoes/headwear/scarf/eyewear/socks, male-04 `under` — all existing CAT_LABEL keys. `bg` `#F3EFE8` only.
- Copy (IMAGE_MAPPING_HANDOFF 5-1): titles, bodies (= intro), product names and the 40 how-to-wear notes are the producer copy / Korean master verbatim (40 distinct per language). The delivery had no deck, pull or tip: Claude Code wrote deck (ko/en/de scene line), pull (EN caps) and tip (ko/en/de) from the editorials. Checks: deck ≠ intro, pull ≠ title, tips distinct and ≠ any note, deck+intro contain at most one en product name (male-04 intro names the puffer once).
- Heroes (b134 title word): 01 CHARCOAL → coat, 02 CHOCOLATE → coat, 03 OLIVE → parka, 04 COBALT → puffer, 05 RUST → scarf; cut = the product WebP itself, `lum` null (unused since b137). HERO/CUTS rows in `look/cutouts.js`; every article look in the runtime has a hero with a cut.

## Selector
- index.html selector code unchanged (only BUILD and two script tags); `look/global-context.js` unchanged.
- node, jsc and JXA could not be run in this session; the b222 selector (`lookFits`/`lookPool` + `ranks`/`allowed`) was ported to Python and run with and without the new module: 7,560 cases (9 bands × 14 WMO codes × day/evening × m/f × 3 styles × 5 regions). Existing candidates (fit, sky rank, wn, rr) unchanged in every case. New looks are candidates only for male · day · street/minimal · chilly/cold/cool and are best-sky only on clear codes 0–2; pools changed only there, in unknown, neutral-urban and east-asian-urban places.
- Share in the top 3 (clear chilly male day, 2,000 seeds): minimal unknown 0.82 / european-urban 0.00 / east-asian 2.00 / neutral 2.00 / coastal 0.00; street 1.10 / 0.00 / 3.00 / 3.00 / 0.00.
- **European-urban places (Berlin found by city search, country code DE) do not show these looks**: the documented rank rule puts region-unknown Berlin looks at 0 and reviewed neutral-urban looks at 1, and each cell has 5 exact Berlin looks. Changing that is a selection-policy decision left to the user.
- Python port limit: the literal parser skips the 5 rain-normal male street looks built by a helper function (rain cells only, irrelevant to clear days).

## Not done here
- No browser render (no headless browser runnable in this session); live Pages verification is reported with the publication.
