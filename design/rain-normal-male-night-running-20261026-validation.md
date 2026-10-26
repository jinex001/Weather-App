# Validation · b170 · Rain / Normal / Chilly / Male / 35+ / night / Running — 2026-10-26 set

Batch `rain-normal-chilly-male-night-running-20261026` (local outbox, `delivery/01-running`–`05-running` only).

## Source and scope

- READY.json: `approved: true`, `products_complete: true`, category `Rain/Normal/Chilly/Male/35+/night/running`, 5 editorials, 36 products, `approval_scope` = user-authorized autonomous production/integration/deployment, product review by Codex, no separate user visual approval. All 163 listed files match SHA-256 and byte size; no file on disk outside the list (besides READY.json itself).
- KOREAN_MASTER.json, DELIVERY_COPY.json and each `delivery/NN-running/products.json` carry identical look copy (title/deck/intro/tip/pull) and identical product names and How to Wear.
- Committed: 5 `editorial.jpg` + 36 product WebP (delivered file names, bytes unchanged), 5 sanitized `products.json` (no `prompt`, `masterSource`, `generationSource`, `reference` or local paths), `look/rain-normal-male-night-running-20261026.js`, 5 HERO + 5 CUTS rows in `look/cutouts.js`, BUILD b170 and cache keys in `index.html`.
- Not committed: root `NN-running/editorial.jpg` / `editorial-master.png` (different, earlier export), `delivery/masters/*.png`, `delivery/qa/*`, `PROMPTS.md`, `PRODUCT_PLAN.json`, `generation/*`, `bulk_finish.py`, READY/SHA256/VISUAL_REVIEW/VERIFICATION/HANDOFF.
- The outbox was only read; nothing moved, changed or deleted. iCloud archive and local cleanup are left to the parent task.

## Images

- SHA-256 of all 41 committed image files equals the delivery file and the READY.json entry (0 mismatches).
- Editorials: baseline JPEG, all 2:3 — 01 960×1440 277,048 B · 02 960×1440 282,205 B · 03 1024×1536 263,046 B · 04 960×1440 269,935 B · 05 1024×1536 256,365 B (≤300,000 B; delivery downsample, no upscale).
- Products: RIFF/WebP `VP8X` (alpha flag) + `ALPH` + `VP8`, Pillow mode RGBA, 500×500, 13,598–49,520 B (≤50,000 B). Alpha 0 at all four corners on all 36. Border: 23 files have alpha 0 on the whole 1-px border, 12 have a stray value of 1 (lossy noise), `04/01-outer` has a faint fringe ≤18/255 on the top edge (x≈216–260) where the hood comes within a few pixels of the frame — the hood is complete in the image and on the QA sheets, nothing is clipped.
- Visual review — Claude opened all 5 editorials, all 36 products and the QA sheets 01-white, 04-app, 05-black:
  - 01 charcoal hooded shell (curved pocket and upper-sleeve reflectors), black thermal base (concealed), black tights with calf reflector, black socks, charcoal mesh trainers with pale soles, black gloves, black ear headband ✓ — side-stepping a puddle at the kerb.
  - 02 cobalt hooded shell (shoulder and pocket reflectors), black high-neck base, black slim running trousers with silver thigh slash, dark socks with cobalt cuff edge, black/cream trainers, black gloves with silver back mark, charcoal cuffed beanie ✓ — adjusting the beanie by a park gate.
  - 03 grey hooded shell (chest and wrist bars), black mock-neck base, navy tights with calf mark, charcoal socks, grey knit trainers, charcoal gloves, black fleece headband ✓ — retying laces on a step.
  - 04 olive reflective shell, black mock-neck base, black tapered trousers with silver slash, black socks, all-black trainers, charcoal gloves with segmented reflectors, charcoal ear warmer, black round running watch (blank face, no text or readings) ✓ — stopping on cobbles to check the watch.
  - 05 orange hooded shell (back view), charcoal base (concealed), charcoal tights with long silver stripe, black socks, charcoal/silver trainers, black gloves with curved reflector, black fleece headband ✓ — glancing back while running past a shopfront.
- Reconstructions (producer `reconstruction`, kept in products.json, not used as public copy): 01 and 05 base layers fully concealed; 04 socks/shoes and 05 socks/shoes not visible; 02–03 socks partly visible; 05 shell front restored from the back view; full pairs and hidden waistbands restored; small silver details on concealed items are generation-introduced inferences. No brand, price, fibre composition, temperature or waterproof/grip claim (`temperatureC`/`feelsLikeC` null, `isLiveMeasurement: false`).
- Observed but unchanged: 05 tights named charcoal look near-black in the night photo; 03 socks named charcoal are black with grey bands. Names kept (section 5-1: report, don't rename).

## Mapping

- 5 looks `rn-chilly-m35-night-run-20261026-01`–`05`: `sky rain`, `rain normal`, `bands [chilly]`, `gender m`, `age "35"`, `style run`, `time evening` (matches each products.json `appMapping`).
- 36 items `<look id>.<delivered product id>` (7/7/7/8/7). App categories: outer, under (supplied), bottom, socks, shoes, hands (`gloves`), headwear (`headband`, `beanie`), watch — all existing codes; supplied `category` kept in products.json beside `appCategory`. `bg` `#F3EFE8`.
- Hero: first colour word of each title names the shell (CHARCOAL · COBALT · GREY · OLIVE · ORANGE; 01 charcoal trainers lose to the larger garment, rule 3) → `NN.01-outer`, cut = that product's own WebP, `lum` null, no new cutout. All 5 HERO/CUTS rows resolve to committed files.
- No ID or path collision: no other look script contains `rn-chilly-m35-night-run-20261026`; target folder did not exist on latest main (697a99d).
- Runtime: b169 230 looks · 1420 items · 230 articles + 5 / 36 / 5 = 235 · 1456 · 235.
- Selection (`lookFits` rules): only normal rain · evening · male · running changes (placeholder → these 5; neighbouring bands cold/cool also draw them as before). Light-rain evening male running keeps its rank-0 b158 looks; pouring-rain evening male running stays a placeholder (best rank > 0); day and dry evenings never see these looks (`time` filter, rain looks excluded on dry days).

## Copy

- Korean master used verbatim for title (→ products.json `copy.title.ko`), deck, intro, tip, product names and every product How to Wear; supplied en/de used verbatim except two German refinements: 05 deck `Orange Jacke …` → `Orangefarbene Jacke …`, 05 shell name `Orange Laufjacke mit Kapuze` → `Orangefarbene Laufjacke mit Kapuze` (originals in `copy.sourceDeck` / `sourceName`).
- `article.title` = supplied English uppercase title; `pull` = supplied English pull in uppercase (`ADJUST EACH LAYER AS YOUR BODY WARMS UP.`, same for all five; the app shows one string); `tip` ko/en/de supplied (same for all five).
- **Historical b170 Section 5-1 exception (resolved below):** product How to Wear is one sentence per category, so the set has 9 distinct notes for 36 products (each repeated across the five looks; 0 duplicates inside any one look). Under the user's explicit instruction ("Preserve Korean verbatim") and the parent gate (asserts `note.ko` = supplied `howToWear.ko`), the master was not rewritten. If per-look notes are wanted, the Korean creative owner should supply a revised master (b164 route).
- Deck/intro are scene sentences, not product-name lists; English/German do not capitalise product names.

## Checks run

- Parent gate `automation/state/rain-normal-chilly-male-night-running-20261026-verify.py` (image-tools python): `{"status": "local_content_verified", "assetCount": 41, "lookCount": 5, "productCount": 36}`.
- Focused script (Pillow): schema, ko/en/de presence on every deck/intro/tip/name/note, uppercase title + pull, editorial 2:3 ≤300 KB and READY hash, product WebP RGBA 500×500 ≤50 KB and READY hash, corners, `bg` hex, item references = items, HERO/CUTS rows, index script order and BUILD, products.json sanitised.

## Not verified here

- Screen rendering (home, Today's Look sheet) not run in this session (no browser); check on device after deployment.
- Per-product user visual approval is not claimed (Codex producer review + Claude visual read).


## b172 · copy-v2 completion

The image producer revised the Korean master after the initial repeated-note finding. COPY_V2 supplies 36 distinct product-specific How-to-Wear notes in each of ko/en/de, plus five distinct uppercase English pulls and five distinct localized tips. This newer creative copy supersedes the earlier verbatim preservation instruction only for these fields. Runtime notes and public products.json descriptions/howToWear match. Images, names, IDs, titles, deck and intro are unchanged. Initial publication was completed by Claude Code; its follow-up attempt returned a new provider session limit, so parent Codex applied this scoped correction under the existing explicit deployment authorization. Parent runtime/image/copy gate passed before this commit.
