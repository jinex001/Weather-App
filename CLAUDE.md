# 미니멀 날씨앱 — 프로젝트 브리프

광고 없이 지금 날씨를 숫자 하나로 보여주는 아이폰용 날씨앱. 디자인은 Claude 디자인 캔버스에서 확정했고, 이 폴더의 `design/`에 그대로 들어 있습니다.

## 현재 상태 (2026-10-17, 빌드 b18)

- GitHub Pages로 배포됨: https://jinex001.github.io/Weather-App/ · `main`에 push하면 1~2분 뒤 반영.
- `index.html`: 웹앱. 실시간 Open-Meteo, 5가지 색 상태(낮 4 + 밤 1), 움직이는 날씨 그림, 체감온도 9단계 블록 + 움직이는 사람 아이콘, 24시간·6일 예보, **Today's Look**(옷차림 시트 + 질문 화면), 기기 언어 자동(ko/en/de), 15분 새로고침, 오프라인 캐시, 위치 버튼으로 GPS/베를린 전환.
- `widget/weather-widget.js`: Scriptable 위젯(small/medium/large + 잠금화면 3종). 색 규칙은 앱과 같음. 체감온도·Today's Look은 없음.
- 아이폰 확인: 헤드 탭으로 Today's Look 열림을 사용자가 확인(b15). 나머지는 가짜 데이터 렌더링으로 확인.
- 상태 줄 끝 빌드 표시(`BUILD`, index.html)는 앱 코드를 바꿔 배포할 때마다 올릴 것. 폰이 예전 페이지를 붙잡고 있는지 확인하는 용도.
- 디자인 값의 기준은 `design/tokens.json`(v3)과 `design/design-system.md`. 바꾸면 이 두 파일도 같이 고칠 것.
- 다음 작업은 사용자 요청에 따라 진행.
- 커밋 이메일은 `jinex001@users.noreply.github.com` 사용 (공개 저장소라 개인 이메일 노출 금지).

### 변경 기록 (2026-10-17)
- 흐린 낮 상태 추가 → 웜그레이에서 쿨그레이 `#DCE1E5`로 변경. 밤은 날씨와 상관없이 전부 `#1B2140`.
- 체감온도: 큰 기온 옆 → 헤드 아래 독립 블록, 9단계 색·움직이는 사람 아이콘(무한 반복).
- 24시간 예보 추가(지금 칸은 맨 앞, 5px 점).
- 글꼴 Poppins로 통일(큰 숫자만 Anton), 상태 문구 대문자.
- 날씨 그림 움직임(맑음 코드 0/1/2 구분).
- Today's Look 시트와 질문 화면. 헤드 전체가 탭 영역.
- b16: 비 코드인데 지금 강수 0.1mm 미만 + 이번 시간 강수확률 40% 미만이면 흐림으로 표시. 날짜 줄은 현지 시계 시각. Today's Look 빗방울 글자색, "지금 비가 와요" 문구.
- b17: Today's Look 배경을 반투명(단계 색 66%) + 뒤 메인 화면 블러로(iOS 글라스 느낌).
- b18: 요청 실패 시 4·8·12초 뒤 재시도(앱 복귀 직후 iOS 요청 실패 대응), online/pageshow에도 새로고침. 20분 이내 데이터면 실패해도 "Offline" 대신 "Updated". 마지막 오류는 `<html data-last-error>`.

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
- 필요한 값: current(temperature_2m, apparent_temperature, weather_code, is_day, wind_speed_10m, precipitation), hourly(temperature_2m, precipitation_probability, snowfall, weather_code, is_day) 12시간+, daily(weather_code, temperature_2m_max/min, precipitation_probability_max, sunrise/sunset) 7일.
- 위치: 기본 베를린(52.52, 13.405). 사용자가 허용하면 GPS. 도시 이름은 GPS일 때 "현재 위치"(언어별)로 표시해도 됨.

## 화면 상태 — `design/screens/`

**낮에만 날씨별 색, 밤에는 날씨와 상관없이 전부 한 가지 어두운 색(`#1B2140`).** 밤 화면의 그림·그래프는 날씨를 따름(비 → 비 그림, #8FB8DE 막대; 눈 → 눈 그림, 막대 #BCC8D4).

| 상태 | 조건 | 파일 | 배경 | 글자 |
| --- | --- | --- | --- | --- |
| 맑음·구름 조금 낮 | is_day=1, 코드 0–2 | `Main.dc.html` | `#F2C14E` | `#141414` |
| 흐림 낮 | is_day=1, 코드 3, 45, 48 (흐림·안개) | (캔버스 파일 없음, 구름 2개 = 비 화면 구름에서 빗줄기 뺀 것: 뒤 `#958E81`, 앞 `#EDE8DF`) | `#DCE1E5` (깨끗한 쿨그레이) | `#141414` |
| 비 낮 | is_day=1, 코드 51–67, 80–82, 95–99 | `Rain.dc.html` | `#4F5D6B` | `#E6ECF2` |
| 눈 낮 | is_day=1, 코드 71–77, 85–86 | `Snow.dc.html` | `#E9EEF3` | `#141414` |
| 밤 (모든 날씨) | is_day=0 | `Night.dc.html` (비 오는 밤 그림은 `RainNight.dc.html`) | `#1B2140` | `#F4F1E8` |

`.dc.html` 파일은 디자인 캔버스용 형식입니다(`<x-dc>`, `{{t.x}}` 바인딩, `support.js`). 실행용이 아니라 **레이아웃·수치·색·문구의 기준**으로 읽고, 실제 앱은 일반 HTML로 다시 구현하세요. 각 파일 아래 스크립트에 en/de/ko 문구가 있습니다. 숫자는 예시 값입니다.

화면 구조(위→아래): 도시·날짜 / 날씨 그림 / 큰 기온 / 상태 문구(기온에 겹침) / 최고·최저·바람 한 줄 / 체감온도 블록(선 없음, 움직이는 사람 아이콘 + 체감온도 Anton 56px + "체감온도" 라벨 위·단계 이름 아래, 블록 전체가 단계 색, 누르면 Today's Look 시트가 열림). 도시·날짜·그림·큰 기온·상태·최고최저·체감온도까지 헤드 전체가 탭 영역(#head-tap, 위치 버튼만 제외) / (여백) / 강수·강설 블록 또는 한 줄 요약 / 24시간 예보(가로 스크롤, 1시간 단위, 강수 20% 이상이면 표시, 지금 칸은 기온 밑 5px 점) / 6일 예보.

**Today's Look (체감온도 블록을 누르면 아래에서 올라오는 전체 화면 시트)**: 매거진 에디토리얼 형식. 선·번호·일러스트 없음(사용자 결정). 배경은 단계 원색 66% 반투명 + 뒤 메인 화면 블러(글라스), 글자는 밝기에 따라 #141414/#F4F1E8. 위→아래: 닫기 바(누르거나 아래로 쓸어 닫기) / TODAY'S LOOK · 날짜 · 도시 / 움직이는 사람 50px / "체감 N° · 단계" / Anton 92px 헤드라인(단계별: BUNDLE UP, WRAP UP, COAT ON, LAYER UP, LIGHT LAYERS, JUST RIGHT, SHORT SLEEVES, KEEP IT LIGHT, STAY COOL) / 한 줄 요약 / 아이템(Outer·Top·Bottom·Shoes·Bring 등, 여성은 Bottom에 원피스·스커트 선택지) + Rain/Wind/Snow 추가 / Tonight(오늘 중 지금보다 4° 이상 떨어지는 첫 시각) 또는 Tomorrow(내일 최고 ≥30 물병 얼리기, 최저 ≤0 보온병) / Note(50대 이상 + 선선 이하면 한 겹 더) / WITH BABY(아기 "네"일 때만) / Updated · Edit profile. 처음 열 때 질문 화면(ABOUT YOU: 성별 여/남/선택 안 함, 연령대 20대 이하/30~40대/50대 이상, 아기와 외출 네/아니요, Skip 가능). 답은 localStorage "wx-profile"에만 저장. 문구는 index.html의 LOOK/LT(ko/en/de).

체감온도 9단계(apparent_temperature): 혹한 ≤-10 · 매우 추움 -9~-3 · 추움 -2~4 · 쌀쌀 5~11 · 선선 12~16 · 쾌적 17~22 · 따뜻 23~27 · 더움 28~32 · 폭염 ≥33. 사람 동작: 꽁꽁 움츠림+입김 / 덜덜+입김 / 가끔 떨기+입김 / 어깨 움츠림 / 숨쉬기 / 숨쉬기+좌우 / 좌우 흔들 / 땀방울 / 땀 두 방울+축 처짐. 겹침: 바람 30km/h 이상 → 머리카락 날림+기울기, 비 → 빗방울(#8FB8DE), 눈 → 눈송이. 단계 색은 스펙트럼 색 그대로(index.html BAND_COLOR: #1E2A5A #2F4A86 #5C7FB8 #9DB7D4 #C9D6C2 #FFFFFF #F2C14E #E8862C #C4401A). 쾌적은 예외로 어느 화면에서든 항상 흰색, 외곽선 없음(사용자 결정). 나머지는 배경과 대비 3:1 미만일 때만 그 경우에 한해 진하게(밝은 배경)/밝게(어두운 배경) + 채도 올림. 동작은 무한 반복 재생(누르면 처음부터 다시), "동작 줄이기"면 정지.

사용자가 캔버스에서 직접 고친 부분도 반영되어 있습니다(예: 일부 구분선 제거, 맑음 화면 간격). 파일을 기준으로 따르세요.

## 디자인 규칙 (꼭 지킬 것)

- **큰 기온**: Anton 240px, line-height 0.86, letter-spacing -4px, 가운데 정렬.
- **° 기호**: 숫자의 80% 크기, 윗끝을 숫자 윗선에 맞춤 → `<span style="font-size:.8em;position:relative;top:-.29em">°</span>`. (Anton 실측: 숫자 윗선 1761/2048em, ° 윗선 1607/2048em에서 계산.) 위젯 등 모든 큰 기온에 동일 적용.
- **상태 문구**: Poppins 700(한글은 Noto Sans KR), 40px, line-height 1.1, 대문자, `margin-top: -20px`로 기온 아래쪽과 살짝 겹침. 겹치는 부분이 읽히도록 배경색으로 3px 외곽선(여러 겹 `text-shadow`).
- **비 색 `#8FB8DE`**: 비 그래프 막대와 빗줄기는 어느 화면이든 이 색. 밝은 배경에는 쓰지 않음(그래서 비 오는 낮도 어두운 배경).
- **눈 그래프 `#5C7A99`**: 강설 막대·눈송이(낮). 밤에는 `#BCC8D4`. 구름 `#BCC8D4`.
- **그래프**: 12시간, 막대 12개, 간격 4px, 높이 48px. 비는 precipitation_probability, 눈은 snowfall(cm). 제목 줄에 시작/그침 시각과 최대값.
- **테두리·외곽선을 새로 넣지 말 것** (사용자 요청). 읽기 어려우면 색을 조정하지, 테두리로 해결하지 않음. 예외는 원래 디자인의 상태 문구 배경색 외곽선뿐.
- **단색 배경만**, 그라데이션·그림자·카드 없음(예외: Today's Look은 반투명 단계 색 + 뒤 화면 블러, 사용자 결정). 정보 묶음은 1.5px 선(글자색)으로 구분(24시간·6일 예보 위만). 체감온도 블록과 Today's Look에는 선 없음.
- **날씨 그림 (움직임, 무한 반복)**: 낮 코드 0 해만(햇살 회전·반짝, 해 숨쉬기) · 1 해 + 아주 작은 구름이 흘러감 · 2 해 앞 큰 구름(좌우로 흔들) · 3/45/48 흐림(큰 구름 2개 고정 + 작은 구름 3개가 왼→오 흐름). 밤 0–1 달+별 반짝 · 2+ 달+구름. 비는 구름 고정, 빗줄기 계속 낙하. 눈은 눈송이 살랑이며 낙하(밤엔 밝은 색). "동작 줄이기"면 정지.
- **아이콘**: 굵은 단색 실루엣 SVG(해=원, 구름, 빗줄기, 달, 눈 점). 파일에 있는 path를 그대로 재사용. 옷 일러스트는 쓰지 않음(사용자 결정).
- 글꼴: Anton(큰 숫자), 그 외 모든 글자 Poppins(문구 600–700, 날짜·데이터 줄 500; 한글은 Noto Sans KR로 대체). Google Fonts. 상태 문구는 대문자(text-transform: uppercase).
- 날씨 상태가 바뀌면 `theme-color`(상태 표시줄 색)도 배경색으로.

색·글꼴·간격 토큰 전체: `design/tokens.json`, 원칙 설명: `design/design-system.md`.

## 언어

`navigator.language`가 `de*` → 독일어, `ko*` → 한국어, 그 외 → 영어. 날짜·요일 형식도 각 언어 방식(`Intl.DateTimeFormat`). 문구는 각 `.dc.html` 하단의 en/de/ko 사전을 기준으로 확장.

## 완료 기준

- 아이폰 Safari에서 열면 현재 날씨에 맞는 상태 화면이 실제 데이터로 표시됨.
- 홈 화면에 추가하면 전체 화면 앱처럼 열림, 아이콘 표시.
- Scriptable 위젯이 같은 디자인으로 표시되고, 누르면 웹앱 URL이 열림.
- 사용자에게 설치 방법을 짧게 안내(한국어).
