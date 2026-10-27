# b177 검증 · coastal-warm-male-day-street-20261027 (2026-10-27)

## 원본·승인

- 로컬 outbox 배치 READY.json: `approved: true`, `products_complete: true`, 에디토리얼 5 · 제품 22. 사용자가 에디토리얼 5장을 받고 이 배치의 main 반영·배포까지 명시 승인. 제품은 제작 측(Codex) 검수(`VISUAL_REVIEW.json` passed, 흰·검정·회색·앱 아이보리 4배경), 제품별 사용자 육안 승인은 주장하지 않음. READY.json 목록 78개 SHA-256 모두 일치.
- 커밋한 것: `originals/product-batch/complete/NN-street/editorial.jpg` 5장과 `products/*.webp` 22개(바이트 그대로), 앱 매핑·최종 문구를 넣은 `products.json` 5개(로컬 경로·프롬프트·마스터 경로 없음), 배치 README.
- 커밋 안 함: PNG 마스터·원본 PNG/JPG(`originals/0N-*.png|jpg`), `editorial-review.jpg`, QA 시트, BRIEF·PROMPTS·README·BREAKDOWN·TECHNICAL_QA·VISUAL_REVIEW, 생성 기록·스크립트. 원본은 옮기거나 지우지 않음(상위 작업이 배포 확인 뒤 보관).

## 이미지 (27장 모두 Read로 열어 봄)

에디토리얼은 메타데이터와 일치: 01 카페 테이블에서 샴페인(블랙 직사각 선글라스 착용) · 02 항구 돌계단에서 맥주(블루 캡 + 토터스셸 선글라스 착용) · 03 돌 난간에서 라임 칵테일 젓기(밀짚 버킷햇 + 앰버 선글라스 착용, 팬츠는 허리 부근만 보이고 신발은 크롭 밖) · 04 골목을 걸으며 캡 챙 잡고 돌아봄(블랙 오벌 선글라스 착용, 뒷모습) · 05 벤치에서 오렌지 스프리츠(토터스셸 선글라스 머리 위, 쇼츠는 블랙 데님 같은 질감, 신발은 크롭 밖). 랜드마크·도시 표지 없음. 제품 22장은 각각 한 품목(샌들·플립플롭은 한 켤레), 색·모양이 에디토리얼과 맞음.

알파는 이 세션에서 Pillow·node 실행이 불가해 ALPH 청크(VP8L)를 순수 파이썬 VP8L 디코더로 풀어 확인: 22장 모두 VP8X 알파 플래그 + ALPH + VP8, 알파 0–255, 네 모서리 0.

| 파일 | 규격 · 앱 분류 | 바이트 | SHA-256 | 확인 |
| --- | --- | --- | --- | --- |
| 01 editorial.jpg | 1024×1536 JPEG | 294,452 | `27f7bafd0c41ef87…` | A SLOW AFTERNOON, A SIP OF CHAMPAGNE |
| 01 sandals.webp | 500×500 WebP · `shoes` | 44,654 | `436c51b01e353267…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [10, 20, 484, 496] |
| 01 shirt.webp | 500×500 WebP · `top` | 49,074 | `09b458454b8fc0a1…` | 모서리 [0, 0, 0, 0] · 테두리 최대 141 · bbox [0, 33, 499, 471] |
| 01 shorts.webp | 500×500 WebP · `shorts` | 47,296 | `1943cb20f9eaa9b9…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [13, 8, 486, 495] |
| 01 sunglasses.webp | 500×500 WebP · `eyewear` | 19,470 | `33268220ca7eb609…` | 모서리 [0, 0, 0, 0] · 테두리 최대 254 · bbox [6, 82, 499, 389] |
| 02 editorial.jpg | 1024×1536 JPEG | 284,471 | `132308481149a25f…` | A PAUSE ON THE HARBOR STEPS |
| 02 cap.webp | 500×500 WebP · `headwear` | 47,850 | `04c7bd13ddae759e…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [12, 41, 494, 462] |
| 02 flip-flops.webp | 500×500 WebP · `shoes` | 45,238 | `71ee61890a6dd2b8…` | 모서리 [0, 0, 0, 0] · 테두리 최대 21 · bbox [0, 25, 499, 495] |
| 02 shorts.webp | 500×500 WebP · `shorts` | 42,956 | `c46fab35d6e0e6fb…` | 모서리 [0, 0, 0, 0] · 테두리 최대 100 · bbox [7, 8, 499, 446] |
| 02 sunglasses.webp | 500×500 WebP · `eyewear` | 27,234 | `dab424a7c4d0a8a7…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [9, 25, 499, 489] |
| 02 tee.webp | 500×500 WebP · `top` | 40,842 | `7dbc9a13cc6f6485…` | 모서리 [0, 0, 0, 0] · 테두리 최대 28 · bbox [6, 17, 499, 495] |
| 03 editorial.jpg | 1024×1536 JPEG | 247,010 | `7e260c9ce89d67f1…` | AN AFTERNOON OF CLINKING ICE |
| 03 hat.webp | 500×500 WebP · `headwear` | 48,442 | `a5b1ac02374bee6f…` | 모서리 [0, 0, 0, 0] · 테두리 최대 247 · bbox [10, 10, 499, 499] |
| 03 shirt.webp | 500×500 WebP · `outer` | 47,702 | `eb6e39f69410e49f…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 12, 491, 479] |
| 03 sunglasses.webp | 500×500 WebP · `eyewear` | 33,764 | `1df69ae24d1aefde…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 15, 498, 454] |
| 03 tank.webp | 500×500 WebP · `top` | 23,992 | `d100cb1307f8d9e3…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [10, 21, 484, 487] |
| 03 trousers.webp | 500×500 WebP · `bottom` | 25,214 | `b41323533c489c50…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [38, 18, 465, 484] |
| 04 editorial.jpg | 1024×1536 JPEG | 287,688 | `3c3ecff3464d4797…` | A SLOW WALK WITH THE BREEZE |
| 04 cap.webp | 500×500 WebP · `headwear` | 43,542 | `10fd051c644595be…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [14, 37, 492, 499] |
| 04 polo.webp | 500×500 WebP · `top` | 47,744 | `4b64ce78a134f482…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [12, 26, 488, 478] |
| 04 sandals.webp | 500×500 WebP · `shoes` | 42,084 | `a3884282ac8cb3f8…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 21, 468, 491] |
| 04 sunglasses.webp | 500×500 WebP · `eyewear` | 18,716 | `8e54e7ef2542d1c5…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [13, 118, 496, 396] |
| 04 trousers.webp | 500×500 WebP · `bottom` | 28,792 | `224189d03db6157f…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 3, 479, 488] |
| 05 editorial.jpg | 1024×1536 JPEG | 282,963 | `cde83ddfff34f809…` | A SPRITZ AND A MOMENT ON THE BENCH |
| 05 shirt.webp | 500×500 WebP · `top` | 43,906 | `987e73d982c77b61…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 21, 490, 481] |
| 05 shorts.webp | 500×500 WebP · `shorts` | 48,840 | `93478a95a7611535…` | 모서리 [0, 0, 0, 0] · 테두리 최대 3 · bbox [0, 49, 499, 499] |
| 05 sunglasses.webp | 500×500 WebP · `eyewear` | 30,392 | `6a21c06eb57f33d7…` | 모서리 [0, 0, 0, 0] · 테두리 최대 87 · bbox [13, 46, 499, 468] |

(bbox = 알파 > 0 범위.) 보고: 7장(01 셔츠·선글라스, 02 플립플롭·쇼츠·티, 03 햇, 05 선글라스)은 제품이 캔버스 가장자리에 닿음(테두리 알파 21–254) — 소매 끝·안경다리 끝·챙 끝이 프레임에 맞닿게 크게 배치된 것으로, 검정 바탕 QA 시트에서 잘린 부분·잔여 배경은 보이지 않음. 이미지는 바꾸지 않음.

## 매핑

- 룩 `coastal-pleasant-m35-day-street-20261027-01`–`05`: `bands [pleasant]`, `sky clear`, `style street`, `gender m`, `age "35"`, `time` 없음(앱의 낮 표기), `rain` 없음, `visualRegion warm-coastal-urban`, `climateContext {feelsLikeBand: pleasant, humidityContext: unknown}`, `contextReview reviewed`. 아이템 22개 `<룩 ID>.<제품 id>`, 모두 새 ID(기존 1514개와 충돌 없음).
- 분류: 01 셔츠·02 티·04 폴로·05 셔츠 `top`, 03 셔츠 `outer` + 탱크 `top`(열어 입은 셔츠 위 겹침, b176 02와 같은 방식), 팬츠 `bottom`, 쇼츠 `shorts`, 샌들·플립플롭 `shoes`, 캡·버킷햇 `headwear`, 선글라스 `eyewear`(캘린더 맑은 18°↑ 규칙).
- 배포 products.json: `weather.temperatureC` null, `temperatureRangeC [24, 25]`, `feelsLikeC 23`, `isLiveMeasurement false`(사용자가 준 장면 가정, 측정·실시간 아님), `sourceCity`·`relativeHumidityPct`·`windKmh` null. 모델 외관 28–32, 저장 35+.
- 대표 컷: 제목에 색 단어가 없어 b134 4번대로 아우터(03 → `.shirt`), 아우터 없는 룩은 크게 보이는 옷 순서의 상의(01 `.shirt` · 02 `.tee` · 04 `.polo` · 05 `.shirt`). 컷 = 그 제품 WebP 자체(새 컷·복제 없음). `look/cutouts.js` HERO·CUTS 5행, 경로 존재.
- `index.html`: `look/coastal-warm-male-day-street-20261027.js?v=b177`을 b176 모듈 뒤·`cutouts.js` 앞에, `cutouts.js?v=b177`, `BUILD = "b177"`. `global-context.js`·`coast-grid.js`·선택 코드는 그대로.
- 등록 안 함: 03·05 신발(크롭 밖), 음료·잔(소품), 양말(안 보임).

## 문구 (5-1장)

- 그대로: 제품 이름 ko/en/de, 제품 입는 법 17개(제작 측 문장이 제품마다 이미 다름), 한국어·독일어 deck(= 제작 측 제목), 영어 기사 제목(= 제작 측 영어 제목 대문자).
- 고침과 이유: (1) 입는 법 5개 — 03 팬츠(제작 메모 "허리 부근만 사진에서 확인됩니다"를 입는 법으로), 04 선글라스(쓰는 법 없음), 05 선글라스(머리 위에 올린 사진에 맞춤, de "Ausschnitt" → "offener Kragen"), 01 셔츠 de(밑단 빼는 내용 빠짐), 03 선글라스 de(동사 빠짐). 원문은 `sourceHowToWear`. (2) en deck — 제작 측 영어 제목이 기사 제목과 같은 문장이라 새로 씀. (3) 인트로·인용구·팁 — 제작 측에 없어 에디토리얼 장면을 보고 ko/en/de로 씀(음료 장면은 여유로운 오후로, 패션 중심).
- 점검: 22개 × 3개 언어 입는 법 모두 서로 다름, deck/인트로에 제품 이름 2개 이상 그대로 들어간 것 없음, deck ≠ 인트로, 자외선·방수·소재 인증·브랜드·숫자 기온 문구 없음, `bg`는 모두 `#F3EFE8`.
- 보고만(이름·이미지 안 바꿈): 04 에디토리얼 캡 앞면에 작은 흰 로고가 보이나 제품 컷은 무지. 01 쇼츠 en 이름 "Charcoal relaxed shorts"와 ko "차콜 무릎 길이 쇼츠"는 표현이 다름(같은 제품).

## 런타임·선택 (JS 실행 불가 → 파이썬)

- 룩 모듈 리터럴을 index.html 순서대로 파이썬으로 디코드: 이전 246룩 · 1514아이템 · 기사 246(문서 수치와 일치) → 251룩 · 1536아이템 · 기사 251. 룩 ID 중복 0, 아이템 참조 누락 0, 라이브러리 전체 이미지 경로 누락 0, 기존 룩·아이템 데이터 변경 0.
- `lookFits`·`lookPool`(+ b174 `wn`, b175 `allowed`, `ranks`)를 파이썬으로 옮겨 이전/이후 비교: 9단계 × 코드 8개(0·2·3·45·61·63·65·71) × 낮/저녁 × 남녀 × 3스타일 × 지역 4개 = 3,456경우 중 바뀐 것은 4경우 — 해안 지역 · 맑음(0·2) · 낮 · 남성 · 스트리트 · 쾌적함/따뜻함(COMING SOON → 새 5룩). 해안 선선함은 베를린 쌀쌀함 남성 스트리트 5룩 그대로(b174), 베를린·지역 미상·동아시아·저녁·흐림(3)·비(61·63·65)·여성은 모두 불변.
- 캘린더 카드(맑음 21°, 남성): 해안 → 새 5룩의 선글라스·캡 중 하나, 베를린·지역 미상 → COMING SOON.
- 기존 사전 상태(이번 변경 아님): `cutouts.js`에 HERO 행이 없는 기사 룩 10개(`ocn-06…10-street-m`, `oc-chilly-m-35-day-street-01…05`).

## 못 한 것

- 실제 JS 엔진·브라우저·아이폰 렌더링(홈 헤드라인·대표 컷, 시트 카드, 캘린더 카드) 확인. `tools/make-cutouts.py --check`는 node가 필요해 못 돌림(파이썬으로 HERO·CUTS 행과 파일 존재 확인).
- 배포 확인은 push 뒤 GitHub Pages에서 따로 함(상위 작업용 기록 `automation/state/coastal-warm-male-day-street-20261027-PUBLICATION.json`).
