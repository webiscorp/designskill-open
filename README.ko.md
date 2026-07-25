# designskill-open (한국어)

**디자인 스킬과 디자인시스템 프리뷰의 공개 저장소** — [designskill.dev](https://designskill.dev)의 스킬 원본 보관·배포처입니다.

English guide: [README.md](README.md)

- 자사(first-party) 콘텐츠는 모두 **MIT** 라이선스입니다. 자유롭게 포크·수정·재배포하세요.
- 스킬 하나 = 폴더 하나 (`skills/<name>/`). 규격은 [spec/skill-package.md](spec/skill-package.md).
- 디자인시스템 프리뷰는 단일 자립 HTML 규격을 따릅니다. [spec/ds-preview.md](spec/ds-preview.md).
- 외부에서 포크해 온 스킬은 `skill.yaml`의 `origin`에 출처·업스트림 커밋·원 라이선스를 기록합니다 (MIT/Apache-2.0/CC0 등 재배포 허용 라이선스만, 폴더별 원 LICENSE 보존).
- 수용·갱신: `node tools/import-skill.mjs <owner/repo> <스킬경로> [이름]` — 재실행 시 업스트림 최신 커밋으로 패치 추적.
- 수집 기준: ① 디자인 산출·검수·변환에 직접 기여 ② 재배포 허용 라이선스 + origin 추적 ③ 경쟁 서비스 자산 제외.

## Skills

| 이름 | 유형 | 버전 | 요약 |
|---|---|---|---|
| [frontend-design](skills/frontend-design/) | 생성 | upstream | 탈템플릿 UI 시각 방향·타이포 지침 (forked · Apache-2.0 · anthropics/skills) |
| [canvas-design](skills/canvas-design/) | 생성 | upstream | 디자인 철학 기반 PNG/PDF 시각 아트 — 포스터·커버·아트웍 (forked · Apache-2.0 · anthropics/skills) |
| [theme-factory](skills/theme-factory/) | 변환 | upstream | 슬라이드·문서·HTML에 10종 프리셋 폰트/컬러 테마 적용 (forked · Apache-2.0 · anthropics/skills) |
| [algorithmic-art](skills/algorithmic-art/) | 생성 | upstream | 시드 난수·플로우 필드·파티클 기반 p5.js 제너러티브 아트 (forked · Apache-2.0 · anthropics/skills) |
| [web-artifacts-builder](skills/web-artifacts-builder/) | 생성 | upstream | React·Tailwind·shadcn/ui 기반 복합 HTML 아티팩트 구축 (forked · Apache-2.0 · anthropics/skills) |
| [web-asset-generator](skills/web-asset-generator/) | 생성 | upstream | 파비콘·PWA 앱 아이콘·OG/소셜 메타 이미지 생성 (forked · MIT · alonw0/web-asset-generator) |
| [anydesign](skills/anydesign/) | 추출 | upstream | 이미지·웹사이트·Figma 분석 → 토큰·컴포넌트 인벤토리 `design.md` (forked · MIT · uxKero/anydesign) |
| [design-dna](skills/design-dna/) | 추출 | upstream | 레퍼런스 UI → 토큰·정성 스타일·비주얼 이펙트 3차원 디자인 DNA (forked · MIT · zanwei/design-dna) |
| [extract-design-system](skills/extract-design-system/) | 추출 | upstream | 공개 웹사이트에서 디자인 프리미티브 추출 → 스타터 토큰 파일 (forked · MIT · arvindrk/extract-design-system) |
| [swiftui-design](skills/swiftui-design/) | 생성 | upstream | iOS/macOS SwiftUI 시각 디자인 — AI 슬롭 방지 규칙·디자인 방향 (forked · MIT · wholiver/swiftui-design-skill) |
| [cinematic-ui](skills/cinematic-ui/) | 생성 | upstream | 영화적 웹 디자인 — 감독 주도 아트디렉션·스토리보드 레이아웃·시네마틱 모션 (forked · MIT · akseolabs-seo/cinematic-ui) |
| [styleseed-design-review](skills/styleseed-design-review/) | 검수 | upstream | "AI 티 나는" UI의 원인 진단과 교정 방법 제시 (forked · MIT · bitjaru/styleseed) |
| [design-critique](skills/design-critique/) | 검수 | upstream | 사용성 휴리스틱·UX 법칙·IA·콘텐츠 품질 기준 UI 평가 (forked · MIT · cuellarfr/design-skills) |
| [accessibility-audit](skills/accessibility-audit/) | 검수 | upstream | WCAG 2.2 A/AA/AAA 적합성 감사 + 심각도 평가 (forked · MIT · cuellarfr/design-skills) |
| [design-systems](skills/design-systems/) | 생성 | upstream | 디자인 토큰·컴포넌트 스펙·패턴 라이브러리·네이밍·거버넌스 (forked · MIT · cuellarfr/design-skills) |
| [design-elevation](skills/design-elevation/) | 변환 | upstream | 기능만 하는 결과물을 완성도 높은 디자인으로 끌어올림 (forked · MIT · cuellarfr/design-skills) |
| [figma-to-code](skills/figma-to-code/) | 변환 | upstream | Figma 디자인 → 프로덕션 React/Next.js (컴포넌트 재사용·배리언트 매핑) (forked · MIT · scoobynko/claude-code-design-skills) |
| [frontend-slides](skills/frontend-slides/) | 생성 | upstream | 애니메이션 풍부한 HTML 프레젠테이션 — 신규 제작·PPT 변환 (forked · MIT · zarazhangrui/frontend-slides) |
| [logo-design](skills/logo-design/) | 생성 | upstream | 워드마크·락업·심볼·모노그램 아키텍처별 프로덕션급 로고 배리언트 (forked · MIT · rampstackco/claude-skills) |
| [art-direction](skills/art-direction/) | 생성 | upstream | 캠페인·사진·일러스트·영상 비주얼/크리에이티브 디렉션 (forked · MIT · rampstackco/claude-skills) |
| [brand-style-guide](skills/brand-style-guide/) | 생성 | upstream | 브랜드 스토리·로고 시스템·컬러·타이포·보이스 전체 스타일 가이드 구축/감사 (forked · MIT · rampstackco/claude-skills) |

## Design Systems

| 이름 | 톤 | 프리뷰 |
|---|---|---|
| _(추출기 산출물 보관 예정)_ | | |

## 조사 로그 — 2026-07 공개 디자인 스킬 전수조사

조사 범위: `anthropics/skills`, "awesome claude skills" 목록들(travisvn·ComposioHQ·BehiSecc·Chat2AnyLLM·JayZeeDesign), `bergside/awesome-design-skills`, GitHub 레포/코드 검색(design SKILL.md). 수용: **21종** (위 표). 제외 후보:

| 후보 | 제외 사유 |
|---|---|
| anthropics/skills `brand-guidelines` | Anthropic 자사 브랜드 전용 |
| anthropics/skills docx·pptx·pdf·xlsx·slack-gif-creator 등 | 문서/유틸 스킬 — 디자인 산출 아님 |
| bergside/awesome-design-skills (스타일 스킬 67종) | 동형 스타일 프리셋 대량 생성 모음 — 개별 변별력 낮아 보류 |
| rohitg00/awesome-claude-design | DESIGN.md 프롬프트 모음집(aggregator) — 단일 SKILL.md 패키지 아님 |
| ComposioHQ figma/canva/miro/webflow automation | API 자동화 커넥터 — 디자인 산출·검수 스킬 아님 |
| ComposioHQ image-enhancer | 이미지 후처리 유틸 |
| shadcn/ui skills (문서 사이트) | 문서 사이트 배포 — 레포 SKILL.md/LICENSE 확인 불가 |
| geekjourneyx/claude-design-card | LICENSE 없음 — 재배포 불가 |
| plugin87/ux-ui-agent-skills | LICENSE 없음 — 재배포 불가 |
| appautomaton/agent-designer | LICENSE 없음 — 재배포 불가 |
| frhscopex/design-skill-os | SKILL.md 형식 아님 (skill.json + CLI 소스) |
| cuellarfr/design-skills 나머지 6종 (ux-research·journey-mapping·ux-strategy·ux-writing·design-ops·interaction-design) | UX 리서치/전략 프로세스 — 디자인 산출·검수 직접 기여 범위 밖 |
| ancoleman/ai-design-components | 75종 대부분 백엔드/인프라 — UI 항목도 구현 엔지니어링 중심 |
| rampstackco/claude-skills 나머지 (~100종: SEO·마케팅·PM 등) | 비디자인 영역 |
| 경쟁 디자인 자산 서비스의 자산 | 기준 ③ — 경쟁 서비스 제외 |
| awesome-claude-skills 목록 자체 | aggregator — 스킬 원본 아님 (후보 발굴용으로만 활용) |

---

Maintained by WEBIS · [designskill.dev](https://designskill.dev)
