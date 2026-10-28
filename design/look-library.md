# Today's Look 룩 라이브러리

Today's Look은 `look/outfits.js`(`window.WX_LOOKS = { version, outfits: [...], items: {...} }`)의 룩을 고른 스타일·성별 안에서 3개씩 보여줍니다.
빌드 도구 없이 `<script src="look/outfits.js?v=<빌드>">`로 불러옵니다(빌드마다 `?v=`도 올릴 것). 파일이 안 불러지면 단계 기본 문구로 돌아갑니다.

마지막 정리: 2026-10-28 (앱 빌드 b181) · 266룩 · 기사 룩 266 · 아이템 b179 수치 + 25 (b181 해안 흐림 선선함 남성 낮 세트 5룩 · 25아이템, Node 런타임 1584 → 1609, ID 충돌 없음 확인; 그 전 b179 해안 흐림 선선함 여성 낮 세트 5룩 · 28아이템; 아이템 총수는 파서마다 달라(b178 기록 1557, b179 점검 파서 1533 → 1561) 증가분만 기록; b172는 문구만). 칸별 현황·빈 칸 목록은 `look-coverage.md`.
모듈은 `index.html`의 순서대로 불러옴: `outfits.js` → 보충 모듈들 → `global-coastal-20261027.js` → `coastal-sunny-pleasant-female-day-street-20261027.js`(b176) → `coastal-warm-male-day-street-20261027.js`(b177) → `coastal-warm-male-evening-street-20261027.js`(b178) → `coastal-overcast-cool-female-day-street-20261028.js`(b179) → `coastal-overcast-cool-male-day-street-20261028.js`(b181) → `cutouts.js` → `coast-grid.js` → **`global-context.js`(마지막, b173)**.

## Outfit

| 필드 | 값 |
| --- | --- |
| `id` | 고정 ID. 아이템 답(갖고 있어요/관심 있어요)이 이 값을 씀 → **이름 바꾸거나 재사용 금지**. 형식 `<세트 약자>-<번호>-<run\|street\|minimal>-<m\|f>` |
| `bands` | 맞는 체감 단계 키 배열(`freeze verycold cold chilly cool pleasant warm hot scorching`) |
| `sky` | `clear`(코드 0–2) · `cloudy`(그 외) · `any` · `rain`(b110, 비 오는 날에만) |
| `rain` | (b110, `sky: "rain"`만) `light` · `normal` · `pouring` = 폴더 `Rain/Light·Normal·Pouring` |
| `style` | `run` · `street` · `minimal` |
| `gender` | `m` · `f` |
| `age` | 사진 폴더의 연령대 기록(`"35"` = 폴더 `35+`). 고를 때 아직 안 씀. 프로필 연령대는 `u35` · `35` · `60` |
| `time` | (선택) `"evening"` = 저녁 룩. 없으면 낮 룩 |
| `image` | 에디토리얼 사진(1024×1536, 2:3, JPG) |
| `deck` | 한 줄 요약(캡션) `{ko,en,de}` |
| `article` | (선택) 기사: `title`(영문 헤드라인, 번역 안 함), `intro` {ko,en,de}, `pull`(영문 인용구), `tip` {ko,en,de}(선택). 있으면 아이템 리스트 대신 제품 카드 화면 |
| `items` | Item ID 배열(보여줄 순서 = products.json 순서) |
| `visualRegion` | (선택, b173) 배경의 시각적 지역 `neutral-urban` · `european-urban` · `east-asian-urban` · `warm-coastal-urban`. `contextReview.status: "reviewed"`일 때만 씀. 날씨 적합도를 바꾸지 않는 부드러운 선호 |
| `climateContext` | (선택, b173) `{ feelsLikeBand, humidityContext: humid \| dry \| unknown }`. 습도 맥락은 제작 가정이며 측정값이 아님 |
| `contextReview` | (선택, b173) `{ status: "reviewed" \| "pending" }`. 없으면 지역·습도 = unknown(neutral과 다름) |

## Item

| 필드 | 값 |
| --- | --- |
| `id` | 고정 ID. 기사 룩은 기본 `<outfitId>.<products.json id>` (기존 아이템 ID가 있으면 products.json `appItemId`를 우선해 보존)(예 `ofn-06-street-f.04-shoes`), 예전 룩은 `<outfitId>.<cat>` |
| `cat` | `outer` `top` `under` `bottom` `shorts` `hosiery` `shoes` `socks` `gloves` `hands` `headwear` `eyewear` `scarf` `bag` `watch` `jewelry` `gear` `accessory`. 화면 라벨은 영어 대문자(`accessory` = BRING, 라벨 표에 없는 것은 키 그대로) |
| `name` | 이름 `{ko,en,de}` — 기사 룩에선 카드 큰 타이틀 |
| `note` | (선택) 입는 법 `{ko,en,de}` — 기사 룩 카드 본문, 예전 룩은 펼치면 보임 |
| `image` | (선택) 사진. 기사 룩은 500×500 제품 컷 JPG |
| `bg` | (b109, 제품 컷만) 컷 모서리 평균색 `#RRGGBB`. 캘린더 카드 바탕색. 새 제품 컷을 넣으면 같이 계산 |
| `alt` | (선택) 제품 컷 대체 텍스트(한국어, products.json `altKo`) |
| `sub` | (선택) 카드 보조문구. 데이터에만 있고 b99부터 화면에 안 씀 |

## 고르는 순서 (`lookPool`)

(b173 코드 기준으로 고침. 아래 4번의 "다른 하늘/다른 강도 룩으로 채움"은 b114부터 실제 사진 노출이 아님 — 순위 0이 없으면 COMING SOON.)

1. 같은 스타일·성별 룩만.
2. **시간대**: 오늘 일몰 10분 전 ~ min(다음 일출, 05:00)은 저녁 → `time: "evening"` 룩, 그 외는 낮 룩. 일출·일몰 값이 없으면 밤 = 저녁(단 밤 중 5~12시는 낮). 그 스타일·성별에 맞는 시간대 룩이 하나도 없으면 다른 시간대 룩.
3. **단계**: 오늘 단계(0점) 또는 옆 단계(2점)만. 두 단계 이상은 제외. 옆 단계끼리는 더 추운 쪽 룩(더 따뜻하게 입은 룩)이 먼저, 더 더운 단계 전용 룩은 그 뒤(b174, `wn`): 체감 11°(선선함)에 쾌적함 전용 반팔 룩이 쌀쌀함 룩보다 앞에 오지 않음. 추운 쪽 옆 룩이 없을 때만(예: 추움 날의 쌀쌀함 룩) 더운 쪽 룩이 그대로 나옴.
4. **하늘 순위(sr)**: 마른 날은 오늘 하늘(`clear` = 코드 0–2, 시간대 상관없음; 그 외 `cloudy`)과 같거나 `any` = 0, 다른 마른 하늘 = 1, 비 룩 = 제외.
   **비(b110)**: 오늘 코드가 비면 비 강도를 WMO 코드로 정함 — light = 이슬비 51–57 · 약한 비 61 · 약한 소나기 80 / normal = 63 · 66 · 81 / pouring = 65 · 67 · 82 · 뇌우 95–99(`rainLevel`, 강수확률은 안 씀). 같은 강도 비 룩 0 · 다른 강도 비 룩 1 · 흐린 날·any 2 · 맑은 날 3. 비 룩은 비 안 오는 날엔 절대 안 나옴.
   **가장 좋은 순위가 0이 아니면(또는 후보가 없으면) 사진 대신 COMING SOON 한 장**(b114). 즉 다른 하늘·다른 강도 룩은 실제로는 노출되지 않음.
5. 순위 0 후보를 **적합도(fit = 단계 거리×2)** → **기후 맥락(cr)** → **시각 지역(rr)** → 랜덤 순으로 정렬해 앞에서 **3개**(b173, 아래 "글로벌 맥락"). 섞는 씨앗은 `lookSeed` + 스타일·성별·단계·저녁·날짜 + **장소·맥락 키**(b173). `lookSeed`는 앱을 열 때·앱으로 돌아올 때 새로. 캘린더 날짜 시트는 카드의 룩이 지금 후보에 있을 때만 맨 앞(b173 검사).
6. 하나도 없으면 단계 기본 문구(`LOOK[단계]`, 사진 없음) + COMING SOON.
7. 캘린더 카드(`dayPick`): 세 스타일에서 순위 0 기사 룩만, 같은 적합도·기후·지역 순서로 제품 컷을 고름. 3스타일 모두 순위 0이 없으면 COMING SOON.

## 글로벌 맥락 (b173, 2026-10-27)

- **지금 구현된 것**: `look/global-context.js`(모든 룩 모듈 뒤에 로드)가 룩마다 `gctx = { region, humidity }`를 만듦. 출처는 룩의 `visualRegion`·`climateContext.humidityContext`(`contextReview.status: "reviewed"`일 때만) 또는 같은 파일의 `SIDECAR`(룩 ID → 검토된 값, **지금은 비어 있음**). 그 외 = `unknown`. 기존 240룩은 메타데이터가 없어 모두 unknown — 베를린 룩을 humid·neutral·reviewed로 일괄 태그하지 않음.
- **장소 → 시각 지역**: `?region=`(테스트용 명시값) > 좌표 프로필(같은 나라 코드일 때만: ES + 카나리아 제도 위경도 27.4–29.6 / -18.4~-13.2 → `warm-coastal-urban`) > 동아시아 나라 코드(`east-asian-urban`) > **해안 칸**(b175, `look/coast-grid.js`: 해안선에서 약 20km 안의 0.1° 칸, Natural Earth 1:50m, `tools/make-coast-grid.py`로 생성; GPS 좌표에도 적용, 단 나라 코드 없는 동아시아 박스 안은 제외) → `warm-coastal-urban` > 나라 코드(`COUNTRY`: 유럽 18개국 → `european-urban`, KR·JP·CN·TW·HK → `east-asian-urban`) > `unknown`. 나라 코드는 도시 검색(Open-Meteo geocoding `country_code`)에서 장소에 `cc`로 저장(검색 결과·`setPlace`·내 목록). 그 밖의 GPS·b173 이전에 저장한 장소·목록에 없는 나라 = unknown(역지오코딩 안 함). 베를린 기본 장소는 `cc: DE`(내륙 → european-urban). 해안 판정은 테스트용 대략값(사용자 2026-10-27: 대부분 해안 지역은 해안으로): 함부르크처럼 하구 안쪽 항구도 해안, 로마(약 25km)·암스테르담은 아님. 지역은 모델 캐스팅에 쓰지 않음.
- **습도 맥락**: 오늘 화면만 `?humidity=humid|dry` 명시값을 받음(테스트용). 날씨 API 습도는 받지도 분류하지도 않음, 임계값 없음 → 평소엔 항상 unknown. 캘린더 미래 날짜는 항상 unknown. **자동 습도 분류는 보류**.
- **순위**(같은 날씨 적합도 안에서만): 기후 cr — 질의 unknown이면 모두 0, 같은 습도 0 → unknown 1 → 다른 습도 2. 지역 rr — 질의 unknown이면 모두 0, 같은 지역 0 → 검토된 neutral-urban 1 → 다른 지역·unknown 2. **지역 제외(b175, 사용자 결정)**: 검토된 지역이 있는 룩(neutral-urban 제외)은 장소 지역이 같을 때만 나옴. 지역이 다르거나 unknown이면 빠지고, 그 칸에 남는 룩이 없으면 COMING SOON. 지역 없는 룩(베를린 세트 전부)은 어디서나. 습도는 제외 조건이 아니며, 지역·습도 모두 날씨·단계·시간대·비 강도 규칙을 우회하지 않음. 단계가 정확히 맞는 기존 룩이 옆 단계 지역 일치 룩보다 항상 앞.
- **실패 시**: `global-context.js`가 안 불러지거나 오류면 모든 순위 0 = b172 선택과 같음.
- 홈·Today's Look(`lastView`), 캘린더 시트(`dayView`), 카드(`dayPick`), `lookPool`이 같은 맥락(`region`, `humidity`, `ctxKey`)을 씀.
- 보류: 자동 습도 분류, 기존 베를린 룩의 사진 검토·지역 태깅, 국가 어휘 확장, 글로벌 폴더용 가져오기 도구. 설계 메모: `design/GLOBAL_IMAGE_EXPANSION_HANDOFF.md`.

맞춤 표시: 1번째 오늘의 추천 / 2번째 이것도 좋아요 / 3번째 이것도 나쁘지 않아요(캘린더 1번째는 이날의 추천).

## 저장

localStorage `wx-look` = `{ saved: {outfitId: 시각}, own: {itemId: 시각}, want: {itemId: 시각} }`. 이 폰에만 있음. `saved`는 b70부터 화면에서 안 씀(예전 값만 남음). `own`/`want`는 기사 없는 룩의 아이템 줄에서만 고를 수 있음.

## 사진 폴더

글로벌 세트(b173~): `look/global/<batchId>/<lookId>/editorial.jpg · products/NN-<분류>.webp · products.json`. 기후·지역·날씨는 폴더가 아니라 메타데이터에 둠. 베를린 세트는 아래 기존 구조 그대로.

```
look/berlin-complete/<하늘>/<단계>/<성별>/<연령대>/<day|night>/
  Sunny/Chilly/Male/35+/day/05-running.jpg           ← 맑은 날 세트: 사진 한 장씩
  Overcast/Chilly/Female/35+/night/06-street/        ← 흐린 날 세트: 착장 폴더
      editorial.jpg  products/01-outer.jpg …  products.json  README.md  PROMPTS.md
```

- 하늘 `Sunny` → `sky: "clear"`, `Overcast` → `"cloudy"`. 단계는 체감 9단계 영어 이름(`Chilly` → `chilly`). 성별 `Male`/`Female` → `m`/`f`. 연령대 `35+` → `age: "35"`. `night/` → `time: "evening"`.
- 번호와 스타일: 보통 01–05 러닝, 06–10 스트리트, 11–15 미니멀. 폴더 이름 `running` → `run`.
- **배경 없는 컷 (b133)**: 기사 룩마다 대표 제품(제목이 말하는 제품, 없으면 아우터) 한 장을 `products/<원래 이름>.cut.webp`(투명 배경 WebP, 옷 크기로 잘림, 9–30KB)로 둠. 홈 헤드라인 뒤 그림용. 제품 JPG에서 rembg(isnet-general-use)로 자동 생성, 경로와 밝기는 `look/cutouts.js`(아이템에 `cut`·`lum`, `lum`은 지금 안 씀). 새 기사 세트를 매핑하면 같이 만들 것: `tools/make-cutouts.py`, 절차는 `design/CUTOUTS.md`. 제품 JPG(아이보리 바닥)는 그대로 원본.
- **JPG만 저장소에 둠** (예외: 위 `.cut.webp`): 에디토리얼 1024×1536 ≤300KB(품질 80), 제품 컷 500×500 ≤50KB(품질 85). PNG로 올라오면 JPG로 바꾸고 PNG는 지우고, products.json 경로도 `.jpg`로. 2026-10-20 git 기록에서도 PNG를 지움.
- 착장 폴더의 `products.json`: `copy`(headlineEn, captionKo, introKo, pullQuoteEn, tipKo) → `article`·`deck`, `products[]`(id, category, nameKo, descriptionKo, image, altKo, status) → 아이템. 한국어는 그대로, 영어·독일어는 새로 번역. `status`가 ready인 것만. 브랜드·가격·구매 링크·소재 혼용률은 비어 있고 채우지 않음. `PROMPTS.md`·`designDescriptionEn`은 화면에 안 씀.
- 올라온 파일이 폴더 이름과 맞는지(성별·시간대·하늘) products.json의 `gender`·`weather`와 사진으로 먼저 확인할 것(2026-10-20 여성 저녁 폴더에 남성 낮 세트가 섞여 들어온 일이 있음).


### 비 세트 폴더 (2026-10-21)

새 비 세트는 강수 강도를 별도 단계로 구분하고, 스타일별로 번호를 매긴다.

`look/berlin-complete/Rain/<강도>/<단계>/<성별>/<연령대>/<day|night>/<running|street|minimal>/<번호>/`

- 강수 강도 폴더는 `Light`(Light Rain, 가벼운 비), `Normal`(Normal Rain, 보통 비), `Pouring`(Pouring Rain, 쏟아지는 비)로 구분한다. 사용자 확인: 2026-10-21.
- 이 구분은 이미지 제작·보관 분류다. (2026-10-21 당시 기록. b110부터 WMO 코드 매핑 `rainLevel`이 구현됨 — 위 "고르는 순서".)
- 오늘 작업은 `Rain/Light/Chilly/Male/35+/day/`: 남성, 낮, 기온 12°C / 체감 7°C.
- 예: `running/01/`, `street/01/`, `minimal/01/`. 각 스타일의 두 번째 룩은 `02/`로 증가한다. 새 비 세트에는 기존의 01–05/06–10/11–15 스타일 혼합 번호를 적용하지 않는다.
- 각 번호 폴더에는 `editorial.jpg`, `products/01-outer.jpg` 등 아이템별 개별 파일, `products.json`, `README.md`, `PROMPTS.md`를 둔다.
- 맑은 날(Sunny) 세트는 에디토리얼이 폴더 밖 `NN-<스타일>.jpg`에 있고 앱도 그 경로를 쓴다. 폴더 안 `editorial.jpg` 사본은 두지 않고 products.json `editorialImage`는 `../NN-<스타일>.jpg`(2026-10-23, 중복 사본 30장 지움).
- 작업 순서: 에디토리얼 1장 생성 → 사용자 확인 → 명시적 승인 → 개별 제품 컷 제작 → GitHub 업로드 → 완료 링크 제공. 수정 요청이면 승인 전 제품 제작·업로드를 진행하지 않는다.
- Light/Chilly/Male/35+/day/running/01 세트는 사용자 승인 후 에디토리얼 1장·제품 5장과 메타데이터를 업로드했다. (당시 기록: 앱 등록 pending. 이후 b110에서 매핑·비 선택 로직이 구현됨.)
- 기존 Sunny/Overcast 경로와 고정 ID는 그대로 유지한다.

## 지금 들어 있는 것

베를린 세트는 모두 쌀쌀함(체감 1~9°) · 35+. 글로벌 테스트 1룩(b173)만 쾌적함. 칸별 수는 `look-coverage.md`.

| 하늘 | 성별 | 시간 | 폴더 | 룩 ID | 화면 |
| --- | --- | --- | --- | --- | --- |
| 맑음 | 남 | 낮 | `Sunny/Chilly/Male/35+/day/` | `bd4-0N-run-m`(01–04), `bd15-NN-<스타일>-m`(05–15) | 러닝 01–05 제품 카드 기사(b128, 32제품), 스트리트 06–10 제품 카드 기사(b126), 미니멀 11–15 제품 카드 기사(b127) |
| 맑음 | 여 | 낮 | `Sunny/Chilly/Female/35+/day/` (사진 `NN-<스타일>.jpg`, 제품 `NN-<스타일>/products/`) | `bd15-NN-<스타일>-f` | 제품 카드 기사 (b124, 문구 3개 언어 제작 측 그대로) |
| 맑음 | 남 | 저녁 | `Sunny/Chilly/Male/35+/night/` | `bn15-NN-<스타일>-m` | 러닝 01–05 (b132)·스트리트 06–10 (b131)·미니멀 11–15 (b130) 제품 카드 기사 |
| 맑음 | 여 | 저녁 | `Sunny/Chilly/Female/35+/night/` | `bn15-NN-<스타일>-f` | 러닝 01–05 제품 카드 기사 (b138, 40제품), 미니멀 11–15 제품 카드 기사 (b129), 스트리트 06–10 제품 카드 기사 (b140, 42제품) |
| 흐림 | 남 | 낮 | `Overcast/Chilly/Male/35+/day/` | `oc15-NN-<스타일>-m` | 제품 카드 기사 (스트리트 06–10 제품 28개는 b147부터 투명 WebP `products/NN-<분류>.webp`, 대표 컷 = 아우터 WebP 자체) |
| 흐림 | 남 | 낮 | `Overcast/Chilly/Male/35+/day/street/01–05/` | `oc-chilly-m-35-day-street-NN` (스트리트 두 번째 세트 5, b145, 보충 파일 `look/overcast-male-day-street.js`) | 제품 카드 기사 + 인용구 + 팁, 제품 투명 WebP |
| 흐림 | 여 | 낮 | `Overcast/Chilly/Female/35+/day/` | `of15-NN-<스타일>-f` | 제품 카드 기사 |
| 흐림 | 여 | 저녁 | `Overcast/Chilly/Female/35+/night/` | `ofn-NN-<스타일>-f` | 제품 카드 기사 |
| 흐림 | 여 | 저녁 | `Overcast/Chilly/Female/35+/night/<running·street·minimal>-20261025/<01–15>/` | `oc-chilly-f35-night-<running\|street\|minimal>-20261025-NN` (두 번째 세트 15룩, b153, 보충 파일 `look/overcast-female-night-20261025.js`) | 제품 카드 기사 + 인용구 + 팁, 제품 95개 투명 WebP, 대표 컷 = 아우터 WebP 자체 |
| 비(가벼운) | 남 | 낮 | `Rain/Light/Chilly/Male/35+/day/running/01–05/` | `bl-light-chilly-m-35-day-run-NN` (러닝 5) | 제품 카드 기사 |
| 비(가벼운) | 남 | 낮 | `Rain/Light/Chilly/Male/35+/day/street/01–05/` | `bl-light-chilly-m-35-day-street-NN` (스트리트 5, b115) | 제품 카드 기사 |
| 비(가벼운) | 남 | 낮 | `Rain/Light/Chilly/Male/35+/day/minimal/01–05/` | `bl-light-chilly-m-35-day-minimal-NN` (미니멀 5, b116) | 제품 카드 기사 + 팁 |
| 비(가벼운) | 여 | 낮 | `Rain/Light/Chilly/Female/35+/day/minimal/01–05/` | `bl-light-chilly-f-35-day-minimal-NN` (미니멀 5, b116) | 제품 카드 기사 + 팁 |
| 비(가벼운) | 여 | 낮 | `Rain/Light/Chilly/Female/35+/day/casual/01–05/` | `bl-light-chilly-f-35-day-casual-NN` (캐주얼 5 → **스트리트 탭**, b118, 사용자 결정; 러닝 없음 → 플레이스홀더) | 제품 카드 기사 + 팁 (문구 3개 언어 제작 측 그대로) |
| 맑음 · 쾌적함 | 여 | 낮 | `global/global-context-coastal-20261027/gc-coastal-pleasant-f35-day-street-20261027-01/` | `gc-coastal-pleasant-f35-day-street-20261027-01` (스트리트 1, b173, `warm-coastal-urban` · dry, 보충 파일 `look/global-coastal-20261027.js`) | 제품 카드 기사 + 인용구 + 팁, 제품 3개 투명 WebP, 대표 컷 = 셔츠 WebP 자체 |
| 흐림 | 남 | 저녁 | `Overcast/Chilly/Male/35+/night/minimal/01–05/` | `oc-unclassified-m-35-evening-minimal-NN` (미니멀 5, b116; 단계는 사용자가 쌀쌀함으로 정함, 러닝·스트리트 저녁은 낮 흐린 날 룩) | 제품 카드 기사 |

비 세트(b110)는 `design/IMAGE_MAPPING_HANDOFF.md` 규칙(새 폴더 `Rain/<강도>/<단계>/<성별>/<연령>/<시간>/<스타일>/<번호>/`, 승인·productionStatus 확인)대로 등록. 제작 측 descriptionKo가 제작 메모("AI 콘셉트 제품 컷… 추정 복원")라서 화면용 입는 법(note)·인트로는 사진 보고 새로 씀(ko/en/de), 제작 메모 문장("…스타일링 콘셉트예요")은 화면에 안 씀. products.json `mappingStatus`는 mapped로. pullQuoteEn이 headlineEn과 같은 말이면(스트리트 01–05) `pull`을 넣지 않음(제목 아래 같은 문구 두 번 안 나오게).

없는 것(b173 기준, 위 표는 오래된 줄도 섞여 있음 — 정확한 칸은 `look-coverage.md`): 빈 칸은 다른 날씨 룩으로 채우지 않고 COMING SOON(b114). 쌀쌀함·쾌적함(여성 맑은 낮 스트리트 1룩) 밖의 단계는 옆 단계 룩이 없으면 COMING SOON. 35세 미만·60+ 전용, 아기, 눈 전용 없음.

예전 것(지움): b36–b67의 시트 자른 사진·아기 사진·`look/chilly`·`cool`·`clear`·`items`(b71), 낮 사진 `bm15-*`(b86). 그 문구 원문은 `look-chilly.md`·`look-cool.md`·`look-clear.md`에 기록으로만 남음.

## 새 세트 넣기

1. 폴더·파일 확인(위 경고), PNG → JPG, PNG 삭제, products.json 경로 `.jpg`.
2. `outfits`에 룩, `items`에 아이템 추가(새 ID 약자, 기존 ID는 그대로).
3. `index.html`의 `BUILD`와 `outfits.js?v=`를 올림.
4. 이 문서의 "지금 들어 있는 것" 표와 `CLAUDE.md` 변경 기록을 고침.

## Claude Code 이미지 매핑 인수인계

새 이미지 세트의 폴더 해석, 날씨·기온 메타데이터, 사용자 승인 확인, 앱 등록 절차는 [IMAGE_MAPPING_HANDOFF.md](IMAGE_MAPPING_HANDOFF.md)를 먼저 읽는다.

## b126: Sunny 남성 낮 Street Product Breakdown

기존 `Sunny/Chilly/Male/35+/day/06-street.jpg`–`10-street.jpg`를 변경하지 않고, 각 `NN-street/`에 동일한 에디토리얼 사본·독립 제품 컷·products.json·README·PROMPTS를 추가했다. 제품 수는 9/5/7/9/5(총 35). ko/en/de 이름·입는 법·캡션·인트로를 연결했다. 룩 ID 5개와 기존 아이템 ID 21개를 보존하고 14개 새 제품 ID를 추가했다. 복합 accessory ID는 기존 주품목인 머플러에 유지하고 09번 파우치는 별도 ID로 분리했다. 제품별 appItemId가 실제 앱 ID이며 products.json id를 임의로 덮어붙이지 않는다. 기사 룩의 아이템 표시 순서는 products 순서와 같다. 10번의 신발·양말은 화면 밖이라 추가하지 않았으며 하의 다리·밑단 복원은 기록했다. 실제 기온·체감 수치는 근거가 없어 null로 유지한다.

- b126 Street 제품 매핑: `look/sunny-male-day-street.js`를 기본 `look/outfits.js` 바로 다음, 앱 초기화 전에 동기 적용한다. 기본 룩 파일은 그대로 보존했다. 앱에서 적용된 전체 수는 135룩·807아이템·기사 95룩이다. 보충 파일은 이번 5룩·35제품만 갱신하므로 점검 시 두 파일을 함께 읽는다.

### b127: Sunny male day Minimal 11–15

30 individual product JPGs (6 per look), 500x500 and <=50,000 bytes. Existing outfit IDs and 21 item IDs preserved; 9 observed items added. Korean, English and German product names and styling copy mapped. Base outfits.js: 793 items, 95 articles. With the unchanged Street supplement: 807 items, 100 articles. Other 130 runtime outfits unchanged. [Validation](sunny-male-day-minimal-validation.md).

### b128 · Sunny 남성 낮 Running

기존 `01-running.jpg`–`05-running.jpg`는 원위치에서 보존하고, 같은 이름의 디렉터리 안에 `products/`, `products.json`, `README.md`, `PROMPTS.md`를 추가함. `editorialImage`는 `../NN-running.jpg`를 참조하며 에디토리얼을 복제하지 않음. 기존 룩 ID 및 outer/top/bottom/shoes ID 20개 보존, 독립 품목 12개 추가. 복합 accessory 기록 5개는 저장 정보 호환을 위해 보존하되 카드에는 노출하지 않음. products.json의 3개 언어 문구를 앱에 그대로 연결. 반사 디테일과 숨은 부분의 복원 한계는 각 README와 JSON에 기록. 32장 모두 500×500 JPG ≤50,000 bytes 검증. 캘린더는 기존 dayPick 규칙으로 맑은 남성 러닝 제품을 사용함.

### b129 · Sunny 여성 Night Minimal 매핑

Sunny / Chilly / Female / 35+ / Night / Minimal 11–15: 제품 8/7/6/9/9종, 총 39개 독립 JPG(500×500, ≤50,000 bytes), ko/en/de 제품명·스타일링 설명·기사. 기존 원본 에디토리얼과 룩 ID·기존 24개 아이템 ID 유지, 새 아이템 ID 15개 추가. 최종 135룩·834아이템, 활성 참조 836, 기사 110룩. `look/sunny-female-night-minimal.js`가 기존 라이브러리 스크립트 뒤, 앱 초기화 전에 동기 적용된다. 큰 `look/outfits.js` 전체 교체가 자동 승인 검토 입력 한도를 초과하여, 기존 Street와 동일한 독립 보충 매핑 방식을 사용했다. 기본 라이브러리와 다른 세트는 변경하지 않는다.

appOutfitId는 `bn15-11-minimal-f`부터 `bn15-15-minimal-f`, sky clear / bands chilly / gender f / age 35 / time evening / style minimal. sourceEditorial은 기존 `../NN-minimal.jpg`, editorial.jpg는 바이트 동일 보관 사본이다. 13번 부츠의 앞코·굽·밑창·정확한 높이, 14번 가방 전체 형태·여밈·하드웨어, 15번 셔츠 몸판·칼라는 가려져 보수적으로 복원했다. 실제 소재 혼용률·브랜드·가격·구매 링크·정확한 기온은 확인되지 않아 null.


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


## b140 · Sunny 여성 밤 Street 06–10 (2026-10-23)

Sunny / Chilly / Female / 35+ / Night / Street 06–10: 5룩·42제품(7/7/8/10/10), 제품당 독립 JPG 1장. 모든 파일 500×500, 9,251–49,925 bytes, 따뜻한 아이보리 배경. ko/en/de 제품명·스타일링 설명·How to Wear·기사를 look/outfits.js에 직접 연결했다. 기존 appOutfitId 5개와 아이템 ID 21개 유지, 신규 단독 품목 ID 21개 추가. 다른 130룩·기존 보충 매핑과 날씨 선택 로직 보존. 864가지 선택 조건의 ID·순위·적합도 결과 불변. 원본 5장 SHA-256 시작/종료 동일. 실제 소재·혼용률·주얼리 금속·가려진 구조는 추정 복원, 정확한 기온·브랜드·가격·구매 링크는 null. 단일 품목이 아닌 초기 시안 11개는 제외하고 재생성했다.

[검증 기록](sunny-female-night-street-validation.md).


## b143 · Overcast / Chilly / Male / 35+ / Night / Streetwear

User-approved 5 editorials and 21 individual product assets (4/6/3/5/3), mapped through `look/overcast-male-night-street.js`. IDs `ocn-06-street-m`–`ocn-10-street-m`. Latest explicit user direction overrides the earlier ivory JPG rule for this set: 500×500 transparent WebP, preserving source alpha with no new background removal. All five outerwear heroes use the same transparent asset (no duplicate cutout). Original generation PNGs are not committed. Hidden areas are inferred; actual temperatures, brands and fibre composition remain unknown. Other looks and selection logic unchanged.

## b145 · Overcast 남성 낮 Street 두 번째 세트

`oc-chilly-m-35-day-street-01`–`05`(sky cloudy · chilly · m · 35 · 낮 · street). 아이템 ID = `<outfitId>.<products.json id>`(예 `…-street-02.01-bomber`), cat은 id 접미사로(jacket·bomber·quilt·varsity → outer, hoodie·knit·cardigan → top, henley·base → under, beanie → headwear, tote·messenger → bag). 같은 칸에 기존 `oc15-06…10-street-m`이 있어 ID·경로를 새로 만들었고 덮어쓰지 않음. 투명 제품이라 아이템 `cut` = 제품 WebP 자체(rembg 안 씀, b143과 같음), `bg`는 카드가 깔아 주는 아이보리 `#F3EFE8`, `hero`는 제목이 말하는 제품(CUTOUTS.md 규칙과 같은 결과). 기사 `intro` = 제작 측 룩 단위 howToWear(한국어 마스터 그대로; 04만 en/de를 5-1 이름 반복 때문에 살짝 고침), 제품별 `note`·`deck`·`pull`·`tip`은 에디토리얼을 보고 씀.



## b149 · Rain / Light / Chilly / Female / 35+ / Night / Street

Five user-approved editorials (red-bomber plant scene and burgundy headscarf final revisions) plus 27 independent transparent WebP products (5/6/6/4/6) mapped through `look/rain-female-night-street.js`, before `look/cutouts.js`. Fixed new IDs `bl-light-chilly-f-35-night-street-01`–`05`, with per-product ko/en/de how-to-wear and article/title/deck/pull/tip. `sky: rain`, `rain: light`, `bands: [chilly]`, `gender: f`, `time: evening`, `style: street`; existing selection rules and other looks preserved. Hero cutouts reuse the existing alpha WebP files and have HERO/CUTS rows. No source PNG, contact sheet or superseded editorial is committed. Actual temperature is unknown; 7°C is a creative styling input, not live weather. Hidden garment details are marked as inferred. User instructions: `look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/USAGE.md`. Validation: `design/rain-female-night-street-validation.md`.


## b150 · Rain / Light / Chilly / Female / 35+ / Night / Street — 2026-10-24 set

Second dated set for this category: five user-approved editorials plus 34 independent transparent WebP products (6/7/7/6/8) in `look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/01–05/`, mapped through `look/rain-female-night-street-20261024.js` before `look/cutouts.js`. New IDs `bl-light-chilly-f-35-night-street-20261024-01`–`05` (`sky: rain`, `rain: light`, `bands: [chilly]`, `gender: f`, `time: evening`, `style: street`); the b149 set and all other looks are unchanged, so this cell now draws 3 of 10. Supplied ko/en/de copy used verbatim. 7°C / 3°C are creative assumptions, not measurements. Hidden garment details, look 05 boots and opposite earrings are reconstructions. PNG masters stay in iCloud. Validation: `design/rain-female-night-street-20261024-validation.md`.

## b153 · Overcast / Chilly / Female / 35+ / Night — 2026-10-25 set (15 looks)

두 번째 날짜 세트. 러닝 01–05·스트리트 06–10·미니멀 11–15 에디토리얼 15장 + 독립 투명 WebP 제품 95개(29/32/34; 룩별 7,7,4,5,6 / 6,6,7,6,7 / 7,7,6,7,7), `look/berlin-complete/Overcast/Chilly/Female/35+/night/<running|street|minimal>-20261025/<NN>/`(폴더 번호 = ID 끝 번호). 룩 ID는 제작 측 ID 그대로 `oc-chilly-f35-night-<style>-20261025-NN`(`sky: cloudy`, `bands: [chilly]`, `gender: f`, `age: "35"`, `time: evening`, `style: run|street|minimal`), 아이템 `<룩 ID>.<제품 id>`(제품 순서 유지). 기존 `ofn-*` 15룩은 그대로 → 이 칸은 스타일마다 10룩 중 3개 랜덤. 분류 매핑: gloves → hands, hat·headband → headwear. 한국어 마스터(요약·인트로·팁·제품 이름)는 그대로; 영어 대문자 제목·인용구, en/de 문구, 제품별 ko/en/de 입는 법은 Claude가 에디토리얼과 `designDescriptionEn`을 보고 씀(제작 측 descriptionKo는 틀 문장이라 화면에 안 씀). 한국어 제목은 products.json `copy.title.ko`에 보존(앱 제목은 영어 대문자 문자열). 대표 컷은 각 룩의 아우터 WebP(`cutouts.js` HERO·CUTS 15행). products.json은 정리본(원본 경로·검수 영수증 없음, `casting.modelAppearanceAgeRange: [25, 28]`, 복원 근거 필드 유지). [검증](overcast-female-night-20261025-validation.md).

## b157 · Rain / Normal / Chilly / Female / 35+ / Day / Running — 2026-10-25 set (5 looks)

첫 보통 비 세트. 에디토리얼 5장 + 독립 투명 WebP 제품 28개(5/6/6/5/6), `look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/running-20261025/<01–05>/`, 보충 파일 `look/rain-normal-female-day-running-20261025.js`. 룩 `rn-chilly-f35-day-run-20261025-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: f`, `age: "35"`, `style: run`, 낮 = `time` 없음). 01 코발트 셸 · 02 그레이 셸 + 캡 · 03 올리브 셸 + 스포츠 워치 · 04 코럴 셸 · 05 네이비 셸 + 플럼 타이츠 + 차콜 헤드밴드. 장갑·신발 한 켤레 = 제품 1개, 양말 없음. 대표 컷 = 아우터 WebP(HERO·CUTS 5행). [검증](rain-normal-female-day-running-20261025-validation.md).

## b158 · Rain / Light / Chilly / Male / 35+ / Night / Running — 2026-10-25 set (5 looks, local)

에디토리얼 5장(01–03 700×1050, 04–05 800×1200, 모두 2:3) + 독립 투명 WebP 제품 30개(7/6/7/5/5), `look/berlin-complete/Rain/Light/Chilly/Male/35+/night/running-20261025/<01–05>/`, 보충 파일 `look/rain-light-male-night-running-20261025.js`. 룩 `rl-chilly-m35-night-run-20261025-NN`(`sky: rain`, `rain: light`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: run`, `time: evening`). 01 차콜 셸 · 02 코발트 셸 · 03 올리브 셸 · 04 웜 그레이 셸 + 플럼 이너 · 05 번트 오렌지 셸 + 네이비 팬츠. 양말은 01·03만, 04 신발·05 이너는 안 보여 없음, 04 물병은 장면 소품이라 제품 아님. 분류 매핑 headband → headwear(products.json `appCategory`, 제작 측 `category` 보존). 대표 컷은 b134 제목 단어 규칙: 04 → 플럼 이너 `02-top`, 나머지 → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 숫자 기온 없음(`temperatureC: null` 의도). [검증](rain-light-male-night-running-20261025-validation.md).

## b159 · Rain / Light / Chilly / Female / 35+ / Day / Running — 2026-10-25 set (5 looks)

에디토리얼 5장(01 900×1350, 02–05 1024×1536, 모두 2:3) + 독립 투명 WebP 제품 23개(5/5/3/5/5), `look/berlin-complete/Rain/Light/Chilly/Female/35+/day/running-20261025/<01–05>/`, 보충 파일 `look/rain-light-female-day-running-20261025.js`. 룩 `rl-chilly-f35-day-run-20261025-NN`(`sky: rain`, `rain: light`, `bands: [chilly]`, `gender: f`, `age: "35"`, `style: run`, 낮 = `time` 없음). 01 슬레이트 블루 셸 · 02 세이지 셸 + 아이보리 이너 · 03 코발트 셸(발이 잘려 아우터·이너·하의 3개) · 04 웜 그레이 셸 + 버건디 롱슬리브 + 블랙 스포츠 워치(`watch`, 양말 없음) · 05 코럴 셸 + 쿼터 양말. 신발·양말 한 켤레 = 제품 1개. 대표 컷은 b134 제목 단어 규칙: 04 → 버건디 `02-top`, 나머지 → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 모델 외관 25–28세, 12°C / 체감 7°C는 제작 가정(`stylingAssumption`), 앱 화면에 숫자 기온 없음. [검증](rain-light-female-day-running-20261025-validation.md).

## b160 · Rain / Light / Chilly / Female / 35+ / Night / Running — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536, 2:3) + 독립 투명 WebP 제품 33개(7/5/7/7/7), `look/berlin-complete/Rain/Light/Chilly/Female/35+/night/running-20261026/<01–05>/`, 보충 파일 `look/rain-light-female-night-running-20261026.js`. 룩 `rl-chilly-f35-night-run-20261026-NN`(`sky: rain`, `rain: light`, `bands: [chilly]`, `gender: f`, `age: "35"`, `style: run`, `time: evening`). 01 딥 페트롤 셸 · 02 스톤 그레이 셸 + 플럼 하이넥 · 03 버밀리언 셸 · 04 모스 그린 셸 + 에스프레소 타이츠 · 05 오버진 셸 + 애시드 옐로 이너. 다섯 룩 모두 헤드밴드(→ `headwear`)와 장갑 한 켤레(→ `hands`), products.json에 제작 측 `category` + `appCategory`. 02는 상반신 크롭이라 양말·신발 없음(5개), 04 양말은 크루 길이(사진대로), 05 양말은 쿼터. 대표 컷은 b134 제목 단어 규칙: 02 PLUM, SET RIGHT → 플럼 하이넥 `02-top`(같은 색 헤드밴드보다 큰 옷), 나머지 → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 모델 외관 25–28세, 숫자 기온 없음. 가려진 부분은 룩별 `reconstructionSummary`와 제품별 `detail`·`reconstruction`에 기록. [검증](rain-light-female-night-running-20261026-validation.md).

## b161 · Rain / Light / Chilly / Male / 35+ / Night / Street — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536, 2:3, 04는 승인된 머플러 수정본) + 독립 투명 WebP 제품 25개(5/5/5/5/5), `look/berlin-complete/Rain/Light/Chilly/Male/35+/night/street/<01–05>/`, 보충 파일 `look/rain-light-male-night-street-20261026.js`. 룩 `rl-chilly-m35-night-street-20261026-NN`(`sky: rain`, `rain: light`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: street`, `time: evening`). 01 차콜 파카 + 오트밀 니트 · 02 스톤 재킷 + 초콜릿 후디 + 블랙 비니 · 03 코발트 재킷 + 차콜 플리스 · 04 올리브 파카 + 그레이 프린지 머플러 · 05 번트 오렌지 재킷 + 딥 네이비 하이넥. 제작 측 `head` → `headwear`, `neck`(머플러) → `scarf`(products.json에 제작 측 `category` + `appCategory`; b161 첫 반영의 `accessory`는 상위 작업의 잘못된 지시였고 b162에서 고침). 대표 컷은 b134 제목 단어 규칙: 다섯 제목 모두 아우터 색(CHARCOAL · STONE · COBALT · OLIVE · BURNT ORANGE)을 말하므로 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 모델 외관 28–32세, 숫자 기온 없음. 가려진 부분은 룩별 `reconstructionSummary`와 제품별 `reconstruction`. [검증](rain-light-male-night-street-20261026-validation.md).

## b163 · Rain / Normal / Chilly / Male / 35+ / Day / Minimal — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536 JPG) + 독립 투명 WebP 제품 24개(6/4/5/4/5), `look/berlin-complete/Rain/Normal/Chilly/Male/35+/day/minimal/<01–05>/`, 보충 파일 `look/rain-normal-male-day-minimal-20261026.js`. 룩 `rn-chilly-m35-day-minimal-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: minimal`, 낮 = `time` 없음). 01 차콜 맥코트 + 라이트 그레이 니트 + 첼시 부츠 + 크로스백 + 장우산 · 02 스톤 베이지 발마칸 + 에스프레소 니트 + 장우산 · 03 잉크 네이비 후드 코트 + 코발트 니트 + 크로스백 + 곡선 손잡이 우산 · 04 딥 올리브 후드 코트 + 오트밀 모크넥 + 블랙 슈즈 · 05 블랙 벨티드 트렌치 + 러스트 머플러 + 크림 니트(소매만 보여 추정) + 캔버스 토트. 분류: 코트 → `outer`, 니트 → `top`, 팬츠 → `bottom`, 크로스백·토트 → `bag`, 머플러 → `scarf`, 우산 → `accessory`(앱에 우산 분류 없음; products.json에 제작 측 `category` + `appCategory`). 파일 이름은 `NN-<앱 분류>.webp`(바이트 그대로, 제작 측 이름은 `deliveredImage`). 장면 소품(02 텀블러 · 03 열쇠 · 05 자동차·장바구니 채소)은 제품 아님, 크롭으로 안 보이는 신발·양말은 넣지 않음. 대표 컷은 b134 제목 단어 규칙: 03 COBALT → 코발트 니트 `02-top`, 05 RUST → 러스트 머플러 `02-scarf`, 01 CHARCOAL · 02 BEIGE · 04 OLIVE → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행, `lum`은 이번엔 계산 못 해 null — b137부터 앱이 안 씀). 모델 외관 28–32세, 숫자 기온 없음. [검증](rain-normal-male-day-minimal-20261026-validation.md).

## b164 · Rain / Normal / Chilly / Male / 35+ / Day / Street — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536 JPG) + 독립 투명 WebP 제품 23개(5/4/5/4/5), `look/berlin-complete/Rain/Normal/Chilly/Male/35+/day/street/<01–05>/`, 보충 파일 `look/rain-normal-male-day-street-20261026.js`. 룩 `rn-chilly-m35-day-street-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: street`, 낮 = `time` 없음). 01 차콜 파카 + 오트밀 플리스 + 네이비 스웨트셔츠 + 카고 + 레이스업 부츠 · 02 코발트 재킷 + 차콜 스카프 + 와이드 팬츠 + 크로스보디 · 03 러스트 재킷 + 차콜 오버셔츠 + 크림 니트 + 브라운 팬츠 + 우산 · 04 올리브 셸 + 버건디 후디 + 블랙 진 + 청키 부츠 · 05 네이비 셸 + 머스터드 플리스 + 그레이 스웨트셔츠 + 네이비 비니 + 그레이 팬츠. 분류: 제작 측 `midlayer`(플리스 집업·오버셔츠) → `top`, 그 안에 입은 제작 측 `top`(스웨트셔츠·니트) → `under`(카드 라벨 Top/Under로 겹침 순서가 보임; 04 후디는 미들레이어가 없어 `top`), `hat` → `headwear`, `umbrella` → `accessory`. 파일 이름은 `NN-<앱 분류>.webp`(바이트 그대로, 제작 측 이름은 `deliveredImage`). 입는 법은 상위 작업이 확정한 수정 한국어 마스터(`sourceHowToWear` = 제작 측 틀 문장 원문). 대표 컷은 b134 제목 단어 규칙: 05 MUSTARD → 머스터드 플리스 `02-top`, 나머지 → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 장면 소품(04 자전거·자물쇠, 05 종이 장바구니)은 제품 아님. 모델 외관 28–32세, 숫자 기온 없음. [검증](rain-normal-male-day-street-20261026-validation.md).

## b166 · Rain / Normal / Chilly / Female / 35+ / Day / Street — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536 JPG) + 독립 투명 WebP 제품 25개(5/4/6/5/5), `look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/street/<01–05>/`, 보충 파일 `look/rain-normal-female-day-street-20261026.js`. 룩 `rn-chilly-f35-day-street-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: f`, `age: "35"`, `style: street`, 낮 = `time` 없음). 01 스톤 베이지 후드 레인코트 + 오트밀 터틀넥 + 차콜 와이드 팬츠 + 러그솔 앵클부츠 + 숄더백 · 02 코발트 레인 재킷 + 그레이 터틀넥 + 테크니컬 팬츠 + 크로스바디 · 03 러스트 레인 재킷 + 차콜 패딩 미드레이어 + 크림 니트 + 다크 브라운 와이드 팬츠 + 블랙 우산 + 골드 미니 후프 · 04 올리브 필드 재킷 + 버건디 후디 + 블랙 루즈 진 + 앵클부츠 + 백팩 · 05 네이비 레인코트 + 머스터드 플리스 + 슬레이트 니트 + 그레이 팬츠 + 네이비 비니. 분류: 제작 측 `midlayer` → `top`, 그 안 `top` → `under`(03·05), `umbrella` → `accessory`, `jewelry` → `jewelry`, `hat` → `headwear`. 파일 이름은 `NN-<앱 분류>.webp`(바이트 그대로, 제작 측 이름은 `deliveredImage`). 한국어 마스터: 제목 → `deck.ko`(앱 제목은 영어 대문자라 한국어 제목을 캡션으로), 인트로 → `intro.ko`, 착용 가이드 → `tip.ko`, 제품 이름 그대로. 제작 측 제품 설명은 제품마다 같은 복원 틀 문장이라 입는 법은 에디토리얼 보고 ko/en/de 새로 씀(`sourceDescription`에 원문). 대표 컷은 b134 제목 단어 규칙: 05 MUSTARD → 머스터드 플리스 `02-top`, 나머지(BEIGE·COBALT·RUST·OLIVE) → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 장면 소품(02 열쇠, 04 자전거·자물쇠, 05 종이 장바구니)은 제품 아님. 타깃 여성 30–44세, 모델 외관 25–28세, 숫자 기온 없음. [검증](rain-normal-female-day-street-20261026-validation.md).

## b167 · Rain / Normal / Chilly / Male / 35+ / Night / Minimal — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536 JPG) + 독립 투명 WebP 제품 21개(5/4/4/4/4), `look/berlin-complete/Rain/Normal/Chilly/Male/35+/night/minimal/<01–05>/`, 보충 파일 `look/rain-normal-male-night-minimal-20261026.js`. 룩 `rn-chilly-m35-night-min-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: minimal`, `time: evening`). 01 차콜 맥코트 + 그레이 크루넥 + 블랙 팬츠 + 첼시 부츠 + 가죽 장갑 · 02 스톤 베이지 발마칸 + 에스프레소 니트 + 다크 브라운 머플러 + 토프 팬츠 · 03 잉크 네이비 후드 레인코트 + 코발트 니트 + 차콜 팬츠 + 크로스바디 · 04 딥 올리브 후드 코트 + 오트밀 목넥 + 다크 팬츠 + 앵클 부츠 · 05 블랙 레인 트렌치 + 러스트 머플러 + 크림 니트 + 블랙 팬츠. 분류: 제작 측 `gloves` → `hands`(나머지는 앱 분류 그대로). 파일 이름은 `NN-<앱 분류>.webp`(바이트 그대로, 제작 측 이름은 `deliveredImage`). 한국어 마스터(제목·캡션·인트로·팁·제품 이름·제품별 입는 법) 그대로, 제작 측 en/de도 그대로 쓰되 02 인트로(제품 나열)와 독일어 문법만 고침(원문 `copy.sourceCopy`·`sourceHowToWear`). 영어 대문자 제목은 제작 측 제안 그대로, `pull`은 장면 보고 새로 씀. 대표 컷은 b134 제목 단어 규칙: 03 COBALT → 코발트 니트 `02-top`, 05 RUST → 러스트 머플러 `02-scarf`, 나머지(CHARCOAL·BEIGE·OLIVE) → 아우터, 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 장면 소품(우산, 02 텀블러, 03 열쇠, 05 자동차·장바구니)은 제품 아님. 모델 외관 28–32세, 숫자 기온 없음. [검증](rain-normal-male-night-minimal-20261026-validation.md).

## b168 · Rain / Normal / Chilly / Female / 35+ / Day / Minimal — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536 JPG, 01만 q72) + 독립 투명 WebP 제품 23개(5/5/4/4/5), `look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/minimal/<01–05>/`, 보충 파일 `look/rain-normal-female-day-minimal-20261026.js`. 룩 `rn-chilly-f35-day-minimal-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: f`, `age: "35"`, `style: minimal`, 낮 = `time` 없음). 01 스톤 베이지 벨티드 레인코트 + 아이보리 터틀넥 + 차콜 울 팬츠 + 첼시 레인부츠 + 숄더백 · 02 차콜 후드 레인코트 + 오트밀 케이블 터틀넥 + 블랙 팬츠 + 옥스블러드 토트 + 아이보리 니트 장갑 · 03 코발트 레인코트 + 크림 터틀넥 + 블랙 울 팬츠 + 숄더백 · 04 딥 올리브 후드 레인코트 + 차콜 멜란지 니트 + 토프 머플러 + 토터스쉘 안경 · 05 네이비 레인코트 + 번트 오렌지 니트 + 그래파이트 팬츠 + 토프 프린지 머플러 + 크로스바디. 분류: 제작 측 `gloves` → `hands`, `glasses` → `eyewear`(파일 이름 `NN-<앱 분류>.webp`, 바이트 그대로). 한국어 마스터·en 그대로, de는 3줄만 고침(검증 기록). 대표 컷 = 다섯 룩 모두 아우터(제목이 코트 색), 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 장면 소품(우산, 빵, 열쇠, 안경 닦이 천, 자동차)은 제품 아님. 모델 외관 25–28세, 숫자 기온 없음. [검증](rain-normal-female-day-minimal-20261026-validation.md).

## b169 · Rain / Normal / Chilly / Male / 35+ / Day / Running — 2026-10-26 set (5 looks)

에디토리얼 5장(모두 1024×1536 JPG ≤292,394 B) + 독립 투명 WebP 제품 27개(5/5/5/6/6, 500×500, ≤49,264 B), `look/berlin-complete/Rain/Normal/Chilly/Male/35+/day/running/<01–05>/`, 보충 파일 `look/rain-normal-male-day-running-20261026.js`. 룩 `rn-chilly-m35-day-run-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: run`, 낮 = `time` 없음). 01 슬레이트 블루 후드 셸 + 차콜 집넥 이너 + 블랙 반사 타이츠 + 라이트 그레이 양말 + 실버 메시 러닝화 · 02 세이지 셸 + 아이보리 크루넥 이너 + 차콜 타이츠 + 그레이 양말 + 오프화이트 러닝화 · 03 코발트 반사 셸 + 다크 차콜 이너 + 블랙 반사 타이츠 + 다크 그레이 양말 + 블랙 그레이 러닝화 · 04 웜 그레이 셸 + 버건디 이너 + 에스프레소 타이츠 + 차콜 양말 + 그레이 러닝화 + 블랙 러닝 워치 · 05 번트 오렌지 반사 셸 + 그래파이트 이너(완전히 가려져 추정) + 블랙 반사 타이츠 + 그레이 양말 + 다크 그레이 러닝화 + 네이비 캡. 분류: 제작 측 `cap` → `headwear`(파일 이름 `NN-<앱 분류>.webp`, 바이트 그대로, 제작 측 이름은 `deliveredImage`). 한국어 마스터(제목 → `deck.ko`, 룩 `howToWear` → `intro.ko`, 제품 이름) 그대로, en/de 제작 측 문구 그대로(05 인트로 독일어 `orange` → `orangefarbene` 한 곳만 고침, 원문 `copy.sourceCopy`). 영어 제목 = 제작 측 영어 제목 대문자. 제작 측 제품 설명은 모든 제품이 같은 복원 틀 문장이라 5-1장 기준 미달 → 에디토리얼을 보고 제품별 ko/en/de 입는 법을 새로 씀(`sourceDescription`에 원문). `pull`은 장면 보고 새로 씀, 팁은 배치에 없어 넣지 않음. 대표 컷 = 다섯 룩 모두 셸(05 ORANGE는 셸 색, 나머지는 맞는 색 단어 없음), 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 장면 소품(자동차·자전거·나뭇잎)은 제품 아님, 05 손목의 검은 밴드는 제품으로 만들지 않음. 모델 외관 28–32세, 숫자 기온 없음. [검증](rain-normal-male-day-running-20261026-validation.md).

## b170 · Rain / Normal / Chilly / Male / 35+ / Night / Running — 2026-10-26 set (5 looks)

에디토리얼 5장(01·02·04 960×1440, 03·05 1024×1536, 모두 2:3 JPG ≤282,205 B) + 독립 투명 WebP 제품 36개(7/7/7/8/7, 500×500, ≤49,520 B), `look/berlin-complete/Rain/Normal/Chilly/Male/35+/night/running/<01–05>/`, 보충 파일 `look/rain-normal-male-night-running-20261026.js`. 룩 `rn-chilly-m35-night-run-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: run`, `time: evening`). 01 차콜 셸 + 블랙 보온 베이스 + 블랙 롱 타이츠 + 블랙 양말 + 차콜 러닝화 + 블랙 장갑 + 블랙 이어 헤드밴드(웅덩이 옆 사이드 스텝) · 02 코발트 셸 + 블랙 하이넥 + 블랙 슬림 러닝 팬츠 + 다크 양말 + 블랙·크림 러닝화 + 반사 장갑 + 차콜 비니(비니 고쳐 쓰기) · 03 그레이 셸 + 블랙 모크넥 + 네이비 타이츠 + 차콜 양말 + 그레이 메시 러닝화 + 차콜 장갑 + 블랙 헤드밴드(계단에서 끈 다시 묶기) · 04 올리브 반사 셸 + 블랙 넥 베이스 + 블랙 테이퍼드 팬츠 + 블랙 양말 + 블랙 러닝화 + 차콜 반사 장갑 + 차콜 이어 워머 + 블랙 러닝 워치(멈춰서 확인) · 05 오렌지 셸(뒷모습) + 차콜 보온 베이스 + 차콜 타이츠 + 블랙 양말 + 차콜·실버 러닝화 + 블랙 장갑 + 블랙 플리스 헤드밴드. 아이템 ID `<룩 ID>.<제품 id>`, 파일 이름 제작 측 그대로. 분류: `gloves` → `hands`, `headband`·`beanie` → `headwear`, 이너 `under`, `watch`. 문구는 한국어 마스터·제작 측 en/de 그대로(독일어 2곳만 고침), `pull`·`tip`은 다섯 룩 같음, 제품 입는 법은 분류별 같은 문장(5-1장 예외, 사용자 지시로 보존). 대표 컷 = 다섯 룩 모두 셸(제목 첫 색 단어), 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 01·05 이너, 04·05 양말·신발, 05 셸 앞면은 추정 복원. 모델 외관 28–32세, 숫자 기온 없음. [검증](rain-normal-male-night-running-20261026-validation.md).

## b171 · Rain / Normal / Chilly / Male / 35+ / Night / Street — 2026-10-26 set (5 looks)

에디토리얼 5장(01 900×1350, 02 960×1440, 03–05 1024×1536, 모두 2:3 JPG ≤280,841 B, 업스케일 없음) + 독립 투명 WebP 제품 21개(5/4/4/3/5, 500×500, ≤48,696 B), `look/berlin-complete/Rain/Normal/Chilly/Male/35+/night/street/<01–05>/`, 보충 파일 `look/rain-normal-male-night-street-20261026.js`. 룩 `rn-chilly-m35-night-street-20261026-NN`(`sky: rain`, `rain: normal`, `bands: [chilly]`, `gender: m`, `age: "35"`, `style: street`, `time: evening`). 01 차콜 후드 파카 + 오트밀 플리스 집업 + 네이비 크루넥 + 차콜 카고 + 블랙 레이스업 부츠(웅덩이 돌아가기) · 02 코발트 후드 아노락 + 그레이 터틀넥 + 블랙 와이드 팬츠 + 블랙 크로스바디(출입구에서 열쇠 찾기) · 03 러스트 레인 재킷 + 차콜 오버셔츠 + 크림 크루넥 니트 + 다크 브라운 팬츠(바람에 기운 우산) · 04 올리브 필드 셸 + 버건디 후디 + 블랙 릴랙스 진(자전거 자물쇠) · 05 네이비 후드 셸 + 머스터드 플리스 + 슬레이트 크루넥 + 그레이 팬츠 + 네이비 비니(장보기 뒤 후드). 아이템 ID `<룩 ID>.<제품 id>`, 파일 이름 `<제품 id>.webp`(바이트 그대로, 제작 측 이름 `NN-<제품 id>.webp`는 `deliveredImage`). 분류: 제작 측 `midlayer`(플리스·오버셔츠) → `top`, 그 안의 스웨트셔츠·니트 → `under`(01·03·05), 02 터틀넥·04 후디 `top`, `hat` → `headwear`, `bag`. 문구: 한국어 마스터(KOREAN_MASTER_FINAL·COPY_FINAL_v2: 제목·캡션·인트로·팁·제품 이름·제품별 입는 법)와 검토된 en/de 그대로, 단 03·04·05 인트로의 제작 메모 문장(“우산은 장면 소품…”, “…형태로 복원했습니다”, “…장면 소품입니다/으로만 남깁니다”)은 화면 문구에서 빼고(나머지 문장은 바이트 그대로, 원문 `copy.sourceIntro`), 독일어 3곳(03 인트로 `Dunkelbraune Hosen führen` → `Die dunkelbraune Hose führt`, 02·03 이너 입는 법 `stauen` → `auftragen`, 원문 `sourceIntro`·`sourceHowToWear`)만 다듬음. 앱 제목 = 영어 대문자 제목(CHARCOAL, ONE STEP AROUND · COBALT, KEYS SOMEWHERE · RUST UNDER THE UMBRELLA · OLIVE AT THE BIKE LOCK · NAVY, MUSTARD, HOMEWARD), `pull` = 제작 측 영어 인용구. 제품별 입는 법 21개 모두 다름. 대표 컷 = 다섯 룩 모두 아우터(제목 첫 색 단어; 01 CHARCOAL 카고·05 NAVY 비니도 맞지만 규칙 3), 컷 = 그 제품 WebP 자체(HERO·CUTS 5행). 장면 소품(03 우산, 04 자전거·열쇠, 05 종이봉투·식료품)은 제품 아님, 01만 신발이 보여 부츠 하나뿐(다른 룩 신발·양말 없음). 04 후드는 버건디 후디 것(올리브 셸엔 후드 없음). 모델 외관 28–32세, 숫자 기온 없음. [검증](rain-normal-male-night-street-20261026-validation.md).

## b173 · 글로벌 맥락 테스트 — Clear / Pleasant / Female / 35+ / Day / Street (2026-10-27, 1 look)

- 배치 `global-context-coastal-20261027`(READY.json 19개 SHA-256 일치). 에디토리얼 1장(1024×1536 JPG 264,708 B) + 독립 투명 WebP 제품 3개(500×500, 26,932–32,656 B) 바이트 그대로 → `look/global/global-context-coastal-20261027/gc-coastal-pleasant-f35-day-street-20261027-01/`, 보충 파일 `look/global-coastal-20261027.js`(cutouts.js 앞), 맥락 어댑터 `look/global-context.js`(마지막).
- 룩 `gc-coastal-pleasant-f35-day-street-20261027-01`(clear · pleasant · f · 35 · street, 낮이라 `time` 없음, `visualRegion: warm-coastal-urban`, `humidityContext: dry`, `contextReview: reviewed`), 아이템 `.01-top`·`.02-bottom`·`.03-bag`. 대표 컷 = 코발트 셔츠 WebP 자체.
- 23°C / 체감 22°C · dry는 생성 가정(측정값 아님). 모델 외관 25–28, 타깃 30–44, 저장 35+. 사용자는 테스트 세트 제작·배포를 승인했고 이미지별 육안 승인은 하지 않음(상위 작업 QA). [검증](global-context-coastal-20261027-validation.md).

## b176 · 해안 · Clear / Pleasant / Female / 35+ / Day / Street — 2026-10-27 세트 (5 looks)

- 배치 `coastal-sunny-pleasant-female-day-street-20261027`(READY.json 115개 SHA-256 일치, 사용자가 sunglasses-v2 에디토리얼 5장 승인). 에디토리얼 5장(1024×1536 JPG) + 독립 투명 WebP 제품 34개(8/8/7/5/6, 500×500, ≤47,306 B) 바이트 그대로 → `look/global/coastal-sunny-pleasant-female-day-street-20261027/<룩 ID>/editorial.jpg`·`products/<제품 id>.webp`(한 룩에 같은 분류가 여러 개라 `NN-<분류>` 대신 제작 측 이름 그대로), 보충 파일 `look/coastal-sunny-pleasant-female-day-street-20261027.js`.
- 룩 `coastal-pleasant-f35-day-street-20261027-01`–`05`(clear · pleasant · f · 35 · street, 낮 = `time` 없음, `visualRegion: warm-coastal-urban`, `humidityContext: unknown`, reviewed). 01 에크루 오버셔츠 + 블랙 탱크 + 차콜 카고(계단에서 신발 끈) · 02 코발트 셔츠 + 화이트 탱크 + 샌드 버뮤다(종이봉투 받쳐 들기) · 03 블랙 봄버 + 아이보리 티 + 인디고 와이드 진 + 벨트(가방 고리에 걸린 티셔츠) · 04 레드 티 + 네이비 와이드 팬츠(벤치에서 토트 끈) · 05 세이지 반소매 셔츠 + 크림 팬츠(문 지나며 돌아봄). 선글라스 01·03 착용, 02·04 머리 위, 05 손.
- 아이템 ID = 제작 측 `appItemId` `<룩 ID>.<제품 id>`. 분류: 선글라스 `eyewear`, 귀걸이·목걸이 `jewelry`, 양말 `socks`, 버뮤다 `shorts`, 벨트 `accessory`. 대표 컷 = 제목 첫 색의 옷 WebP 자체.
- 도시·숫자 기온·습도%·바람 null. 습도 unknown이라 `?humidity=` 명시값이 있으면 같은 칸의 b173 dry 룩과 순위만 달라짐. [검증](coastal-sunny-pleasant-female-day-street-20261027-validation.md).

## b177 · 해안 · Clear / Pleasant / Male / 35+ / Day / Street — 2026-10-27 세트 (5 looks)

- 배치 `coastal-warm-male-day-street-20261027`(READY.json 78개 SHA-256 일치, 사용자가 에디토리얼 5장 승인). 에디토리얼 5장(1024×1536 JPG ≤294,452 B) + 독립 투명 WebP 제품 22개(4/5/5/5/3, 500×500, ≤49,074 B) 바이트 그대로 → `look/global/coastal-warm-male-day-street-20261027/<룩 ID>/editorial.jpg`·`products/<제품 id>.webp`, 보충 파일 `look/coastal-warm-male-day-street-20261027.js`.
- 룩 `coastal-pleasant-m35-day-street-20261027-01`–`05`(clear · pleasant · m · 35 · street, 낮 = `time` 없음, `visualRegion: warm-coastal-urban`, `humidityContext: unknown`, reviewed). 01 에크루 텍스처 셔츠 + 차콜 쇼츠 + 피셔맨 샌들(카페에서 샴페인) · 02 코발트 티 + 스톤 쇼츠 + 블루 캡(항구 계단에서 맥주) · 03 테라코타 셔츠(앞 열고) + 화이트 탱크 + 네이비 팬츠 + 밀짚 버킷햇(라임 칵테일 젓기) · 04 번트 오렌지 메쉬 폴로 + 크림 와이드 팬츠 + 올리브 캡(캡 챙 잡고 걷기) · 05 세이지 셔츠 + 워시드 블랙 쇼츠(벤치에서 스프리츠). 선글라스 01–04 착용, 05 머리 위. 음료·잔은 소품.
- 아이템 ID `<룩 ID>.<제품 id>`(22개 모두 새 ID). 분류: 셔츠·티·폴로 `top`(03 셔츠는 탱크 위에 열어 입어 `outer`, 탱크 `top` — b176 02와 같은 방식), 쇼츠 `shorts`, 팬츠 `bottom`, 샌들·플립플롭 `shoes`, 캡·햇 `headwear`, 선글라스 `eyewear`. 대표 컷: 제목에 색 단어가 없어 아우터(03 셔츠) 또는 주 상의(01 셔츠 · 02 티 · 04 폴로 · 05 셔츠) WebP 자체.
- 도시·습도%·바람 null, 24–25°C / 체감 23°C는 사용자가 준 장면 가정(측정·실시간 아님, products.json `weather.temperatureRangeC`). 모델 외관 28–32, 저장 35+. 03 신발·05 신발은 크롭 밖이라 없음, 03 팬츠 아래 길이·뒤판은 추정 복원. [검증](coastal-warm-male-day-street-20261027-validation.md).

## b178 · 해안 · Clear / Pleasant / Male / 35+ / Evening / Street — 2026-10-27 세트 (5 looks)

- 배치 `coastal-warm-male-evening-street-20261027`(READY.json 78개 SHA-256 일치, 사용자가 해 진 뒤 에디토리얼 5장 승인, 2026-10-28). 에디토리얼 5장(1024×1536 JPG ≤290,787 B) + 독립 투명 WebP 제품 20개(4/3/4/5/4, 500×500, ≤48,690 B) 바이트 그대로 → `look/global/coastal-warm-male-evening-street-20261027/<룩 ID>/editorial.jpg`·`products/<제품 id>.webp`, 보충 파일 `look/coastal-warm-male-evening-street-20261027.js`.
- 룩 `coastal-pleasant-m35-evening-street-20261027-01`–`05`(clear · pleasant · m · 35 · street · **`time: "evening"`**, 저장 분류 night, `visualRegion: warm-coastal-urban`, `humidityContext: unknown`, reviewed). 01 블랙 셔츠 + 에크루 와이드 쇼츠 + 블랙 피셔맨 샌들(와인 바 샴페인) · 02 블루 셔츠 + 워시드 차콜 팬츠 + 샌드 캡(산책로 돌담 맥주) · 03 번트 레드 티 + 스톤 카고 쇼츠 + 블랙 플립플롭(돌계단에서 라임 짜기) · 04 페일 옐로 오픈 니트 폴로 + 네이비 쇼츠 + 밀짚 모자 + 브라운 플립플롭(흰 벽 앞에서 돌아봄) · 05 세이지·아이보리 줄무늬 셔츠(앞 열고) + 아이보리 립 탱크 + 다크 네이비 팬츠(벤치 스프리츠). 선글라스 01·03 목에 걸침, 04 손, 05 머리 위, 02 없음. 음료·잔·라임은 소품.
- 아이템 ID `<룩 ID>.<제품 id>`(20개 모두 새 ID). 분류: 셔츠·티·폴로 `top`(05 셔츠는 탱크 위에 열어 `outer`, 탱크 `top`), 쇼츠 `shorts`, 팬츠 `bottom`, 샌들·플립플롭 `shoes`, 캡·모자 `headwear`, 선글라스 `eyewear`. 대표 컷 = 주 상의 WebP 자체(02는 제목 BLUE = 셔츠).
- 저녁 룩이라 해안 지역 맑은(0–2) 저녁에만 나오고, 낮 해안 세트(b176·b177)·캘린더(낮 룩만 씀)는 그대로. 도시·습도%·바람 null, 24–25°C / 체감 23°C는 사용자 장면 가정(측정·실시간 아님). 모델 외관 28–32, 저장 35+. 02·05 신발은 크롭 밖이라 없음, 02·05 팬츠 길이·뒤판과 04 폴로 앞판은 추정 복원. [검증](coastal-warm-male-evening-street-20261027-validation.md).

## b179 · 해안 · Overcast / Cool / Female / 35+ / Day / Street — 2026-10-28 세트 (5 looks)

- 배치 `coastal-overcast-cool-female-day-street-20261028`(READY.json 154개 SHA-256 일치, 사용자가 최신 에디토리얼 5장 승인 — 02 꽃다발 수정본·04 앉아서 지도 보는 수정본, 2026-10-28). 에디토리얼 5장(1024×1536 JPG ≤288,341 B) + 독립 투명 WebP 제품 28개(5/6/5/6/6, 500×500, ≤49,240 B) 바이트 그대로 → `look/global/coastal-overcast-cool-female-day-street-20261028/<룩 ID>/editorial.jpg`·`products/<제품 id>.webp`, 보충 파일 `look/coastal-overcast-cool-female-day-street-20261028.js`(b178 모듈 뒤·cutouts.js 앞).
- 룩 `coastal-cool-f35-day-street-20261028-01`–`05`(**cloudy**(제작 측 condition `overcast`는 설명값) · **cool** · f · 35 · street · 낮 = `time` 없음, `visualRegion: warm-coastal-urban`, `humidityContext: unknown`, reviewed). 01 올리브 필드 재킷 + 오트밀 니트 + 차콜 와이드 데님 + 오프화이트 스니커즈 + 버건디 크로스백(카페 나서며 커피·종이봉투) · 02 코발트 윈드브레이커 + 크림 니트 + 네이비 와이드 팬츠 + 그레이 스니커즈 + 브라운 숄더백 + 골드 후프(꽃다발 정돈) · 03 러스트 초어 재킷 + 아이보리 니트 + 라이트 블루 데님 + 탄 스니커즈 + 캔버스 토트(오렌지 받치기) · 04 샌드 봄버 + 플럼 니트 + 차콜 데님 + 크림·베이지 스니커즈 + 다크 브라운 숄더백 + 골드 후프(돌계단에서 지도) · 05 네이비 크롭 재킷 + 크림·네이비 줄무늬 니트 + 스톤 팬츠 + 버건디 스니커즈(크림 끈 v2) + 탄 스웨이드 토트 + 골드 후프(현관 앞 열쇠). 컵·종이봉투·꽃·오렌지/채소·지도·열쇠는 소품.
- 아이템 ID `<룩 ID>.<제품 id>`(28개 모두 새 ID). 분류: 재킷·봄버 `outer`, 니트 `top`, 데님·팬츠 `bottom`, 스니커즈 `shoes`, 크로스백·숄더백·토트 `bag`(제작 측 `accessory`는 `sourceAppCategory`), 후프 `jewelry`. 대표 컷 = 아우터 WebP 자체(04 봄버, 나머지 재킷; 제목 첫 색 단어 02 COBALT도 재킷).
- 체감 16°C는 제작 측 장면 가정(측정·실시간 아님), 기온·습도·바람·도시 null. 모델 외관 28–32(승인된 생성 프롬프트 그대로, 새 25–28 기준을 소급 적용하지 않음), 저장 35+. 가려진 뒤판·전체 길이·짝 신발/귀걸이·02 가방 형태는 추정 복원. 02 윈드브레이커는 후드가 달려 있고 사진에선 목 뒤로 내려 둠 — b179 제품 컷은 칼라 + 조임끈만 보여서 b180에서 상위 작업이 만든 후드 수정본(hood-v2)으로 교체, 이름 "코발트 후드 윈드브레이커". [검증](coastal-overcast-cool-female-day-street-20261028-validation.md).

## b181 · 해안 · Overcast / Cool / Male / 35+ / Day / Street — 2026-10-28 세트 (5 looks)

- 배치 `coastal-overcast-cool-male-day-street-20261028`(READY.json 138개 SHA-256 일치, 사용자가 남성 에디토리얼 5장 승인, 2026-10-28). 에디토리얼 5장(1024×1536 JPG ≤285,502 B) + 독립 투명 WebP 제품 25개(5×5, 500×500, ≤47,986 B) 바이트 그대로 → `look/global/coastal-overcast-cool-male-day-street-20261028/<룩 ID>/editorial.jpg`·`products/<제품 id>.webp`, 보충 파일 `look/coastal-overcast-cool-male-day-street-20261028.js`(b179 모듈 뒤·cutouts.js 앞).
- 룩 `coastal-cool-m35-day-street-20261028-01`–`05`(**cloudy** · **cool** · m · 35 · street · 낮 = `time` 없음, `visualRegion: warm-coastal-urban`, `humidityContext: unknown`, reviewed). 01 올리브 오버셔츠 + 아이보리 티 + 워시드 차콜 데님 + 크림 스니커즈 + 다크 브라운 크로스백(카페 앞 컵 홀더) · 02 코발트 후드 윈드브레이커(후드 내림) + 에크루 롱슬리브 + 네이비 팬츠 + 라이트 그레이 스니커즈 + 탄 캔버스 숄더백(꽃다발에서 잎 빼기) · 03 러스트 초어 재킷 + 크림 티 + 페이드 블루 데님 + 탄 스니커즈 + 캔버스 토트(당근 잎 정리) · 04 샌드 봄버 + 플럼 롱슬리브 + 차콜 데님 + 크림·베이지 스니커즈 + 다크 브라운 플랩 메신저(돌계단 지도) · 05 네이비 집 재킷 + 크림·네이비 줄무늬 롱슬리브 + 스톤 팬츠 + 버건디 스니커즈(크림 끈) + 탄 캔버스 토트(현관 열쇠). 이너는 모두 얇은 저지(니트 아님). 커피·꽃·채소·종이봉투·지도·열쇠는 소품.
- 아이템 ID `<룩 ID>.<제품 id>`(25개 모두 새 ID). 분류: 아우터 `outer`, 티·롱슬리브 `top`, 데님·팬츠 `bottom`, 스니커즈 `shoes`, 가방 4종 `bag`(제작 측 값 그대로). 대표 컷 = 아우터 WebP 자체(01 오버셔츠 · 02 윈드브레이커(COBALT) · 03 초어 재킷 · 04 봄버 · 05 집 재킷).
- 문구는 제작 측 ko/en/de 그대로, en deck만 영어 제목과 같은 문장이라 장면 문장으로(원문 `copy.sourceDeckEn`). 체감 16°C는 제작 측 장면 가정(측정·실시간 아님), 기온·습도·바람·도시 null. 모델 외관 28–32, 저장 35+. 가려진 소매·밑단·허리·뒤판·짝 신발과 일부 가려진 01·02 가방 형태는 추정 복원. [검증](coastal-overcast-cool-male-day-street-20261028-validation.md).
