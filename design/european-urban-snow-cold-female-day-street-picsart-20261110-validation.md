# b216 · European urban · snow · cold · female · day · street — validation

Batch `european-urban-snow-cold-female-day-street-picsart-20261110`, build b216, base `e5cfe6ff0dfa9c8b743212e68bf3148a2fecc879`.

## Delivery
- READY.json 170 files, all SHA-256 and sizes re-read before import (0 mismatches). Authoritative: `originals/APP_MAPPING.json`, `PRODUCT_COPY.json`, `EDITORIAL_COPY.json`, `originals/product-batch/complete/`.
- Editorials: 5 Picsart images selected by the user for this batch and used as-is (earlier feedback: styling looked aloof; no correction claimed). 1024×1536 JPG ≤ 297,734 B.
- Products: 31 (6/6/7/6/6), built-in image_gen, 500×500 true-alpha WebP ≤ 49,704 B, bytes unchanged, every hash = TECHNICAL_QA. Producer four-background visual QA pass; no individual human product approval.
- Copy: delivered ko/en/de title/deck/intro/body/pull/tip and product name/description/how-to-wear used verbatim (31 distinct notes per language, 5 distinct tips). App title = en title uppercased, pull = en pull, body only in committed `copy.body`.
- Products had no `category` key: per-ID table — puffers/jacket/parka `outer`, knits/fleece `top`, trousers/jeans/cargos `bottom`, knit hood (balaclava)/beanie `headwear`, scarves and the lime neck warmer `scarf`, hoops `jewelry`, boots `shoes`, boot socks `socks`, shoulder bag `bag`; `producerCategory` keeps the kind.
- Heroes (b134 pick): 01 COBALT → cobalt knit hood, 02 RED → red zip fleece (rule 3, top before beanie), 04 SCARF → heather gray scarf, 05 LIME → lime neck warmer. 03 BURGUNDY: exact-word port picks the burgundy bag; rule 3 override → oxblood shearling jacket (same colour, bigger piece; checked on the overview sheet). Cut = product WebP itself, no new image.
- Not measured: temperature, feels-like, humidity, wind. Snow is "moderate falling snow depicted".

## Snow selector (index.html, smallest change)
- Before b216 `lookFits` knew clear/cloudy/rain only: a snow code (71–77, 85, 86) was read as a dry cloudy day, and a look with `sky: "snow"` would have ranked 1 on dry days and 2 on rain days (leak).
- Now: views carry `snow: isSnow(code)` (current `lastView`, calendar `dayView`, calendar card `dayPick`); home cards, style tiles and the sheet use `lastView`. A snow look ranks 0 only on a snow day and only for its own band or a warmer one (cold look → cold, chilly), else it is excluded. On a snow day with a snow candidate for that style and gender only snow looks remain; without one, the pre-b216 list stays. `dayPick` keeps only snow looks when any style has one that day. The app has no per-hour look selector (24-hour cells are icons only).
- Weather code to the selector: snow codes are never changed by the rain→overcast fix (rain only), the cloud vote (codes 0–3 only) or the sunshine rule (2/3/fog); DWD `snow` maps to 73.

## Checks
- JavaScriptCore, real functions from both index.html files over all 28 WMO codes × 9 bands × day/evening × m/f × 3 styles × 5 regions × 3 humidity: 45360 cases. Expectation written from the requirement: snow looks iff snow code, european-urban, f, street, day, cold/chilly (36 cases, all 3 draws snow); every other case has identical candidates, fits and ranks to base (36 pools changed, all in scope); 270 snow-day cells without a snow look equal base.
- Direct examples: snow 73 cold day → ['eu-snow-cold-f-day-street-20261110-01', 'eu-snow-cold-f-day-street-20261110-03', 'eu-snow-cold-f-day-street-20261110-05']; snow 73 very cold → ['SOON']; snow 73 evening → ['ofn-08-street-f', 'ofn-10-street-f', 'oc-chilly-f35-night-street-20261025-10']; code 3 cold → ['of15-06-street-f', 'of15-08-street-f', 'of15-10-street-f']; snow 73 coastal → ['SOON']; snow 73 unknown region → ['of15-06-street-f', 'of15-08-street-f', 'of15-10-street-f'].
- Headless Chrome end-to-end: 26 scenarios with a fake Open-Meteo forecast, each on the worktree and on the base with the same fixed random: current codes 71/73/75/77/85/86, 0/2/3/45/48/51/61/63/65/80, chilly, very cold, cool, evening, male, east-asian, coastal, unknown region; calendar days snow cold, cloudy cold, rain chilly, clear cold, snow cool, snow very cold, snow chilly. Code reaches the view unchanged; home street card, rail images, calendar cards and day sheets are snow looks exactly in scope and equal base everywhere else; 0 page errors.
- Runtime 396 looks · 2284 items (58 look scripts); existing looks and items unchanged; 36 image hashes on disk; 2,795 previously tracked images unchanged; no PNG committed.
- 15 localized article renders (5 looks × ko/en/de), all 31 product images load, 0 page errors.

## Limits
- Snow looks exist only for european-urban · cold/chilly · female · day · street. Other snow cells keep the pre-b216 choice (cloudy sets or COMING SOON); the COMING SOON label on a snow day still says "Cloudy day".
- Places without a country code (GPS) are region unknown, so these snow looks do not show there; coastal European cities (e.g. Hamburg) are warm-coastal-urban and do not show them either.
- Very cold / extreme cold snow days get no snow look (no evidence of protection for those bands).
- Snow evenings use the evening looks (b81); these day looks never show in the evening.
