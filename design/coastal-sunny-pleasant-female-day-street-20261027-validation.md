# b176 검증 · coastal-sunny-pleasant-female-day-street-20261027 (2026-10-27)

## 원본·승인

- 로컬 outbox 배치 READY.json: `approved: true`, `editorialsApproved: true`(사용자가 sunglasses-v2 에디토리얼 5장 승인 + DEFAULT_WORKFLOW 1–10, 이 배치의 main 반영·배포 명시 승인), `producerVisualReviewComplete: true`, `perProductUserVisualApproval: false`. 목록 115개 파일 SHA-256·크기 모두 일치.
- 커밋한 것: `originals/product-batch/complete/NN-street/editorial.jpg` 5장과 `products/*.webp` 34개(바이트 그대로, 해시 = READY.json = 제작 측 products.json), 정리한 `products.json` 5개(앱 매핑·최종 문구 추가, 로컬 경로·프롬프트·마스터 경로 뺌), 배치 README.
- 커밋 안 함: PNG 마스터, 선글라스 수정 전 에디토리얼(`originals/0N-street/`), `sunglasses-v2/` 원본·리뷰 시트, QA 시트, PROMPTS·VERIFICATION·BREAKDOWN·COPY·생성 기록·`bulk_finish.py`. 원본은 옮기거나 지우지 않음(상위 작업이 배포 확인 뒤 보관).
- 제작 측 products.json의 `visualReviewComplete: false`는 내보낼 때 값이고, 뒤의 `VISUAL_REVIEW.json`(Codex 제작 측, 34개를 흰·검정·회색·#F3EFE8 합성으로 검수, passed)이 기준. 제품별 사용자 육안 승인은 주장하지 않음.

## 이미지 (39장 모두 Read로 열어 봄)

에디토리얼은 메타데이터와 일치: 01 계단에서 신발 끈(블랙 오벌 선글라스 착용), 02 종이봉투를 받쳐 듦(토터스 직사각 선글라스 머리 위, 봉투는 소품), 03 숄더백 고리에 걸린 티셔츠를 빼냄(블랙 직사각 선글라스 착용, 신발은 크롭 밖), 04 벤치에서 토트 끈을 빼냄(브라운 오벌 선글라스 머리 위), 05 문을 지나며 돌아봄(토터스 선글라스를 열쇠와 함께 손에, 앞 이너는 안 보임, 열쇠는 소품). 제품 34장은 각각 한 품목(신발·양말·귀걸이는 한 쌍), 색·모양이 에디토리얼과 맞음.

알파는 이 세션에서 Pillow·sips·node·jsc·JXA 실행이 허용되지 않아 ALPH 청크(VP8L, 필터 없음)를 순수 파이썬 VP8L 디코더로 풀어 확인: 34장 모두 0–255, 네 모서리 0, 테두리 최대값 0–1.

| 파일 | 규격 · 앱 분류 | 바이트 | SHA-256 | 확인 |
| --- | --- | --- | --- | --- |
| 01 editorial.jpg | 1024×1536 JPEG | 269,600 | `433a784d378a6c17…` | ECRU AND CHARCOAL, A BRIEF PAUSE |
| 01 overshirt.webp | 500×500 WebP · `outer` | 33,574 | `6cad07f0fb30b527…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 24, 498, 493] |
| 01 tank.webp | 500×500 WebP · `top` | 16,734 | `94626e240e04c6b0…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [20, 13, 407, 499] |
| 01 cargo-pants.webp | 500×500 WebP · `bottom` | 31,596 | `36d263a9fc4dfa35…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [39, 17, 462, 487] |
| 01 sneakers.webp | 500×500 WebP · `shoes` | 36,490 | `1399f951ab6713e6…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [44, 0, 465, 491] |
| 01 crossbody.webp | 500×500 WebP · `bag` | 36,012 | `ad0f1e80a50a6449…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [39, 10, 480, 491] |
| 01 sunglasses.webp | 500×500 WebP · `eyewear` (제작 측 accessory) | 15,960 | `88915cb80e6489e0…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [10, 118, 494, 396] |
| 01 earrings.webp | 500×500 WebP · `jewelry` (제작 측 accessory) | 31,006 | `9f7fd58339ab601f…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [10, 15, 476, 472] |
| 01 necklace.webp | 500×500 WebP · `jewelry` (제작 측 accessory) | 32,224 | `317522aa52276fcd…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [13, 8, 472, 489] |
| 02 editorial.jpg | 1024×1536 JPEG | 246,888 | `1d463429687bfb9a…` | COBALT AND SAND, HANDS FULL |
| 02 shirt.webp | 500×500 WebP · `outer` | 31,936 | `28e494b0676de88e…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [10, 22, 491, 487] |
| 02 tank.webp | 500×500 WebP · `top` | 18,692 | `1326b639b75513d5…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [99, 20, 399, 499] |
| 02 shorts.webp | 500×500 WebP · `shorts` (제작 측 bottom) | 31,446 | `0601e21462adf5cf…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 1, 489, 493] |
| 02 socks.webp | 500×500 WebP · `socks` (제작 측 accessory) | 27,438 | `e2325e960bd32684…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 0, 481, 488] |
| 02 sneakers.webp | 500×500 WebP · `shoes` | 45,144 | `d8bb60aabb237365…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [23, 8, 465, 470] |
| 02 shoulder-bag.webp | 500×500 WebP · `bag` | 27,698 | `a203c1517c1f53f8…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [86, 3, 465, 495] |
| 02 sunglasses.webp | 500×500 WebP · `eyewear` (제작 측 accessory) | 22,718 | `8a52ae43db5dbd80…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [5, 129, 494, 451] |
| 02 earrings.webp | 500×500 WebP · `jewelry` (제작 측 accessory) | 25,668 | `3f31bf23d7c8a0b0…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [23, 38, 488, 473] |
| 03 editorial.jpg | 1024×1536 JPEG | 237,415 | `a2c0523093ff08fc…` | BLACK AND DENIM, A SMALL SNAG |
| 03 bomber.webp | 500×500 WebP · `outer` | 27,190 | `6fa02b95141ae5e7…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [5, 27, 494, 491] |
| 03 tee.webp | 500×500 WebP · `top` | 20,392 | `fcd29c8336d8b208…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [5, 26, 496, 481] |
| 03 jeans.webp | 500×500 WebP · `bottom` | 42,888 | `986708f060207b12…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 11, 481, 495] |
| 03 belt.webp | 500×500 WebP · `accessory` | 18,356 | `a5567e87145aca23…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [12, 45, 492, 456] |
| 03 shoulder-bag.webp | 500×500 WebP · `bag` | 28,460 | `11f27ede8ed8caf7…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [7, 9, 452, 492] |
| 03 sunglasses.webp | 500×500 WebP · `eyewear` (제작 측 accessory) | 16,372 | `f688cb3a6d3c1355…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [7, 133, 492, 462] |
| 03 earrings.webp | 500×500 WebP · `jewelry` (제작 측 accessory) | 28,994 | `af3236e83eddad1f…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [17, 23, 468, 412] |
| 04 editorial.jpg | 1024×1536 JPEG | 237,592 | `87d0210323ec460e…` | RED AND NAVY, A TANGLED TOTE |
| 04 tee.webp | 500×500 WebP · `top` | 27,474 | `076e4f29ecf24968…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [9, 24, 490, 483] |
| 04 trousers.webp | 500×500 WebP · `bottom` | 24,070 | `21297bdf4aa7e84c…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 13, 499, 486] |
| 04 sneakers.webp | 500×500 WebP · `shoes` | 42,214 | `9adc723ad66145f9…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [63, 22, 467, 486] |
| 04 tote.webp | 500×500 WebP · `bag` | 30,736 | `d5587c57adfedb14…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 12, 472, 491] |
| 04 sunglasses.webp | 500×500 WebP · `eyewear` (제작 측 accessory) | 22,464 | `7b8ceadad429bea8…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [8, 27, 495, 434] |
| 05 editorial.jpg | 1024×1536 JPEG | 260,764 | `7528048cd7d61725…` | SAGE AND CREAM, THROUGH THE DOORWAY |
| 05 overshirt.webp | 500×500 WebP · `outer` | 34,672 | `f3df451286bd5170…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 19, 493, 465] |
| 05 trousers.webp | 500×500 WebP · `bottom` | 24,186 | `3a239cb4ad4ba8b9…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [42, 8, 463, 493] |
| 05 sneakers.webp | 500×500 WebP · `shoes` | 43,412 | `77e6311b81901c75…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 13, 488, 479] |
| 05 crossbody.webp | 500×500 WebP · `bag` | 47,306 | `8c1c9d05f8f7288e…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [78, 13, 473, 487] |
| 05 sunglasses.webp | 500×500 WebP · `eyewear` (제작 측 accessory) | 21,542 | `d1493ecd305bf482…` | 모서리 [0, 0, 0, 0] · 테두리 최대 0 · bbox [17, 76, 492, 466] |
| 05 earrings.webp | 500×500 WebP · `jewelry` (제작 측 accessory) | 33,676 | `1422b4d0dde47b05…` | 모서리 [0, 0, 0, 0] · 테두리 최대 1 · bbox [0, 21, 491, 416] |

(bbox = 알파 > 0 범위. 테두리 1은 옷 가장자리의 아주 옅은 반투명 픽셀이며 제작 측 4배경 검수에서 띠·잔여 배경 없음.)

## 매핑

- 룩 `coastal-pleasant-f35-day-street-20261027-01`–`05`: `bands [pleasant]`, `sky clear`, `style street`, `gender f`, `age "35"`, `time` 없음(앱의 낮 표기), `rain` 없음, `visualRegion warm-coastal-urban`, `climateContext {feelsLikeBand: pleasant, humidityContext: unknown}`, `contextReview reviewed`. 아이템 34개 = 제작 측 `appItemId`, 모두 새 ID(기존 1480개와 충돌 없음).
- 배포 products.json: `weather.temperatureC`·`feelsLikeC`, `sourceCity`, `relativeHumidityPct`, `windKmh` 모두 null. b173 룩의 23°C/22°C·dry는 복사하지 않음. 캐스팅 audience 30–44 · model 25–28, 저장 35+.
- 대표 컷(b134 제목 첫 색, 새 컷·복제 없음): 01 → `.overshirt`, 02 → `.shirt`, 03 → `.bomber`, 04 → `.tee`, 05 → `.overshirt`. `look/cutouts.js` HERO·CUTS 5행, 경로 존재.
- `index.html`: `look/coastal-sunny-pleasant-female-day-street-20261027.js?v=b176`을 b173 모듈 뒤·`cutouts.js` 앞에, `cutouts.js?v=b176`, `BUILD = "b176"`. `global-context.js`·`coast-grid.js`·선택 코드는 그대로.

## 문구 (5-1장)

- 그대로: 한국어 캡션(deck.ko), 인트로 ko/en/de(제작 측 마스터·초안), 제품 이름 ko/en/de, 영어 제목(제작 측 영어 제목 대문자).
- 고침과 이유: (1) 제품 입는 법 34개 — 제작 측 초안이 분류마다 같은 문장(셔츠·봄버 "앞을 열어 이너가 보이게…", 이너 "품에 여유를 두고…", 하의 "허리는 편안하게…", 신발 "두 신발의 끈을…", 가방 "스트랩이 꼬이지 않게…", 장신구·양말·벨트 "사진의 위치를 참고해…")이고 선글라스 문장에 자외선 언급이 있어, 에디토리얼 장면(크게 걷은 소매, 열린 셔츠, 크로스백 위치, 선글라스 위치 01·03 착용 / 02·04 머리 위 / 05 손)을 보고 ko/en/de 모두 제품별로 새로 씀. 34개 × 3개 언어 모두 서로 다름. 보이지 않는 길이·뒤판은 "보인다"고 쓰지 않음. (2) 팁 — 다섯 룩이 같은 문장이라 룩마다 새로 씀(같은 의도: 가벼운 품, 선글라스·가방 정돈). (3) en deck — 제작 측 en 캡션이 영어 제목과 같은 문장이라 한국어 캡션에서 다시 옮김(de 캡션은 그대로). (4) 인용구(pull) 5개 새로 씀. 원문은 products.json `sourceHowToWear`·`copy.sourceCopy`.
- 점검: deck/인트로에 제품 이름(en/de/ko) 2개 이상 그대로 들어간 것 없음, 자외선·방수·소재 인증·숫자 기온 문구 없음, `bg`는 모두 `#F3EFE8`.
- 보고만(이름 안 바꿈): 04 팬츠 허리는 에디토리얼에선 잔주름이 보이고 제품 컷은 매끈한 밴드. 02 귀걸이 이름은 "미니 후프"인데 제품 컷만으로는 크기를 알 수 없음. 05 스니커즈 옆 줄 색이 에디토리얼에선 더 흰빛.

## 런타임·선택 (JS 실행 불가 → 파이썬)

- 룩 모듈 리터럴을 index.html 순서대로 파이썬으로 디코드(보충 모듈 교체/추가, b126 `updates`, b164 `it()`·`P` 빌더 포함): 이전 241룩 · 1480아이템 · 기사 241(문서 수치와 일치) → 246룩 · 1514아이템 · 기사 246. 룩 ID 중복 0, 아이템 참조 누락 0, 라이브러리 전체 이미지 경로 누락 0, 기존 룩·아이템 데이터 변경 0, b173 룩 불변.
- `lookFits`·`lookPool`(+ b174 `wn`, b175 `allowed`, `ranks`)를 파이썬으로 옮겨 이전/이후 비교: 9단계 × 코드 8개(0·2·3·45·61·63·65·71) × 낮/저녁 × 남녀 × 3스타일 × 지역 4개(unknown·european·warm-coastal·east-asian) = 3,456경우 중 바뀐 것은 4경우 — 해안 지역 · 맑음(0·2) · 낮 · 여성 · 스트리트 · 쾌적함/따뜻함(후보 1 → 6). 선선함은 쌀쌀함 룩 5개가 앞이라 그대로, 베를린(european)·지역 미상·동아시아·저녁·흐림·비·눈은 모두 불변.
- 추가: 해안 쾌적함 비(63) → COMING SOON 유지. `?humidity=dry`면 b173 dry 룩이 앞, `humid`면 새 5룩(unknown)이 b173(dry)보다 앞. 캘린더 카드(맑음 21°, 여성): 해안 → 새 5룩의 선글라스(`eyewear`) 중 하나, 베를린·지역 미상 → COMING SOON.
- 기존 사전 상태(이번 변경 아님): `cutouts.js`에 HERO 행이 없는 기사 룩 10개(`ocn-06…10-street-m` 등 b143·b145 세트).

## 못 한 것

- 실제 JS 엔진·브라우저·아이폰 렌더링(홈 헤드라인·대표 컷, 시트 카드, 캘린더 카드) 확인. `tools/make-cutouts.py --check`는 node가 필요해 못 돌림(파이썬으로 HERO·CUTS 행과 파일 존재 확인).
- 배포 확인은 push 뒤 GitHub Pages에서 따로 함(상위 작업용 기록 `automation/state/…-PUBLICATION.json`).
