# b207 · Overcast / Cool / Female / Day / Minimal — East Asian urban (2026-11-04)

The user's standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch. The five editorials passed producer QA; the user did not visually approve them individually. All 30 products passed producer technical QA and four-background visual QA (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch to `origin/main`. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 30 products (7/5/6/5/7), 35 deployed images. Look IDs `east-asian-cool-f35-day-minimal-20261104-01`–`05`, items `<look ID>.<product id>` (all new). Module `look/east-asian-overcast-cool-female-day-minimal-20261104.js` loads after the b206 module and before `cutouts.js` and `global-context.js`.
- Source: `originals/product-batch/complete/<look ID>/`, with `APP_MAPPING.json` and the delivered copy as the authority.
- Assets in `look/global/east-asian-overcast-cool-female-day-minimal-20261104/<look ID>/`: `editorial.jpg`, `products/<product id>.webp`, `products.json`. Delivery bytes copied unchanged (renamed from producer IDs such as `01-01-outer` to names such as `blazer`; `producerId` keeps the original). PNG masters, editorial PNGs, QA sheets, journals and scripts are not committed.
- Mapping: sky `cloudy` · band `cool` · style `minimal` · gender `f` · age storage `"35"` · daytime (no `time` key) · `visualRegion: east-asian-urban` · `humidityContext: unknown` · context reviewed. No rain depicted; reflective paving is not read as rain. Model appearance 25–28 with mixed casting independent of the East Asian location; audience 30–44. Temperature, feels-like, humidity, wind and city are null/unknown.
- Category mapping: the four delivered `earrings` products use the existing runtime category `jewelry` (`earrings` is not in `CAT_LABEL`); `producerCategory` keeps the delivered value in `products.json`.
- Scenes on overcast East Asian shopping streets: 01 twists a stuck tumbler lid outside a cafe · 02 lifts a foot to look at a receipt stuck to the flat · 03 holds down blowing bouquet wrapping at a florist · 04 opens a door with a parcel held at the hip · 05 struggles with a bicycle lock. Scene props, not products: tumbler, receipt, paper grocery bag and greens, bouquet, wrapping and flower buckets, parcel, bicycle and lock.
- Products: 01 ivory single-breasted blazer, black fine crewneck knit, taupe wide pleated trousers, black penny loafers, black ribbed ankle socks, black structured shoulder bag, small gold-tone hoops. 02 slate collarless jacket, ivory crewneck tee, black cropped straight trousers, black bow ballet flats, fine silver-tone hoops. 03 beige open cardigan, white poplin shirt, charcoal straight midi skirt, black low-heel ankle boots, dark brown flap crossbody, slim gold-tone hoops. 04 sand light trench coat, light gray crewneck knit, navy wide trousers, white clean low-tops, brown rounded-flap crossbody. 05 black short zip jacket, gray plain crewneck tee, cream relaxed cropped trousers, black clean derby shoes, black everyday ribbed socks, silver white-dial watch on a linked metal bracelet, silver mini ball studs. Hidden areas are conservative reconstructions. No forced reflective trim. Brands, metal, fibre composition, performance and retail identity are unknown.
- Heroes (`tools/make-cutouts.py` `pick`, design/CUTOUTS.md b134, exact word match): no title word names a product (LID, PAPER, FLOWER, PARCEL and LOCK are props), so all five use the outer (blazer, collarless jacket, cardigan, trench coat, zip jacket). Each reuses the product's own WebP; `lum` uses the existing sRGB-weighted convention.

## Region behaviour (no code change)

Same `look/global-context.js` rules as b205 and b206: KR/JP/CN/TW/HK country codes map to `east-asian-urban`, and region-tagged looks show only in their own region.
- East Asian places, cloudy cool day, female minimal: these 5 looks (exact band) lead instead of the Berlin overcast minimal neighbours.
- East Asian places, cloudy pleasant day, female minimal: previously COMING SOON, now these 5 as the colder neighbour (existing adjacent-band rule).
- Unchanged: East Asian clear, rain, evening, male minimal and running; the b205/b206 street pools; every European, coastal and unknown-region cell. GPS positions without a country code stay `unknown` (existing behaviour).

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for 5 looks; names, visual descriptions and individual how-to-wear notes for 30 products. The app article shows the English title in capitals, the English pull, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Decks differ from intros, pulls from titles, all 5 tips and 30 notes are distinct per language; no brand, price or verified fibre/performance claims.

## Validation (this session)

- **READY.json:** 166/166 files match size and SHA-256, no unlisted files. All 35 copied files match READY and their `originals/` sources.
- **Image files:** editorials 1024×1536 JPEG, 279,506–298,715 B (≤300,000). Products 500×500 RGBA WebP, 15,848–47,428 B (≤50,000), alpha min 0 / max ≥250; corners transparent except `05/products/zip-jacket.webp` with corner alpha ≤2 (bytes unchanged, recorded). None of the 2494 previously tracked images changed.
- **Runtime (JavaScriptCore):** all 49 `look/*.js` scripts in index.html order for `origin/main` (c626749) and for this change: 351 looks, 2027 items (base + 5 / 30), every existing look and item identical. The real `lookFits`/`lookPool`/`skyAvailable` ran over 8100 cases; previous candidates and ranks are identical everywhere, new looks appear only in east-asian-urban female minimal chilly/cool/pleasant cells, and only the cloudy cool and cloudy pleasant day female minimal pools change. `location-first.cjs` port 72 cases pass (coastal unchanged); 7 East Asian places resolve to east-asian-urban.
- **Browser:** headless Chrome loaded the real index.html (`?region=east-asian-urban`) and rendered the article section of all 5 looks in ko/en/de (15 renders), every product image at 500 px on the `#F3EFE8` card, 0 page errors.
- Live deployment, the 35 public images and the archive are verified separately after the push.
