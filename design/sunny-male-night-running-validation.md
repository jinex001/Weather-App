# Sunny Male Night Running 01–05 verification

Build: b132
Start main SHA: `28ca2db9a1d76cc6bd27318c9cacd44f169d6076`
Latest main before mapping validation: `dc212190728966ac99f132e5f0b607e3cb42fd95`

## b132 · Sunny 남성 밤 Running 01–05 (2026-10-23)

기존 `Sunny/Chilly/Male/35+/night/01-running.jpg`–`05-running.jpg`는 바이트 불변. 제품별 독립 이미지 7/7/4/7/6개, 총 31개(500×500 실제 JPG, 각각 ≤50,000 bytes), 따뜻한 아이보리 배경. 각 `NN-running/products/`와 `products.json`·README·PROMPTS에 기록했다. ko/en/de 제품명·스타일링 설명·How to Wear 및 기사를 `look/outfits.js`의 해당 5개 룩에 직접 연결했다. productionStatus=ready, mappingStatus=mapped. 기존 룩 ID 5개와 확인된 단일 품목 ID 17개 보존, 새 품목 ID 14개 추가. 기존 복합 accessory ID 5개와 보이지 않는 03 이너 ID는 호환용 데이터로 보존하고 카드에서는 참조하지 않는다. 다른 130룩 및 보충 매핑 보존. 현재 런타임 135룩·862아이템(활성 851)·기사 125룩.

03번 이너·신발·양말, 05번 신발·양말은 보이지 않아 생성하지 않았다. 01 양말의 정확한 길이, 02 이너 색·04 하의 분류와 과거 글의 차이, 잘린 03·05 하의와 가려진 몸판·소매·뒤쪽·밑창 등은 각 JSON/README에 구분해 기록했다. 정확한 기온·혼용률·브랜드·가격·성능은 미확인(null). 최초 생성 31장 중 근거 없는 반사 무늬가 붙은 이너/양말 4장은 수정본으로 교체했으며 최종 제품 자산은 정확히 31장이다. [검증 결과](sunny-male-night-running-validation.md).

## Original editorial hashes

| Path | SHA-256 |
| --- | --- |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running.jpg` | `0b644fe08864e2a2ea315f4f0f5b79d567d3897d58ddbdb421aa7fb481e6ced8` |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running.jpg` | `222c2b9751efc323c5ef6f0b0b538ec9bd118fb3c75acce98010a2dcedfc084e` |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/03-running.jpg` | `ef0ae69d5973caacdf1f017ebfc77489ef8e11ddff9ab7f893f93bbaaed8114d` |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running.jpg` | `9b7417136ca07247854d1c7e491848aa321c424378f70eab5d904dcd2f709f4d` |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running.jpg` | `6dc9c63dc24e3cf8b29b81ea77715ceb1777a1b8c2153e656024fa23c6b4fd33` |

## Product export checks

| Path | Format | Pixels | Bytes |
| --- | --- | --- | ---: |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/01-outer.jpg` | JPEG | 500×500 | 47338 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/02-top.jpg` | JPEG | 500×500 | 29358 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/03-bottom.jpg` | JPEG | 500×500 | 15670 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/04-shoes.jpg` | JPEG | 500×500 | 48649 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/05-socks.jpg` | JPEG | 500×500 | 34960 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/06-gloves.jpg` | JPEG | 500×500 | 34472 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/07-headwear.jpg` | JPEG | 500×500 | 39471 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/01-outer.jpg` | JPEG | 500×500 | 47750 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/02-top.jpg` | JPEG | 500×500 | 48102 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/03-bottom.jpg` | JPEG | 500×500 | 23738 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/04-shoes.jpg` | JPEG | 500×500 | 49357 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/05-socks.jpg` | JPEG | 500×500 | 48169 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/06-gloves.jpg` | JPEG | 500×500 | 28959 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/07-headwear.jpg` | JPEG | 500×500 | 31815 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/03-running/products/01-outer.jpg` | JPEG | 500×500 | 45767 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/03-running/products/02-bottom.jpg` | JPEG | 500×500 | 18929 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/03-running/products/03-gloves.jpg` | JPEG | 500×500 | 44818 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/03-running/products/04-headwear.jpg` | JPEG | 500×500 | 48769 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/01-outer.jpg` | JPEG | 500×500 | 36991 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/02-top.jpg` | JPEG | 500×500 | 29433 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/03-bottom.jpg` | JPEG | 500×500 | 25378 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/04-shoes.jpg` | JPEG | 500×500 | 48854 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/05-socks.jpg` | JPEG | 500×500 | 28900 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/06-gloves.jpg` | JPEG | 500×500 | 44063 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/07-headwear.jpg` | JPEG | 500×500 | 33080 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/01-outer.jpg` | JPEG | 500×500 | 42963 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/02-top.jpg` | JPEG | 500×500 | 26837 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/03-bottom.jpg` | JPEG | 500×500 | 22479 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/04-gloves.jpg` | JPEG | 500×500 | 33922 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/05-headwear.jpg` | JPEG | 500×500 | 29117 |
| `look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/06-gear.jpg` | JPEG | 500×500 | 16680 |

## Validation scope

- All 31 final images individually visually inspected: one item category only (one pair for shoes/socks/gloves), full product, ivory background, no text/logo/watermark. Four unsupported reflective decorations removed in separate imagegen edits.
- Pillow decoded all 31 final files as JPEG; measured size 500×500, each ≤50,000 bytes. Unique one-to-one product paths and SHA-256 values checked.
- Original 5 editorial byte comparisons against origin/main passed; app editorial paths unchanged. No editorial copies added.
- Node VM loaded the actual index.html look scripts in order, including all three existing supplements. Exactly 5 target outfits changed; other 130 outfits and 831 unaffected item records preserved.
- Existing 17 observed single-item IDs retained. 14 new IDs. Five legacy mixed accessories and the unseen 03 top stay in data without active references.
- products.json product order/count/image/name/How to Wear/bg matched app items in ko/en/de. All runtime image paths and item references exist. Clear/chilly/m/35/evening/run filters retained; selection code unchanged.
- No PNG or contact sheet is included as an app asset. Production statuses only set after file generation and inspection.
- Browser/device interaction and live GitHub Pages rendering were not exercised; data/runtime/path validation was executed locally.
- Built-in imagegen used for 31 individual product generations plus 4 corrective edits. Only 31 final images are published; hidden geometry remains inferred.

Concurrent update preserved: dc212190728966ac99f132e5f0b607e3cb42fd95 (Sunny male night Street b131). Shared files were reread from that main, running mapping reapplied, BUILD advanced to b132. Its 47 added files and Street supplement remain intact.
