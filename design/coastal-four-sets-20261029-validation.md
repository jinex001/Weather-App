# b185 · Four coastal daytime sets — 2026-10-29

The user explicitly authorized Codex to publish all four waiting sets directly: “클로드로 보내지말고 바로 너가 올려”. This is a task-specific execution override of the usual Claude handoff, not a change to standing production policy. Claude Code was not invoked.

## Added content

| Batch | Looks | Products | Sky / band / style |
| --- | ---: | ---: | --- |
| coastal-overcast-cool-male-day-minimal-20261028 | 5 | 25 | cloudy / cool / minimal |
| coastal-overcast-cool-female-day-running-20261028 | 5 | 27 | cloudy / cool / run |
| coastal-overcast-cool-male-day-running-20261029 | 5 | 21 | cloudy / cool / run |
| coastal-sunny-pleasant-female-day-minimal-20261029 | 5 | 21 | clear / pleasant / minimal |

Each batch has its own supplementary module and immutable deployment assets in `look/global/<batch>/<lookId>/`. All are day looks (no evening field), age storage “35”, reviewed warm-coastal-urban and humidity unknown. Creative feels-like inputs are 16°C for cool and 22°C for pleasant, not measurements; actual temperature and humidity remain unknown. Sunny and overcast are independent conditions.

## Approval and reconstruction

The user authorized product production and publication. Per-product user visual approval is not claimed; technical and visual checks are producer checks. Sources, previous revisions, PNG masters and prompt journals remain outside Git. Male minimal 05 shoes are inferred outside the crop. Sunny female 05 has no shoe product because footwear is outside the crop; sunglasses are included as eyewear. Hidden backs, whole shapes, soles and opposite shoes are reconstructions. No brand, exact composition, retail identity or performance claims were added. Blue cup, flowers, groceries, maps, keys, bottles, earbuds/cases, phone, book and towel are scene props.

Male minimal: 02 zip jacket; 03 small band collar despite legacy collarless ID; 05 ribbed collar/cuffs and striped jersey (not knit). Female running: 02/04 integrated liner shorts are one product; 04 attached hood and running belt; 05 round sports watch. Male running: no jackets; 03 muted blue actual editorial takes precedence over cobalt prompt; tapered trousers are not leggings. Sunny female 01 retains the visible gold bit hardware. Existing delivered image bytes are unchanged.

## Copy and mapping

All 94 items have distinct ko/en/de wearing instructions. Earlier repeated template notes, generic tips and scene introductions were revised by the Korean creative author (Codex), with source copy retained in products.json. Earlier titles, product names and IDs are preserved. Each article has a title, scene caption, introduction, uppercase pull quote and localized tip. New names describe visual concepts rather than verified retail goods.

The 20 HERO and CUTS entries reuse existing transparent product WebP files. No duplicate hero cutouts were generated. The sunny female sunglasses story uses its sunglasses as hero. All modules load before cutouts and global-context; cache build is b185. Selector, context logic and existing modules are unchanged.

## Verification

- Runtime: 291 looks and 1,728 items (+20/+94). All previous outfit and item values unchanged.
- All 114 images match delivered SHA-256 values. Products 500×500 actual alpha WebP ≤50,000B (maximum 49,728B), transparent corners; editorials 1024×1536 JPG ≤300,000B.
- 2,056 previously tracked images unchanged. No original PNG, QA sheet or generation journal is committed.
- Actual unchanged lookFits function plus global adapter tested for 6,480 weather/band/time/style/gender/region/humidity cases. Existing candidates and their ranks unchanged; new region-specific day candidates respect adjacent bands and rain sky ranks.
- make-cutouts.py --check: missing cutouts 0.
- Headless Chrome rendered all 20 product sections in ko/en/de (60 cases); every product image loaded and zero JavaScript page errors occurred. Four representative product-card screenshots were visually inspected. This checks the actual detailHtml renderer with a test-only export, not the full live weather API flow.
- Live deployment is independently checked after publication; a push alone is not deployment proof.
