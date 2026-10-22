# Approved cloudy evening menswear - minimal 01-05

Five approved editorials and 34 independent product images. Review `products.json` in each look for production status and reconstruction flags.

## Mapping

2026-10-22 (app b116): the user assigned the band **chilly**. The set moved from `Overcast/Unclassified/` to `Overcast/Chilly/Male/35+/night/minimal/`; each products.json now has `feelsLikeBand: "chilly"` (feelsLikeC stays null) and `mappingStatus: "mapped"`. Look IDs (`oc-unclassified-…`) are kept as uploaded.

Original note:

This collection has no verified feels-like temperature. `Unclassified` is a staging folder only, not a new app temperature band. Each `weather.feelsLikeC` and `weather.feelsLikeBand` remains null. Do not auto-map until a band is explicitly assigned during handoff. Actual ambient range was 12-13°C; do not treat it as feels-like. Night folder corresponds to app evening. Condition is cloudy with no precipitation.

Read design/IMAGE_MAPPING_HANDOFF.md and design/look-library.md before mapping. App files are unchanged by this asset upload.
