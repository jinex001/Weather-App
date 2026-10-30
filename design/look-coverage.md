# 룩 세트 현황 · 빈 칸 목록

2026-10-28 점검 (앱 빌드 b184, 271룩 · 기사 271룩 · 아이템 b181 수치 + 25(Node 런타임 1609 → 1634); b181 266룩 + b184 해안 흐림 선선함 여성 낮 미니멀 세트 5룩 · 25아이템, ID 충돌 없음 확인). 새 세트를 매핑할 때마다 이 표도 고칠 것.

베를린 세트는 전부 **쌀쌀함(체감 1~9°) · 35+**이고, 해안 글로벌 세트 16룩(b173 1 · b176 5 · b177 5 · b178 저녁 5)은 **쾌적함**, b179 여성 5룩·b181 남성 5룩·b184 여성 미니멀 5룩은 **선선함**(아래 "쾌적함"·"선선함" 표)입니다. 빈 칸에서는 앱이 다른 날씨의 룩으로 채우지 않고 COMING SOON 플레이스홀더를 보여 줍니다(b114).

칸은 날씨(하늘·비 강도) × 체감 단계 × 시간 × 스타일 × 성별입니다. 도시별로 칸을 늘리지 않습니다. 시각 지역(visualRegion)·습도 맥락은 같은 칸 안의 **부드러운 순서**일 뿐 칸을 나누지 않습니다(b173, `look-library.md` "글로벌 맥락"). 기존 베를린 룩은 지역·습도 검토 전(= unknown).

## 쌀쌀함 · 칸별 룩 수

숫자 = 룩 수(10 = 두 세트, 나머지 5). ✕ = 비어 있음 → 플레이스홀더. "기사" = 제품 컷 + 입는 법 기사가 있는 세트, "사진만" = 에디토리얼 사진과 아이템 글만(제품 컷 없음).

| 하늘 | 성별 | 시간 | 러닝 | 스트리트 | 미니멀 | 폴더 |
| --- | --- | --- | --- | --- | --- | --- |
| 맑음 | 남 | 낮 | 5 기사 (b128) | 5 기사 (b126) | 5 기사 (b127) | `Sunny/Chilly/Male/35+/day/` |
| 맑음 | 남 | 저녁 | 5 기사 (b132) | 5 기사 (b131, 30제품) | 5 기사 (b130) | `Sunny/Chilly/Male/35+/night/` |
| 맑음 | 여 | 낮 | 5 기사 | 5 기사 | 5 기사 | `Sunny/Chilly/Female/35+/day/` (b124) |
| 맑음 | 여 | 저녁 | 5 기사 (b138, 40제품, 홈 컷 b139) | 5 기사 (b140, 42제품) | 5 기사 (b129) | `Sunny/Chilly/Female/35+/night/` |
| 흐림 | 남 | 낮 | 5 기사 | 10 기사 (`oc15-06…10` 28제품 b147에 투명 WebP로 교체 + b145 두 번째 세트 28제품, 투명 WebP) | 5 기사 | `Overcast/Chilly/Male/35+/day/` (b145 세트는 `day/street/01–05/`) |
| 흐림 | 남 | 저녁 | **✕** | 5 기사 (b143, 21제품, 투명 WebP) | 5 기사 | `Overcast/Chilly/Male/35+/night/<06–10-street · minimal>/` |
| 흐림 | 여 | 낮 | 5 기사 | 5 기사 | 5 기사 | `Overcast/Chilly/Female/35+/day/` |
| 흐림 | 여 | 저녁 | 10 기사 (기존 5 + b153 2026-10-25 세트 29제품) | 10 기사 (기존 5 + b153 32제품) | 10 기사 (기존 5 + b153 34제품) | `Overcast/Chilly/Female/35+/night/` (b153 세트는 `<running·street·minimal>-20261025/<01–15>/`, 투명 WebP) |
| 가벼운 비 | 남 | 낮 | 5 기사 | 5 기사 | 5 기사 | `Rain/Light/Chilly/Male/35+/day/<스타일>/` |
| 가벼운 비 | 남 | 저녁 | 5 기사 (b158, 30제품, 투명 WebP) | 5 기사 (b161, 25제품, 투명 WebP) | **✕** | `Rain/Light/Chilly/Male/35+/night/running-20261025/<01–05>/`, 스트리트는 `street/<01–05>/` |
| 가벼운 비 | 여 | 낮 | 5 기사 (b159, 23제품, 투명 WebP) | 5 기사 (casual) | 5 기사 | `Rain/Light/Chilly/Female/35+/day/<casual·minimal>/`, 러닝은 `running-20261025/<01–05>/` |
| 가벼운 비 | 여 | 저녁 | 5 기사 (b160, 33제품, 투명 WebP) | 10 기사 (b149·b150) | 5 기사 (b151) | `Rain/Light/Chilly/Female/35+/night/<street·street-20261024·minimal>/`, 러닝은 `running-20261026/<01–05>/` |
| 보통 비 | 여 | 낮 | 5 기사 (b157, 28제품, 투명 WebP) | 5 기사 (b166, 25제품, 투명 WebP) | 5 기사 (b168, 23제품, 투명 WebP) | `Rain/Normal/Chilly/Female/35+/day/running-20261025/<01–05>/`, 스트리트는 `street/<01–05>/`, 미니멀은 `minimal/<01–05>/` |
| 보통 비 | 여 | 저녁 | **✕** | **✕** | **✕** | (없음) |
| 보통 비 | 남 | 낮 | 5 기사 (b169, 27제품, 투명 WebP) | 5 기사 (b164, 23제품, 투명 WebP) | 5 기사 (b163, 24제품, 투명 WebP) | `Rain/Normal/Chilly/Male/35+/day/<running·street·minimal>/<01–05>/` |
| 보통 비 | 남 | 저녁 | 5 기사 (b170, 36제품, 투명 WebP) | 5 기사 (b171, 21제품, 투명 WebP) | 5 기사 (b167, 21제품, 투명 WebP) | `Rain/Normal/Chilly/Male/35+/night/<running·street·minimal>/<01–05>/` |
| 쏟아지는 비 | 남·여 | 낮·저녁 | **✕** | **✕** | **✕** | `Rain/Pouring/` README만 |

비 강도는 WMO 코드로 정합니다(b110): 가벼운 비 51–57·61·80 / 보통 비 63·66·81 / 쏟아지는 비 65·67·82·95–99.

## 쾌적함(18~23°) · 칸별 룩 수 (b173~)

| 하늘 | 성별 | 시간 | 러닝 | 스트리트 | 미니멀 | 지역 · 습도 | 폴더 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 맑음 | 여 | 낮 | ✕ | 6 기사 (b173 1룩 3제품 + b176 5룩 34제품, 투명 WebP) | ✕ | warm-coastal-urban · b173 dry / b176 unknown (검토됨) | `global/global-context-coastal-20261027/<lookId>/`, `global/coastal-sunny-pleasant-female-day-street-20261027/<lookId>/` |
| 맑음 | 남 | 낮 | ✕ | 5 기사 (b177 5룩 22제품, 투명 WebP) | ✕ | warm-coastal-urban · unknown (검토됨) | `global/coastal-warm-male-day-street-20261027/<lookId>/` |
| 맑음 | 남 | 저녁 | ✕ | 5 기사 (b178 5룩 20제품, 투명 WebP) | ✕ | warm-coastal-urban · unknown (검토됨) | `global/coastal-warm-male-evening-street-20261027/<lookId>/` |

쾌적함 룩은 옆 단계(선선함 10~17°, 따뜻함 24~28°)의 같은 칸(맑은 낮 여성·남성 스트리트, 맑은 저녁 남성 스트리트)에도 후보로 들어갑니다(선선함 날엔 쌀쌀함 룩이 앞, b174). 지역이 붙은 룩이라 해안 지역에서만 나옵니다(b175). 지금 다른 쾌적함 칸은 전부 비어 있고, 선선함 날의 다른 칸은 쌀쌀함 룩 또는 COMING SOON입니다.

## 선선함(10~17°) · 칸별 룩 수 (b179~)

| 하늘 | 성별 | 시간 | 러닝 | 스트리트 | 미니멀 | 지역 · 습도 | 폴더 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 흐림 | 여 | 낮 | ✕ | 5 기사 (b179 5룩 28제품, 투명 WebP) | 5 기사 (b184 5룩 25제품, 투명 WebP) | warm-coastal-urban · unknown (검토됨) | `global/coastal-overcast-cool-female-day-street-20261028/<lookId>/`, 미니멀은 `global/coastal-overcast-cool-female-day-minimal-20261028/<lookId>/` |
| 흐림 | 남 | 낮 | ✕ | 5 기사 (b181 5룩 25제품, 투명 WebP) | ✕ | warm-coastal-urban · unknown (검토됨) | `global/coastal-overcast-cool-male-day-street-20261028/<lookId>/` |

여성 미니멀(b184)도 같은 규칙: 해안 흐린 낮 선선함 여성 미니멀은 베를린 쌀쌀함 흐림 여성 미니멀(`of15-11`–`15`, 옆 단계) 대신 이 5룩 중 3개, 쾌적함 칸은 COMING SOON → 이 5룩. 남성(b181)도 같은 규칙: 해안 흐린 낮 선선함 남성 스트리트는 베를린 쌀쌀함 흐림 남성 스트리트(옆 단계) 대신 이 5룩 중 3개, 쾌적함 칸은 COMING SOON → 이 5룩. 해안 지역의 흐린(맑음·비가 아닌 날 = 앱 sky `cloudy`) 낮 선선함 여성 스트리트는 이제 베를린 쌀쌀함 흐림 여성 스트리트(옆 단계) 대신 이 5룩 중 3개. 옆 단계로는 해안 흐린 낮 쌀쌀함 칸(쌀쌀함 룩이 앞이라 화면 그대로)과 쾌적함 칸(COMING SOON → 이 5룩)에도 들어갑니다. 맑은 날·비·저녁·베를린·지역 미상에는 안 나옵니다.

## 비어 있는 칸 (만들 것)

1. 흐림 · 남성 · 저녁: 러닝 (1세트; 스트리트는 b143에 들어옴 — 이 목록이 b143 때 안 고쳐져 있던 것을 b145에서 바로잡음)
2. 가벼운 비 · 저녁: 남성 미니멀(남성 러닝은 b158, 남성 스트리트는 b161) (1세트) — 가벼운 비 · 여성 · 낮 러닝은 b159, 가벼운 비 · 여성 · 저녁 러닝은 b160에 들어옴
3. 보통 비: 남녀 × 낮·저녁 × 3스타일 중 여성 낮 러닝(b157)·남성 낮 미니멀(b163)·남성 낮 스트리트(b164)·여성 낮 스트리트(b166)·남성 저녁 미니멀(b167)·여성 낮 미니멀(b168)·남성 낮 러닝(b169)·남성 저녁 러닝(b170)·남성 저녁 스트리트(b171)를 뺀 3세트(이제 보통 비 낮은 남녀 3스타일, 저녁은 남성 3스타일 모두 있음, 남은 것은 여성 저녁 3스타일)
4. 쏟아지는 비: 남녀 × 낮·저녁 × 3스타일 (12세트), 폴더는 README만
5. 다른 체감 단계 전부: 극한 추위 · 매우 추움 · 추움 · 선선함(해안 지역 흐린 낮만: 스트리트 여성 5룩 b179 · 남성 5룩 b181, 미니멀 여성 5룩 b184) · 쾌적함(해안 지역 맑은 스트리트만: 낮 여성 6룩 b173·b176, 낮 남성 5룩 b177, 저녁 남성 5룩 b178) · 따뜻함 · 더움 · 극심한 더위 (지금은 거의 쌀쌀함만 있음, 쌀쌀함과 바로 옆 단계(추움 -9~0°, 선선함 10~17°)엔 쌀쌀함 룩이 대신 나옴, 그보다 먼 단계는 플레이스홀더)
6. 눈: 세트도 앱 규칙도 아직 없음(눈 오는 날은 흐림 세트로 고름)

## 준비가 덜 된 것

- **맑은 날 Chilly / 35+ 기존 60룩 모두 제품 컷·기사 연결 완료**(b140): 여성 저녁 스트리트 06–10 제품 42개 추가. 여성 낮 15는 b124, 남성 낮 스트리트 5는 b126에 제품 컷·기사가 들어옴. 남성 낮 스트리트 06–10에는 각각 9·5·7·9·5개, 총 35개 제품 컷이 있으며 캘린더에서도 해당 제품 컷을 사용할 수 있음.
- 흐림 · 남성 · 낮 15번 미니멀(`oc15-15-minimal-m`)의 `products/05-jewelry.jpg`(링): products.json에서 `pending`이라 앱에 안 넣음.
- 흐림 · 남성 · 저녁 미니멀은 체감 단계 없이 올라와 사용자가 쌀쌀함으로 정함(b116). 룩 ID는 `oc-unclassified-…` 그대로.
- 여성 비 casual 5룩은 앱 스타일에 casual이 없어 스트리트 탭에 들어감(b118).

## 점검 방법

`look/outfits.js`의 룩을 단계 · 하늘(비는 강도까지) · 성별 · 시간 · 스타일로 센다. b126 남성 맑은 낮 스트리트 검증: 5룩·35개 제품, JSON/앱 경로 및 수량 일치, 모든 제품 500×500 JPG ≤50KB, 5개 기존 에디토리얼 SHA-256 불변. 착장 폴더의 editorial.jpg는 원본과 바이트가 같은 보관 사본이며 앱은 기존 원본 경로를 계속 사용한다. 상세 결과는 [검증 기록](validation-sunny-chilly-male-day-street.md). 앱이 고르는 규칙은 `look-library.md`.

- b126 Street 제품 매핑: `look/sunny-male-day-street.js`를 기본 `look/outfits.js` 바로 다음, 앱 초기화 전에 동기 적용한다. 기본 룩 파일은 그대로 보존했다. 앱에서 적용된 전체 수는 135룩·807아이템·기사 100룩이다. 보충 파일은 이번 5룩·35제품만 갱신하므로 점검 시 두 파일을 함께 읽는다.

- b127 Minimal: 기존 남성 낮 미니멀 11–15에 각 6개 총 30개 제품 컷·3개 언어 문구·기사 추가. 기존 룩·아이템 ID 유지. 기본 outfits.js 793아이템·기사95룩, 기존 Street 보충 매핑 적용 후 전체 807아이템·기사100룩. [검증 기록](sunny-male-day-minimal-validation.md).

## b128 · 맑은 날 남성 낮 Running 제품 분해

- 기존 01–05-running.jpg 5장과 고정 룩 ID 유지. 제품 컷은 01: 7장 · 02: 6장 · 03: 6장 · 04: 6장 · 05: 7장, 합계 32장.
- 각 룩의 products.json, ko/en/de 이름·설명·입는 법, 기사와 제품 경로 검증 완료. 기존 단일 품목 ID 20개 유지, 새 품목 ID 12개 추가. 예전 복합 accessory ID 5개는 저장 정보 보존용으로 남기고 제품 카드에서는 참조하지 않음.
- 03 양말 색·길이와 가려진 의상·장갑·신발 구조는 추정 복원으로 기록. 브랜드·성능·소재 혼용률·정확한 기온은 확인되지 않아 비워 둠. 다른 스타일 파일 변경 없음.

- b128 Running: 5룩 32제품 추가. 앱 기사 105룩. `look/` JPG 835장 중 직접 참조 814장, 보관용 에디토리얼 사본 20장과 보류 링 1장은 미참조로 보존. Sunny 남성 낮 Running·Street 모두 캘린더 제품 선택 가능.

## b129 · Sunny 여성 밤 Minimal

Sunny / Chilly / Female / 35+ / Night / Minimal 11–15: 제품 8/7/6/9/9종, 총 39개 독립 JPG(500×500, ≤50,000 bytes), ko/en/de 제품명·스타일링 설명·기사. 기존 원본 에디토리얼과 룩 ID·기존 24개 아이템 ID 유지, 새 아이템 ID 15개 추가. 최종 135룩·834아이템, 활성 참조 829, 기사 110룩. `look/sunny-female-night-minimal.js`가 기존 라이브러리 스크립트 뒤, 앱 초기화 전에 동기 적용된다. 큰 `look/outfits.js` 전체 교체가 자동 승인 검토 입력 한도를 초과하여, 기존 Street와 동일한 독립 보충 매핑 방식을 사용했다. 기본 라이브러리와 다른 세트는 변경하지 않는다.

13번 부츠의 앞코·굽·밑창·정확한 높이, 14번 가방 전체 형태·여밈·하드웨어, 15번 셔츠 몸판·칼라는 가려져 보수적으로 복원했다. 실제 소재 혼용률·브랜드·가격·구매 링크·정확한 기온은 확인되지 않아 null. [파일별 검증](sunny-female-night-minimal-validation.md).


## b130 · Sunny 남성 밤 Minimal 11–15

5룩 제품컷 5/6/5/5/6개, 총 27개. 파일당 한 품목만 포함(신발·장갑은 한 켤레). 초기 다품목 생성물 12개는 제외하고 단일 품목으로 재생성·육안 검수함. 500×500 JPG ≤50,000 bytes, 아이보리 배경. ko/en/de 제품명·스타일링 설명·기사, products.json과 look/outfits.js 직접 매핑. 기존 룩 ID 5개와 기존 아이템 ID 20개 유지(복합 accessory ID는 머플러로 유지), 새 개별 품목 ID 7개 추가. 다른 룩과 Street·여성 밤 보충 매핑 유지. 원본 5개는 origin/main 바이트와 동일.

11·14 하의/신발, 13 이너와 보이지 않는 양말은 추가하지 않음. 컵·음식·식료품·신문은 장면 소품으로 제외. 정확한 소재 조성, 가죽/스웨이드 진위, 가려진 뒷면·여밈·의류 길이, 부츠의 가려진 구조는 추정 복원. 실제 기온·브랜드·가격·구매 링크는 null. [검증](sunny-male-night-minimal-validation.md).

## b131 · Sunny 남성 Night Street 제품 분해

Sunny / Chilly / Male / 35+ / Night / Street 06–10: 제품 7/6/6/5/6종, 총 30개 독립 JPG. 검수 중 09번 팬츠의 밑단이 잘린 시안은 제외하고 전체 길이로 재생성했다. 기존 원본 에디토리얼 5개와 룩 ID·기존 아이템 ID 23개 보존, 신규 단독 품목 ID 7개 추가. 복합 accessory ID는 머플러에 유지하고 장갑을 분리했다. `look/outfits.js` 뒤에서 동기 실행되는 `look/sunny-male-night-street.js`로 해당 5룩과 제품만 갱신했으며 ko/en/de 제품명·스타일링 설명·기사를 연결했다.

모든 제품은 500×500 JPG ≤50,000 bytes, 아이보리 배경, 품목당 이미지 정확히 1개. 부츠·장갑 한 쌍은 한 품목. `look/berlin-complete/Sunny/Chilly/Male/35+/night/NN-street/products/` 및 `products.json`, `README.md`, `PROMPTS.md`에 저장한다. editorialImage는 기존 `../NN-street.jpg` 참조, 사본을 만들지 않았다.

07·09 신발 및 전 룩의 양말은 보이지 않아 추가하지 않았다. 06 귀걸이는 보이는 싱글 후프 1개만 복원. 07·08·10 장갑은 따로 보이는 품목으로 포함. 가려진 니트 목선·몸판, 팬츠 허리·밑단, 부츠 샤프트 등은 observedEvidence / inferredElements / reconstructionNotes로 구분했다. 브랜드·가격·실제 소재 혼용률·정확한 기온은 미확인으로 null. 장보기 포장·음식·음료·열쇠는 착장 제품에서 제외했다. [파일별 검증](sunny-male-night-street-validation.md).

- b131 업로드 방식: 기본 outfits.js 전체 업로드가 자동 승인 검토 입력 한도를 초과하여 기존 저장소의 보충 매핑 패턴을 사용했다. `look/sunny-male-night-street.js`는 다른 라이브러리 스크립트 뒤, 앱 초기화 전에 동기 적용된다. 기본 `look/outfits.js`와 다른 보충 파일은 최신 main 그대로 보존한다.


## b132 · Sunny 남성 밤 Running 01–05 (2026-10-23)

기존 `Sunny/Chilly/Male/35+/night/01-running.jpg`–`05-running.jpg`는 바이트 불변. 제품별 독립 이미지 7/7/4/7/6개, 총 31개(500×500 실제 JPG, 각각 ≤50,000 bytes), 따뜻한 아이보리 배경. 각 `NN-running/products/`와 `products.json`·README·PROMPTS에 기록했다. ko/en/de 제품명·스타일링 설명·How to Wear 및 기사를 `look/outfits.js`의 해당 5개 룩에 직접 연결했다. productionStatus=ready, mappingStatus=mapped. 기존 룩 ID 5개와 확인된 단일 품목 ID 17개 보존, 새 품목 ID 14개 추가. 기존 복합 accessory ID 5개와 보이지 않는 03 이너 ID는 호환용 데이터로 보존하고 카드에서는 참조하지 않는다. 다른 130룩 및 보충 매핑 보존. 현재 런타임 135룩·862아이템(활성 851)·기사 125룩.

03번 이너·신발·양말, 05번 신발·양말은 보이지 않아 생성하지 않았다. 01 양말의 정확한 길이, 02 이너 색·04 하의 분류와 과거 글의 차이, 잘린 03·05 하의와 가려진 몸판·소매·뒤쪽·밑창 등은 각 JSON/README에 구분해 기록했다. 정확한 기온·혼용률·브랜드·가격·성능은 미확인(null). 최초 생성 31장 중 근거 없는 반사 무늬가 붙은 이너/양말 4장은 수정본으로 교체했으며 최종 제품 자산은 정확히 31장이다. [검증 결과](sunny-male-night-running-validation.md).

## b138 · Sunny 여성 밤 Running 01–05 (2026-10-23)

기존 `Sunny/Chilly/Female/35+/night/01-running.jpg`–`05-running.jpg` 원본 5장은 바이트 불변. 제품별 독립 JPG 8/8/7/8/9개, 총 40개를 생성·검수했다. 모든 제품은 500×500 실제 JPEG, 각각 ≤50,000 bytes, 따뜻한 아이보리 배경, 품목당 정확히 한 파일이다. 신발·양말·장갑·귀걸이 한 쌍은 한 품목. products.json에 ko/en/de 제품명·스타일링 설명·How to Wear·근거·복원 범위를 기록하고 `look/outfits.js`에 직접 매핑했다. productionStatus=ready, mappingStatus=mapped.

기존 룩 ID 5개와 단일/주요 품목 ID 18개를 유지하고 단독 품목 ID 22개를 추가했다. 복합 accessory ID 5개와 03번의 보이지 않는 기존 top ID는 호환용으로 남기고 제품 카드에서는 제외했다. 다른 130룩, 기존 보충 매핑, 선택 로직을 보존했다. 최종 런타임 135룩·884아이템(활성 867)·기사 130룩. 실제 선택 함수로 540가지 조건의 결과 불변을 확인했다.

01 이너는 사진의 차콜 집넥으로, 02 하의는 보이는 네이비 테이퍼드 팬츠로 기존 일반 문구를 정정했다. 03 별도 이너·양말은 보이지 않아 생성하지 않았다. 03 신발은 프레임 하단의 부분 관찰을 근거로 전체 한 켤레를 복원했다. 반대쪽 귀걸이·여밈, 의류 뒤쪽·허리·가려진 몸판, 신발 밑창과 양말 발 부분은 추정 복원으로 표시했다. 정확한 기온·브랜드·가격·실제 혼용률·성능은 미확인(null). 02·04 이너에 처음 추가됐던 근거 없는 반사 무늬는 수정본으로 교체했다. [파일별 검증](sunny-female-night-running-validation.md).


## b140 · Sunny 여성 밤 Street 06–10

Sunny / Chilly / Female / 35+ / Night / Street 06–10: 5룩·42제품(7/7/8/10/10), 제품당 독립 JPG 1장. 모든 파일 500×500, 9,251–49,925 bytes, 따뜻한 아이보리 배경. ko/en/de 제품명·스타일링 설명·How to Wear·기사를 look/outfits.js에 직접 연결했다. 기존 appOutfitId 5개와 아이템 ID 21개 유지, 신규 단독 품목 ID 21개 추가. 다른 130룩·기존 보충 매핑과 날씨 선택 로직 보존. 864가지 선택 조건의 ID·순위·적합도 결과 불변. 원본 5장 SHA-256 시작/종료 동일. 실제 소재·혼용률·주얼리 금속·가려진 구조는 추정 복원, 정확한 기온·브랜드·가격·구매 링크는 null. 단일 품목이 아닌 초기 시안 11개는 제외하고 재생성했다.

[파일별 검증](sunny-female-night-street-validation.md).


## b143 · Overcast / Chilly / Male / 35+ / Night / Streetwear

User-approved 5 editorials and 21 individual product assets (4/6/3/5/3), mapped through `look/overcast-male-night-street.js`. IDs `ocn-06-street-m`–`ocn-10-street-m`. Latest explicit user direction overrides the earlier ivory JPG rule for this set: 500×500 transparent WebP, preserving source alpha with no new background removal. All five outerwear heroes use the same transparent asset (no duplicate cutout). Original generation PNGs are not committed. Hidden areas are inferred; actual temperatures, brands and fibre composition remain unknown. Other looks and selection logic unchanged.

## b145 · 흐림 남성 낮 스트리트 두 번째 세트 (2026-10-24)

- 5룩 `oc-chilly-m-35-day-street-01`–`05`, 제품 28개(5/6/6/5/6), `look/berlin-complete/Overcast/Chilly/Male/35+/day/street/<01–05>/`. 기존 `oc15-06…10-street-m`(같은 칸, `day/06–10-street/`)은 그대로라 이 칸은 10룩에서 3개를 랜덤으로 고름.
- 제품은 투명 WebP(500×500, 24–50KB), 에디토리얼 JPG 1024×1536 ≤300KB. 투명 마스터 PNG와 PNG 에디토리얼은 iCloud에만. [검증 기록](overcast-male-day-street-2-validation.md).



## b149 · Rain / Light / Chilly / Female / 35+ / Night / Street

Five user-approved editorials (red-bomber plant scene and burgundy headscarf final revisions) plus 27 independent transparent WebP products (5/6/6/4/6) mapped through `look/rain-female-night-street.js`, before `look/cutouts.js`. Fixed new IDs `bl-light-chilly-f-35-night-street-01`–`05`, with per-product ko/en/de how-to-wear and article/title/deck/pull/tip. `sky: rain`, `rain: light`, `bands: [chilly]`, `gender: f`, `time: evening`, `style: street`; existing selection rules and other looks preserved. Hero cutouts reuse the existing alpha WebP files and have HERO/CUTS rows. No source PNG, contact sheet or superseded editorial is committed. Actual temperature is unknown; 7°C is a creative styling input, not live weather. Hidden garment details are marked as inferred. User instructions: `look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/USAGE.md`. Validation: `design/rain-female-night-street-validation.md`.


## b150 · Rain / Light / Chilly / Female / 35+ / Night / Street — 2026-10-24 set

Second dated set for this category: five user-approved editorials plus 34 independent transparent WebP products (6/7/7/6/8) in `look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/01–05/`, mapped through `look/rain-female-night-street-20261024.js` before `look/cutouts.js`. New IDs `bl-light-chilly-f-35-night-street-20261024-01`–`05` (`sky: rain`, `rain: light`, `bands: [chilly]`, `gender: f`, `time: evening`, `style: street`); the b149 set and all other looks are unchanged, so this cell now draws 3 of 10. Supplied ko/en/de copy used verbatim. 7°C / 3°C are creative assumptions, not measurements. Hidden garment details, look 05 boots and opposite earrings are reconstructions. PNG masters stay in iCloud. Validation: `design/rain-female-night-street-20261024-validation.md`.

## b151 · Rain / Light / Chilly / Female / 35+ / Night / Minimal

5룩 · 제품 28개(6/5/6/4/7) 투명 WebP, `look/rain-female-night-minimal.js`(cutouts.js 앞). ID `bl-light-chilly-f-35-night-minimal-01`–`05`. 04번 안경 닦이는 소품(`appEligible: false`)이라 제외. 한국어·독일어 입는 법과 룩 문구(제목·요약·인트로·인용구·팁)는 에디토리얼 보고 새로 씀. 이제 가벼운 비 여성 저녁은 러닝만 빈 칸.

## b153 · Overcast / Chilly / Female / 35+ / Night — 2026-10-25 set

15룩(러닝 5·스트리트 5·미니멀 5) · 제품 95개(29/32/34) 투명 WebP, `look/overcast-female-night-20261025.js`(cutouts.js 앞). ID `oc-chilly-f35-night-<style>-20261025-NN`. 기존 `ofn-*` 15룩 그대로, 이 칸은 이제 스타일마다 10룩. 여성 모델 외관 25–28세(타깃 35+와 별개). 9°C / 체감 5°C는 제작 가정. [검증](overcast-female-night-20261025-validation.md).

## b161 · Rain / Light / Chilly / Male / 35+ / Night / Street — 2026-10-26 set

5룩 · 제품 25개(5/5/5/5/5) 투명 WebP, `look/rain-light-male-night-street-20261026.js`(cutouts.js 앞). ID `rl-chilly-m35-night-street-20261026-01`–`05`, 폴더 `Rain/Light/Chilly/Male/35+/night/street/<01–05>/`. 가벼운 비 남성 저녁 스트리트 플레이스홀더 → 이 5룩 중 3개. 이제 가벼운 비 저녁은 남성 미니멀만 빈 칸. [검증](rain-light-male-night-street-20261026-validation.md).

- b162: 04 그레이 프린지 머플러 분류 `accessory` → `scarf`(다른 머플러와 같은 라벨·캘린더 규칙). 룩·아이템 수 변화 없음.

## b163 · Rain / Normal / Chilly / Male / 35+ / Day / Minimal — 2026-10-26 set

5룩 · 제품 24개(6/4/5/4/5) 투명 WebP, `look/rain-normal-male-day-minimal-20261026.js`(cutouts.js 앞). ID `rn-chilly-m35-day-minimal-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Male/35+/day/minimal/<01–05>/`. 첫 보통 비 남성 세트: 보통 비(63·66·81) 낮 남성 미니멀 플레이스홀더 → 이 5룩 중 3개. 우산은 `accessory`, 머플러는 `scarf`, 크로스백·토트는 `bag`. [검증](rain-normal-male-day-minimal-20261026-validation.md).

## b164 · Rain / Normal / Chilly / Male / 35+ / Day / Street — 2026-10-26 set

5룩 · 제품 23개(5/4/5/4/5) 투명 WebP, `look/rain-normal-male-day-street-20261026.js`(cutouts.js 앞). ID `rn-chilly-m35-day-street-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Male/35+/day/street/<01–05>/`. 보통 비(63·66·81) 낮 남성 스트리트 플레이스홀더 → 이 5룩 중 3개(옆 단계 추움·선선함 낮도 같은 규칙으로). 이제 보통 비 남성 낮은 러닝만 빈 칸. 플리스·오버셔츠 `top`, 그 안 이너 `under`, 비니 `headwear`, 우산 `accessory`. [검증](rain-normal-male-day-street-20261026-validation.md).

## b166 · Rain / Normal / Chilly / Female / 35+ / Day / Street — 2026-10-26 set

5룩 · 제품 25개(5/4/6/5/5) 투명 WebP, `look/rain-normal-female-day-street-20261026.js`(cutouts.js 앞). ID `rn-chilly-f35-day-street-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Female/35+/day/street/<01–05>/`. 보통 비(63·66·81) 낮 여성 스트리트 플레이스홀더 → 이 5룩 중 3개(옆 단계 추움·선선함 낮도 같은 규칙으로). 이제 보통 비 여성 낮은 미니멀만 빈 칸. 패딩·플리스 미드레이어 `top`, 그 안 니트 `under`, 우산 `accessory`, 골드 후프 `jewelry`, 비니 `headwear`. [검증](rain-normal-female-day-street-20261026-validation.md).

## b167 · Rain / Normal / Chilly / Male / 35+ / Night / Minimal — 2026-10-26 set

5룩 · 제품 21개(5/4/4/4/4) 투명 WebP, `look/rain-normal-male-night-minimal-20261026.js`(cutouts.js 앞). ID `rn-chilly-m35-night-min-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Male/35+/night/minimal/<01–05>/`, `time: evening`. 보통 비(63·66·81) 저녁 남성 미니멀 플레이스홀더 → 이 5룩 중 3개(옆 단계 추움·선선함 저녁도 같은 규칙으로). **첫 보통 비 저녁 룩**, 보통 비 남성 저녁은 러닝·스트리트가 빈 칸. 장갑 `hands`, 머플러 `scarf`, 크로스바디 `bag`. [검증](rain-normal-male-night-minimal-20261026-validation.md).

## b168 · Rain / Normal / Chilly / Female / 35+ / Day / Minimal — 2026-10-26 set

5룩 · 제품 23개(5/5/4/4/5) 투명 WebP, `look/rain-normal-female-day-minimal-20261026.js`(cutouts.js 앞). ID `rn-chilly-f35-day-minimal-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Female/35+/day/minimal/<01–05>/`, 낮이라 `time` 없음. 보통 비(63·66·81) 낮 여성 미니멀 플레이스홀더 → 이 5룩 중 3개. 이제 보통 비 여성 낮 3스타일이 모두 채워짐(저녁은 전부 빈 칸). 장갑 `hands`, 안경 `eyewear`, 머플러 `scarf`, 숄더·토트·크로스바디 `bag`; 우산·빵·열쇠·자동차·안경 닦이 천은 장면 소품. [검증](rain-normal-female-day-minimal-20261026-validation.md).

## b169 · Rain / Normal / Chilly / Male / 35+ / Day / Running — 2026-10-26 set

5룩 · 제품 27개(5/5/5/6/6) 투명 WebP, `look/rain-normal-male-day-running-20261026.js`(cutouts.js 앞). ID `rn-chilly-m35-day-run-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Male/35+/day/running/<01–05>/`, 낮이라 `time` 없음. 보통 비(63·66·81) 낮 남성 러닝 플레이스홀더 → 이 5룩 중 3개(옆 단계 추움·선선함 낮도 같은 규칙). 이제 보통 비 낮은 남녀 3스타일이 모두 채워짐. 캡 `headwear`, 워치 `watch`, 양말 `socks`. [검증](rain-normal-male-day-running-20261026-validation.md).

## b170 · Rain / Normal / Chilly / Male / 35+ / Night / Running — 2026-10-26 set

5룩 · 제품 36개(7/7/7/8/7) 투명 WebP, `look/rain-normal-male-night-running-20261026.js`(cutouts.js 앞). ID `rn-chilly-m35-night-run-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Male/35+/night/running/<01–05>/`, `time: evening`. 보통 비(63·66·81) 저녁 남성 러닝 플레이스홀더 → 이 5룩 중 3개. 가벼운 비 저녁 남성 러닝(b158)은 같은 강도 룩이 있어 그대로, 쏟아지는 비 저녁 남성 러닝은 여전히 플레이스홀더, 낮·마른 저녁은 `time`·sky 규칙으로 안 나옴. 장갑 `hands`, 헤드밴드·비니 `headwear`, 이너 `under`, 워치 `watch`. [검증](rain-normal-male-night-running-20261026-validation.md).

## b171 · Rain / Normal / Chilly / Male / 35+ / Night / Street — 2026-10-26 set

5룩 · 제품 21개(5/4/4/3/5) 투명 WebP, `look/rain-normal-male-night-street-20261026.js`(cutouts.js 앞). ID `rn-chilly-m35-night-street-20261026-01`–`05`, 폴더 `Rain/Normal/Chilly/Male/35+/night/street/<01–05>/`, `time: evening`. 보통 비(63·66·81) 저녁 남성 스트리트 플레이스홀더 → 이 5룩 중 3개(옆 단계 추움·선선함 저녁도 같은 규칙). 가벼운 비 저녁 남성 스트리트(b161)는 같은 강도 룩이 있어 그대로, 쏟아지는 비 저녁 남성 스트리트는 여전히 플레이스홀더. 이제 보통 비 남성은 낮·저녁 3스타일 모두 있음. 플리스·오버셔츠 미드레이어 `top`, 그 안 스웨트셔츠·니트 `under`(02 터틀넥·04 후디는 미드레이어가 없어 `top`), 비니 `headwear`, 크로스바디 `bag`. [검증](rain-normal-male-night-street-20261026-validation.md).

- b172: Rain/Normal/Chilly/Male/35+/night/running 2026-10-26 copy-v2: 36 distinct How-to-Wear notes per language, distinct pulls/tips, prior b170 duplication resolved. All 41 image bytes and look/item IDs preserved.

## b173 · 글로벌 맥락 테스트 (2026-10-27)

- 쾌적함 · 맑음 · 여성 · 낮 · 스트리트에 1룩(`gc-coastal-pleasant-f35-day-street-20261027-01`, warm-coastal-urban · dry). 맑은 낮 여성 스트리트의 선선함·쾌적함·따뜻함 날에 후보가 됨(쾌적함 날엔 유일 후보). 비·흐림·저녁·다른 스타일/성별은 그대로.
- 기존 240룩의 지역·습도는 unknown(검토 전). 지역 검토·태깅은 사진을 보고 따로(`SIDECAR`), 일괄 태깅 금지.

## b176 · 해안 맑은 쾌적함 여성 낮 스트리트 2026-10-27 세트 (2026-10-27)

- 같은 칸에 5룩 추가(`coastal-pleasant-f35-day-street-20261027-01`–`05`, warm-coastal-urban · 습도 unknown, 34제품 투명 WebP) → b173 1룩과 합쳐 6룩 중 3개. b175 규칙대로 해안 지역에서만 나오고, 베를린·지역 미상·다른 지역의 이 칸은 계속 COMING SOON. 해안 지역 따뜻함 날에도 옆 단계 후보, 선선함 날엔 쌀쌀함 룩이 앞(b174). 비·흐림·저녁·다른 스타일/성별은 그대로.

## b177 · 해안 맑은 쾌적함 남성 낮 스트리트 2026-10-27 세트 (2026-10-27)

- 새 칸 맑음 · 쾌적함 · 남성 · 낮 · 스트리트에 5룩(`coastal-pleasant-m35-day-street-20261027-01`–`05`, warm-coastal-urban · 습도 unknown, 22제품 투명 WebP 4/5/5/5/3). 해안 지역의 쾌적함·따뜻함 맑은 낮 남성 스트리트가 COMING SOON → 이 5룩 중 3개. 선선함 날엔 베를린 쌀쌀함 남성 스트리트 5룩이 그대로 앞(b174). 베를린·지역 미상·동아시아·저녁·흐림·비·다른 스타일/여성은 그대로(선택 회귀 3,456경우 중 바뀐 것은 이 4경우뿐).

## b178 · 해안 맑은 쾌적함 남성 저녁 스트리트 2026-10-27 세트 (2026-10-28)

- 새 칸 맑음 · 쾌적함 · 남성 · **저녁** · 스트리트에 5룩(`coastal-pleasant-m35-evening-street-20261027-01`–`05`, `time: "evening"`, warm-coastal-urban · 습도 unknown, 20제품 투명 WebP 4/3/4/5/4). 해안 지역의 쾌적함·따뜻함 맑은(0·2) 저녁 남성 스트리트가 COMING SOON → 이 5룩 중 3개. 선선함 저녁엔 베를린 쌀쌀함 저녁 남성 스트리트 5룩(bn15-06…10)이 그대로 앞(b174). 낮 해안 세트(b177)·캘린더(낮 룩만)·베를린·지역 미상·동아시아·흐림·비·다른 스타일/여성은 그대로(선택 회귀 파이썬 포트 3,456경우 중 바뀐 것은 이 4경우뿐).

## b179 · 해안 흐림 선선함 여성 낮 스트리트 2026-10-28 세트 (2026-10-28)

- 새 칸 흐림 · **선선함** · 여성 · 낮 · 스트리트에 5룩(`coastal-cool-f35-day-street-20261028-01`–`05`, sky `cloudy`(제작 측 overcast), warm-coastal-urban · 습도 unknown, 28제품 투명 WebP 5/6/5/6/6). 해안 지역 흐린 낮 선선함 여성 스트리트: 베를린 쌀쌀함 흐림 여성 스트리트 5룩(옆 단계) → 이 5룩 중 3개. 해안 흐린 낮 쾌적함 여성 스트리트: COMING SOON → 이 5룩(옆 단계, 더 추운 쪽). 해안 흐린 낮 쌀쌀함은 쌀쌀함 룩이 앞이라 화면 그대로. 맑음·비·저녁·베를린·지역 미상·동아시아·남성·다른 스타일은 그대로(선택 회귀 파이썬 포트 2,160경우 중 바뀐 것은 이 2경우뿐).

## b181 · 해안 흐림 선선함 남성 낮 스트리트 2026-10-28 세트 (2026-10-28)

- 새 칸 흐림 · **선선함** · 남성 · 낮 · 스트리트에 5룩(`coastal-cool-m35-day-street-20261028-01`–`05`, sky `cloudy`(제작 측 overcast), warm-coastal-urban · 습도 unknown, 25제품 투명 WebP 5/5/5/5/5). 해안 지역 흐린 낮 선선함 남성 스트리트: 베를린 쌀쌀함 흐림 남성 스트리트 10룩(옆 단계) → 이 5룩 중 3개. 해안 흐린 낮 쾌적함 남성 스트리트: COMING SOON → 이 5룩(옆 단계). 여성 b179·맑음·비·저녁·베를린·지역 미상·유럽·동아시아·다른 스타일은 그대로(Node로 앱 `lookFits` 원본을 돌린 선택 회귀 2,160경우 중 바뀐 것은 이 2경우뿐). [검증](coastal-overcast-cool-male-day-street-20261028-validation.md).


## b185 · 2026-10-29 coastal daytime additions

Four user-authorized sets, 20 looks / 94 products: cloudy cool male minimal (5/25), cloudy cool female running (5/27), cloudy cool male running (5/21), clear pleasant female minimal (5/21). All reviewed warm-coastal-urban, humidity unknown, storage 35+, daytime. Existing looks and rules preserved. [Validation](coastal-four-sets-20261029-validation.md).


## b186 · Sunny Pleasant female daytime running · 2026-10-29

5 approved playful-v2 editorials and22 independently generated transparent products (4/4/4/5/5). Reviewed warm-coastal-urban, humidity unknown, clear/pleasant/run/f/35/day. v1 rejected and excluded. Existing selectors and assets preserved. [Validation](coastal-sunny-pleasant-female-day-running-20261029-validation.md).


## b188 · Sunny Pleasant male daytime running · 2026-10-30

New cell clear · pleasant · male · day · run: 5 approved mixed-gaze editorials (01–04 v2-gaze, 05 original) and 23 transparent products (4/4/5/5/5, no jackets). Reviewed warm-coastal-urban, humidity unknown, storage 35+, model look 28–32. Expected effect (selector not executed in this session): in coastal locations, clear pleasant (and adjacent warm) male running draws from these 5. Berlin and unknown regions should be unchanged. [Validation](coastal-sunny-pleasant-male-day-running-20261029-validation.md).


## b190 · Sunny Pleasant male daytime minimal · 2026-10-30

New cell clear · pleasant · male · day · minimal: 5 approved mixed-gaze editorials and 18 transparent products (4/3/4/4/3). Reviewed warm-coastal-urban, humidity unknown, storage 35+, model look 28–32. In coastal locations, clear pleasant (and adjacent warm) male minimal now draws from these 5 (previously no exact-band match). Berlin and unknown regions unchanged; `location-first.cjs` 72 cases pass. [Validation](coastal-sunny-pleasant-male-day-minimal-20261030-validation.md).


## b192 · Overcast Cool female evening street · 2026-10-30

First coastal female street evening set: cloudy · cool · female · evening · street, 5 approved mixed-gaze editorials and 27 transparent products (5/6/6/6/4). Reviewed warm-coastal-urban, humidity unknown, storage 35+, model look 25–28. In coastal locations after sunset, dry chilly/cool/pleasant female street now draws from these 5 instead of the previous daytime fallback; dry warm evenings show COMING SOON (existing evening-only rule), rain stays COMING SOON. Berlin and unknown regions unchanged. [Validation](coastal-overcast-cool-female-night-street-20261030-validation.md).
