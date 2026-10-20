# BLUE HOUR, BRIGHT STRIDE

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: running
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

BLUE HOUR, BRIGHT STRIDE

푸른 셸이 어둠을 가르고, 반사선이 움직임을 따라가요.

짧은 셸과 긴 팬츠로 움직임을 가볍게. 손과 귀는 얇게 덮고, 속도에 맞춰 지퍼를 조절해요. 흐린 저녁의 강변에서는 얇은 이너와 지퍼형 셸로 겹을 나눠요. 달리는 동안은 지퍼로 조절하고, 멈춰 쉬는 순간에는 다시 여며주세요.

> MOVE INTO THE EVENING.

THE PIECES

7 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 코발트 러닝 셸

이미지: products/01-outer.png

이 착장의 중심은 파란 셸이에요. 달리며 열이 나면 앞 지퍼를 조금 열어 레이어를 조절해요.

재구성: editorial-item-reconstructed

### 02-top · 차콜 모크넥 베이스

이미지: products/02-top.png

목을 살짝 덮는 이너를 얇게 겹쳐요. 셸 안에서 뭉치지 않는 핏을 골라요.

재구성: partially-visible-planned-layer

### 03-bottom · 차콜 테이퍼드 러닝 팬츠

이미지: products/03-bottom.png

발목으로 좁아지는 선이 셸의 볼륨을 정돈해요.

재구성: editorial-item-reconstructed

### 04-gloves · 블랙 러닝 장갑

이미지: products/04-gloves.png

손끝은 얇은 장갑으로 덮고, 답답해지면 주머니에 넣어요.

재구성: editorial-item-reconstructed

### 05-socks · 차콜 크루 삭스

이미지: products/05-socks.png

팬츠와 신발 사이를 같은 톤으로 이어줘요.

재구성: editorial-item-reconstructed

### 06-shoes · 실버 블루 러닝화

이미지: products/06-shoes.png

은색 갑피가 파란 셸과 연결돼요. 달리기용 핏은 실제 착화로 확인하세요.

재구성: editorial-item-reconstructed

### 07-headwear · 차콜 이어밴드

이미지: products/07-headwear.png

귀를 덮되 머리 전체를 두껍게 감싸지 않는 선택이에요.

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
