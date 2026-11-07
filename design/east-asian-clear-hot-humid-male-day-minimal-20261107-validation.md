# b214 · Clear / Hot (humid setting) / Male / Day / Minimal — East Asian urban (2026-11-07)

The user's standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch, and the user explicitly approved these five editorials on 2026-11-07. All 23 products passed producer technical QA and four-background visual QA (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch to `origin/main`. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 23 products (5/5/4/5/4), 28 deployed images, 5 metadata files. Look IDs `east-asian-clear-hot-humid-m35-day-minimal-20261107-01`–`05`, items `<look ID>.<product id>` (all new). Module `look/east-asian-clear-hot-humid-male-day-minimal-20261107.js` loads after the b213 module and before `cutouts.js` and `global-context.js`.
- Source: `originals/product-batch/complete/<look ID>/`, with `APP_MAPPING.json`, `PRODUCT_COPY.json` and `EDITORIAL_COPY.json` as the authority (the importer asserts that they agree with the delivery, and that each product hash matches `TECHNICAL_QA.json`).
- Assets in `look/global/east-asian-clear-hot-humid-male-day-minimal-20261107/<look ID>/`: `editorial.jpg`, `products/<product id>.webp`, `products.json`. Delivery bytes copied unchanged (renamed from producer IDs such as `01-01` to names such as `short-sleeve-shirt`; `producerId` keeps the original). PNG masters, editorial PNGs, the 8 superseded failed garment masters, QA sheets, journals and scripts are not committed.
- Mapping: sky `clear` · band `hot` · style `minimal` · gender `m` · age storage `"35"` · daytime (no `time` key) · `visualRegion: east-asian-urban` · `humidityContext: humid` · context reviewed. No rain depicted. Humid is the producer's styling setting, not a measurement: temperature, feels-like, relative humidity, wind and city are null. Model appearance 28–32 with mixed casting independent of the location; audience 30–44.
- Category mapping to existing `CAT_LABEL` keys, per producer ID because this delivery has no category key: the three shirts, the sleeveless crew neck and the sleeveless knit polo are each worn alone (tucked or buttoned, never open over another top) → `top`; trousers → `bottom`; tailored knee shorts → `shorts`; slides, sandals and mules → `shoes`; bags → `bag`; watches → `watch`. `producerCategory` keeps the type.
- Scenes on sunny lanes: 01 steps down from a cafe doorway · 02 shakes grit out of a sandal on stone stairs · 03 picks up a paper by a stone wall · 04 locks a bicycle · 05 looks back at a metal gate. Scene props and setting, not products: cafe door, interior and potted plant, stair handrail and plants, the paper, bicycle and lock, metal gate.
- Products: 01 ivory short-sleeve shirt, chocolate pleated trousers, brown cross-strap slides, dark brown shoulder bag, silver-tone link watch. 02 charcoal sleeveless crew neck, stone wide cropped trousers, black two-strap slides, black zip crossbody, dark-dial bracelet watch. 03 pale blue pocket shirt, ivory tailored shorts, tan slide sandals, cream canvas tote. 04 ecru sleeveless knit polo, slate straight trousers, dark brown flat mules, taupe diagonal-zip bag, silver-tone pale-dial watch. 05 black band-collar shirt, warm taupe wide trousers, black broad-strap slides, burgundy rectangular shoulder bag.
- Heroes (design/CUTOUTS.md b134): `pick` returns 01 CHOCOLATE → trousers, 02 STONE → stone wide cropped trousers (an exact title word; the deck also uses stone as the colour), 04 ECRU → knit polo. 03 and 05 have no title word in a product name and no outer, so rule 7 applies: 03 → pale blue shirt (the deck and pull lead with pale blue), 05 → burgundy bag (the deck's burgundy accent and the pull). Each cut is that product WebP itself; no new image was generated.

## Region behaviour (no code change)

Same `look/global-context.js` rules as b205–b213: KR/JP/CN/TW/HK country codes map to `east-asian-urban`, and region-tagged looks show only in their own region.
- East Asian places, clear hot day, male minimal: these 5 looks instead of COMING SOON.
- East Asian places, clear warm day and clear scorching day, male minimal: these 5 as the neighbouring band (existing adjacent-band rule).
- Unchanged: East Asian cloudy, rain and evening hot cells (still COMING SOON); run; the b211 and b212 street pools; the b213 female minimal pool; the b208 cool pool; every European, coastal, neutral and unknown-region cell. GPS positions without a country code stay `unknown` (existing behaviour).
- `gctx.humidity` is `humid`. The app has no humidity input yet, so it does not change any order; explicit humid and dry queries return the same three looks in this cell.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for 5 looks; names, visual descriptions and individual how-to-wear notes for 23 products. The app article shows the English title in capitals, the English pull, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Decks differ from intros, pulls from titles, all 5 tips and all 23 how-to-wear notes are distinct in each language. No brand, price, fibre or performance claims.

## Validation (this session)

- **READY.json:** 145/145 files match size and SHA-256, no unlisted files. All 28 copied files match READY and their `originals/` sources, and all 23 product hashes match `TECHNICAL_QA.json`; `VISUAL_QA.json` passes all 23 (8 corrected).
- **Image files:** editorials 1024×1536 JPEG, 295,799–299,464 B (≤300,000). Products 500×500 RGBA WebP, 20,918–49,016 B (≤50,000), alpha min 0 / max ≥250, corners transparent. None of the 2733 previously tracked images changed, and no PNG is in the change.
- **Runtime (JavaScriptCore):** all 56 `look/*.js` scripts in index.html order for `origin/main` (a355396) and for this change: 386 looks, 2224 items (base + 5 / 23), every existing look and item identical. The real `lookFits`/`lookPool`/`skyAvailable` ran over 8100 cases; previous candidates and ranks are identical everywhere, and new looks appear only in east-asian-urban male minimal daytime cells within one band of hot (45 changed candidate cases, 9 changed pools). Location-first port 72 cases and 7 East Asian place cases pass.
- **Browser:** headless Chrome loaded the real index.html (`?region=east-asian-urban`) and rendered the article section of all 5 looks in ko/en/de (15 renders), every product image at 500 px on the `#F3EFE8` card, 0 page errors.
- Live deployment, the 28 public images and the archive are verified separately after the push.
