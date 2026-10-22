# Sunny / Chilly / Male / Day / Street — validation

Date: 2026-10-22. Build: b126. Editorial source main: a96e2a0243a0f8592b6df4576b133a27e29f42fc. Integration base: d754d97a72e4b42b0125517978ae5ebb89dbddd8; concurrent sunshine/cloud classification change preserved.

## Delivered assets

| Look | Independent products | 500×500 RGB JPG ≤50KB | JSON ↔ app mapping |
| --- | ---: | --- | --- |
| 06 | 9 | PASS | PASS |
| 07 | 5 | PASS | PASS |
| 08 | 7 | PASS | PASS |
| 09 | 9 | PASS | PASS |
| 10 | 5 | PASS | PASS |

35 products total, 11,091–47,118 bytes per JPG. Every image is a standalone single item (matching pairs count as one), on warm ivory. Visual inspection covered colour, texture, silhouette, isolated item, full framing, footwear arrangement and no text/branding. Product generation used built-in image_gen with the respective unchanged editorial as reference. Exact per-item prompts are stored in each PROMPTS.md.

## Integrity and mapping

- All five source editorial SHA-256 hashes are unchanged; folder editorial.jpg copies are byte-identical. App editorial paths remain unchanged.
- Five existing outfit IDs and 21 existing item IDs are preserved. 14 new IDs added. `appItemId` explicitly records the app ID for each product.
- All 130 unrelated outfits and all unrelated items are unchanged. All library outfit/item image paths exist.
- Library: 135 outfits, 798 items, 95 article outfits. Target counts: 9/5/7/9/5. No duplicate IDs or missing mapped items.
- JSON productCount = products array length = actual product JPG count = app item count for all five looks.
- Korean, English and German product names, styling notes, alt text, captions and introductions are present.
- App product-card backgrounds are calculated from image corner pixels. BUILD and outfits cache version match.
- Base outfits.js plus the synchronous sunny-male-day-street.js supplement evaluated successfully in Node VM. Existing lookPool functions were exercised directly: sunny/chilly/male/day/street selects the target pool; cloudy day, sunny night, female day and light rain retain their respective pools and do not select these five looks. Selection logic itself is unchanged.
- Base look/outfits.js is unchanged. The 5-look supplement is loaded synchronously immediately after it, before app initialization.
- Source style guide IMAGE_STYLE.md unchanged. Coverage, library, handoff and project history updated. `git diff --check` passed.

## Reconstruction limits

These are AI-styled concept reconstructions, not identified retail products. Partly hidden backs, sleeves, waistbands, fasteners, opposite shoes and jewellery closures are conservative. Look 10 shows only upper trousers: full legs and hem are inferred; unseen footwear and socks were excluded. Look 07 concealed socks were excluded. Material terms describe appearance only. Brand, price, purchase URL, material composition and undocumented temperature values remain null. Existing main assets are the source; no new editorial approval or model-age claim is invented.

## Source editorial hashes

- `07-street.jpg`: `5c8eccb8be3d0c23ec1c97809a225859645fa5b132caba55915228e65cfea287`
- `08-street.jpg`: `37b4fe5d64f2392c18c1278244e13d0bc673779258da634f3776400fcdc44a4f`
- `06-street.jpg`: `5a4332bf27bab4d41ef1102966a34b4d03ae91721e13304c611581f024f67bd6`
- `10-street.jpg`: `cca2c50fa6f559726789d2c6b3ec6b2cbe36735ff7c576be1cf290011d8e4967`
- `09-street.jpg`: `caa050d59ed5ee34c3036387abf1ac38ad3e757dfb60f0f5738cc7d5010a7ce9`
