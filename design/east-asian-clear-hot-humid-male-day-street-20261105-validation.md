# b212 · Clear / Hot (humid setting) / Male / Day / Street — East Asian urban (2026-11-06)

The user explicitly approved the five male editorials (recorded in the handoff and `READY.json`), and the standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch. All 30 products passed producer technical QA and four-background visual QA (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch and one female correction to `origin/main` in one commit. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 30 products (7/6/6/6/5), 35 new images, plus 1 replacement image. Look IDs `east-asian-clear-hot-humid-m35-day-street-20261105-01`–`05`, items `<look ID>.<product id>` (all new). Module `look/east-asian-clear-hot-humid-male-day-street-20261105.js` loads after the b211 module and before `cutouts.js` and `global-context.js`.
- Source: `originals/product-batch/complete/<look ID>/`, with `APP_MAPPING.json`, `PRODUCT_COPY.json` and `EDITORIAL_COPY.json` as the authority (the importer asserts that they agree with the delivery).
- Assets in `look/global/east-asian-clear-hot-humid-male-day-street-20261105/<look ID>/`: `editorial.jpg`, `products/<product id>.webp`, `products.json`. Delivery bytes copied unchanged (renamed from producer IDs such as `01-01` to names such as `camp-shirt`; `producerId` keeps the original). PNG masters, editorial PNGs, QA sheets, journals and scripts are not committed.
- Mapping: sky `clear` · band `hot` · style `street` · gender `m` · age storage `"35"` · daytime (no `time` key) · `visualRegion: east-asian-urban` · `humidityContext: humid` · context reviewed. No rain depicted; reflective paving is not read as rain. Humid is the producer's styling setting, not a measurement: temperature, feels-like, relative humidity, wind and city are null. Model appearance 28–32 with mixed casting independent of the East Asian location; audience 30–44.
- Category mapping: this delivery has no product category key, so each producer ID maps to an existing `CAT_LABEL` key from the delivered name and how it is worn. Camp shirt 01, open over the tank → `outer`; camp shirt 04, the only top → `top`; shorts → `shorts`; bracelets → `jewelry`; cap → `headwear`; the rest → `top`, `bottom`, `shoes`, `socks`, `bag`, `watch`. `producerCategory` records the product type in `products.json`.
- Scenes on sunny East Asian streets: 01 reaches for a falling lime · 02 reaches for a flying receipt · 03 steps off a tiled threshold · 04 steadies his cap by a door curtain · 05 takes keys passed through a shop window. Scene props and setting, not products: lime, fruit stand, receipt, paper bag, door curtain, keys.
- Products: 01 cobalt camp shirt, white ribbed tank, stone pleated shorts, black two-buckle slides, black horizontal sling bag, watch with black strap, silver-tone chain bracelet. 02 coral knit polo, charcoal wide cropped trousers, white canvas low-tops, white ribbed crew socks, navy front-pocket tote, round silver-tone bracelet watch. 03 ivory sleeveless knit polo, faded blue cropped jeans, brown open-toe slides, brown flap crossbody, silver-tone link watch, silver-tone link bracelet. 04 sage camp shirt, black wide trousers, ivory canvas low-tops, plain navy cap, black open-top tote, rectangular silver-tone strap watch. 05 black ribbed tank, stone pleated cropped trousers, black fisherman sandals, burgundy zip shoulder bag, white-dial silver-tone bracelet watch. Hidden areas are conservative reconstructions. Brands, metal, fibre composition, performance and retail identity are unknown.
- Heroes (design/CUTOUTS.md b134): 01 no title word matches → outer (camp shirt) · 02 CORAL → knit polo · 03 no title word and no outer → rule 7 manual row: the title is about the step → open-toe slides · 04 SAGE → camp shirt · 05 BURGUNDY → zip shoulder bag. Each hero reuses the product's own WebP; `lum` uses the existing sRGB-weighted convention. The style tiles were rendered to confirm they read.

## Female look 01 bag correction (same commit)

`originals/female-bag-correction/BRIDGE.json`: the b211 catalog image showed a flap, while the worn bag has a plain face and an edge zipper. Scope is one product of `east-asian-clear-hot-humid-f35-day-street-20261105-01`:
- `look/global/east-asian-clear-hot-humid-female-day-street-20261105/…-01/products/mini-flap-crossbody.webp`: new bytes at the same path (`a0a390c16dfb…` → `cf6506d2915e…`). The item ID and file name are kept, though they still say "flap", as instructed.
- `products.json` of that look: ko/en/de name and description from the bridge, `sha256`, `bytes`, `evidence`, a `correction` record, the `reconstructionNotice` clause on the bag, and the en/de body words "flap bag" / "Klappentasche". The ko body did not mention a flap.
- `look/east-asian-clear-hot-humid-female-day-street-20261105.js`: that item's `name` and `alt` only. Its `index.html` script tag moves to `?v=b212` so phones reload it.
- No other female look, product, image or copy field changes. The earlier b211 files are not redeployed, and the b211 iCloud archive is untouched; the correction master and QA sheet are archived with this batch.

## Region behaviour (no code change)

Same `look/global-context.js` rules as b205–b211: KR/JP/CN/TW/HK country codes map to `east-asian-urban`, and region-tagged looks show only in their own region.
- East Asian places, clear hot day, male street: these 5 looks instead of COMING SOON.
- East Asian places, clear warm day and clear scorching day, male street: these 5 as the neighbouring band (existing adjacent-band rule).
- Unchanged: East Asian cloudy, rain and evening hot cells (still COMING SOON); male minimal and run; the female pools; every European, coastal, neutral and unknown-region cell. GPS positions without a country code stay `unknown` (existing behaviour).
- `gctx.humidity` is `humid`. The app has no humidity input yet, so it does not change any order; explicit humid and dry queries return the same three looks in this cell.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for 5 looks; names, visual descriptions and individual how-to-wear notes for 30 products. The app article shows the English title in capitals, the English pull, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Decks differ from intros, pulls from titles, all 5 tips and 30 notes are distinct per language; no brand, price or verified fibre/performance claims.

## Validation (this session)

- **READY.json:** 167/167 files match size and SHA-256, no unlisted files. All 35 copied files and the replacement match READY and their `originals/` sources; `VISUAL_QA.json` passes with a sheet for all 30 products and the replacement.
- **Image files:** editorials 1024×1536 JPEG, 255,037–276,662 B (≤300,000). Products 500×500 RGBA WebP, 21,940–49,962 B (≤50,000), alpha min 0 / max ≥250, corners transparent. Of the 2673 previously tracked images, only the one replaced bag changed.
- **Runtime (JavaScriptCore):** all 54 `look/*.js` scripts in index.html order for `origin/main` (f4583bd) and for this change: 376 looks, 2181 items (base + 5 / 30). Every existing look and item is identical except the corrected bag item, whose `name` and `alt` alone differ. The real `lookFits`/`lookPool`/`skyAvailable` ran over 8100 cases; previous candidates and ranks are identical everywhere, and new looks appear only in east-asian-urban male street warm/hot/scorching day cells (45 candidate cases). Only the clear warm, hot and scorching day male street pools change (9 cases across humidity queries). `location-first.cjs` port 72 cases pass (coastal unchanged); 7 East Asian places resolve to east-asian-urban.
- **Browser:** headless Chrome loaded the real index.html (`?region=east-asian-urban`) and rendered the article section of all 5 new looks and the corrected female look in ko/en/de (18 renders), every product image at 500 px on the `#F3EFE8` card, no flap wording on the corrected card, 0 page errors.
- Live deployment, the 36 public images and the archive are verified separately after the push.
