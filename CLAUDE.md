# 미니멀 날씨앱 — 프로젝트 브리프

광고 없이 지금 날씨를 숫자 하나로 보여주는 아이폰용 날씨앱. 디자인은 Claude 디자인 캔버스에서 확정했고, 이 폴더의 `design/`에 그대로 들어 있습니다.

## 현재 상태 (2026-10-17)

- 첫 버전 완성, GitHub Pages로 배포됨: https://jinex001.github.io/Weather-App/
- `index.html`: 웹앱 (실시간 Open-Meteo 데이터, 5가지 상태 화면, 기기 언어 자동, 15분 새로고침, 오프라인 캐시, 위치 버튼으로 GPS/베를린 전환)
- `widget/weather-widget.js`: Scriptable 위젯 (small/medium/large + 잠금화면 3종, 탭하면 앱 URL 열림)
- 5개 상태와 3개 언어를 가짜 데이터로 렌더링 테스트함. 실제 아이폰에서의 확인은 아직 사용자 피드백 대기.
- 2026-10-17: 흐린 낮 상태(웜그레이 `#BDB6AA`) 추가. 흐린 밤은 기존 밤 화면 유지.
- 2026-10-17: 체감온도를 큰 기온 ° 아래로 옮김, 바람 추가, 24시간 예보 추가 (웹앱만, 위젯은 그대로).
- 2026-10-17: 체감온도를 헤드 아래 독립 블록으로 옮기고 9단계 + 움직이는 사람 아이콘 추가. 옷차림 패널은 아직 (시안만 있음).
- 다음 작업은 사용자 요청에 따라 진행. `main`에 push하면 1~2분 뒤 사이트에 반영됨.
- 커밋 이메일은 `jinex001@users.noreply.github.com` 사용 (공개 저장소라 개인 이메일 노출 금지).

사용자: 베를린 거주, 아이폰 사용. 기기 언어는 독일어·한국어·영어 중 하나.

## 만들 것

1. **웹앱 (홈 화면에 추가)**
   - 정적 사이트 하나: `index.html` + `manifest.webmanifest` + 아이콘(`apple-touch-icon` 180px, 512px). 빌드 도구 없이 바닐라 HTML/CSS/JS로 충분합니다.
   - iOS Safari에서 공유 → "홈 화면에 추가"로 설치. `apple-mobile-web-app-capable`, `display: standalone`, `viewport-fit=cover`, safe-area 여백 처리.
   - 실시간 날씨 표시, 15분마다 + 앱으로 돌아올 때(`visibilitychange`) 새로고침. 마지막 데이터는 `localStorage`에 캐시해서 오프라인에서도 보이게.
   - 배포: GitHub Pages (사용자 GitHub 계정 `jinex001`, 저장소 `Weather-App`, 주소 https://jinex001.github.io/Weather-App/). 배포 URL을 위젯에 넣습니다.

2. **홈 화면 위젯 (Scriptable)**
   - `widget/weather-widget.js`가 새 디자인 위젯.
   - 크기: small, medium, large + 잠금화면(accessoryCircular, accessoryRectangular, accessoryInline). `design/screens/Widgets.dc.html` 참고.
   - **위젯을 누르면 웹앱이 열리도록** `widget.url = <배포 URL>` 설정.
   - 알려진 iOS 제약: 위젯 탭은 홈 화면에 추가한 앱 인스턴스가 아니라 Safari에서 같은 URL을 엽니다. 화면은 같지만 Safari 주소창이 보일 수 있음. 사용자에게 이 점을 알려줄 것.
   - Scriptable은 웹폰트를 못 쓰므로 숫자는 iOS 내장 `AvenirNextCondensed-Heavy` 등으로 Anton 느낌을 근사.

## 데이터

- Open-Meteo (`https://api.open-meteo.com/v1/forecast`), API 키 불필요. `timezone=auto`.
- 필요한 값: current(temperature_2m, apparent_temperature, weather_code, is_day), hourly(temperature_2m, precipitation_probability, snowfall, weather_code, is_day) 12시간+, daily(weather_code, temperature_2m_max/min, precipitation_probability_max, sunrise/sunset) 7일.
- 위치: 기본 베를린(52.52, 13.405). 사용자가 허용하면 GPS. 도시 이름은 GPS일 때 "현재 위치"(언어별)로 표시해도 됨.

## 화면 상태 (6가지) — `design/screens/`

| 상태 | 조건 | 파일 | 배경 | 글자 |
| --- | --- | --- | --- | --- |
| 맑음·구름 조금 낮 | is_day=1, 코드 0–2 | `Main.dc.html` | `#F2C14E` | `#141414` |
| 흐림 낮 | is_day=1, 코드 3, 45, 48 (흐림·안개) | (캔버스 파일 없음, 구름 2개 = 비 화면 구름에서 빗줄기 뺀 것: 뒤 `#958E81`, 앞 `#EDE8DF`) | `#BDB6AA` | `#141414` |
| 비 낮 | is_day=1, 코드 51–67, 80–82, 95–99 | `Rain.dc.html` | `#4F5D6B` | `#E6ECF2` |
| 맑음·흐림 밤 | is_day=0, 비·눈 아님 | `Night.dc.html` | `#1B2140` | `#F4F1E8` |
| 비 밤 | is_day=0, 비 코드 | `RainNight.dc.html` | `#232B36` | `#E6ECF2` |
| 눈 | 코드 71–77, 85–86 (낮·밤 공통) | `Snow.dc.html` | `#E9EEF3` | `#141414` |

`.dc.html` 파일은 디자인 캔버스용 형식입니다(`<x-dc>`, `{{t.x}}` 바인딩, `support.js`). 실행용이 아니라 **레이아웃·수치·색·문구의 기준**으로 읽고, 실제 앱은 일반 HTML로 다시 구현하세요. 각 파일 아래 스크립트에 en/de/ko 문구가 있습니다. 숫자는 예시 값입니다.

화면 구조(위→아래): 도시·날짜 / 날씨 그림 / 큰 기온 / 상태 문구(기온에 겹침) / 최고·최저·바람 한 줄 / 체감온도 블록(선 없음, 움직이는 사람 아이콘 + 체감온도 Anton 56px + "체감온도" 라벨 위·단계 이름 아래, 블록 전체가 단계 색, 누르면 동작 다시 재생; 나중에 옷차림 패널을 여는 버튼) / (여백) / 강수·강설 블록 또는 한 줄 요약 / 24시간 예보(가로 스크롤, 1시간 단위, 강수 20% 이상이면 표시, 지금 칸은 기온 밑 5px 점) / 6일 예보.

체감온도 9단계(apparent_temperature): 혹한 ≤-10 · 매우 추움 -9~-3 · 추움 -2~4 · 쌀쌀 5~11 · 선선 12~16 · 쾌적 17~22 · 따뜻 23~27 · 더움 28~32 · 폭염 ≥33. 사람 동작: 꽁꽁 움츠림+입김 / 덜덜+입김 / 가끔 떨기+입김 / 어깨 움츠림 / 숨쉬기 / 숨쉬기+좌우 / 좌우 흔들 / 땀방울 / 땀 두 방울+축 처짐. 겹침: 바람 30km/h 이상 → 머리카락 날림+기울기, 비 → 빗방울(#8FB8DE), 눈 → 눈송이. 단계 색은 스펙트럼 색 그대로(index.html BAND_COLOR: #1E2A5A #2F4A86 #5C7FB8 #9DB7D4 #C9D6C2 #E8DFA6 #F2C14E #E8862C #C4401A). 배경과 대비 3:1 미만일 때만 그 경우에 한해 진하게(밝은 배경)/밝게(어두운 배경) + 채도 올림. 동작은 열 때와 누를 때 7초만 재생, "동작 줄이기"면 정지.

사용자가 캔버스에서 직접 고친 부분도 반영되어 있습니다(예: 일부 구분선 제거, 맑음 화면 간격). 파일을 기준으로 따르세요.

## 디자인 규칙 (꼭 지킬 것)

- **큰 기온**: Anton 240px, line-height 0.86, letter-spacing -4px, 가운데 정렬.
- **° 기호**: 숫자의 80% 크기, 윗끝을 숫자 윗선에 맞춤 → `<span style="font-size:.8em;position:relative;top:-.29em">°</span>`. (Anton 실측: 숫자 윗선 1761/2048em, ° 윗선 1607/2048em에서 계산.) 위젯 등 모든 큰 기온에 동일 적용.
- **상태 문구**: Noto Sans KR 700, 40px, line-height 1.1, `margin-top: -20px`로 기온 아래쪽과 살짝 겹침. 겹치는 부분이 읽히도록 배경색으로 3px 외곽선(여러 겹 `text-shadow`).
- **비 색 `#8FB8DE`**: 비 그래프 막대와 빗줄기는 어느 화면이든 이 색. 밝은 배경에는 쓰지 않음(그래서 비 오는 낮도 어두운 배경).
- **눈 그래프 `#5C7A99`**: 강설 막대·눈송이. 구름 `#BCC8D4`.
- **그래프**: 12시간, 막대 12개, 간격 4px, 높이 48px. 비는 precipitation_probability, 눈은 snowfall(cm). 제목 줄에 시작/그침 시각과 최대값.
- **단색 배경만**, 그라데이션·그림자·카드 없음. 정보 묶음은 1.5px 선(글자색)으로 구분.
- **아이콘**: 굵은 단색 실루엣 SVG(해=원, 구름, 빗줄기, 달, 눈 점). 파일에 있는 path를 그대로 재사용.
- 글꼴: Anton(숫자), Noto Sans KR(문구), JetBrains Mono(날짜·데이터). Google Fonts.
- 날씨 상태가 바뀌면 `theme-color`(상태 표시줄 색)도 배경색으로.

색·글꼴·간격 토큰 전체: `design/tokens.json`, 원칙 설명: `design/design-system.md`.

## 언어

`navigator.language`가 `de*` → 독일어, `ko*` → 한국어, 그 외 → 영어. 날짜·요일 형식도 각 언어 방식(`Intl.DateTimeFormat`). 문구는 각 `.dc.html` 하단의 en/de/ko 사전을 기준으로 확장.

## 완료 기준

- 아이폰 Safari에서 열면 현재 날씨에 맞는 상태 화면이 실제 데이터로 표시됨.
- 홈 화면에 추가하면 전체 화면 앱처럼 열림, 아이콘 표시.
- Scriptable 위젯이 같은 디자인으로 표시되고, 누르면 웹앱 URL이 열림.
- 사용자에게 설치 방법을 짧게 안내(한국어).
