# A BLUE INTERRUPTION

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: minimal
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

A BLUE INTERRUPTION

검은 실루엣 위로 코발트 한 줄.

검정과 아이보리를 단순하게 겹치고 머플러에만 선명한 파랑을 둬요. 코트의 여밈을 정리하면 색이 더 또렷해져요. 체감 5°C의 저녁에는 긴 코트와 목을 덮는 니트를 겹쳐요. 걸을 때 움직이는 파란 머플러가 단정한 검정 실루엣에 리듬을 더합니다.

> ONE BLUE NOTE.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 블랙 롱 랩 코트

이미지: products/01-outer.png

허리끈은 느슨하게 묶어 니트가 눌리지 않게 해요.

재구성: editorial-item-reconstructed

### 02-top · 아이보리 터틀넥

이미지: products/02-top.png

코트 안쪽에 밝은 목선을 남겨요.

재구성: partially-visible-planned-layer

### 03-bottom · 블랙 와이드 팬츠

이미지: products/03-bottom.png

검은 선을 아래까지 이어줘요.

재구성: editorial-item-reconstructed

### 04-shoes · 블랙 앵클 부츠

이미지: products/04-shoes.png

바지와 색을 맞춰 발끝이 끊기지 않게 해요.

재구성: editorial-item-reconstructed

### 05-scarf · 코발트 롱 머플러

이미지: products/05-scarf.png

파랑은 한 군데만. 한쪽 끝을 길게 내려 움직임을 만들어요.

재구성: editorial-item-reconstructed

### 06-bag · 블랙 미니 토트

이미지: products/06-bag.png

머플러가 주인공이 되도록 가방은 간결하게 골라요.

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
