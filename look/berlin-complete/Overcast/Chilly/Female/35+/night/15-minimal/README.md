# RED BEFORE HOME

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: minimal
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

RED BEFORE HOME

잉크 블루와 레드, 긴 코트 안의 짧은 대비.

선명한 빨강을 니트에 넣고 겉은 짙은 파랑으로 덮어요. 차콜 팬츠와 검은 부츠로 아래쪽을 차분하게 정리해요. 집으로 돌아가는 저녁, 빨간 니트를 얼굴 가까이에 남겨요. 코트와 머플러는 같은 네이비 계열로 묶어 색이 흩어지지 않게 정리합니다.

> A LITTLE RED GOES FAR.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 잉크 블루 롱 코트

이미지: products/01-outer.png

라펠과 앞선을 단순하게 두어 안쪽의 색을 보여줘요.

재구성: editorial-item-reconstructed

### 02-top · 레드 하이넥 니트

이미지: products/02-top.png

밝은 레드를 얼굴 가까이에 두어요.

재구성: partially-visible-planned-layer

### 03-bottom · 차콜 스트레이트 팬츠

이미지: products/03-bottom.png

코트 아래로 곧은 선을 이어줘요.

재구성: editorial-item-reconstructed

### 04-shoes · 블랙 로우힐 부츠

이미지: products/04-shoes.png

바지와 자연스럽게 이어지는 낮은 굽으로 맞춰요.

재구성: editorial-item-reconstructed

### 05-scarf · 네이비 머플러

이미지: products/05-scarf.png

코트와 같은 계열로 두어 빨강에 집중해요.

재구성: editorial-item-reconstructed

### 06-bag · 블랙 바게트 백

이미지: products/06-bag.png

짧은 스트랩과 가로로 긴 형태로 선을 바꿔줘요.

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
