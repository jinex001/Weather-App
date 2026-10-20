# ESPRESSO AT THE CAFE

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: minimal
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

ESPRESSO AT THE CAFE

초콜릿 코트, 크림 소매, 긴 네이비 스커트.

서로 다른 어두운 색을 겹쳐 깊이를 만들어요. 크림 니트가 얼굴과 손목 주변에 밝은 면을 남겨줘요. 카페 앞에 잠시 머무르는 장면이에요. 롱 스커트 아래 타이츠와 긴 부츠를 겹쳐 다리가 드러나는 틈을 줄이고, 코트는 여유 있게 걸쳐요.

> SOFT EDGES, LONG LINES.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 초콜릿 롱 코트

이미지: products/01-outer.png

코트는 여유 있게 걸쳐 스커트가 자연스럽게 움직이게 해요.

재구성: editorial-item-reconstructed

### 02-top · 크림 터틀넥 니트

이미지: products/02-top.png

목과 소매에 밝은 색을 남겨 어두운 조합을 풀어줘요.

재구성: partially-visible-planned-layer

### 03-bottom · 네이비 롱 스커트

이미지: products/03-bottom.png

걸을 때 여유가 있는 길이와 트임으로 선택해요.

재구성: editorial-item-reconstructed

### 04-hosiery · 차콜 타이츠

이미지: products/04-hosiery.png

스커트 아래 드러날 수 있는 다리를 차콜로 이어주는 레이어예요.

재구성: partially-visible-planned-layer

### 05-shoes · 브라운 니하이 부츠

이미지: products/05-shoes.png

긴 부츠로 스커트 아래를 이어줘요.

재구성: editorial-item-reconstructed

### 06-bag · 크림 소프트 백

이미지: products/06-bag.png

니트와 가방을 같은 밝은 계열로 연결해요.

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
