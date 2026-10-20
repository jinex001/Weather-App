# BREAD AFTER DARK

## 적용 정보

여성 30대 · 베를린 · 흐린 저녁 · 기온 9°C · 체감 5°C

분류: street
원본: editorial.png
제품 데이터: products.json

## 화면 문구

HOW TO WEAR

BREAD AFTER DARK

브라운 시어링, 짙은 데님, 따뜻한 빵 한 봉투.

보송한 안감과 단단한 데님을 겹쳐요. 짧은 재킷 아래 바지를 넓게 내려 편안한 비율을 만들어요. 빵을 사러 나오는 짧은 외출에도 체감 5°C의 저녁 공기는 차가워요. 두툼한 칼라와 머플러를 겹치고, 발목은 데님과 부츠로 이어줍니다.

> TEXTURE DOES THE TALKING.

THE PIECES

6 pieces · 옆으로 넘겨 보세요

## 제품별 정보와 입는 법

### 01-outer · 에스프레소 시어링 재킷

이미지: products/01-outer.png

칼라를 올리면 목 주변을 감싸요. 니트 위에 여유 있게 걸쳐요.

재구성: editorial-item-reconstructed

### 02-top · 크림 리브 니트

이미지: products/02-top.png

안감과 비슷한 크림으로 부드러운 면을 이어줘요.

재구성: partially-visible-planned-layer

### 03-bottom · 인디고 와이드 데님

이미지: products/03-bottom.png

밑단은 바닥에 끌리지 않는 길이로 맞춰요.

재구성: editorial-item-reconstructed

### 04-shoes · 브라운 첼시 부츠

이미지: products/04-shoes.png

어두운 갈색으로 아우터와 발끝을 연결해요.

재구성: editorial-item-reconstructed

### 05-scarf · 오트밀 울라이크 머플러

이미지: products/05-scarf.png

목에 느슨하게 한 번 둘러 니트와 겹쳐요.

재구성: editorial-item-reconstructed

### 06-bag · 버건디 소프트 토트

이미지: products/06-bag.png

갈색보다 붉은 가방으로 작은 색 차이를 만들어요.

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
