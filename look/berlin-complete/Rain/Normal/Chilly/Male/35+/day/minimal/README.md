# Rain / Normal / Chilly / Male / 35+ / day / Minimal — 2026-10-26 set (01–05)

- Looks: `rn-chilly-m35-day-minimal-20261026-01` … `-05`; 24 products (6/4/5/4/5).
- App: `sky: rain`, `rain: normal` (WMO 63 · 66 · 81), `bands: [chilly]`, `gender: m`, `age: "35"`, `style: minimal`, day set (no `time` key).
- Target audience 35+; model appearance approximately 28–32 (`casting.modelAppearanceAgeRange`).
- Creative Berlin daytime rain setting. No numerical temperature was supplied (`temperatureC`/`feelsLikeC` null is intentional); nothing here is a live weather measurement.
- Editorials (1024×1536 JPG) and products (500×500 transparent WebP) are copied byte for byte from the approved batch, renamed to `NN-<app category>.webp` (the delivered name stays in products.json `deliveredImage`). The batch was approved under the user's autonomous end-to-end workflow authorization; no separate per-product user visual approval is claimed.
- Categories: coat → `outer`, knit → `top`, trousers → `bottom`, boots/shoes → `shoes`, crossbody and tote → `bag`, scarf → `scarf`, umbrella → `accessory` (the app has no umbrella category; the calendar rain rule picks umbrellas as `accessory`). A pair of shoes is one product.
- Not products: 02 tumbler, 03 keys, 05 car and groceries are scene props. The empty canvas tote in 05 is a product. Shoes and socks hidden by tight crops (02, 03, 05) were not added.
- Hidden areas are conservative reconstructions (`reconstructionSummary`, `evidence`, `reconstruction`). 05 cream knit is inferred from the visible cuff.
- No brand, price, purchase link, fibre composition or temperature claim.
- Copy: Korean title/caption/intro/tip (KOREAN_MASTER) and each product's Korean how-to-wear are kept verbatim; en/de are translations of them. Display titles are the supplied English titles; the Korean title is in products.json `copy.title.ko`.
- Mapping: `look/rain-normal-male-day-minimal-20261026.js` (b163). Home hero follows the b134 title-word rule (design/CUTOUTS.md): 01 CHARCOAL, 02 BEIGE, 04 OLIVE → outerwear; 03 COBALT → cobalt knit; 05 RUST → rust scarf. Each cut is that product's own WebP (no new cutout). Validation: design/rain-normal-male-day-minimal-20261026-validation.md.
