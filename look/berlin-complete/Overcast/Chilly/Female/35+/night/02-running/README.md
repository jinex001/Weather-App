# PAUSE, TIE, GO

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: running
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

PAUSE, TIE, GO

스톤 컬러와 잉크 블루. 출발 전 잠깐의 정적.

밝은 셸 아래 어두운 타이츠를 이어 실루엣을 선명하게 만들어요. 끈을 묶고 장갑을 정리하는 순간까지 착장의 일부예요. 끈을 묶으려고 몸을 낮춰도 허리와 발목이 드러나지 않게 길이를 맞춰요. 밝은 재킷에 짙은 하의를 붙이면 실루엣이 더 또렷해져요.

> A MOMENT BEFORE MOTION.

THE PIECES

7 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 스톤 하이넥 러닝 재킷

이미지: products/01-outer.png

하이넥을 세우면 목 주변이 단정해져요. 움직이며 지퍼 높이를 조절하세요.

재구성: editorial-item-reconstructed

### 02-top · 블랙 롱슬리브 베이스

이미지: products/02-top.png

밝은 겉옷 안에 검은 이너를 넣어 색을 단순하게 정리해요.

재구성: partially-visible-planned-layer

### 03-bottom · 잉크 블루 러닝 타이츠

이미지: products/03-bottom.png

타이츠는 무릎을 굽힐 때 당기지 않는지 확인해요.

재구성: editorial-item-reconstructed

### 04-gloves · 스톤 러닝 장갑

이미지: products/04-gloves.png

재킷과 손의 색을 맞춰 상체를 하나의 면처럼 보여줘요.

재구성: editorial-item-reconstructed

### 05-socks · 블랙 크루 삭스

이미지: products/05-socks.png

타이츠 위로 양말을 겹쳐 발목 틈을 줄여요.

재구성: editorial-item-reconstructed

### 06-shoes · 오프화이트 러닝화

이미지: products/06-shoes.png

신발은 한 톤 밝게 두어 발끝에 여백을 만들어요.

재구성: editorial-item-reconstructed

### 07-headwear · 블랙 러닝 비니

이미지: products/07-headwear.png

두꺼운 니트 모자 대신 얇고 몸에 가까운 형태로 맞춰요.

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
