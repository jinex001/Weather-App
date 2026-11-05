# b211 · Clear / Hot (humid setting) / Female / Day / Street — East Asian urban (2026-11-05)

The user's standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch. The five editorials passed producer QA; the user did not visually approve them individually. All 30 products passed producer technical QA and four-background visual QA (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch to `origin/main`. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 30 products (6/6/5/7/6), 35 deployed images. Look IDs `east-asian-clear-hot-humid-f35-day-street-20261105-01`–`05`, items `<look ID>.<product id>` (all new). Module `look/east-asian-clear-hot-humid-female-day-street-20261105.js` loads after the b210 module and before `cutouts.js` and `global-context.js`.
- Source: `originals/product-batch/complete/<look ID>/`, with `APP_MAPPING.json`, `PRODUCT_COPY.json` and `EDITORIAL_COPY.json` as the authority (the importer asserts that they agree with the delivery, and that each product hash matches `TECHNICAL_QA.json`).
- Assets in `look/global/east-asian-clear-hot-humid-female-day-street-20261105/<look ID>/`: `editorial.jpg`, `products/<product id>.webp`, `products.json`. Delivery bytes copied unchanged (renamed from producer IDs such as `01-01-shirt` to names such as `short-sleeve-shirt`; `producerId` keeps the original). PNG masters, editorial PNGs, QA sheets, journals and scripts are not committed.
- Mapping: sky `clear` · band `hot` · style `street` · gender `f` · age storage `"35"` · daytime (no `time` key) · `visualRegion: east-asian-urban` · `humidityContext: humid` · context reviewed. No rain depicted. Humid is the producer's styling setting, not a measurement: temperature, feels-like, relative humidity, wind and city are null. Model appearance 25–28 with mixed casting independent of the East Asian location; audience 30–44.
- Category mapping to existing `CAT_LABEL` keys: `earrings` → `jewelry`, `cap` → `headwear`. `shirt` has no `CAT_LABEL` entry and follows the existing library by how it is worn: 01, open over the tank → `outer`; 04, the only top → `top`. `producerCategory` keeps the delivered value in `products.json`.
- Scenes on sunny East Asian streets: 01 catches a slipping drink bottle · 02 peels a receipt off a raised sole · 03 shifts a paper bag · 04 holds her cap's brim beside a door curtain · 05 reaches for a dropped key. Scene props and setting, not products: bottle, receipt, paper bag, door curtain, key.
- Products: 01 light blue short sleeve shirt, white ribbed tank, sand pleated Bermuda shorts, black ankle strap sandals, black mini flap crossbody, bold silver-tone hoops. 02 coral crew neck tee, charcoal slit midi skirt, white canvas sneakers, white ankle socks, navy double handle tote, rectangular silver-tone watch. 03 ecru sleeveless collared shirt, blue cropped straight jeans, brown cutout slides, brown rounded flap bag, rounded gold-tone hoops. 04 sage camp collar shirt, black wide leg drawstring trousers, ivory canvas sneakers, white rib cuff socks, soft black tote, navy curved brim cap, slim silver-tone hoops. 05 black round neck tank, stone cropped pleat trousers, black fisherman sandals, burgundy tab flap bag, round white dial watch, round silver-tone studs. Hidden areas are conservative reconstructions. Brands, metal, fibre composition, performance and retail identity are unknown.
- Heroes (design/CUTOUTS.md b134): `pick` returns the title's product for every look with no manual rows: 01 BLUE → shirt, 02 CORAL → tee, 03 ECRU → sleeveless shirt, 04 SAGE → camp collar shirt, 05 BURGUNDY → tab flap bag. Each hero reuses the product's own WebP; `lum` uses the existing sRGB-weighted convention. The style tiles were rendered to confirm they read.

## Region behaviour (no code change)

Same `look/global-context.js` rules as b205–b210: KR/JP/CN/TW/HK country codes map to `east-asian-urban`, and region-tagged looks show only in their own region.
- East Asian places, clear hot day, female street: these 5 looks instead of COMING SOON.
- East Asian places, clear warm day and clear scorching day, female street: these 5 as the neighbouring band (existing adjacent-band rule; warm ranks them as a warmer neighbour).
- Unchanged: East Asian cloudy, rain and evening hot cells (still COMING SOON); male street, minimal and run; the b205–b210 pools; every European, coastal, neutral and unknown-region cell. GPS positions without a country code stay `unknown` (existing behaviour).
- `gctx.humidity` is `humid`. The app has no humidity input yet, so it does not change any order; explicit humid and dry queries return the same three looks in this cell.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for 5 looks; names, visual descriptions and individual how-to-wear notes for 30 products. The app article shows the English title in capitals, the English pull, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Decks differ from intros, pulls from titles, all 5 tips and 30 notes are distinct per language; no brand, price or verified fibre/performance claims.

## Validation (this session)

- **READY.json:** 169/169 files match size and SHA-256, no unlisted files. All 35 copied files match READY and their `originals/` sources, and all 30 product hashes match `TECHNICAL_QA.json`; `VISUAL_QA.json` passes all 30 by ID.
- **Image files:** editorials 1024×1536 JPEG, 252,347–294,124 B (≤300,000). Products 500×500 RGBA WebP, 21,554–49,142 B (≤50,000), alpha min 0 / max ≥250, corners transparent. None of the 2638 previously tracked images changed.
- **Runtime (JavaScriptCore):** all 53 `look/*.js` scripts in index.html order for `origin/main` (9b0efb2) and for this change: 371 looks, 2151 items (base + 5 / 30), every existing look and item identical. The real `lookFits`/`lookPool`/`skyAvailable` ran over 8100 cases; previous candidates and ranks are identical everywhere, and new looks appear only in east-asian-urban female street warm/hot/scorching day cells (45 candidate cases). Only the clear warm, hot and scorching day female street pools change (9 cases across humidity queries). `location-first.cjs` port 72 cases pass (coastal unchanged); 7 East Asian places resolve to east-asian-urban.
- **Browser:** headless Chrome loaded the real index.html (`?region=east-asian-urban`) and rendered the article section of all 5 looks in ko/en/de (15 renders), every product image at 500 px on the `#F3EFE8` card, 0 page errors.
- Live deployment, the 35 public images and the archive are verified separately after the push.
