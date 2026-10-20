# COCOA, THEN A BREATHER

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: running
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

COCOA, THEN A BREATHER

초콜릿과 네이비. 달리기 사이의 짧은 휴식.

부드러운 갈색 셸에 아이보리 목선을 더해요. 잠깐 멈출 때는 지퍼를 여며 식는 느낌을 줄이고, 다시 출발하며 조절해요. 잠깐 쉬는 시간에는 열린 지퍼를 다시 올려요. 브라운과 네이비 사이로 아이보리를 드러내면 차분한 조합에도 표정이 생깁니다.

> TAKE A BREATHER.

THE PIECES

7 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 초콜릿 러닝 셸

이미지: products/01-outer.png

브라운 셸로 러닝 색 조합에 변화를 줘요.

재구성: editorial-item-reconstructed

### 02-top · 아이보리 하이넥 베이스

이미지: products/02-top.png

목선에 밝은 색을 남겨 얼굴 주변을 정리해요.

재구성: partially-visible-planned-layer

### 03-bottom · 네이비 러닝 팬츠

이미지: products/03-bottom.png

갈색과 네이비의 낮은 대비를 유지해요.

재구성: editorial-item-reconstructed

### 04-gloves · 네이비 러닝 장갑

이미지: products/04-gloves.png

손도 하의와 같은 네이비로 이어줘요.

재구성: editorial-item-reconstructed

### 05-socks · 아이보리 크루 삭스

이미지: products/05-socks.png

이너 색을 발목에 작게 반복해요.

재구성: editorial-item-reconstructed

### 06-shoes · 크림 실버 러닝화

이미지: products/06-shoes.png

크림과 은색이 어두운 팬츠 끝에 밝기를 더해요.

재구성: editorial-item-reconstructed

### 07-headwear · 초콜릿 러닝 헤드밴드

이미지: products/07-headwear.png

초콜릿 컬러의 넓은 헤드밴드로 귀 주변을 감싸요. 머리를 묶어도 편하게 쓸 수 있고, 재킷과 색을 맞춰 착장이 차분하게 이어집니다.

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
