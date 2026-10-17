# Weather App

광고 없이 지금 날씨를 숫자 하나로 보여주는 아이폰용 날씨 웹앱과 Scriptable 위젯.

- 앱: https://jinex001.github.io/weather-app/
- 데이터: [Open-Meteo](https://open-meteo.com) (API 키 불필요)
- 화면: 맑음 낮 · 비 낮 · 밤 · 비 오는 밤 · 눈 (날씨에 따라 자동 전환)
- 언어: 기기 설정에 따라 독일어 · 한국어 · 영어

## 아이폰에 설치

1. Safari에서 위 앱 주소 열기 → 공유 버튼 → **홈 화면에 추가**
2. App Store에서 **Scriptable** 설치 → 새 스크립트에 `widget/weather-widget.js` 내용 붙여넣기
3. 홈 화면에 Scriptable 위젯 추가 → 위젯 편집 → Script에서 이 스크립트 선택

위젯을 누르면 앱 주소가 열립니다.

## 파일

- `index.html`, `manifest.webmanifest`, `icon-*.png`: 웹앱
- `widget/weather-widget.js`: Scriptable 위젯
- `design/`: 디자인 시안과 디자인 토큰
- `CLAUDE.md`: 프로젝트 브리프
