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
| `age` | (b71) 연령대 `20` · `30` · `50`(프로필 값과 같음). 지금은 기록만, 고를 때 안 씀 |
| `image` | 큰 에디토리얼 사진(1024×1536, 2:3, JPG) |
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

같은 스타일·성별 룩만 모아서 점수순(낮을수록 앞):
0 오늘 단계 + 오늘 하늘 · 1 오늘 단계 + 다른 하늘 · 2 옆 단계 + 같은 하늘(또는 any) · 3 옆 단계 + 다른 하늘. 두 단계 이상 떨어지면 제외.
점수 0인 룩이 없으면 그 단계 기본 문구(`LOOK[단계]`, 시트에서 자른 작은 사진)가 맨 앞(`band-<단계>-<스타일>-<성별>`, 런타임에 만듦).
아기 탭은 예전 화면 그대로(라이브러리 밖).

## 저장

localStorage `wx-look` = `{ saved: {outfitId: 시각}, own: {itemId: 시각}, want: {itemId: 시각} }`. 이 폰에만 있음. b70부터 룩 저장 버튼·Saved looks는 없음(`saved`는 예전 값 그대로 두기만 함).

## 사진 폴더 (b71부터)

사용자가 GitHub에 올리는 형식: `look/<세트>/<하늘>/<단계>/<성별>/<연령대>/<번호>-<스타일>.png`
- 예: `look/berlin-men-complete-15/Sunny/Chilly/Male/30-40/03-street.png`
- 하늘 `Sunny` → `sky: "clear"`, `Cloudy` → `"cloudy"`. 단계는 체감 9단계 영어 이름(`Chilly` → `chilly`). 성별 `Male`/`Female` → `m`/`f`. 연령대 `30-40` → `age: "30"`.
- 스타일 `running` → `run`, `street`, `minimal`.
- 올라온 PNG(약 2.5MB)는 같은 자리에 JPG(품질 82, 약 250KB)로 바꿔 넣고 PNG는 지움(원본은 git 기록에 남음).

## 지금 들어 있는 것 (15룩 · 67아이템, b71)

- `bm15-*` = `look/berlin-men-complete-15/Sunny/Chilly/Male/30-40/` 맑은 날 · 쌀쌀함 · 남성 · 30~40대. 러닝 5(01·02·07·08·09), 스트리트 5(03·04·10·11·12), 미니멀 5(05·06·13·14·15). 아이템·한 줄 요약(ko/en/de)은 사진을 보고 씀, 아이템 사진은 없음.
- b71에서 예전 사진은 모두 지움: 시트에서 자른 사진(`look/<m|f>-<스타일>-t*.jpg`), 아기 사진(`look/baby-*`), `look/chilly`·`cool`·`clear`·`items`와 그 룩·아이템(예전 ID). 그래서 여성·흐린 날·다른 단계·아기는 사진 없이 단계 기본 문구만 나옴. 예전 문구 원문은 `look-chilly.md`·`look-cool.md`·`look-clear.md`에 기록으로만 남음.

새 룩 추가: 위 폴더 형식으로 사진을 올리고 `outfits`에 한 줄, 아이템을 `items`에 추가. 기존 ID는 그대로 둘 것.
