# Running 01 — Product generation prompts

Tool: built-in image_gen (no API/CLI fallback).
Reference: `../01-running.jpg`, existing editorial, unchanged.
The editorial was inspected to derive every item. Some plain socks and corrected lower layers use the written visual breakdown without passing the reference image to prevent extra products appearing.

Each item was generated in a separate tool call. Draft boards and unsupported reflective trims were rejected; only inspected single-category final images are exported. Shoes, socks and gloves are matching pairs and count as one item each.

Export: RGB JPEG, Lanczos resize to 500×500, optimized JPEG quality reduced from 92 as needed to ≤50,000 bytes. No generated raster content was composited or altered by code.

## 01-outer — Cobalt Hooded Running Shell

```text
Use case: product-mockup. Editorial is reference only. Create ONE standalone square product photo of ONLY the cobalt blue hooded running windbreaker shown. Match crinkled thin shell, full front zipper, elastic cuffs and hem, short silver reflective strips across upper chest near both shoulders and on forearms. Lay jacket flat, sleeves arranged neatly, hood visible. Warm ivory #F3EFE8 background, overhead camera, soft studio light, subtle contact shadow, full item centered generous margins. No body, hands, hanger, mannequin, other garments, text, logos, watermark or collage. Reflective details silver-white with realistic texture, no glow. Save generated output.
```

## 02-top — Charcoal Crew-neck Base Layer

```text
Use case: product-mockup. Editorial is colour/material reference only. Exactly ONE standalone product photograph: charcoal dark grey heather crew-neck long sleeve base layer, neckline visible in editorial; concealed sleeves and torso conservatively reconstructed. Plain unbranded base layer: NO reflective strips, NO silver marks, NO shoulder stripes, NO sleeve stripes. Preserve visible neckline/zip and heather or solid colour as referenced. Clean warm ivory #F3EFE8 background. Vertical overhead flat lay, whole product centered with generous empty margins, soft contact shadow, realistic fabric. No body, no hands, no mannequin, no hanger, no text or logo. Do not copy other objects from reference.
```

## 03-bottom — Black Reflective Tights

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: black fitted ankle-length running tights with narrow silver reflective strip on outer lower calf. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 04-gloves — Black Reflective Gloves

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair black full-finger thin running gloves with narrow silver stripe on backs. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 05-socks — White Ankle Socks

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair white short ribbed ankle socks. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 06-shoes — Grey Mesh Runners

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: pair grey mesh lace-up running shoes white midsoles dark rubber toes silver reflective side and heel overlays, no branding. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```

## 07-headwear — Black Wide Headband

```text
Use case: product-mockup. Input editorial reference only. Create ONE standalone square product photograph of ONLY: wide black textured stretch running headband small subdued silver reflective tab. Match the reference item's visible color, texture, silhouette, construction and reflective detail placement as closely as possible; do not redesign. Concealed surfaces conservatively reconstructed. Warm ivory background near #F3EFE8, soft studio light, subtle contact shadow, centered entire product with generous margins. Clothing laid flat overhead; gloves/socks matching pair only. Shoes: both shoes resting on soles, neatly parallel side by side, camera vertically overhead, toes facing same direction. No other products, person, body, hands, mannequin, hanger, text, logos, watermark, grid or collage. Silver reflective surfaces realistically bright, no LEDs or glow.
```
