# 이미지 라이브러리 매핑 - Claude Code 인수인계

이 문서는 이미지 제작 결과를 앱의 날씨별·체감온도별 룩에 연결할 때 읽는 작업 지침이다. 이미지 생성 스타일은 [IMAGE_STYLE.md](IMAGE_STYLE.md), 기존 데이터 스키마와 등록 절차는 [look-library.md](look-library.md)를 따른다.

## 1. 작업 범위와 현재 상태

- 이미지 제작자는 에디토리얼을 한 장 생성하고 사용자에게 보여준다. 명시적 승인 이후 개별 제품 컷을 제작하고 GitHub에 올린다.
- Claude Code는 업로드가 끝난 승인된 세트의 메타데이터를 검증하고 앱에 매핑한다.
- 2026-10-21: Rain/Light/Chilly/Male/35+/day/running/01 세트가 승인되어 에디토리얼 1장·제품 5장·products.json과 제작 기록을 업로드했다.
- 2026-10-21 (앱 b110): running 01–05를 앱에 매핑함(`sky: "rain"`, `rain: "light"`, ID = products.json id). 비 강도 ↔ WMO 코드 표는 look-library.md "고르는 순서"에 있음(사용자 확인 대기, 바꾸기 쉬움). 강도가 다른 비 룩·흐린 날 룩이 대체로 쓰이고, 비 룩은 비 안 오는 날엔 안 나옴. products.json mappingStatus = mapped. 나머지 준비 폴더의 존재를 이미지 제작 완료로 해석하지 않는다.
- 2026-10-21 (앱 b115): street 01–05를 같은 방식으로 매핑함(`bl-light-chilly-m-35-day-street-NN`). minimal은 README만 있는 준비 폴더라 제외. 그날 날씨에 맞는 세트가 없는 스타일은 앱이 플레이스홀더(COMING SOON)를 보여줌(b114).
- 2026-10-22 (앱 b116): Rain/Light 남성 minimal 01–05, 여성 minimal 01–05, Overcast 남성 저녁 minimal 01–05 매핑. 체감 단계가 비어 `Overcast/Unclassified/`로 올라온 저녁 세트는 사용자가 chilly로 정해 `Overcast/Chilly/Male/35+/night/minimal/`로 옮김(feelsLikeBand만 채움, ID 유지). 앞으로도 단계가 비어 있으면 매핑 때 사용자에게 묻는다.
- 2026-10-22 (앱 b118): Rain/Light 여성 casual 01–05 매핑. casual은 앱 스타일이 아니라서 사용자가 street 탭으로 정함(룩 `style: street`, ID·폴더는 casual 유지, products.json appStyle·appOutfitId 기록). 앞으로 앱에 없는 스타일이 오면 매핑 전에 사용자에게 묻는다.
- 현재 앱은 clear/cloudy만 구분한다. Rain 폴더를 만드는 것만으로 비 전용 매핑이 구현된 것은 아니다.
- 실제 기온과 체감온도를 분리한다. 착장 보온 구간은 체감온도를 우선한다.

## 2. 폴더 구조

새 비 세트의 경로:

`look/berlin-complete/Rain/<강도>/<체감단계>/<성별>/<연령>/<시간>/<스타일>/<번호>/`

| 경로 요소 | 허용값 / 의미 |
| --- | --- |
| 강도 | Light = 가벼운 비, Normal = 보통 비, Pouring = 쏟아지는 비 |
| 체감단계 | 기존 앱의 freeze / verycold / cold / chilly / cool / pleasant / warm / hot / scorching에 대응하는 폴더명. 예: Chilly |
| 성별 | Male → m, Female → f |
| 연령 | 예: 35+ → 기존 앱 age: "35". 폴더의 연령 구간을 정확한 인물 나이로 해석하지 않는다 |
| 시간 | day → 낮, night → 기존 앱 time: "evening" |
| 스타일 | running → run, street → street, minimal → minimal |
| 번호 | 각 스타일 안에서 01, 02, 03 순서. 다른 강도·성별·시간·스타일에서는 다시 01부터 가능 |

첫 번째 가벼운 비 남성 낮 러닝 예:
`look/berlin-complete/Rain/Light/Chilly/Male/35+/day/running/01/`

두 번째는 동일한 스타일 폴더의 `02/`다. 번호만으로 룩을 식별하지 않는다.

기존 Sunny/Overcast 폴더는 예전 구조(01-running, 06-street 등)를 사용한다. 기존 경로·룩 ID를 일괄 변경하지 않는다. 비 세트의 스타일별 번호 규칙과 혼동하지 않는다.

## 3. 한 룩에 들어갈 파일

| 파일 | 용도 |
| --- | --- |
| editorial.jpg | 승인된 에디토리얼 1장 |
| products/01-outer.jpg 등 | 아이템 1종당 개별 이미지 1장 |
| products.json | 날씨, 실제 기온, 체감온도, 제품 목록, 이미지 상대경로와 설명 |
| README.md | 제작 조건, 사용자 승인·검수 상태, 특이사항 |
| PROMPTS.md | 에디토리얼·개별 제품 생성에 사용한 프롬프트 |

에디토리얼은 1024×1536 JPG ≤300KB. 제품은 각각 500×500 JPG ≤50KB. PNG 원본, 다중 아이템 보드, 승인 전 시안은 앱용 자산으로 등록하지 않는다. 신발·양말·장갑 한 쌍은 한 아이템이다.

## 4. products.json 메타데이터

기존 products.json을 원본 메타데이터로 사용한다. 기존 키를 보존하면서 새 비 세트에 아래 키를 추가한다. 아래 JSON은 앞으로 제작할 세트의 작성 예시이며, 현재 이미지 업로드 완료를 뜻하지 않는다.

```json
{
  "schemaVersion": "1.0",
  "id": "bl-light-chilly-m-35-day-run-01",
  "gender": "men",
  "ageGroup": "35+",
  "style": "run",
  "weather": {
    "city": "Berlin",
    "condition": "rain",
    "rainIntensity": "light",
    "timeOfDay": "day",
    "temperatureC": 12,
    "feelsLikeC": 7,
    "feelsLikeBand": "chilly"
  },
  "approval": {
    "editorial": "approved",
    "approvedAt": null
  },
  "productionStatus": "ready",
  "editorialImage": "editorial.jpg",
  "products": [],
  "productCount": 0,
  "contentType": "ai-styled-concept"
}
```

- 강도 메타데이터: Light → light, Normal → normal, Pouring → pouring.
- 새 세트의 style은 앱 값 run/street/minimal을 사용한다. 기존 products.json의 다른 표현은 실제 값을 확인해 정규화한다.
- products에는 기존 스키마의 id, category, nameKo, descriptionKo, image, altKo, reconstruction, status 등을 유지한다. 기존 copy 기사 필드도 유지한다.
- 각 제품 image는 예: products/01-outer.jpg처럼 해당 룩 폴더 기준 상대경로다.
- 위 예시의 빈 products와 productCount 0은 형식 설명용이다. 이 상태로 앱에 등록하지 않는다.
- productionStatus: ready는 실제로 에디토리얼과 전체 제품 이미지가 존재하고 검수가 끝난 뒤에만 설정한다.
- approval.editorial: approved는 사용자의 명시적 승인이 있을 때만 기록한다. 승인 시각을 모르면 null로 두고 임의 시각을 만들지 않는다.
- reconstruction에는 관찰 가능 여부를 구분한다. 가려진 양말 등 추정 복원 제품을 사진에서 확인된 제품으로 단정하지 않는다.
- 브랜드·가격·구매 링크·소재 혼용률은 확인된 정보가 없으면 null로 유지한다.
- 폴더와 메타데이터가 다르면 자동으로 한쪽을 덮어쓰지 말고 오류로 보고한다.

## 5. Claude Code 매핑 작업 순서

1. IMAGE_STYLE.md와 look-library.md, 이 문서를 읽고 현재 앱 구현을 확인한다.
2. 라이브러리를 재귀 탐색하되 README만 있는 준비 폴더는 제외한다. 실제 editorial.jpg와 products.json이 있는 룩 폴더를 대상으로 한다.
3. 신규 비 세트는 사용자 승인 기록, productionStatus, 필수 메타데이터와 파일 존재 여부를 검사한다. 값이 없거나 충돌하면 검토 목록으로 분리하며 승인·날씨를 추측하지 않는다. 기존 Sunny/Overcast 세트에 새 필드가 없다는 이유로 기존 노출을 제거하지 않는다.
4. productCount = products 배열 길이 = 개별 제품 이미지 수인지 확인한다. 제품 파일 존재·상대경로·확장자·해상도·용량을 확인한다.
5. 폴더의 강도·체감단계·성별·연령·시간·스타일과 products.json 값이 일치하는지 확인한다.
6. 기존 룩·아이템 고정 ID는 보존한다. 신규 비 룩 ID는 강도·단계·성별·연령·시간·스타일·번호를 포함해 중복되지 않게 만든다. 예시 형식을 쓸 때 먼저 충돌 여부를 검사한다.
7. 검증한 메타데이터를 look/outfits.js의 룩·아이템에 연결한다. 기존 schema에 rainIntensity가 없으면 필드와 선택 로직을 함께 확장한다. 기존 copy의 영어·독일어 번역도 기존 등록 규칙에 따른다.
8. 이미지 경로를 앱 기준 경로로 연결한다. 신규 비 룩을 sky: any 또는 cloudy만으로 등록해 맑거나 단순히 흐린 날에도 무작위 노출되게 하지 않는다.
9. 기존 일몰·일출 기반 낮/저녁, 스타일·성별, 체감단계와 랜덤 선택 방식을 보존하면서 강수 유형·강도 조건을 추가한다.
10. index.html의 BUILD와 outfits.js 캐시 버전을 올리고, look-library.md와 CLAUDE.md 변경 기록을 실제 등록 결과에 맞게 갱신한다.
11. 비 강도별·낮/밤·성별·스타일·체감단계의 대표 입력으로 선택 결과를 검증한다. 맑음/흐림의 기존 룩 선택도 확인한다.
12. 등록된 세트 수, 누락·충돌, 수정 파일, 검증 결과를 보고한다.

## 6. 매핑 시 추측하지 말아야 할 것

- 체감 7°C는 기존 Chilly(1~9°C)에 해당한다. 나머지 온도 경계는 앱의 실제 BAND 정의를 읽어 사용하며 새 임계값을 임의로 만들지 않는다.
- 제작 당시 실제 기온 12°C / 체감 7°C는 해당 이미지의 제작 조건이다. 매핑 시 실제 기온이 정확히 12°C인 때만 고르는 조건으로 사용하지 않는다.
- Light/Normal/Pouring을 날씨 API 코드 또는 시간당 강수량에 연결하는 기준은 아직 미정이다. 사용 중인 API·단위·데이터 필드를 확인하고 매핑표를 제시해 사용자 확인을 받은 뒤 구현한다.
- 보슬비(drizzle), 소나기(showers), 강수확률은 강수 강도와 같은 개념으로 단정하지 않는다. 강수확률만으로 세 강도를 결정하지 않는다.
- 해당 조건에 승인된 룩이 없을 때의 fallback 정책도 임의로 강한 비용 착장을 맑은 날에 노출하는 방식으로 정하지 않는다. 기존 동작과 제약을 설명하고 필요한 정책을 확인한다.
- 비 이미지의 빗줄기나 젖은 바닥을 육안으로 보고 기온·강수량을 추정하지 않는다.

## 7. 2026-10-22 b126 — Sunny 남성 낮 Street 완료

- 대상: `Sunny/Chilly/Male/35+/day/06-street`–`10-street`, 룩 ID `bd15-06-street-m`–`bd15-10-street-m`.
- 5룩·35개 독립 제품 JPG(9/5/7/9/5), 제품 메타데이터와 ko/en/de 설명을 앱에 연결했다. productionStatus=ready, mappingStatus=mapped.
- 기존 에디토리얼 JPG 5개는 SHA-256 불변. 각 룩 폴더 editorial.jpg는 동일 바이트 사본이고 앱의 에디토리얼 경로도 기존 경로를 유지한다.
- 기존 아이템 ID 21개는 products.json appItemId로 보존했다. 신규 14개만 새 ID를 사용한다. 복합 accessory는 머플러 ID로 유지하고 09번 가방은 분리한다. 기존 ID가 있으면 `<outfitId>.<product id>`로 일괄 교체하지 않는다.
- 10번의 화면 밖 신발·양말은 추가하지 않았다. 부분 관찰과 숨겨진 형태의 복원을 구분하고 온도·브랜드·가격·혼용률은 추정하지 않았다.
- [검증 결과](validation-sunny-chilly-male-day-street.md), [세트 현황](look-coverage.md).

- b126 Street 제품 매핑: `look/sunny-male-day-street.js`를 기본 `look/outfits.js` 바로 다음, 앱 초기화 전에 동기 적용한다. 기본 룩 파일은 그대로 보존했다. 앱에서 적용된 전체 수는 135룩·798아이템·기사 95룩이다. 보충 파일은 이번 5룩·35제품만 갱신하므로 점검 시 두 파일을 함께 읽는다.

## b127: Sunny male day Minimal product breakdown

Existing editorials 11–15 preserved. 6 products per look, 30 in total. Existing 5 appOutfitIds and 21 item IDs retained; 9 observed items added. Three-language product copy and articles mapped with measured corner background colors. productionStatus=ready, mappingStatus=mapped. Unknown temperatures remain null. Existing Street supplement and other runtime outfits preserved. [Validation](sunny-male-day-minimal-validation.md).
