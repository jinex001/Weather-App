# b219 · European urban · snow · cold · male · day · Chic (minimal) — validation

Batch `european-urban-snow-cold-male-day-chic-20261111`, build b219, base `3f7cf083100666498d4c990320cb402641b728f0` (b218).

## Delivery
- READY.json 166 files, all SHA-256 and sizes re-read before import (0 mismatches); the source folder `output/european-urban-snow-cold-male-day-chic-20261111/picsart` is byte-identical (166/166). Authoritative: `originals/APP_MAPPING.json`, `PRODUCT_COPY.json`, `EDITORIAL_COPY.json`, `originals/product-batch/complete/`.
- Editorials: 5 Picsart images (PICSART_RESULTS.json, PROMPTS.json, style guide `output/IMAGE_STYLE.md` sha256 1f578ca2…), approved by the user for this batch with the handoff/finish instruction (APPROVAL.json; EDITORIAL_QA.json is the earlier pre-approval producer snapshot and still says awaiting-user-approval). 1024×1536 JPG ≤ 298,641 B. Model look 25–28 is the user's casting override for this batch (PROMPTS.json castingOverride); audience 30–44, storage 35+. Producer notes: look 03 front boot emphasized by the wide-angle perspective; hidden item details reconstructed; minor pale flecks on some dark knits.
- Products: 35 (7 each), Picsart cutouts, 500×500 true-alpha WebP ≤ 49,906 B, bytes unchanged, every hash = TECHNICAL_QA. Producer four-background visual review ("reviewed"); no individual human product approval.
- Copy: delivered ko/en/de title/deck/intro/body/pull/tip and product name/description/how-to-wear used verbatim (35 distinct notes per language, 5 distinct tips). App title = en title uppercased, pull = en pull, body only in committed `copy.body`.
- Categories: delivered `category` kept (outer/top/bottom/headwear/scarf/shoes); `gloves` → `hands` (no `gloves` CAT_LABEL key; b160), `producerCategory` keeps `gloves`. Earmuffs (02-04) are `headwear` as delivered.
- Heroes (b134 pick, no override): no title word names a product, so rule 4 → the coat each time. Cut = product WebP itself, no new image.
- Not measured: temperature, feels-like, humidity, wind. Snow is "moderate falling snow depicted".

## Chic label (user request)
- Display only: `LT.styles` minimal entry 미니멀/Minimal/Minimal → 시크/Chic/Chic (look-page style tabs), `STYLE_NAME.minimal` Minimal → Chic (ABOUT YOU tiles and Settings › Clothing style; this label is English in every language, like Sport and Street). Key `minimal`, `STYLES` order, saved `wx-profile.style`, look `style` fields and module names unchanged; no migration.
- index.html diff vs b218 is exactly BUILD, the module tag, the cutouts tag and these label lines (asserted). Headless Chrome, ko/en/de: ko: tiles Sport/Street/Chic, tabs 러닝/스트리트/시크, settings Chic; en: tiles Sport/Street/Chic, tabs Running/Streetwear/Chic, settings Chic; de: tiles Sport/Street/Chic, tabs Laufen/Streetwear/Chic, settings Chic; saved style key stays `minimal`; a female minimal profile still gets the b218 snow looks under the Chic tab.

## Selector
- No code change. The selector functions (`isSnow`, `isRain`, `rainLevel`, `softRanks`, `regionOk`, `lookFits`, `skyAvailable`, `lookPool`, `seeded`) are byte-identical to b218.

## Checks
- JavaScriptCore, real functions over all 28 WMO codes × 9 bands × day/evening × m/f × 3 styles × 5 regions × 3 humidity: 45360 cases. Expectation from the requirement: male Chic snow looks iff snow code, european-urban, m, minimal, day, cold/chilly (36 cases, all 3 draws new); b216 female street (36), b217 male street (36) and b218 female minimal (36) snow eligibility kept exactly; every other case has identical candidates, fits and ranks to base (36 pools changed, all in scope); 270 snow-day cells for other styles/genders equal base.
- Direct examples: snow 73 cold day male Chic → ['eu-snow-cold-m-day-chic-20261111-02', 'eu-snow-cold-m-day-chic-20261111-03', 'eu-snow-cold-m-day-chic-20261111-05']; chilly → ['eu-snow-cold-m-day-chic-20261111-01', 'eu-snow-cold-m-day-chic-20261111-02', 'eu-snow-cold-m-day-chic-20261111-03']; very cold → ['SOON']; cool → ['oc15-13-minimal-m', 'oc15-15-minimal-m', 'oc15-14-minimal-m']; evening → ['oc-unclassified-m-35-evening-minimal-03', 'oc-unclassified-m-35-evening-minimal-04', 'oc-unclassified-m-35-evening-minimal-05']; female minimal snow 73 → ['eu-snow-cold-f-day-minimal-20261111-05', 'eu-snow-cold-f-day-minimal-20261111-04', 'eu-snow-cold-f-day-minimal-20261111-01']; female street → ['eu-snow-cold-f-day-street-20261110-01', 'eu-snow-cold-f-day-street-20261110-03', 'eu-snow-cold-f-day-street-20261110-05']; male street → ['eu-snow-cold-m-day-street-20261111-02', 'eu-snow-cold-m-day-street-20261111-05', 'eu-snow-cold-m-day-street-20261111-01']; code 3 cold → ['oc15-12-minimal-m', 'oc15-13-minimal-m', 'oc15-15-minimal-m']; neutral-urban → ['oc15-12-minimal-m', 'oc15-13-minimal-m', 'oc15-15-minimal-m'].
- Headless Chrome end-to-end: 31 scenarios with a fake Open-Meteo forecast, each on the worktree and on the base with the same fixed random (male current codes 71/73/75/77/85/86, 0/2/3/45/48/51/61/63/65/80, chilly, very cold, cool, evening, street profile; female snow cold/chilly/evening and cloudy; east-asian, coastal, neutral-urban, unknown region; seven calendar days). Chic snow cards, rail and sheets exactly in scope; street and female minimal snow cards kept; base-equal outside scope; 0 page errors.
- Runtime 411 looks · 2384 items (61 look scripts); existing looks and items unchanged; 40 image hashes on disk; 2,906 previously tracked images unchanged; no PNG committed.
- 15 localized article renders (5 looks × ko/en/de), all 35 product images load, 0 page errors.

## Limits
- Snow looks exist only for european-urban · cold/chilly · day: street (f b216, m b217) and Chic/minimal (f b218, m b219). Running snow cells keep the pre-b216 choice (cloudy sets or COMING SOON).
- Places without a country code are region unknown; coastal European cities are warm-coastal-urban; neutral-urban places don't draw these looks.
- Snow evenings use the evening looks (b81); these day looks never show in the evening.
