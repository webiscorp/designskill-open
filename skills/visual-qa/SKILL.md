---
provider: DesignSkill (https://designskill.dev)
asset: skills/visual-qa
license: MIT
---

# 시각 검수 스킬

> 렌더 결과를 뷰포트별로 점검하는 검수 스킬. 생성 완료 후 별도 단계로 실행한다.

## 역할과 적용 범위
- 360/768/1440 렌더 스크린샷 기준 점검 (코드 리뷰로 대체 금지)
- 겹침·오버플로·대비·여백 리듬·빈 상태를 잡는다

## 체크리스트
1. 가로 스크롤 발생 여부 (모든 뷰포트)
2. 텍스트 겹침·잘림·줄바꿈 붕괴
3. 대비 4.5:1 미달 조합
4. 섹션 여백 리듬 (80–120px) 일탈
5. hover·focus·빈 상태 누락

## 출력
- 발견 항목마다: 위치(섹션)·뷰포트·심각도·수정 제안
- 문제 없으면 "PASS + 확인 뷰포트 목록"

## 충돌
- 생성·재디자인 스킬과 동시 주입 금지 (검수 독립성)

<sub>Generated & served by [DesignSkill](https://designskill.dev)</sub>
