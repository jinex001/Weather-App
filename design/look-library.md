# Today's Look 룩 라이브러리

Today's Look은 `look/outfits.js`(`window.WX_LOOKS = { version, outfits: [...], items: {...} }`)의 룩을 고른 스타일·성별 안에서 3개씩 보여줍니다.
빌드 도구 없이 `<script src="look/outfits.js?v=<빌드>">`로 불러옵니다(빌드마다 `?v=`도 올릴 것). 파일이 안 불러지면 단계 기본 문구로 돌아갑니다.

마지막 정리: 2026-10-21 (앱 빌드 b115) · 115룩 · 600아이템. 화면 규칙은 `design-system.md` 8장, 사진 스타일은 `IMAGE_STYLE.md`.

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
| `id` | 고정 ID. 기사 룩은 `<outfitId>.<products.json id>`(예 `ofn-06-street-f.04-shoes`), 예전 룩은 `<outfitId>.<cat>` |
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
- **JPG만 저장소에 둠**: 에디토리얼 1024×1536 ≤300KB(품질 80), 제품 컷 500×500 ≤50KB(품질 85). PNG로 올라오면 JPG로 바꾸고 PNG는 지우고, products.json 경로도 `.jpg`로. 2026-10-20 git 기록에서도 PNG를 지움.
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
- 작업 순서: 에디토리얼 1장 생성 → 사용자 확인 → 명시적 승인 → 개별 제품 컷 제작 → GitHub 업로드 → 완료 링크 제공. 수정 요청이면 승인 전 제품 제작·업로드를 진행하지 않는다.
- Light/Chilly/Male/35+/day/running/01 세트는 사용자 승인 후 에디토리얼 1장·제품 5장과 메타데이터를 업로드했다. 앱 등록은 pending이며 기존 clear/cloudy 선택 로직은 변경하지 않았다. 폴더의 강도 구분만으로 앱에 비 전용 노출이 생기지는 않는다.
- 기존 Sunny/Overcast 경로와 고정 ID는 그대로 유지한다.

## 지금 들어 있는 것

모두 쌀쌀함(체감 1~9°) · 35+ · 각 15룩(러닝 5 · 스트리트 5 · 미니멀 5).

| 하늘 | 성별 | 시간 | 폴더 | 룩 ID | 화면 |
| --- | --- | --- | --- | --- | --- |
| 맑음 | 남 | 낮 | `Sunny/Chilly/Male/35+/day/` | `bd4-0N-run-m`(01–04), `bd15-NN-<스타일>-m`(05–15) | 아이템 리스트 |
| 맑음 | 여 | 낮 | `Sunny/Chilly/Female/35+/day/` | `bd15-NN-<스타일>-f` | 아이템 리스트 |
| 맑음 | 남 | 저녁 | `Sunny/Chilly/Male/35+/night/` | `bn15-NN-<스타일>-m` | 아이템 리스트 |
| 맑음 | 여 | 저녁 | `Sunny/Chilly/Female/35+/night/` | `bn15-NN-<스타일>-f` | 아이템 리스트 |
| 흐림 | 남 | 낮 | `Overcast/Chilly/Male/35+/day/` | `oc15-NN-<스타일>-m` | 제품 카드 기사 |
| 흐림 | 여 | 낮 | `Overcast/Chilly/Female/35+/day/` | `of15-NN-<스타일>-f` | 제품 카드 기사 |
| 흐림 | 여 | 저녁 | `Overcast/Chilly/Female/35+/night/` | `ofn-NN-<스타일>-f` | 제품 카드 기사 |
| 비(가벼운) | 남 | 낮 | `Rain/Light/Chilly/Male/35+/day/running/01–05/` | `bl-light-chilly-m-35-day-run-NN` (러닝 5) | 제품 카드 기사 |
| 비(가벼운) | 남 | 낮 | `Rain/Light/Chilly/Male/35+/day/street/01–05/` | `bl-light-chilly-m-35-day-street-NN` (스트리트 5, b115; 미니멀은 아직 없음 → 플레이스홀더) | 제품 카드 기사 |

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
