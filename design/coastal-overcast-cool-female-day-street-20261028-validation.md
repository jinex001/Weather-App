# b179 검증 · coastal-overcast-cool-female-day-street-20261028

2026-10-28. 해안 · 흐림 · 선선함 · 여성 · 35+ · 낮 · 스트리트, 5룩 · 28제품.

## 입력

- 배치 루트: 로컬 outbox `Global/coastal-overcast-cool-female-day-street-20261028`. READY.json 154개 파일 SHA-256·크기 모두 일치(가져오기 전 확인). 진입점 `originals/product-batch/complete/<룩 ID>/`만 사용.
- 승인: 사용자가 최신 에디토리얼 5장(01 coffee-paper-bag · 02 flowers-v2 · 03 orange-tote · 04 seated-map-v2 · 05 keys)과 이 배치의 main 반영·배포를 승인(2026-10-28). 제품은 제작 측 기술 QA(TECHNICAL_QA.json)·4배경 육안 검수(VISUAL_REVIEW.json) 통과, 제품별 사용자 육안 승인은 없음.
- 커밋하지 않은 것: PNG 마스터, 버린 에디토리얼(02 newspaper, 04 standing map, 01-editorial-v2), 05 버건디 끈 신발(`app-products/05-sneakers.webp`), QA 시트, 프롬프트, 생성 기록, 스크립트.

## 육안 확인 (Claude, 33장 모두 열어 봄)

| 룩 | 장면 | 제품 (앱 분류) | 메모 |
| --- | --- | --- | --- |
| 01 | 카페 문 앞, 커피를 높이 들고 미끄러지는 종이봉투 | 올리브 필드 재킷(outer) · 오트밀 니트(top) · 차콜 와이드 데님(bottom) · 오프화이트 스니커즈(shoes) · 버건디 크로스백(bag) | 사진과 일치 |
| 02 | 골목에서 꽃다발 포장 정돈 | 코발트 윈드브레이커(outer) · 크림 니트(top) · 네이비 와이드 팬츠(bottom) · 라이트 그레이 스니커즈(shoes) · 브라운 숄더백(bag) · 골드 후프(jewelry) | 사진은 후드를 목 뒤로 내린 상태. b179 제품 컷은 칼라 + 조임끈만 보였음 → b180 후드 수정본(아래) 가방은 끈·일부만 보여 형태 추정 |
| 03 | 채소 가게 앞, 캔버스 토트 입구의 오렌지 받치기 | 러스트 초어 재킷(outer) · 아이보리 니트(top) · 라이트 블루 와이드 데님(bottom) · 탄 스웨이드 스니커즈(shoes) · 내추럴 캔버스 토트(bag) | 일치 |
| 04 | 돌계단에 앉아 무릎 위 지도 | 샌드 봄버(outer) · 다크 플럼 니트(top) · 워시드 차콜 데님(bottom) · 크림·베이지 패널 스니커즈(shoes) · 다크 브라운 숄더백(bag) · 골드 후프(jewelry) | 신발은 앉은 수정본에 보이는 스니커즈(로퍼 아님) |
| 05 | 현관 앞에서 열쇠를 들어 보임 | 네이비 크롭 재킷(outer) · 크림·네이비 줄무늬 니트(top) · 스톤 팬츠(bottom) · 버건디 스니커즈 크림 끈 v2(shoes) · 탄 스웨이드 토트(bag) · 골드 후프(jewelry) | 일치 |

컵·종이봉투·꽃·오렌지/채소·지도·열쇠는 소품이라 제품 아님. 모든 제품 컷은 한 품목(신발·귀걸이는 한 쌍), 잘림·잔여 배경 없음.

## 자산 (파이썬, 이 저장소 기준)

- 33개 파일 SHA-256이 전달 파일과 같음(바이트 그대로), products.json의 `editorialSha256`·제품 `sha256`/`bytes`와 일치.
- 에디토리얼 5장 1024×1536 JPEG, 258,415–288,341 B(≤300,000).
- 제품 28개: RIFF/WEBP, 청크 VP8X + ALPH + VP8, VP8X 알파 플래그 켜짐, ALPH 무손실(압축 1), 캔버스 500×500, 16,920–49,240 B(≤50,000).
- 픽셀 단위 알파(모서리 0 등)는 이 세션에서 Pillow·node·jsc 실행이 허용되지 않아 직접 디코드하지 못함. 제작 측 TECHNICAL_QA(알파 0–255, 투명 픽셀 수, 보이는 영역)와 위 육안 확인에 기댐.

## 매핑

- 보충 모듈 `look/coastal-overcast-cool-female-day-street-20261028.js`: b178 모듈 바로 뒤, `cutouts.js` 앞, `global-context.js`는 그대로 마지막. `BUILD` b179, `cutouts.js?v=b179`, 모듈 `?v=b179`.
- 룩 5개: `bands: ["cool"]`, `sky: "cloudy"`, `style: "street"`, `gender: "f"`, `age: "35"`, `time` 없음(낮), `visualRegion: warm-coastal-urban`, `climateContext {feelsLikeBand: cool, humidityContext: unknown}`, `contextReview {status: reviewed}`. 기사 title/intro/pull/tip 모두 있음.
- 아이템 28개 `<룩 ID>.<제품 id>`, `bg` `#F3EFE8`, 이미지 경로 모두 존재. 기존 룩·아이템 ID와 충돌 없음.
- `cutouts.js`: HERO 5행(04 bomber, 나머지 jacket — 모두 `outer`), CUTS 5행 = 그 제품 WebP 자체(새 컷 없음, `lum` null).
- 배포한 products.json: `mappingStatus: mapped`, `appModule`, `appSky: cloudy`, `appBands: [cool]`, 최종 문구, 원문(`copy.sourceDeckEn`, `sourceHowToWear`, `sourceAppCategory`), `copy.refinements`. 측정값 필드(기온·습도·바람·도시)는 null 그대로, 체감 16°C는 `isLiveMeasurement: false`.

## 문구 (5-1장)

- 입는 법 28개가 ko/en/de 각각 모두 다름(28/28). 틀 문장 없음. deck/intro.en에 제품 영어 이름이 2개 이상 그대로 들어간 룩 없음. 모든 룩·제품에 ko/en/de 있음.
- 고친 것(제작 측 원문은 products.json에 보존):
  - en deck 5개: 제작 측 en deck이 영어 기사 제목과 같은 문장 → 장면 문장(01 "A lid held high while the paper bag makes its escape." 등).
  - 입는 법 4곳: 01 재킷 en("Wear open" → "Wear it open … while you juggle …")·de("Haferstrick" → "haferfarbenen Strick"), 04 귀걸이 en("Wear the hair low" → "With the hair tied back low"), 05 재킷 en("Wear open" → "Wear it open").
- ko deck·intro·tip, de deck, pull, 제품 이름은 제작 측 그대로.

## 선택 (파이썬 포트, JS 실행 아님)

- 룩 스크립트를 index.html 순서대로 읽어 객체 리터럴을 디코드(b164의 `P+"…"` 경로 접두사 펼침). 런타임 261룩 · 기사 261(b178 256 + 5), 아이템 +28(이 파서 기준 1533 → 1561; b178 기록 1557은 다른 파서라 총수만 다름). 전체 라이브러리 이미지 경로 누락 0.
- `lookFits`/`lookPool`(fit → wn → cr → rr, 비/하늘 순위, 저녁, b175 지역 제외)을 옮겨 b178 라이브러리와 비교: 날씨 5(맑음·흐림·비 3강도) × 단계 9 × 낮/저녁 × 지역 4(해안·유럽·동아시아·미상) × 스타일 3 × 성별 2 = 2,160경우.
- 바뀐 것은 2경우뿐: 해안 · 흐림 · 낮 · 여성 · 스트리트의 (1) 선선함: 베를린 쌀쌀함 흐림 여성 스트리트 5룩(옆 단계) → 새 5룩, (2) 쾌적함: COMING SOON → 새 5룩(옆 단계, 더 추운 쪽). 맑음·비·저녁·남성·다른 스타일·베를린(유럽)·동아시아·지역 미상은 그대로.
- 캘린더(`dayPick`)는 같은 `lookFits`를 쓰므로 해안 흐린 선선함 날 카드가 이 세트의 제품을 고를 수 있음(기사 룩, 낮).

## 못 한 것

- 브라우저·실기기 화면 렌더링(카드 합성 포함), JS 엔진으로 앱 코드 실행, 픽셀 알파 직접 디코드: 이 세션에서 실행 권한이 없음.
- 배포 확인은 푸시 뒤 GitHub Pages에서 HTML·모듈·cutouts와 새 이미지 33개 SHA-256을 받아 비교(상위 작업의 영수증 `automation/state/coastal-overcast-cool-female-day-street-20261028-PUBLICATION.json`).

## b180 · 02 윈드브레이커 후드 수정 (2026-10-28)

b179 검토에서 02 제품 컷(칼라 + 조임끈)이 에디토리얼의 달린 후드를 안 보여 준다는 점을 보고함 → 상위 작업(제작 측)이 후드가 달린 수정 컷을 만들고 기술·4배경 육안 검수(`revisions/hood-v2/QA.json`, Codex). 에디토리얼은 그대로이며 후드는 목 뒤로 내린 상태(쓴 상태 아님 — b179 기록의 "후드를 쓴 상태"는 틀림).

- 최종 전달 `revisions/hood-v2/delivery/` 33장 SHA-256을 저장소와 비교: 32장 b179와 바이트 동일, 다른 것은 `coastal-cool-f35-day-street-20261028-02/products/jacket.webp` 하나(992ff570d932765e682ebcc14cbdeb23cc46b916b02ac2058cd5c00e615be06c, 45,426 B, 500×500, 알파 0–255, 50KB 이하).
- Claude가 수정 컷 · 02 꽃다발 에디토리얼 · 4배경 시트를 열어 봄: 코발트 색, 은색 지퍼, 고무줄 소매·밑단, 조임끈, 달린 후드가 사진과 맞음.
- 바뀐 것: 그 WebP, 02 `products.json`(이름·설명 ko/en/de, 해시·용량, 예전 값은 `sourceBeforeHoodCorrection`, `hoodCorrection`), 런타임 아이템 이름(코발트 후드 윈드브레이커 / Cobalt hooded windbreaker / Kobaltblaue Windjacke mit Kapuze). 입는 법·기사·제목·ID·분류·선택 로직·다른 32장·에디토리얼 그대로. 대표 컷(HERO 02)은 같은 `jacket.webp`를 직접 가리킴(복제 없음).
- `BUILD` b180, 보충 모듈·`cutouts.js?v=b180`.

