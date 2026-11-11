# b217 · European urban · snow · cold · male · day · street — validation

Batch `european-urban-snow-cold-male-day-street-picsart-20261111`, build b217, base `d35333c784f50a956fb56bd4812a792f36ac9cce` (b216).

## Delivery
- READY.json 169 files, all SHA-256 and sizes re-read before import (0 mismatches); the source folder `output/european-urban-snow-cold-male-day-street-20261111/picsart` is byte-identical (169/169). Authoritative: `originals/APP_MAPPING.json`, `PRODUCT_COPY.json`, `EDITORIAL_COPY.json`, `originals/product-batch/complete/`.
- Editorials: 5 Picsart images (PICSART_RESULTS.json, PROMPTS.json against output/IMAGE_STYLE.md), explicitly approved by the user for this batch. 1024×1536 JPG ≤ 299,567 B. Producer note: look 03 clips the fingertips of the outstretched arm at the right edge; head and boots are visible in all five.
- Products: 30 (6/6/6/6/6), built-in image_gen, 500×500 true-alpha WebP ≤ 49,512 B, bytes unchanged, every hash = TECHNICAL_QA. Producer four-background visual QA pass; no individual human product approval. One superseded master (multi-item first candidate) is archive-only.
- Copy: delivered ko/en/de title/deck/intro/body/pull/tip and product name/description/how-to-wear used verbatim (30 distinct notes per language, 5 distinct tips). App title = en title uppercased, pull = en pull, body only in committed `copy.body`.
- Categories: delivered `category` kept (outer/top/bottom/headwear/scarf/bag/shoes); `gloves` → `hands` (no `gloves` CAT_LABEL key; b160), `producerCategory` keeps `gloves`. The oatmeal cardigan in 05 is delivered as `top` and kept.
- Heroes (b134 pick, no override): 01 SNOW ON THE SLEEVE → quilted jacket (no word match, outer), 02 BLUE → deep blue fringe scarf, 03 → shearling-style jacket (outer), 04 CUFF → rib-cuff mittens, 05 → fleece-collar work jacket (outer). Cut = product WebP itself, no new image.
- Not measured: temperature, feels-like, humidity, wind. Snow is "moderate falling snow depicted".

## Selector
- No code change. The selector functions (`isSnow`, `isRain`, `rainLevel`, `softRanks`, `regionOk`, `lookFits`, `skyAvailable`, `lookPool`, `seeded`) are byte-identical to b216; only the look module tag, `cutouts.js?v=` and `BUILD` changed in index.html.

## Checks
- JavaScriptCore, real functions over all 28 WMO codes × 9 bands × day/evening × m/f × 3 styles × 5 regions × 3 humidity: 45360 cases. Expectation from the requirement: male snow looks iff snow code, european-urban, m, street, day, cold/chilly (36 cases, all 3 draws male snow); b216 female snow eligibility kept (36 cases, female snow only); every other case has identical candidates, fits and ranks to base (36 pools changed, all in scope); 270 snow-day cells for other styles/genders equal base.
- Direct examples: snow 73 cold day male → ['eu-snow-cold-m-day-street-20261111-02', 'eu-snow-cold-m-day-street-20261111-05', 'eu-snow-cold-m-day-street-20261111-01']; chilly → ['eu-snow-cold-m-day-street-20261111-01', 'eu-snow-cold-m-day-street-20261111-04', 'eu-snow-cold-m-day-street-20261111-03']; very cold → ['SOON']; cool → ['oc15-10-street-m', 'oc15-06-street-m', 'oc-chilly-m-35-day-street-02']; evening → ['ocn-07-street-m', 'ocn-10-street-m', 'ocn-09-street-m']; female snow 73 cold → ['eu-snow-cold-f-day-street-20261110-01', 'eu-snow-cold-f-day-street-20261110-03', 'eu-snow-cold-f-day-street-20261110-05']; code 3 cold male → ['oc15-07-street-m', 'oc-chilly-m-35-day-street-03', 'oc15-10-street-m']; snow 73 coastal → ['SOON']; neutral-urban → ['oc15-07-street-m', 'oc-chilly-m-35-day-street-03', 'oc15-10-street-m'].
- Headless Chrome end-to-end: 30 scenarios with a fake Open-Meteo forecast, each on the worktree and on the base with the same fixed random: male current codes 71/73/75/77/85/86, 0/2/3/45/48/51/61/63/65/80, chilly, very cold, cool, evening; female snow cold/chilly/evening and cloudy; east-asian, coastal, neutral-urban, unknown region; calendar days snow cold, cloudy cold, rain chilly, clear cold, snow cool, snow very cold, snow chilly. Male snow looks exactly in scope, female snow cards kept, base-equal everywhere else; 0 page errors.
- Runtime 401 looks · 2314 items (59 look scripts); existing looks and items unchanged; 35 image hashes on disk; 2,831 previously tracked images unchanged; no PNG committed.
- 15 localized article renders (5 looks × ko/en/de), all 30 product images load, 0 page errors.

## Limits
- Snow looks exist only for european-urban · cold/chilly · day · street (female b216, male b217). Other snow cells keep the pre-b216 choice (cloudy sets or COMING SOON).
- Places without a country code are region unknown; coastal European cities are warm-coastal-urban; neutral-urban places don't draw these looks.
- Snow evenings use the evening looks (b81); these day looks never show in the evening.
