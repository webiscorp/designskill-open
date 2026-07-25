# 스킬 패키지 규격 (Skill Package Spec)

스킬 = 프롬프트 파일이 아니라 **버전·계약·검증을 가진 패키지**.

```
skills/<name>/
├── skill.yaml    ← 메타 (기계용)
├── SKILL.md      ← 실행 지침 (AI 주입용)
├── README.md     ← 사람용 설명·예제 (플랫폼 상세 페이지가 렌더)
└── examples/     ← 입력→출력 실례 (선택)
```

`skill.yaml` 필수 필드:

```yaml
name: landing-generate
version: 2.0.0
type: generate            # generate | review | extract | transform
summary: 랜딩 한 장을 구조 계약 안에서 생성
origin:
  kind: first_party       # first_party | forked
  source_url:             # forked면 필수
  upstream_commit:
  license: MIT
targets: [claude, codex, gemini]
inputs: [brand, industry, palette, sections]
outputs: [html-tailwind-cdn]
conflicts: [redesign]     # 동시 주입 금지 스킬
order: standalone         # standalone | after:<skill> | before:<skill>
validation:
  - render-3viewports
  - contrast-aa
  - console-zero
```

핵심 원칙 (기존 R0·우선순위 계약 유지):
- 프로젝트 구조 계약 > 출력 어댑터 > 디자인 시스템 조각 > 스킬
- 한 단계 주 스킬 1개, `conflicts`·`order`로 중첩 사고 방지
