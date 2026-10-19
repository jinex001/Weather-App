# Today's Look 룩 라이브러리 (b68)

Today's Look은 `look/outfits.js`(`window.WX_LOOKS`)에 있는 룩을 고른 스타일·성별 안에서 가로로 넘겨 봅니다.
빌드 도구 없이 `<script src="look/outfits.js?v=<빌드>">`로 불러옵니다(빌드마다 `?v=`도 올릴 것). 파일이 안 불러지면 단계 기본 문구로 돌아갑니다.

## Outfit

| 필드 | 값 |
| --- | --- |
| `id` | 고정 ID. 저장한 룩이 이 값을 씀 → **이름 바꾸거나 재사용 금지**. 형식 `<세트>-<스타일>-<m\|f>[-2]` |
| `bands` | 맞는 체감 단계 키 배열(`freeze verycold cold chilly cool pleasant warm hot scorching`) |
| `sky` | `clear`(낮 + 코드 0–2) · `cloudy`(그 외) · `any` |
| `style` | `run` · `street` · `minimal` |
| `gender` | `m` · `f` |
| `image` | 큰 에디토리얼 사진(1024×1536, 2:3) |
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

## 지금 들어 있는 것 (19룩 · 116아이템)

- `chilly-*` (쌀쌀함, 흐린 날): 6조합, 아이템 사진 `look/chilly/*-p1~6.jpg`(러닝은 p5·p6 = 액세서리, 스트리트·미니멀은 p5 = 양말, p6 = 액세서리). 문구 `look-chilly.md`.
- `cool-*` (선선함): 6조합. 문구 `look-cool.md`.
- `clear-*` (쌀쌀함·추움, 맑은 날): 6조합 + `clear-street-m-2`. `clear-street-m(-2)`는 아이템 사진 `look/items/`(사진에서 잘라낸 것). 문구 `look-clear.md`.

새 룩 추가: 사진을 `look/<세트>/`에 두고 `outfits`에 한 줄, 아이템을 `items`에 추가. 기존 ID는 그대로 둘 것.
