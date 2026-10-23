# 배경 없는 대표 컷 (홈 헤드라인 뒤 그림, b133)

**새 제품 세트를 매핑할 때마다 이 문서대로 배경 없는 컷을 같이 만든다.** 사용자가 따로 말하지 않아도 매핑 작업의 일부다(2026-10-23 사용자 결정).

## 무엇을 위한 것인가

- 홈 화면 TODAY'S LOOK 헤드라인(오늘의 픽 룩 타이틀) 오른쪽 뒤에 그 룩의 **대표 제품**이 배경 없이 깔린다(불투명 100%, 시안 A).
- **대표 제품 = 제목이 말하는 제품**(b134, 사용자: "CITRON ON THE TERRACE인데 시트론 니트가 아니잖아"). 아우터를 무조건 쓰지 않는다.
- 헤드라인은 왼쪽 60%, 그림은 오른쪽 45% 칸이라 가운데 5%만 겹친다(b136). 겹친 글자도 **헤드라인과 같은 색 그대로**(b137 사용자 결정, b133의 흰색/검정 자동 바꾸기는 없앰). `lum`은 계산해 두지만 지금 앱에서 안 쓴다.
- 컷이 없는 룩·기사(article) 없는 룩·플레이스홀더 날은 글자만 나온다. 컷이 빠져도 앱은 깨지지 않지만 홈 그림이 안 나온다.

## 제작 측에서 받는 형식 (바뀌지 않음)

- 제품 컷은 **계속 아이보리 바닥 JPG**(500×500, ≤50KB)로 받는다. Today's Look 제품 카드와 캘린더 카드가 이 아이보리 바닥을 그대로 쓴다.
- 배경 없는 버전은 제작 측에 요청하지 않는다. 매핑할 때 여기서 자동으로 만든다.
- JPG는 투명 배경을 못 담는다. 그래서 컷만 **투명 WebP**(`.cut.webp`)로 둔다. 저장소의 "사진은 JPG만" 규칙의 유일한 예외다.

## 대표 제품 고르는 규칙 (b134)

1. 제목 단어를 앞에서부터 본다. 작은 단어(THE, AT, ON …)와 **날씨 단어(GRAY, RAIN, DRIZZLE, PUDDLE)**는 건너뛴다. GRAY DAY·RAIN은 하늘이지 옷이 아니다.
2. 그 단어가 제품 이름(en)에 들어 있는 제품을 찾는다. 같은 색의 다른 이름도 같이 본다: BLUE → cobalt, RED → cherry·crimson, CREAM → ivory·ecru, COCOA·ESPRESSO → chocolate, OAT → oatmeal, OXBLOOD → burgundy, CHECKS → check, QUILTING → quilted, PATTERN → geometric·graphic, TEXTURE → textured.
3. 처음 맞는 단어에서 멈춘다. 그 색 제품이 여러 개면 크게 보이는 것부터: outer → top → scarf → bottom → bag → headwear → shoes → 나머지.
4. 맞는 단어가 없으면(TAKE THE LONG WAY 등) 아우터.
5. 예: CITRON ON THE TERRACE → 시트론 케이블 니트, OXBLOOD ON THE WAY HOME → 버건디 부츠, BURGUNDY AT THE DOOR → 버건디 머플러, A SMALL SHOT OF YELLOW → 애시드 옐로 파우치, COME UNDER THE UMBRELLA → 우산, READY FOR A LITTLE RAIN → 레인코트(아우터).
6. 고른 결과는 `look/cutouts.js`의 `HERO`(룩 → 아이템)에 남는다. **스크립트는 이미 있는 HERO 행을 바꾸지 않는다.** 잘못 골랐으면 그 행을 손으로 고치고 스크립트를 다시 돌리면 그 컷만 새로 만든다. 다시 자동으로 고르게 하려면 그 행을 지운다.
7. `--check`로 룩마다 무엇이 골렸는지(이유 단어 포함) 보고, 제목과 안 맞는 것이 있으면 손으로 고친다.

## 만드는 법

매핑(look/outfits.js 또는 보충 파일에 룩·아이템 연결)을 끝낸 뒤:

```sh
pip install "rembg[cpu]"                    # 컨테이너마다 한 번, 첫 실행 때 모델(약 180MB) 받음
python3 tools/make-cutouts.py --check       # 컷이 빠진 기사 룩 목록만 보기
python3 tools/make-cutouts.py --sheet <스크래치패드>/cutouts-sheet.png
```

스크립트가 하는 일:

1. index.html의 `<script src="look/…js">` 순서대로 라이브러리를 읽고, 기사 룩마다 위 규칙으로 대표 제품을 고른다(HERO에 있으면 그대로). 쓸 제품이 없는 기사 룩은 이름만 알려 준다(홈은 글자만).
2. 제품 JPG에서 rembg `isnet-general-use`로 배경을 지우고(`post_process_mask`), 옷 크기로 딱 맞게 자른다.
3. 같은 폴더에 `<원래 이름>.cut.webp`(품질 80)로 저장한다. 예: `products/01-outer.jpg` → `products/01-outer.cut.webp`. 보통 9–30KB.
4. 옷 부분의 평균 상대 밝기(`lum`)를 계산해서 `look/cutouts.js`를 다시 쓴다: `CUTS`(아이템 → [경로, lum]), `HERO`(룩 → 아이템). 대표가 아닌 컷 행은 빠진다. 쓰이지 않게 된 `.cut.webp` 파일은 지운다.
5. 새 컷들을 노랑(맑음)·남색(밤) 바탕에 올린 확인용 시트를 만든다.

## 꼭 확인할 것

- **확인용 시트를 눈으로 본다.** 크림·흰색·밝은 회색 옷이 통째로 남아 있는지, 아이보리 그림자나 바닥이 테두리처럼 남지 않았는지. 이상하면 그 컷만 다시 만들거나 사용자에게 알린다.
- **색으로 바탕을 지우는 방식(아이보리 색만 투명하게)은 쓰지 않는다.** 크림 니트·양말이 바탕과 같이 지워진다(2026-10-23 실험).
- `look/cutouts.js`는 index.html에서 **모든 라이브러리 스크립트 맨 뒤**에 로드된다. 새 보충 파일(`look/<세트>.js`)을 추가하면 그 `<script>`를 cutouts.js **앞**에 넣는다.
- cutouts.js를 바꾸면 index.html의 `look/cutouts.js?v=bNN`과 `BUILD`를 올린다.
- 기존 아이템 ID를 바꾸지 않는다. 대표 제품을 바꾸려면 HERO의 그 룩 행만 고친다.
- 가짜 데이터로 홈을 열어 그림이 헤드라인 뒤에 있고 요약 문단과 겹치지 않는지 확인한다.
- 보고할 때 몇 장을 만들었는지, 아우터가 없어 빠진 룩이 있는지 적는다. CLAUDE.md 변경 기록과 `design/look-coverage.md`에도 반영한다.

## 앱 쪽 구현 (참고)

- index.html `paintPeek`(룩의 `hero` 아이템, 컷 있을 때만) → `paintCut(hero)` → `placeCut()`.
- 그림 위치: 높이 = 오늘의 룩 블록 높이 + 16px, 폭은 최대 60%, 오른쪽 끝은 화면 여백 안 16px, 세로 가운데. 요약 문단까지 내려가지 않는다.
- 헤드라인 두 줄 나누기·크기는 `fitHead`(왼쪽 60% 폭에 맞춤), 그림 칸은 `placeCut`(오른쪽 45%, 55–100%, 그 칸 안 가운데). 겹친 글자 색은 바꾸지 않는다(b137).
- 디자인 규칙은 `design/design-system.md` 6장 오늘의 룩 항목에 있다.
