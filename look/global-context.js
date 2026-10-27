// b173: global context (visual region + climate context) as a soft preference on top of the weather fit.
// Loaded after every look module (and cutouts.js). If this file fails to load, index.html keeps the legacy choice.
// - Looks: optional keys `visualRegion`, `climateContext.humidityContext`, `contextReview.status` (in the look module or
//   in SIDECAR below, keyed by outfit ID). Only `reviewed` values count; anything else stays unknown. Unknown is not
//   neutral: a look without metadata is never tagged here, it simply gets no preference.
// - Place → visual region: explicit region (tests, ?region=) or the geocoder country code, plus one narrow coordinate
//   profile, and (b175) a coastal cell from look/coast-grid.js, also for GPS. Otherwise GPS, old saved places and missing
//   countries stay unknown (no reverse geocoding). b175: a region-tagged look only shows in its own region (allowed);
//   the region never casts models.
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

  // b175: coastal cells (look/coast-grid.js, 0.1° cells within ~20 km of the sea coast), decoded once into row → runs.
  // Most coastal places count as warm-coastal-urban for the test (user, 2026-10-27), East Asia stays east-asian-urban.
  var COAST = null;
  function coastRows() {
    if (COAST) return COAST;
    COAST = {};
    var src = window.WX_COAST && window.WX_COAST.rows;
    if (!src) return COAST;
    src.split(";").forEach(function (row) {
      var k = row.indexOf(":"), i = parseInt(row.slice(0, k), 16) - 900, prev = -1800, runs = [];
      row.slice(k + 1).split(",").forEach(function (r) {
        var d = r.split("."), s = prev + parseInt(d[0], 16), e = s + parseInt(d[1], 16);
        runs.push(s, e); prev = e;
      });
      COAST[i] = runs;
    });
    return COAST;
  }
  function isCoastal(lat, lon) {
    lat = +lat; lon = +lon;
    if (!isFinite(lat) || !isFinite(lon)) return false;
    var runs = coastRows()[Math.floor(lat / 0.1)], j = Math.floor(lon / 0.1);
    if (!runs) return false;
    for (var n = 0; n < runs.length; n += 2) if (j >= runs[n] && j <= runs[n + 1]) return true;
    return false;
  }
  // A place without a country code (GPS) inside this box is treated as East Asia: never coastal, region unknown
  function inEastAsia(lat, lon) { return lat >= 18 && lat <= 46 && lon >= 100 && lon <= 150; }

  // Where the place is, as a visual region: explicit > coordinate profile (same country) > East Asian country >
  // coastal cell (b175, also for GPS) > country > unknown
  function regionOf(p) {
    p = p || {};
    if (p.region) return pick(REGIONS, p.region);
    var cc = typeof p.cc === "string" ? p.cc.toUpperCase() : "";
    for (var i = 0; i < PROFILES.length; i++) {
      var f = PROFILES[i];
      if (cc && f.cc === cc && +p.lat >= f.lat[0] && +p.lat <= f.lat[1] && +p.lon >= f.lon[0] && +p.lon <= f.lon[1]) return f.region;
    }
    if (COUNTRY[cc] === "east-asian-urban") return COUNTRY[cc];
    if (!(!cc && inEastAsia(+p.lat, +p.lon)) && isCoastal(p.lat, p.lon)) return "warm-coastal-urban";
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
  // b175: a look made for one visual region (reviewed, not neutral-urban) only shows in that region; elsewhere, and
  // where the region is unknown, it is left out (that cell then shows COMING SOON if nothing else fits). Looks without
  // a region (all Berlin sets) show everywhere.
  function allowed(o, v) {
    var r = (o.gctx || {}).region || "unknown";
    return r === "unknown" || r === "neutral-urban" || r === (v.region || "unknown");
  }
  window.WX_GLOBAL = { version: 2, allowed: allowed, isCoastal: isCoastal, REGIONS: REGIONS, COUNTRY: COUNTRY, PROFILES: PROFILES, regionOf: regionOf, context: context, ranks: ranks };
})();
