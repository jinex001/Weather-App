# RECORDS AND QUILTING

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: street
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

RECORDS AND QUILTING

카키 퀼팅과 검은 데님. 레코드 숍을 나서는 순간.

긴 아우터에 어두운 니트를 겹쳐요. 퀼팅의 표면과 데님의 결이 비슷한 색 안에서 차이를 만들어요. 레코드숍에서 나와 천천히 걷는 저녁에는 긴 퀼팅 코트를 중심으로 입어요. 체크 머플러와 옥스블러드 부츠가 차분한 색 사이를 연결합니다.

> TAKE THE LONG WAY HOME.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 카키 롱 퀼팅 코트

이미지: products/01-outer.png

길이가 있는 아우터는 안쪽을 단순하게 정리하면 편안해 보여요.

재구성: editorial-item-reconstructed

### 02-top · 네이비 터틀넥

이미지: products/02-top.png

카키 아래 진한 파랑을 넣어 색에 깊이를 줘요.

재구성: partially-visible-planned-layer

### 03-bottom · 워시드 블랙 데님

이미지: products/03-bottom.png

너무 가늘지 않은 일자 핏으로 코트 아래를 받쳐요.

재구성: editorial-item-reconstructed

### 04-shoes · 옥스블러드 앵클 부츠

이미지: products/04-shoes.png

붉은 갈색을 발끝에만 남겨요.

재구성: editorial-item-reconstructed

### 05-scarf · 브라운 체크 머플러

이미지: products/05-scarf.png

코트와 니트의 색을 체크 안에 다시 모아요.

재구성: editorial-item-reconstructed

### 06-bag · 네이비 캔버스 토트

이미지: products/06-bag.png

레코드 봉투와 함께 들기 좋은 단순한 형태로 연출해요.

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
