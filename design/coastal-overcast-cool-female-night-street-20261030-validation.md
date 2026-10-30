# b192 · Overcast / Cool / Female / Evening / Street — coastal, mixed gaze (2026-10-30)

The user approved the five mixed-gaze editorials and the automation, and delegated publication of this one batch to `origin/main` to Claude Code (superseding the watcher's earlier PR-only flow). The producer reviewed the products technically and on four backgrounds; the user did not approve each product image individually. Archiving originals and deleting local sources are left to the parent workflow after the live deployment is verified.

## Content and scope

- 5 looks, 27 products (5/6/6/6/4), 32 deployed images. Look IDs `coastal-cool-f35-night-street-20261030-01`–`05`, items `<look ID>.<product id>` (all new IDs, no clashes). Module `look/coastal-overcast-cool-female-night-street-20261030.js` loads after the b190 module and before `cutouts.js`, `coast-grid.js` and `global-context.js`.
- Assets: `look/global/coastal-overcast-cool-female-night-street-20261030/<look ID>/` with `editorial.jpg`, `products/<product id>.webp`, `products.json`. Delivery bytes copied unchanged from `originals/product-batch/complete/`. PNG masters, `editorials/*.png`, `app-products/`, `app-editorials/`, QA sheets, journals, prompts and scripts are not committed.
- Mapping: sky `cloudy` (producer: overcast) · band `cool` · style `street` · gender `f` · age storage `"35"` · **`time: "evening"`** (producer timeOfDay `night`; not a daytime look) · `visualRegion: warm-coastal-urban` · `humidityContext: unknown` · context reviewed. Model appearance 25–28, audience 30–44. Feels-like 16 °C is a creative assumption, not a measurement; actual temperature, humidity, wind and city are null.
- Scenes (props are not products): 01 presses a blue cup lid outside a night café (eye contact) · 02 frees a flower stem caught at the denim cuff · 03 catches an orange escaping the rust tote beside a grocer · 04 sits on steps with a map · 05 holds up found keys at a green door (eye contact). Excluded props: cup/lid, flowers/kraft paper, oranges, map, keys.
- Categories: bomber, denim jacket, overshirt, cardigan, work jacket `outer`; tees `top`; jeans/trousers `bottom`; loafers/sneakers `shoes`; socks `socks`; 01 black crossbody, 02 brown shoulder bag, 03 rust-orange tote (real product), 04 cream crossbody `bag`; 01 and 03 gold hoops `jewelry`; 05 silver round watch `watch`.
  - Omitted: 01 and 05 shoes (outside the crop). No other unseen footwear was added.
  - 02 shoulder bag: only the brown strap is visible; the bag body/closure is inferred. The notice stays in the ko/en/de how-to-wear and in products.json.
  - 01/05 jeans leg shape, occluded backs, soles, the opposite earring and shoe pairs are inferred. Brand and fibre composition unknown.
- Heroes/cutouts: 01 bomber · 02 denim jacket · 03 rust tote · 04 cardigan · 05 work jacket — each the product's own transparent WebP (no duplicate asset, no rembg).

## Copy

Supplied ko/en/de copy (APP_MAPPING / LOCALIZATION) used unchanged: Korean master names, decks, intros, tips and 27 how-to-wear notes, and the producer's en/de text and English title/pull. 5-1 checks: 27 notes distinct in each language, 5 distinct decks/intros/tips/pulls/titles, no tip equals a note, en decks do not repeat the title, intros are scene sentences, no brand/price/fibre/performance claims. No `sourceCopy` needed.

Reported only (not changed):
- 01 bomber note says "partly unzipped / 가슴 아래까지 열고"; in the editorial the zip is open almost fully.
- 02 socks: ko name "크림 스포츠 양말" vs en/de "ribbed"; the cut shows a ribbed cuff.
- 01 bomber cut has a gold-tone zip; the editorial zip reads lighter/silver under night light.
- All five ko decks share the suffix "— 밤 골목의 작은 장난." (decks still distinct; same practice as b190's ko/de decks).

## Validation (this session)

- **READY.json:** 135/135 files match size and SHA-256. Source/outbox not modified.
- **Visual check:** Claude opened all 5 editorials and all 27 product images with Read and compared them to the metadata above.
- **Image files (Pillow):** 5 editorials JPEG 1024×1536, 201,863–288,602 B (≤300,000). 27 products WebP RGBA 500×500, 17,208–45,648 B (≤50,000), alpha 0–255, all four corners alpha 0.
- **Runtime (Node VM, every `<script src>` in index.html order):** 311 looks · 1,818 items · 311 articles (before: 306 · 1,791; +5 · +27). 0 missing editorial/product/cut paths. All 5 new looks `time: evening`, region warm-coastal-urban, hero cut = product image; 27 distinct item IDs.
- **Selector regression** (app `lookFits` source, 4 regions × 5 bands × clear/cloudy × day/evening × dry/light/normal rain × 3 styles × 2 genders = 1,440 cases): 24 changed, all `warm-coastal-urban` evening female street. Daytime never returns the new looks.
  - lookPool effect (coastal, evening, female street, dry): chilly/cool/pleasant, clear or cloudy → these night looks replace the previous daytime fallback (b179 cloudy-cool day street, or b173/b176 clear-pleasant day street). Warm (dry) → COMING SOON (previously daytime pleasant looks), because the existing `timed.length ? timed : mine` rule now finds evening looks for this style/gender and none fits warm. Light/normal rain → COMING SOON before and after.
- `python3 tools/make-cutouts.py --check`: **missing cutouts: 0** (5 new HERO rows kept).
- `node tools/tests/location-first.cjs`: **72 live-library cases passed** (legacy exclusion, rain and temperature guards).
- **Not done:** browser or device rendering. Live deployment, public image hashes and archive are verified separately by the parent workflow.
