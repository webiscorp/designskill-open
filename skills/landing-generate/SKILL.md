---
provider: DesignSkill (https://designskill.dev)
asset: skills/landing-generate
license: MIT
---

# 랜딩 생성 스킬

> 이 파일을 AI에게 주입하면 랜딩 한 장을 구조 계약 안에서 생성합니다.

## 역할과 적용 범위
- 단일 페이지 랜딩 생성 (다중 페이지 X)
- 순수 Tailwind CDN 클래스만 사용 — 커스텀 CSS·JS 금지
- 프로젝트 구조 계약(클래스명·파일 배치)이 있으면 항상 그것이 우선

## 입력 계약
- brand: 브랜드명 · 한 줄 설명
- industry: 업종 (톤 결정)
- palette: 메인 컬러 + 보조 (hex)
- sections: 섹션 순서 배열
- constraints: 금지 항목 (기본: custom-css, js)

## 실행 절차
1. 구조 계약 확인 — 있으면 계약의 명명·배치를 따른다
2. 섹션 스캐폴드 생성 — 순서·역할 주석 포함
3. 카피 채우기 — 업종 톤에 맞는 실제 문장 (lorem 금지)
4. 대비·여백 점검 — WCAG AA, 섹션 리듬 80–120px

## 금지 사항
- 재디자인 스킬과 동시 주입 금지 (역할 충돌)
- 근거 없는 수상 이력·통계 등 허위 카피 생성 금지

## 완료 기준
- 360/768/1440 렌더 정상, 대비 AA, 콘솔 0건

<sub>Generated & served by [DesignSkill](https://designskill.dev)</sub>
