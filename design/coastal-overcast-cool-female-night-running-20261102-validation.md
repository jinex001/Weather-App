# b203 · Overcast / Cool / Female / Evening / Running — coastal (2026-11-03)

The user's standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch. The five editorials passed producer QA, and the user did not visually approve them individually. The producer passed the 27 products on technical QA and on four backgrounds (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch to `origin/main`. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 27 products (4/5/6/6/6), 32 deployed images. Look IDs are `coastal-cool-f35-night-running-20261102-01`–`05`, and items are `<look ID>.<product id>` (all new IDs). The module `look/coastal-overcast-cool-female-night-running-20261102.js` loads after the b202 module and before `cutouts.js` and `global-context.js`.
- Assets live in `look/global/coastal-overcast-cool-female-night-running-20261102/<look ID>/`: `editorial.jpg`, `products/<product id>.webp` and `products.json`. Delivery bytes are copied unchanged (files are renamed from producer IDs such as `01-01-outer` to product names such as `hooded-shell`; `producerId` keeps the original). PNG masters, the `editorials/*.png` originals, the superseded 04 products, QA sheets, journals and scripts are not committed.
- Mapping: sky `cloudy` · band `cool` · style `run` · gender `f` · age storage `"35"` · `time: "evening"` · `visualRegion: warm-coastal-urban` · `humidityContext: unknown` · context reviewed. No rain is depicted (reflective paving and fountain water are not mapped as rain). Model appearance 25–28, audience 30–44. There are no measurements: temperature, feels-like, humidity, wind and city are null/unknown.
- Scenes on a night harbour promenade: 01 pulls up the hood stepping down · 02 ties a shoelace with a foot on the harbour wall · 03 opens a water bottle beside a drinking fountain · 04 an earbud slips mid-stride · 05 checks her watch at the railing and turns back (rear view). Scene props are not products: water bottle, drinking fountain, railings.
- Products: four shells/jackets and the 04 zip jacket are `outer`; long-sleeve/crewneck tops are `top`; leggings and tights are `bottom`; the 03 black layering shorts are `shorts` (separate from the charcoal tights); all five running shoes are `shoes`; 02 hoops are `jewelry`; 03/05 sports watches are `watch`; 04/05 ankle socks are `socks`; 04 white wired earphones are worn `gear`. All five pairs of shoes are visible.
  - 04 uses only the v2 corrections: a long-sleeve black zip jacket with reflective upper-arm bands, over a plain pale gray long-cuff top. The earlier vest and striped inner are kept in the archive as superseded and are not deployed (the importer asserts their hashes are absent).
  - Conservative reconstruction: the partly visible 03 watch; the 05 shell front, cream inner front and watch face (rear view); hidden backs, soles, socks and the opposite earring. Brands, fibre composition and retail identity are unknown.
- Heroes: no title word is a word of a product name (CATCH THE HOOD, TAKE A STEP: HOOD is not "hooded"; A SHORT PAUSE FOR THE LACE; A SPLASH BETWEEN SIPS; WHEN AN EARBUD SLIPS: EARBUD is not "earphones"; CHECK THE TIME, TURN BACK), so rule 4 of design/CUTOUTS.md (and `tools/make-cutouts.py` `pick`) picks the outer: 01 cobalt shell · 02 windbreaker · 03 coral jacket · 04 black zip jacket · 05 sage shell. Each reuses the product's own transparent WebP; `lum` uses the existing product-WebP convention.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for all 5 looks, plus names, visual descriptions and individual how-to-wear notes for all 27 products. The app article shows the English title in capitals, the English pull quote, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Checks: decks differ from intros, pulls differ from titles, all 5 tips and all 27 notes are distinct in every language, and there are no brand, price or verified fibre/performance claims (product descriptions are visual).

## Validation (this session)

- **READY.json:** 169/169 files match size and SHA-256. All 32 copied files match READY and their `originals/` sources. 04 outer/top are the `-v2` images and differ from the superseded files.
- **Visual check:** Claude opened the five editorials, the look overview sheets and the 04 v2 four-background sheets and compared them with the metadata above.
- **Image files:** editorials are 1024×1536 JPEG, 274,275–294,977 B (≤300,000). Products are 500×500 RGBA WebP, 17,514–49,910 B (≤50,000), alpha min 0 and max at least 250. Corners are fully transparent except one corner of 03 `crewneck-top.webp` at alpha 1/255 (invisible compression residue; delivery bytes left unchanged). None of the 2363 previously tracked images changed.
- **Runtime (JavaScriptCore, node is not installed):** all 45 `look/*.js` scripts in index.html order for `origin/main` (c4b54f0) and for this change.
  - 331 looks and 1913 items (base + 5 / 27). Every existing look and item is byte-identical as JSON.
  - New looks get `gctx` warm-coastal-urban / humidity unknown, `hero` and `cut`.
  - The real `lookFits`/`lookPool`/`skyAvailable` functions from index.html were run over 6480 cases. Outside coastal female running evenings, previous candidates and ranks are identical. New looks appear only in coastal, evening, female, run, chilly/cool/pleasant cells.
  - Rain evenings stay COMING SOON. Dry warm coastal evenings switch from the daytime pleasant running fallback to COMING SOON (the existing b81 evening-only rule, as in b192/b201/b202). Daytime coastal running and European evening running are unchanged.
  - The `tools/tests/location-first.cjs` logic, ported to JavaScriptCore, passes 72 cases.
- **Browser:** headless Chrome loaded the real index.html with every script and rendered the article section of all 5 looks in ko/en/de (15 renders). Every product image loaded at 500 px on the `#F3EFE8` card, and there were 0 page errors.
- Live deployment, the 32 public images and the archive are verified separately after the push.
