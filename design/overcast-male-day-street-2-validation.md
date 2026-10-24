# b145 · Overcast / Chilly / Male / 35+ / Day / Street — 두 번째 세트 검증 (2026-10-24)

## 범위

- 원본: iCloud `Weather-App-originals/Overcast/Chilly/Male/35+/day/street-01`–`street-05` (README.md · READY.json · products.json · editorial.png · products/*.png). 이 5폴더만, 다른 세트 없음.
- READY.json: 5개 모두 `approved: true`, `products_complete: true`, category = Overcast · Chilly · Male · 35+ · day · street.
- 앱 경로: `look/berlin-complete/Overcast/Chilly/Male/35+/day/street/<01–05>/`, 보충 파일 `look/overcast-male-day-street.js`(index.html에서 `overcast-male-night-street.js` 뒤, `cutouts.js` 앞).
- 룩 ID `oc-chilly-m-35-day-street-01`–`05`. 같은 칸의 기존 `oc15-06…10-street-m`(`day/06–10-street/`)과 ID·경로가 겹치지 않음, 기존 파일·데이터 변경 없음.

## 원본 보존

- READY.json의 SHA-256 43개(README 5 · editorial 5 · 제품 PNG 28 · products.json 5) 작업 전 모두 일치.
- 작업 후 같은 43개 파일 SHA-256을 다시 계산해 작업 전 목록과 diff → 차이 없음. iCloud 파일은 읽기만 함.
- 투명 PNG 마스터(1254×1254 RGBA)와 PNG 에디토리얼은 저장소에 넣지 않음(IMAGE_STYLE 11장). 각 products.json `sourceMaster`·`sourceSha256`·`editorialSourceSha256`에 위치와 해시 기록.

## 이미지

| 룩 | 제품 수 | 에디토리얼 JPG | 제품 WebP |
| --- | --- | --- | --- |
| 01 | 5 (jacket · hoodie · jeans · beanie · boots) | 266,040 B, q80 | 34–50 KB |
| 02 | 6 (bomber · knit · cargo · sneakers · beanie · bag) | 274,961 B, **q76** (q80은 300KB 초과) | 24–50 KB |
| 03 | 6 (quilt · cardigan · henley · jeans · shoes · tote) | 246,791 B, q80 | 27–50 KB |
| 04 | 5 (varsity · hoodie · scarf · trousers · messenger) | 263,355 B, q80 | 32–50 KB |
| 05 | 6 (jacket · knit · base · jeans · shoes · bag) | 272,640 B, q80 | 27–48 KB |

- 합계 5 에디토리얼 + 28 제품. 에디토리얼 1024×1536 JPEG ≤300,000 B. 제품 500×500 RGBA WebP(Lanczos 축소, alpha_quality 100), 24,438–49,548 B(모두 목표 50KB 이하, 예외 없음). 50KB를 넘던 6장은 품질을 70–80으로 낮춤.
- 33개 모두 Pillow로 완전 디코드. 제품 28장 모두 알파 채널 있음, 네 모서리 알파 0, 최소 알파 0. 배경 제거·불투명 합성 없음(원본 알파 그대로).
- 흰색·아이보리 #F3EFE8·회색·남색 #1B2140·검정 바탕 합성 시트를 눈으로 확인: 잔여 배경·흰 테두리·잘린 제품 없음. 크림 헨리넥·토트·니트도 온전함.
- 새 이미지를 만들지 않음. 제공된 제품 이미지를 축소·변환만 함.

## 데이터·문구

- 145룩 · 954아이템 · 기사 145 · 활성 참조 937 (전: 140 · 926 · 140 · 909). 새 28아이템, 기존 아이템·룩 변경 없음.
- 룩: `bands ["chilly"]`, `sky "cloudy"`, `style "street"`, `gender "m"`, `age "35"`, 낮(`time` 없음). 아이템 ID `<outfitId>.<products.json id>`, products.json `appItemId`에 기록.
- 이름: 제작 측 ko/en/de 그대로.
- 기사 `intro`: 제작 측 룩 단위 howToWear(ko 마스터 그대로). 04만 en/de가 제품 이름("grey zip hoodie", "burgundy varsity jacket")을 그대로 반복해 5-1 점검에 걸려서 en/de를 살짝 고침(ko 그대로, 원문은 products.json `copy.sourceHowToWear`).
- 제품별 `note`(입는 법), `deck`, `article.title`, `pull`, `tip`: 제작 측에 제품별 입는 법이 없고 description이 틀 문장("에디토리얼에서 보이는 색상과 질감을 기준으로 복원한 단독 제품컷입니다")이라, 사용자 지시(2026-10-24: ko/en/de 입는 법·기사 제목은 묻지 말고 작성)에 따라 에디토리얼을 보고 새로 씀. products.json `description` = 새 입는 법, 원래 문장은 `sourceDescription`, 추정 복원 메모는 `uncertainty`/`inference` 그대로.
- 5-1 점검: 언어별 note 28개 모두 다름 · deck/intro(en)에 제품 name.en 2개 이상 없음 · title/pull/tip/deck/intro ko/en/de 모두 있음 · `bg` 모두 `#F3EFE8` · 제목 중복 없음.
- 홈 대표 컷: 투명 제품이라 아이템 `cut` = 제품 WebP 자체(b143과 같음, rembg 안 씀). `hero` = 제목이 말하는 제품(CUTOUTS.md 규칙): BROWN LEATHER, HOT COFFEE → 가죽 재킷 · COBALT ON THE KERB → 봄버 · RUST FROM THE MARKET → 러스트 카디건 · VARSITY ON A GREY DAY → 바시티 · CREAM FUZZ, FRESH BREAD → 크림 니트. 기사 룩 145개 모두 hero + cut 있음(missing cutouts: 0, jsc로 계산 — 이 환경엔 node가 없어 `tools/make-cutouts.py --check`는 못 돌림).

## 앱 로드 (헤드리스 Chrome, 가짜 날씨 응답)

- 흐림(코드 3) · 낮 · 체감 6° · 남성 · 스트리트, 씨앗 12개: 오류 없음, 시트에 기존 5 + 새 5 = 10룩이 모두 나옴, 새 룩의 제품 카드 이미지 5–6장 모두 로드(naturalWidth 500), 홈 헤드라인 뒤 대표 컷 로드.
- 스크린샷: 홈(헤드라인 + 투명 가죽 재킷), 시트(제목 · 에디토리얼), 제품 카드(CSS 아이보리 바닥 위 투명 제품 · 01 · OUTER · 이름 · 입는 법 · 인용구 · 팁).
- ko/de: 카드 이름·입는 법이 그 언어로 나옴.
- 다른 칸(맑음·비·저녁·여성·다른 스타일)은 새 룩이 `style street · gender m · sky cloudy · 낮`에만 해당해 고르는 결과가 바뀌지 않음(lookFits 필터). 흐림 남성 낮 스트리트 칸만 후보가 5 → 10.

## 남은 것·한계

- 실제 아이폰 확인 전. 사람 눈 검수는 확인용 시트와 헤드리스 스크린샷 수준.
- 캐스팅 메모: 제작 측 products.json `casting.modelAppearanceAge` = "approximately 28–32"(폴더는 35+). 그대로 기록만 함.
- 실제 기온·체감 수치, 브랜드·가격·구매 링크·소재 혼용률은 null. 가려진 부분(01 부츠는 앞코만 보임, 뒷면·여밈 등)은 제작 측 추정 복원 메모 그대로.
- 04는 신발이 화면 밖이라 신발 제품 없음, 양말·컵·빵·채소는 제외(제작 측 기록).
- PROMPTS.md는 제작 측이 주지 않아 없음.
- `tools/image-inbox.py` 파이프라인(approval.json/master-copy.ko.json)은 쓰지 않음: 원본이 READY.json 형식으로 왔고 해시는 직접 검증함.
