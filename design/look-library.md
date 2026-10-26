# Today's Look 룩 라이브러리

Today's Look은 `look/outfits.js`(`window.WX_LOOKS = { version, outfits: [...], items: {...} }`)의 룩을 고른 스타일·성별 안에서 3개씩 보여줍니다.
빌드 도구 없이 `<script src="look/outfits.js?v=<빌드>">`로 불러옵니다(빌드마다 `?v=`도 올릴 것). 파일이 안 불러지면 단계 기본 문구로 돌아갑니다.

마지막 정리: 2026-10-26 (앱 빌드 b161) · 200룩 · 1277아이템 · 기사 룩 200 (jsc로 index.html 스크립트 순서대로 로드해 셈). 칸별 현황·빈 칸 목록은 `look-coverage.md`.

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

1. 같은 스타일·성별 룩만.
2. **시간대**: 오늘 일몰 10분 전 ~ min(다음 일출, 05:00)은 저녁 → `time: "evening"` 룩, 그 외는 낮 룩. 일출·일몰 값이 없으면 밤 = 저녁(단 밤 중 5~12시는 낮). 그 스타일·성별에 맞는 시간대 룩이 하나도 없으면 다른 시간대 룩.
3. **단계**: 오늘 단계(0점) 또는 옆 단계(2점)만. 두 단계 이상은 제외.
4. **하늘**: 오늘 하늘(`clear` = 코드 0–2, 시간대 상관없음; 그 외 `cloudy`)과 같거나 `any`인 룩이 하나라도 있으면 그것만. 없을 때만 다른 하늘 룩(+1점).
   **비(b110)**: 오늘 코드가 비면 비 강도를 WMO 코드로 정함 — light = 이슬비 51–57 · 약한 비 61 · 약한 소나기 80 / normal = 63 · 66 · 81 / pouring = 65 · 67 · 82 · 뇌우 95–99(`rainLevel`, 강수확률은 안 씀). 순위: 같은 강도 비 룩 0 → 다른 강도 비 룩 1 → 흐린 날·any 룩 2 → 맑은 날 룩 3, 있는 것 중 가장 좋은 순위만. 비 룩은 비 안 오는 날엔 절대 안 나옴.
5. 점수가 같은 것끼리 **랜덤**으로 섞고 앞에서 **3개**. 섞는 씨앗(`lookSeed`)은 앱을 열 때와 홈에서 Today's Look을 열 때마다 새로. 캘린더 날짜 시트는 그 줄에 보이던 순서 그대로.
6. 하나도 없으면 단계 기본 문구(`LOOK[단계]`, 사진 없음).

맞춤 표시: 1번째 오늘의 추천 / 2번째 이것도 좋아요 / 3번째 이것도 나쁘지 않아요(캘린더 1번째는 이날의 추천).

## 저장

localStorage `wx-look` = `{ saved: {outfitId: 시각}, own: {itemId: 시각}, want: {itemId: 시각} }`. 이 폰에만 있음. `saved`는 b70부터 화면에서 안 씀(예전 값만 남음). `own`/`want`는 기사 없는 룩의 아이템 줄에서만 고를 수 있음.

## 사진 폴더

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
- 이 구분은 이미지 제작·보관 분류다. 강수량 수치나 날씨 API 코드와의 매핑은 아직 정하지 않았으며 임의로 적용하지 않는다.
- 오늘 작업은 `Rain/Light/Chilly/Male/35+/day/`: 남성, 낮, 기온 12°C / 체감 7°C.
- 예: `running/01/`, `street/01/`, `minimal/01/`. 각 스타일의 두 번째 룩은 `02/`로 증가한다. 새 비 세트에는 기존의 01–05/06–10/11–15 스타일 혼합 번호를 적용하지 않는다.
- 각 번호 폴더에는 `editorial.jpg`, `products/01-outer.jpg` 등 아이템별 개별 파일, `products.json`, `README.md`, `PROMPTS.md`를 둔다.
- 맑은 날(Sunny) 세트는 에디토리얼이 폴더 밖 `NN-<스타일>.jpg`에 있고 앱도 그 경로를 쓴다. 폴더 안 `editorial.jpg` 사본은 두지 않고 products.json `editorialImage`는 `../NN-<스타일>.jpg`(2026-10-23, 중복 사본 30장 지움).
- 작업 순서: 에디토리얼 1장 생성 → 사용자 확인 → 명시적 승인 → 개별 제품 컷 제작 → GitHub 업로드 → 완료 링크 제공. 수정 요청이면 승인 전 제품 제작·업로드를 진행하지 않는다.
- Light/Chilly/Male/35+/day/running/01 세트는 사용자 승인 후 에디토리얼 1장·제품 5장과 메타데이터를 업로드했다. 앱 등록은 pending이며 기존 clear/cloudy 선택 로직은 변경하지 않았다. 폴더의 강도 구분만으로 앱에 비 전용 노출이 생기지는 않는다.
- 기존 Sunny/Overcast 경로와 고정 ID는 그대로 유지한다.

## 지금 들어 있는 것

모두 쌀쌀함(체감 1~9°) · 35+ · 각 15룩(러닝 5 · 스트리트 5 · 미니멀 5).

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
| 흐림 | 남 | 저녁 | `Overcast/Chilly/Male/35+/night/minimal/01–05/` | `oc-unclassified-m-35-evening-minimal-NN` (미니멀 5, b116; 단계는 사용자가 쌀쌀함으로 정함, 러닝·스트리트 저녁은 낮 흐린 날 룩) | 제품 카드 기사 |

비 세트(b110)는 `design/IMAGE_MAPPING_HANDOFF.md` 규칙(새 폴더 `Rain/<강도>/<단계>/<성별>/<연령>/<시간>/<스타일>/<번호>/`, 승인·productionStatus 확인)대로 등록. 제작 측 descriptionKo가 제작 메모("AI 콘셉트 제품 컷… 추정 복원")라서 화면용 입는 법(note)·인트로는 사진 보고 새로 씀(ko/en/de), 제작 메모 문장("…스타일링 콘셉트예요")은 화면에 안 씀. products.json `mappingStatus`는 mapped로. pullQuoteEn이 headlineEn과 같은 말이면(스트리트 01–05) `pull`을 넣지 않음(제목 아래 같은 문구 두 번 안 나오게).

없는 것: 비 오는 날 여성·스트리트·미니멀·저녁(→ 흐린 날 룩이 대신), 보통·쏟아지는 비 전용(→ 가벼운 비 룩이 대신), 흐린 날 남성 저녁(→ 맑은 날 저녁 룩이 대신), 쌀쌀함 밖의 모든 단계(→ 옆 단계 룩 또는 기본 문구), 35세 미만·60+ 전용, 아기.

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
