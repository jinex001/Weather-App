# OAT AFTER HOURS

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: minimal
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

OAT AFTER HOURS

오트밀 코트 아래 에스프레소 한 줄.

밝은 코트와 짙은 이너의 대비를 길게 이어가요. 장식은 줄이고 칼라와 바지의 선에 집중해요. 저녁 약속 장소로 들어서는 순간, 밝은 코트 뒤로 어두운 팬츠와 가방이 이어져요. 색을 늘리기보다 긴 코트와 매끈한 가죽의 질감 차이를 살립니다.

> KEEP THE LINE LONG.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 오트밀 롱 코트

이미지: products/01-outer.png

코트 앞선을 길게 두고 안쪽은 어두운 색으로 연결해요.

재구성: editorial-item-reconstructed

### 02-top · 에스프레소 터틀넥

이미지: products/02-top.png

밝은 칼라 안쪽에 짙은 목선을 만들어요.

재구성: partially-visible-planned-layer

### 03-bottom · 다크 브라운 팬츠

이미지: products/03-bottom.png

터틀넥과 비슷한 톤으로 위아래를 이어줘요.

재구성: editorial-item-reconstructed

### 04-shoes · 브라운 스퀘어토 부츠

이미지: products/04-shoes.png

곧은 코트 선을 각진 발끝으로 마무리해요.

재구성: editorial-item-reconstructed

### 05-scarf · 오트밀 머플러

이미지: products/05-scarf.png

코트와 같은 톤을 겹쳐 색보다 질감이 보이게 해요.

재구성: editorial-item-reconstructed

### 06-bag · 에스프레소 토트

이미지: products/06-bag.png

작은 장식 없는 형태로 차분하게 들어요.

재구성: editorial-item-reconstructed

## Claude Code 적용 지침
- products.json의 copy는 화면용 문구, products 배열은 표시 순서입니다. 카드와 설명은 같은 제품 id로 연결하세요.
- 이미지 경로는 각 착장 폴더 기준입니다. 제품컷은 500×500 PNG, 1:1, object-fit: contain. 별도의 그림자나 입체 효과를 추가하지 마세요.
- 이번 세트는 베를린, 여성 30대, 흐린 저녁, 기온 9°C·체감 5°C입니다. 낮이나 비 오는 날로 바꾸지 마세요.
- AI 에디토리알에서 재구성한 스타일링 콘셉트입니다. 실제 판매 브랜드, 가격, 구매 링크, 소재 혼용률, 방풍·방수·반사 인증 등의 성능 수치를 임의로 추가하지 마세요.
- 가려진 레이어는 스타일링 기획을 기반으로 보완한 이미지입니다. reconstruction 값을 유지하세요.
- 음식, 컵, 레코드 봉투, 열쇠, 러닝 물병 등 장면 소품은 이번 제품 목록에 포함하지 않습니다.
- status가 ready인 제품만 사용하세요. PROMPTS.md는 제작 기록이므로 앱 문구로 노출하지 마세요.
- 체감온도는 날씨 입력값입니다. 운동 시간이 지나면 특정 온도가 된다는 문구를 쓰지 마세요.
