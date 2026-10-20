# Today's Look 룩 라이브러리 (b68)

Today's Look은 `look/outfits.js`(`window.WX_LOOKS`)에 있는 룩을 고른 스타일·성별 안에서 가로로 넘겨 봅니다.
빌드 도구 없이 `<script src="look/outfits.js?v=<빌드>">`로 불러옵니다(빌드마다 `?v=`도 올릴 것). 파일이 안 불러지면 단계 기본 문구로 돌아갑니다.

## Outfit

| 필드 | 값 |
| --- | --- |
| `id` | 고정 ID. 아이템 답(갖고 있어요/관심 있어요)이 이 값을 씀 → **이름 바꾸거나 재사용 금지**. b71부터 형식 `<세트 약자>-<번호>-<스타일>-<m\|f>` (예 `bm15-03-street-m`) |
| `bands` | 맞는 체감 단계 키 배열(`freeze verycold cold chilly cool pleasant warm hot scorching`) |
| `sky` | `clear`(낮 + 코드 0–2) · `cloudy`(그 외) · `any` |
| `style` | `run` · `street` · `minimal` |
| `gender` | `m` · `f` |
| `age` | (b71) 사진 폴더의 연령대 기록(b81부터 `"35"` = 폴더 `35+`). 프로필 연령대는 b80부터 `u35` · `35` · `60`. 지금은 고를 때 안 씀 |
| `image` | 큰 에디토리얼 사진(1024×1536, 2:3, JPG) |
| `time` | (b81, 선택) `"evening"` = 저녁 룩. 없으면 낮 룩 |
| `deck` | 한 줄 요약 `{ko,en,de}` |
| `items` | Item ID 배열(보여줄 순서) |

## Item

| 필드 | 값 |
| --- | --- |
| `id` | 고정 ID `<outfitId>.<cat>`(액세서리가 둘이면 `.acc1`, `.acc2`). "갖고 있어요/관심 있어요"가 이 값을 씀 |
| `cat` | `outer` `top` `under` `bottom` `shoes` `socks` `accessory`(화면 라벨 Outer/Top/Under/Bottom/Shoes/Socks/Bring) |
| `name` | 이름 `{ko,en,de}` |
| `note` | (선택) 자세한 설명 `{ko,en,de}`, 아이템을 펼치면 보임 |
| `image` | (선택) 아이템 사진, 펼치면 보임 |

## 고르는 순서

같은 스타일·성별 룩만 모으고, 그중 시간대가 맞는 것만 남김(b81: 오늘 일몰 10분 전 ~ 다음 일출 = 저녁 → `time: "evening"` 룩, 그 외 = 낮 룩. b83: 새벽 5시부터는 해 뜨기 전이어도 낮 룩(일출이 5시보다 빠르면 일출부터). 일출·일몰 값이 없으면 밤 = 저녁, 단 5~12시 밤은 낮 룩. 그 스타일·성별에 맞는 시간대 룩이 하나도 없으면 다른 시간대 룩을 그대로 씀). 저녁엔 하늘 맑음 = 코드 0–2(낮 조건 없음). 그다음 점수순(낮을수록 앞):
0 오늘 단계 + 오늘 하늘 · 1 오늘 단계 + 다른 하늘 · 2 옆 단계 + 같은 하늘(또는 any) · 3 옆 단계 + 다른 하늘. 두 단계 이상 떨어지면 제외.
점수 0인 룩이 없으면 그 단계 기본 문구(`LOOK[단계]`, 시트에서 자른 작은 사진)가 맨 앞(`band-<단계>-<스타일>-<성별>`, 런타임에 만듦).
아기 탭은 예전 화면 그대로(라이브러리 밖).

## 저장

localStorage `wx-look` = `{ saved: {outfitId: 시각}, own: {itemId: 시각}, want: {itemId: 시각} }`. 이 폰에만 있음. b70부터 룩 저장 버튼·Saved looks는 없음(`saved`는 예전 값 그대로 두기만 함).

## 사진 폴더 (b71부터)

사용자가 GitHub에 올리는 형식: `look/<세트>/<하늘>/<단계>/<성별>/<연령대>/<번호>-<스타일>.png`
- 예: `look/berlin-complete/Sunny/Chilly/Male/35+/03-street.png`
- 하늘 `Sunny` → `sky: "clear"`, `Cloudy` → `"cloudy"`. 단계는 체감 9단계 영어 이름(`Chilly` → `chilly`). 성별 `Male`/`Female` → `m`/`f`. 연령대 `35+` → `age: "35"`(b81에서 `30-40` → `35+`로 이름 바꿈). 저녁 사진은 연령대 폴더 아래 `night/`(예 `Female/35+/night/11-minimal.png`) → `time: "evening"`.
- 스타일 `running` → `run`, `street`, `minimal`.
- 올라온 PNG(약 2.5MB)는 같은 자리에 JPG(품질 82, 약 250KB)로 바꿔 넣고 PNG는 지움(원본은 git 기록에 남음).

## 지금 들어 있는 것 (60룩 · 271아이템, b86)

폴더: 낮 = `<연령대>/day/`, 저녁 = `<연령대>/night/`. 남녀 × 낮·저녁 × 러닝·스트리트·미니멀 각 5룩.

- `bn15-*-f` (b81) = `look/berlin-complete/Sunny/Chilly/Female/35+/night/` 맑은 날 · 쌀쌀함 · 여성 · 저녁(`time: "evening"`). 러닝 01–05, 스트리트 06–10, 미니멀 11–15. 낮 룩과 다른 새 옷차림이라 아이템·한 줄 요약(ko/en/de)을 사진 보고 따로 씀. 
- `bn15-*-m` (b82) = `look/berlin-complete/Sunny/Chilly/Male/35+/night/` 맑은 날 · 쌀쌀함 · 남성 · 저녁(`time: "evening"`). 러닝 01–05, 스트리트 06–10, 미니멀 11–15. 사용자가 `Male/30-39/Night`에 올린 것을 `night/`로 옮김. 아이템·한 줄 요약(ko/en/de)은 사진 보고 씀.
- `bd4-0N-run-m` (b84) = `look/berlin-complete/Sunny/Chilly/Male/35+/day/` 맑은 날 · 쌀쌀함 · 남성 · 러닝 4장(01–04, 낮 룩, `time` 없음). 사용자가 채팅으로 준 사진.
- `bd15-NN-<스타일>-m` (b85) = 같은 `Male/35+/day/` 05–15(러닝 05, 스트리트 06–10, 미니멀 11–15). 사용자가 GitHub에 올림.
- `bd15-NN-<스타일>-f` (b85·b86) = `look/berlin-complete/Sunny/Chilly/Female/35+/day/` 맑은 날 · 쌀쌀함 · 여성 · 낮. 러닝 01–05, 스트리트 06–10, 미니멀 11–15. 01–04는 채팅으로, 05–15는 GitHub로 받음.
- b86에서 `Male/35+/`·`Female/35+/` 바로 아래 예전 낮 사진 15장씩과 그 룩(`bm15-*`, b71·b73)을 지움(사용자 요청, day/만 씀).
- b71에서 예전 사진은 모두 지움: 시트에서 자른 사진(`look/<m|f>-<스타일>-t*.jpg`), 아기 사진(`look/baby-*`), `look/chilly`·`cool`·`clear`·`items`와 그 룩·아이템(예전 ID). 그래서 흐린 날·다른 단계·아기는 사진 없이 단계 기본 문구만 나옴(b73부터 여성은 맑은 날 쌀쌀함 사진 있음). 예전 문구 원문은 `look-chilly.md`·`look-cool.md`·`look-clear.md`에 기록으로만 남음.

새 룩 추가: 위 폴더 형식으로 사진을 올리고 `outfits`에 한 줄, 아이템을 `items`에 추가. 기존 ID는 그대로 둘 것.

## 제품 컷 + 기사 (b95)

룩에 `article`이 있으면 Today's Look이 아이템 리스트 대신 기사 화면을 씀.

- 룩 `article`: `title`(영문 헤드라인, 번역 안 함), `intro` {ko,en,de}, `pull`(영문 인용구), `tip` {ko,en,de}. `deck` = 캡션.
- 아이템: `cat`(outer/top/bottom/shorts/shoes/socks/hands/headwear/eyewear/watch/jewelry/scarf/bag), `name`, `sub`(카드 보조문구), `note`(입는 법), `image`(500×500 제품 컷 JPG), `alt`.
- 순서는 products.json `products` 순서, 카드와 문단은 같은 순서로 연결. `status`가 ready인 것만.
- 첫 세트: `look/berlin-complete/Overcast/Chilly/Male/35+/day/NN-<style>/`(원본 PNG + 앱용 JPG), 룩 `oc15-NN-<run|street|minimal>-m`.

- b97: 오늘 하늘에 맞는 룩(sky가 오늘과 같거나 any)이 그 스타일·성별에 하나라도 있으면 다른 하늘 룩은 빠짐. 없을 때만 다른 하늘 룩이 대신 나옴.
