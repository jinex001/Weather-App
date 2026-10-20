# ORANGE ON THE MOVE

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: running
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

ORANGE ON THE MOVE

검은 셸 아래 오렌지 한 면.

겉은 차분하게, 안은 선명하게. 스트레칭할 때 드러나는 오렌지와 은빛 디테일로 움직임을 보여줘요. 달리기 전 스트레칭부터 몸이 풀리는 구간까지, 겉옷을 여닫으며 조절하는 구성이에요. 주황은 목선과 지퍼 사이에 남겨 검정의 무게를 덜어줘요.

> WARM UP YOUR WAY.

THE PIECES

7 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 블랙 라이트 러닝 셸

이미지: products/01-outer.png

이너의 색이 보일 만큼만 지퍼를 열어요. 정지해 있을 땐 다시 여며주세요.

재구성: editorial-item-reconstructed

### 02-top · 오렌지 롱슬리브

이미지: products/02-top.png

큰 로고 없이 색 자체가 포인트가 되게 해요.

재구성: partially-visible-planned-layer

### 03-bottom · 차콜 러닝 타이츠

이미지: products/03-bottom.png

상체의 선명한 색을 차콜로 받아줘요.

재구성: editorial-item-reconstructed

### 04-gloves · 차콜 러닝 장갑

이미지: products/04-gloves.png

손목까지 닿는 길이로 소매와 자연스럽게 이어줘요.

재구성: editorial-item-reconstructed

### 05-socks · 블랙 크루 삭스

이미지: products/05-socks.png

발목의 색을 낮춰 오렌지에 시선이 모이게 해요.

재구성: editorial-item-reconstructed

### 06-shoes · 블랙 실버 러닝화

이미지: products/06-shoes.png

작은 은색 패널만 플래시에 반응하도록 구성해요.

재구성: editorial-item-reconstructed

### 07-headwear · 블랙 이어밴드

이미지: products/07-headwear.png

머리는 가볍게 묶고 귀만 얇게 덮어요.

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
