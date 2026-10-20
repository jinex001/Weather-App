# Weather App

광고 없이 지금 날씨를 숫자 하나로 보여주고, 오늘 뭘 입을지(Today's Look)까지 알려주는 아이폰용 날씨 웹앱과 Scriptable 위젯.

- 앱: https://jinex001.github.io/Weather-App/
- 데이터: [Open-Meteo](https://open-meteo.com) 예보, [Bright Sky](https://brightsky.dev) 독일 기상청(DWD) 실측·경보, [MET Norway](https://api.met.no) 구름 양 (모두 API 키 불필요)
- 화면: 맑음 · 흐림(햇빛 3단계) · 비 · 눈 낮 + 밤 (날씨에 따라 자동 전환), 캘린더 · 알림 · 설정
- Today's Look: 체감온도·하늘·시간대에 맞는 에디토리얼 룩 3개, 제품 컷과 입는 법
- 언어: 기기 설정에 따라 독일어 · 한국어 · 영어

## 아이폰에 설치

1. Safari에서 위 앱 주소 열기 → 공유 버튼 → **홈 화면에 추가**
2. App Store에서 **Scriptable** 설치 → 새 스크립트에 `widget/weather-widget.js` 내용 붙여넣기
3. 홈 화면에 Scriptable 위젯 추가 → 위젯 편집 → Script에서 이 스크립트 선택

위젯을 누르면 앱 주소가 열립니다(iOS 제약으로 Safari에서 열림).

## 파일

- `index.html`, `manifest.webmanifest`, `icon-*.png`: 웹앱 (빌드 도구 없음)
- `look/outfits.js`: Today's Look 룩 라이브러리, `look/berlin-complete/`: 룩 사진(JPG)
- `widget/weather-widget.js`, `widget/art/`: Scriptable 위젯과 배경 그림
- `design/design-system.md`, `design/tokens.json`: 디자인 시스템과 토큰
- `design/look-library.md`: 룩 데이터 형식·고르는 규칙, `design/IMAGE_STYLE.md`: 사진 스타일
- `design/screens/`: 처음 디자인 캔버스(기준용)
- `proto/`: 시안 페이지
- `CLAUDE.md`: 프로젝트 브리프와 변경 기록
