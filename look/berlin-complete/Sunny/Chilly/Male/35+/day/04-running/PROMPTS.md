# Running 04 — Product generation prompts

Tool: built-in image_gen (no API/CLI fallback).
Reference: `../04-running.jpg`, existing editorial, unchanged.
The editorial was inspected to derive every item. Some plain socks and corrected lower layers use the written visual breakdown without passing the reference image to prevent extra products appearing.

Each item was generated in a separate tool call. Draft boards and unsupported reflective trims were rejected; only inspected single-category final images are exported. Shoes, socks and gloves are matching pairs and count as one item each.

Export: RGB JPEG, Lanczos resize to 500×500, optimized JPEG quality reduced from 92 as needed to ≤50,000 bytes. No generated raster content was composited or altered by code.

## 01-outer — Coral Red Running Shell

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: coral rust red thin stand collar zip front running windbreaker, elastic hem and cuffs, silver reflective short chest strip and slanted upper sleeve strip, no hood visible. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 02-top — Burgundy Zip-neck Base Layer

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: dark burgundy long sleeve high collar quarter zip jersey running base layer. Plain unbranded base layer: NO reflective strips, NO silver marks, NO shoulder stripes, NO sleeve stripes. Preserve visible neckline/zip and heather or solid colour as referenced. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 03-bottom — Charcoal Cropped Running Trousers

```text
Use case: product-mockup. Generate exactly one isolated product category: charcoal grey slim tapered ankle length running trousers flat hem with small ankle zip/slit narrow silver reflective long vertical lower calf strip. One pair of trousers/tights ONLY. Absolutely NO gloves, NO socks, NO shoes, NO accessories, NO outfit layout, NO product board. Retain ONLY specified silver calf reflection strips. Warm ivory #F3EFE8 background. Vertical overhead flat lay, product full length centered, generous empty margin, soft studio light, subtle contact shadow, realistic texture. No person, hands, mannequin, hanger, text, brand or watermark.
```

## 04-gloves — Black Segmented-reflector Gloves

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair black full finger running gloves silver segmented rectangular strips on backs. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 05-socks — Ivory Ribbed Socks

```text
Use case: product-mockup. Generate exactly one isolated product category: pair ivory ribbed crew socks. A single matching pair of plain socks ONLY. Absolutely NO silver or white reflective stripes, NO logos, NO embroidery, NO other objects. Warm ivory #F3EFE8 background. Vertical overhead flat lay, product full length centered, generous empty margin, soft studio light, subtle contact shadow, realistic texture. No person, hands, mannequin, hanger, text, brand or watermark.
```

## 06-shoes — Olive Mesh Runners

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair olive green mesh lace-up running shoes thick warm off-white midsole black rubber toe and outsole silver white narrow reflective toe and heel strips. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```
