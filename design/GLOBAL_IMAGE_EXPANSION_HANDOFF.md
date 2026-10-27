# 글로벌 이미지 확장 — 계약·구현 상태

처음 작성: 2026-10-27(상위 작업의 문서 계획). 같은 날 b173에서 아래 "구현됨" 범위만 앱에 넣었고, 나머지는 보류로 표시한다. 생성 기준은 [IMAGE_STYLE.md](IMAGE_STYLE.md) 12장, 앱 선택 규칙은 [look-library.md](look-library.md) "글로벌 맥락", 매핑 절차는 [IMAGE_MAPPING_HANDOFF.md](IMAGE_MAPPING_HANDOFF.md) 5-2장.

## 상태 (b173)

| 항목 | 상태 |
| --- | --- |
| 생성 입력: 도시 대신 climateContext × visualRegion (IMAGE_STYLE 12장) | 구현됨(문서) |
| 글로벌 저장 경로 `look/global/<batchId>/<lookId>/` | 구현됨, 첫 세트 `global-context-coastal-20261027` 1룩 |
| 선택적 룩 메타데이터 `visualRegion` · `climateContext.humidityContext` · `contextReview.status` | 구현됨(`look/global-coastal-20261027.js`) |
| 어댑터 `look/global-context.js`(모든 룩 모듈 뒤 로드, 실패 시 b172 선택) | 구현됨 |
| 기존 룩 sidecar(`SIDECAR`, 룩 ID → 검토된 값) | 형식만 구현, **비어 있음**(베를린 룩 검토 전) |
| 장소 → 시각 지역: `?region=` 명시값, geocoder `country_code`(장소 `cc`로 저장), 카나리아 제도 좌표 프로필, 해안 칸(b175 `look/coast-grid.js`, GPS 포함) | 구현됨. 그 밖의 GPS·예전 저장 장소·목록 밖 나라 = unknown |
| 습도 맥락 순위 | 명시값(`?humidity=`)만. **API 습도 요청·분류·임계값은 보류** |
| 같은 적합도 안에서 기후 → 지역 순위, 씨앗에 장소·맥락 포함, `lastView`·`dayView`·`dayPick`·`lookPool` 공유, `v.pick` 재검증 | 구현됨 |
| 베를린 사진 검토 후 지역 태깅, 도시 인식 가능 자산 예외 목록 | 보류 |
| 제작·가져오기 도구의 글로벌 경로 지원(로컬 automation 도구) | 보류(이 저장소 밖, 점검 안 함) |
| 습도 기반 자동 선택(예보 `relative_humidity_2m` 등) | 보류 — 수치 구간 미정, 임의 임계값 금지 |
| 국가 어휘 확장, 남반구 계절 처리 | 보류. 지금도 월·위도로 옷을 고르지 않음(단계·하늘·시간대만) |

## 선택적 메타데이터 계약

```json
{
  "globalContextVersion": 1,
  "sourceCity": null,
  "climateContext": { "feelsLikeBand": "pleasant", "humidityContext": "dry", "relativeHumidityPct": null, "windKmh": null },
  "visualRegion": "warm-coastal-urban",
  "contextReview": { "status": "reviewed", "basis": "…" }
}
```

- 기존 `weather.condition / rainIntensity / timeOfDay / temperatureC / feelsLikeC`는 그대로 둔다. `isLiveMeasurement: false`인 값은 제작 가정.
- `reviewed`가 아닌 값은 앱이 unknown으로 다룬다. 미상과 "모든 조건에 적합"은 다르다. unknown 습도를 humid·dry로 확정하지 않는다.
- 기존 products.json은 이 키 없이 계속 읽힌다. 기존 이미지·경로·ID·승인·localStorage를 바꾸지 않는다.

## 앱 선택 규칙 (구현된 순서)

1. 스타일·성별 필터. age는 기록용(새 연령 제한 없음).
2. 시간대: 저녁 룩 우선, 그 스타일·성별에 저녁 룩이 하나도 없을 때만 낮 룩(기존 그대로). 지역 때문에 완화하지 않음.
3. 체감 단계 거리 ≤ 1. 습도로 체감온도를 다시 가감하지 않음.
4. 하늘·비 강도 순위 0만 사진으로 보여 주고, 없으면 COMING SOON(b114). 마른 날 비 룩 금지, `rainLevel` WMO 매핑 유지.
5. 같은 적합도 안에서 기후: 같은 humidityContext → unknown → 다른 값. 질의가 unknown이면 적용 안 함.
6. 그다음 지역: 같은 visualRegion → 검토된 neutral-urban → 다른 지역·미검토. b175부터: 검토된 지역 룩(neutral-urban 제외)은 같은 지역에서만, 다르거나 unknown이면 제외 → 남는 룩이 없으면 COMING SOON.
7. 같은 순위 안에서 seeded random 3개. 씨앗에 장소 좌표·지역·습도 키를 넣음. 도시명은 자산 매칭 키가 아님.
8. 홈·상세·캘린더가 같은 맥락을 씀. 미래 날짜 습도는 unknown. `v.pick`은 현재 후보일 때만 맨 앞.
9. 어댑터·메타데이터 없음 → b172 선택과 같음.

## 검증 게이트 (b173에서 실행한 것은 검증 기록 참고)

- 기존 자산 경로·바이트·룩/아이템 ID·승인 불변, localStorage own/want 연결 유지.
- 같은 적합도의 지역 일치/불일치, 지역 없음, 단계 정확 일치 기존 룩 > 옆 단계 지역 일치 룩, humid/dry/unknown, 어댑터 없음, 비 3강도·눈·흐림 COMING SOON 유지, 홈·카드·상세의 같은 룩 연결.
- 실기기·브라우저 화면 확인은 별도로 필요.
