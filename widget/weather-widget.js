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
  en: { city: "Berlin", noRain: "No rain for 12 h", rainAt: "Rain {t} · {p}%", rainNow: "Raining · {p}%", snowAt: "Snow {t}", snowNow: "Snowing", now: "Now", failed: "Couldn't load weather" },
  de: { city: "Berlin", noRain: "12 Std. kein Regen", rainAt: "{t} Regen · {p} %", rainNow: "Regen · {p} %", snowAt: "{t} Schnee", snowNow: "Schneefall", now: "Jetzt", failed: "Wetter nicht verfügbar" },
  ko: { city: "베를린", noRain: "12시간 비 소식 없음", rainAt: "{t} 비 · {p}%", rainNow: "지금 비 · {p}%", snowAt: "{t} 눈", snowNow: "지금 눈", now: "지금", failed: "날씨를 불러오지 못했어요" },
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
  sun:         { bg: "#F2C14E", fg: "#141414", graph: "#141414" },
  rain:        { bg: "#4F5D6B", fg: "#E6ECF2", graph: "#8FB8DE" },
  night:       { bg: "#1B2140", fg: "#F4F1E8", graph: "#F4F1E8" },
  "rain-night":{ bg: "#232B36", fg: "#E6ECF2", graph: "#8FB8DE" },
  snow:        { bg: "#E9EEF3", fg: "#141414", graph: "#5C7A99" },
  overcast:    { bg: "#BDB6AA", fg: "#141414", graph: "#141414" },
}
function stateOf(c, day) {
  if (isSnow(c)) return "snow"
  if (isRain(c)) return day ? "rain" : "rain-night"
  if (isOvercast(c) && day) return "overcast"
  return day ? "sun" : "night"
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
async function getData() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=" + PLACE.lat + "&longitude=" + PLACE.lon +
    "&current=temperature_2m,apparent_temperature,weather_code,is_day" +
    "&hourly=precipitation_probability,snowfall,weather_code" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=2"
  try {
    const d = await new Request(url).loadJSON()
    if (!d.current) throw new Error("bad data")
    fm.writeString(cachePath, JSON.stringify(d))
    return d
  } catch (e) {
    if (fm.fileExists(cachePath)) return JSON.parse(fm.readString(cachePath))
    throw e
  }
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
function bars(parent, d, idx, color, height, gap) {
  const snow = isSnow(d.current.weather_code)
  const vals = idx.map(i => snow ? (d.hourly.snowfall[i] || 0) : (d.hourly.precipitation_probability[i] || 0))
  const top = snow ? Math.max(0.5, ...vals) : 100
  const row = parent.addStack()
  row.layoutHorizontally()
  row.bottomAlignContent()
  vals.forEach((v, n) => {
    const b = row.addStack()
    b.size = new Size(0, Math.max(3, Math.round(v / top * height)))
    b.backgroundColor = color
    b.layoutHorizontally()
    b.addSpacer()
    if (n < vals.length - 1) row.addSpacer(gap)
  })
}

// ── Widget ──
function build(d, family) {
  const c = d.current
  const day = c.is_day === 1
  const st = STATES[stateOf(c.weather_code, day)]
  const fg = new Color(st.fg)
  const temp = Math.round(c.temperature_2m) || 0
  const hi = Math.round(d.daily.temperature_2m_max[0])
  const lo = Math.round(d.daily.temperature_2m_min[0])
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

  // Home screen
  w.backgroundColor = new Color(st.bg)
  w.setPadding(16, 16, 16, 16)

  const head = w.addStack(); head.centerAlignContent()
  text(head, T.city, Font.boldSystemFont(12), fg)
  head.addSpacer()
  sym(head, symbolFor(c.weather_code, day), 16, fg)

  if (family === "small") {
    w.addSpacer()
    bigTemp(w, temp, 64, fg)
    w.addSpacer(2)
    text(w, label(c.weather_code, day), Font.boldSystemFont(13), fg)
    text(w, sum, Font.mediumSystemFont(10), fg)
    return w
  }

  if (family === "medium") {
    w.addSpacer()
    const row = w.addStack(); row.bottomAlignContent()
    const left = row.addStack(); left.layoutVertically(); left.size = new Size(118, 0)
    bigTemp(left, temp, 64, fg)
    left.addSpacer(2)
    text(left, label(c.weather_code, day), Font.boldSystemFont(13), fg)
    row.addSpacer(12)
    const right = row.addStack(); right.layoutVertically()
    text(right, sum, Font.boldSystemFont(12), fg)
    right.addSpacer(8)
    bars(right, d, idx, new Color(st.graph), 44, 3)
    right.addSpacer(4)
    const ticks = right.addStack()
    text(ticks, T.now, new Font("Menlo", 9), fg); ticks.addSpacer()
    text(ticks, d.hourly.time[idx[Math.min(6, idx.length - 1)]].slice(11, 13), new Font("Menlo", 9), fg); ticks.addSpacer()
    text(ticks, d.hourly.time[idx[idx.length - 1]].slice(11, 13), new Font("Menlo", 9), fg)
    return w
  }

  // large
  w.addSpacer()
  const c1 = w.addStack(); c1.addSpacer(); bigTemp(c1, temp, 120, fg); c1.addSpacer()
  const c2 = w.addStack(); c2.addSpacer(); text(c2, label(c.weather_code, day), Font.boldSystemFont(24), fg); c2.addSpacer()
  const c3 = w.addStack(); c3.addSpacer(); text(c3, "↑" + hi + "° ↓" + lo + "° · " + Math.round(c.apparent_temperature) + "°", new Font("Menlo", 11), fg); c3.addSpacer()
  w.addSpacer()
  text(w, sum, Font.boldSystemFont(13), fg)
  w.addSpacer(8)
  bars(w, d, idx, new Color(st.graph), 44, 4)
  return w
}

function errorWidget() {
  const w = new ListWidget()
  w.url = APP_URL
  w.backgroundColor = new Color("#F2C14E")
  text(w, T.failed, Font.boldSystemFont(13), new Color("#141414"), { lines: 2 })
  w.refreshAfterDate = new Date(Date.now() + 10 * 60000)
  return w
}

// ── Run ──
let data = null
try { data = await getData() } catch (e) {}

if (config.runsInWidget || config.runsInAccessoryWidget) {
  Script.setWidget(data ? build(data, config.widgetFamily || "small") : errorWidget())
} else {
  const a = new Alert()
  a.title = "Preview"
  a.addAction("Small"); a.addAction("Medium"); a.addAction("Large"); a.addAction("Open app")
  a.addCancelAction("Cancel")
  const n = await a.presentSheet()
  if (n === 3) Safari.open(APP_URL)
  else if (n >= 0) {
    const fam = ["small", "medium", "large"][n]
    const w = data ? build(data, fam) : errorWidget()
    if (n === 0) await w.presentSmall()
    else if (n === 1) await w.presentMedium()
    else await w.presentLarge()
  }
}
Script.complete()
