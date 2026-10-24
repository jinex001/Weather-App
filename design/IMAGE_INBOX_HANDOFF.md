# GPT → 로컬 Claude Code 승인 이미지 인박스

이 파이프라인은 **파일 전달·기계 검증·재개 가능한 준비 패키지**를 만든다. 이미지 생성, 사용자 승인, 번역 품질 판단, 앱 매핑, 커밋·푸시·배포는 수행하지 않는다. `ready`는 Claude 검토 대기이며 앱 등록 완료가 아니다.

## 기준과 보존

2026-10-24 `main` 3140263 확인: 루트 및 하위 `AGENTS.md` 없음. 실행할 체크아웃에 새 AGENTS.md가 있으면 먼저 읽는다. `CLAUDE.md`, `IMAGE_STYLE.md`(특히 11장), `IMAGE_MAPPING_HANDOFF.md`(특히 5-1장), `look-library.md`, `CUTOUTS.md`, 현재 `index.html` 로드 순서와 `look/outfits.js` 및 보충 매핑을 함께 읽는다.

기존 본 작업 폴더의 미커밋 변경은 건드리지 않는다. 현재 main에서 별도 브랜치를 만든다. 기존 룩·제품 ID, `appOutfitId`/`appItemId`, 알 수 없는 메타데이터 키와 기존 경로를 보존한다. 기존 Sunny `../NN-style.jpg`를 참조하는 세트에는 에디토리얼 사본을 만들지 않는다. 날짜·온도·브랜드·가격·혼용률은 추정하지 않는다.

새 제품은 최신 IMAGE_STYLE 11장의 500×500 **실제 투명 WebP**를 적용한다(목표 50,000 bytes, 상한 100,000 bytes; 목표 초과는 `sizeException` 설명 필수). 과거 아이보리 JPG는 소급 변환하지 않는다. 새 에디토리얼은 1024×1536 JPG ≤300,000 bytes. 더 큰 파일 예외는 이 스크립트가 자동 허용하지 않는다.

## 연결 범위와 최소 수동 단계

이 구현에서 ChatGPT 이미지가 로컬 Claude Code 폴더에 자동 도착하는 연결은 **설정하거나 검증하지 않았다**. 휴대폰 Remote 연결을 이미지 동기화 API로 취급하지 않는다. 세션 쿠키·내부 다운로드 API·브라우저 스크래핑·클립보드 감시를 사용하지 않는다. 공식 [Remote connections](https://learn.chatgpt.com/docs/remote-connections)는 원격 작업 접속 안내이며, 이것만으로 이 인박스에 이미지가 전달됐다고 판정하지 않는다.

**필수 최소 수동 단계: 사용자가 명시적으로 승인한 이미지/전달 패키지를 저장한다.** ChatGPT에서 승인 이미지를 저장해 Mac의 저장소 밖 원본 폴더에 둔다. 폰에만 저장했다면 Mac으로 파일 전달이 한 번 더 필요하다. 예: 체크아웃 옆 `Weather-App-image-originals/<batchId>/`. 원본 PNG는 Git에 넣지 않는다. 로컬 접근 가능한 파일을 제공하는 지원 도구가 해당 세션에 실제로 있으면 그 도구로 같은 경로에 저장할 수 있으나, 도구의 성공 결과와 실제 파일을 확인한 경우만 자동 도착으로 기록한다.

이후 파일 해시·포맷 검증 및 Claude 준비 패키지 생성은 아래 명령으로 처리한다. 설치된 Claude 프로세스에 지시를 보내거나 자동 실행하지 않으며, 무인 감시 데몬은 설치하지 않는다.

## 최초 설치

저장소 루트에서 실행(Python 3.9 이상, macOS/Linux):

```sh
python3 -m venv .venv-image-inbox
.venv-image-inbox/bin/pip install -r tools/requirements-image-inbox.txt
.venv-image-inbox/bin/python tools/image-inbox.py init
```

`.image-inbox/incoming/`과 `.image-inbox/ready/`는 Git에서 제외된다. `.image-inbox`는 이 PR의 별도 작업 사본에만 초기화하며 기존 작업 폴더에는 병합 후 위 명령을 실행한다.

## 한 배치 전달

사용자의 파일 전달 수동 단계는 승인 이미지 저장이다. 아래 메타데이터·마스터·매니페스트 준비와 명령 실행은 GPT/로컬 Claude가 맡는다. 이미지 승인 자체를 자동 생성하지 않는다.

1. 고유 배치 ID(수정본이면 `-r2`)를 정하고 `incoming/<batchId>/`를 만든다. 승인되지 않은 시안과 원본은 저장소 밖에 둔다.
2. GPT는 승인 사진에 근거한 제품별 한국어 마스터와 스타일링 의도를 `master-copy.ko.json`에 작성한다. 형식은 [예시](image-inbox/master-copy.ko.example.json). 실제 제품 ID와 원문을 사용한다.
3. Claude는 원본을 보존하며 배포 파생본을 내보낼 수 있다. 크롭·불투명 제품 배경 제거는 자동으로 하지 않는다. 아래 export는 비율이 다르면 거절하고, 원본을 바꾸지 않으며, 기존 출력 파일을 덮어쓰지 않는다. 출력의 크기·알파·가장자리를 눈으로 확인하고 실제 승인 근거에 파생본 검수도 기록한다.

```sh
.venv-image-inbox/bin/python tools/image-inbox.py export editorial /absolute/originals/editorial.png .image-inbox/incoming/BATCH/assets/editorial.jpg
.venv-image-inbox/bin/python tools/image-inbox.py export product /absolute/originals/01-top.png .image-inbox/incoming/BATCH/assets/01-top.webp
```

4. 기존 products.json 스키마로 해당 룩의 제안 메타데이터를 만든다. 새 세트에는 정확한 weather/성별/연령/시간/style, 명시적인 `temperatureC`/`feelsLikeC`(미확인 null), `productCount`, products의 고정 ID·상대 image 경로를 넣는다. `approval.editorial=approved`, `productionStatus=ready`는 실제 검수 후만 설정한다. `mappingStatus=mapped`를 미리 설정하지 않는다. 앱 외 스타일·체감단계 미정·폴더 충돌은 사용자에게 보고하며 추측하지 않는다.
5. [승인 매니페스트 예시](image-inbox/approval.example.json)를 `approval.json`으로 복사한다. 예시 기본값은 `draft`여서 인제스트에 실패한다. 실제 승인자·승인일·명시적 승인 근거를 기록하고 최종 파일마다 SHA-256을 채운다. `shasum -a 256 FILE`로 계산한다. 메타데이터와 마스터도 각각 해시로 고정된다. 승인 근거는 이미지와 제품 세트 전체를 가리켜야 한다. 이 기록은 사람의 승인을 기록하는 것이며 암호학적 본인 인증은 아니다.
6. `files`에 제품 이미지가 각 1개씩 있어야 한다. 매니페스트 밖 파일은 전달하지 않는다. 기존 에디토리얼을 재사용할 때는 `files`에서 에디토리얼을 빼고 다음처럼 추가한다(경로는 저장소 기준).

```json
"existingEditorial": {
  "path": "look/berlin-complete/Sunny/Chilly/Male/35+/day/06-street.jpg",
  "sha256": "실제 기존 파일 SHA-256"
}
```

7. 다음을 순서대로 실행한다.

```sh
.venv-image-inbox/bin/python tools/image-inbox.py ingest .image-inbox/incoming/BATCH --dry-run
.venv-image-inbox/bin/python tools/image-inbox.py ingest .image-inbox/incoming/BATCH
```

`ready/<batchId>/`에는 `approval.json`, 원문 `master-copy.ko.json`, `receipt.json`, 저장소 경로를 따른 `repository/` 제안 파일이 생긴다. 입력은 이동·삭제하지 않는다. 메타데이터의 기존 파일과 차이는 **제안**이며 자동 덮어쓰기하지 않는다. 이미지가 기존 목적지와 다르거나 다른 경로의 기존 이미지와 바이트 중복이면 실패한다. 기존 에디토리얼 재사용은 위 참조 방식만 허용한다. 기존 제품 이미지 재사용은 동일 경로·동일 바이트만 허용한다.

매번 이미지 실체·용량·해상도·알파·해시·파일 수·ID·폴더 조건·한국어 원문 대응을 검사한다. 경로 이탈·심볼릭 링크·같은 이미지 중복·기존 파일 충돌은 실패한다. 준비 패키지는 전체를 임시 디렉터리에 쓴 뒤 원자적으로 공개한다. 중단 후 같은 명령을 재실행하면 된다. 중단된 `.pending-*`는 ready가 아니며 사람이 다른 실행이 없음을 확인하고 삭제할 수 있다. 같은 배치 ID의 다른 내용이나 준비본 훼손은 차단한다. 다른 ready 배치에 이미 있는 이미지 해시도 차단한다. 수정 배치가 이전 대기 배치를 대체한다면, Claude가 먼저 이전 배치를 취소로 기록하고 ready 밖의 보관 폴더로 옮겨 중복 등록을 막는다(삭제하지 않는다). 재실행에는 원본 배치도 남아 있어야 한다. 동시 실행은 운영체제 파일 잠금으로 직렬화되며 프로세스 종료 시 해제된다.

## How to Wear: 작성과 현지화

**GPT = 한국어 마스터 + 스타일링 의도. Claude = 원문 보존 + 영어·독일어 현지화 + 기존 스키마 연결.** 기존 제품별 텍스트 규칙(IMAGE_MAPPING_HANDOFF 5-1)이 우선이다.

- 마스터 `products[].howToWearKo`는 각 제품의 보이는 여밈·길이·레이어 관계를 1–2문장으로 쓴다. 같은 문장 반복·이름 나열·틀 문장은 금지한다. 근거·추정 범위는 `observedEvidenceKo`/`uncertaintyKo`로 별도 기록한다.
- 인제스트는 `master-copy.ko.json`을 **바이트 그대로** 보존한다. products.json의 `descriptionKo` 또는 `description.ko`는 같은 제품 ID의 마스터 문장과 일치해야 한다. 기사 `titleKo/deckKo/introKo/tipKo`, 스타일링 의도도 원문 감사 자료로 남긴다.
- Claude는 기존 세트의 필드 모양을 읽고 `descriptionKo`, `description.{ko,en,de}`, 기존 `copy` 구조에 맞춰 통합한다. 런타임 제품은 `name.{ko,en,de}`, `note.{ko,en,de}`를 사용하며 `note.ko`는 마스터와 같아야 한다. 임의의 새 필드를 앱이 읽는다고 가정하지 않는다. 기사 `title/deck/intro/pull/tip`도 현재 앱 구조로 연결한다.
- 영어·독일어는 사진과 한국어의 의미·불확실성을 유지한다. 문장 안 제품명 대문자 고유명사화 금지, 독일어 관사·형용사 어미 점검. `deck`은 제품 나열 금지, `intro`와 다른 문장, `pull`은 영어 대문자 한 줄, `tip`은 ko/en/de. 제품마다 언어별 note 중복 점검.
- 사진과 원문이 다르거나 한국어가 기존 규칙에 미달하면 Claude는 마스터를 덮어쓰지 않는다. `copy-review.md`에 원문·문제·수정안을 기록하고 GPT/사용자에게 돌려보내 새 버전과 승인 매니페스트를 받는다. 명칭과 사진의 색이 다르면 이름을 임의 수정하지 않는다.

## Claude에게 전달할 지시

> `design/IMAGE_INBOX_HANDOFF.md` 및 참조 문서를 읽고 `.image-inbox/ready/<batchId>/`를 검토하세요. 입력 배치의 ingest를 다시 실행해 해시와 준비 패키지를 확인하세요. 승인 근거·사진·한국어 마스터·products.json·현재 main의 ID/경로를 대조하세요. 준비본 repository 디렉터리를 통째로 덮어쓰지 말고 파일별 충돌을 확인하며 별도 브랜치에서 필요한 변경만 적용하세요. 한국어 마스터를 보존하고 en/de를 기존 스키마로 현지화하세요. 현재 outfits.js와 보충 매핑의 로드 순서를 확인하고 기존 ID와 다른 룩을 보존하세요. 신규 세트만 연결한 뒤 문구·알파 합성·카드 렌더·HERO/CUTS 및 make-cutouts.py --check를 검증하세요. 필요한 앱 BUILD/캐시, coverage/library/CLAUDE 기록은 실제 매핑 완료 후 갱신하세요. 승인 기록·한국어 원문·해시 영수증은 해당 룩의 검토 문서에 포함하고, 원본 PNG/로컬 인박스는 커밋하지 마세요. PR에 변경 룩·제품 수, 미해결 사항, 검증 결과를 적고 사용자 검토를 기다리세요. main에 직접 푸시하거나 PR을 병합하지 마세요.

## 테스트

```sh
.venv-image-inbox/bin/python -m unittest discover -s tools/tests -v
```

테스트는 임시 디렉터리의 합성 이미지로만 수행한다. 실제 승인 이미지를 임의 생성하거나 기존 앱 자산을 교체하지 않는다. 기계 검증은 단일 제품 여부·화면의 가장자리 품질·번역 문법을 보증하지 않으므로 위 육안 검토를 생략하지 않는다.
