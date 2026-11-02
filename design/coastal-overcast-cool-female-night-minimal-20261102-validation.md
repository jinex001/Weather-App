# b202 · Overcast / Cool / Female / Evening / Minimal — coastal (2026-11-02)

The user explicitly approved these five editorials (01 v2, 02, 03, 04 v2, 05 v2) and the full automation, and handed publication of this one batch to `origin/main` to Claude Code. The producer passed the 25 products on technical QA and on four backgrounds (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 25 products (6/5/6/4/4), 30 deployed images. Look IDs are `coastal-cool-f35-night-minimal-20261102-01`–`05`, and items are `<look ID>.<product id>` (all new IDs). The module `look/coastal-overcast-cool-female-night-minimal-20261102.js` loads after the b201 module and before `cutouts.js` and `global-context.js`.
- Assets live in `look/global/coastal-overcast-cool-female-night-minimal-20261102/<look ID>/`: `editorial.jpg`, `products/<product id>.webp` and `products.json`. Delivery bytes are copied unchanged (files are renamed from producer IDs such as `01-01-outer` to product names such as `trench`; `producerId` keeps the original). PNG masters, the `editorials/*.png` originals, superseded pre-full-body images, QA sheets, journals and scripts are not committed.
- Mapping: sky `cloudy` · band `cool` · style `minimal` · gender `f` · age storage `"35"` · `time: "evening"` · `visualRegion: warm-coastal-urban` · `humidityContext: unknown` · context reviewed. No rain is depicted (reflective paving is not mapped as rain). Model appearance 25–28, audience 30–44. There are no measurements: temperature, feels-like, humidity, wind and city are null/unknown.
- Scenes: 01 holds a paper bread bag outside a bakery · 02 stops to tie a shoelace · 03 tucks a receipt into her bag · 04 sits on a step with flowers · 05 unlocks a door and looks back (rear view). Scene props are not products: bread/bread bag, receipt, flowers, keys.
- Products: trench, zip jacket, cardigan, blazer and jacket are `outer`; sweater, long-sleeve top, camisole, tee and blouse are `top`; trousers and the midi skirt are `bottom`; ballet flats, sneakers, slingbacks and loafers are `shoes`; 01/03 shoulder bags are `bag`; 01–03 hoops are `jewelry`. All five pairs of shoes are visible in the approved current images.
  - Conservative reconstruction: the 03 camisole body (only the lace edge shows), the 05 jacket front and blouse front (rear view), and hidden backs, soles and the opposite shoe/earring. Brands, fibre composition and retail identity are unknown.
- Heroes: no title word names a product (HOLDING ON TO THE BREAD BAG, FIRST, THE SHOELACE, A MOMENT FOR THE RECEIPT, FLOWERS AND A STEP TO SIT ON, ONE MORE LOOK AT THE DOOR), so rule 4 of design/CUTOUTS.md picks the outer: 01 trench · 02 zip jacket · 03 cardigan · 04 blazer · 05 jacket. In 01, BAG is the bread bag (a scene prop), so the shoulder bag is not picked. Each reuses the product's own transparent WebP; `lum` uses the existing product-WebP convention.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for all 5 looks, plus names, visual descriptions and individual how-to-wear notes for all 25 products. The app article shows the English title in capitals, the English pull quote, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`) because the app has no body field. Checks: decks differ from intros, pulls differ from titles, all 5 tips and all 25 notes are distinct in every language, and there are no brand, price or verified fibre claims (product descriptions are visual).

## Validation (this session)

- **READY.json:** 155/155 files match size and SHA-256. All 30 copied files match READY. The 01/04/05 editorial JPGs are the approved v2 renders (they differ from the superseded pre-full-body files).
- **Visual check:** Claude opened the editorials and the four-background overview sheets for the looks and compared them with the metadata above.
- **Image files:** editorials are 1024×1536 JPEG, 286,765–293,441 B (≤300,000). Products are 500×500 RGBA WebP, 17,746–46,790 B (≤50,000), with alpha 0 at all four corners and a maximum of at least 250. None of the 2333 previously tracked images changed.
- **Runtime (JavaScriptCore, node is not installed):** all 44 `look/*.js` scripts in index.html order for `origin/main` (b36416c) and for this change.
  - 326 looks and 1886 items (base + 5 / 25). Every existing look and item is byte-identical as JSON.
  - New looks get `gctx` warm-coastal-urban / humidity unknown, `hero` and `cut`.
  - The real `lookFits`/`lookPool`/`skyAvailable` functions from index.html were run over 6480 cases. Outside coastal female minimal evenings, previous candidates and ranks are identical. New looks appear only in coastal, evening, female, minimal, chilly/cool/pleasant cells.
  - Rain evenings stay COMING SOON. Dry warm coastal evenings switch from the daytime pleasant minimal fallback to COMING SOON (the existing b81 evening-only rule, as in b192/b201).
  - The `tools/tests/location-first.cjs` logic, ported to JavaScriptCore, passes 72 cases.
- **Browser:** headless Chrome loaded the real index.html with every script and rendered the article section of all 5 looks in ko/en/de (15 renders). Every product image loaded at 500 px on the `#F3EFE8` card, and there were 0 page errors.
- Live deployment, the 30 public images and the archive are verified separately after the push.
