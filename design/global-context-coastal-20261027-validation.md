# b173 검증 · global-context-coastal-20261027 (2026-10-27)

## 원본

- 로컬 전달 폴더 READY.json: `approved: true`(테스트 세트 제작·배포 승인, 이미지별 사용자 육안 승인 아님), `editorialsApproved: false`, `parentQaReviewed: true`, `products_complete: true`. 목록 19개 파일 SHA-256·크기 모두 일치.
- 커밋한 것: `delivery/editorial.jpg`, `delivery/products/01-top.webp`·`02-bottom.webp`·`03-bag.webp`(바이트 그대로), 정리한 `products.json`(앱 매핑·en/de 추가, 로컬 경로·프롬프트 없음), README. 커밋 안 함: PNG 마스터, editorial-master.png, ALPHA_QA.jpg, GENERATION.json(프롬프트), 스크립트, IMAGE_STYLE.production.md 원본, 이전 계획 문서 원본. 원본은 옮기거나 지우지 않음.

## 이미지 (모두 Read로 열어 봄)

| 파일 | 규격 | 바이트 | 확인 |
| --- | --- | --- | --- |
| editorial.jpg | 1024×1536 JPEG (baseline) | 264,708 | 코발트 캠프칼라 반소매 셔츠(가슴 포켓·단추), 아이보리 하이웨이스트 팬츠(단추·벨트 고리·사선 주머니), 테라코타 캔버스 토트(긴 손잡이). 밝은 외벽·차양·자갈 보도, 직광. 허벅지 아래·신발은 크롭 밖 |
| products/01-top.webp | 500×500, VP8X + ALPH(VP8L) + VP8 | 32,656 | 셔츠 단독, 알파 0–255, 모서리·테두리 0, bounds [30,49,470,459] = FORMAT_REPORT |
| products/02-bottom.webp | 〃 | 26,932 | 팬츠 단독(전체 길이, 밑단 추정 복원), bounds [96,30,455,466] = FORMAT_REPORT |
| products/03-bag.webp | 〃 | 29,810 | 토트 단독(아래 모서리 추정 복원), bounds [64,32,468,464] = FORMAT_REPORT |

알파는 Pillow가 없어 순수 파이썬 VP8L 디코더로 풀어서 봄. 옷 안쪽 알파는 대부분 253(≈99%), 가장자리는 부드럽게 0으로. ALPHA_QA.jpg(흰·검정·회색·#F3EFE8 합성)도 열어 봄: 잔여 배경·잘림 없음. 마스터 PNG 3장·editorial-master.png도 열어 delivery와 같은 착장임을 확인.

## 매핑

- 룩 `gc-coastal-pleasant-f35-day-street-20261027-01`: bands [pleasant], sky clear, style street, gender f, age "35", `time` 없음(낮), `rain` 없음. `visualRegion: warm-coastal-urban`, `climateContext: {feelsLikeBand: pleasant, humidityContext: dry}`, `contextReview: reviewed`.
- 아이템 `.01-top`(top) · `.02-bottom`(bottom) · `.03-bag`(bag), `bg #F3EFE8`, alt = altKo. 대표 컷 HERO → `.01-top`, CUTS → 셔츠 WebP 자체(`lum` null).
- 문구: deck.ko = captionKo, intro.ko = introKo, tip.ko = tipKo, name.ko·note.ko = 제품 nameKo·howToWearKo(바이트 일치). title = headlineEn, pull = pullQuoteEn. en/de는 한국어를 번역. 입는 법 3개 언어 모두 제품마다 다름, 인트로에 제품 이름 나열 없음. 브랜드·가격·소재 혼용률·성능 주장 없음(이름의 "캔버스"는 한국어 마스터 그대로).
- 보고: 셔츠 입는 법("앞자락 한쪽만 가볍게 넣어")은 마스터 그대로 두었으나, 에디토리얼에서는 셔츠가 거의 빼 입은 상태로 보임.

## 런타임·선택 (JS 실행 불가 → 파이썬 포트)

이 세션에서 jsc·JXA(osascript)·node 실행은 승인 대기로 막혀 실행하지 못함. 대신 index.html의 스크립트 순서대로 룩 모듈 리터럴을 파이썬으로 디코드하고(보충 모듈의 교체/추가/업데이트 규칙, b164 `it()` 빌더 포함), `lookFits`·`lookPool`·`dayPick`(b172 규칙과 b173 규칙)과 `look/global-context.js`를 파이썬으로 옮겨 실행.

- 런타임 241룩 · 1480아이템 · 기사 241(b171 240 · 1477 + 1 · 3). 룩 ID 중복 0, 이미지·컷 경로 누락 0, 기사 룩 대표 컷 누락 0. `#` 아닌 `bg` 21개는 b143 기존 데이터(이번 변경 아님).
- 지역·습도가 있는 룩은 새 룩 1개뿐(SIDECAR 비어 있음).
- 104경우 통과, 그중: 맑은 쾌적함 낮 여성 스트리트 → 새 룩(유일 후보) · 선선함/따뜻함은 옆 단계 후보 · 비 61/63/65 쾌적함은 지역·dry여도 COMING SOON · 쌀쌀함 비 3강도 × 남녀 × 3스타일 × 낮/저녁 후보 불변 · 쏟아지는 비 COMING SOON 유지 · 흐린 쾌적함 COMING SOON · 저녁(저녁 룩 있음) 새 낮 룩 안 나옴 · 같은 적합도에서 지역 일치가 앞 · 단계 정확 일치 기존 룩 > 옆 단계 지역 일치(가상 룩) · 지역 불일치·미상 모두 후보 유지 · humid/dry/unknown 순위 · 어댑터 없으면 순위 0 · 베를린 DE/마드리드 → european, 라스팔마스(ES 28.1,-15.4) → warm-coastal, 카나리아 GPS·예전 장소·시드니 → unknown · 씨앗에 맥락 키 · `v.pick` 재검증 · 미래 날짜 습도 unknown · `country_code` 저장 · 캘린더 카드 맑은 쾌적함 여성 → 새 룩, 남성 → COMING SOON.
- 회귀: b172 라이브러리 + b172 규칙 vs b173, 9단계 × 코드 8개(0·2·3·45·61·63·65·71) × 낮/저녁 × 남녀 × 3스타일 × 지역 unknown/european = 1,728경우 중 후보·적합도가 바뀐 것은 맑음(0·2) 여성 낮 스트리트 선선함·쾌적함·따뜻함 6조합(× 2 지역)뿐 — 새 룩이 들어간 칸. 나머지는 순위까지 동일(랜덤 씨앗 문자열만 바뀌어 같은 칸 안 3개 뽑기 순서는 달라질 수 있음). 캘린더 후보도 같은 6칸만 바뀜.
- 기존 이미지·products.json 수정·삭제 0(git status). 새 파일은 `look/global/…`, `look/global-*.js`, `design/` 문서뿐.

## 못 한 것

- 실제 JS 엔진·브라우저·아이폰 렌더링(홈 헤드라인·컷, 시트, 캘린더 카드) 확인.
- 자동 습도 분류, 베를린 룩 지역 검토, 글로벌 경로용 가져오기 도구.
