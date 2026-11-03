# b205 · Overcast / Cool / Female / Day / Street — East Asian urban (2026-11-03)

The user's standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch. The five editorials passed producer QA; the user did not visually approve them individually. The producer passed the 27 products on technical QA and on four backgrounds (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch to `origin/main`. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 27 products (5/5/6/5/6), 32 deployed images. Look IDs `east-asian-cool-f35-day-street-20261103-01`–`05`, items `<look ID>.<product id>` (all new). Module `look/east-asian-overcast-cool-female-day-street-20261103.js` loads after the b204 module and before `cutouts.js` and `global-context.js`.
- Assets in `look/global/east-asian-overcast-cool-female-day-street-20261103/<look ID>/`: `editorial.jpg`, `products/<product id>.webp`, `products.json`. Delivery bytes copied unchanged (renamed from producer IDs such as `01-01-outer` to names such as `bomber`; `producerId` keeps the original). PNG masters, editorial PNGs, QA sheets, journals and scripts are not committed.
- Mapping: sky `cloudy` · band `cool` · style `street` · gender `f` · age storage `"35"` · daytime (no `time` key) · `visualRegion: east-asian-urban` · `humidityContext: unknown` · context reviewed. No rain depicted (dry asphalt). Model appearance 25–28, audience 30–44. Temperature, feels-like, humidity, wind and city are null/unknown.
- Scenes in an overcast residential East Asian lane: 01 holds up a paper shopping bag outside a convenience store · 02 unties the hoodie cord with a foot on a step · 03 reaches for a falling receipt · 04 eats a rice cracker on a stone bench · 05 unlocks a door and looks back (rear view). Scene props, not products: paper shopping bag, receipt, rice cracker and wrapper, keys.
- Products: 01 cobalt bomber, white tee, charcoal wide jeans, black canvas low-tops, black zip crossbody (`bag`). 02 washed denim jacket, pale gray hoodie, black cropped trousers, ivory canvas sneakers, gray ribbed socks. 03 terracotta overshirt, ecru striped long sleeve, navy trousers, black chunky derbies, black socks, small gold-tone hoops (`jewelry`, gold tone as in the actual image). 04 sage utility jacket, black crewneck knit, stone cargo trousers, dark gray canvas low-tops, black soft tote (`bag`). 05 black zip blouson, cream sweatshirt, blue straight jeans (visible rear construction kept), black penny loafers, white socks, black round watch (`watch`); blouson and sweatshirt fronts are conservative reconstructions. No forced reflective trim. Brands, fibre composition, performance and retail identity are unknown.
- Heroes (`tools/make-cutouts.py` `pick`, design/CUTOUTS.md b134, exact word match): 01 A BLUE PAUSE IN THE LANE → cobalt blue bomber; 02 (HOOD is not "hoodie"), 03, 04 and 05 have no matching word → the outer (denim jacket, overshirt, utility jacket, blouson). Each reuses the product's own WebP; `lum` uses the existing sRGB-weighted convention.

## Region behaviour (no code change)

`look/global-context.js` already maps KR/JP/CN/TW/HK country codes to `east-asian-urban` and `allowed()` shows a region-tagged look only in its own region, while untagged (Berlin) looks remain allowed there. So:
- East Asian places, cloudy cool day, female street: these 5 looks (exact band) lead instead of Berlin chilly overcast street neighbours.
- East Asian places, cloudy pleasant day, female street: previously COMING SOON, now these 5 as the colder neighbour (existing adjacent-band rule).
- Unchanged: East Asian clear, rain, evening, male, minimal and running; every European, coastal and unknown-region cell. GPS positions without a country code inside the East Asia box stay `unknown` (no reverse geocoding), so they do not see these looks — existing behaviour, recorded, not changed.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for 5 looks; names, visual descriptions and individual how-to-wear notes for 27 products. The app article shows the English title in capitals, the English pull, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Decks differ from intros, pulls from titles, all 5 tips and 27 notes are distinct per language; no brand, price or verified fibre/performance claims.

## Validation (this session)

- **READY.json:** 153/153 files match size and SHA-256, no unlisted files. All 32 copied files match READY and their `originals/` sources.
- **Image files:** editorials 1024×1536 JPEG, 283,128–295,524 B (≤300,000). Products 500×500 RGBA WebP, 15,608–49,966 B (≤50,000), alpha min 0 / max ≥250, corners transparent. None of the 2428 previously tracked images changed.
- **Runtime (JavaScriptCore):** all 47 `look/*.js` scripts in index.html order for `origin/main` (b8013f9) and for this change: 341 looks, 1968 items (base + 5 / 27), every existing look and item identical. The real `lookFits`/`lookPool`/`skyAvailable` ran over 8100 cases (9 bands × 5 skies × day/evening × 2 genders × 3 styles × 5 regions × 3 humidity); previous candidates and ranks are identical everywhere, new looks appear only in east-asian-urban female street chilly/cool/pleasant cells, and only the cloudy cool and cloudy pleasant day pools change. `location-first.cjs` port 72 cases pass (coastal unchanged); 7 East Asian places (Seoul, Busan, Tokyo, Osaka, Taipei, Hong Kong, Shanghai) resolve to east-asian-urban.
- **Browser:** headless Chrome loaded the real index.html (`?region=east-asian-urban`) and rendered the article section of all 5 looks in ko/en/de (15 renders), every product image at 500 px on the `#F3EFE8` card, 0 page errors.
- Live deployment, the 32 public images and the archive are verified separately after the push.
