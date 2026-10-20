# OLIVE AFTER HOURS

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: running
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

OLIVE AFTER HOURS

올리브와 자두색, 은빛 반사선 한 줄.

차분한 색끼리 겹치고 빛은 반사 디테일에 맡겨요. 장갑을 당겨 끼우는 작은 동작이 사진에 리듬을 남겨요. 차가운 공기 속에서는 손과 귀를 얇게 감싸고 출발해요. 큰 색은 올리브 하나로 두고, 플럼은 목과 머리 주변에 작게 반복합니다.

> KEEP THE PACE YOURS.

THE PIECES

7 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 올리브 하프집 아노락

이미지: products/01-outer.png

하프집은 목선의 여유를 조절하기 좋아요. 후드는 필요할 때 사용해요.

재구성: editorial-item-reconstructed

### 02-top · 플럼 모크넥 베이스

이미지: products/02-top.png

올리브 사이로 자두색을 조금 보여줘요.

재구성: partially-visible-planned-layer

### 03-bottom · 블랙 러닝 조거

이미지: products/03-bottom.png

밑단은 발목 가까이 모아 달릴 때 걸리지 않게 해요.

재구성: editorial-item-reconstructed

### 04-gloves · 블랙 리플렉티브 장갑

이미지: products/04-gloves.png

반사 포인트는 손등에 작게 두어 움직임에 따라 드러나게 해요.

재구성: editorial-item-reconstructed

### 05-socks · 올리브 러닝 삭스

이미지: products/05-socks.png

아우터 색을 발목에 한 번 더 반복해요.

재구성: editorial-item-reconstructed

### 06-shoes · 스톤 러닝화

이미지: products/06-shoes.png

밝은 회색이 어두운 하의 끝을 가볍게 정리해요.

재구성: editorial-item-reconstructed

### 07-headwear · 플럼 이어밴드

이미지: products/07-headwear.png

이너와 같은 계열로 귀 보온까지 연결해요.

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
