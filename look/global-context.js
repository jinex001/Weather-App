// b173: global context (visual region + climate context) as a soft preference on top of the weather fit.
// Loaded after every look module (and cutouts.js). If this file fails to load, index.html keeps the legacy choice.
// - Looks: optional keys `visualRegion`, `climateContext.humidityContext`, `contextReview.status` (in the look module or
//   in SIDECAR below, keyed by outfit ID). Only `reviewed` values count; anything else stays unknown. Unknown is not
//   neutral: a look without metadata is never tagged here, it simply gets no preference.
// - Place → visual region: explicit region (tests, ?region=) or the geocoder country code, plus one narrow coordinate
//   profile. GPS, old saved places and missing countries stay unknown (no reverse geocoding). A region is a soft visual
//   preference for backgrounds, not a climate classification, and never casts models or gates assets by city.
// - Humidity: only explicit categorical input (humid / dry). No API humidity is read and no thresholds exist yet.
// Rules: design/look-library.md "글로벌 맥락", design/IMAGE_STYLE.md 12장.
(function () { "use strict";
  var L = window.WX_LOOKS; if (!L) return;
  var REGIONS = ["neutral-urban", "european-urban", "east-asian-urban", "warm-coastal-urban"];
  var HUMIDITY = ["humid", "dry"];
  // Small initial country vocabulary (ISO 3166-1 alpha-2 from the Open-Meteo geocoder). Not exhaustive on purpose.
  var COUNTRY = {
    AT: "european-urban", BE: "european-urban", CH: "european-urban", CZ: "european-urban", DE: "european-urban",
    DK: "european-urban", ES: "european-urban", FI: "european-urban", FR: "european-urban", GB: "european-urban",
    IE: "european-urban", IT: "european-urban", LU: "european-urban", NL: "european-urban", NO: "european-urban",
    PL: "european-urban", PT: "european-urban", SE: "european-urban",
    CN: "east-asian-urban", HK: "east-asian-urban", JP: "east-asian-urban", KR: "east-asian-urban", TW: "east-asian-urban"
  };
  // Coordinate profiles refine a country (checked first; only with that country code, so GPS stays unknown)
  var PROFILES = [
    { cc: "ES", name: "canary-islands", lat: [27.4, 29.6], lon: [-18.4, -13.2], region: "warm-coastal-urban" }
  ];
  // Reviewed metadata for existing looks by outfit ID. Empty on purpose: no Berlin set has been reviewed for region or
  // humidity yet, and folder names alone are not evidence. Format: { "<outfitId>": { visualRegion, humidityContext } }.
  var SIDECAR = {};

  function pick(list, v) { return list.indexOf(v) >= 0 ? v : "unknown"; }
  L.outfits.forEach(function (o) {
    var s = SIDECAR[o.id], reviewed = s || (o.contextReview && o.contextReview.status === "reviewed");
    var region = s ? s.visualRegion : o.visualRegion, hum = s ? s.humidityContext : o.climateContext && o.climateContext.humidityContext;
    o.gctx = { region: reviewed ? pick(REGIONS, region) : "unknown", humidity: reviewed ? pick(HUMIDITY, hum) : "unknown" };
  });

  // Where the place is, as a visual region: explicit > coordinate profile (same country) > country > unknown
  function regionOf(p) {
    p = p || {};
    if (p.region) return pick(REGIONS, p.region);
    var cc = typeof p.cc === "string" ? p.cc.toUpperCase() : "";
    if (!cc) return "unknown";
    for (var i = 0; i < PROFILES.length; i++) {
      var f = PROFILES[i];
      if (f.cc === cc && +p.lat >= f.lat[0] && +p.lat <= f.lat[1] && +p.lon >= f.lon[0] && +p.lon <= f.lon[1]) return f.region;
    }
    return COUNTRY[cc] || "unknown";
  }
  // The selection context for a place; humidity only when given explicitly (no measurement is turned into a category)
  function context(p, explicit) {
    explicit = explicit || {};
    return { region: explicit.region ? pick(REGIONS, explicit.region) : regionOf(p),
             humidity: explicit.humidity ? pick(HUMIDITY, explicit.humidity) : "unknown" };
  }
  // Soft ranks, lower is better; only used to order looks that already have the same weather fit.
  // climate: unknown query → 0 for all; same reviewed humidity 0 → unknown 1 → other known 2
  // region: unknown query → 0 for all; same region 0 → reviewed neutral-urban 1 → other or unknown 2
  function ranks(o, v) {
    var g = o.gctx || { region: "unknown", humidity: "unknown" }, qh = v.humidity || "unknown", qr = v.region || "unknown";
    var cr = qh === "unknown" ? 0 : g.humidity === qh ? 0 : g.humidity === "unknown" ? 1 : 2;
    var rr = qr === "unknown" ? 0 : g.region === qr ? 0 : g.region === "neutral-urban" ? 1 : 2;
    return [cr, rr];
  }
  window.WX_GLOBAL = { version: 1, REGIONS: REGIONS, COUNTRY: COUNTRY, PROFILES: PROFILES, regionOf: regionOf, context: context, ranks: ranks };
})();
