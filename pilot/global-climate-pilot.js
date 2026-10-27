/* Global climate matching pilot. No production runtime modifications. */
(function (root) {
  'use strict';
  // Pilot metadata is opt-in; unknown humidity/wind is NOT inferred from the filename.
  const metadata = {
    'bn15-01-run-f': {visualRegion:'european-urban', thermalBand:'chilly', weather:'clear', period:'night', climateEvidence:'weather-band-only', climateTolerance:'unknown'},
    'bn15-02-run-f': {visualRegion:'european-urban', thermalBand:'chilly', weather:'clear', period:'night', climateEvidence:'weather-band-only', climateTolerance:'unknown'},
    'bn15-03-run-f': {visualRegion:'european-urban', thermalBand:'chilly', weather:'clear', period:'night', climateEvidence:'weather-band-only', climateTolerance:'unknown'}
  };
  const scenarios = [
    {label:'Berlin - matching chilly clear night', city:'Berlin', visualRegion:'european-urban', band:'chilly', sky:'clear', period:'night', gender:'f', style:'run', expected:true},
    {label:'London - reuse Berlin chilly clear night', city:'London', visualRegion:'european-urban', band:'chilly', sky:'clear', period:'night', gender:'f', style:'run', expected:true},
    {label:'Gran Canaria - exclude chilly look in warm weather', city:'Las Palmas de Gran Canaria', visualRegion:'mediterranean-island-urban', band:'warm', sky:'clear', period:'night', gender:'f', style:'run', expected:false}
  ];
  function eligible(outfit, context) {
    const meta = metadata[outfit.id];
    if (!meta) return false; // only explicitly classified pilot assets
    return outfit.gender === context.gender && outfit.style === context.style &&
      outfit.bands.includes(context.band) && outfit.sky === context.sky &&
      (outfit.time === 'evening' ? 'night' : 'day') === context.period &&
      meta.thermalBand === context.band && meta.weather === context.sky &&
      meta.period === context.period && meta.visualRegion === context.visualRegion;
  }
  function run(outfits) {
    return scenarios.map(c => {
      const matches = outfits.filter(o => eligible(o, c));
      return {scenario:c.label, passed:(matches.length>0)===c.expected,
        matchedIds:matches.map(o=>o.id), expectedMatch:c.expected};
    });
  }
  const api = {metadata, scenarios, eligible, run};
  if(typeof module !== 'undefined' && module.exports) module.exports = api;
  root.WX_GLOBAL_CLIMATE_PILOT = api;
})(typeof window !== 'undefined' ? window : globalThis);
