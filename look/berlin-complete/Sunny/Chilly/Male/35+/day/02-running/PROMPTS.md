# Running 02 — Product generation prompts

Tool: built-in image_gen (no API/CLI fallback).
Reference: `../02-running.jpg`, existing editorial, unchanged.
The editorial was inspected to derive every item. Some plain socks and corrected lower layers use the written visual breakdown without passing the reference image to prevent extra products appearing.

Each item was generated in a separate tool call. Draft boards and unsupported reflective trims were rejected; only inspected single-category final images are exported. Shoes, socks and gloves are matching pairs and count as one item each.

Export: RGB JPEG, Lanczos resize to 500×500, optimized JPEG quality reduced from 92 as needed to ≤50,000 bytes. No generated raster content was composited or altered by code.

## 01-outer — Sand Beige Running Shell

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: sand beige thin crinkled hooded full zip windbreaker, elastic cuffs, narrow vertical silver reflective upper chest strip. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 02-top — Navy Crew-neck Base Layer

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: dark navy crew-neck long sleeve jersey base layer, chest and cuffs visible, hidden body conservatively reconstructed. Plain unbranded base layer: NO reflective strips, NO silver marks, NO shoulder stripes, NO sleeve stripes. Preserve visible neckline/zip and heather or solid colour as referenced. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 03-bottom — Navy Tapered Joggers

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: dark navy slightly relaxed tapered woven running joggers elastic ankle cuffs and waistband narrow vertical reflective silver calf strips. ONLY the navy jogger trousers, nothing else. No socks, no shoes, no gloves, no accessories, no outfit board. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 04-gloves — Black Silver-line Gloves

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair black thin full-finger running gloves silver vertical stripe on back, gloves tucked at waist in reference. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 05-socks — Grey Ribbed Socks

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: pair light grey marl ribbed crew socks. Plain grey ribbed socks only, NO reflective marks or white stripes. One matching pair. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 06-shoes — Off-white Mesh Runners

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair off-white ivory mesh lace-up running shoes tonal sculpted sole grey rubber toe patch subtle silver reflective overlays. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```
