# Sunny Female Night Running 01–05 · File verification

Build b138. Source main: `360c174c19bb22da6188547a758d9cf3742fed8c`.

## b138 · Sunny 여성 밤 Running 01–05 (2026-10-23)

기존 `Sunny/Chilly/Female/35+/night/01-running.jpg`–`05-running.jpg` 원본 5장은 바이트 불변. 제품별 독립 JPG 8/8/7/8/9개, 총 40개를 생성·검수했다. 모든 제품은 500×500 실제 JPEG, 각각 ≤50,000 bytes, 따뜻한 아이보리 배경, 품목당 정확히 한 파일이다. 신발·양말·장갑·귀걸이 한 쌍은 한 품목. products.json에 ko/en/de 제품명·스타일링 설명·How to Wear·근거·복원 범위를 기록하고 `look/outfits.js`에 직접 매핑했다. productionStatus=ready, mappingStatus=mapped.

기존 룩 ID 5개와 단일/주요 품목 ID 18개를 유지하고 단독 품목 ID 22개를 추가했다. 복합 accessory ID 5개와 03번의 보이지 않는 기존 top ID는 호환용으로 남기고 제품 카드에서는 제외했다. 다른 130룩, 기존 보충 매핑, 선택 로직을 보존했다. 최종 런타임 135룩·884아이템(활성 867)·기사 130룩. 실제 선택 함수로 540가지 조건의 결과 불변을 확인했다.

01 이너는 사진의 차콜 집넥으로, 02 하의는 보이는 네이비 테이퍼드 팬츠로 기존 일반 문구를 정정했다. 03 별도 이너·양말은 보이지 않아 생성하지 않았다. 03 신발은 프레임 하단의 부분 관찰을 근거로 전체 한 켤레를 복원했다. 반대쪽 귀걸이·여밈, 의류 뒤쪽·허리·가려진 몸판, 신발 밑창과 양말 발 부분은 추정 복원으로 표시했다. 정확한 기온·브랜드·가격·실제 혼용률·성능은 미확인(null). 02·04 이너에 처음 추가됐던 근거 없는 반사 무늬는 수정본으로 교체했다. [파일별 검증](sunny-female-night-running-validation.md).

## Original editorials — unchanged

| Path | Bytes | SHA-256 |
| --- | ---: | --- |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running.jpg` | 317101 | `dffceebf880a11ad76a416c75c5e0fb0886f20850ef14f156238f0aae6c7391e` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running.jpg` | 301394 | `4f485d3abba7d776e0159ecfd0abd7af690df18c16371f8e99c85f0115de0a7a` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running.jpg` | 262263 | `c310c9c4d943e95c12061235c0a93561b3cb1db7ebc0348274ab916d5a92ebcd` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running.jpg` | 301025 | `b0aded857d8bf4fa56563f21569623a8db68e3bdd2264ee5d2398132c568067e` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running.jpg` | 285700 | `931aec0a21de760130b22e94b29491b51b7a7b04f4fd2d39a6f4a8e9f34d47c5` |

Originals already exceed the current 300KB editorial target in some cases; preserving original bytes takes precedence, so they were not recompressed.

## Product files

Each row: one standalone product category (matching pairs count as one). All 40 files visually reviewed; no product boards, collages, bodies, text or logos. Clothing and running shoes use overhead presentation; the bottle uses a complete upright product view. Background corner colour is measured after JPG encoding.

| File | Format | Pixels | Bytes | Corner mean | SHA-256 |
| --- | --- | --- | ---: | --- | --- |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/01-outer.jpg` | JPEG | 500×500 | 44604 | `#f6efe6` | `644ed8c1cfec05b7ac827a3164e312c5ee33c7de03f28343128f64890acdbcf3` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/02-top.jpg` | JPEG | 500×500 | 40245 | `#f4efea` | `69665881709f4eda3ef35c2fc56a217ff28f56928543026cb0e89757da1a5a2f` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/03-bottom.jpg` | JPEG | 500×500 | 14846 | `#f3f0eb` | `588858d1f7444699f8b5cb14baeff14de72e6b4549b45c3210c08425f0108593` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/04-gloves.jpg` | JPEG | 500×500 | 28267 | `#f7f3ed` | `dc2ede409fae5031ced8ea95407ba465f8be7d505b28bedb2f80b6dfea22ccbd` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/05-socks.jpg` | JPEG | 500×500 | 38843 | `#f5f2eb` | `1c07c7483d548d4e4bfd1b8740a7ed885e09d55272dc254ccd5df2dc62a567d3` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/06-shoes.jpg` | JPEG | 500×500 | 41871 | `#f2ede7` | `9c53181af12f7cd8e05dee4f70039940842eb37d57033f1810bf8b1d1af2d296` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/07-headwear.jpg` | JPEG | 500×500 | 27615 | `#f5f0ea` | `ee8db68ec11cf37b3b20533ee007b88bdb8b8f404ae7f0b4b705b675ca3563e3` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/08-jewelry.jpg` | JPEG | 500×500 | 15464 | `#f4efe9` | `e26a0b26343321807a5b689d75f2b7130ee3a1e736d8e42019a00edbe98a53df` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/01-outer.jpg` | JPEG | 500×500 | 36477 | `#f3eee8` | `5ff10bd59cb675b8c56eb6eb5b49d058c192fa42684a10e969ab8e8b91d9e86f` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/02-top.jpg` | JPEG | 500×500 | 26238 | `#f7f2ec` | `f13f3f13baff34de007d6e10a8b695cb2cf44c39efbc625eb4c496f84acaca45` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/03-bottom.jpg` | JPEG | 500×500 | 18260 | `#f5f2ed` | `8c1dd0cdb24e0755146b8a4abf85024c65ac18ba0453114b9a78ad6156976998` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/04-gloves.jpg` | JPEG | 500×500 | 27995 | `#f5f1e8` | `1e6d444730b012bf58ee8377ab1131d31a5ec91e24fb0b0dd16d5f546e030e18` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/05-socks.jpg` | JPEG | 500×500 | 21488 | `#f3eee8` | `981bd499e566f09af5d9bd50a8b7772e601c9f5f2d22b34d20308315a55654c9` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/06-shoes.jpg` | JPEG | 500×500 | 46759 | `#f5f0e8` | `853c2b5164cb0a5b7262dde9e2a578f42ef732f4ba1e8610e11f8fc18632b6d0` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/07-headwear.jpg` | JPEG | 500×500 | 26775 | `#f8f5f0` | `6629a9e37dde0379ee7b72af101c24c68fb7751ed95418ee7dd8ffe9ed6e6e76` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/08-jewelry.jpg` | JPEG | 500×500 | 16501 | `#f5f1eb` | `964552e076954eb025b094f741f43d7ed8f46dbae7257a753acbe5d3c79d3243` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/01-outer.jpg` | JPEG | 500×500 | 37481 | `#f4efe9` | `ef1351f289f2e5d2f299a5def2e47047e9bcc04593d895b0d81a024d03870036` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/02-neckwear.jpg` | JPEG | 500×500 | 28928 | `#f3f0e9` | `b4b93fcb939e62524b73157e930ea61ab81b36e9737a9a126dfb9c33b3c07f48` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/03-bottom.jpg` | JPEG | 500×500 | 14538 | `#f4efe9` | `acc353bb09d9e7b568281f7615962ec1248296e917aca400870b09c9683672eb` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/04-gloves.jpg` | JPEG | 500×500 | 36417 | `#f4f0ea` | `83acf6ea1f06fe7c7ecb4577f7c2cca95075d5d939fa4a9cf87dd3ba337a6f25` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/05-shoes.jpg` | JPEG | 500×500 | 46690 | `#f5f0ea` | `1e203cfb1939f425f45b4fb0ae1c1dc10abbf9ac2a40e54b57b3a116e11281a5` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/06-headwear.jpg` | JPEG | 500×500 | 47944 | `#f2efe8` | `ef819298ec8ed1a26bcf4401e88cc54fb037416b27eaded226f0ae6336fd6708` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/07-jewelry.jpg` | JPEG | 500×500 | 18062 | `#f4efe9` | `820dec690f70ed921d9d115e04fb62db18a1db40d03fc3a60f4a4f10c5868949` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/01-outer.jpg` | JPEG | 500×500 | 41251 | `#f4f1ec` | `63ca2814f883956e2888a5ba8db9c74c63d4653b080b27745fe50c25f4f6b77f` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/02-top.jpg` | JPEG | 500×500 | 32880 | `#f5f2eb` | `50c4c7953e15bf4a98e9cadaca148abaa1343636b48ea585c636f656061139e6` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/03-bottom.jpg` | JPEG | 500×500 | 21377 | `#f6f3ec` | `b84c6c6bb2bb0804e22bb7e8c8a1eaa89f69076b1a044aab1e6b7e7b99df6eb1` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/04-gloves.jpg` | JPEG | 500×500 | 37868 | `#f9f3ea` | `18847fdd2b32b0a0fe74d0d5fc781c30b628aac95982d06ad698ea7560155361` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/05-socks.jpg` | JPEG | 500×500 | 21377 | `#f5eee6` | `ea8bf8106baf2603b392cadf1b9b6d6122dbe921e81d20d17d8ef7c2ff4d0aeb` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/06-shoes.jpg` | JPEG | 500×500 | 49064 | `#f5f0e9` | `7b66142a55a00ec54c235d2a638ad872f1f52460c5bcb794c3fc94e8c083711b` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/07-headwear.jpg` | JPEG | 500×500 | 33641 | `#f6f2eb` | `bd6609d2b81dcbbc8f068142ddef40dca0626fc4d15d4f15a0b389dfbef6e29a` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/08-jewelry.jpg` | JPEG | 500×500 | 16102 | `#f5f1eb` | `d680e942e80ba465432b060bd0c110533ec5f018a3fc560c40eed3fb9a68dee2` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/01-outer.jpg` | JPEG | 500×500 | 38461 | `#f7f0e8` | `e3aed957509e559c18bea321249539bfacd38e0a756a453b4a641499f9422c12` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/02-top.jpg` | JPEG | 500×500 | 37396 | `#f4ede4` | `eb5142733a4e3b2ac5f9669b456e9d9aee285164a6d938f287084184701c26cc` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/03-bottom.jpg` | JPEG | 500×500 | 19276 | `#f7f2ec` | `c8633678cf38ac783792e7153679432790c78585aef43e3fcb4cd7d4303b9a64` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/04-gloves.jpg` | JPEG | 500×500 | 48576 | `#f6f2ea` | `45544aeb669f755092c06e8176ad070177b8c122a77fae08357f57d928af066c` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/05-socks.jpg` | JPEG | 500×500 | 27401 | `#f8f3ed` | `8ef2aa89fa37abee4af89cc87f885d48653a4c7a0fa6554b71c05b218c870dbd` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/06-shoes.jpg` | JPEG | 500×500 | 47804 | `#f4efe9` | `d818a259b2c81f2090180894788d05d120e614ef534cad313dc21aac483531ca` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/07-headwear.jpg` | JPEG | 500×500 | 33738 | `#f7f2ec` | `7ec30a15ce40739c572b987f75d7eea683689b0f07e2cd2fa6ff1d88d2a970f4` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/08-gear.jpg` | JPEG | 500×500 | 13254 | `#f5f0ea` | `420371fc1d54644b11326c5f728bb8b2b89d342fd4e0b915e19f57de051be2ec` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/09-jewelry.jpg` | JPEG | 500×500 | 17473 | `#f7f2ec` | `ed98054423b03a5df9f9a1238d654813d41e09110f03464414339ed059acc7b9` |

## Mapping checks

- 5 products.json records; productCount = product array size = JPG count = active item count: 8/8/7/8/9.
- Every product image resolves from JSON and runtime item data to the same file. ko/en/de names, descriptions, article and How to Wear are populated.
- Runtime has 135 outfits, 884 item records, 867 active unique item IDs, 130 articles.
- Other 130 outfits and all unrelated item records match pre-change runtime data. Existing IDs are retained, including inactive compound records.
- Actual lookFits/lookPool functions returned identical outfit IDs before/after for 540 combinations (9 bands × 2 times × 2 genders × 3 styles × 5 sky/rain states). Sunny chilly women evening run returns 3 of the requested five, each with article and product images.
- No selection function, unrelated style asset, original editorial or supplement script was modified.
- Native phone UI was not manually exercised; verification covers data, file bytes and actual selection functions.

Rebased onto latest main `61c1d9f43d2ed25a0eff4bae25f45a0fe585da6a`: existing home typography/layout, cutout assets, cutouts.js and the new background-removal handoff are preserved. Final build is b138. Original ivory JPGs are retained; new hero cutout derivatives belong to the documented Claude cleanup workflow.
