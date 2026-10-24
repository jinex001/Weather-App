# b148 · Overcast / Chilly / Male / 35+ / Night / Minimal — 두 번째 세트 검증 (2026-10-24)

## 범위

- 원본(읽기만): iCloud `Weather-App-originals/Overcast/Chilly/Male/35+/night/` 01–05 + `CHECKSUMS.json` · `README.md` · `EDITORIAL_PROMPTS.md` · `IMAGE_STYLE.md`. 로컬 전달본 `output/overcast-chilly-male-night-minimal-v2/minimal-v2-20261024`와 `diff -r` 동일.
- 사용자가 직접 요청한 수동 전달이라 READY.json이 없음(워처 dispatch 아님). 승인 근거 = 2026-10-24 사용자 업로드 요청, products.json `approval.upload: authorized`, `approvedAt: null`.
- 앱 경로: `look/berlin-complete/Overcast/Chilly/Male/35+/night/minimal-v2/<01–05>/`, 보충 파일 `look/overcast-male-night-minimal-v2.js`(index.html에서 `overcast-male-day-street.js` 뒤, `cutouts.js` 앞).
- 룩 ID `oc-chilly-m-35-night-minimal-v2-01`–`05`. 같은 칸 기존 `oc-unclassified-m-35-evening-minimal-01`–`05`(`night/minimal/`, b116)와 ID·경로가 겹치지 않음. 기존 파일·데이터 변경 없음.

## 원본 보존

- CHECKSUMS.json 133개(에디토리얼 JPG·PNG 각 5, 제품 PNG 마스터 35, 500×500 PNG 35, WebP 35, products.json·README·PROMPTS 각 5, 세트 문서 3): 작업 전 iCloud·로컬 모두 SHA-256·바이트 수 일치, 목록 밖 파일 없음.
- 작업 중간(문서 작성 전)과 PR 생성 후 iCloud 폴더 전체(134파일, CHECKSUMS.json 포함) SHA-256을 다시 계산해 시작 목록과 diff → 차이 없음.
- 저장소에 넣은 것은 앱 파생본만: `editorial.jpg` 5, `products/*.webp` 35 (둘 다 제공본과 바이트 동일, 복사 후 해시 재확인), PROMPTS.md 5·EDITORIAL_PROMPTS.md(제공본 그대로, 데이터). PNG 마스터·500×500 PNG·PNG 에디토리얼은 저장소에 없음.

## 이미지

| 룩 | 제품 | 에디토리얼 JPG | 제품 WebP |
| --- | --- | --- | --- |
| 01 | 7 (outer · top · bottom · socks · shoes · bag · scarf) | 291,789 B | 13,424–48,316 B |
| 02 | 7 (outer · top · bottom · socks · shoes · bag · scarf) | 280,486 B | 22,112–49,366 B |
| 03 | 7 (outer · top · bottom · socks · shoes · bag · gloves) | 293,555 B | 13,492–48,892 B |
| 04 | 6 (outer · top · bottom · socks · shoes · bag) | 294,080 B | 30,554–47,984 B |
| 05 | 8 (outer · top · bottom · socks · shoes · bag · scarf · gloves) | 282,010 B | 13,048–48,786 B |

- 합계 **에디토리얼 5 + 제품 35**. 에디토리얼 1024×1536 JPEG ≤300,000 B. 제품 500×500 WEBP RGBA, 13,048–49,366 B(모두 목표 50KB 이하, 예외 없음). 마스터 35장 1254×1254 RGBA PNG(iCloud).
- 알파: 35장 모두 알파 채널 있음, 최소 0·최대 255, 네 모서리 알파 0, 투명 픽셀 34–76%.
- 흰색·아이보리 #F3EFE8·회색·남색 #1B2140·검정 바탕 합성 시트를 눈으로 확인: 아이보리/흰 바탕·체크무늬·바닥/접지 그림자·흰 테두리·잘린 제품 없음. 크림/아이보리 니트, 회색·오트밀 머플러 프린지, 가방 손잡이 안쪽 구멍도 온전함.
- 새 이미지 생성·배경 제거·재압축 없음(제공 WebP 그대로).

## 데이터·문구

- 로드 후 **150룩 · 989아이템 · 기사 150 · 활성 참조 972**(전: 145 · 954 · 145 · 937). 새 35아이템.
- 룩: `bands ["chilly"]`, `sky "cloudy"`, `style "minimal"`, `gender "m"`, `age "35"`, `time "evening"`. 실제·체감 기온은 제작 측 null 그대로(폴더 분류 Chilly만 씀). 캐스팅 메모 `modelAppearanceAge 28–32`(타깃 35+)는 기록만.
- 아이템 ID `<outfitId>.<products.json id>`, cat = id 접미사(모두 기존 cat 목록 안). products.json에 `appItemId`, `nameKo/En/De`, `howToWearKo/En/De`, `imageSha256`, `masterSha256`, `masterLocation` 추가. 제작 측 키(`description`, `evidence`, `generationPrompt`, `note`, `master`, `pngImage`, `background`)는 그대로.
- evidence: visible-item-reconstructed 13 · partially-visible-reconstructed 12 · **not-visible-inferred 10**(양말 5, 03 하의·신발, 05 상의·하의·신발). 아이템에도 `evidence`로 남김(화면엔 안 씀). 보이지 않는 제품의 입는 법은 "사진엔 보이지 않는 원래 스타일링"이라고 밝히고 사진에서 본 것처럼 쓰지 않음.
- 문구: 제작 측에 한국어 마스터·입는 법이 없음(영어 description뿐). 사용자 지시대로 에디토리얼 5장을 보고 한국어 deck·intro·tip·제품 이름·제품별 입는 법을 쓰고 en/de로 옮김. 제목·인용구는 영문. 장면 소품(열쇠·장바구니·테이크아웃 컵·자전거)은 제품이 아님.
- 소재(울·가죽 등)는 제작 측 AI 스타일링 서술을 따른 이름일 뿐 실제 혼용률이 아님. 브랜드·가격·구매 링크 없음.

### 5-1 점검

- 언어별 note 35개 모두 다름(ko 35 · en 35 · de 35 distinct).
- deck/intro에 제품 `name`(ko/en/de)이 2개 이상 그대로 들어간 룩 없음. deck ≠ intro.
- title · deck · intro · pull · tip(ko/en/de) 모두 있음. 새 제목 5개는 라이브러리 안에서 유일(기존 중복 제목 CITRON ON THE TERRACE · BURGUNDY AT THE DOOR · COBALT AFTER HOURS는 이번 작업과 무관, 그대로).
- `bg` 35개 모두 `#F3EFE8`(투명 제품, 카드가 깔아 주는 색). 경로 40개 모두 실제 파일, 확장자 `.webp`/`.jpg`.
- 제품 이름 vs 사진: 이름 색·소재가 에디토리얼과 어긋나는 것 없음. 참고: 04 양말은 제작 측 `not-visible-inferred`지만 접은 바짓단과 부츠 사이로 짙은 회색이 살짝 보임 → 표시는 바꾸지 않았고, 입는 법은 보인다/안 보인다를 단정하지 않게 씀.

### 홈 대표 컷

- hero = 제목이 말하는 제품(CUTOUTS.md 규칙을 JS로 옮겨 확인, 5개 모두 일치): CHARCOAL, KEYS IN HAND → 01-outer · OATMEAL ON THE HANDLEBARS → 07-scarf · COBALT, FIRST SIP → 02-top · TAUPE, ONE KNEE DOWN → 01-outer · ORANGE, MID-SWING → 07-scarf.
- 컷 = 제품 WebP 자체, `look/cutouts.js` CUTS 5행(lum 0.029–0.468)·HERO 5행. 기사 룩 150개 모두 hero + cut → **missing cutouts: 0**(이 환경엔 node가 없어 `tools/make-cutouts.py --check` 대신 jsc로 같은 조건을 셈).

## 선택 회귀 (jsc, index.html의 실제 `rainLevel`·`lookFits`·`lookPool`·`seeded`·`PIECE_RULES`·`dayPick`)

- origin/main(951eae9) 라이브러리 vs 이 브랜치: 9단계 × 하늘 5(맑음·흐림·가벼운/보통/쏟아지는 비) × 낮/저녁 × 3스타일 × 남녀 × 씨앗 8 = 4,320 + 캘린더 카드 640 = **4,960 조건**.
- 바뀐 것 24개, 모두 **흐림 · 저녁 · 남성 · 미니멀**의 cold/chilly/cool(쌀쌀함과 옆 단계). 후보가 5 → 10이 되어 섞인 3개가 달라짐. 그 밖의 칸(맑음, 비 — 비 저녁은 여전히 COMING SOON, 낮, 여성, 다른 스타일)은 결과 동일. 캘린더 카드 640개 동일(캘린더는 낮 룩만 씀).

## 앱 렌더 (헤드리스 Chrome, 가짜 Open-Meteo 응답, 390×844)

- 흐림(코드 3) · 저녁 · 체감 6° · 남성 · 미니멀. 테스트 전용으로 칸을 한 룩만 남겨 5룩 × ko/en/de = 15회: JS 오류 0, 홈 헤드라인 = 그 룩 제목, 홈 대표 컷 = hero WebP, 시트 제목·deck, 제품 카드 7/7/7/6/8장 모두 로드(naturalWidth 500), 카드 이름이 그 언어로 나옴, 인용구 표시.
- 필터 없이 6회: 새 5룩과 기존 5룩이 섞여 3개씩 나옴, 오류 0. 맑은 저녁·스트리트 저녁·눈(코드 71, 체감 -3°) 저녁도 오류 0(눈 = 흐림 취급이라 새 룩 포함, 기존 규칙대로).
- 스크린샷 확인: 홈(헤드라인 + 투명 머플러 컷), 시트(TODAY'S PICK · 제목 · 에디토리얼), 제품 카드(CSS 아이보리 위 투명 재킷·머플러, 01 · OUTER · 이름 · 입는 법 · 인용구 · 팁, de·ko).
- 한계: 헤드리스 Chrome 스크린샷은 시트 오른쪽이 잘려 보임 — 기존 룩(`oc-unclassified-…-01`)도 똑같아 하네스 뷰포트 문제이며 이번 변경과 무관. 카드 라벨 "07 · gloves"가 소문자인 것은 `CAT_LABEL`에 gloves가 없는 기존 동작(다른 세트 장갑도 같음).

## 문서

- 사용자 승인으로 제품 투명 규칙을 전역 기본으로: `design/IMAGE_STYLE.md` 1·8·9장 + 11장 "2026-10-24 보강"(source-root `IMAGE_STYLE.md`의 투명 규칙만 반영, 저장소의 더 새로운 11장·b143 문단·100KB 상한은 유지). 같은 규칙과 어긋나던 현재 지침 정리: `IMAGE_MAPPING_HANDOFF.md` 3·4장·9-1단계, `CUTOUTS.md`(아이보리 JPG로 받는다 → 폐지, 투명 제품은 그 파일이 컷), `look-library.md`(JPG만 → 폐지), `design-system.md` 13장, `CLAUDE.md` 디자인 규칙. 과거 변경 기록의 "아이보리 배경" 서술은 당시 사실이라 고치지 않음.
- 세트 현황 `look-coverage.md`, 라이브러리 `look-library.md`, 매핑 기록 `IMAGE_MAPPING_HANDOFF.md`, `CLAUDE.md` 변경 기록 갱신.

## 남은 것·한계

- 실제 아이폰 확인 전. 사람 눈 검수는 합성 시트와 헤드리스 스크린샷 수준. 영어·독일어 문구는 사람 검토 권장.
- 배포·병합하지 않음(PR만). `BUILD` b148, `overcast-male-night-minimal-v2.js?v=b148`, `cutouts.js?v=b148`.
- `tools/make-cutouts.py`는 지금도 제품 JPG에 rembg를 돌리는 예전 흐름이 기본이다. 투명 제품 세트는 cutouts.js 행을 손으로 넣는다(스크립트를 다시 돌리면 기존 행·컷은 유지됨). 스크립트 자체의 투명 제품 지원은 미구현.
