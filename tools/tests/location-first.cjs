const fs = require('fs'), path = require('path'), vm = require('vm'), assert = require('assert');
const root = path.resolve(__dirname, '../..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ctx = { window: {}, console, LIB: null, BAND_KEYS: ['freeze','verycold','cold','chilly','cool','pleasant','warm','hot','veryhot'], isRain: c => c >= 51 && c <= 99 };
vm.createContext(ctx);
for (const m of html.matchAll(/<script src="([^"]+)"/g)) {
 const file = m[1].split('?')[0];
 vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx);
}
ctx.LIB = ctx.window.WX_LOOKS;
for (const name of ['rainLevel','softRanks','regionOk','lookFits','skyAvailable','lookPool','seeded']) {
 const start = html.indexOf('  function ' + name + '('), end = html.indexOf('\n  }', start) + 4;
 vm.runInContext(html.slice(start,end),ctx);
}
ctx.lookSeed = 'regression';
ctx.bandOutfit = () => ({id:'placeholder'});
ctx.soonLabel = () => 'Coming soon';
const G = ctx.window.WX_GLOBAL;
let cases=0;
for (const [name,lat,lon] of [['Sitges',41.235,1.8119],['Gran Canaria',28.1,-15.42],['Mallorca',39.57,2.65]]) {
 const region = G.context({cc:'ES',lat,lon}).region;
 assert.equal(region,'warm-coastal-urban',name);
 for (const gender of ['f','m']) for(const style of ['street','minimal','run']) for(const evening of [false,true]) for(const clear of [false,true]) {
  const view = {region,band:['10','cool'],clear,evening,rain:null};
  const fits = ctx.lookFits(view,style,gender);
  assert(fits.length,`${name} ${gender} ${style}`);
  assert(fits.every(e=>e.o.gctx.region===region));
  assert(fits.every(e=>e.o.sky!=='rain'));
  assert(ctx.skyAvailable(view, Math.min(...fits.map(e=>e.sr))));
  const pool = ctx.lookPool(view,{style,g:gender});
  assert(pool.length && pool.every(e=>!e.soon && e.o.gctx.region===region));
  cases++;
 }
}
assert(!G.allowed({gctx:{region:'unknown'}},{region:'warm-coastal-urban'}));
assert(G.allowed({gctx:{region:'unknown'}},{region:'european-urban'}));
assert(!G.allowed({gctx:{region:'warm-coastal-urban'}},{region:'european-urban'}));
assert(!ctx.skyAvailable({region:'warm-coastal-urban',rain:'light'},1));
assert(!ctx.skyAvailable({region:'european-urban'},1));
const cold = ctx.lookFits({region:'warm-coastal-urban',band:[0,'freeze'],clear:true,evening:false},'street','f');
assert.equal(cold.length,0);
console.log(`${cases} live-library city/style/gender/sky/time cases passed; legacy exclusion, rain and temperature guards passed.`);
