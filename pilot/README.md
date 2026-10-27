# Global climate pilot - isolated test

**Status: pilot only, not production.** This directory introduces an additive classification for three existing outfits without moving or editing images, product files, IDs, or `look/outfits.js`.

## Scope

- Existing `bn15-01-run-f` through `bn15-03-run-f` images are tagged `european-urban / chilly / clear / night` based on existing app fields and known Berlin storage context.
- Berlin and London are **synthetic matching-weather fixtures**, not claims about current weather.
- Las Palmas de Gran Canaria is a **synthetic warm-weather fixture** that must reject chilly outfits. Real location weather, wind, humidity, exposure and product suitability are NOT validated.
- The `climateEvidence` and `climateTolerance` fields explicitly flag uncertain climate suitability. The pilot cannot conclude that the outfits suit London without further material/weather review.
- The visual-region requirement is deliberately conservative. Future global matching must score (not hard-reject) region when climate and outfit are compatible, and support fallback imagery separately.

## Run

Serve repository root with a simple static server and visit `/pilot/pilot-test.html`. The page loads `look/outfits.js` read-only and runs three fixture checks. No localStorage, weather services or production `lookPool` are modified.

## Before rollout

1. Validate garments and materials per asset; never infer humidity/wind tolerance from Berlin filenames.
2. Introduce additive `climateContext` and `visualRegion` metadata in canonical data with backward-compatible defaults.
3. Implement preference-ranked climate/region matching with safe fallbacks.
4. Run regressions on weather, rain, day/night, style, saved IDs and editorial-product references.
5. Only then migrate the rest; leave historical paths intact. Do not merge to main before review.
