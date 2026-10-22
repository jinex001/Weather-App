# Running 05 — Product generation prompts

Tool: built-in image_gen (no API/CLI fallback).
Reference: `../05-running.jpg`, existing editorial, unchanged.
The editorial was inspected to derive every item. Some plain socks and corrected lower layers use the written visual breakdown without passing the reference image to prevent extra products appearing.

Each item was generated in a separate tool call. Draft boards and unsupported reflective trims were rejected; only inspected single-category final images are exported. Shoes, socks and gloves are matching pairs and count as one item each.

Export: RGB JPEG, Lanczos resize to 500×500, optimized JPEG quality reduced from 92 as needed to ≤50,000 bytes. No generated raster content was composited or altered by code.

## 01-outer — Navy Hooded Windbreaker

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: dark navy crinkled thin hooded full zip windbreaker silver reflective small upper chest stripe elastic cuffs and hem. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 02-top — Off-white Crew-neck Long Sleeve

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: off-white ivory crew-neck long sleeve jersey base layer with long close cuffs visible under shell. Plain unbranded base layer: NO reflective strips, NO silver marks, NO shoulder stripes, NO sleeve stripes. Preserve visible neckline/zip and heather or solid colour as referenced. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 03-bottom — Charcoal Running Tights

```text
Use case: product-mockup. Generate exactly one isolated product category: dark charcoal grey fitted full length running tights flatlock seams slim long silver reflective strip on outer lower calf. One pair of trousers/tights ONLY. Absolutely NO gloves, NO socks, NO shoes, NO accessories, NO outfit layout, NO product board. Retain ONLY specified silver calf reflection strips. Warm ivory #F3EFE8 background. Vertical overhead flat lay, product full length centered, generous empty margin, soft studio light, subtle contact shadow, realistic texture. No person, hands, mannequin, hanger, text, brand or watermark.
```

## 04-gloves — Black Reflective-line Gloves

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair black thin full-finger running gloves silver slightly curved horizontal stripe across back. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 05-socks — Grey Marl Socks

```text
Use case: product-mockup. Generate exactly one isolated product category: pair light grey marl ribbed crew socks. A single matching pair of plain socks ONLY. Absolutely NO silver or white reflective stripes, NO logos, NO embroidery, NO other objects. Warm ivory #F3EFE8 background. Vertical overhead flat lay, product full length centered, generous empty margin, soft studio light, subtle contact shadow, realistic texture. No person, hands, mannequin, hanger, text, brand or watermark.
```

## 06-shoes — Grey Cushioned Runners

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair medium grey mesh lace-up running shoes thick white foam midsoles black rubber toe outsole bright silver reflective heel overlay. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 07-gear — Orange Sports Bottle

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: single translucent bright orange cylindrical sports squeeze water bottle, black collar and orange pull spout, slightly narrowed neck, flat round base. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```
