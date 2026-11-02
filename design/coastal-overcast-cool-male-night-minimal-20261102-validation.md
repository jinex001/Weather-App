# b201 · Overcast / Cool / Male / Evening / Minimal — coastal (2026-11-02)

The user explicitly approved these five editorials and the full automation, and handed publication of this one batch to `origin/main` to Claude Code. The producer reviewed the 20 products technically and on four backgrounds (white, black, gray, app); the user did not approve each product image individually. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 20 products (3/4/5/5/3), 25 deployed images. Look IDs are `coastal-cool-m35-night-minimal-20261102-01`–`05`, and items are `<look ID>.<product id>` (all new IDs). The module `look/coastal-overcast-cool-male-night-minimal-20261102.js` loads after the b196 module and before `cutouts.js` and `global-context.js`.
- Assets live in `look/global/coastal-overcast-cool-male-night-minimal-20261102/<look ID>/`: `editorial.jpg`, `products/<product id>.webp` and `products.json`. Delivery bytes are copied unchanged (files are renamed from the producer IDs such as `01-outer` to product names such as `coat`; `producerId` keeps the original). PNG masters, the `editorials/*.png` originals, QA sheets, journals, prompts and scripts are not committed.
- Mapping: sky `cloudy` · band `cool` · style `minimal` · gender `m` · age storage `"35"` · `time: "evening"` · `visualRegion: warm-coastal-urban` · `humidityContext: unknown` · context reviewed. No rain is depicted (02's reflective paving is ambiguous, so no rain mapping). The model's appearance is 28–32. There are no measurements: temperature, feels-like, humidity, wind and city are null/unknown.
- Scenes: 01 catches his collar by the harbor lights (eye contact) · 02 steps back from a coffee drop · 03 picks up a dropped ticket · 04 laughs on the steps with a bookmark · 05 opens a door and looks back (eye contact, rear view). Scene props are not products: coffee cup, ticket, book/bookmark, keys.
- Products: coats, jackets, blouson and blazer are `outer`; sweater, tops, tee and knit polo are `top`; trousers are `bottom`; loafers and derbys are `shoes`; 03/04 ribbed socks are `socks`.
  - Omitted: 01 and 05 shoes (outside the frame) and 02 socks (not visible).
  - Conservative reconstruction: 05 jacket front (from a rear view), 05 knit polo body and construction (only the collar is visible), full trouser legs and rear, the 01 coat's lower hem, 02 top sleeves, and the hidden second shoe of each pair. Brands, fibre composition and retail identity are unknown.
- Heroes: no title word names a product (CATCH THE COLLAR, ONE SMALL DROP, TICKET, FOUND, BETWEEN PAGES, ONE LAST LOOK), so rule 4 of design/CUTOUTS.md picks the outer: 01 coat · 02 zip jacket · 03 blouson · 04 blazer · 05 jacket. Each reuses the product's own transparent WebP. `lum` uses the same convention as the existing product-WebP heroes (it reproduces the b190/b196 values).

## Copy

These are used unchanged: the Korean master (titles, intros, all 20 product names and how-to-wear notes) and the producer's en/de titles, intros, names and notes. Changes from Claude's review, with the originals kept under `copy.sourceCopy` and `products[].sourceCopy`:

- **deck (ko/en/de, all 5):** the supplied deck was word-for-word the intro, which the look sheet shows directly below the deck. Short scene decks were written instead.
- **pull (all 5):** the supplied pull quote repeated the article title shown above the photos. It was replaced with a short line.
- **tip (ko/en/de, all 5):** the same generic sentence was supplied for all five looks. Look-level tips about colour and proportion were written from the editorials.
- **`products.json` description (ko/en/de, 20):** each one was "<product name>. <reconstruction notice>". They now give concrete visible details from the producer's design description, followed by the same notice. The app does not show this text.

Checks: all 20 notes are distinct in every language, all 5 tips are distinct in every language, decks differ from intros, and no brand, price, fibre or performance claims are made.

## Validation (this session)

- **READY.json:** 103/103 files match size and SHA-256 (READY.json itself is the 104th file). All 25 copied files match READY and each look's delivery products.json.
- **Visual check:** Claude opened the editorial contact sheet and the four-background review sheets for all 20 products and compared them with the metadata above.
- **Image files:** editorials are 1024×1536 JPEG, 203,819–288,384 B (≤300,000). Products are 500×500 RGBA WebP, 14,582–48,154 B (≤50,000), with alpha 0 at all four corners and a maximum of at least 250. None of the 2308 previously tracked images changed.
- **Runtime (JavaScriptCore, node is not installed):** all 43 `look/*.js` scripts in index.html order for `origin/main` (2ec273a) and for this change.
  - 321 looks and 1861 items (base + 5 / 20). Every existing look and item is byte-identical as JSON.
  - New looks get `gctx` warm-coastal-urban / humidity unknown, `hero` and `cut`.
  - The real `lookFits`/`lookPool`/`skyAvailable` functions from index.html were run over 6480 cases (9 bands × 5 skies × day/evening × m/f × 3 styles × 4 regions × 3 humidities). Outside coastal male minimal evenings, previous candidates and ranks are identical. New looks appear only in coastal, evening, male, minimal, chilly/cool/pleasant cells.
  - Rain evenings stay COMING SOON. Dry warm coastal evenings switch from the daytime sunny minimal fallback to COMING SOON (the existing b81 evening-only rule, as in b192).
  - The `tools/tests/location-first.cjs` logic, ported to JavaScriptCore, passes 72 cases, including the legacy exclusion, rain and temperature guards.
- **Browser:** headless Chrome loaded the real index.html with every script and rendered the article section of all 5 looks in ko/en/de (15 renders). Every product image loaded at 500 px on the `#F3EFE8` card, and there were 0 page errors.
- Live deployment, the 25 public images and the archive are verified separately after the push.
