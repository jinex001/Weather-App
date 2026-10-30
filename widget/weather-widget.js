// ─────────────────────────────────────────────
// Weather App — Scriptable widget
// Tap the widget to open the web app.
// Data: Open-Meteo (no API key). Language follows the device.
// Sizes: small, medium, large + lock screen (circular, rectangular, inline)
// ─────────────────────────────────────────────

const APP_URL = "https://jinex001.github.io/Weather-App/"
const PLACE = { lat: 52.52, lon: 13.405 }   // Berlin
const REFRESH_MIN = 30

// ── Language ──
const sysLang = (Device.language() || "en").toLowerCase()
const LANG = sysLang.startsWith("de") ? "de" : sysLang.startsWith("ko") ? "ko" : "en"
const T = {
  en: { city: "Berlin", noRain: "No rain for 12 h", rainAt: "Rain {t} · {p}%", rainNow: "Raining · {p}%", snowAt: "Snow {t}", snowNow: "Snowing", now: "Now", failed: "Couldn't load weather",
        sumToday: "Today: {b}.", sumNow: "Right now: {b}.", sumDay: "{c}, high {h}°, low {l}°.", sumRainAt: "{w} likely around {t} ({p}%).", sumRainNow: "{w} now, easing around {t}.",
        sumRainOn: "{w} for the rest of the day.", sumDry: "No rain in the next 12 hours.", sumDrop: "Cooling to {v}° by {t}.", sumWind: "Windy, {w} km/h.", sumUmbrella: "Don't forget an umbrella.", sumCold: "Colder days ahead: watch out for colds.",
        wRain: "Rain", wSnow: "Snow" },
  de: { city: "Berlin", noRain: "12 Std. kein Regen", rainAt: "{t} Regen · {p} %", rainNow: "Regen · {p} %", snowAt: "{t} Schnee", snowNow: "Schneefall", now: "Jetzt", failed: "Wetter nicht verfügbar",
        sumToday: "Heute: {b}.", sumNow: "Gerade: {b}.", sumDay: "{c}, max {h}°, min {l}°.", sumRainAt: "{w} gegen {t} wahrscheinlich ({p} %).", sumRainNow: "Gerade {w}, lässt gegen {t} nach.",
        sumRainOn: "{w} bis zum Abend.", sumDry: "Kein Regen in den nächsten 12 Std.", sumDrop: "Bis {t} kühlt es auf {v}° ab.", sumWind: "Windig, {w} km/h.", sumUmbrella: "Schirm nicht vergessen.", sumCold: "Es wird kälter: Vorsicht vor Erkältungen.",
        wRain: "Regen", wSnow: "Schnee" },
  ko: { city: "베를린", noRain: "12시간 비 소식 없음", rainAt: "{t} 비 · {p}%", rainNow: "지금 비 · {p}%", snowAt: "{t} 눈", snowNow: "지금 눈", now: "지금", failed: "날씨를 불러오지 못했어요",
        sumToday: "오늘은 {b}.", sumNow: "현재는 {b}.", sumDay: "{c}, 최고 {h}° 최저 {l}°.", sumRainAt: "{t}쯤 {w} 올 확률 {p}%.", sumRainNow: "지금 {w} 오는 중, {t}쯤 그쳐요.",
        sumRainOn: "오늘은 계속 {w} 소식.", sumDry: "12시간 동안 비 소식은 없어요.", sumDrop: "{t}쯤엔 {v}°까지 내려가요.", sumWind: "바람이 강해요, {w}km/h.", sumUmbrella: "우산 꼭 챙겨요.", sumCold: "환절기 감기 조심해요.",
        wRain: "비", wSnow: "눈" },
}[LANG]
const COND = {
  clear: ["Clear", "Klar", "맑음"], clearNight: ["Clear night", "Klare Nacht", "맑은 밤"], mainly: ["Mostly clear", "Überwiegend klar", "대체로 맑음"],
  partly: ["Partly cloudy", "Leicht bewölkt", "구름 조금"], overcast: ["Overcast", "Bedeckt", "흐림"], fog: ["Fog", "Nebel", "안개"],
  drizzle: ["Drizzle", "Nieselregen", "이슬비"], rain: ["Rain", "Regen", "비"], heavyRain: ["Heavy rain", "Starkregen", "강한 비"],
  freezing: ["Freezing rain", "Gefrierender Regen", "어는 비"], showers: ["Showers", "Schauer", "소나기"], snow: ["Snow", "Schnee", "눈"],
  heavySnow: ["Heavy snow", "Starker Schneefall", "함박눈"], thunder: ["Thunderstorm", "Gewitter", "뇌우"],
}
const LI = { en: 0, de: 1, ko: 2 }[LANG]
const fmt = (s, o) => s.replace(/\{(\w)\}/g, (_, k) => o[k])

// ── Weather codes ──
const isSnow = c => (c >= 71 && c <= 77) || c === 85 || c === 86
const isRain = c => (c >= 51 && c <= 67) || (c >= 80 && c <= 82) || c >= 95
const isOvercast = c => c === 3 || c === 45 || c === 48
function condKey(c, day) {
  if (c === 0) return day ? "clear" : "clearNight"
  if (c === 1) return day ? "mainly" : "clearNight"
  if (c === 2) return "partly"
  if (c === 3) return "overcast"
  if (c === 45 || c === 48) return "fog"
  if (c >= 51 && c <= 55) return "drizzle"
  if ([56, 57, 66, 67].includes(c)) return "freezing"
  if (c === 61 || c === 63) return "rain"
  if (c === 65) return "heavyRain"
  if (c === 75 || c === 86) return "heavySnow"
  if (isSnow(c)) return "snow"
  if (c >= 80 && c <= 82) return "showers"
  if (c >= 95) return "thunder"
  return "partly"
}
const label = (c, day) => COND[condKey(c, day)][LI]

// ── Design tokens (same as the app) ──
const STATES = {
  sun:         { bg: "#7FC1EA", fg: "#141414", graph: "#141414" },
  rain:        { bg: "#4F5D6B", fg: "#E6ECF2", graph: "#8FB8DE" },
  night:       { bg: "#1B2140", fg: "#F4F1E8", graph: "#F4F1E8" },
  "night-rain":{ bg: "#1B2140", fg: "#F4F1E8", graph: "#8FB8DE" },
  "rain-night":{ bg: "#232B36", fg: "#E6ECF2", graph: "#8FB8DE" },
  snow:        { bg: "#E9EEF3", fg: "#141414", graph: "#5C7A99" },
  overcast:    { bg: "#A9B1B9", fg: "#141414", graph: "#141414" },
}
// Overcast days follow measured daylight like the app (b62): ≥200 W/m² bright · 60–200 normal · <60 dim
const OVERCAST_LIGHT = { bright: "#A3A091", normal: "#959B9E", dim: "#948B82" }
const lightOf = w => typeof w !== "number" ? null : w >= 200 ? "bright" : w >= 60 ? "normal" : "dim"

// Feels-like bands, colors and one outfit line (same as the app: BANDS, BAND_COLOR, LOOK[band].deck)
const BANDS = [
  [-20, "freeze", { en: "Extreme cold", de: "Extreme Kälte", ko: "극한 추위" }],
  [-10, "verycold", { en: "Very cold", de: "Sehr kalt", ko: "매우 추움" }],
  [0, "cold", { en: "Cold", de: "Kalt", ko: "추움" }],
  [9, "chilly", { en: "Chilly", de: "Frisch", ko: "쌀쌀함" }],
  [17, "cool", { en: "Cool", de: "Kühl", ko: "선선함" }],
  [23, "pleasant", { en: "Comfortable", de: "Angenehm", ko: "쾌적함" }],
  [28, "warm", { en: "Warm", de: "Warm", ko: "따뜻함" }],
  [34, "hot", { en: "Hot", de: "Heiß", ko: "더움" }],
  [Infinity, "scorching", { en: "Extreme heat", de: "Extreme Hitze", ko: "극심한 더위" }],
]
const bandOf = f => BANDS.find(b => f <= b[0])
const BAND_COLOR = { freeze: "#6434A5", verycold: "#4762D6", cold: "#378FE4", chilly: "#58C4DC", cool: "#6FCDB0",
                     pleasant: "#79C66C", warm: "#F0C84E", hot: "#F38B3D", scorching: "#D94448" }
const DECK = {
  freeze: { ko: "롱패딩에 내복 위아래. 맨살은 하나도 없이.", en: "Long down coat, thermals top and bottom. No bare skin.", de: "Langer Daunenmantel, Thermowäsche oben und unten. Keine nackte Haut." },
  verycold: { ko: "두꺼운 패딩에 니트. 장갑과 목도리까지.", en: "A thick puffer over a knit. Gloves and scarf too.", de: "Dicke Daunenjacke über Strick. Handschuhe und Schal dazu." },
  cold: { ko: "패딩이나 두꺼운 울 코트. 목도리 하나.", en: "A puffer or a heavy wool coat. Add a scarf.", de: "Daunenjacke oder dicker Wollmantel. Schal dazu." },
  chilly: { ko: "니트 위에 얇은 패딩이나 트렌치.", en: "A knit under a light puffer or trench.", de: "Strick unter leichter Daunenjacke oder Trench." },
  cool: { ko: "긴팔에 가벼운 재킷이나 카디건.", en: "Long sleeves and a light jacket or cardigan.", de: "Langarm und eine leichte Jacke oder Strickjacke." },
  pleasant: { ko: "긴팔 하나면 충분. 겉옷은 선택.", en: "One long-sleeve layer is plenty. Jacket optional.", de: "Ein Langarmshirt reicht. Jacke optional." },
  warm: { ko: "반팔에 가벼운 하의.", en: "Short sleeves and something light below.", de: "Kurzarm und etwas Leichtes darunter." },
  hot: { ko: "린넨에 반바지. 한낮엔 그늘로.", en: "Linen and shorts. Shade at midday.", de: "Leinen und Shorts. Mittags in den Schatten." },
  scorching: { ko: "최대한 가볍게. 11~16시엔 실내나 그늘.", en: "As light as it gets. Indoors or shade from 11 to 16.", de: "So leicht wie möglich. 11–16 Uhr drinnen oder im Schatten." },
}

// Band color on the screen color: only when it almost disappears (<1.5:1) does it get a little deeper or lighter (app: readableOn)
function hexRgb(h) { return [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16) / 255) }
function luminance(h) {
  const c = hexRgb(h).map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4))
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
}
function contrast(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05) }
function rgbHsl(c) {
  const [r, g, b] = c, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn
  let h = 0, s = 0
  if (d) {
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn)
    h = (mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4) / 6
  }
  return [h, s, l]
}
function hslHex(h, s, l) {
  const f = n => { const k = (n + h * 12) % 12, a = s * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)) }
  return "#" + [f(0), f(8), f(4)].map(v => ("0" + Math.round(v * 255).toString(16)).slice(-2)).join("")
}
function readableOn(hex, bg, min) {
  if (contrast(hex, bg) >= min) return hex
  const hsl = rgbHsl(hexRgb(hex)), dir = luminance(bg) > 0.18 ? -1 : 1, maxS = hsl[1] < 0.05 ? 0 : Math.min(1, hsl[1] + 0.25)
  let out = hex
  for (let i = 0; i < 60 && contrast(out, bg) < min; i++) {
    hsl[2] = Math.max(0, Math.min(1, hsl[2] + dir * 0.015))
    hsl[1] = Math.min(maxS, hsl[1] + 0.01)
    out = hslHex(hsl[0], hsl[1], hsl[2])
  }
  return out
}
function stateOf(c, day) {
  // Every night uses the one dark night color, whatever the weather
  if (!day) return isRain(c) ? "night-rain" : "night"
  if (isSnow(c)) return "snow"
  if (isRain(c)) return day ? "rain" : "rain-night"
  if (isOvercast(c) && day) return "overcast"
  return day ? "sun" : "night"
}
// The app's weather art (static frame, PNG in widget/art/, alpha already at 40%) drawn large in the middle of the widget
const isFog = c => c === 45 || c === 48
function artKey(c, day, light) {
  if (!day) return isSnow(c) ? "night-snow" : isRain(c) ? "night-rain" : isFog(c) ? "night-fog" : c >= 2 ? "night-cloudy" : "night-clear"
  if (isSnow(c)) return "snow"
  if (isRain(c)) return "rain"
  if (isOvercast(c)) return (isFog(c) ? "fog" : "overcast") + (light ? "-" + light : "")
  return c === 2 ? "sun-cloudy" : c === 1 ? "sun-mostly" : "sun-clear"
}
function symbolFor(c, day) {
  if (isSnow(c)) return "cloud.snow.fill"
  if (c >= 95) return "cloud.bolt.rain.fill"
  if (isRain(c)) return "cloud.rain.fill"
  if (c === 45 || c === 48) return "cloud.fog.fill"
  if (c >= 3) return "cloud.fill"
  if (c === 2) return day ? "cloud.sun.fill" : "cloud.moon.fill"
  return day ? "sun.max.fill" : "moon.stars.fill"
}

// Condensed heavy numbers, close to Anton
function numFont(size) {
  return new Font("AvenirNextCondensed-Heavy", size) || Font.heavySystemFont(size)
}

// ── Data (falls back to the last good copy) ──
const fm = FileManager.local()
const cachePath = fm.joinPath(fm.cacheDirectory(), "weather-app-widget.json")
// Optional extra sources: null when they fail
async function optJSON(url, headers) {
  try { const q = new Request(url); if (headers) q.headers = headers; return await q.loadJSON() } catch (e) { return null }
}
// Cloud amount like the app (b63): the middle of DWD station (Bright Sky), MET Norway and Open-Meteo decides
// clear / mostly clear / partly cloudy / overcast. Rain, snow, fog and storms stay as the model says.
function cloudVote(d, bs, met) {
  const c = d.current, list = []
  const o = bs && bs.weather
  if (o && typeof o.cloud_cover === "number" && Date.now() - new Date(o.timestamp).getTime() <= 90 * 60000) list.push(o.cloud_cover)
  const ts = (met && met.properties && met.properties.timeseries) || []
  const now = ts.find(x => Math.abs(new Date(x.time).getTime() - Date.now()) <= 60 * 60000 && x.data && x.data.instant && typeof x.data.instant.details.cloud_area_fraction === "number")
  if (now) list.push(now.data.instant.details.cloud_area_fraction)
  if (typeof c.cloud_cover === "number") list.push(c.cloud_cover)
  if (list.length < 2 || c.weather_code > 3) return
  list.sort((a, b) => a - b)
  const n = list.length, mid = n % 2 ? list[(n - 1) / 2] : (list[n / 2 - 1] + list[n / 2]) / 2
  c.weather_code = mid < 15 ? 0 : mid < 40 ? 1 : mid < 80 ? 2 : 3
}

async function getData() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=" + PLACE.lat + "&longitude=" + PLACE.lon +
    "&current=temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m,shortwave_radiation,cloud_cover" +
    "&hourly=temperature_2m,apparent_temperature,precipitation_probability,snowfall,weather_code,wind_speed_10m" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=2"
  try {
    const [d, bs, met] = await Promise.all([
      new Request(url).loadJSON(),
      optJSON("https://api.brightsky.dev/current_weather?lat=" + PLACE.lat + "&lon=" + PLACE.lon),
      optJSON("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + PLACE.lat.toFixed(4) + "&lon=" + PLACE.lon.toFixed(4),
        { "User-Agent": "Weather-App/1.0 github.com/jinex001/Weather-App" })
    ])
    if (!d.current) throw new Error("bad data")
    cloudVote(d, bs, met)
    fm.writeString(cachePath, JSON.stringify(d))
    return d
  } catch (e) {
    if (fm.fileExists(cachePath)) return JSON.parse(fm.readString(cachePath))
    throw e
  }
}

const ART_VERSION = 2   // bump when widget/art/*.png change (2: faded to 40% for the centered layout)
async function loadArt(key) {
  const dir = fm.joinPath(fm.documentsDirectory(), "weather-app-art")
  if (!fm.fileExists(dir)) fm.createDirectory(dir)
  const path = fm.joinPath(dir, key + "-v" + ART_VERSION + ".png")
  if (fm.fileExists(path)) return fm.readImage(path)
  try {
    const img = await new Request(APP_URL + "widget/art/" + key + ".png?v=" + ART_VERSION).loadImage()
    fm.writeImage(path, img)
    return img
  } catch (e) { return null }
}

function hourText(s) {
  const h = parseInt(s.slice(11, 13), 10)
  if (LANG === "ko") return h + "시"
  if (LANG === "de") return h + " Uhr"
  return (h % 12 || 12) + (h < 12 ? " am" : " pm")
}

function next12(d) {
  const key = d.current.time.slice(0, 13)
  let i0 = d.hourly.time.findIndex(t => t.slice(0, 13) === key)
  if (i0 < 0) i0 = 0
  const idx = []
  for (let i = i0; i < Math.min(i0 + 12, d.hourly.time.length); i++) idx.push(i)
  return idx
}

function summary(d, idx) {
  const H = d.hourly
  if (isSnow(d.current.weather_code)) {
    const k = idx.findIndex(i => (H.snowfall[i] || 0) >= 0.1)
    if (k === 0) return T.snowNow
    if (k > 0) return fmt(T.snowAt, { t: hourText(H.time[idx[k]]) })
  }
  const k = idx.findIndex(i => (H.precipitation_probability[i] || 0) >= 50)
  if (k === 0) return fmt(T.rainNow, { p: H.precipitation_probability[idx[0]] })
  if (k > 0) return fmt(T.rainAt, { t: hourText(H.time[idx[k]]), p: H.precipitation_probability[idx[k]] })
  return T.noRain
}

// Today's summary, same sentences as the app (summaryText in index.html)
function summaryText(d, idx, light) {
  const c = d.current, H = d.hourly, D = d.daily, day = c.is_day === 1, r = n => Math.round(n) || 0
  const low1 = x => LANG === "en" ? x.toLowerCase() : x
  const band = bandOf(r(c.apparent_temperature))
  const i0 = idx[0], today = H.time[i0].slice(0, 10)
  let shifts = false
  for (let a = i0; a < H.time.length && H.time[a].slice(0, 10) === today; a++) {
    if (H.apparent_temperature[a] != null && bandOf(r(H.apparent_temperature[a]))[1] !== band[1]) { shifts = true; break }
  }
  const out = [fmt(shifts ? T.sumNow : T.sumToday, { b: low1(band[2][LANG]) }),
    fmt(T.sumDay, { c: label(D.weather_code[0], true), h: r(Math.max(D.temperature_2m_max[0], c.temperature_2m)), l: r(Math.min(D.temperature_2m_min[0], c.temperature_2m)) })]
  const wet = i => (H.precipitation_probability[i] || 0) >= 50
  const word = i => isSnow(H.weather_code[i]) ? T.wSnow : T.wRain
  if (idx.length && wet(idx[0])) {
    const end = idx.slice(1).find(i => !wet(i))
    out.push(end !== undefined ? fmt(T.sumRainNow, { w: low1(word(idx[0])), t: hourText(H.time[end]) }) : fmt(T.sumRainOn, { w: word(idx[0]) }))
    if (word(idx[0]) === T.wRain) out.push(T.sumUmbrella)
  } else {
    const hit = idx.slice(1).find(wet)
    out.push(hit !== undefined ? fmt(T.sumRainAt, { w: word(hit), t: hourText(H.time[hit]), p: H.precipitation_probability[hit] }) : T.sumDry)
    if (hit !== undefined && word(hit) === T.wRain) out.push(T.sumUmbrella)
  }
  if (day) {
    let low = -1
    for (let j = i0 + 1; j < H.time.length && H.time[j].slice(0, 10) === today; j++) if (low < 0 || H.temperature_2m[j] < H.temperature_2m[low]) low = j
    if (low >= 0 && c.temperature_2m - H.temperature_2m[low] >= 4) out.push(fmt(T.sumDrop, { v: r(H.temperature_2m[low]), t: hourText(H.time[low]) }))
  }
  if ((c.wind_speed_10m || 0) >= 30) out.push(fmt(T.sumWind, { w: r(c.wind_speed_10m) }))
  out.push(DECK[band[1]][LANG])
  const colder = D.temperature_2m_max.length > 1 && D.temperature_2m_max[0] - D.temperature_2m_max[1] >= 4
  if (D.temperature_2m_max[0] - D.temperature_2m_min[0] >= 10 || colder) out.push(T.sumCold)
  return { text: out.join(" "), first: out[0], band }
}

// ── Drawing helpers ──
function text(stack, s, font, color, opts = {}) {
  const t = stack.addText(s)
  t.font = font
  t.textColor = color
  t.lineLimit = opts.lines || 1
  t.minimumScaleFactor = opts.scale || 0.6
  return t
}
function sym(stack, name, size, color) {
  const s = SFSymbol.named(name) || SFSymbol.named("cloud.fill")
  s.applyFont(Font.systemFont(size))
  const img = stack.addImage(s.image)
  img.imageSize = new Size(size, size)
  img.tintColor = color
  return img
}
// Big temperature with ° raised to the top line of the digits, at 80% size
function bigTemp(parent, value, size, color) {
  const row = parent.addStack()
  row.layoutHorizontally()
  row.topAlignContent()
  text(row, String(value), numFont(size), color, { scale: 0.5 })
  const degStack = row.addStack()
  degStack.layoutVertically()
  degStack.addSpacer(size * 0.06)
  text(degStack, "°", numFont(size * 0.8), color, { scale: 0.5 })
  return row
}
// Summary with the app's band-colored bar on the left. A stack can't stretch to the text,
// so the bar height comes from an estimate of how many lines the text takes.
function summaryBlock(parent, s, size, maxLines, width, barColor, fg) {
  const row = parent.addStack()
  row.layoutHorizontally()
  row.topAlignContent()
  const em = [...s].reduce((a, ch) => a + (/[\u1100-\uFFFF]/.test(ch) ? 1 : 0.56), 0) * size
  const lines = Math.max(1, Math.min(maxLines, Math.ceil(em / (width - 10))))
  const bar = row.addStack()
  bar.size = new Size(4, Math.round(lines * size * 1.3))
  bar.backgroundColor = new Color(barColor)
  row.addSpacer(6)
  const t = text(row, s, Font.boldSystemFont(size), fg, { lines: maxLines, scale: 0.9 })
  return t
}

// Background: screen color + the weather art, centered and faded so the information reads on top of it (mock C)
const SIZES = { small: [158, 158], medium: [338, 158], large: [338, 354] }
const ART_PLACE = { small: [190, -10], medium: [250, -12], large: [360, -40] }   // width, vertical shift in points
function background(family, bg, art) {
  const [W, H] = SIZES[family]
  const ctx = new DrawContext()
  ctx.size = new Size(W, H)
  ctx.respectScreenScale = true
  ctx.opaque = true
  ctx.setFillColor(new Color(bg))
  ctx.fillRect(new Rect(0, 0, W, H))
  if (art) {
    const [aw, dy] = ART_PLACE[family], ah = aw * 170 / 240
    ctx.drawImageInRect(art, new Rect((W - aw) / 2, (H - ah) / 2 + dy, aw, ah))
  }
  return ctx.getImage()
}

// Wind icon like the app's 24-hour forecast (b87): 1 line under 20 km/h, 2 to 29, 3 from 30. Drawn on a 24-unit grid.
function windIcon(level, color) {
  const k = 1.657, ctx = new DrawContext()
  ctx.size = new Size(48, 48); ctx.opaque = false; ctx.respectScreenScale = true
  const P = (x, y) => new Point(x * 2, y * 2)
  // a straight line from x=3 to xe at height y, ending in a 3/4 curl that turns up (above the line) or down
  const hook = (y, xe, up) => {
    const s = up ? -1 : 1, cy = y + 3 * s, path = new Path()
    path.move(P(3, y)); path.addLine(P(xe, y))
    path.addCurve(P(xe + 3, cy), P(xe + k, y), P(xe + 3, cy - k * s))
    path.addCurve(P(xe, cy + 3 * s), P(xe + 3, cy + k * s), P(xe + k, cy + 3 * s))
    path.addCurve(P(xe - 3, cy), P(xe - k, cy + 3 * s), P(xe - 3, cy + k * s))
    ctx.addPath(path); ctx.strokePath()
  }
  ctx.setStrokeColor(color); ctx.setLineWidth(5.2)
  if (level === 0) hook(12, 16, true)
  if (level === 1) { hook(9, 14, true); hook(15, 18, false) }
  if (level === 2) {
    hook(9, 14, true); hook(14, 18, false)
    const p = new Path(); p.move(P(3, 19)); p.addLine(P(10, 19)); ctx.addPath(p); ctx.strokePath()
  }
  return ctx.getImage()
}

// Next six hours like the app's forecast columns: hour, wind (icon + km/h), rain chance bar and % (b88)
function hourStrip(parent, d, idx, fg, light, sky) {
  const H = d.hourly, cols = idx.slice(0, 6), r = n => Math.round(n) || 0
  const barColor = new Color(sky ? "#E6F3FC" : light ? "#CAE2F8" : "#8FB8DE")
  const top = Math.max(30, ...cols.map(i => H.precipitation_probability[i] || 0))
  const row = parent.addStack()
  row.layoutHorizontally()
  cols.forEach((i, n) => {
    const col = row.addStack()
    col.layoutVertically()
    col.size = new Size(51, 0)
    const line = (build) => { const s = col.addStack(); s.addSpacer(); build(s); s.addSpacer() }
    line(s => text(s, n === 0 ? T.now : H.time[i].slice(11, 13), Font.mediumSystemFont(10), fg))
    col.addSpacer(3)
    if (H.wind_speed_10m) {
      const w = r(H.wind_speed_10m[i])
      line(s => {
        s.centerAlignContent()
        const img = s.addImage(windIcon(w >= 30 ? 2 : w >= 20 ? 1 : 0, fg)); img.imageSize = new Size(11, 11)
        s.addSpacer(2)
        text(s, String(w), Font.semiboldSystemFont(10), fg)
      })
      col.addSpacer(4)
    }
    const pp = H.precipitation_probability[i] || 0
    line(s => {
      const box = s.addStack(); box.size = new Size(24, 16); box.layoutVertically(); box.addSpacer()
      const b = box.addStack(); b.size = new Size(24, Math.max(2, Math.round(pp / top * 16))); b.backgroundColor = barColor
    })
    col.addSpacer(2)
    line(s => text(s, pp + "%", Font.mediumSystemFont(9), fg))
  })
}

// ── Widget ──
async function build(d, family) {
  const c = d.current
  const day = c.is_day === 1
  const st = STATES[stateOf(c.weather_code, day)]
  const light = day && isOvercast(c.weather_code) && !isSnow(c.weather_code) && !isRain(c.weather_code) ? lightOf(c.shortwave_radiation) : null
  const bg = light ? OVERCAST_LIGHT[light] : st.bg
  const fg = new Color(st.fg)
  const temp = Math.round(c.temperature_2m) || 0
  const hi = Math.round(Math.max(d.daily.temperature_2m_max[0], c.temperature_2m))
  const lo = Math.round(Math.min(d.daily.temperature_2m_min[0], c.temperature_2m))
  const idx = next12(d)
  const sum = summary(d, idx)

  const w = new ListWidget()
  w.url = APP_URL
  w.refreshAfterDate = new Date(Date.now() + REFRESH_MIN * 60000)

  // Lock screen
  if (family === "accessoryInline") {
    w.addText(temp + "° " + label(c.weather_code, day) + " · " + sum)
    return w
  }
  if (family === "accessoryCircular") {
    w.addAccessoryWidgetBackground = true
    const s = w.addStack(); s.layoutVertically(); s.centerAlignContent()
    const a = s.addStack(); a.addSpacer(); sym(a, symbolFor(c.weather_code, day), 15, Color.white()); a.addSpacer()
    const b = s.addStack(); b.addSpacer(); text(b, temp + "°", numFont(22), Color.white()); b.addSpacer()
    return w
  }
  if (family === "accessoryRectangular") {
    const l1 = w.addStack(); l1.centerAlignContent()
    sym(l1, symbolFor(c.weather_code, day), 14, Color.white()); l1.addSpacer(4)
    text(l1, temp + "° " + label(c.weather_code, day), Font.boldSystemFont(14), Color.white())
    text(w, "↑" + hi + "° ↓" + lo + "° · " + Math.round(c.apparent_temperature) + "°", Font.systemFont(12), Color.white())
    text(w, sum, Font.systemFont(12), Color.white())
    return w
  }

  // Home screen: the art fills the middle, the information sits on top of it
  const today = summaryText(d, idx, light)
  const barColor = readableOn(BAND_COLOR[today.band[1]], bg, 1.5)
  w.backgroundColor = new Color(bg)
  w.backgroundImage = background(family, bg, await loadArt(artKey(c.weather_code, day, light)))
  w.setPadding(16, 16, 16, 16)
  text(w, T.city, Font.boldSystemFont(11), fg)
  w.addSpacer()

  if (family === "small") {
    bigTemp(w, temp, 56, fg)
    text(w, label(c.weather_code, day), Font.boldSystemFont(13), fg)
    w.addSpacer(4)
    summaryBlock(w, today.first, 10, 1, 126, barColor, fg)
    return w
  }

  const row = w.addStack(); row.bottomAlignContent()
  bigTemp(row, temp, family === "large" ? 96 : 64, fg)
  row.addSpacer(8)
  const side = row.addStack(); side.layoutVertically()
  text(side, label(c.weather_code, day), Font.boldSystemFont(family === "large" ? 20 : 13), fg)
  text(side, "↑" + hi + "° ↓" + lo + "°" + (family === "large" ? " · " + Math.round(c.apparent_temperature) + "°" : ""), new Font("Menlo", family === "large" ? 11 : 10), fg)
  side.addSpacer(family === "large" ? 8 : 6)

  if (family === "medium") {
    w.addSpacer(6)
    summaryBlock(w, today.text, 10.5, 2, 306, barColor, fg)
    return w
  }

  // large
  w.addSpacer(8)
  summaryBlock(w, today.text, 12.5, 3, 306, barColor, fg)
  w.addSpacer(10)
  hourStrip(w, d, idx, fg, st.fg === "#141414", st.bg === "#7FC1EA")
  return w
}

function errorWidget() {
  const w = new ListWidget()
  w.url = APP_URL
  w.backgroundColor = new Color("#7FC1EA")
  text(w, T.failed, Font.boldSystemFont(13), new Color("#141414"), { lines: 2 })
  w.refreshAfterDate = new Date(Date.now() + 10 * 60000)
  return w
}

// ── Run ──
let data = null
try { data = await getData() } catch (e) {}

if (config.runsInWidget || config.runsInAccessoryWidget) {
  Script.setWidget(data ? await build(data, config.widgetFamily || "small") : errorWidget())
} else {
  const a = new Alert()
  a.title = "Preview"
  a.addAction("Small"); a.addAction("Medium"); a.addAction("Large"); a.addAction("Open app")
  a.addCancelAction("Cancel")
  const n = await a.presentSheet()
  if (n === 3) Safari.open(APP_URL)
  else if (n >= 0) {
    const fam = ["small", "medium", "large"][n]
    const w = data ? await build(data, fam) : errorWidget()
    if (n === 0) await w.presentSmall()
    else if (n === 1) await w.presentMedium()
    else await w.presentLarge()
  }
}
Script.complete()
