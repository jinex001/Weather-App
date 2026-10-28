# b178 검증 · coastal-warm-male-evening-street-20261027 (2026-10-28)

## 원본·승인

- 로컬 outbox 배치 READY.json: `approved: true`, `products_complete: true`, 에디토리얼 5 · 제품 20. 사용자가 해 진 뒤 에디토리얼 5장을 승인하고 이 배치의 main 반영·배포까지 명시 승인(2026-10-28). 제품은 제작 측(Codex) 검수(`VISUAL_REVIEW.json` passed, 흰·검정·회색·앱 아이보리 4배경), 제품별 사용자 육안 승인은 주장하지 않음. READY.json 목록 78개 SHA-256 모두 일치(작업 전), `TECHNICAL_QA.json`의 25개 해시도 일치.
- 커밋한 것: `originals/product-batch/complete/NN-street/editorial.jpg` 5장과 `products/*.webp` 20개(바이트 그대로, 복사 후 SHA-256 재확인), 앱 매핑·최종 문구를 넣은 `products.json` 5개(로컬 경로·프롬프트·마스터 경로 없음), 배치 README.
- 커밋 안 함: PNG 마스터·원본 PNG/JPG(`originals/0N-*.png|jpg|json`), QA 시트, PROMPTS·README·REVIEW·BREAKDOWN·TECHNICAL_QA·VISUAL_REVIEW, 생성 기록·스크립트. 원본은 옮기거나 지우지 않았고 READY.json도 건드리지 않음(상위 작업이 배포 확인 뒤 보관).

## 이미지 (25장 모두 Read로 열어 봄)

에디토리얼은 메타데이터와 일치하고 모두 해 진 뒤(짙은 남색 하늘·어두운 바다·등불, 정면 플래시): 01 바닷가 와인 바 의자에 비스듬히 앉아 샴페인 잔을 무릎께에(블랙 셔츠 · 에크루 쇼츠 · 블랙 피셔맨 샌들, 선글라스는 셔츠 목에 걸침) · 02 산책로 돌담에 팔을 걸치고 맥주(블루 셔츠 단추 몇 개 풂 · 워시드 차콜 팬츠 · 샌드 캡, 신발은 크롭 밖, 선글라스 없음) · 03 바 앞 돌계단에서 잔 위로 라임 짜기(번트 레드 티 · 스톤 카고 쇼츠 · 블랙 플립플롭, 얇은 메탈 선글라스 목에 걸침) · 04 골목 흰 벽 앞에서 밀짚 모자 챙을 잡고 어깨 너머로 돌아봄(뒷모습, 페일 옐로 오픈 니트 폴로 · 네이비 쇼츠 · 브라운 플립플롭, 토터스셸 선글라스를 다리 하나로 들고 있음) · 05 테라스 벤치에 팔을 걸치고 스프리츠(세이지·아이보리 줄무늬 셔츠 앞 열고 · 아이보리 립 탱크 · 다크 네이비 팬츠, 선글라스 머리 위, 신발은 크롭 밖). 랜드마크·도시 표지·읽히는 글자 없음. 제품 20장은 각각 한 품목(샌들·플립플롭은 한 켤레), 색·모양이 에디토리얼과 맞음(줄무늬·카고 주머니·오픈 니트 그대로).

알파는 이 세션에서 Pillow·node·sips 실행이 불가해 ALPH 청크(VP8L)를 순수 파이썬 VP8L 디코더로 풀어 확인: 20장 모두 VP8X 알파 플래그 + ALPH(압축 1, 필터 0) + VP8, 알파 0–255, 네 모서리 0. 옷 안쪽 알파는 대부분 253(제작 측 알파 양자화), 잘린 부분은 없음.

| 파일 | 규격 · 앱 분류 | 바이트 | SHA-256 | 확인 |
| --- | --- | --- | --- | --- |
| 01 editorial.jpg | 1024×1536 JPEG | 251,891 | `b5647371d0478512…` | CHAMPAGNE AND AN UNHURRIED EVENING |
| 01 shirt.webp | 500×500 WebP · `top` | 23,228 | `934a45bb45bab5b4…` | 모서리 0 · 테두리 최대 0 · bbox [13, 8, 485, 469] |
| 01 shorts.webp | 500×500 WebP · `shorts` | 40,762 | `73dd4a0f1d9d9277…` | 모서리 0 · 테두리 최대 0 · bbox [5, 45, 495, 445] |
| 01 sandals.webp | 500×500 WebP · `shoes` | 41,104 | `6c483e37df0a5828…` | 모서리 0 · 테두리 최대 1 · bbox [0, 21, 488, 499] |
| 01 sunglasses.webp | 500×500 WebP · `eyewear` | 25,022 | `92df322ad0930bc4…` | 모서리 0 · 테두리 최대 0 · bbox [13, 21, 493, 463] |
| 02 editorial.jpg | 1024×1536 JPEG | 249,677 | `69951519fdc6173f…` | A BLUE SHIRT BY THE HARBOR LIGHTS |
| 02 shirt.webp | 500×500 WebP · `top` | 44,742 | `29e17b56b2fef9c6…` | 모서리 0 · 테두리 최대 1 · bbox [0, 24, 486, 491] |
| 02 trousers.webp | 500×500 WebP · `bottom` | 25,922 | `3a730beab4ac8caa…` | 모서리 0 · 테두리 최대 0 · bbox [40, 24, 456, 473] |
| 02 cap.webp | 500×500 WebP · `headwear` | 37,132 | `5100d3767fcf8f1e…` | 모서리 0 · 테두리 최대 1 · bbox [7, 27, 499, 462] |
| 03 editorial.jpg | 1024×1536 JPEG | 290,787 | `37c591ef6a8eb6ed…` | A SQUEEZE OF LIME, AN EASY NIGHT |
| 03 tee.webp | 500×500 WebP · `top` | 41,086 | `49b0f7f5fe6ee154…` | 모서리 0 · 테두리 최대 0 · bbox [9, 41, 490, 462] |
| 03 shorts.webp | 500×500 WebP · `shorts` | 45,118 | `cb2ed1a1569721b9…` | 모서리 0 · 테두리 최대 0 · bbox [5, 2, 494, 448] |
| 03 flip-flops.webp | 500×500 WebP · `shoes` | 40,332 | `aa8f5e12c2342b72…` | 모서리 0 · 테두리 최대 1 · bbox [0, 40, 430, 462] |
| 03 sunglasses.webp | 500×500 WebP · `eyewear` | 25,434 | `34a9bfb1d0c9da5d…` | 모서리 0 · 테두리 최대 193 · bbox [12, 43, 499, 438] |
| 04 editorial.jpg | 1024×1536 JPEG | 259,085 | `00ab096f59802867…` | AN EVENING STROLL, A MOMENT TO PAUSE |
| 04 polo.webp | 500×500 WebP · `top` | 43,460 | `675aec0795bf12b6…` | 모서리 0 · 테두리 최대 0 · bbox [11, 31, 488, 471] |
| 04 shorts.webp | 500×500 WebP · `shorts` | 33,662 | `07253e87a77d3290…` | 모서리 0 · 테두리 최대 1 · bbox [0, 8, 487, 491] |
| 04 hat.webp | 500×500 WebP · `headwear` | 46,592 | `b76ee50ad9eaf14b…` | 모서리 0 · 테두리 최대 0 · bbox [10, 7, 488, 492] |
| 04 flip-flops.webp | 500×500 WebP · `shoes` | 48,690 | `705e5586837f35ad…` | 모서리 0 · 테두리 최대 0 · bbox [49, 21, 498, 479] |
| 04 sunglasses.webp | 500×500 WebP · `eyewear` | 25,592 | `599307c6a384e4f9…` | 모서리 0 · 테두리 최대 0 · bbox [8, 47, 493, 378] |
| 05 editorial.jpg | 1024×1536 JPEG | 242,643 | `803bf4b3bbb88076…` | STRIPES AND A SPRITZ |
| 05 shirt.webp | 500×500 WebP · `outer` | 44,036 | `4ac6475a95002ea6…` | 모서리 0 · 테두리 최대 1 · bbox [0, 16, 495, 483] |
| 05 tank.webp | 500×500 WebP · `top` | 23,462 | `3f1d8eb00897b3fe…` | 모서리 0 · 테두리 최대 0 · bbox [20, 37, 485, 469] |
| 05 trousers.webp | 500×500 WebP · `bottom` | 25,048 | `292f950c399b899f…` | 모서리 0 · 테두리 최대 0 · bbox [115, 18, 419, 481] |
| 05 sunglasses.webp | 500×500 WebP · `eyewear` | 28,768 | `dd090c8cd18ade92…` | 모서리 0 · 테두리 최대 0 · bbox [14, 98, 492, 432] |

(bbox = 알파 > 0 범위.) 보고: 03 선글라스는 다리 끝이 오른쪽 가장자리에 닿음(테두리 알파 193) — 크게 배치된 것으로 잘림·잔여 배경은 보이지 않음. 나머지 테두리 알파는 0–1. 이미지는 바꾸지 않음.

## 매핑

- 룩 `coastal-pleasant-m35-evening-street-20261027-01`–`05`: `bands [pleasant]`, `sky clear`, `style street`, `gender m`, `age "35"`, **`time "evening"`**(앱의 저녁 표기; 제작 측 `category.timeOfDay night` + `appTime evening`), `rain` 없음, `visualRegion warm-coastal-urban`, `climateContext {feelsLikeBand: pleasant, humidityContext: unknown}`, `contextReview reviewed`. 아이템 20개 `<룩 ID>.<제품 id>`, 모두 새 ID(기존 아이템과 충돌 없음).
- 분류: 01·02 셔츠·03 티·04 폴로 `top`, 05 셔츠 `outer` + 탱크 `top`(열어 입은 셔츠 위 겹침, b177 03과 같은 방식), 팬츠 `bottom`, 쇼츠 `shorts`, 샌들·플립플롭 `shoes`, 캡·모자 `headwear`, 선글라스 `eyewear`. `bg`는 모두 `#F3EFE8`.
- 배포 products.json: `weather.temperatureC` null, `temperatureRangeC [24, 25]`, `feelsLikeC 23`, `isLiveMeasurement false`(사용자가 준 장면 가정, 측정·실시간 아님), `sourceCity`·`relativeHumidityPct`·`windKmh` null. 모델 외관 28–32, 저장 35+.
- 대표 컷: b134 제목 단어 — 02 BLUE → 블루 셔츠, 나머지는 제목에 옷 색 단어가 없어(03 LIME은 소품 라임) 주 상의(01 셔츠 · 03 티 · 04 폴로 · 05 셔츠(아우터)). 컷 = 그 제품 WebP 자체(새 컷·복제 없음). `look/cutouts.js` HERO·CUTS 5행, 경로 존재.
- `index.html`: `look/coastal-warm-male-evening-street-20261027.js?v=b178`을 b177 모듈 뒤·`cutouts.js` 앞에, `cutouts.js?v=b178`, `BUILD = "b178"`. `global-context.js`·`coast-grid.js`·선택 코드는 그대로.
- 등록 안 함: 02·05 신발(크롭 밖), 음료·잔·라임(소품), 양말(안 보임).

## 문구 (5-1장)

- 그대로: 제품 이름 ko/en/de, 제품 입는 법 15개(제작 측 문장이 제품마다 이미 다름), 한국어·독일어 deck(= 제작 측 제목), 영어 기사 제목(= 제작 측 영어 제목 대문자).
- 고침과 이유(원문은 `sourceHowToWear`): 01 셔츠 de(동사 빠짐), 03 선글라스 ko/en/de("손으로 렌즈를 잡지 않도록" → 벗어서 목에 걸고 라임 짜는 손을 자유롭게), 04 쇼츠(니트 밑단 "아래로 떨어지는 길이"가 어색 → 사진의 허리 끈과 폴로 밑단 관계), 04 모자(사진엔 동행이 아니라 카메라 쪽으로 돌아봄; de "Rand" → "Krempe"), 04 플립플롭(ko "쇼츠와 다리 사이를 이어" 어색).
- 새로 씀: en deck(제작 측 영어 제목이 기사 제목과 같은 문장이라), 인트로·인용구·팁(제작 측에 없어 저녁 장면을 보고 ko/en/de로, 음료 장면은 여유로운 저녁으로, 패션 중심).
- 점검(파이썬): 20개 × 3개 언어 입는 법 모두 서로 다름(20/20/20), deck+인트로에 제품 `name.en`이 그대로 2개 이상 들어간 룩 없음(최대 1), deck ≠ 인트로, ko/en/de 빈 값 없음, 자외선·방수·소재 인증·브랜드·가격·링크·숫자 기온·% 문구 없음, `bg`는 모두 `#F3EFE8`.
- 보고만(이름·이미지 안 바꿈): 01 선글라스 제품 컷은 토터스셸 프레임인데 에디토리얼에선 목에 걸린 프레임이 더 어둡게(검정에 가깝게) 보임(이름은 "다크 렌즈 선글라스"라 색 주장 없음). 01 셔츠 ko "블랙 린넨 반팔 셔츠" vs en "linen-look"(소재 단정 아님 — 제작 측 이름 그대로).

## 런타임·선택 (JS 실행 불가 → 파이썬 포트, 실제 JS 검증 아님)

- 이 세션에선 node가 없고 jsc·JXA·sips는 실행 승인이 나지 않음. 룩 모듈 리터럴을 index.html 순서대로 파이썬으로 파싱: 이전 251룩(문서 수치와 일치) → 256룩, 룩 ID 중복 0, 기존 룩·아이템 데이터 변경 0, 새 아이템 20개, 라이브러리 전체 이미지 경로 1,767개 누락 0. 아이템은 파싱 1514 → 1534(+ b164 모듈이 `it()` 함수로 만드는 23개는 리터럴이 아니라 파싱 밖 → 런타임 1537 → 1557; b177 기록 1536과의 1개 차이는 이번 변경 전부터). 아이템 참조 누락은 그 b164 23개뿐(파서 한계, 그 파일은 안 바뀜).
- `lookFits`·`lookPool`(+ `timed` 저녁 필터, b174 `wn`, b175 `allowed`)을 파이썬으로 옮겨 이전/이후의 1순위 후보 집합 비교: 9단계 × 코드 8개(0·2·3·45·61·63·65·71) × 낮/저녁 × 남녀 × 3스타일 × 지역 4개 = 3,456경우 중 바뀐 것은 4경우 — 해안 지역 · 맑음(0·2) · **저녁** · 남성 · 스트리트 · 쾌적함/따뜻함(COMING SOON → 새 5룩).
- 확인: 해안 쾌적함 맑은 **낮** 남성 스트리트 = b177 5룩 그대로(저녁 룩 안 섞임) · 해안 선선함 맑은 저녁 = 베를린 쌀쌀함 저녁 남성 스트리트 5룩(bn15-06…10) 그대로(b174) · 베를린(european-urban)·지역 미상 저녁 = COMING SOON 그대로 · 해안 흐림(3)·비(61) 저녁 = COMING SOON · 해안 저녁 여성 스트리트·남성 미니멀 = COMING SOON · 해안 낮 여성 스트리트 = b173·b176 6룩 그대로 · 캘린더(`dayPick`은 `evening: false`) = b177 낮 룩만.
- localStorage: 키·형식 변경 없음(`wx-profile`·`wx-look`·`wx-place` 등 그대로), 기존 ID 보존.

## 못 한 것

- 실제 JS 엔진·브라우저·아이폰 렌더링(홈 헤드라인·대표 컷, 시트 카드) 확인. `tools/make-cutouts.py --check`는 node가 필요해 못 돌림(파이썬으로 HERO·CUTS 행과 파일 존재·이미지 일치 확인).
- 배포 확인은 push 뒤 GitHub Pages에서 따로 함(상위 작업용 기록 `automation/state/coastal-warm-male-evening-street-20261027-PUBLICATION.json`).
