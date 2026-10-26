# Rain / Normal / Chilly / Male / 35+ / Day / Minimal — 2026-10-26 set — b163 verification

- Delivery order (user, 2026-10-26): the user explicitly authorized this single approved batch's complete integration, publication to `origin/main` and actual web-app delivery, superseding the earlier PR-only workflow for this watcher (`IMAGE_INBOX_HANDOFF.md`). Archiving the originals to iCloud and deleting the verified local originals is the parent task's job after independent deployment and sync verification. **None of that has happened in this step.** The local outbox batch was neither moved nor modified.
- Source: local outbox batch `rain-normal-chilly-male-day-minimal-20261026`. READY.json has `approved: true` and `products_complete: true`. All 104 listed files match their SHA-256, with no unlisted and no missing files (READY.json itself is outside the list). READY.json was not modified.
- Approval basis (READY.json): the user authorized the autonomous workflow. No separate user visual approval of the generated products is claimed.
- Copied byte for byte (no re-encoding): `NN/editorial.jpg` (5) and `NN/products/*.webp` (24). Products were renamed to `NN-<app category>.webp`; the delivered name is kept in products.json `deliveredImage`, and each `sha256` matches the delivered file.
- Not committed (archive-only): `editorial-original.png`, `masters/`, `PROMPTS.md`, `generation-*.json`, `init_products.py`, `prepare_metadata.py`, `refine_notes.py`, `bulk_finish.py`, `QA-0*.jpg`, `PRODUCT_PLAN.json`, `PRODUCT_VALIDATION.json`, `COPY_L10N.json`, `KOREAN_MASTER.json`, `LOOKS.json`, `validation.json`, `CHECKPOINT.json`, `README.md`, `READY.json`.
- The committed products.json files are public rewrites: no `/Users` paths, `reference`, `masterSource`, `generationSource` or prompts. The delivered technical `description` moved to the evidence field `designDescriptionEn`. Public `description*`/`howToWear`/`note` are the styling instructions.

## Visual inspection (every file opened with Read and viewed)

| Look | Editorial (1024×1536 JPG) | Products (500×500 transparent WebP) | Matches metadata |
| --- | --- | --- | --- |
| 01 | Man closing a wet black umbrella at a doorway, 283,073 B | charcoal rain mac · light grey crewneck · black tailored trousers · black Chelsea boots (pair) · black flap crossbody · black long umbrella (straight handle) | yes |
| 02 | Man under a black umbrella twisting a tumbler lid, 269,595 B | stone beige balmacaan · espresso crewneck · taupe pleated trousers · black long umbrella | yes |
| 03 | Man at a door holding keys over a black crossbody, umbrella tucked under arm, 273,639 B | ink navy hooded raincoat · cobalt crewneck · charcoal trousers · black zip-top crossbody (wide strap) · black crook-handle umbrella | yes |
| 04 | Man pulling an olive hood up in the rain on cobbles, 278,084 B | deep olive hooded raincoat · oatmeal mockneck · charcoal slim trousers · black leather shoes (pair) | yes; see note on shoe colour |
| 05 | Man loading a canvas tote of groceries into a car, rust scarf, 235,373 B | black belted rain trench · rust orange fringed scarf · cream crewneck · dark charcoal trousers · empty natural canvas tote | yes |

- QA composites `QA-01`–`QA-04` were viewed. Every product appears on white, black, grey and app-ivory backgrounds, whole, with no matte rectangle, halo or clipped edge. Colours match the editorials.
- Note (not changed, reported): in editorial 04 the partly visible shoe reads dark brown. The supplied product and its Korean name (블랙 레더 슈즈) are black. Under `IMAGE_MAPPING_HANDOFF.md` 5-1, names are not changed; this is reported to the user.
- Scene props, not products: 02 tumbler, 03 keys, 05 car and groceries. 05's empty canvas tote is a product. Shoes and socks hidden by the tight crops of 02, 03 and 05 were not added.

## Mapping

- `look/rain-normal-male-day-minimal-20261026.js` (before `look/cutouts.js`). Looks `rn-chilly-m35-day-minimal-20261026-01`–`05`: `sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: minimal`. It is a day set, so there is no `time` key (the live schema only uses `time: "evening"`). Items are `<look>.NN-<cat>`, in delivery order. `bg` is `#F3EFE8`. Before this change, no ID or path in the repository contained `rn-chilly-m35` or `Rain/Normal/Chilly/Male`.
- Categories (live `CAT_LABEL`): coat → `outer`, knit → `top`, trousers → `bottom`, boots/shoes → `shoes`, crossbody/tote → `bag`, scarf → `scarf`, umbrella → `accessory`. The app has no umbrella category, and the calendar rain rule matches `["accessory", /우산/]`. No new category code was introduced. The delivered `category` stays in products.json and the app category is in `appCategory`.
- Copy: the Korean title, caption, intro and tip (KOREAN_MASTER.json, identical to each products.json `copy`) and each `howToWearKo` are kept byte for byte (`deck.ko`, `article.intro.ko`, `article.tip.ko`, `note.ko`, `copy.title.ko`). Korean product names are as supplied.
- en/de deck, intro, tip and all 24 notes were written as translations of the specific Korean text. The delivered en/de notes repeated four template sentences across looks, so they were replaced.
- en/de names: the supplied names are kept, except where they added a material the Korean name doesn't state. 01 bag "Black leather crossbody" → "Black flap crossbody bag", and 03 bag "Black nylon crossbody" → "Black zip-top crossbody bag". These are named by visible features. 04 trousers "Charcoal slim tailored trousers" (ko 슬림) now differs from 03.
- Display titles are the supplied English titles: CHARCOAL BETWEEN SHOWERS · BEIGE BEFORE THE SIP · COBALT FOUND THE KEYS · OLIVE CATCHES THE WIND · RUST ON THE WAY HOME.
- New uppercase pull lines, written from the scenes: ONE LAST SHAKE AT THE DOORSTEP. · A TIGHT LID, A DRY SLEEVE. · KEYS FOUND, UMBRELLA TUCKED. · HOOD UP, GRIN ON. · LEEKS IN, SCARF STILL SWINGING.
- Hero (b134 title-word rule, `design/CUTOUTS.md`):
  - 01 CHARCOAL → Charcoal rain mac
  - 02 BEIGE → Stone beige balmacaan
  - 03 COBALT → Cobalt crewneck knit (`02-top`)
  - 04 OLIVE → Deep olive hooded raincoat
  - 05 RUST → Rust orange scarf (`02-scarf`)
  - Each cut is that product's own WebP (no new cutout, no copy). HERO and CUTS have 5 rows each. `lum` is `null`: it could not be computed (no image decoder was available), and the app has not read it since b137.
- Casting: model appearance 28–32 (`casting.modelAppearanceAgeRange`), audience 35+. No numeric temperature: `temperatureC`/`feelsLikeC` are null and `isLiveMeasurement` is false. No brand, price, link, fibre composition or performance claim.

## Checks

- **Mandatory parent publication gate** (`check_rain_normal_male_day_minimal_20261026.py`): **PASSED**, run by the parent task before commit (evidence: `automation/state/rain-normal-chilly-male-day-minimal-20261026-content-gate.json`, `passed: true`, looks 5, products 24, all 29 paths, BUILD b163). `node` is not installed, so the gate evaluates every look script loaded by `index.html` (17 scripts, in page order) with macOS JavaScriptCore via JXA (`osascript -l JavaScript`). No assertion was dropped. Its Pillow checks cover decoded pixels, alpha and source hashes, and it also checks the canonical Korean copy, languages and hero reuse. The parent task also reviewed all QA composites visually.
- Runtime totals, from the same JXA load of all 17 scripts: 205 looks, 1301 items, 205 article looks, 205 heroes.
- Earlier, during integration, a pure-Python mirror of the gate assertions also passed. It skipped JS execution and pixel decoding, which the parent gate covers. It checked:
  - looks/products 5/24, sky/rain/style/gender/age/bands/time, item counts
  - Korean intro/caption/tip/note and names preserved
  - ko/en/de complete; hero ∈ items and cut == image
  - editorial and product SHA-256 = source; editorial JPEG SOF 1024×1536 ≤ 300,000 B
  - WebP VP8X canvas 500×500 with the alpha flag set, ≤ 50,000 B
  - notes unique per look and language (all 72 note strings distinct)
  - deck/intro do not list ≥2 product names
  - no local paths or prompts in public files
  - no °, %, fibre, brand or price terms in UI copy
- Diff scope: `index.html` (new `<script>` before cutouts.js, `cutouts.js?v=b163`, `BUILD` b162 → b163) and `look/cutouts.js` (5 CUTS + 5 HERO rows appended). Everything else is new files. No existing image, look script or look/item record was modified.
- Selection: checked by reading the live `rainLevel`/`lookFits`/`lookPool` code (not executed).
  - Normal rain (63 · 66 · 81), daytime, male, minimal moves from the placeholder to these 5 looks (sky rank 0, 3 drawn at random).
  - Light rain, daytime, male, minimal keeps its own sky-rank-0 set.
  - Pouring rain still only reaches rank 1, so it stays a placeholder.
  - Evenings filter to evening looks, so these day looks don't appear.
  - Dry days exclude rain looks.
- Rendering: not done (no browser permission in this session). A device check of the home and sheet under normal-rain daytime weather is still needed.
