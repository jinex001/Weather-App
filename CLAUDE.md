# 미니멀 날씨앱 — 프로젝트 브리프

광고 없이 지금 날씨를 숫자 하나로 보여주는 아이폰용 날씨앱. 디자인은 Claude 디자인 캔버스에서 확정했고, 이 폴더의 `design/`에 그대로 들어 있습니다.

## 현재 상태 (2026-10-23, 빌드 b137)

- GitHub Pages로 배포됨: https://jinex001.github.io/Weather-App/ · `main`에 push하면 1~2분 뒤 반영.
- `index.html`: 웹앱. Open-Meteo 예보 + DWD 실측(Bright Sky) + 구름 양 중간값(MET Norway), 5가지 색 상태(낮 4 + 밤 1, 흐린 낮은 햇빛 3단계), 움직이는 날씨 그림, 체감온도 9단계 블록, 홈의 오늘의 룩 글자 + 요약 = 오늘의 픽 룩 타이틀·캡션·인트로 + 비 문장(b117), 24시간 예보(바람·강수), 하단 메뉴(홈·캘린더·설정·알림, 공통 글라스), 캘린더 7 DAYS = 내일부터 7일 카드(그날 날씨에 맞는 룩의 대표 제품 컷, 누르면 그 룩 에디토리얼 + 날짜·요일·움직이는 아이콘·기온·강수·바람, b107), **Today's Look**(공통 글라스 시트, 고른 스타일·성별 안에서 룩 3개 랜덤, 사진만 스와이프, 흐린 날 세트는 제품 카드 안에 입는 법), 질문 화면, 기기 언어 자동(ko/en/de), 15분 새로고침, 오프라인 캐시. 도시 이름(+ 위치 핀)을 누르면 위치 시트: 도시 검색 · 내 목록 저장 · 현재 위치(b123).
- `look/outfits.js`: 룩 라이브러리(135룩 · 862아이템, 모두 쌀쌀함 · 35+). 사진은 `look/berlin-complete/<Sunny|Overcast>/Chilly/<Male|Female>/35+/<day|night>/`와 비 세트 `look/berlin-complete/Rain/<Light|Normal|Pouring>/Chilly/…/<스타일>/<번호>/`, JPG만. 새 세트 매핑은 `design/IMAGE_MAPPING_HANDOFF.md` 규칙. **사용자가 GPT에서 만들어 GitHub에 올린 이미지를 보내면 Claude가 배경 정리를 한다**: 매핑할 때마다 배경 없는 대표 컷도 자동으로 만들 것, `design/CUTOUTS.md`(`tools/make-cutouts.py`). 형식·고르는 규칙·지금 들어 있는 것은 `design/look-library.md`.
- `widget/weather-widget.js`: Scriptable 위젯(small/medium/large + 잠금화면 3종). 색 규칙은 앱과 같음(흐린 낮 햇빛 3단계 포함). 홈 화면 위젯은 앱 날씨 그림(`widget/art/*.png`, 멈춘 장면, 40% 흐리게)을 가운데에 크게 깔고 기온·상태·오늘 요약(앱과 같은 문장 + 체감 단계 색 막대)을 위에 올림. 체감 사람 아이콘·Today's Look은 없음.
- 아이폰 확인: 헤드 탭으로 Today's Look 열림을 사용자가 확인(b15). 나머지는 가짜 데이터 렌더링으로 확인.
- 상태 줄 끝 빌드 표시(`BUILD`, index.html)는 앱 코드를 바꿔 배포할 때마다 올릴 것. 폰이 예전 페이지를 붙잡고 있는지 확인하는 용도. b21부터 앱이 새로고침할 때 배포된 페이지의 `BUILD`를 확인해서 다르면 스스로 다시 불러옴(그래서 `var BUILD = "bNN"` 형식을 바꾸지 말 것).
- 디자인 값의 기준은 `design/tokens.json`(v5)과 `design/design-system.md`(2026-10-22 b122까지 정리). 바꾸면 이 두 파일도 같이 고칠 것. 룩 데이터는 `design/look-library.md`, 세트 현황·빈 칸 목록은 `design/look-coverage.md`(세트 매핑할 때마다 고칠 것), 사진 스타일은 `design/IMAGE_STYLE.md`. `design/look-chilly.md`·`look-cool.md`·`look-clear.md`는 b71 이전 기록(앱에서 안 씀).
- 다음 작업은 사용자 요청에 따라 진행.
- 커밋 이메일은 `jinex001@users.noreply.github.com` 사용 (공개 저장소라 개인 이메일 노출 금지).

### 변경 기록 (2026-10-22, b127)

- Sunny 남성 낮 미니멀 11–15: 각 6종 총 30개 제품 컷과 3개 언어 문구·기사 연결. 기존 5개 룩 ID와 21개 아이템 ID 유지, 추가 관찰 품목 9개 추가. 다른 130룩 최종 데이터 보존. 기본 파일 793아이템, Street 보충 매핑 적용 후 총 807아이템·기사 100룩. 검증: `design/sunny-male-day-minimal-validation.md`.

### 변경 기록 (2026-10-17)
- 흐린 낮 상태 추가 → 웜그레이 → 쿨그레이 `#DCE1E5` → 2026-10-18 더 진한 `#A9B1B9`(b28). 밤은 날씨와 상관없이 전부 `#1B2140`.
- 체감온도: 큰 기온 옆 → 헤드 아래 독립 블록, 9단계 색·움직이는 사람 아이콘(무한 반복).
- 24시간 예보 추가(지금 칸은 맨 앞, 5px 점).
- 글꼴 Poppins로 통일(큰 숫자만 Anton), 상태 문구 대문자.
- 날씨 그림 움직임(맑음 코드 0/1/2 구분).
- Today's Look 시트와 질문 화면. 헤드 전체가 탭 영역.
- b16: 비 코드인데 지금 강수 0.1mm 미만 + 이번 시간 강수확률 40% 미만이면 흐림으로 표시. 날짜 줄은 현지 시계 시각. Today's Look 빗방울 글자색, "지금 비가 와요" 문구.
- b17: Today's Look 배경을 반투명(단계 색 66%) + 뒤 메인 화면 블러로(iOS 글라스 느낌).
- b18: 요청 실패 시 4·8·12초 뒤 재시도(앱 복귀 직후 iOS 요청 실패 대응), online/pageshow에도 새로고침. 20분 이내 데이터면 실패해도 "Offline" 대신 "Updated". 마지막 오류는 `<html data-last-error>`.
- b19: 날씨 그림 칸을 화면 전체 폭으로(그림 크기·위치는 그대로). 흐르는 구름이 그림 가장자리에서 잘리지 않고 화면 끝에서 끝까지 지나감.
- b20: 쌀쌀 단계 사람 동작을 어깨 움츠림 → 옷깃 여미기(몸이 좁아지며 고개 숙이고 잠깐 버팀)로 변경(사용자가 6가지 중 F 선택).
- b21: 자동 업데이트. 새로고침 때(앱 복귀·15분) 배포된 index.html의 BUILD와 비교해 다르면 location.reload() (1분에 한 번, 같은 빌드로는 한 번만).
- b22: 쌀쌀 동작에 찬바람 두 줄이 한 번 지나간 뒤 옷깃 여미기(사용자 요청).
- b23: 자동 업데이트 때 location.reload() 대신 `?v=<빌드>` 주소로 이동(Pages 10분 캐시 회피).
- b24: 체감온도 블록 사람 아이콘 44 → 53px, 머리 끝·발이 숫자 윗선·바닥선과 맞게(사용자 요청).
- b25: 비→흐림 바꾸는 b16 규칙 완화. 15분 강수(minutely_15)에서 지난 30분~앞 30분 사이 비가 조금이라도 있으면 비로 둠(약한 비가 0.0으로 반올림돼 흐림으로 나오던 문제, 사용자가 비 오는데 흐림 표시 확인).
- b26: 체감온도 9단계 색을 사용자가 준 "기온별 옷차림" 표 색으로 다시 지정(파랑 → 청록 → 금색 → 주황 → 빨강). 쾌적 "항상 흰색" 예외 없앰.
- b27: Today's Look 시트는 예전 단계 색(LOOK_COLOR) + 반투명 글라스 그대로. 새 색은 메인 체감온도 블록에만.
- b28: 흐린 낮 배경 `#A9B1B9`.
- b30: 지금 날씨(기온·바람·상태)를 독일 기상청(DWD) 관측소 실측값으로. Bright Sky `https://api.brightsky.dev/current_weather?lat&lon`를 Open-Meteo와 동시에 요청, 측정 시각이 90분 이내면 적용(체감은 모델 체감 + (실측 − 모델 기온)). condition/icon → 날씨 코드 변환(`obsCode`). 실측을 쓰면 b16/b25 비→흐림 보정은 건너뜀. 실패·독일 밖·오래된 값이면 Open-Meteo만. 상태 줄에 "· DWD" 표시. 최고·최저는 지금 기온을 포함하도록. 예보(시간별·일별)는 계속 Open-Meteo. 이 환경에선 두 API 모두 막혀 실제 응답 확인 못 함(가짜 응답으로만 테스트).
- b31: 체감온도 새 색 체계(사용자가 준 표). 9단계 범위 ≤-20 / -19~-10 / -9~0 / 1~9 / 10~17 / 18~23 / 24~28 / 29~34 / ≥35, 색 #6434A5 #4762D6 #378FE4 #58C4DC #6FCDB0 #79C66C #F0C84E #F38B3D #D94448, 이름 극한 추위·매우 추움·추움·쌀쌀함·선선함·쾌적함·따뜻함·더움·극심한 더위. 블록 글자는 화면 글자색(밝은 화면 검정; 비·밤은 밝은 글자색), 사람 아이콘은 흰색, 뒤에 단계 색 둥근 배지(56px). 배지가 배경에 묻힐 때(1.5:1 미만)만 그 경우 진하게/밝게.
- b32: 배지 안 사람 아이콘을 원 정가운데로(그림이 30칸 상자에서 왼쪽·아래로 치우쳐 있던 것 보정, 사용자 요청).
- b33: Today's Look 시트의 사람 아이콘도 메인과 같은 둥근 배지(단계 색 64px, 흰 사람 43px, 정가운데).
- b34: 체감온도 블록의 "체감온도" 라벨과 단계 이름을 대문자로(사용자 요청, 한글은 그대로).
- b35: Poppins 자간 살짝 줄임(사용자 요청). 기본 -.02em, 상태 문구 .5px → -.02em, 작은 라벨 .04 → .02em, 대문자 kicker .08 → .06em. Anton 숫자는 0.
- b36: Today's Look에 옷차림 사진(한 줄 요약과 아이템 사이). 사용자가 준 에디토리얼 시트(성별 × 스트리트/미니멀 × 기온 7칸 × 2룩, 아기 스트리트/미니멀 × 7칸)를 한 장씩 잘라 `look/`에 둠. 체감온도로 칸 선택(≥30/24–29/18–23/12–17/6–11/0–5/<0), 룩 a/b·"선택 안 함" 성별은 날마다 번갈아. 아기 사진은 WITH BABY 아래. 질문 화면에 스타일(스트리트웨어/미니멀) 추가, 프로필 `v: 2` 없으면 한 번 다시 물음. 잘라낸 원본이 작아(가로 ~75px) 폭 56%로 표시.
- b37: 쌀쌀함(체감 1~9°) Today's Look을 스타일별 전용 화면으로(사용자가 준 CHILLY 시트). 한 줄 요약 아래 큰 룩 사진(폭 100%) → THE PIECES(아이템 사진 6장, 3열, 이름) → 아이템 6줄(Outer·Top·Bottom·Shoes·Socks·Bring). 사진 `look/chilly/<run|street|minimal>-<m|f>.jpg`, `-p1~6.jpg`. 문구는 index.html `CHILLY`(ko/en/de), 원문 `design/look-chilly.md`(30~40대 기준). 스타일 질문에 러닝·운동 추가(다른 단계에선 러닝이면 사진 없이 기존 문구, 아기 사진은 스트리트).
- b38: 스타일을 질문 화면에서 빼고 룩 화면 탭으로(한 줄 요약 아래, 사진 위. 러닝·운동/스트리트웨어/미니멀 알약, 고른 것은 검정). 고르면 `wx-profile.style`에 저장, 스크롤 위치 그대로 다시 그림. 기본 미니멀. 질문은 다시 3개.
- b39: 사용자가 한 장씩 주는 큰 룩 사진은 `look/<단계>/<스타일>-<m|f>.jpg`에 두고 index.html `HERO`에 등록하면 시트에서 자른 작은 사진 대신 폭 100%로 나옴. 첫 사진: 선선함·스트리트웨어·남성(`look/cool/street-m.jpg`, 1024×1536). b40: 선선함·미니멀·남성(`look/cool/minimal-m.jpg`). b41: 선선함·러닝·남성(`look/cool/run-m.jpg`).
- b42: 선선함 러닝 전용 한 줄 요약·아이템 6줄(남녀, ko/en/de). index.html `STYLE_TEXT[단계][스타일]`(CHILLY와 같은 형식, pieces 없음)에 넣으면 그 단계·스타일만 기존 문구 대신 나옴. 원문 `design/look-cool.md`.
- b43: 선선함·러닝·여성 큰 사진(`look/cool/run-f.jpg`).
- b44: 선선함·스트리트·여성, 선선함·미니멀·여성 큰 사진. 선선함은 6조합 모두 큰 사진.
- b45: 선선함 스트리트·미니멀 문구도 스타일별(남녀, ko/en/de, 사진에 맞춤). 선선함은 3스타일 × 남녀 모두 전용 문구. 표는 `design/look-cool.md`.
- b46: 쌀쌀함 큰 룩 사진 6장을 사용자가 준 새 에디토리얼(1024×1536)로 교체(`look/chilly/<스타일>-<m|f>.jpg`). 사진에 맞춰 스트리트 여성(아우터·상의·소품), 미니멀 남성(아우터·하의·신발·소품) 문구 수정. 아이템 사진 6장(-p1~6)은 예전 시트 그대로.
- b47: 선선함·미니멀·여성 사진 교체(롱 코트 + 머플러 + 앵클 부츠), 신발 문구를 앵클 부츠 먼저로.
- b48: 스타일 탭 → 그룹 스위처(시안 B + 대문자, 사용자 선택). 헤드라인과 한 줄 요약 사이. 연회색 알약 트랙(ink 8%) 안에 칸, 고른 칸은 검정 채움·흰 글자, 11.5px 700 대문자 .05em. 칸: 러닝/스트리트/미니멀 + 아기(질문에서 아기 "네"일 때만). 아기를 고르면 한 줄 요약 = 단계별 아기 문구, 사진 = 아기 스트리트·미니멀 두 장 나란히(정사각), 아이템 없음(비·바람·눈 줄만). WITH BABY 섹션은 없앰.
- b49: 선선함 사람 아이콘에 낙엽 한 장(오른쪽 위에서 돌며 떨어짐, 4초 반복, 흰색). 사용자가 시안 A/B/C 중 B 선택.
- b50: 흐림 낮(코드 3) 그림에 뒤 구름 오른쪽 위로 해가 아주 조금 보이게(사용자 요청). 안개(45·48)는 따로 그림: 구름이 안개 띠 5줄로 풀어지고 띠가 좌우로 천천히 흔들림(낮 #EDE8DF, 밤은 작은 달 + #4A5666 구름 + #5D6979 띠). 작은 아이콘에도 안개(구름 + 줄 2개) 추가. 배경색은 그대로(안개 낮 = 흐림 낮 색).
- b51: 안개 낮에도 뒤 구름 오른쪽 위로 해가 아주 조금(흐림과 같은 모양, 사용자 요청).
- b52: 체감온도 블록 아래 **오늘의 날씨 요약** 텍스트(예제, 사용자 요청). 글자만(상자·선 없음), Poppins 500 15px, 가운데, 최대 폭 320px. index.html `summaryText()`가 오늘 상태·최고최저 / 12시간 비·눈 / 오늘 중 4°↑ 하강(낮만) / 바람 30km/h↑를 문장으로 이음. 문구 `T.sum*`(ko/en/de). 탭 영역 밖.
- b53: 요약 끝에 옷차림 한마디(체감 단계별 Today's Look 기본 한 줄 요약 `LOOK[단계].deck`, 스타일·성별 무관).
- b54: 요약에 "우산 꼭 챙겨요"(12시간 안 비 50%↑, 눈은 제외, 비 문장 바로 뒤)와 끝에 "환절기 감기 조심해요"(오늘 일교차 10°↑ 또는 내일 최고가 오늘보다 4°↑ 낮을 때) 추가(사용자 요청). ko/en/de `T.sumUmbrella`·`T.sumCold`.
- b55: 메인 체감온도 블록 순서를 [배지] [라벨/단계 이름] [체감 숫자]로(사용자 요청, 숫자가 맨 오른쪽).
- b56: 첫 화면(위치 줄 ~ 요약 텍스트)을 화면 높이 하나(100svh)로. 남는 공간을 네 틈(위치 줄–그림, 그림–기온, 최고최저–체감, 체감–요약)에 똑같이 나눔(`.first`, `.gap`). 기존 간격은 최소값으로 유지, 글이 길면 늘어남. 예보는 스크롤해서 아래(사용자 요청).
- b57: 도시·날짜·시각을 맨 위 한 줄로(도시 17px 700, 날짜 11px 500, 글자 아랫선 맞춤). 오른쪽 위치(메뉴 모양) 버튼 없앰(사용자 요청). GPS ↔ 베를린 전환도 같이 없어짐, 저장된 위치는 그대로.
- b58: 도시 이름(베를린/현재 위치)을 누르면 위치 전환(GPS ↔ 베를린, 예전 위치 버튼 동작). 탭 영역은 글자 위아래 10px·오른쪽 8px 넓힘, 헤드 탭(Today's Look)에서 제외.
- b59: 사용자가 Figma(파일 Weather app · 페이지 App Screens · 프레임 `App / corrections`)에서 고친 디자인 반영. 메인 체감 블록 **배지 없앰**(사람 아이콘은 화면 글자색, 간격 21px; Today's Look 시트 배지는 그대로). 요약은 왼쪽 7px 막대(체감 단계 색, 예전 배지 색 규칙) + Poppins 700 16px 왼쪽 정렬, 줄간 1.5, 자간 .2px, 체감 블록 23px 아래. 요약 첫 문장 "오늘은 {단계}."(en Today: / de Heute:), 오늘 남은 시간 시간별 체감(hourly apparent_temperature 추가)이 다른 단계로 바뀌면 "현재는 {단계}."(Right now / Gerade). 그 뒤 상태 문장은 상태부터("안개, 최고…"). 우산·내일 8시 한 줄(`#line`)은 요약과 겹쳐 숨김(비·눈 그래프는 그대로). 날짜 간격 5px, 간격: 그림 위 31px, 그림–기온 50px, 최고최저 16px, 체감 24px. **b56 첫 화면 높이 맞춤은 보류**(사용자, `.first`/`.gap` 제거).
- b60: 24시간 예보 칸마다 강수확률 막대 + 값(사용자가 준 시안). 기온 아래 32px 칸에 바닥 맞춘 막대(폭 28px, 높이 = 확률 ÷ max(보이는 24시간 최대, 30%) × 32px, 최소 3px), 그 아래 20% 이상이면 "N%", 아니면 "-". 색은 어두운 화면(비·밤) #8FB8DE, 밝은 화면(맑음·흐림·눈) 연한 하늘색 #CAE2F8.
- b61: 검은 구분선(24시간 예보 위·6일 예보 위) 모두 없앰, 6일(요일) 예보 없앰, 24시간 예보의 "지금" 점을 "지금" 글자 위로(사용자 요청).
- b62: 흐린 낮(흐림·안개) 배경을 실제 햇빛 밝기로 3단계(사용자 요청, Gemini 팔레트). Open-Meteo current `shortwave_radiation`(W/m², DWD 관측 일사량 solar_10/30/60이 있으면 실측): ≥200 밝은 흐림 `#A3A091` · 60–200 보통 `#959B9E` · <60 어두운 `#948B82`. 값이 없으면 예전 `#A9B1B9`. 흐린 밤은 그대로 `#1B2140`. 단계마다 뒤 구름·작은 회색 구름 색 조정(CSS `--oc-back`/`--oc-drift`, `body[data-light]`). 상태 줄에 "· N W/m²" 표시(기준값 맞추는 동안). 위젯은 아직 `#A9B1B9`. 기준값 60/200은 실제 베를린 값으로 확인 못 함.
- 위젯(2026-10-19, 앱 빌드 변화 없음): 앱 날씨 그림을 위젯 배경으로(사용자: "애니메이션 아이콘이 바탕화면, 그 위에 정보"). 앱에서 멈춘 장면을 PNG 18장으로 뽑아 `widget/art/`(흐림·안개는 햇빛 3단계별), 위젯이 GitHub Pages에서 한 번 받아 저장(`ART_VERSION`). DrawContext로 배경색 + 그림을 크기별 위치에 그려 `backgroundImage`. 헤더 SF Symbol 없앰. 오늘 요약(앱 summaryText 이식, DECK·BANDS·BAND_COLOR·readableOn 복사) 추가: small 첫 문장, medium·large 3줄. 흐린 낮 3단계 색. 데이터에 wind_speed_10m·shortwave_radiation·hourly temperature_2m/apparent_temperature 추가. Scriptable 실기기 확인 전(가짜 API로 로직만 확인).
- 위젯 시안 C(2026-10-19, 사용자 선택): 그림을 오른쪽 위 → 가운데로, 알파 40%로 흐리게(PNG에 미리 적용, `ART_VERSION` 2), 정보는 그 위 레이어. medium 요약 2줄 전체 폭, large 기온 96·막대 24px.
- b63: 구름 양을 세 곳 값의 중간값으로(사용자: "현재 구름 약간인데 날씨가 안 맞어"). MET Norway(`https://api.met.no/weatherapi/locationforecast/2.0/compact`, 키 불필요) 추가, Open-Meteo current에 `cloud_cover` 추가. DWD 관측 cloud_cover · MET 지금 시각 cloud_area_fraction · Open-Meteo cloud_cover 중 2개 이상 있고 지금 코드가 0–3(비·눈·안개 아님)이면 중간값으로 코드 결정: <15% 맑음(0) · <40% 대체로 맑음(1) · <80% 구름 조금(2) · ≥80% 흐림(3). 상태 줄에 "· MET", "· ☁N%" 표시(기준값 맞추는 동안). 캐시엔 MET 시간대 4개만 저장. 위젯도 같은 중간값 규칙(Bright Sky는 구름 양만 사용, 기온은 Open-Meteo 그대로; MET 요청엔 User-Agent). 2026-10-19 사용자가 새 위젯 코드를 Scriptable에 붙여 넣고 잘 동작함을 확인. 이 환경에선 API가 막혀 가짜 응답으로만 확인.
- b64: 추움(체감 -9~0°) 남성 큰 룩 사진 3장(`look/cold/<minimal|street|run>-m.jpg`, 1024×1536, 맑은 날 베를린 배경). 미니멀 = 블랙 롱 코트·터틀넥·머플러·첼시 부츠, 스트리트 = 패딩·후디·카고·뉴발란스, 러닝 = 바람막이·하프집·쇼츠+타이츠·비니·장갑. `HERO`에 등록. 문구는 아직 기본 추움 문구(스타일별 문구 없음).
- b65: 추움 남성 스타일별 문구(러닝·스트리트·미니멀, ko/en/de, 사진에 맞춤). `STYLE_TEXT.cold`, 원문 `design/look-cold.md`. 한 성별만 문구가 있으면 다른 성별은 기본 문구(`C.items[g]` 없으면 기본). 스트리트 남성 사진 한 장 더(`look/cold/street-m-2.jpg`, 그린 점퍼 + 크림 후디 + 베이지 카고 + 머플러): `HERO` 값 2 = `-2.jpg`가 있음, 이틀씩 번갈아(`pics.alt`, 성별 번갈기와 따로).
- b66: 추움 여성 큰 사진 3장(`look/cold/<minimal|run|street>-f.jpg`, 맑은 날) + 여성 문구(ko/en/de, 사진에 맞춤). 미니멀 = 그레이 롱 코트·크림 케이블 터틀넥·크림 와이드 팬츠·체크 머플러·첼시 부츠, 러닝 = 컬러블록 재킷·라벤더 하프집·레깅스·헤어밴드, 스트리트 = 컬러블록 패딩·크림 후디·올리브 카고·오렌지 비니. 러닝 한 줄 요약은 남녀 공통으로 "귀 덮을 것과 장갑은 꼭". 추움은 3스타일 × 남녀 모두 큰 사진 + 전용 문구.
- b67: b64~b66 맑은 날 사진·문구를 추움 전용 → **맑은 날 세트**로(사용자: 오늘 쌀쌀함 맑은 날인데 구름 사진이 나옴). `look/cold/` → `look/clear/`, `STYLE_TEXT.cold` → `STYLE_TEXT.clear`, `design/look-cold.md` → `design/look-clear.md`. 쌀쌀함·추움 단계에서 낮 + 지금 코드 0–2(구름 중간값 반영 후)이면 clear 사진·문구(아이템 사진 6장 칸 없음), 아니면 예전대로(쌀쌀함 = CHILLY 구름 사진 + 아이템 6장, 추움 = 기본 문구 + 시트 사진). `lastView.clear`.
- 시안(2026-10-19, 앱 빌드 변화 없음): **추천형 Today's Look + 내 옷장** 클릭 시안 `proto/look-flow.html`(https://jinex001.github.io/Weather-App/proto/look-flow.html). 맑음·쌀쌀함·스트리트·남성 한 경우, 한국어만. 아이템마다 카드(Outer → Top → Bottom → Shoes → Bring): 추천 사진 + 이유 → "이거 있어요?" 네 → "사진 찍어 줄래요?"(지금 찍기 = 카메라, 600px 정사각으로 줄여 저장 / 나중에) · 없어요 → 살 것 후보에 넣고 대안 하나 더 물음, 대안도 없으면 추천을 "추천"으로 표시. 마지막에 완성 룩 2열 + 살 것 후보(보러 가기 미연결) + 분위기 화보. 답은 localStorage `wx-closet-proto`, 답한 칸은 다시 안 물음. 아이템 사진은 `look/clear/street-m*.jpg`에서 잘라 `proto/items/`(입은 채로 자른 것, 제품 사진 아님). 사용자 의견 받기 전.
- b68: **Today's Look 방향 전환**(사용자 브리프: 앱 열면 추천 룩 → 고른 스타일 안에서 스와이프 → 아이템 탐색 → 저장/관심). 룩을 구조화된 라이브러리 `look/outfits.js`(`window.WX_LOOKS`, 룩 19 · 아이템 116, 고정 Outfit/Item ID)로 옮김: index.html의 `CHILLY`·`STYLE_TEXT`·`HERO`를 그대로 변환해서 없앰. 스키마·고르는 규칙은 `design/look-library.md`. 시트: 헤드라인·스위처 아래 가로 스와이프 줄(scroll-snap, 같은 스타일·성별만, 오늘 단계·하늘에 맞는 순 + 옆 단계, 맞는 게 없으면 단계 기본 문구가 맨 앞), 슬라이드 = 큰 사진 + 맞춤 표시(오늘의 추천/맑은 날 룩/○○에 맞춘 룩) + ♡ 저장 + 한 줄 요약, 아래 점. 그 밑에 보고 있는 룩의 아이템(누르면 사진·설명·"갖고 있어요"/"관심 있어요"). 맨 아래 Saved looks(누르면 그 룩으로). 저장은 localStorage `wx-look`. 메인 화면 요약 아래에 오늘의 룩 한 줄(사진 + TODAY'S LOOK · 스타일 + 헤드라인, 누르면 시트). 쌀쌀함 "The pieces" 6칸은 아이템 사진으로 들어감. 시트 아래로 쓸어 닫기는 가로 스와이프일 땐 안 움직임. 아기 탭은 그대로. 쇼핑·링크 없음. 가짜 데이터로만 확인.
- b69: 메인 화면 오늘의 룩 한 줄(`.peek`)에서 스타일 이름(· MINIMAL 등)과 오른쪽 화살표 › 없앰(사용자 요청). 남은 것: 썸네일 + "TODAY'S LOOK" + 룩 헤드라인. 누르면 시트 열림은 그대로.
- b70: Today's Look 슬라이드 순서를 맞춤 표시(오늘의 추천 등) → 점(슬라이드마다, 왼쪽 정렬) → 사진 → 한 줄 요약(룩 타이틀, 단어 안 끊김) → 아이템으로(사용자가 시안 3번째 확인). ♡ 저장 버튼과 맨 아래 Saved looks 없앰(사용자 요청). 예전에 저장한 값은 `wx-look.saved`에 그대로 둠(화면에서만 안 씀).
- b71: Today's Look 사진을 사용자가 올린 새 세트로 전부 교체(사용자 요청: 예전 사진 모두 삭제). 새 폴더 형식 `look/<세트>/<하늘>/<단계>/<성별>/<연령대>/<번호>-<스타일>`(앞으로 이 형식). 첫 세트 `look/berlin-men-complete-15/Sunny/Chilly/Male/30-40/` 15장(러닝·스트리트·미니멀 각 5) → `look/outfits.js` 15룩(`bm15-NN-<스타일>-m`, 맑은 날·쌀쌀함·남성, `age: "30"`), 아이템·한 줄 요약은 사진 보고 씀(ko/en/de). PNG는 JPG로 바꿔 넣음(장당 약 250KB). 지운 것: 시트 자른 사진·아기 사진·chilly/cool/clear/items 폴더와 그 룩. 여성·흐린 날·다른 단계·아기는 사진 없이 기본 문구. 메인 화면 룩 한 줄은 사진 있는 첫 룩을 씀. `proto/look-flow.html`의 분위기 사진은 깨짐(시안이라 그대로 둠). 규칙은 `design/look-library.md`.
- b72: Today's Look 점(페이지네이션)을 맨 위로 빼서 고정(사용자 요청): 스위처 아래 점 줄(18px) → 슬라이드[맞춤 표시(오늘의 추천·오늘 날씨에도 맞아요 등) → 사진 → 한 줄 요약]. 넘겨도 점 줄은 그 자리, 활성 점만 바뀜(`onRail`).
- b73: 여성 세트 추가(사용자가 GitHub에 올림): `look/berlin-men-complete-15/Sunny/Chilly/Female/30-40/` 15장(러닝 01–05, 스트리트 06–10, 미니멀 11–15) → `outfits.js` 15룩 `bm15-NN-<스타일>-f`(맑은 날·쌀쌀함·여성·30~40대). 아이템·한 줄 요약은 사진 보고 씀(ko/en/de, 스커트 룩은 Bottom에 스커트 + 스타킹). PNG → JPG(약 250KB). 이제 남녀 각 15룩, 30룩 · 134아이템.
- b74: 사진 세트 폴더 이름 `look/berlin-men-complete-15` → **`look/berlin-complete`**(사용자 요청, 남녀 같은 세트). 룩 ID(`bm15-…`)는 그대로. Today's Look: **사진만 가로로 넘어감**, 점·맞춤 표시(오늘의 추천 등)·한 줄 요약은 제자리에 고정하고 넘길 때 글자만 페이드 아웃/인(0.18초, 동작 줄이기면 바로 바뀜). 순서: 점 → 맞춤 표시 → 사진(슬라이드) → 한 줄 요약 → 아이템.
- b75: 메인 화면 오늘의 룩을 **풀폭 배너**로(사용자 요청). 높이 150px, 화면 끝에서 끝까지(`.peek` margin 0 -24px). 배경 = 오늘 첫 룩의 큰 사진을 목 바로 아래부터 상체가 보이게 확대해서 자름(object-fit cover, object-position 50% 22%, scale 1.25, 위 기준). 그 위에 평평한 어두운 막 rgba(20,20,20,.32)(그라데이션 아님), 흰 글자로 왼쪽 아래에 TODAY'S LOOK(11px) + 헤드라인(Anton 44px). 큰 사진이 없거나 시트에서 자른 작은 사진뿐이면 사진 없이 #141414 배경. 가짜 데이터로만 확인.
- b76: 메인 화면 오늘의 룩을 **글자만**으로(사용자: b75 사진 배너 별로, 시안 A 선택). 사진·띠 없이 화면 바탕 위에 TODAY'S LOOK(11px) + 단계 헤드라인 Anton 64px, 오른쪽에 뿌리 없는 셰브런(SVG, 대문자 높이 55px, 선 8, 화면 글자색)을 헤드라인 바닥에 맞춤. 요약 30px 아래. 긴 헤드라인은 두 줄로 넘어가고 셰브런은 마지막 줄에 맞춤. 누르면 시트.
- b77: 메인 화면 오늘의 룩(TODAY'S LOOK + 헤드라인)을 날씨 요약 **위로**(체감 블록 28px 아래, 요약은 그 23px 아래), b76 셰브런 없앰(사용자 요청). 누르면 시트.
- b78: Today's Look 첫 슬라이드가 빈칸으로 나오던 문제 고침(사용자 발견). 원인: 오늘 단계·하늘에 딱 맞는 룩이 없으면(지금 사진은 전부 맑은 날·쌀쌀함이라 흐린 날·밤엔 항상) 단계 기본 문구 슬라이드를 맨 앞에 끼웠는데, b71에서 예전 사진을 지워 사진 없는 빈 슬라이드가 됨. 이제 기본 문구 슬라이드는 이 스타일·성별에 가까운 사진 룩이 하나도 없을 때만. 맨 앞 룩은 항상 "오늘의 추천"(맞춤 순서는 그대로).
- b79: 온보딩(ABOUT YOU) 연령대를 4칸으로(사용자 시안): 25세 미만 / 25 – 39 / 40 – 55 / 55+ (en Under 25 · de Unter 25), 값 `u25`·`25`·`40`·`55`. `PROFILE_V` 3 → 예전 프로필은 질문을 한 번 다시 보여줌(성별·아기는 골라진 채, 연령대만 다시 고름). "한 겹 더" Note는 55+일 때(예전 50대 이상). 룩 `age` 값(`"30"`)은 사진 폴더 기록일 뿐 아직 안 씀.
- b80: 연령대를 다시 3칸으로(사용자 요청): 35세 미만 / 35+ / 60+ (en Under 35 · de Unter 35), 값 `u35`·`35`·`60`. `PROFILE_V` 4 → 질문 한 번 다시(성별·아기는 골라진 채). "한 겹 더" Note는 60+일 때.
- b81: 저녁 룩(사용자가 GitHub에 올림): `look/berlin-complete/Sunny/Chilly/Female/35+/night/` 15장 → `outfits.js` 15룩 `bn15-NN-<스타일>-f`(맑은 날·쌀쌀함·여성, `time: "evening"`, 러닝 01–05·스트리트 06–10·미니멀 11–15, 아이템·한 줄 요약은 사진 보고 씀 ko/en/de). 오늘 일몰 10분 전부터 다음 일출까지 Today's Look은 저녁 룩만(그 스타일·성별에 저녁 룩이 없으면 낮 룩). Open-Meteo daily에 sunrise·sunset 추가(없으면 밤 = 저녁). 저녁엔 코드 0–2면 맑은 날로. 사진 폴더 `30-40` → `35+`(남녀), 룩 `age` `"35"`. 이제 45룩 · 203아이템. 
- b82: 남성 저녁 룩: 사용자가 올린 `Male/35+/30-39/Night` 15장을 `Male/35+/night/`로 옮기고 JPG로 → `bn15-NN-<스타일>-m`(러닝 01–05·스트리트 06–10·미니멀 11–15, 아이템·한 줄 요약 사진 보고 씀 ko/en/de). 이제 남녀 낮·저녁 모두 15룩씩, 60룩 · 269아이템.
- b83: 새벽 **5시부터는 낮 룩 사진**(사용자 요청: 4~5시쯤부터 밤 사진 말고 낮 사진). 저녁 룩 = 오늘 일몰 10분 전 ~ min(일출, 5:00). 일출·일몰 값 없으면 밤 중 5~12시는 낮 룩. 맑은 날 판정은 시간대와 상관없이 코드 0–2(해 뜨기 전 새벽에도 맑은 날 룩이 맞춤 1순위).
- b84: 남성 낮 러닝 사진 4장(사용자가 채팅으로 줌, 맑은 날 베를린)을 새 `look/berlin-complete/Sunny/Chilly/Male/35+/day/01–04-running.jpg`에 → `outfits.js` 4룩 `bd4-0N-run-m`(맑은 날·쌀쌀함·남성 러닝, 아이템·한 줄 요약 사진 보고 씀 ko/en/de). 남성 낮 러닝은 이제 9룩(기존 5 뒤에 붙음). 기존 낮 사진 15장은 `Male/35+/`에 그대로. 64룩 · 289아이템.
- b85: 여성 낮 러닝 사진 4장(사용자가 채팅으로 줌, 맑은 날·쌀쌀함)을 새 `Female/35+/day/01–04-running.jpg`에 → `bd15-0N-run-f`. 사용자가 GitHub `Male/35+/day/`에 올린 05–15(러닝 1·스트리트 5·미니멀 5) PNG → JPG, `bd15-NN-<스타일>-m`. 아이템·한 줄 요약은 사진 보고 씀(ko/en/de). 기존 낮 사진(`Male/35+/`, `Female/35+/` 바로 아래 15장씩)은 그대로, day 룩은 그 뒤에 붙음. 79룩 · 355아이템.
- b86: 낮 사진은 `day/`만(사용자 요청): `Male/35+/`·`Female/35+/` 바로 아래 예전 15장씩과 룩 `bm15-*`(b71·b73) 지움. 여성 `Female/35+/day/` 05–15(사용자가 GitHub에 올림, 러닝 1·스트리트 5·미니멀 5) PNG → JPG, `bd15-NN-<스타일>-f`, 아이템·한 줄 요약 사진 보고 씀(ko/en/de). 이제 남녀 × 낮(day/)·저녁(night/) × 3스타일 각 5룩, 60룩 · 271아이템.
- b87: 24시간 예보 칸에 **바람**(사용자가 시안 3번 중 1 선택): 기온과 강수확률 막대 사이, 바람 아이콘 13px + km/h 숫자(Poppins 600 11px, 화면 글자색, 흐리게 하지 않음). 세기는 아이콘 줄 수로만: 1줄 <20 · 2줄 20–29 · 3줄 ≥30 km/h(반올림한 표시값 기준, 30은 사람 아이콘 바람 효과 기준과 같음). Open-Meteo hourly에 `wind_speed_10m` 추가(예전 캐시엔 없으면 바람 줄 생략). `windCell()`.
- b88: (사용자 요청) 24시간 예보 강수확률은 "-" 없이 항상 숫자(0%). 위젯 large 아래를 12시간 막대 → 다음 6시간 칸(시각 · 바람 아이콘 줄 1·2·3 + km/h · 강수 막대 + %)으로, 위젯 hourly에 `wind_speed_10m`(위젯은 Scriptable에 다시 붙여넣어야 반영, Node 가짜 Scriptable로만 확인). **하단 메뉴**: 흰 글라스 알약(그룹 스위처처럼 열린 칸 ink 채움) 홈 · 캘린더 · 설정 · 알림, 스크롤 내리면 아이콘만 작게, 올리면 원래대로(인스타그램식). 캘린더 = 앞으로 7일(daily `wind_speed_10m_max` 추가), 알림 = DWD 기상 경보(Bright Sky `/alerts`, 있으면 메뉴에 빨간 점), 설정 = 위치·프로필·언어·단위·출처·버전. 규칙은 `design/design-system.md` 5장.
- b89: 하단 메뉴 라벨 없앰(아이콘만, aria-label은 그대로), 아이콘을 **Phosphor Icons Fill**(phosphoricons.com, MIT)로 교체: house · calendar-blank · gear-six · warning 24px(사용자가 5개 세트 중 선택, 앞으로 아이콘은 이 세트). 작아질 때 폭 220px·아이콘 20px.
- b90: 하단 메뉴가 작아지면 아이콘을 선으로(Phosphor Regular, 같은 이름), 원래 크기에선 채운 아이콘(Fill) 그대로(사용자 요청).
- b91: 하단 메뉴 아이콘을 크기와 상관없이 항상 선(Phosphor Regular)으로(사용자: 선이 맘에 듦). 앞으로 아이콘은 Phosphor Regular.
- b92: 하단 메뉴 폭 줄임(사용자가 실기기에서 너무 넓다고 함, 내용을 덜 가리게): 400 → 272px, 작아질 때 220 → 200px, 칸 위아래 12 → 11px.
- b93: 캘린더 화면 새로(사용자와 시안 4번 주고받음): 제목 탭 "7 DAYS" / "THIS MONTH"(같은 Anton 64px, 안 고른 쪽 한 톤 옅게). 7 DAYS = 날짜 라벨 / [큰 움직이는 날씨 그림 위에 상태 문구 겹침] [최저·최고 + 강수·바람] [줄 끝 EDITOR'S PICK / 단계 이름 / 룩 타이틀 3줄](사용자가 Editor's pick 선택). 그날 단계는 daily `apparent_temperature_max` 추가. THIS MONTH = 이번 달 달력, 예보 있는 8일만 아이콘·최고(나머지 날은 날짜만 흐리게, 과거 기록·16일 예보로 채울지는 아직 안 정함). 밝은 배경 위 비 그림 색도 아직 그대로.
- b94: 캘린더 7 DAYS의 EDITOR'S PICK을 누르면 Today's Look과 같은 시트가 그날 기준으로 열림(사용자 요청). 맨 위 라벨 "EDITOR'S PICK" + 그날 날짜, 체감·단계·하늘은 그날 값(`dayView`), 맞춤 표시 "이날의 추천", 시간별 메모 대신 그날 우산/바람/눈 한 줄(`dayContent`, `LT.rainDay`). 시트 열리면 캘린더 화면도 블러. 홈의 Today's Look은 그대로.
- 시안(2026-10-20, 앱 빌드 변화 없음): **Today's Look 제품 컷 + 매거진 기사** `proto/look-products.html`(https://jinex001.github.io/Weather-App/proto/look-products.html). 사용자가 C(가로 스트립) 선택. 에디토리얼 사진(`proto/run-01/look.jpg`, 남성 러닝) 아래 THE PIECES: 제품 플랫레이 500×500 1:1(`proto/run-01/01-anorak … 05-socks.jpg`, 사용자 제공, 아이보리 바닥) 카드가 한 화면에 하나 + 다음 카드 살짝(폭 100% − 56px, scroll-snap), 이미지 아래 제목 왼쪽 정렬(카테고리 · 이름 · 소재). 신발은 사진 없어 빈 칸. 아이템 리스트 대신 HOW TO WEAR 기사(Anton 제목, 리드, 01–04 소제목 + 본문, 인용구). 한국어만. 2026-10-20 사용자 제안: 제품 카드 = 앵커, 누르면 기사의 그 섹션으로 부드럽게 스크롤(01 아우터 · 02 상의 · 03 하의 · 04 장갑·양말·신발), 도착한 소제목 한 번 페이드 인, 섹션 끝에 "↑ The pieces"로 돌아가기, 기사 아래 32vh 여백(마지막 섹션도 위까지 오게). 같은 날 사용자 수정: 순서 = 에디토리얼 사진 → 기사 제목(Anton) + 바이라인(체감 1–9° · 바람 조금) + 리드 → THE PIECES 제품 스트립 → 디테일 본문(01–04 + 인용구). 사진 아래 한 줄 요약(deck)은 리드가 대신해서 뺌. 콜투액션 전부 없앰("HOW TO WEAR" 라벨, "소재와 입는 법", 카드의 "입는 법 ↓", "6 pieces · …" 안내, 섹션 끝 "↑ The pieces"). 카드는 보이는 표시 없이 그대로 해당 섹션 앵커. 제품 스트립(THE PIECES)은 스크롤하면 맨 위에 고정(position: sticky, 페이지와 같은 단색 배경, 그림자 없음)되고 디테일 본문이 그 아래로 지나감. 본문을 읽어 내려가면 고정된 스트립이 지금 읽는 섹션의 제품으로 저절로 넘어감(소제목이 스트립 아래 읽는 영역 40% 지점을 지나면). 카드를 누르면 섹션이 스트립 바로 아래에 오게(`--stick`).
- b95: **흐린 날 남성 세트 + 제품 컷·기사 화면**(사용자가 GitHub에 올림). `look/berlin-complete/`에 올라온 01-running … 15-minimal 15폴더를 `look/berlin-complete/Overcast/Chilly/Male/35+/day/`로 옮기고, 같이 준 `index.json`·`README.md`·`VALIDATION.json`도 거기에. 각 폴더 = `editorial.png` + `products/NN-<분류>.png`(500×500) + `products.json`(문구·제품) + `README.md`(반영 규칙) + `PROMPTS.md`(화면에 안 씀). 원본 PNG는 그대로 두고 앱용 JPG 사본(`editorial.jpg`, `products/*.jpg`, 합계 약 6MB). `outfits.js` 15룩 `oc15-NN-<스타일>-m`(쌀쌀함 · sky `cloudy` · 남성 · 35+ · 낮) + 84아이템(pending 1개 제외: 15번 링). 룩에 `article`(title = headlineEn, intro, pull = pullQuoteEn, tip), deck = captionKo, 아이템에 `sub`(카드 보조문구)·`note`(입는 법)·`image`(제품 컷)·`alt`. 한국어는 products.json 그대로, en/de는 새로 번역. 브랜드·가격·링크·소재 수치는 넣지 않음(README 규칙). Today's Look: `article` 있는 룩은 사진 아래 Anton 44px 헤드라인 → 캡션(deck) → 인트로 → THE PIECES 제품 카드 가로 스트립(한 장 + 다음 살짝, 1:1 contain, 바닥색 #F3EFE8, 카드 아래 카테고리·이름·보조문구 왼쪽 정렬) → 제품별 입는 법 문단(같은 순서, 2번째 뒤에 인용구) → 팁. 제품 스트립은 시트 맨 위에 고정(sticky, 거의 불투명 흰 배경 + 블러)되고, 본문을 읽어 내려가면 그 제품 카드로 넘어감, 카드를 누르면 그 문단이 스트립 바로 아래로. 예전 아이템 리스트(갖고 있어요/관심 있어요)는 article 없는 룩에만. 75룩 · 355아이템. 가짜 데이터로만 확인.
- b96: 흐린 날 남성 세트 폴더를 `Overcast/Chilly/Male/35+/` → **`Overcast/Chilly/Male/35+/day/`**로(사용자 요청, 맑은 날 세트와 같은 day/ 구조). index.json·README.md·VALIDATION.json도 day/ 안. `outfits.js` 경로만 바뀜, 룩 ID 그대로.
- b97: 맑은 날 룩 사진은 맑은 날 전용(사용자: 흐린 날에 맑은 날 사진이 같이 나옴). `lookPool`: 그 스타일·성별에 오늘 하늘(clear/cloudy)에 맞는 룩이 하나라도 있으면 다른 하늘 룩은 빼고, 하나도 없을 때만 다른 하늘 룩으로 채움(지금은 흐린 날 여성 = 맑은 날 사진). Today's Look 제품 스트립 배경 투명(사용자 요청, 본문이 그 아래로 보이며 지나감).
- b98: 투명한 제품 스트립(b97) 아래로 본문 글자가 비쳐 카드 이름과 겹치던 문제(사용자 발견) → 스트립 배경을 시트가 보이는 색 그대로 섞은 **불투명 단색**(흰색 60% + 화면 배경색 40%, `--lk-solid`, `mixHex`)으로. 따로 떠 있는 상자처럼 보이지 않고 시트에 녹아들면서 아래 글자는 완전히 가려짐(헤드리스 크롬에선 backdrop 블러만으로는 글자가 비쳐서 단색으로).
- 시안(2026-10-20, 앱 빌드 변화 없음): **제품 카드 안에 입는 법** `proto/look-cards.html`(실제 `look/outfits.js` 데이터, 기본 oc15-13-minimal-m, `?lang=`, `?look=`, `?title=anton`). 사용자가 B(Anton) 선택 → b99. 사용자: 스트립 배경은 투명, 카드 아래 제품 이름(보조문구) 대신 디테일 문구를 → 카드 = 제품 컷 + `01 · OUTER` + 큰 타이틀(제품 이름, A: Poppins 700 22px / B: Anton 34px) + 입는 법 본문. 아래 디테일 섹션·고정(sticky) 없음, 스트립 다음 인용구 + 팁. 사용자 의견 받기 전.
- b99: **입는 법을 제품 카드 안으로**(사용자가 `proto/look-cards.html` 시안 B 선택). article 룩의 THE PIECES 카드 = 제품 컷 → `01 · OUTER` → 큰 타이틀(제품 이름, Anton 34px 대문자; 한국어는 Anton에 한글이 없어 Noto Sans KR 700 30px) → 입는 법 본문(15px). 카드 보조문구(sub)·아래 디테일 섹션·스트립 고정(sticky)·스크롤 동기화·카드→문단 이동·스트립 배경색(b98 `--lk-solid`) 모두 없앰, 배경 투명. 스트립 다음 인용구 + 팁.
- b100: **흐린 날 여성 세트**(사용자가 GitHub `Overcast/Chilly/Female/35+/day/`에 올림, 빈 폴더용 `.gitkeep`은 지움): 15착장 → `outfits.js` 15룩 `of15-NN-<스타일>-f`(쌀쌀함 · cloudy · 여성 · 35+ · 낮) + 91아이템, 남성 세트와 같은 방식(원본 PNG 유지 + 앱용 JPG, 한국어는 products.json, en/de 새로 번역, 새 분류 gear·hosiery는 라벨 없이 그대로). **추천은 3개만, 매번 랜덤**(사용자 요청): `lookPool`이 맞춤 순서 안에서 섞어 3개만(`seeded` + `lookSeed`, 앱 시작·홈에서 Today's Look을 열 때마다 새로 뽑음, 캘린더 날짜를 열 땐 그 줄에 보이던 룩 그대로). 맞춤 표시는 순서대로 "오늘의 추천" / "이것도 좋아요" / "이것도 나쁘지 않아요"(en Today's pick / This works too / Not bad either, de Heute empfohlen / Passt auch gut / Auch nicht schlecht). 90룩 · 446아이템.
- b101: 흐린 밤(코드 3) 그림에 구름 더(사용자 요청): 낮 흐림처럼 큰 구름 2개(뒤 #343E4C, 앞 #4A5666 흔들림) + 뒤로 초승달이 조금 + 작은 밤 구름이 흐름(#3A4454·#5D6979). 구름 조금 밤(코드 2)은 그대로. `ART.nightOvercast`. 위젯 그림(PNG)은 아직 예전 것.
- b102: Today's Look 배경에 날씨 색이 묻어나던 것 고침(사용자 발견: 맑은 날 크림색, 밤 푸른 회색). 원인: 흰 글라스 60% 뒤로 블러된 홈 화면이 보이는데 블러에 saturate(1.5)까지 걸려 색이 진해짐 + 앱 뒤 body 배경색은 필터 밖. 이제 시트가 열리면 뒤 화면 `blur(26px) grayscale(1)`, body 배경도 그 화면색의 회색값(`--look-under`), 흰색 .6 → .78. 맑음·흐림·비·밤 모두 무채색(대략 #F2 · #E9 · #DB · #CE).
- b103: Today's Look 배경을 **불투명 흰색 #FFFFFF**로(사용자: 뒤에 비치는 색 말고 그냥 하얀색). 글라스(반투명) 없앰, b102의 회색 처리(`grayscale`, `--look-under`)도 되돌림. 뒤 홈 화면 블러는 열고 닫을 때 움직임용으로만 남김. 맑음·흐림·비·밤 모두 255,255,255 확인.
- 저장소 정리(2026-10-20, 앱 빌드 변화 없음): `look/` 원본 PNG 206장(약 139MB) 삭제, 앱은 원래 JPG 사본만 씀. products.json 경로 .png → .jpg. 앞으로 사진은 JPG만 둠(큰 사진 1024×1536 ≤300KB, 제품 컷 500×500 ≤50KB). 같은 날 git 기록에서도 `look/` PNG를 지움(git filter-repo + 강제 push, 커밋 번호 모두 바뀜, .git 약 400MB → 51MB).
- b104: **흐린 날 여성 저녁 세트**(사용자가 GitHub `Overcast/Chilly/Female/35+/night/`에 올림, PNG → JPG만 저장): 01–08(러닝 5 · 스트리트 3) → `outfits.js` 8룩 `ofn-NN-<스타일>-f`(쌀쌀함 · cloudy · 여성 · 35+ · `time: "evening"`) + 53아이템, 한국어는 products.json, en/de 새로 번역(번역 `scratchpad`의 ofn_tr.py 형식, 저녁 세트엔 tip·subtitle 없음). **09–15는 남성 낮 세트(`Male/35+/day/09–15`)와 같은 파일이 잘못 들어와 있어 맵핑 안 함**(사용자 요청으로 09–15 폴더 지움, 다시 올릴 예정; 같은 폴더의 index.json·README.md·VALIDATION.json도 남성 세트 것). 흐린 저녁 여성 미니멀은 아직 없어 맑은 날 저녁 미니멀(bn15)로 채워짐. 98룩 · 499아이템.
- b105: (1) 흐린 날 여성 저녁 09–15(사용자가 다시 올림, 스트리트 2 · 미니멀 5) PNG → JPG, `ofn-NN-<스타일>-f` 7룩 + 42아이템(ko는 products.json, en/de 새로 번역). 흐린 저녁 여성 세트 15룩 완성, 105룩 · 541아이템. (2) **공통 글라스**(사용자가 Figma Glass 효과 값 줌: Light -45° 80%, Refraction 80, Depth 20, Dispersion 50, Frost 49, Splay 0): `:root`의 `--glass-fill` 흰색 50% · `--glass-blur` blur(24px)(Frost 49) · `--glass-light` 안쪽 빛(왼쪽 위 밝은 가장자리 .8, 오른쪽 아래 .2, 안쪽 20px 은은한 빛 = Light·Depth), 클래스 `.glass`. Today's Look 시트(디테일 화면)와 하단 메뉴에 같이 씀(예전 메뉴 .6 + saturate 없앰). Refraction·Dispersion(빛 굴절·색 번짐)은 Safari CSS로 못 해서 뺌. 시트가 열리면 뒤 화면도 blur(10px)(backdrop 블러가 화면 끝에서 멈춰 맨 위 글자가 비치던 것 막음). b103 불투명 흰색은 끝, 날씨 색이 은은하게 비침. 앞으로 글라스는 이 값만.
- 문서 정리(2026-10-20, 앱 빌드 변화 없음, 사용자 요청): `design/design-system.md`를 지금 코드에 맞게 다시 씀(공통 컴포넌트 장 신설: 글라스·알약·하단 메뉴·닫기 바, 메인 화면 b77 오늘의 룩·b59 요약, Today's Look b95–b105 구조, 캘린더, 사진·콘텐츠 규칙). `tokens.json` v4(예전 시트 단계 색 `look-*` 지움, `glass-fill`·`product-ground`·`alert` 추가, 룩 기사 글꼴·카드·사진 크기·페이드 추가, `summary`·`icon-person` 값 고침, `rule`은 안 씀). `look-library.md` 다시 씀(105룩 표, 기사 필드, 3개 랜덤 규칙, 폴더·JPG 규칙). README, 이 파일의 화면 구조·Today's Look 설명도 고침.
- b106: 캘린더 7 DAYS를 **내일부터 7일**로(사용자 요청, 오늘은 홈에 있으니). daily 인덱스 1–7(`forecast_days=8`), 첫 칸 라벨 "내일"(en Tomorrow · de Morgen, `NV.tmr`). EDITOR'S PICK 시트는 그날 인덱스 그대로. THIS MONTH는 그대로(오늘 표시 포함).
- 시안(2026-10-20, 앱 빌드 변화 없음): **7 DAYS 줄 끝에 EDITOR'S PICK 대신 제품 컷 하나** `proto/cal-pieces.html`(https://jinex001.github.io/Weather-App/proto/cal-pieces.html, `?v=a|b`, `?g=m|f`). 그날 날씨 규칙(눈 → 부츠·비니 / 비 50%↑ → 셸·파카·트렌치 / 체감 -10° 이하 → 비니·장갑·머플러 / 바람 30↑ → 머플러 / 체감 0° 이하 → 코트·파카 / 체감 29°↑ → 쇼츠·캡·물병 / 맑고 18°↑ → 선글라스·캡 / 1–9° → 재킷 / 10–17° → 니트 / 그 외 → 스니커즈)에 맞는 실제 제품 컷(흐린 날 세트, 성별별) 중 랜덤 하나. 처음엔 A(줄 끝 + 분류·이름·이유)·B(줄 아래 한 줄) 두 가지 → 같은 날 사용자: 글자 다 빼고 **썸네일만** → 줄 끝 96px 정사각 제품 컷 하나(바닥 #F3EFE8, 글자 없음). 날씨 7일은 규칙을 다 보여주려 만든 가짜 값, 한국어만. 아직 없는 컷(선글라스·반팔·나시·우산)은 빈 칸 "사진 없음"으로 표시. 썸네일만 버전 사용자 의견 받기 전.
- 시안 2(2026-10-20, 앱 빌드 변화 없음): **7 DAYS를 가로로 넘기는 카드로** `proto/cal-cards.html`(https://jinex001.github.io/Weather-App/proto/cal-cards.html, `?g=m|f`). Today's Look 사진 줄처럼 카드 한 장 + 다음 카드 3분의 1(카드 폭 = (줄 − 12px) × 3/4, scroll-snap, 위에 고정 점 줄). 카드 = 그날 날씨 규칙(cal-pieces와 같은 규칙)으로 고른 제품 컷을 크게 배경으로(1:1 contain, 아래쪽), 카드 바탕색은 그 컷 모서리 색을 읽어 맞춤(이음매 없음), 위에 날짜 · 최고 Anton 92px + 최저 40px(45%) · 상태 아이콘·문구, 아래에 강수·바람. 높이 min(66svh, 560px). 같은 날 수정(사용자): 다음 카드는 12% 작게(스크롤에 따라 크기 바뀜, 왼쪽 기준으로 줄어 간격 유지), 날짜가 기온보다 먼저 보이게: 요일 Noto Sans KR 700 44px → 날짜 15px → 최고 Anton 40px + 최저 24px. 2026-10-21 수정(사용자): 카드 위쪽을 두 칸으로 — 왼쪽 요일(Noto Sans KR 700 40px, 한 줄)·날짜, 오른쪽 위 **움직이는 날씨 아이콘**(76×60: 햇살 회전·해 숨쉬기 / 구름 흐름 / 빗줄기 낙하 / 눈송이 낙하, 동작 줄이기면 정지) + 그 아래 기온(최고 Anton 36px + 최저 22px), 상태 문구 없앰. 같은 날 다시: 왼쪽은 날짜(13px) 위 · 요일 아래로 순서 바꿈, 강수·바람은 카드 아래에서 기온 밑으로 올림 → 다시 아이콘으로 한 줄(물방울 + 강수% · 앱 24시간 예보와 같은 바람 아이콘 줄 1·2·3 + km/h, 13px, 12px 600). 두 시안 모두: 실제 컷이 하나라도 맞으면 "사진 없음" 칸은 안 뽑힘(여성은 캡이 없어 맑은 22°에 선글라스 빈 칸이 나옴). 사용자 의견 받기 전.
- b107: **캘린더 7 DAYS를 카드로**(사용자가 `proto/cal-cards.html` 시안 확정). 예전 줄 목록(날씨 그림 120×85 · 최저최고 · EDITOR'S PICK)과 `dayLook`·`.wk-*` 없앰. 카드 = 그날 날씨 규칙(`PIECE_RULES`, 시안과 같음, 단 "사진 없음" 칸 없이 실제 컷만)으로 고른 제품 컷(`dayPiece`, 세션 씨앗 + 날짜로 랜덤, 프로필 성별·선택 안 함이면 날마다 번갈아) + 날짜 13px → 요일 40px(길면 24px까지 줄여 맞춤, `fit`) + 움직이는 아이콘(`dayIcon`, 아이보리용 진한 구름) + 최고 Anton 36 · 최저 22 + 물방울 강수% · 바람 줄 1·2·3. 다음 카드 12% 작게, 점 줄, 카드 색 = 컷 모서리 색(`dayCards`). 누르면 그날 Today's Look 시트(`dayView`). 선글라스 컷은 아직 없어 맑고 18°↑ 날엔 캡(남성), 여성은 다음 규칙으로 넘어감. 가짜 데이터로 ko/en/de 확인.
- b108: 7 DAYS 카드 요일(사용자 요청): 카드마다 글자 크기를 따로 줄이던 것(b107 `fit`) 대신, 내일은 다 쓰고(Tomorrow · Morgen · 내일) 다른 날은 영어·독일어 줄임말(Mon. · Mo., `cardDay`, Intl short에 점), 한국어는 요일 그대로. 크기는 모든 카드 같게 = 내일 카드가 기온 옆에 들어가는 크기(40px부터 1px씩 줄임).
- b109: 7 DAYS 카드 바탕이 까맣게 나오던 버그(사용자가 아이폰에서 발견, 일부 카드만). 원인: 카드 색을 사진 모서리에서 canvas로 읽었는데 iOS에서 사진이 그려지기 전에 읽히면 검정. 이제 제품 컷 270장의 모서리 평균색을 미리 계산해 `outfits.js` 아이템 `bg`로 넣고 그 색을 씀(canvas 코드 없앰). 새 제품 컷을 넣을 때 `bg`도 계산할 것.
- b110: **가벼운 비 세트**(사용자가 GitHub에 올림, `Rain/Light/Chilly/Male/35+/day/running/01–05/`, 승인·ready 확인, 제품 5장씩 500×500 ≤50KB) → `outfits.js` 5룩 `bl-light-chilly-m-35-day-run-NN`(`sky: "rain"`, `rain: "light"`) + 25아이템(`bg` 포함). 제작 측 descriptionKo가 제작 메모라 입는 법·인트로는 사진 보고 새로 씀(ko/en/de), deck = caption, pull = pullQuoteEn("IS THAT ALL?." 점 정리), tip 없음. **비 날 고르기**: `rainLevel`(WMO 코드: light 51–57·61·80 / normal 63·66·81 / pouring 65·67·82·95–99), `lookPool` 하늘 순위(같은 강도 비 0 → 다른 강도 비 1 → 흐림·any 2 → 맑음 3), 비 룩은 비 안 오는 날 안 나옴. 오늘(`lastView.rain`)·캘린더 날짜(`dayView`) 모두. 강도 표·대체 규칙은 사용자 확인 전. products.json `mappingStatus` mapped. 가짜 데이터로 비(61·65·80)·흐림·맑음·여성·스트리트·밤 확인.
- b113: **7 DAYS 카드 컷 = 그 룩으로 연결**(사용자: 카드 옷을 누르면 다른 룩이 나옴). 예전엔 카드 컷(`dayPiece`)을 모든 룩의 컷에서 따로 뽑고 카드는 날짜만 넘겨서, 시트는 프로필 스타일 안에서 룩 3개를 새로 뽑았음. 이제 `dayPick`이 그날 맞는 룩(`lookFits`, 3스타일 모두, 기사 룩만, 최선 하늘 순위)을 먼저 고르고 그 안에서 `PIECE_RULES` 컷 = Editor's pick. 카드 → `dayView(i, pick)` → 시트 첫 장 = 그 룩("이날의 추천"), 스위처 = 그 룩 스타일(프로필엔 안 씀, 탭 누르면 바뀜), 성별 = 그 룩, THE PIECES는 그 컷 카드에서 시작(`showPiece`). 나머지 2장은 같은 스타일에서 랜덤. 카드 씨앗은 `pieceSeed`(홈 Today's Look 열어도 카드 안 바뀜). 시트는 열 때마다 첫 장부터. 가짜 데이터로 남녀·ko/en·비/흐림/맑음 7일 모두 카드 컷 = 시트 컷 확인.
- b114: **세트가 아직 없는 날씨는 플레이스홀더**(사용자 요청: 비 세트 없는 경우 등). 그 스타일·성별에 그날 날씨(비 강도 light/normal/pouring, 맑음/흐림, 체감 단계 근처)에 딱 맞는 룩이 없으면 다른 날씨 룩으로 채우지 않고 `lookPool`이 플레이스홀더 한 장만(`soon`, 맞춤 표시 "준비 중" · Coming soon · In Arbeit, 사진 칸 = 아이보리 #F3EFE8 + 그날 움직이는 아이콘 + COMING SOON + Anton "LIGHT RAIN LOOKS" 등 + 한 줄 `LT.soon`, 아래 단계 기본 문구·아이템은 그대로). 캘린더 카드도 3스타일 어디에도 그날 날씨 세트가 없으면 같은 플레이스홀더(`dayPick` → `{soon}`), 누르면 시트도 플레이스홀더. 예외: 맑은 날은 맑은 날 룩은 있지만 제품 컷이 없어서 카드는 지금처럼 흐린 날 세트 컷. `soonLabel`·`soonHtml`.
- b115: **가벼운 비 남성 스트리트 세트**(사용자가 GitHub에 올림, `Rain/Light/Chilly/Male/35+/day/street/01–05/`, 승인·ready·크기 확인) → `outfits.js` 5룩 `bl-light-chilly-m-35-day-street-NN` + 34아이템(`bg` 포함). b110 러닝과 같은 방식: deck = captionKo(en/de 번역), title = headlineEn, 인트로·입는 법은 사진 보고 새로 씀(ko/en/de), 이름 ko = products.json, tip 없음. pullQuoteEn이 제목과 같은 말이라 `pull` 뺌. 미니멀 폴더는 README뿐(아직 없음 → 플레이스홀더). 카드 비 규칙(`PIECE_RULES`)에 우비·우산 추가(예전 규칙은 "셸·파카…"만이라 우비가 안 뽑혔음). products.json mapped. `outfits.js?v=b115`. 번역 원본 scratchpad `street_tr.py`.
- b116: GitHub에 올라온 세 세트 매핑(15룩 · 106아이템, `bg` 포함, 승인·ready·크기·개수 확인). (1) 가벼운 비 남성 미니멀 `Rain/Light/Chilly/Male/35+/day/minimal/01–05` → `bl-light-chilly-m-35-day-minimal-NN`, (2) 가벼운 비 여성 미니멀 `Rain/Light/Chilly/Female/35+/day/minimal/01–05` → `bl-light-chilly-f-35-day-minimal-NN`, (3) 흐린 날 남성 저녁 미니멀 → `oc-unclassified-m-35-evening-minimal-NN`(`sky: cloudy`, `time: evening`). (3)은 체감 단계가 비어 `Overcast/Unclassified/`에 올라왔는데 사용자가 **쌀쌀함**으로 정함 → 폴더를 `Overcast/Chilly/Male/35+/night/minimal/`로 옮기고 products.json `feelsLikeBand: chilly`(feelsLikeC는 null 그대로), ID는 올라온 그대로. 문구: deck ko = captionKo(en/de 번역), title = headlineEn, 비 세트 tip = tipKo(10룩 같은 문장, 번역), pull 없음, 인트로·입는 법은 사진 보고 새로 씀(ko/en/de; introKo는 캡션 반복, descriptionKo는 "…를 레이어에 맞춰 더해 보세요" 틀). 카드 비 규칙에 레인코트·맥코트 추가. 이제 비(가벼운) = 남성 3스타일 · 여성 미니멀만, 여성 러닝·스트리트 비 날은 플레이스홀더. 번역 원본 scratchpad `min_tr.py`.
- 시안(2026-10-22, 앱 빌드 변화 없음): **홈 Today's Look 글자를 오늘의 픽에 맞춤** `proto/home-pick.html`(https://jinex001.github.io/Weather-App/proto/home-pick.html, `?lang=en|de`, 실제 `look/outfits.js`, 날씨 4가지·성별·스타일 선택, "다른 룩 뽑기" = 앱 다시 열기). 지금(b116, LAYER UP + 단계 기본 문구) 옆에 A 헤드라인 = 룩 타이틀 + 요약 끝 = 룩 캡션 / B LAYER UP 유지 + 아래 TODAY'S PICK · 타이틀 — 캡션 한 줄, 요약은 날씨만 / C 헤드라인 = 룩 타이틀 + 요약 = 캡션 + 인트로(b111식 잡지 문단, 날씨 문장 없음). 기사 없는 맑은 날 룩은 타이틀 없어 LAYER UP + 캡션. 앱에 넣으려면 홈 문구와 시트 첫 장이 같은 룩이어야 해서, 홈에서 시트를 열 때마다 새로 뽑던 것(b100)을 앱 열 때 한 번 뽑기로 바꿔야 함. 사용자 의견 받기 전.
- b117: **홈 문구 = 오늘의 픽**(사용자가 `proto/home-pick.html` 시안 C 선택 + 비 문장만 추가). 홈 TODAY'S LOOK 헤드라인 = 시트 첫 장 룩의 타이틀(기사 없으면 단계 헤드라인), 요약 = 그 룩 캡션 + 인트로, 끝에 비·눈 문장만(지금 오는 중 → "{t}쯤 그쳐요" 또는 "오늘은 계속 …", 아니면 12시간 안 50%↑ 첫 시각 "{t}쯤 비 올 확률 {p}%", 비면 "우산 꼭 챙겨요"). 단계·상태·최고최저·하강·바람·감기 문장과 b111 날짜 고정 문구는 없앰(`summaryText` → `rainText` + `paintPeek`). 플레이스홀더 날은 단계 헤드라인 + 단계 기본 한 줄 + 비 문장. 홈과 시트 첫 장이 같은 룩이도록 픽은 앱 열 때·앱으로 돌아올 때 한 번 뽑음(b100의 "홈에서 열 때마다 새로" 없앰), 시트를 닫았다 열어도 같은 룩, 스타일 탭을 바꾸면 홈도 따라 바뀜. 위젯 요약은 그대로(날씨 문장). 가짜 데이터로 비 지금·저녁 비 예보·흐림·맑음·플레이스홀더, ko/en/de 확인.
- b118: **비·찬바람 여성 캐주얼 세트**(사용자가 GitHub `Rain/Light/Chilly/Female/35+/day/casual/01–05/`에 올림, 승인·ready·크기·개수 확인) → `outfits.js` 5룩 `bl-light-chilly-f-35-day-casual-NN` + 37아이템(`bg` 계산). 앱엔 casual 스타일이 없어 사용자가 **스트리트 탭**으로 정함(`style: "street"`, ID·폴더는 casual 그대로, products.json `appStyle: street`·`appOutfitId`·mapped). 이 세트는 문구가 3개 언어로 다 와서 그대로 씀(deck, article title·intro·tip, 제품 name·note; alt 없음 → 한국어 이름). 이제 여성 비 = 미니멀·스트리트, 러닝만 플레이스홀더. 홈 비 문장 첫 글자 대문자(en "rain now…" 소문자로 나오던 것). 같은 날 올라온 `design/IMAGE_STYLE.md` 촬영 원칙(실제 상황 → 반응 → 절제된 위트)은 앱 변화 없음.
- b119: **단계 헤드라인(LAYER UP 등) 없앰**(사용자가 아이폰 스크린샷에 X: "더 이상 필요 없어, 안 나오게"). Today's Look 시트의 Anton 92px `.lk-head` 줄을 빼고 스위처가 "체감 N° · 단계" 22px 아래. 홈도 기사 없는 룩(맑은 날)·플레이스홀더 날엔 LAYER UP 대신 헤드라인 없이 TODAY'S LOOK + 요약만(`#peek-d` hidden). `LOOK[단계].head` 문구는 코드에 남아 있지만 화면엔 안 씀. 질문 화면 ABOUT YOU 제목은 그대로.
- b120: Today's Look 위쪽 배치(사용자가 아이폰 스크린샷에 그려서 요청): "체감 N° · 단계"를 배지 오른쪽으로 옮겨 한 줄(`.lk-top`, 가운데 맞춤, 간격 14px), 스위처를 그 18px 아래로 올림, 맞춤 표시(TODAY'S PICK 등)는 왼쪽·점은 화면 오른쪽 끝으로 한 줄(`.lk-meta` 안에 `#lk-dots`), 룩 타이틀(Anton 44px)을 사진 아래 → 맞춤 표시와 사진 사이로. 넘기면 타이틀·맞춤 표시 페이드·점은 그대로. 질문 화면 머리도 같은 배지 줄.
- b121: Today's Look 사람 아이콘 뒤 **둥근 단계 색 배지 없앰**(사용자 요청: 깔끔하게 어두운색으로) → 사람은 글자색 #141414(머리 구분선 없음, 글라스에서 흰 테두리처럼 보여서). 단계 색은 체감 줄 안 막대로: "FEELS 7° ▌CHILLY"(`feelsLine`, `.lk-bar` 7px × 1.15em, 색 = 예전 배지 색 규칙 `readableOn(BAND_COLOR, #FFF, 1.5)`). 질문 화면 머리도 같음.
- b122: (사용자 요청) Today's Look 사람 아이콘 43 → 34px(칸 36×38), 체감 줄 단계 색 막대 7 → 5px.
- b123: **도시 검색·내 목록**(사용자 요청). 맨 위 도시 이름 17 → 20px + 뒤에 위치 핀(Phosphor Regular map-pin 17px). 누르면(설정 > 위치도) 글라스 위치 시트: 검색 칸이 바로 열림(키보드), Open-Meteo Geocoding(`geocoding-api.open-meteo.com/v1/search`, 기기 언어, 8개)으로 찾고, 줄을 누르면 그 도시로 바꿈, "저장"으로 내 목록에. 검색 칸이 비면 내 목록: 현재 위치(GPS) / 보는 중인데 저장 안 한 도시(저장) / 저장한 도시(삭제, 기본 베를린). 보는 곳은 이름 뒤 핀. 저장 `wx-places`, 보는 곳 `wx-place`({id, name, sub, lat, lon, gps}, 베를린 id 2950159), b58 GPS ↔ 베를린 전환은 없앰. 도시를 바꾸면 이전 요청 답은 버리고(`gen`), 캐시 `wx-data._place`가 다른 도시면 안 보여줌. 독일 밖은 DWD 실측·경보 없이 Open-Meteo(+MET)만(이미 그렇게 동작). 위젯은 아직 베를린 고정. 가짜 응답으로 검색·전환·저장·삭제 확인.
- 문서 정리(2026-10-22, 앱 빌드 변화 없음, 사용자 요청): `design-system.md` Today's Look 순서를 b117–b122대로 다시 번호 매김(체감 줄 = 사람 34px + "FEELS N° ▌단계" 5px 막대, 배지 없음, 맞춤 표시·점 한 줄, 타이틀 사진 위), 배지·단계 헤드라인 설명 정리. `tokens.json` v5(`look-head` 안 씀 표시, `icon-person-look` 34px·배지 없음, `look-band-bar` 추가, `look-title` 위치). 새 `design/look-coverage.md`: 쌀쌀함 칸별 룩 수, 빈 칸(흐림 남성 저녁 러닝·스트리트, 비 여성 러닝, 비 저녁 전부, 보통 비·쏟아지는 비 전부, 다른 체감 단계·눈), 덜 된 것(맑은 날 60룩 제품 컷·기사 없음, oc15-15 링 pending).
- b124: **맑은 날 여성 낮 15룩에 제품 컷·기사**(사용자가 GitHub `Sunny/Chilly/Female/35+/day/NN-<스타일>/`에 올림: editorial.jpg + products/ 5–10장 + products.json, 모두 ready, 500×500 ≤50KB). 기존 룩 `bd15-NN-<스타일>-f`(`appOutfitId`)에 붙임: article(title = headlineEn, intro ko/en/de, pull = pullQuoteEn이 있는 러닝 5룩만), deck = captionKo/En/De(예전 사진 보고 쓴 한 줄 대신), 아이템 = 제품 110개(name ko/en/de, note = description ko/en/de, `bg` 계산), 예전 글 아이템 69개는 지움. 폴더 안 editorial.jpg는 앱이 쓰던 `NN-<스타일>.jpg`와 같은 사진(재저장)이라 경로는 그대로. products.json mapped. 이제 135룩 · 784아이템, 기사 룩 90. 맑은 날 여성은 홈 타이틀·캘린더 카드도 맑은 날 세트로. 가짜 데이터로 ko/en/de 확인.
- b125: 맑은데 흐림으로 나오던 문제(사용자: 베를린 지금 맑은데 overcast). 원인 추정: 얇은 높은 구름이면 DWD·MET·Open-Meteo 구름 양이 모두 80%↑라 중간값 규칙(b63)이 흐림으로 정함, 또는 아침 안개 코드가 남음(이 환경에선 API가 막혀 실제 값 확인 못 함). 고침: 낮에 코드 2·3·안개면 **실제 해가 난 비율**로 다시 정함 — DWD 일조 시간 `sunshine_30`(없으면 60·10분), 없으면 Open-Meteo current `direct_radiation`(새로 받음) ÷ `shortwave_radiation`. ≥75% → 대체로 맑음, ≥45% → 구름 조금, 아니면 그대로. 비·눈·밤은 안 건드림. 상태 줄 "· ☀N%". `sunShare()`. 위젯은 아직 구름 양 중간값만.
- b29: Today's Look 글라스를 단계 색 대신 **흰색**(rgba(255,255,255,.6)) + 뒤 화면 블러로, 글자는 항상 #141414(사용자: "하얀색 기본 글라스 UI"). 상태 표시줄 색은 메인 화면 색 유지.

사용자: 베를린 거주, 아이폰 사용. 기기 언어는 독일어·한국어·영어 중 하나.

## 만들 것

1. **웹앱 (홈 화면에 추가)**
   - 정적 사이트 하나: `index.html` + `manifest.webmanifest` + 아이콘(`apple-touch-icon` 180px, 512px). 빌드 도구 없이 바닐라 HTML/CSS/JS로 충분합니다.
   - iOS Safari에서 공유 → "홈 화면에 추가"로 설치. `apple-mobile-web-app-capable`, `display: standalone`, `viewport-fit=cover`, safe-area 여백 처리.
   - 실시간 날씨 표시, 15분마다 + 앱으로 돌아올 때(`visibilitychange`) 새로고침. 마지막 데이터는 `localStorage`에 캐시해서 오프라인에서도 보이게.
   - 배포: GitHub Pages (사용자 GitHub 계정 `jinex001`, 저장소 `Weather-App`, 주소 https://jinex001.github.io/Weather-App/). 배포 URL을 위젯에 넣습니다.

2. **홈 화면 위젯 (Scriptable)**
   - `widget/weather-widget.js`가 새 디자인 위젯.
   - 크기: small, medium, large + 잠금화면(accessoryCircular, accessoryRectangular, accessoryInline). `design/screens/Widgets.dc.html` 참고.
   - **위젯을 누르면 웹앱이 열리도록** `widget.url = <배포 URL>` 설정.
   - 알려진 iOS 제약: 위젯 탭은 홈 화면에 추가한 앱 인스턴스가 아니라 Safari에서 같은 URL을 엽니다. 화면은 같지만 Safari 주소창이 보일 수 있음. 사용자에게 이 점을 알려줄 것.
   - Scriptable은 웹폰트를 못 쓰므로 숫자는 iOS 내장 `AvenirNextCondensed-Heavy` 등으로 Anton 느낌을 근사.

## 데이터

- 예보: Open-Meteo (`https://api.open-meteo.com/v1/forecast`), API 키 불필요. `timezone=auto`.
- 지금 날씨: Bright Sky (`https://api.brightsky.dev/current_weather`, DWD 관측소 실측, API 키 불필요). 90분 이내 측정값이면 기온·바람·상태를 덮어씀.
- 구름 양 보조: MET Norway Locationforecast (`https://api.met.no/weatherapi/locationforecast/2.0/compact`, 키 불필요, 좌표 소수 4자리). 구름 양은 DWD·MET·Open-Meteo 중간값(b63).
- 필요한 값: current(temperature_2m, apparent_temperature, weather_code, is_day, wind_speed_10m, precipitation, shortwave_radiation, direct_radiation, cloud_cover), minutely_15(precipitation, 지난 1시간·앞 1시간), hourly(temperature_2m, precipitation_probability, snowfall, weather_code, is_day, wind_speed_10m) 12시간+, daily(weather_code, temperature_2m_max/min, apparent_temperature_max, precipitation_probability_max, sunrise/sunset, wind_speed_10m_max) 7일. 기상 경보: Bright Sky `/alerts?lat&lon`(DWD, 독일만, b88).
- 위치: 기본 베를린(52.52, 13.405). 사용자가 허용하면 GPS. 도시 이름은 GPS일 때 "현재 위치"(언어별)로 표시해도 됨.

## 화면 상태 — `design/screens/`

**낮에만 날씨별 색, 밤에는 날씨와 상관없이 전부 한 가지 어두운 색(`#1B2140`).** 밤 화면의 그림·그래프는 날씨를 따름(비 → 비 그림, #8FB8DE 막대; 눈 → 눈 그림, 막대 #BCC8D4).

| 상태 | 조건 | 파일 | 배경 | 글자 |
| --- | --- | --- | --- | --- |
| 맑음·구름 조금 낮 | is_day=1, 코드 0–2 | `Main.dc.html` | `#F2C14E` | `#141414` |
| 흐림 낮 | is_day=1, 코드 3, 45, 48 (흐림·안개) | (캔버스 파일 없음, 구름 2개 = 비 화면 구름에서 빗줄기 뺀 것: 뒤 `#958E81`, 앞 `#EDE8DF`) | 햇빛 밝기 3단계(b62): ≥200 W/m² `#A3A091` · 60–200 `#959B9E` · <60 `#948B82` (값 없으면 `#A9B1B9`) | `#141414` |
| 비 낮 | is_day=1, 코드 51–67, 80–82, 95–99 | `Rain.dc.html` | `#4F5D6B` | `#E6ECF2` |
| 눈 낮 | is_day=1, 코드 71–77, 85–86 | `Snow.dc.html` | `#E9EEF3` | `#141414` |
| 밤 (모든 날씨) | is_day=0 | `Night.dc.html` (비 오는 밤 그림은 `RainNight.dc.html`) | `#1B2140` | `#F4F1E8` |

`.dc.html` 파일은 디자인 캔버스용 형식입니다(`<x-dc>`, `{{t.x}}` 바인딩, `support.js`). 실행용이 아니라 **레이아웃·수치·색·문구의 기준**으로 읽고, 실제 앱은 일반 HTML로 다시 구현하세요. 각 파일 아래 스크립트에 en/de/ko 문구가 있습니다. 숫자는 예시 값입니다.

화면 구조(위→아래): 도시 · 날짜 · 시각 한 줄(b57) / 날씨 그림 / 큰 기온 / 상태 문구(기온에 겹침) / 최고·최저·바람 한 줄 / 체감온도 블록(선·배지 없음, 왼→오: 사람 아이콘 38px 화면 글자색 / "체감온도" 라벨 위·단계 이름 아래 / 체감온도 Anton 56px, b55·b59) / 오늘의 룩(TODAY'S LOOK + 오늘의 픽 룩 타이틀 Anton 56px 항상 두 줄 + 뒤에 대표 제품 컷, 누르면 Today's Look, b77·b117·b133–b135) / 요약(왼쪽 단계 색 막대 7px + Poppins 700 16px, 픽의 캡션 + 인트로 + 비 문장, b59·b117) / 비·눈이면 12시간 그래프 / 24시간 예보(가로 스크롤, 칸마다 기온 · 바람 아이콘(줄 1·2·3)+km/h · 강수확률 막대 + %, "지금" 글자 위 5px 점) / 업데이트 · 빌드. 날짜 줄부터 체감 블록까지가 탭 영역(#head-tap, 도시 이름만 제외). 구분선·6일 예보 없음(b61). 화면 아래 고정 하단 메뉴(홈·캘린더·설정·알림, 공통 글라스). 자세한 값은 `design/design-system.md` 6장.

**Today's Look (체감 블록·헤드·홈의 오늘의 룩을 누르면 아래에서 올라오는 전체 화면 시트)**: 매거진 에디토리얼 형식, 콜투액션·쇼핑 링크·일러스트 없음(사용자 결정). 배경은 공통 글라스 `.glass`(흰색 50% + 뒤 블러 24px + 안쪽 빛, b105 사용자 Figma 값), 글자는 항상 #141414. 위→아래: 닫기 바 / TODAY'S LOOK · 날짜 · 도시 / 움직이는 사람 34px(글자색, 배지 없음) 옆에 "체감 N° ▌단계" 한 줄(막대 = 단계 색, b120·b121) / 그룹 스위처(러닝/스트리트/미니멀 + 아기 "네"면 아기) / 맞춤 표시(오늘의 추천 · 이것도 좋아요 · 이것도 나쁘지 않아요) 왼쪽 · 점 오른쪽 한 줄(b120) / 룩 타이틀 Anton 44px(기사 룩, 사진 위, b120) / **사진만 가로로 넘김(룩 3개, 매번 랜덤)** / 한 줄 요약 / 상세: 기사 룩 = 인트로 → THE PIECES 제품 카드 스트립(제품 컷 1:1 · 01 · OUTER · 제품 이름 Anton 34px(ko Noto Sans KR 700 30px) · 입는 법) → 인용구 → 팁, 기사 없는 룩 = 아이템 줄(펼치면 사진·설명·갖고 있어요/관심 있어요) / Rain·Wind·Snow 줄 / Tonight 또는 Tomorrow / Note(60+ + 선선 이하) / Updated · Edit profile. 처음 열 때 질문 화면(ABOUT YOU: 성별, 연령대 35세 미만/35+/60+, 아기와 외출, Skip 가능), 답은 localStorage "wx-profile"에만. 캘린더 7 DAYS 카드를 누르면 같은 시트를 그날 기준으로 엶(b94·b107). 문구는 index.html `LOOK`/`LT`와 `look/outfits.js`(ko/en/de). 자세한 값은 `design/design-system.md` 8장.

체감온도 9단계(apparent_temperature, b31): 극한 추위 ≤-20 · 매우 추움 -19~-10 · 추움 -9~0 · 쌀쌀함 1~9 · 선선함 10~17 · 쾌적함 18~23 · 따뜻함 24~28 · 더움 29~34 · 극심한 더위 ≥35. 사람 동작: 꽁꽁 움츠림+입김 / 덜덜+입김 / 가끔 떨기+입김 / 찬바람 한 번 + 옷깃 여미기 / 숨쉬기 + 낙엽 한 장이 빙글 떨어짐(b49) / 숨쉬기+좌우 / 좌우 흔들 / 땀방울 / 땀 두 방울+축 처짐. 겹침: 바람 30km/h 이상 → 머리카락 날림+기울기, 비 → 빗방울, 눈 → 눈송이. 표시: 메인 블록은 배지 없이 화면 글자색(b59), Today's Look에서만 흰 사람 + 단계 색 둥근 배지(index.html BAND_COLOR: #6434A5 #4762D6 #378FE4 #58C4DC #6FCDB0 #79C66C #F0C84E #F38B3D #D94448 — 보라 → 파랑 → 하늘 → 민트 → 초록 → 노랑 → 주황 → 빨강). 체감 숫자·라벨·단계 이름은 화면 글자색(밝은 화면은 검정). 배지가 배경과 1.5:1 미만일 때만 그 경우에 한해 진하게/밝게. 동작은 무한 반복 재생(누르면 처음부터 다시), "동작 줄이기"면 정지.

사용자가 캔버스에서 직접 고친 부분도 반영되어 있습니다(예: 일부 구분선 제거, 맑음 화면 간격). 파일을 기준으로 따르세요.

## 디자인 규칙 (꼭 지킬 것)

- **큰 기온**: Anton 240px, line-height 0.86, letter-spacing -4px, 가운데 정렬.
- **° 기호**: 숫자의 80% 크기, 윗끝을 숫자 윗선에 맞춤 → `<span style="font-size:.8em;position:relative;top:-.29em">°</span>`. (Anton 실측: 숫자 윗선 1761/2048em, ° 윗선 1607/2048em에서 계산.) 위젯 등 모든 큰 기온에 동일 적용.
- **상태 문구**: Poppins 700(한글은 Noto Sans KR), 40px, line-height 1.1, 대문자, `margin-top: -20px`로 기온 아래쪽과 살짝 겹침. 겹치는 부분이 읽히도록 배경색으로 3px 외곽선(여러 겹 `text-shadow`).
- **비 색 `#8FB8DE`**: 비 그래프 막대와 빗줄기는 어느 화면이든 이 색. 밝은 배경에는 쓰지 않음(그래서 비 오는 낮도 어두운 배경).
- **눈 그래프 `#5C7A99`**: 강설 막대·눈송이(낮). 밤에는 `#BCC8D4`. 구름 `#BCC8D4`.
- **그래프**: 12시간, 막대 12개, 간격 4px, 높이 48px. 비는 precipitation_probability, 눈은 snowfall(cm). 제목 줄에 시작/그침 시각과 최대값.
- **테두리·외곽선을 새로 넣지 말 것** (사용자 요청). 읽기 어려우면 색을 조정하지, 테두리로 해결하지 않음. 예외는 원래 디자인의 상태 문구 배경색 외곽선뿐.
- **단색 배경만**, 그라데이션·그림자·카드 없음(예외: Today's Look 시트·하단 메뉴는 공통 글라스 `.glass`, b105 사용자 결정). 구분선 없음(b61에서 24시간·6일 예보 위 선도 없앰). 정보 묶음은 간격으로만 나눔.
- **날씨 그림 (움직임, 무한 반복)**: 낮 코드 0 해만(햇살 회전·반짝, 해 숨쉬기) · 1 해 + 아주 작은 구름이 흘러감 · 2 해 앞 큰 구름(좌우로 흔들) · 3 흐림(큰 구름 2개 고정 + 뒤로 해가 아주 조금 + 작은 구름 3개가 왼→오 흐름) · 45/48 안개(구름 + 뒤로 해가 아주 조금 + 안개 띠 5줄이 좌우로 흔들림). 밤 0–1 달+별 반짝 · 45/48 달+구름+안개 띠 · 2 달+구름 · 3 흐린 밤(구름 2개 + 뒤로 초승달 조금 + 작은 구름 흐름, b101). 비는 구름 고정, 빗줄기 계속 낙하. 눈은 눈송이 살랑이며 낙하(밤엔 밝은 색). "동작 줄이기"면 정지.
- **아이콘**: 날씨는 굵은 단색 실루엣 SVG(해=원, 구름, 빗줄기, 달, 눈 점, 파일에 있는 path 재사용). UI 아이콘은 Phosphor Icons Regular(선)만(b91). 옷 일러스트는 쓰지 않음(사용자 결정), 옷은 사진으로만.
- **글라스**: 글라스 면은 공통 `.glass` 하나(`--glass-fill`·`--glass-blur`·`--glass-light`, b105 Figma 값). 화면마다 값을 따로 만들지 말 것.
- **사진**: 앱용 JPG만(에디토리얼 1024×1536 ≤300KB, 제품 컷 500×500 ≤50KB). 제품 문구에 브랜드·가격·구매 링크·소재 혼용률 넣지 않음.
- 글꼴: Anton(큰 숫자·영문 헤드라인), 그 외 모든 글자 Poppins(자간 -.02em, 문구 600–700, 날짜·데이터 줄 500; 한글은 Noto Sans KR로 대체). Google Fonts. 상태 문구는 대문자(text-transform: uppercase).
- 날씨 상태가 바뀌면 `theme-color`(상태 표시줄 색)도 배경색으로.

색·글꼴·간격 토큰 전체: `design/tokens.json`, 원칙 설명: `design/design-system.md`.

## 언어

`navigator.language`가 `de*` → 독일어, `ko*` → 한국어, 그 외 → 영어. 날짜·요일 형식도 각 언어 방식(`Intl.DateTimeFormat`). 문구는 각 `.dc.html` 하단의 en/de/ko 사전을 기준으로 확장.

## 완료 기준

- 아이폰 Safari에서 열면 현재 날씨에 맞는 상태 화면이 실제 데이터로 표시됨.
- 홈 화면에 추가하면 전체 화면 앱처럼 열림, 아이콘 표시.
- Scriptable 위젯이 같은 디자인으로 표시되고, 누르면 웹앱 URL이 열림.
- 사용자에게 설치 방법을 짧게 안내(한국어).

- b126 (2026-10-22): Sunny/Chilly/Male/35+/day 스트리트 06–10의 Product Breakdown 35개(9/5/7/9/5)와 ko/en/de 제품 카드 기사 연결. 기존 에디토리얼 및 룩·아이템 ID 보존, 신규 아이템 14개 추가(전체 135룩·807아이템, 기사 100룩). BUILD와 outfits 캐시 갱신. coverage·매핑 가이드·검증 기록 업데이트.

- b126 Street 제품 매핑: `look/sunny-male-day-street.js`를 기본 `look/outfits.js` 바로 다음, 앱 초기화 전에 동기 적용한다. 기본 룩 파일은 그대로 보존했다. 앱에서 적용된 전체 수는 135룩·807아이템·기사 100룩이다. 보충 파일은 이번 5룩·35제품만 갱신하므로 점검 시 두 파일을 함께 읽는다.

- b128 (2026-10-22): Sunny/Chilly/Male/35+/day Running 5룩 제품 분해. 독립 JPG 32장(7/6/6/6/7), products.json 및 ko/en/de 제품 이름·패션 설명·입는 법과 기사 연결. 135룩 · 819아이템(활성 814) · 기사 105룩. 원본 에디토리얼 및 다른 스타일 파일 보존, 기존 단일 품목 ID 20개 유지·신규 12개 추가. 크기·용량·매핑·선택 규칙 검증.

### b129 · Sunny 여성 밤 Minimal

Sunny / Chilly / Female / 35+ / Night / Minimal 11–15: 제품 8/7/6/9/9종, 총 39개 독립 JPG(500×500, ≤50,000 bytes), ko/en/de 제품명·스타일링 설명·기사. 기존 원본 에디토리얼과 룩 ID·기존 24개 아이템 ID 유지, 새 아이템 ID 15개 추가. 최종 135룩·834아이템, 활성 참조 836, 기사 110룩. `look/sunny-female-night-minimal.js`가 기존 라이브러리 스크립트 뒤, 앱 초기화 전에 동기 적용된다. 큰 `look/outfits.js` 전체 교체가 자동 승인 검토 입력 한도를 초과하여, 기존 Street와 동일한 독립 보충 매핑 방식을 사용했다. 기본 라이브러리와 다른 세트는 변경하지 않는다.


## b130 · Sunny 남성 밤 Minimal 11–15

5룩 제품컷 5/6/5/5/6개, 총 27개. 파일당 한 품목만 포함(신발·장갑은 한 켤레). 초기 다품목 생성물 12개는 제외하고 단일 품목으로 재생성·육안 검수함. 500×500 JPG ≤50,000 bytes, 아이보리 배경. ko/en/de 제품명·스타일링 설명·기사, products.json과 look/outfits.js 직접 매핑. 기존 룩 ID 5개와 기존 아이템 ID 20개 유지(복합 accessory ID는 머플러로 유지), 새 개별 품목 ID 7개 추가. 다른 룩과 Street·여성 밤 보충 매핑 유지. 원본 5개는 origin/main 바이트와 동일.

11·14 하의/신발, 13 이너와 보이지 않는 양말은 추가하지 않음. 컵·음식·식료품·신문은 장면 소품으로 제외. 정확한 소재 조성, 가죽/스웨이드 진위, 가려진 뒷면·여밈·의류 길이, 부츠의 가려진 구조는 추정 복원. 실제 기온·브랜드·가격·구매 링크는 null. [검증](sunny-male-night-minimal-validation.md).

## b131 · Sunny 남성 Night Street 제품 분해

Sunny / Chilly / Male / 35+ / Night / Street 06–10: 제품 7/6/6/5/6종, 총 30개 독립 JPG. 검수 중 09번 팬츠의 밑단이 잘린 시안은 제외하고 전체 길이로 재생성했다. 기존 원본 에디토리얼 5개와 룩 ID·기존 아이템 ID 23개 보존, 신규 단독 품목 ID 7개 추가. 복합 accessory ID는 머플러에 유지하고 장갑을 분리했다. `look/outfits.js` 뒤에서 동기 실행되는 `look/sunny-male-night-street.js`로 해당 5룩과 제품만 갱신했으며 ko/en/de 제품명·스타일링 설명·기사를 연결했다.

모든 제품은 500×500 JPG ≤50,000 bytes, 아이보리 배경, 품목당 이미지 정확히 1개. 부츠·장갑 한 쌍은 한 품목. `look/berlin-complete/Sunny/Chilly/Male/35+/night/NN-street/products/` 및 `products.json`, `README.md`, `PROMPTS.md`에 저장한다. editorialImage는 기존 `../NN-street.jpg` 참조, 사본을 만들지 않았다.

07·09 신발 및 전 룩의 양말은 보이지 않아 추가하지 않았다. 06 귀걸이는 보이는 싱글 후프 1개만 복원. 07·08·10 장갑은 따로 보이는 품목으로 포함. 가려진 니트 목선·몸판, 팬츠 허리·밑단, 부츠 샤프트 등은 observedEvidence / inferredElements / reconstructionNotes로 구분했다. 브랜드·가격·실제 소재 혼용률·정확한 기온은 미확인으로 null. 장보기 포장·음식·음료·열쇠는 착장 제품에서 제외했다. [파일별 검증](sunny-male-night-street-validation.md).

- b131 업로드 방식: 기본 outfits.js 전체 업로드가 자동 승인 검토 입력 한도를 초과하여 기존 저장소의 보충 매핑 패턴을 사용했다. `look/sunny-male-night-street.js`는 다른 라이브러리 스크립트 뒤, 앱 초기화 전에 동기 적용된다. 기본 `look/outfits.js`와 다른 보충 파일은 최신 main 그대로 보존한다.


## b132 · Sunny 남성 밤 Running 01–05 (2026-10-23)

기존 `Sunny/Chilly/Male/35+/night/01-running.jpg`–`05-running.jpg`는 바이트 불변. 제품별 독립 이미지 7/7/4/7/6개, 총 31개(500×500 실제 JPG, 각각 ≤50,000 bytes), 따뜻한 아이보리 배경. 각 `NN-running/products/`와 `products.json`·README·PROMPTS에 기록했다. ko/en/de 제품명·스타일링 설명·How to Wear 및 기사를 `look/outfits.js`의 해당 5개 룩에 직접 연결했다. productionStatus=ready, mappingStatus=mapped. 기존 룩 ID 5개와 확인된 단일 품목 ID 17개 보존, 새 품목 ID 14개 추가. 기존 복합 accessory ID 5개와 보이지 않는 03 이너 ID는 호환용 데이터로 보존하고 카드에서는 참조하지 않는다. 다른 130룩 및 보충 매핑 보존. 현재 런타임 135룩·862아이템(활성 851)·기사 125룩.

03번 이너·신발·양말, 05번 신발·양말은 보이지 않아 생성하지 않았다. 01 양말의 정확한 길이, 02 이너 색·04 하의 분류와 과거 글의 차이, 잘린 03·05 하의와 가려진 몸판·소매·뒤쪽·밑창 등은 각 JSON/README에 구분해 기록했다. 정확한 기온·혼용률·브랜드·가격·성능은 미확인(null). 최초 생성 31장 중 근거 없는 반사 무늬가 붙은 이너/양말 4장은 수정본으로 교체했으며 최종 제품 자산은 정확히 31장이다. [검증 결과](sunny-male-night-running-validation.md).

## b133 · 홈 헤드라인 뒤 대표 제품 (2026-10-23)

사용자 요청(시안 없이 바로 반영): 홈 TODAY'S LOOK 헤드라인 오른쪽 뒤에 오늘의 픽 룩의 아우터 컷을 배경 없이 깜(목업 A, 불투명 100%). 기사 룩 125개 아우터를 rembg(isnet-general-use)로 배경 제거 → `products/01-outer.cut.webp`(투명 WebP, 옷 크기로 잘림, 합계 2.4MB), 경로·밝기는 새 `look/cutouts.js`(마지막에 로드, 아이템 `cut`·`lum`). 125장 모두 육안 확인(크림 니트·흰 재킷도 안 잘림; 색으로 지우는 방식은 크림 옷이 같이 지워져서 안 씀). 그림은 오늘의 룩 블록 높이 + 16px 안에만(요약과 안 겹침), 헤드라인은 그림 위, **겹친 글자만** 흰색/#141414 자동(제품 밝기로 대비 큰 쪽, 헤드라인 복사본 `#peek-x`에 컷 마스크). 컷 없는 룩·플레이스홀더는 글자만. 가짜 데이터로 맑음·흐림·비·밤 확인. 사진은 JPG만 규칙의 예외는 `.cut.webp`뿐. 제작 측 제품 컷은 계속 아이보리 바닥 JPG로 받음(카드·캘린더가 아이보리 바닥을 씀, 컷은 여기서 자동 생성).

## b134 · 홈 대표 제품 = 제목이 말하는 제품 (2026-10-23)

사용자: "CITRON ON THE TERRACE인데 시트론 니트가 아니잖아"(차콜 봄버가 나옴). b133은 무조건 아우터였음 → 제목의 첫 색·소재 단어가 이름에 든 제품(같은 색 다른 이름 포함, 날씨 단어 GRAY·RAIN 등은 제외, 여러 개면 outer → top → scarf …), 없으면 아우터. 결과 125룩 중 35룩이 아우터 아닌 제품(니트·머플러·파우치·부츠·우산·비니 등), 35장 새로 자르고 육안 확인, 안 쓰게 된 아우터 컷 35장은 지움(지금 `.cut.webp` 125장). `look/cutouts.js`에 `HERO`(룩 → 아이템) 추가, 앱은 `o.hero`만 씀. 스크립트는 HERO 행을 손으로 고치면 그대로 둠. 규칙·예시는 `design/CUTOUTS.md`.

## b135 · 홈 헤드라인 항상 두 줄 (2026-10-23)

사용자(CAMEL IN MOTION 스크린샷): "두 줄 괜찮을 것 같아. 항상 두 줄로, 글자는 살짝 줄이고 컷은 살짝 키우고." → 헤드라인을 두 줄 폭이 가장 비슷한 곳에서 나눠 항상 두 줄(`fitHead`, 줄마다 span, 한 단어 제목만 한 줄), Anton 64 → 56px, 한 줄이 화면 폭을 넘으면 그 제목만 줄임(최소 36px). 컷은 블록 높이 + 16 → + 36px, 폭 최대 60 → 66%. 가짜 데이터로 맑음·흐림·비·밤 6가지 제목 확인.

## b136 · 홈 헤드라인 60 : 컷 45 (2026-10-23)

사용자: "60대 45, 5%만 겹치게." → 헤드라인은 왼쪽 60% 안에서 두 줄(56px, 긴 제목은 그 제목만 줄어듦, 최소 36px; 컷 없으면 전체 폭), 컷은 오른쪽 45% 칸(55–100%) 가운데, 가운데 5%만 겹침. 제목 길이에 따라 글자 크기가 룩마다 조금 달라짐(예: CITRON ON THE TERRACE 약 44px, FUCHSIA, FOUND 56px).

## b137 · 겹친 글자 색 그대로 (2026-10-23)

사용자: "인터랙티브한 게 좋아(제목마다 크기가 달라지는 것 그대로), 5% 겹치는 부분은 색깔 안 변해도 돼, 똑같은 색깔." → b133의 겹친 글자 흰색/검정 자동 바꾸기(`#peek-x` 마스크 복사본)를 없앰. 헤드라인은 전부 화면 글자색. `cutouts.js`의 `lum`은 남겨 두지만 앱에서 안 씀.
