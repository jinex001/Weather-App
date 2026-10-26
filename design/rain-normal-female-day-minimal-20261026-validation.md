# Validation · b168 · Rain / Normal / Chilly / Female / 35+ / day / Minimal — 2026-10-26 set

Batch `Rain/Normal/Chilly/Female/35+/day/minimal-20261026` (local outbox, root `01-minimal`–`05-minimal` delivery only).

## Source and scope

- Used only the root delivery folders `01-minimal`–`05-minimal` (`editorial.jpg`, `products/*.webp`, `products.json`). Nothing from `originals/` (PNG masters, rejected cropped trousers / extra ivory knit, discarded editorial versions, scripts, QA sheets) and no `complete/` intermediate file is committed.
- Committed: 5 `editorial.jpg` + 23 product WebP (renamed `NN-<app category>.webp`; `05-gloves` → `05-hands`, `04-glasses` → `04-eyewear`; bytes unchanged), 5 sanitized `products.json` (no local `/Users/…` reference paths), `look/rain-normal-female-day-minimal-20261026.js`, 5 HERO + 5 CUTS rows in `look/cutouts.js`, BUILD b168 and cache keys in `index.html`.
- The outbox was only read; nothing was moved, changed or deleted. iCloud archiving is left to the parent task.
- Parent content gate `automation/state/rain-normal-chilly-female-day-minimal-20261026-content-gate.json`: `passed: true` (all library scripts evaluated in index.html order via macOS JXA, 28 image hashes, category/age/gender/day mapping, alpha, pixel size, file size, Korean master, ko/en/de fields, unique item notes).

## Images

- SHA-256 of all 28 committed files equals the root delivery file (0 mismatches).
- Editorials: JPEG 1024×1536, 271,919–299,840 B (≤300,000 B). **Exception recorded:** editorial 01 was exported by the producer at JPEG quality 72 to stay under 300 KB (299,840 B); 02–05 at quality 80. The PNG master is unchanged in the archive. 04 is the user-requested revision with the stray glasses arm removed; the supplied JPEG is used byte-for-byte.
- Products: RIFF/WebP with alpha flag, 500×500, 11,566–49,620 B (≤50,000 B). Producer-side alpha checks plus the parent gate's alpha check passed.
- Visual review (every editorial and every product opened): 01 stone beige belted mac, ivory rib turtleneck, charcoal wide trousers, black Chelsea rain boots, black shoulder bag ✓ · 02 charcoal hooded raincoat, oatmeal turtleneck, black trousers, oxblood leather tote, ivory knitted gloves ✓ · 03 cobalt raincoat, cream turtleneck, black trousers, black shoulder bag ✓ · 04 deep olive hooded parka, charcoal melange knit, taupe fringed scarf, tortoiseshell glasses ✓ · 05 navy hooded raincoat, burnt orange crewneck, graphite wide trousers, taupe fringed scarf, black crossbody ✓.
- Uncertainty (AI styling concepts, not observed facts): 02 knit front is mostly hidden by the tote; the product's cable pattern is inferred (the visible neck/cuffs read as rib). 04 knit and 05 coat front are partly hidden; neckline, back and closures inferred. 04 and 05 scarves look alike (separate files and hashes). Shoes/socks not visible in 02–05 crops are not produced. Fabric composition, brands, prices and temperatures are not claimed (`temperatureC` / `feelsLikeC` null, not a live measurement).
- Scene props, not products: umbrellas (01, 03), bread and paper bag (03), keys (02), lens cloth (04), car (05).

## Mapping

- 5 looks `rn-chilly-f35-day-minimal-20261026-01`–`05`: `sky rain`, `rain normal`, `bands [chilly]`, `gender f`, `age "35"`, `style minimal`, no `time` key → day only (index.html filters `(o.time === "evening") === !!v.evening`, so the set is never shown in the evening). `rain normal` means WMO 63 · 66 · 81 only; light (51–57 · 61 · 80) and pouring (65 · 67 · 82 · 95–99) keep their own sets/placeholder.
- 23 new items `…-NN.NN-<cat>` (5/5/4/4/5). Categories outer/top/bottom/shoes/bag/hands/scarf/eyewear, all existing app categories. `bg` `#F3EFE8` (a `#` colour, never `transparent`).
- Hero: each look's outer coat WebP (titles name the coat colour: BEIGE · CHARCOAL · COBALT · OLIVE · NAVY); cut = that product's own transparent WebP, `lum` null, no new background extraction.
- Runtime after b168 (parent gate scripts in index.html order + this set): 225 looks · 1393 items · 225 article looks (b167: 220 · 1370). Other sets were not edited; only `cutouts.js` gained 10 rows.
- Every look has title, deck, intro, pull, tip and ko/en/de; every item has ko/en/de name and note; no note repeats inside a look or across the set.

## Copy

- Korean master verbatim (caption → `deck.ko`, intro, tip, product names, per-product how-to-wear). App title = supplied English caption in uppercase; `pull` as supplied.
- en: supplied text verbatim. de: supplied text kept except three wording/grammar fixes:
  - 02 oxblood tote name: `Bordeauxbraune Leder-Tote` → `Bordeauxroter Leder-Shopper` (German noun/colour).
  - 02 gloves note: `… und beim Schlüsselholen vom Ring fernhalten.` → `… und die Handschuhe beim Schlüsselholen vom Schlüsselring fernhalten.` (missing object).
  - 04 tip: `Den Schal bequem in der Kapuze tragen …` → `Den Schal bequem unter die Kapuze stecken …` (matches the Korean "후드 안쪽에 넣고").

## Not verified here

- Full selection-matrix regression and screen rendering were not rerun in this session (no node/browser; the parent gate covers runtime loading and mappings). Check on a device.
- Per-product user visual approval is not claimed (producer review under user authorization only).
