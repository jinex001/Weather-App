# Today's Look — 기본 이미지 스타일 가이드

사용자가 승인한 기본 사진 스타일. 이후 날씨앱 에디토리얼 이미지 제작 시 이 문서를 기준으로 삼는다.

기준: 베를린 가을밤 남성 30대, 기온 7°C / 체감 3°C 수정 세트의 촬영 언어. 도시·성별·연령·계절·시간·날씨·기온은 매 요청의 입력값으로 바꾼다. 밤이나 남성으로 고정하지 않는다.

## 1. 핵심 방향

가까운 거리에서 일상의 순간을 포착한, 개성과 유머가 있는 패션 에디토리얼.

### 실제 생활 상황에서 발생하는 행동 (2026-10-22 명확화)

- **자연스러운 동작은 포즈의 자연스러움이 아니라, 실제 생활에서 일어날 법한 구체적인 상황에 대한 자연스러운 반응이다.** 먼저 상황과 행동의 이유를 설계하고, 그 결과로 몸·손·발·표정이 움직이게 한다.
- 상황 자체가 약간 위트 있고 유머러스하면 더 좋다. 유머는 연출된 우스꽝스러운 포즈나 과장된 표정이 아니라, 예상 밖의 사소한 사건과 즉각적인 반응에서 나온다.
- 예: 빗속에서 물웅덩이를 피하려다 크게 발을 내딛기, 달리는 도중 비니를 붙잡기, 신발 끈을 묶다가 얼굴에 빗방울을 맞기. 행동에는 명확한 원인과 맥락이 있어야 한다.
- 카메라는 그 사건을 가까이에서 우연히 포착한 듯 촬영한다. 강한 직광 플래시와 광각 원근감은 유지하되, 피사체에게 렌즈를 향한 재미있는 포즈를 강요하지 않는다.
- 제작 순서: **실제 생활 상황 → 자발적 반응 → 절제된 위트 → 에디토리얼 순간**. 유머가 없는 장면이라도 상황의 진정성이 우선이다.


- 강한 카메라 직광 플래시를 모든 에디토리얼 컷에 반드시 사용한다. 낮·밤·날씨와 관계없이 플래시가 확실히 느껴지는 인물 조명, 또렷한 그림자, 피부와 원단의 실제 질감을 유지한다.
- 24–28mm 광각 느낌, 손·신발·소품의 근거리 원근감, 생동감 있는 구도.
- 장보기, 신발 끈 묶기, 물 마시기, 열쇠 찾기, 스카프 잡기 같은 구체적 행동.
- 인물마다 다른 얼굴·표정·머리·체형. 자연스러운 피부와 연령의 특징 유지.
- 약간의 필름 입자, 풍부하지만 현실적인 색. 주변 공간을 알아볼 수 있는 심도.
- 프레임과 높낮이를 다양하게: 전신·무릎 위·상반신, 하이앵글·로우앵글·눈높이.
- 세로 2:3. 기본 원본 1024 × 1536. 한 파일에 사진 한 장.
- 앱에 올릴 때는 JPG(품질 80, 300KB 이하)로. 제품 컷은 500 × 500 1:1, 따뜻한 아이보리 배경(#F3EFE8 근처), 기본 수직 탑뷰(부츠는 아래 신발별 구도 규칙 적용), JPG 50KB 이하. PNG 원본은 저장소에 두지 않는다(2026-10-20).
- 사진 안에는 텍스트, 로고, 워터마크, 앱 UI, 콜라주를 넣지 않는다.

### 타깃 연령과 모델 외관 연령 분리 (2026-10-22 사용자 승인)

- **35+는 콘텐츠 타깃 분류이고, 모델의 기본 외관은 성인 30세 전후(약 28~32세)로 설정한다.** 남녀 모두 동일하게 적용한다. 타깃 숫자를 그대로 인물 나이로 입력해 더 성숙한 외관을 자동 생성하지 않는다.
- 폴더·앱 age·products.json ageGroup은 기존 35+ 분류를 유지한다. 모델 캐스팅은 별도 `casting.modelAppearanceAge`에 기록한다. 다른 타깃의 외관 연령은 별도로 정하고, 사용자가 지정한 캐스팅을 우선한다.
- 새 에디토리얼 프롬프트에는 audience age group과 model appearance age를 서로 다른 항목으로 적는다. 예: `Audience: women 35+. Model: adult woman visually around 30, approximately 28–32.`
- 자연스러운 피부결·모공·표정은 유지하면서 생기 있는 눈가, 얼굴 볼륨, 건강한 헤어와 현대적인 스타일링으로 승인된 외관을 만든다. 과도한 피부 블러·플라스틱 질감·획일적인 얼굴·십대화는 피한다.
- 기존 사진의 외관 연령 수정이 명시적으로 요청되면 나이 보존 규칙의 예외다. 착장·앵글·크롭·동작·날씨를 유지하고 얼굴·피부·헤어 인상을 조정한다. 약한 리터치만으로 요청이 반영되지 않으면 승인 범위에서 얼굴 캐스팅을 더 분명하게 바꾼다.
- 기준 사례: Rain / Light / Chilly / Female / 35+ / day / minimal 01–05. 사용자가 처음 생성된 얼굴이 성숙해 보인다고 수정 요청했고, 외관 30세 전후 수정본을 승인했다. 이 규칙은 앞으로의 제작 기준이며 기존 승인 자산을 자동 교체하라는 뜻은 아니다.

### 카메라 원근감과 재미있는 동작 (2026-10-21 승인)

- 가까운 오브젝트를 크게 잡아 원근감의 과장을 살짝 높인다. 앞쪽 부츠·손·우산·가방·자전거 바퀴 등 장면 속 오브젝트를 렌즈 가까이에 두고 인물과 배경의 거리 차이를 활용한다.
- 기본 24–28mm 광각을 유지하되, 원근감을 더 강조하는 컷은 20–24mm 느낌을 사용할 수 있다. 인체와 물체의 형태는 자연스럽게 유지하며 과도한 어안 왜곡은 피한다.
- 카메라 높낮이를 적극적으로 변주한다. 지면·연석 가까이의 로우앵글, 위에서 내려다보는 하이앵글, 가까운 눈높이 구도를 섞고, 필요하면 프레임을 살짝 기울인다. 모든 컷을 같은 로우앵글이나 큰 신발 구도로 반복하지 않는다.
- 앵글과 동작을 함께 설계한다. 물웅덩이를 넘으며 균형 잡기, 바람에 움직이는 우산 붙잡기, 장바구니를 들고 턱 내려오기, 자전거 잠금 풀기처럼 일상 속에서 재미있는 제스처와 순간을 포착한다.
- 단순히 서 있는 모델 포즈보다 몸의 기울기, 손과 발의 움직임, 행동을 따라가는 시선과 생생한 표정으로 유머를 만든다. 과장된 원근감 속에서도 착장과 주요 아이템을 알아볼 수 있어야 한다.
- 승인 예시: 비 오는 베를린 낮, 기온 12°C / 체감 7°C, 남성 스트리트웨어. 지면 가까운 카메라 앞에서 물웅덩이를 넘어 내딛는 부츠를 크게 잡고, 반대쪽 팔로 균형을 잡으며 웃는 순간. 강한 직광 플래시 필수.

### 다섯 컷의 촬영 변주 - Rain / Light / Chilly / Male / 35+ / Minimal (2026-10-21 승인)

사용자가 기존 다섯 컷의 정면 전신 반복을 지적한 뒤, 아래 수정본 다섯 장을 모두 승인했다. 착장·인물·날씨는 유지하고 **카메라 위치, 촬영 방향, 동작, 거리, 크롭**을 함께 바꾼 사례다. 기본 제작 조건은 베를린 가을 낮, 가벼운 비, 기온 12°C / 체감 7°C다. 이 촬영 언어는 다른 날씨·성별·스타일에도 입력 조건에 맞춰 적용한다.

| 컷 | 카메라·거리·크롭 | 행동·시선·표정 | 전경과 깊이 |
| --- | --- | --- | --- |
| [01 차콜](../look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/01/editorial.jpg) | 머리 위에서 거의 수직으로 내려다보는 탑뷰. 약 24mm 느낌. 거리의 수평선 대신 젖은 보도가 배경이 되는 사선 프레임 | 물웅덩이를 피하며 무릎·어깨를 틀고 웃는다. 손바닥을 카메라 쪽으로 든다 | 가까운 손바닥, 얼굴, 니트, 뒤로 멀어지는 다리의 거리 차이. 정면 전신 구도로 되돌리지 않는다 |
| [02 베이지](../look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/02/editorial.jpg) | 지면 가까운 낮은 위치에서 위로 올려보는 근접 광각. 약 22mm 느낌. 상체와 굽힌 무릎을 프레임 밖으로 자르는 타이트한 크롭 | 몸을 숙여 우산 아래로 촬영자를 초대하듯 다가온다. 렌즈를 보며 유쾌하게 웃는다 | 우산 천이 상단을 넓게 차지하고 가까운 손·곡선 손잡이와 얼굴의 원근감이 겹친다. 큰 신발을 전경에 넣지 않는다 |
| [03 코발트](../look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/03/editorial.jpg) | 출입구 쪽에서 비껴 찍는 허리 높이의 광각. 약 24mm, 약 15도 기울인 프레임. 머리부터 허벅지 정도까지 | 접은 우산을 몸 반대쪽으로 털며 몸을 살짝 뒤로 기울인다. 얼굴·눈은 우산과 손을 따라가고 자연스럽게 웃는다 | 접은 우산이 대각선으로 렌즈 가까이 지나간다. 적은 물방울과 동작을 플래시로 포착한다. 폭우나 큰 물보라를 만들지 않는다 |
| [04 올리브](../look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/04/editorial.jpg) | 가까운 높은 사선 앵글. 약 24mm 느낌. 후드·얼굴·가슴과 손만 담는 클로즈업 | 안경을 닦다가 렌즈 옆으로 얼굴을 기울이며 미소 짓는다. 눈은 안경을 따라간다 | 렌즈 가까운 안경과 손을 크게, 그 뒤 얼굴·후드·니트가 겹치게 한다. 인체·안경 구조는 자연스럽게 유지한다 |
| [05 블랙·오렌지](../look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/05/editorial.jpg) | 뒤쪽 옆에서 찍는 어깨 높이 광각. 약 24mm, 약 10도 기울임. 계단과 다리가 프레임 가장자리로 빠지는 동적인 크롭 | 계단에 발을 올리며 몸은 출입구를 향하고, 얼굴만 어깨 너머로 돌아본다. 움직인 머플러 끝을 잡으며 웃는다 | 머플러가 전경을 대각선으로 가로지르고 가방·코트 뒷면·우산이 다른 깊이에 놓인다. 정면 포즈로 바꾸지 않는다 |

표의 mm·각도는 생성 시 지시한 **촬영 느낌과 구성 기준**이며 실제 카메라 EXIF 측정값이 아니다.

#### 앞으로 적용할 촬영 원칙

- 다섯 장을 만들기 전에 각 컷의 카메라 높이·방향, 피사체와 거리, 크롭, 행동, 시선, 가까운 소품을 각각 정한다. 소품이나 코트 색만 바꾼 같은 정면 전신 컷을 다섯 번 만들지 않는다.
- 전신을 모든 에디토리얼의 의무로 두지 않는다. 상체, 허벅지 위, 얼굴·손 클로즈업, 뒷모습을 장면에 맞게 섞는다. 크롭된 신발이나 가방을 보여주기 위해 프레임을 억지로 넓히지 않는다. **제품 컷의 전체 형태 노출 규칙과 에디토리얼의 자유로운 크롭은 다르다.**
- 유머는 과장된 분장보다 구체적인 행동에서 만든다. 비를 피하는 작은 균형 변화, 우산 아래 몸을 숙이기, 안경 닦기, 돌아보며 소품 잡기처럼 손·어깨·무릎·머리 방향을 함께 움직인다. 모든 모델에게 같은 활짝 웃는 표정을 요구하지 않는다.
- 렌즈 가까운 손·우산 손잡이·안경·머플러 등으로 깊이를 만든다. 가까운 오브젝트는 일부 프레임 밖으로 나가도 되지만, 손가락·관절·소품 구조는 자연스러워야 한다. 과도한 어안과 큰 신발 구도의 반복은 피한다.
- 직광 플래시, 실제 피부결, 원단 질감, 인물의 자연스러운 나이와 주어진 날씨는 유지한다. 가벼운 비를 폭풍·과도한 물보라로 바꾸지 않는다.
- 기존 에디토리얼을 이 방식으로 수정할 때는 **인물·착장 고정 / 카메라·동작·크롭 변경**을 프롬프트에 명확히 분리한다. 단순히 원본 사진을 잘라 확대하는 대신 카메라를 다른 위치로 옮긴 장면으로 재구성한다.

#### 재촬영 프롬프트에 추가할 블록

~~~text
Preserve the reference person's identity, apparent age, exact outfit,
colors, materials, accessories, city, time and weather.
Recompose the scene from a genuinely new camera position.
Camera: {HEIGHT, DIRECTION, DISTANCE, WIDE-ANGLE FEEL, OPTIONAL TILT}.
Crop: {EXPLICIT TOP AND BOTTOM CROP; ITEMS INTENTIONALLY OUTSIDE FRAME}.
Action: {CONCRETE PLAYFUL EVERYDAY GESTURE WITH BODY MOVEMENT}.
Gaze and expression: {WHAT THE HEAD AND EYES FOLLOW; NATURAL EXPRESSION}.
Foreground: {ONE CLOSE HAND OR PROP THAT CREATES NEAR/FAR DEPTH}.
Keep strong direct on-camera flash, tactile skin and fabric, and believable anatomy.
Do not return to the original frontal full-body composition.
Do not force cropped footwear or accessories back into frame.
~~~

#### 타이트한 컷의 제품 복원 기록

- 최종 승인 컷을 보이는 부분의 우선 근거로 삼는다. 같은 착장의 이전 전신 컷이 있으면 크롭으로 사라진 하의·신발·가방의 보조 근거로 사용한다. 이전 전신 컷은 승인된 최종 에디토리얼 대신 앱에 등록하지 않는다.
- 최종 컷에서 보이는 제품, 보조 컷에서만 확인되는 제품, 양쪽 모두에서 안 보이는 추정 제품을 구분한다. 예: `visible-item-reconstructed`, `partially-visible-reconstructed`, `supporting-view-reconstructed`, `not-visible-inferred`.
- Markdown·products.json에 근거 구분을 기록한다. 보조 컷의 신발이나 가려진 양말을 최종 크롭에서 직접 확인한 것처럼 설명하지 않는다.
- 제품 사진은 여전히 품목별 별도 파일, 전체 형태가 보이는 정돈된 구도와 아이보리 배경을 사용한다.
- 제품 생성 프롬프트는 이번 파일의 품목 하나만 묘사한다. 코트 파일에 신발·양말·안경·우산의 배치 규칙까지 나열하면 다품목 보드가 생성될 수 있으므로, 신발별 구도 규칙 등은 해당 품목을 만들 때만 넣는다. 다품목 보드가 나오면 업로드하지 않고 품목 단독 프롬프트로 다시 만든다.

## 2. 시선과 순간 포착

카메라를 보는 컷과 자연스럽게 다른 곳을 보는 컷을 섞는다. 모든 사람이 렌즈를 바라보지 않게 한다.

권장 편집 기준은 15장 중 직접 시선 4장, 자연스러운 시선 11장. 고정 할당은 아니며 장면에 맞게 조정한다. 5장 단위에서는 직접 시선 1~2장 정도를 기준으로 삼는다.

| 장면 | 시선 |
| --- | --- |
| 달리는 중 | 진행 방향 |
| 신발 끈 묶기 | 신발과 손 |
| 스트레칭하며 웃기 | 프레임 밖 동행 |
| 물 마시기 | 공원이나 거리 먼 곳 |
| 식료품 들기 | 봉투 안 또는 발밑 |
| 테이크아웃 창구 | 가게 안의 대화 상대 |
| 열쇠 찾기 | 손과 열쇠 |
| 떨어진 물건 줍기 | 물건 |
| 초인종 누르기 | 버튼 |
| 바람에 스카프 잡기 | 스카프 |

눈동자만 돌리지 않는다. 머리 방향, 목, 눈, 표정이 같은 행동을 자연스럽게 따른다. 카메라를 의식하지 않는 장면에도 표정과 이야기가 있어야 한다.

## 3. 날씨와 체감온도를 먼저 스타일링에 반영

사진을 만들기 전에 전체 착장을 결정한다: 아우터, 상의/이너, 하의, 신발, 양말, 장갑·모자·스카프 등.

- 보온 정도는 체감온도를 우선하고, 활동량·바람·강수·시간대를 함께 고려한다.
- 같은 체감온도라도 달리는 사람과 가만히 서 있는 사람의 착장을 구분한다.
- 추운 날에는 보온 레이어, 발목 커버, 상황에 맞는 장갑과 귀 보온을 보여준다.
- 낮에는 실제 낮의 주변광을 유지하며 플래시로 인물을 강조한다.
- 밤에는 어두운 하늘과 낮은 주변광, 가로등·상점 불빛 위에 강한 직광 플래시를 더한다.
- 맑음이라고 바닥을 일부러 젖게 만들지 않는다. 비·눈·바람은 입력된 조건에 맞춘다.
- 베를린은 생활 거리, 공원, 주택 출입구, 동네 가게 등으로 표현한다.

승인된 추운 밤 예시(기온 7°C / 체감 3°C):

| 스타일 | 착장 방향 |
| --- | --- |
| 러닝 | 보온 기능성 이너 + 방풍 셸, 긴 러닝 팬츠/타이츠, 양말, 러닝화, 장갑, 귀를 덮는 헤드밴드/비니 |
| 스트리트 | 패딩·시어링·보온 퀼팅 재킷, 니트, 데님/팬츠, 부츠, 머플러, 모헤어제품의 카디건이나 점퍼 |
| 미니멀 | 울 코트, 터틀넥, 울 팬츠, 부츠, 머플러·장갑 |

성별과 연령은 요청에 맞춘다. 아기용은 연령에 맞는 착장·자세·보호자와의 장면으로 별도 설계하며 성인 러닝 행동을 적용하지 않는다.

## 4. 러닝용 반사 디테일

러닝 컷에는 기능성 용품의 재귀반사 소재가 플래시에 선명하게 반응하도록 한다. 실제 모든 러닝 제품에 반사 소재가 있다는 가정이 아니라, 이 화보의 스타일링에서 반사 디테일이 있는 제품을 선택한다.

- 재킷: 어깨·가슴·소매의 가는 반사 파이핑 또는 패널.
- 하의: 옆선·종아리의 작은 반사 포인트.
- 장갑: 손등의 작은 분절 반사 마크.
- 신발: 갑피·옆면·뒤축의 반사 오버레이.
- 헤드밴드/비니: 작은 반사 탭.
- 구도 안에 보이는 용품에 적용한다. 반사 디테일을 보여주려고 잘린 신발을 억지로 추가하지 않는다.
- 렌즈를 향한 부분은 밝은 은백색으로, 다른 각도는 덜 밝게. 원단의 주름과 질감을 유지한다.
- LED, 네온, 자체 발광, 별 모양 광채, 전신을 두르는 빛나는 외곽선은 사용하지 않는다.
- 스트리트·미니멀 의상에는 이 규칙을 일괄 적용하지 않는다.

## 5. 볼드한 컬러를 가끔 섞기

전체 시리즈에 뉴트럴과 강렬한 컬러가 번갈아 등장하도록 한다.

- 기본 운영값: 스타일별 5장 중 1~2장에 볼드한 의상 컬러를 사용한다. 사용자의 “가끔씩” 요청을 구체화한 편집 기준이며 이후 조정 가능하다.
- 코발트 블루, 선명한 레드, 오렌지, 라임, 핫핑크, 퍼플 등을 선택적으로 사용한다.
- 한 착장에 주인공 컬러 하나를 두고 나머지는 차콜·네이비·크림·브라운 등으로 정리한다.
- 가끔 절제된 두 색의 컬러블록도 허용한다. 모든 컷을 다채색으로 만들지 않는다.
- 러닝: 셸이나 이너의 볼드 컬러 + 은백색 반사 디테일.
- 스트리트: 아우터·니트·비니 중 하나를 주인공으로.
- 미니멀: 단순한 실루엣을 유지하면서 니트·머플러 등 한 가지 컬러 포인트.
- 강렬한 색을 소품이나 배경에만 넣고 끝내지 않는다. 의상에도 실제로 반영한다.
- 색보정으로 피부색을 왜곡하거나 모든 색을 과포화시키지 않는다.

## 6. 재사용 기본 생성 프롬프트

아래 변수들을 먼저 채우고, 러닝일 때만 반사 디테일 블록을 추가한다. 한 장마다 ACTION, GAZE, FRAMING을 명확히 지정한다. 시리즈의 시선과 컬러 배분은 생성 전에 계획한다.

~~~text
Use case: photorealistic-natural.
Create ONE independent fashion editorial photograph for a weather app.

Scene: {CITY}, {SEASON}, {TIME_OF_DAY}, {WEATHER}.
Actual temperature {TEMPERATURE_C} C, feels like {FEELS_LIKE_C} C.
Audience age group: {TARGET_AGE_GROUP}; keep this separate from model casting.
Subject: {SUBJECT_GROUP}, model appearance age {MODEL_APPEARANCE_AGE}.
For an adult 35+ target, default to visually around 30 (approximately 28–32).
Distinctive believable appearance, natural skin texture and approved casting age.
Fashion category: {RUNNING / STREET / MINIMAL}.
Complete weather-appropriate outfit: {OUTFIT_AND_ACCESSORIES}.
Color direction for this frame: {NEUTRAL_PALETTE_OR_SPECIFIC_BOLD_GARMENT}.

Photographic language: intimate close 24–28mm wide-angle snapshot,
strong direct on-camera flash, crisp cast shadows, tactile fabric and skin,
slightly gritty analog grain, rich believable color, recognizable everyday
surroundings and moderate depth of field. Fashion is revealed through action.
Direct on-camera flash is MANDATORY in every editorial frame, day or night;
make its punch visibly strong rather than relying on ambient light alone.
Use slightly exaggerated near/far perspective: bring {FOREGROUND_OBJECT}
close to the lens so it appears larger, while keeping anatomy believable.
Vary low curb-level, high and eye-level viewpoints across the series;
20–24mm perspective may be used for stronger foreground emphasis.
Combine the camera angle with a playful everyday gesture, expressive hands
and feet, natural balance and a lively expression. Avoid extreme fisheye.
Do not repeat the same oversized-boot composition throughout a series.
Frame: {FRAMING_AND_CAMERA_HEIGHT}, portrait 2:3.
Action: {SPECIFIC_EVERYDAY_ACTION}.
Gaze: {SPECIFIC_GAZE_TARGET_OR_DIRECT_EYE_CONTACT}.
Head, neck, eyes and expression must naturally follow the action.
Capture a lively unforced moment with personality and subtle humor.

Adapt ambient light to the stated time. At night, retain dark sky and low
ambient exposure with warm practical lights while flash sharply lights the
subject. During daylight, preserve daylight surroundings with punchy fill flash.
Represent the supplied weather accurately; do not invent rain or wet pavement.

Choose layers and footwear for perceived temperature and activity.
Occasionally use a bold clothing color across the series, not in every frame:
one hero-colored garment with a controlled supporting palette.
Minimal outfits retain clean silhouettes even with a vivid accent.

Avoid generic catalog poses, identical expressions, repetitive camera angles,
excessive background blur, plastic skin and artificial cinematic glow.
No text, readable lettering, logos, watermark, UI, border or collage.
Output a single photograph, ideally 1024 × 1536.
~~~

### 러닝에 추가할 블록

~~~text
Style the runner with believable technical retroreflective silver details
on visible sportswear and equipment: narrow jacket piping or panels,
small segmented glove-back marks, trouser seam/calf accents,
shoe upper/heel overlays and a small headband or beanie tab.
Make these surfaces strongly return the direct camera flash, with bright
silver-white highlights strongest toward the lens and weaker at other angles.
Retain material texture and garment folds. Use purposeful athletic detailing.
No LEDs, neon, self-emission, fantasy glow, starbursts or full-body outlines.
Do not add out-of-frame equipment merely to display reflective details.
~~~

## 7. 기존 사진 수정 프롬프트

~~~text
Use case: identity-preserve.
Input image: edit target.
Preserve the person's identity and age, body, existing outfit and warmth,
location, props, action, close wide-angle framing, harsh direct flash,
natural skin and tactile editorial realism.
Change only: {GAZE_AND_HEAD_DIRECTION / REFLECTIVE_DETAILS / NAMED_COLOR_EDIT}.
For gaze changes, turn head and eyes naturally toward {GAZE_TARGET}.
Keep the expression alive and consistent with the action.
For a requested clothing color change, recolor only {GARMENT} to {COLOR},
preserving material, fit, folds and lighting.
For running reflective edits, apply the running block above.
No added text, logos, watermark or collage.
~~~

기본 사진을 수정할 때는 요청하지 않은 착장·인물·배경을 바꾸지 않는다. 볼드 컬러 규칙은 새 세트 기획 시 적용하고, 승인된 기존 사진의 색 변경은 해당 수정 요청이 있을 때 적용한다.

## 8. 개별 제품 이미지 브레이크다운

- 착장을 구성하는 아이템은 반드시 아이템 1종당 별도 이미지 파일 1장으로 생성한다. 아이템이 6종이면 제품 이미지도 각각 독립된 6장이어야 한다.
- 여러 아이템을 한 장의 그리드·콜라주·제품 보드에 합치지 않는다. 개별 제품 이미지를 각각 따로 생성한다.
- 신발·양말·장갑처럼 한 켤레/한 쌍으로 사용하는 제품은 한 아이템으로 취급하여 한 이미지에 해당 한 켤레/한 쌍만 담는다.
### 신발 제품 컷 구도 (2026-10-21 사용자 레퍼런스 기준)

최우선 목적은 한 켤레를 깨끗하고 가지런하게 정돈하여 제품 전체의 형태가 잘 보이게 하는 것이다. 신발 종류에 맞춰 구도를 선택하며, 모든 신발을 탑뷰 하나로 고정하지 않는다.

| 신발 종류 | 배치와 카메라 |
| --- | --- |
| 스니커즈·러닝화 | 두 짝을 밑창으로 바닥에 놓고 나란히 정렬한 수직 탑뷰. 현재 승인된 러닝화 제품 컷의 방식 유지 |
| 플랫슈즈·슬리퍼·로퍼 등 낮은 신발 | 두 짝을 가지런히 나란히 놓고 위에서 수직으로 내려다본다. 앞코는 위쪽 또는 아래쪽 모두 가능하나 한 이미지 안에서는 두 짝의 방향을 통일 |
| 앵클부츠·부츠 등 발목 높이가 있는 신발 | 밑창을 바닥에 놓고 두 짝을 똑바로 세운다. 같은 방향으로 살짝 돌린 정돈된 3/4 앵글로 앞코·옆면·발목 높이·전체 실루엣을 함께 보여준다. 두 부츠를 알아볼 수 있게 필요한 만큼만 살짝 앞뒤로 배치 가능 |

- 모든 유형에서 한 켤레의 크기와 간격을 균형 있게 맞추고, 위아래·좌우 여백을 확보해 발목부터 밑창까지 전체 제품을 담는다.
- 부츠를 옆으로 눕히거나 발목 부분을 접어 형태를 숨기지 않는다. 플랫류는 불필요하게 비틀거나 서로 다른 방향으로 흩어놓지 않는다.
- 정돈된 배치가 우선이다. 과도한 원근 왜곡, 어지러운 교차·겹침, 잘린 제품, 인물·소품을 사용하지 않는다.
- 배경은 기존 따뜻한 아이보리로 통일하고 부드러운 접지 그림자를 유지한다. 제공된 레퍼런스의 화면 UI·로고·텍스트는 복제하지 않는다.
- 한 켤레는 한 아이템이며 독립된 제품 이미지 파일 1장에 담는다.

- 각 이미지는 에디토리얼을 참조해 해당 아이템의 색상·소재·실루엣·지퍼·포켓·봉제선 등 보이는 디테일을 일치시킨다. 가려진 부분을 임의로 확정된 디테일처럼 설명하지 않는다.
- 제품마다 500 × 500, 1:1 정사각형, 따뜻한 아이보리 배경(#F3EFE8 근처), 기본 수직 탑뷰(부츠는 위 신발별 3/4 앵글 적용), 부드러운 접지 그림자, 일정한 여백을 사용한다. 제품 전체를 프레임 안에 담는다.
- 인물·손·마네킹·행거·다른 제품·텍스트·로고·워터마크를 넣지 않는다. 앱용 JPG 50KB 이하로 저장한다.

### 개별 제품 컷 기본 프롬프트

~~~text
Use case: product-mockup.
Use the editorial image as the outfit reference.
Create ONE standalone square product photograph of {SINGLE_ITEM} only.
Preserve the visible color, material, silhouette and construction details
of that item in the editorial. Do not redesign the item.
One item category per image and per file. A matching pair of shoes, socks
or gloves counts as one item and may appear together in its own image.
Warm ivory floor/background near #F3EFE8, soft studio light,
subtle contact shadow, entire item visible, centered composition
and consistent generous margins.
Default to vertical overhead flat-lay for clothing and low footwear.
Sneakers and flat shoes: both shoes resting on soles, parallel and neatly
aligned side by side, camera directly overhead. Toes may face toward the
top OR bottom of the image, consistently for both shoes in the pair.
Ankle boots and boots: stand both boots upright on their soles, neatly
aligned and turned slightly together for a clean three-quarter view
showing toe, side, shaft height and complete silhouette. A modest stagger
is allowed only to make both boots visible. Never lay boots on their sides.
Clean, orderly presentation and full product visibility take priority.
No other products, person, hands, mannequin, hanger, text, logo,
watermark, grid, collage or multi-item board.
Deliver each item separately; six items require six separate images.
App export: 500 × 500 JPG, 50KB maximum.
~~~

## 9. 제작 전후 확인

- 도시·날씨·시간·실제 기온·체감온도·대상 연령·스타일을 기록했는가?
- 타깃 연령과 모델 외관 연령을 분리했는가? 35+ 타깃의 기본 모델 외관은 30세 전후인가?
- 착장이 체감온도와 활동에 맞고, 사진에 보이는 아이템과 설명이 일치하는가?
- 시선과 행동, 프레이밍이 시리즈 안에서 다양하게 구성됐는가?
- 가까운 오브젝트의 살짝 과장된 원근감, 카메라 높낮이, 재미있는 제스처를 함께 설계했는가?
- 낮·밤 모두 강한 직광 플래시가 확실히 드러나는가?
- 제품 이미지가 아이템 1종당 독립된 파일 1장이고, 6종이면 각각 6장으로 제작됐는가?
- 러닝 반사 소재가 플래시에 반응하면서 실제 소재처럼 보이는가?
- 일부 착장에 볼드한 컬러가 있고, 전부 비슷한 무채색 또는 과도한 다채색이 되지 않았는가?
- 인체와 손·발·소품의 형태가 자연스러운가?
- 텍스트·로고·UI 없이 한 장의 에디토리얼 사진으로 완성됐는가?

앱의 룩 데이터와 이미지 등록 방식은 [look-library.md](look-library.md)를 따른다. 이 문서는 촬영·스타일링과 프롬프트의 기준이며 앱 데이터 스키마를 변경하지 않는다.

## 10. 로케이션 확장 및 인물 중심 구성 (2026-10-22 사용자 승인)

### 원본 유지 범위

기존 아트 디렉션과 사진 스타일을 유지한다. 로케이션 확장은 도시 배경의 단서를 바꾸는 것이며, 지역마다 다른 촬영 스타일을 도입하는 것이 아니다. 이 절에 명시하지 않은 원문은 그대로 유지한다.

- **사진 스타일:** 모든 낮·밤·날씨에서 강한 카메라 직광 플래시, 또렷한 그림자, 실제 피부결과 원단 질감, 약간의 필름 입자, 풍부하지만 현실적인 색을 유지한다.
- **카메라워크:** 기본 24–28mm 광각, 필요한 컷의 20–24mm 원근감 강조, 가까운 손·신발·소품을 이용한 깊이, 하이앵글·로우앵글·눈높이와 촬영 방향의 변주를 유지한다. 과도한 어안 왜곡은 피한다.
- **프레이밍:** 전신·무릎 위·상반신·얼굴과 손 클로즈업·뒷모습 등 기존의 자유로운 크롭을 유지한다. 잘린 신발이나 소품을 보여주려고 프레임을 넓히지 않는다.
- **모델:** 인물마다 다른 얼굴·머리·체형과 자연스러운 피부를 유지한다. 타깃 연령과 모델 외관 연령을 분리하며, 성인 35+ 타깃의 기본 외관은 기존대로 약 28–32세로 설정한다.
- **행동과 시선:** 실제 생활 상황에서 발생하는 자발적 반응, 행동을 따라가는 머리·목·눈·표정, 직접 시선과 자연스러운 시선의 혼합을 유지한다.
- **기타:** 러닝 반사 디테일, 의상의 볼드 컬러 운영, 세로 2:3와 출력 규격, 제품별 독립 이미지 및 제품 복원 기록 규칙을 유지한다.

기존 승인 사례와 촬영 변주 표는 보존한다. 새로운 비율 규칙을 이유로 모든 컷을 정면 전신이나 동일한 앵글로 통일하지 않는다.

### [추가] 인물이 화면을 꽉 채우는 구성

- 모델이 화면의 **80–90%**, 배경·도로·하늘이 합쳐서 **10–20%**를 차지하도록 구성한다.
- 이 비율은 인물이 화면을 채우는 구성 기준이다. 모델 키가 화면 높이의 80–90%라는 의미로만 적용하지 않는다.
- 전신 컷뿐 아니라 상반신·클로즈업·사선 크롭에서도 인물이 화면을 밀도 있게 채우도록 한다.
- 배경은 인물 주변의 좁은 여백과 틈에서 지역·날씨·시간을 전달한다. 도시를 설명하려고 넓은 도로나 하늘을 추가하지 않는다.
- 기존의 주변 공간을 알아볼 수 있는 심도는 유지한다. 배경 비중을 줄인다는 이유로 모든 배경을 강하게 흐리지 않는다.
- 근거리 소품의 원근감은 유지하되, 소품이 모델의 표정과 착장을 과도하게 가리지 않도록 한다.

### [명확화] 일상 속 독특한 표정·몸짓·제스처

기존의 **실제 생활 상황 → 자발적 반응 → 절제된 위트 → 에디토리얼 순간** 원칙을 유지하면서, 각 컷의 표정과 몸짓에 개성을 부여한다.

- 먼저 구체적인 상황과 행동의 이유를 정한다.
- 그 상황에서 자연스럽게 나오는 독특한 표정, 손짓, 몸의 기울기, 균형 변화와 시선을 포착한다.
- 예: 물웅덩이를 피하며 순간적으로 균형 잡기, 바람에 날리는 비니 붙잡기, 장바구니 안을 들여다보며 뜻밖의 표정 짓기, 열쇠를 찾다가 고개를 기울이기.
- 모든 모델에게 같은 웃음이나 렌즈를 향한 제스처를 요구하지 않는다.
- 독특함을 만들기 위해 일상 맥락이 없는 과장된 포즈나 우스꽝스러운 표정을 강요하지 않는다.
- 카메라는 그 순간을 가까이에서 우연히 포착한 듯 촬영한다.

### [수정·확장] 지역별 도시 배경

기존 3장의 베를린 생활 거리 표현을 다음 지역별 배경 원칙으로 확장한다. 카메라워크·모델 캐스팅·사진 질감·포즈 원칙은 지역에 따라 바꾸지 않는다.

| 지역 | 배경에 은은하게 드러낼 단서 |
| --- | --- |
| 유럽 | 유럽식 생활 거리, 자갈·석재 포장길, 주택 출입구와 동네 가게의 일부 |
| 동아시아 | 서울풍 도시 거리, 작은 상점과 컬러 간판의 일부, 간판 색과 배치가 만드는 거리의 분위기 |

- 지역성은 화면의 10–20% 안에서 전달한다.
- 유명 랜드마크, 관광 명소, 기념물은 배제한다.
- 간판은 색·형태·배치로 표현한다. 기존 텍스트·로고 금지 규칙에 따라 읽을 수 있는 상호·문구·브랜드 로고는 넣지 않는다.
- 지역을 보여주기 위해 인물을 작게 만들거나 배경 중심 구도로 전환하지 않는다.

### [명확화] 구름·맑음·비·낮·밤의 표현

날씨와 시간은 입력 조건에 맞게 사진 안에서 확인할 수 있어야 한다. 모든 조건에서 기존의 강한 직광 플래시를 유지한다.

| 조건 | 시각적 반영 |
| --- | --- |
| 맑음 | 맑은 주변광과 그림자, 프레임에 보이는 경우 맑은 하늘. 근거 없이 젖은 바닥을 만들지 않는다. |
| 구름 많음·흐림 | 구름 상태와 확산된 주변광, 흐린 거리의 밝기와 분위기 |
| 비 | 입력 강수량에 맞는 빗방울·젖은 포장면·우산 등의 단서. 가벼운 비를 폭우나 큰 물보라로 바꾸지 않는다. |
| 낮 | 실제 낮의 주변광을 유지하면서 강한 직광 플래시로 인물을 강조한다. |
| 밤 | 낮은 주변광, 보이는 경우 어두운 하늘, 가로등·상점 불빛 위에 강한 직광 플래시를 더한다. |

- 날씨와 시간은 함께 적용한다. 예: 흐린 낮, 비 오는 밤.
- 하늘이 없는 탑뷰나 클로즈업에서도 주변광·포장면·프레임 안의 단서로 조건을 전달한다.
- 날씨를 보여주기 위해 배경·도로·하늘의 합계 비중을 20%보다 크게 늘리지 않는다.
- 기존의 눈·바람 등 다른 입력 조건에 대한 규칙도 유지한다.

### [구조 분리] 고정 아트 디렉션과 동적 스타일링

#### 고정 아트 디렉션

직광 플래시, 광각 원근감, 근접 촬영, 다양한 앵글과 크롭, 모델 표현, 실제 피부·원단 질감, 필름 입자와 색 표현은 공통 기준으로 유지한다.

#### 동적 입력 요소

다음 항목은 매 요청의 조건으로 분리한다.

- 도시·지역 배경
- 계절·날씨·낮과 밤
- 실제 기온·체감온도·습도·바람·강수
- 활동량과 러닝·스트리트·미니멀 분류
- 조건에 맞는 의상·소재·보온 정도·레이어링·신발·액세서리

기존 3장의 체감온도·활동량 중심 착장 규칙과 승인된 추운 밤 예시는 유지한다. 여기에 습한 더위·건조한 더위·습한 추위·건조한 추위를 별도의 스타일링 조건으로 반영한다.

기후별로 통기성·흡습속건·보온·방풍·강수 대응의 필요를 판단하고, 그 결과로 소재와 레이어 구성을 정한다. 패딩·울 코트·캐시미어·기능성 셸 등을 지역명만으로 고정하지 않는다.

**기후가 바뀌면 착장과 소재·레이어링이 달라지고, 사진의 기본 촬영 언어는 유지된다.**

### [추가] 기존 생성 프롬프트에 결합할 블록

기존 6장의 기본 생성 프롬프트는 유지하고 아래 블록을 추가한다. 지역 배경 지시는 기존의 도시 표현을 구체화하며, 읽을 수 있는 글자 금지 규칙은 유지한다.

~~~text
Composition:
The model fills approximately 80–90% of the image.
Background, street and sky together occupy only 10–20%.
Maintain the specified camera angle, close wide-angle perspective
and intentional crop. Do not widen the frame to show the location.

Everyday moment:
Situation and reason: {EVERYDAY_SITUATION_AND_TRIGGER}.
Spontaneous response: {DISTINCTIVE_BELIEVABLE_EXPRESSION_AND_GESTURE}.
Keep the action grounded in everyday life, with unforced personality.
Do not give every subject the same smile or camera-facing gesture.

Regional background:
{SUBTLE_REGIONAL_URBAN_CUES}.
Europe: everyday European streets and cobbled or stone paving.
East Asia: Seoul-like colorful shop-sign shapes and urban street details.
Keep regional cues secondary and within the limited background area.
No landmarks, readable lettering or brand logos.

Weather and time:
Show {CLOUD_CONDITION}, {PRECIPITATION} and {DAY_OR_NIGHT}
through visible ambient light, street surfaces and in-frame details.
Do not add sky or expand the background merely to explain the weather.
Keep strong direct on-camera flash in every condition.

Dynamic wardrobe inputs:
Climate: {HUMID_OR_DRY_HEAT_OR_COLD}.
Feels-like temperature: {FEELS_LIKE_C}.
Wind, precipitation and activity: {CONDITIONS_AND_ACTIVITY}.
Materials and layering: {CONDITION_APPROPRIATE_MATERIALS_AND_LAYERS}.
These inputs change wardrobe choices while preserving the established
photographic language and casting rules.
~~~

### [추가] 제작 확인 항목

기존 9장의 확인 목록에 다음을 추가한다.

- 모델이 화면의 80–90%를 채우고, 배경·도로·하늘의 합계가 10–20%인가?
- 기존 앵글·촬영 방향·자유로운 크롭과 강한 직광 플래시가 유지됐는가?
- 독특한 표정·몸짓·제스처에 실제 생활 속 원인과 맥락이 있는가?
- 지역 단서가 배경에 은은하게 드러나며 랜드마크와 읽을 수 있는 간판 문구는 없는가?
- 구름·맑음·비·낮·밤이 입력 조건과 일치하는가?
- 기후별 의상·소재·레이어링을 고정 사진 스타일과 분리해 결정했는가?
