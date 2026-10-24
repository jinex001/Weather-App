# b147 검증 · 흐림 남성 낮 스트리트 06–10 제품 투명 교체 (2026-10-24)

교체만 함: 새 룩·새 아이템·새 이미지 생성 없음. 원본은 로컬 `output/background-removal/ready/06-street … 10-street/products/*.png`(배경 제거 완료본, 1254×1254 RGBA). iCloud 원본은 건드리지 않음.

| 룩 | 제품 | 파일 |
| --- | --- | --- |
| `oc15-06-street-m` | 5 | 01-outer · 02-top · 03-bottom · 04-shoes · 05-jewelry |
| `oc15-07-street-m` | 7 | 01-outer · 02-top · 03-bottom · 04-shoes · 05-scarf · 06-bag · 07-eyewear |
| `oc15-08-street-m` | 5 | 01-outer · 02-top · 03-bottom · 04-shoes · 05-headwear |
| `oc15-09-street-m` | 6 | 01-outer · 02-top · 03-bottom · 04-socks · 05-shoes · 06-headwear |
| `oc15-10-street-m` | 5 | 01-outer · 02-top · 03-bottom · 04-shoes · 05-bag |

- 변환: 원본 PNG 알파 그대로 500×500 LANCZOS(Pillow, 알파 미리 곱하기) → WebP(method 6, alpha_quality 100). 품질 88(일부 85·82)로 50KB 이하 25장. 질감이 많은 3장은 품질 80으로 50KB 초과(상한 100KB 안): 07 머플러 64,246 B(프린지·트위드), 08 체크 오버셔츠 73,266 B(체크 기모), 10 러너 63,354 B(메시·패널). 전체 13,582–73,266 B.
- 모두 RGBA·알파 0–255·네 모서리 알파 0. 흰색·아이보리·회색·남색·검정 바탕 합성 시트에서 28장 모두 옷 전체가 남고 아이보리 테두리 없음(눈으로 확인).
- 데이터: `look/outfits.js` 해당 28 아이템의 `image` `.jpg → .webp`, `alt` 끝 "아이보리 바닥에 수직으로 촬영한 제품 플랫레이" → "투명 배경의 제품 컷", `bg` → `#F3EFE8`(카드 아이보리). 이름·보조문구·입는 법(ko/en/de)·분류·ID는 그대로. 룩 레코드 145개 바이트 단위 동일, 아이템 ID 집합 954개 동일, 바뀐 아이템 = 이 5룩이 참조하는 28개뿐.
- 홈 대표 컷: `look/cutouts.js` 5행을 `01-outer.cut.webp`(rembg) → 투명 `01-outer.webp` 자체로(b145와 같은 방식), `lum` 다시 계산. HERO(5룩 → 01-outer)는 그대로.
- 지운 파일: 제품 JPG 28장 + 쓰이지 않게 된 `01-outer.cut.webp` 5장. 에디토리얼은 원본과 바이트 동일해 그대로.
- 저장소 products.json·README: 제품 경로 `.webp`, 대체 텍스트만 바꿈(원본 products.json으로 덮어쓰지 않음).
- 확인: JavaScriptCore로 index.html 스크립트 순서대로 라이브러리 로드 전후 비교, 라이브러리 전체 참조 파일 누락 0, 헤드리스 Chrome에서 28 제품 + 5 대표 컷 디코드 33/33(500×500), 앱 첫 화면 로드, `proto/look-cards.html?look=oc15-07-street-m` 카드 렌더링, `tools/tests` 13개 통과.
- 확인 못 함: `tools/make-cutouts.py --check`(이 환경에 node 없음; 같은 비교를 jsc로 함), 실기기(iPhone) 화면, 이 5룩이 시트 첫 장일 때의 실제 날씨 화면.
