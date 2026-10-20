# LILAC AT THE DOOR

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: street
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

LILAC AT THE DOOR

차콜과 초콜릿 사이, 연보라 한 겹.

보온 봄버 안에 부드러운 라일락을 넣어요. 코듀로이의 세로 결이 넓은 바지의 형태를 잡아줘요. 현관 앞에서 열쇠를 찾는 짧은 순간을 담았어요. 봄버와 넉넉한 팬츠에 서로 다른 원단 결을 넣어, 편한 옷에도 깊이가 생기게 했습니다.

> A SOFTER KIND OF COOL.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 차콜 보온 봄버

이미지: products/01-outer.png

니트 위에 여유 있게 걸치고 손목의 리브로 선을 마무리해요.

재구성: editorial-item-reconstructed

### 02-top · 라일락 니트

이미지: products/02-top.png

탁한 회색 안에 연보라를 넓게 보여줘요.

재구성: partially-visible-planned-layer

### 03-bottom · 초콜릿 코듀로이 팬츠

이미지: products/03-bottom.png

원단의 결이 잘 보이는 넓은 핏으로 선택해요.

재구성: editorial-item-reconstructed

### 04-shoes · 블랙 둥근코 부츠

이미지: products/04-shoes.png

발끝은 둥글고 단단한 형태로 정리해요.

재구성: editorial-item-reconstructed

### 05-scarf · 그레이 리브 머플러

이미지: products/05-scarf.png

니트 색과 경쟁하지 않도록 회색을 골라요.

재구성: editorial-item-reconstructed

### 06-bag · 브라운 숄더백

이미지: products/06-bag.png

팬츠와 비슷한 갈색으로 아래쪽 톤을 이어줘요.

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
