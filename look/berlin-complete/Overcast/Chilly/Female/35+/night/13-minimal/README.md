# BURGUNDY BETWEEN GRAYS

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: minimal
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

BURGUNDY BETWEEN GRAYS

회색 코트 사이로 버건디가 보여요.

더블 코트와 플리츠 팬츠를 회색으로 맞춰요. 목을 덮는 붉은 니트가 차가운 배경에 작은 온기를 더해요. 회색 코트와 팬츠를 가까운 톤으로 연결하고, 버건디는 목선과 가방에 반복해요. 긴 기장 안에서도 걸음이 편하도록 팬츠 밑단은 바닥에서 살짝 띄웁니다.

> QUIET, WITH COLOR.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 그레이 더블 코트

이미지: products/01-outer.png

단추와 라펠이 만드는 선을 중심으로 입어요.

재구성: editorial-item-reconstructed

### 02-top · 버건디 터틀넥

이미지: products/02-top.png

코트 안쪽에만 색을 남겨 절제된 대비를 만들어요.

재구성: partially-visible-planned-layer

### 03-bottom · 그레이 테일러드 팬츠

이미지: products/03-bottom.png

코트와 가까운 회색으로 길게 연결해요.

재구성: editorial-item-reconstructed

### 04-shoes · 블랙 스퀘어토 부츠

이미지: products/04-shoes.png

검은 발끝으로 회색 착장을 단단하게 받쳐요.

재구성: editorial-item-reconstructed

### 05-scarf · 차콜 머플러

이미지: products/05-scarf.png

목선 안쪽에 넣어 버건디가 조금 보이게 해요.

재구성: editorial-item-reconstructed

### 06-bag · 버건디 플랫 숄더백

이미지: products/06-bag.png

니트의 붉은색을 작은 면으로 반복해요.

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
