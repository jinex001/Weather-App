# Running 03 — Product generation prompts

Tool: built-in image_gen (no API/CLI fallback).
Reference: `../03-running.jpg`, existing editorial, unchanged.
The editorial was inspected to derive every item. Some plain socks and corrected lower layers use the written visual breakdown without passing the reference image to prevent extra products appearing.

Each item was generated in a separate tool call. Draft boards and unsupported reflective trims were rejected; only inspected single-category final images are exported. Shoes, socks and gloves are matching pairs and count as one item each.

Export: RGB JPEG, Lanczos resize to 500×500, optimized JPEG quality reduced from 92 as needed to ≤50,000 bytes. No generated raster content was composited or altered by code.

## 01-outer — Deep Green Hooded Shell

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: dark forest green crinkled hooded full zip windbreaker with silver reflective strips across upper chest near shoulders and at lower sleeves. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 02-top — Charcoal Half-zip Running Top

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: charcoal heather jersey long sleeve high collar half-zip running top, black short zipper. Plain unbranded base layer: NO reflective strips, NO silver marks, NO shoulder stripes, NO sleeve stripes. Preserve visible neckline/zip and heather or solid colour as referenced. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 03-bottom — Black Slim Running Trousers

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: black slim tapered woven running pants with narrow white silver reflective vertical lower leg strips. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 04-gloves — Black Reflective-stripe Gloves

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair black textured full-finger running gloves long slim silver white reflective stripe on back. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 05-socks — Light Grey Running Socks

```text
Use case: product-mockup. Generate exactly one isolated product category: pair pale grey short running socks, only small ankle region visible; concealed foot conservatively reconstructed. A single matching pair of plain socks ONLY. Absolutely NO silver or white reflective stripes, NO logos, NO embroidery, NO other objects. Warm ivory #F3EFE8 background. Vertical overhead flat lay, product full length centered, generous empty margin, soft studio light, subtle contact shadow, realistic texture. No person, hands, mannequin, hanger, text, brand or watermark.
```

## 06-shoes — Light Grey Runners

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair light grey mesh lace-up running shoes white midsoles and dark rubber outsole subtle silver reflective side trim; partial shoe visible hidden details conservatively reconstructed. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```
