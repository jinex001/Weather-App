# Claude handoff — Casual / Women 35+ / Rain / Chilly

## Deliverables

5 approved editorial JPGs, 37 single-product JPGs, 5 products.json files, individual breakdowns and exact prompts. HOW_TO_WEAR.md contains both collection-level and look-level copy in English, German and Korean; collection.json provides the same content as structured data.

## Weather and casting

Feels like 7°C, rain and cold gusts. Light rain/daytime/Berlin continue the approved scene concept. temperatureC and windSpeedKmh are null: do not invent an air temperature or numeric wind speed. This is a styling brief, not a live weather report. Audience is women 35+; model appearance is about 30, range 28–32.

## Mapping contract

All image paths in each products.json are relative to that file. collection.json paths are relative to this folder. Keep the products array order. Exactly one product category appears per file; a matching pair of boots or socks counts as one product. Bicycles and keys are scene props.

| Source | Application field / use |
| --- | --- |
| collection.json → summary | Collection weather/dressing summary, each text field has en/de/ko |
| products.json → copy.deck | Outfit deck {ko,en,de} |
| products.json → copy.article | Article title (English editorial headline), intro {ko,en,de}, tip {ko,en,de} |
| products.json → products[].name | Item name {ko,en,de} |
| products.json → products[].note | Item wear note {ko,en,de} |
| products.json → products[].category | Item cat; umbrella is accessory |
| products.json → products[].image | Item image |
| products.json → products[].backgroundColor | Item bg: sampled image corner color |
| products.json → products[].reconstruction | Evidence level; retain in production records |

The current app enum in design/look-library.md is run/street/minimal. This collection is explicitly casual. appStyle and appOutfitId are null; mappingStatus is pending. Decide the style association before integration; do not silently change casual to street or write null into live outfit records. Asset IDs identify this staging collection; preserve existing live IDs and item ownership links. No app code or outfits.js changes are included here.

When mapping is settled, use bands: ["chilly"], sky: "rain", rain: "light", gender: "f", age: "35". Daytime omits the optional evening marker. Follow design/look-library.md and design/IMAGE_MAPPING_HANDOFF.md for live IDs, items, paths, locale copy and version/cache rules. Production is ready; application integration remains pending.

## Reconstruction and product facts

Editorial approval applies to the five outfits. Product photos are newly generated reconstructions, visually reviewed for one-category-per-file. A product flagged not-visible-inferred is from the original styling brief, not evidence of a photographed item; partially-visible-reconstructed means the full shape is inferred. Look 02 boots/socks and look 04 boots/socks are outside the crop; look 04 jeans are barely visible. Look 03 contains a separate cobalt scarf in addition to its knit and beanie, so the scarf has its own image.

These are unbranded AI styling concepts. Material words describe the visual styling, not tested composition. Rain/wind resistance is a garment selection intention, not a verified product claim. brand, price, purchaseUrl and materialComposition stay null until linked to verified real products. The localized shopping guidance deliberately asks for verified rain protection.
