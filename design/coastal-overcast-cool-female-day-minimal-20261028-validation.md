# b184 · 해안 · 흐림 · 선선함 · 여성 · 35+ · 낮 · 미니멀 — 검증 (2026-10-28)

배치 `coastal-overcast-cool-female-day-minimal-20261028`. 사용자가 에디토리얼 5장을 승인하고 이 배치의 `origin/main` 반영·배포를 명시 승인. 제품은 제작 측(Codex) 기술·4배경 검수(VISUAL_REVIEW.json passed), 제품별 사용자 육안 승인은 주장하지 않음.

## 자산 (30개, 바이트 그대로)

- 원본: `originals/product-batch/complete/<룩 ID>/` 만 사용. PNG 마스터·app-editorials/app-products 사본·QA 시트·프롬프트·생성 기록·스크립트는 커밋 안 함.
- 30개 모두 SHA-256 = READY.json = products.json.
- 에디토리얼 5장: JPEG 1024×1536, 209,614–261,976 B (≤300,000).
- 제품 25개: WebP RGBA 500×500, 21,268–46,594 B (≤50,000), 알파 0–255, 네 모서리·테두리 알파 0 (Pillow, 상위 작업 image-tools).
- Claude가 30장 모두 Read로 열어 metadata와 대조함.

## 사진과 대조한 내용

- 01 차콜 블레이저(원 버튼) · 아이보리 크루넥 니트 · 토프 스트레이트 팬츠 · 블랙 페니 로퍼 · 블랙 플랩 숄더백 — 사진과 일치.
- 02 스톤 쇼트 트렌치 · 네이비 크루넥 니트 · 크림 팬츠 · 블랙 로퍼 · 초콜릿 플랩 숄더백 — 일치. **보고:** 사진 속 로퍼엔 발등에 작은 금속 장식이 보이는데 제품 컷은 장식 없는 페니 스트랩(전달된 그대로 둠, products.json `observationNotes`).
- 03 올리브 칼라리스 재킷 · 화이트 저지 티 · 다크 인디고 진 · 오프화이트 스니커즈 · 블랙 토트 — 일치.
- 04 네이비 블레이저 · 페일 블루 우븐 셔츠 · 라이트 그레이 팬츠 · 블랙 페니 로퍼 · 탄 크로스보디 — 일치.
- 05 블랙 칼라리스 집 재킷 · 에크루 스트라이프 **저지**(니트 아님) · 베이지 주름 팬츠 · 초콜릿 토트 — 일치. 다크 브라운 로퍼는 사진 밖이라 **추정 디자인**(입는 법 문구에도 그렇게 적음, 관찰이라고 하지 않음). **보고:** 사진의 토트는 넓은 끈 하나로 메고 손을 넣은 모습, 제품 컷은 손잡이 두 개(전체 형태 추정, 그대로 둠).
- 꽃·포장지·커피·장바구니와 내용물·지도·열쇠는 소품(제품 아님). 작은 귀걸이는 따로 제품 없음.

## 매핑

- 모듈 `look/coastal-overcast-cool-female-day-minimal-20261028.js`(b181 모듈 뒤, `cutouts.js` 앞). 룩 5 · 아이템 25, 모두 새 ID, 충돌 없음.
- 룩 필드: `sky: cloudy`(제작 측 overcast), `bands: [cool]`, `gender: f`, `age: "35"`, `style: minimal`, `time` 없음(낮), `visualRegion: warm-coastal-urban`, `humidityContext: unknown`, `contextReview: reviewed`.
- 대표 컷 = 아우터 WebP 자체(01 blazer · 02 trench-jacket · 03 collarless-jacket · 04 blazer · 05 zip-jacket), `cutouts.js` CUTS·HERO 5행, 새 컷·복제 없음. `bg` `#F3EFE8`.
- 문구: 한국어 마스터(제목·인트로·제품 이름) 그대로. deck(제작 측 = 제목)·인용구(다섯 룩 같음)·팁(다섯 룩 같음)·제품 입는 법(분류마다 같은 틀 문장, 스니커즈에 "로퍼 라인")은 5-1장 기준 미달이라 에디토리얼 보고 ko/en/de 새로 씀. en 인트로 01·05, de 인트로 05 관용구 다듬음. 원문은 products.json `copy.sourceCopy`, 제품별 `sourceHowToWear`.
- 숫자: 체감 16°C는 제작 장면 가정, 기온·습도·바람·도시 null. 브랜드·소재 혼용률·구매 링크 없음.

## 검사

- Node(상위 작업 런타임, python3 subprocess로 실행)로 `index.html` 순서대로 룩 스크립트 33개 실행: 271룩(266 + 5) · 기사 271 · 아이템 1634(1609 + 25), 룩 ID 중복 0, 에디토리얼·제품·컷 경로 누락 0, 새 룩 필드·대표 컷·ko/en/de 문구·`#` bg 문제 0, 새 세트 입는 법 ko 25/25 서로 다름, 인용구 5/5·팁 5/5 다름, deck ≠ 제목.
- 선택 회귀: `index.html`의 `lookFits` 원본 + `global-context.js`로 1,200경우(추움·쌀쌀함·선선함·쾌적함·따뜻함 × 맑음·흐림·가벼운/보통/쏟아지는 비 × 낮/저녁 × 남녀 × 3스타일 × 해안/유럽/동아시아/미상) 전후 비교. 바뀐 것은 2경우뿐: 해안 흐린 낮 여성 미니멀 **선선함**(베를린 쌀쌀함 흐림 미니멀 `of15-11`–`15` 옆 단계 → 이 5룩) · **쾌적함**(COMING SOON → 이 5룩). 해안 흐린 낮 쌀쌀함 여성 미니멀, b179·b180 여성 스트리트, b181 남성 스트리트, 맑음·비·저녁·다른 지역은 불변.
- `tools/make-cutouts.py --check`: missing cutouts 0.
- 브라우저·실기기 화면 렌더링은 이 작업에서 확인 못 함.
