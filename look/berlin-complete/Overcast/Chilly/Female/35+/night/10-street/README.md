# GREEN UNDER NAVY

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: street
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

GREEN UNDER NAVY

네이비 피코트 안에 그린을 숨겨요.

어두운 코트 사이로 선명한 니트를 보여줘요. 회색 팬츠와 작은 검은 가방으로 균형을 맞춰요. 트램을 기다릴 때는 코트 앞을 여미고 목 주변을 머플러로 감싸요. 움직일 때 잠깐 드러나는 그린 니트가 이 착장의 포인트예요.

> ONE COLOR, ALL THE ENERGY.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 네이비 피코트

이미지: products/01-outer.png

앞을 여미면 단정하게, 살짝 열면 그린이 드러나게 입어요.

재구성: editorial-item-reconstructed

### 02-top · 브라이트 그린 니트

이미지: products/02-top.png

포인트를 소품 대신 니트에 크게 넣어요.

재구성: partially-visible-planned-layer

### 03-bottom · 그레이 플리츠 팬츠

이미지: products/03-bottom.png

차분한 회색이 상체의 색을 받아줘요.

재구성: editorial-item-reconstructed

### 04-shoes · 블랙 첼시 부츠

이미지: products/04-shoes.png

팬츠 밑단과 이어져 발목이 드러나지 않게 해요.

재구성: editorial-item-reconstructed

### 05-scarf · 네이비 머플러

이미지: products/05-scarf.png

코트와 색을 맞춰 목 주변을 정리해요.

재구성: editorial-item-reconstructed

### 06-bag · 블랙 스몰 숄더백

이미지: products/06-bag.png

작고 각진 형태로 니트의 질감과 대비를 줘요.

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
