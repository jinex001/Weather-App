# RED AT THE WINDOW

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: street
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

RED AT THE WINDOW

붉은 재킷 하나로 저녁의 색을 바꿔요.

회색 니트와 검은 바지를 바탕으로 두고 레드에 집중해요. 넓은 바지와 짧은 재킷의 비율이 포인트예요. 따뜻한 가게 불빛 앞에서 레드가 가장 선명하게 보여요. 기다리는 동안에는 재킷을 여미고, 머플러 끝은 안쪽에 넣어 정리해요.

> LET RED LEAD.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 레드 보온 재킷

이미지: products/01-outer.png

재킷을 주인공으로 두고 나머지 색은 낮춰요.

재구성: editorial-item-reconstructed

### 02-top · 멜란지 그레이 니트

이미지: products/02-top.png

목을 덮는 회색 니트로 레드의 강도를 부드럽게 받아줘요.

재구성: partially-visible-planned-layer

### 03-bottom · 블랙 와이드 팬츠

이미지: products/03-bottom.png

밑단을 길게 내려 짧은 아우터와 대비시켜요.

재구성: editorial-item-reconstructed

### 04-shoes · 블랙 레이스업 부츠

이미지: products/04-shoes.png

팬츠 안쪽으로 부츠를 이어 발목을 덮어요.

재구성: editorial-item-reconstructed

### 05-scarf · 차콜 머플러

이미지: products/05-scarf.png

재킷 목선 안쪽에 간결하게 넣어요.

재구성: editorial-item-reconstructed

### 06-bag · 블랙 미니 크로스백

이미지: products/06-bag.png

작은 가방으로 아우터의 붉은 면을 가리지 않아요.

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
