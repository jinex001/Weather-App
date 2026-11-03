# b204 · Overcast / Cool / Male / Evening / Running — coastal (2026-11-03)

The user's standing workflow authorization (2026-11-03, "앞으로도 승인 없이 진행") covers this batch. The five editorials passed producer QA, and the user did not visually approve them individually. The producer passed the 28 products on technical QA and on four backgrounds (white, black, gray, app `#F3EFE8`); the user did not approve each product image individually. Claude Code published this one batch to `origin/main`. Archiving originals and deleting local duplicates follow only after the live deployment is verified.

## Content and scope

- 5 looks, 28 products (5/5/5/6/7), 33 deployed images. Look IDs are `coastal-cool-m35-night-running-20261103-01`–`05`, and items are `<look ID>.<product id>` (all new IDs). The module `look/coastal-overcast-cool-male-night-running-20261103.js` loads after the b203 module and before `cutouts.js` and `global-context.js`.
- Assets live in `look/global/coastal-overcast-cool-male-night-running-20261103/<look ID>/`: `editorial.jpg`, `products/<product id>.webp` and `products.json`. Delivery bytes are copied unchanged (renamed from producer IDs such as `01-01-outer` to product names such as `hooded-shell`; `producerId` keeps the original). PNG masters, editorial PNGs, QA sheets, journals and scripts are not committed.
- Mapping: sky `cloudy` · band `cool` · style `run` · gender `m` · age storage `"35"` · `time: "evening"` · `visualRegion: warm-coastal-urban` · `humidityContext: unknown` · context reviewed. No rain is depicted (dry-looking paving). Model appearance 28–32, existing male audience category. Temperature, feels-like, humidity, wind and city are null/unknown (no measurements).
- Scenes on a night harbour promenade: 01 points down the lane beside a wall map · 02 shakes a small stone out of a shoe (one shoe worn, one held) · 03 catches a tipping paper cup · 04 straightens a sock with a foot on a step · 05 lifts his cap and turns back (rear view). Scene props, not products: wall map, small stone, paper cup.
- Products:
  - 03: the black hydration running vest (shoulder strips, two chest buckles, no centre zip) is `outer` and separate from the cobalt long-sleeve top, which carries the silver upper-arm bands.
  - 05: the navy hooded jacket has long sleeves pushed up (not a vest), so its front and full sleeves are conservative reconstructions from the rear view; the pale gray long-sleeve inner is separate. Gray socks, the navy cap (`headwear`) and the dark round sports watch (`watch`) are included.
  - 02: the ivory shoes are one matching pair reconstructed from the worn and the held shoe, plus gray ankle socks.
  - 01/04: shorts (`shorts`) and full-length tights/leggings (`bottom`) are separate products. 03 black ankle socks, 04 white ribbed ankle socks.
  - Hidden backs, soles and body-occluded areas are conservative. Brands, fibre composition, performance and retail identity are unknown; descriptions are visual.
- Heroes (`tools/make-cutouts.py` `pick`, design/CUTOUTS.md b134, exact word match): 02 ALL BECAUSE OF A LITTLE STONE → pale stone running jacket; 05 CAP OFF, ONE LAST LOOK → navy running cap; 01 THIS WAY, PERHAPS, 03 BEFORE THE CUP FALLS and 04 STRAIGHTEN THE SOCK FIRST (SOCK is not "socks") have no matching word, so the outer (orange shell, hydration vest, sage shell). Each reuses the product's own transparent WebP; `lum` uses the existing sRGB-weighted convention.

## Copy

The producer's ko/en/de copy is used unchanged: titles, decks, intros, bodies, pull quotes and tips for all 5 looks, plus names, visual descriptions and individual how-to-wear notes for all 28 products. The app article shows the English title in capitals, the English pull quote, and the localized deck, intro and tip; the body is kept in `products.json` (`copy.body`). Checks: decks differ from intros, pulls differ from titles, all 5 tips and all 28 notes are distinct in every language, and there are no brand, price or verified fibre/performance claims.

## Validation (this session)

- **READY.json:** 158/158 files match size and SHA-256, no unlisted files. All 33 copied files match READY and their `originals/` sources.
- **Visual check:** Claude opened the five editorials and the look 03/05 overview sheets and compared them with the metadata above.
- **Image files:** editorials 1024×1536 JPEG, 280,711–299,776 B (≤300,000). Products 500×500 RGBA WebP, 19,992–49,980 B (≤50,000), alpha min 0 and max at least 250, all corners fully transparent. None of the 2395 previously tracked images changed.
- **Runtime (JavaScriptCore, node is not installed):** all 46 `look/*.js` scripts in index.html order for `origin/main` (da91a73) and for this change.
  - 336 looks and 1941 items (base + 5 / 28). Every existing look and item is byte-identical as JSON.
  - New looks get `gctx` warm-coastal-urban / humidity unknown, `hero` and `cut`.
  - The real `lookFits`/`lookPool`/`skyAvailable` functions from index.html were run over 6480 cases. Outside coastal male running evenings, previous candidates and ranks are identical. New looks appear only in coastal, evening, male, run, chilly/cool/pleasant cells.
  - Rain evenings stay COMING SOON. Dry warm coastal evenings switch from the daytime pleasant running fallback to COMING SOON (the existing b81 evening-only rule). Daytime coastal running and European evening running are unchanged.
  - The `tools/tests/location-first.cjs` logic, ported to JavaScriptCore, passes 72 cases.
- **Browser:** headless Chrome loaded the real index.html with every script and rendered the article section of all 5 looks in ko/en/de (15 renders). Every product image loaded at 500 px on the `#F3EFE8` card, 0 page errors.
- Live deployment, the 33 public images and the archive are verified separately after the push.
