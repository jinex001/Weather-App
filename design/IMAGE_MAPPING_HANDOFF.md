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
| (예외) 폴더 밖 `../NN-<스타일>.jpg` | 에디토리얼이 이미 폴더 밖에 있는 세트(맑은 날 `Sunny/…/<day|night>/`)는 폴더 안에 `editorial.jpg` 사본을 만들지 않고 `editorialImage: "../NN-<스타일>.jpg"`로 가리킨다(2026-10-23 중복 30장 정리) |
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
9-1. **배경 없는 대표 컷**(사용자가 GPT에서 만들어 GitHub에 올린 이미지를 보내면 Claude가 배경 정리까지 함): `python3 tools/make-cutouts.py`로 새 기사 룩의 대표 제품 컷(`.cut.webp`, 제목이 말하는 제품)을 만들고 확인용 시트를 눈으로 확인한다. 규칙은 `design/CUTOUTS.md`(사용자가 따로 말하지 않아도 매번).
10. index.html의 BUILD와 outfits.js·cutouts.js 캐시 버전을 올리고, look-library.md와 CLAUDE.md 변경 기록을 실제 등록 결과에 맞게 갱신한다.
11. 비 강도별·낮/밤·성별·스타일·체감단계의 대표 입력으로 선택 결과를 검증한다. 맑음/흐림의 기존 룩 선택도 확인한다.
11-1. **5-1장 점검**(문구 중복·이름 나열·번역 문법·인용구/팁·제품 이름과 사진 색·투명 이미지·`bg` 값)을 모두 통과해야 배포한다.
12. 등록된 세트 수, 누락·충돌, 수정 파일, 검증 결과를 보고한다.

## 5-1. 배포 전 문구·투명 이미지 점검 (2026-10-23, b143 재발 방지)

b143(흐린 날 남성 저녁 스트리트)이 아래 상태로 배포됐다가 b144에서 고쳤다: 제품 21개의 입는 법이 모두 같은 한 문장("원본처럼 여유 있는 레이어와 함께 조합해요."), 한 줄 요약·인트로가 제품 이름을 나열한 문장(영어는 제품명 대문자 그대로, 독일어는 형용사 어미 틀림), 인용구·팁 없음, 투명 제품의 `bg: "transparent"`. 새 세트를 매핑할 때마다 아래를 **모두** 확인하고, 하나라도 걸리면 배포하지 않고 고치거나 사용자에게 보고한다.

**문구 (ko/en/de 모두)**
- 제품 `note`(입는 법)·products.json `description`은 **제품마다 달라야 한다**. 세트 안에서 같은 문장이 두 번 이상 나오면 실패. "원본처럼…", "Combine with relaxed layers as shown in the editorial", "…를 레이어에 맞춰 더해 보세요" 같은 틀 문장은 제작 메모로 보고 그대로 쓰지 않는다.
- 입는 법은 그 제품을 **어떻게 입는지**(여밈·길이·겹치는 법·다른 제품과의 관계)를 에디토리얼 사진에서 보이는 대로 1–2문장으로 쓴다. 제품 이름을 다시 말하는 것만으로는 부족하다.
- `deck`(한 줄 요약)·`article.intro`는 제품 이름 나열("A, B, C, D 조합으로 …", "Combine A, B, C …")이면 실패. 사진의 장면·색 조합·이유를 문장으로 쓴다. deck와 intro가 같은 문장이면 다른 세트처럼 intro를 2–3문장으로 늘린다.
- 영어·독일어 문장 안에 제품 이름을 대문자 고유명사처럼 넣지 않는다(en "a cobalt bomber", de "eine kobaltblaue Bomberjacke"). 독일어는 관사·형용사 어미를 문장에 맞춘다.
- 기사 룩은 `article.title`, `deck`, `intro`, 제품별 `note`가 모두 있어야 하고, 같은 세트의 다른 룩과 맞추려면 `pull`(영어 대문자 한 줄)·`tip`(ko/en/de)도 넣는다. 없으면 왜 없는지 기록한다.
- 제작 측 문구가 위 기준에 못 미치면 에디토리얼 사진을 보고 새로 쓰고(b110·b115·b116·b144와 같은 방식), products.json의 `copy`·`description`도 같은 문구로 맞춘다. 제목·제품 이름·ID·사진은 바꾸지 않는다.
- 빠른 점검: 라이브러리를 로드해 새 세트의 `note.ko` 집합 크기가 제품 수와 같은지, `deck.en`/`intro.en`에 제품 `name.en`이 그대로 2개 이상 들어 있지 않은지 본다.

**제품 이름 vs 사진**
- 제품 이름의 색·소재가 에디토리얼 사진과 다르면(예: b143 09 하의 "블랙 워시드 데님"인데 사진은 진한 인디고) **이름을 임의로 바꾸지 않고** 사용자에게 보고만 한다(2026-10-23 사용자 결정: 그대로 둠).

**투명 제품 이미지 (IMAGE_STYLE.md 11장)**
- 투명 WebP 제품은 알파 채널과 네 모서리 알파 0을 확인하고, 흰색·아이보리·회색·남색·검정 바탕에 합성해 가장자리·잔여 배경을 눈으로 본다. 용량은 목표 50KB, 상한 100KB(넘으면 크기와 이유 기록).
- 아이템 `bg`는 **`#RRGGBB` 색만** 넣는다. 투명 제품은 `bg`를 빼거나 아이보리 `#F3EFE8`로 둔다. `"transparent"` 같은 값을 넣지 않는다(b144부터 앱은 `#` 색이 아니면 무시한다. b143 세트 데이터에는 `transparent`가 남아 있지만 화면엔 영향 없음, 다음에 그 파일을 고칠 때 같이 정리).
- 투명 제품을 그대로 홈 대표 컷으로 쓸 때도 `look/cutouts.js`의 `HERO`·`CUTS`에 행이 있어야 하고 `tools/make-cutouts.py --check`의 `missing cutouts: 0`을 확인한다.
- 화면에서는 제품 카드(`.lk-card img`)·캘린더 카드(`.dc`)가 CSS로 아이보리를 깔아 준다. 실제 화면 합성(카드 한 장 이상)을 렌더링해 확인한다.

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

### b128 · Sunny/Chilly/Male/35+/day Running (2026-10-22)

사용자가 기존 에디토리얼 5장에 대해 제품 분해·3개 언어 문구·앱 매핑·GitHub 반영을 명시 요청함. 기존 사진은 그대로 보존, 제품 폴더 01–05-running에 7/6/6/6/7개(32 JPG)를 추가. 기존 룩 ID와 단일 품목 ID 보존. 03 양말과 가려진 부분은 reconstruction에 불확실성 기록. 검수 완료 제품만 ready/mapped로 연결. 정확한 기온·브랜드·혼용률·성능은 추측하지 않음.

## b129 · Sunny 여성 Night Minimal 완료

Sunny / Chilly / Female / 35+ / Night / Minimal 11–15: 제품 8/7/6/9/9종, 총 39개 독립 JPG(500×500, ≤50,000 bytes), ko/en/de 제품명·스타일링 설명·기사. 기존 원본 에디토리얼과 룩 ID·기존 24개 아이템 ID 유지, 새 아이템 ID 15개 추가. 최종 135룩·834아이템, 활성 참조 829, 기사 110룩. `look/sunny-female-night-minimal.js`가 기존 라이브러리 스크립트 뒤, 앱 초기화 전에 동기 적용된다. 큰 `look/outfits.js` 전체 교체가 자동 승인 검토 입력 한도를 초과하여, 기존 Street와 동일한 독립 보충 매핑 방식을 사용했다. 기본 라이브러리와 다른 세트는 변경하지 않는다.

기존 원본을 승인 시각을 새로 만들지 않고 사용하며, 사용자의 이번 제품 제작·GitHub 반영 요청을 approval.upload authorized로 기록했다. productionStatus ready / mappingStatus mapped. 각 룩 폴더에 products.json, README.md, PROMPTS.md, VERIFICATION.md 및 개별 products JPG를 둔다. 13번 부츠의 앞코·굽·밑창·정확한 높이, 14번 가방 전체 형태·여밈·하드웨어, 15번 셔츠 몸판·칼라는 가려져 보수적으로 복원했다. 실제 소재 혼용률·브랜드·가격·구매 링크·정확한 기온은 확인되지 않아 null.


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

## 승인 이미지의 로컬 전달 인박스 (2026-10-24)

GPT 제작물을 로컬 Claude Code가 받는 절차는 [IMAGE_INBOX_HANDOFF.md](IMAGE_INBOX_HANDOFF.md)를 따른다. 이 전달 경로에서는 GPT의 GitHub 직접 업로드 대신 승인 파일 저장 → 해시가 고정된 승인 매니페스트 → 로컬 검증/ready 패키지 → Claude의 별도 브랜치 매핑/PR을 사용한다. 기존 매핑 및 5-1장 검수 규칙은 계속 적용한다. ready는 앱 매핑 완료가 아니다. How to Wear의 한국어 마스터·스타일링 의도는 GPT가 작성하고, Claude는 원문을 보존하며 영어·독일어 현지화와 기존 스키마 연결을 맡는다.

## b145 · Overcast / Chilly / Male / 35+ / Day / Street 두 번째 세트 (2026-10-24)

- iCloud `Weather-App-originals/Overcast/Chilly/Male/35+/day/street-01–05`(READY.json 승인·해시 확인)를 `look/berlin-complete/Overcast/Chilly/Male/35+/day/street/<01–05>/`에 앱 파생본으로 넣음: editorial.jpg + 투명 WebP 제품 28개(5/6/6/5/6) + products.json + README.md. 룩 `oc-chilly-m-35-day-street-NN`, 보충 파일 `look/overcast-male-day-street.js`.
- **같은 칸에 이미 세트가 있을 때**: 기존 `day/06–10-street/`·`oc15-*` ID를 덮어쓰지 않고 새 경로(`<시간>/<스타일>/<번호>/`, 비 세트와 같은 번호 방식)와 새 ID로 더함. 칸 안 후보가 늘고 3개 랜덤은 그대로.
- 원본이 READY.json 형식(approval.json/master-copy.ko.json 아님)이라 `tools/image-inbox.py`를 쓰지 않고 READY.json 해시를 직접 검증함. 제작 측에 제품별 한국어 입는 법이 없어(틀 문장 description뿐) 사용자 지시에 따라 Claude가 ko/en/de를 씀 — IMAGE_INBOX_HANDOFF의 "한국어 마스터 = GPT" 원칙의 이번 세트 예외. 룩 단위 howToWear(ko 마스터)는 기사 intro로 그대로.
- [검증 기록](overcast-male-day-street-2-validation.md).
