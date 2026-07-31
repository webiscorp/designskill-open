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

<!-- SKILLS:START -->
75개 스킬.

| 이름 | 유형 | 버전 | 요약 |
|---|---|---|---|
| [accessibility-audit](skills/accessibility-audit/) | 리뷰 | 1.0.0 | WCAG 2.2 A/AA/AAA 적합성 감사와 심각도 평가 (forked · MIT · cuellarfr/design-skills) |
| [ai-seo](skills/ai-seo/) | 생성 | 1.0.0 | LLM 답변에 인용되도록 콘텐츠 최적화 (AEO·GEO) (forked · MIT · coreyhaines31/marketingskills) |
| [algorithmic-art](skills/algorithmic-art/) | 생성 | 1.0.0 | 시드 난수·플로우 필드·파티클 기반 p5.js 제너러티브 아트 (forked · Apache-2.0 · anthropics/skills) |
| [anydesign](skills/anydesign/) | 추출 | 1.0.0 | 이미지·웹사이트·Figma 분석 → 토큰·컴포넌트 인벤토리 design.md 생성 (forked · MIT · uxKero/anydesign) |
| [art-direction](skills/art-direction/) | 생성 | 1.0.0 | 캠페인·사진·일러스트·영상 비주얼/크리에이티브 디렉션 (forked · MIT · rampstackco/claude-skills) |
| [baoyu-design](skills/baoyu-design/) | 생성 | 1.0.0 | 고품질 웹 디자인 기준과 구현 지침 (forked · MIT · JimLiu/baoyu-design) |
| [beautiful-article](skills/beautiful-article/) | 생성 | 1.0.0 | URL·PDF·문서를 오프라인 단일 HTML 아티클로 편집 (forked · MIT · ConardLi/garden-skills) |
| [brand-guidelines](skills/brand-guidelines/) | 생성 | 1.0.0 | 브랜드 컬러·타이포를 산출물에 일관되게 적용 (forked · Apache-2.0 · anthropics/skills) |
| [brand-naming](skills/brand-naming/) | 생성 | 1.0.0 | 후보 생성부터 상표·도메인 점검까지 네이밍 절차 (forked · Apache-2.0 · sonyabirch/skills) |
| [brand-style-guide](skills/brand-style-guide/) | 생성 | 1.0.0 | 브랜드 스토리·로고 시스템·컬러·타이포·보이스 전체 가이드 구축/감사 (forked · MIT · rampstackco/claude-skills) |
| [brandkit](skills/brandkit/) | 생성 | 1.0.0 | 브랜드 가이드 보드·로고 시스템·아이덴티티 덱 생성 (forked · MIT · Leonxlnx/taste-skill) |
| [brutalist-skill](skills/brutalist-skill/) | 생성 | 1.0.0 | 스위스 타이포 + 터미널 미학의 러프한 인터페이스 (forked · MIT · Leonxlnx/taste-skill) |
| [canvas-design](skills/canvas-design/) | 생성 | 1.0.0 | 디자인 철학 기반 PNG/PDF 시각 아트 — 포스터·커버·아트웍 제작 (forked · Apache-2.0 · anthropics/skills) |
| [cinematic-ui](skills/cinematic-ui/) | 생성 | 1.0.0 | 영화적 웹 디자인 — 감독 주도 아트디렉션·스토리보드 레이아웃·시네마틱 모션 (forked · MIT · akseolabs-seo/cinematic-ui) |
| [cognitive-load](skills/cognitive-load/) | 생성 | 1.0.0 | 내재·외재·본유 부하로 화면 복잡도 진단 (forked · MIT · jpoindexter/design-engineering-canon) |
| [content-strategy](skills/content-strategy/) | 생성 | 1.0.0 | 무엇을 어떤 순서로 만들지 정하는 콘텐츠 계획 (forked · MIT · coreyhaines31/marketingskills) |
| [copywriting](skills/copywriting/) | 생성 | 1.0.0 | 홈·랜딩·가격·소개 페이지 카피 작성 (forked · MIT · coreyhaines31/marketingskills) |
| [cro](skills/cro/) | 생성 | 1.0.0 | 랜딩·가격·폼의 전환율 개선 (forked · MIT · coreyhaines31/marketingskills) |
| [css-architecture](skills/css-architecture/) | 생성 | 1.0.0 | BEM·ITCSS·CUBE와 유동 반응형으로 스타일 구조 잡기 (forked · MIT · jpoindexter/design-engineering-canon) |
| [design-critique](skills/design-critique/) | 리뷰 | 1.0.0 | 사용성 휴리스틱·UX 법칙·IA·콘텐츠 품질 기준 UI 평가 (forked · MIT · cuellarfr/design-skills) |
| [design-dna](skills/design-dna/) | 추출 | 1.0.0 | 레퍼런스 UI → 토큰·정성 스타일·비주얼 이펙트 3차원 디자인 DNA (forked · MIT · zanwei/design-dna) |
| [design-elevation](skills/design-elevation/) | 변환 | 1.0.0 | 기능만 하는 시각 결과물을 완성도 높은 디자인으로 끌어올림 (forked · MIT · cuellarfr/design-skills) |
| [design-ops](skills/design-ops/) | 생성 | 1.0.0 | 디자인 스프린트·핸드오프·팀 리추얼·문서 표준 운영 (forked · MIT · cuellarfr/design-skills) |
| [design-qa-checklist](skills/design-qa-checklist/) | 생성 | 1.0.0 | 시안과 구현의 차이를 항목별로 검증하는 QA 목록 생성 (forked · MIT · Owl-Listener/designer-skills) |
| [design-systems](skills/design-systems/) | 생성 | 1.0.0 | 디자인 토큰·컴포넌트 스펙·패턴 라이브러리·네이밍·거버넌스 (forked · MIT · cuellarfr/design-skills) |
| [empathy-map](skills/empathy-map/) | 생성 | 1.0.0 | 말·생각·행동·감정 4분면으로 사용자 리서치 정리 (forked · MIT · Owl-Listener/designer-skills) |
| [extract-design-system](skills/extract-design-system/) | 추출 | 1.0.0 | 공개 웹사이트에서 컬러·타이포·간격 등 디자인 프리미티브 추출 (forked · MIT · arvindrk/extract-design-system) |
| [figma-to-code](skills/figma-to-code/) | 변환 | 1.0.0 | Figma 디자인 → 프로덕션 React/Next.js (컴포넌트 재사용·배리언트 매핑) (forked · MIT · scoobynko/claude-code-design-skills) |
| [frontend-design](skills/frontend-design/) | 생성 | 1.0.0 | 탈템플릿 UI 시각 방향·타이포그래피 지침 — 과감한 디자인 결정 유도 (forked · Apache-2.0 · anthropics/skills) |
| [frontend-slides](skills/frontend-slides/) | 생성 | 1.0.0 | 애니메이션 풍부한 HTML 프레젠테이션 — 신규 제작·PPT 변환 (forked · MIT · zarazhangrui/frontend-slides) |
| [gestalt-principles](skills/gestalt-principles/) | 생성 | 1.0.0 | 근접·유사·연속·폐쇄 등 시지각 원리로 레이아웃을 판단 (forked · MIT · jpoindexter/design-engineering-canon) |
| [hallmark](skills/hallmark/) | 생성 | 1.0.0 | 신규 페이지·진단·리디자인·URL 디자인 추출 (forked · MIT · Nutlope/hallmark) |
| [handoff-spec](skills/handoff-spec/) | 생성 | 1.0.0 | 치수·동작·에셋·엣지케이스를 담은 개발 전달 문서 작성 (forked · MIT · Owl-Listener/designer-skills) |
| [huashu-design](skills/huashu-design/) | 생성 | 1.0.0 | HTML 고충실 프로토타입·슬라이드·시각화 + 전문가 리뷰 (forked · MIT · alchaincyf/huashu-design) |
| [image-to-code-skill](skills/image-to-code-skill/) | 생성 | 1.0.0 | 디자인 이미지를 먼저 만들고 그대로 구현 (forked · MIT · Leonxlnx/taste-skill) |
| [imagegen-frontend-web](skills/imagegen-frontend-web/) | 생성 | 1.0.0 | 구현 전 웹 화면 시안 이미지를 먼저 생성 (forked · MIT · Leonxlnx/taste-skill) |
| [interaction-design](skills/interaction-design/) | 생성 | 1.0.0 | 마이크로 인터랙션·상태 머신·제스처·오류 예방 설계 (forked · MIT · cuellarfr/design-skills) |
| [journey-mapping](skills/journey-mapping/) | 생성 | 1.0.0 | 고객 여정 지도·서비스 블루프린트·공감 지도 작성 (forked · MIT · cuellarfr/design-skills) |
| [landing-generate](skills/landing-generate/) | 생성 | 2.0.0 | 랜딩 한 장을 구조 계약 안에서 생성 — 섹션 순서·카피 톤·CTA 규칙 포함 (first-party · MIT) |
| [logo-design](skills/logo-design/) | 생성 | 1.0.0 | 워드마크·락업·심볼·모노그램 아키텍처별 프로덕션급 로고 배리언트 (forked · MIT · rampstackco/claude-skills) |
| [mcp-builder](skills/mcp-builder/) | 생성 | 1.0.0 | 외부 서비스를 연결하는 MCP 서버 설계·구현 (forked · Apache-2.0 · anthropics/skills) |
| [minimalist-skill](skills/minimalist-skill/) | 생성 | 1.0.0 | 웜 모노크롬·타이포 대비·플랫 벤토 그리드 (forked · MIT · Leonxlnx/taste-skill) |
| [motion-animation](skills/motion-animation/) | 생성 | 1.0.0 | 12원칙·이징·스프링으로 UI 모션 설계 (forked · MIT · jpoindexter/design-engineering-canon) |
| [nielsen-heuristics](skills/nielsen-heuristics/) | 생성 | 1.0.0 | 야콥 닐슨 10대 사용성 원칙으로 인터페이스 점검 (forked · MIT · jpoindexter/design-engineering-canon) |
| [nothing-design](skills/nothing-design/) | 생성 | 1.0.0 | Nothing 특유의 도트 매트릭스·모노크롬 스타일 (forked · MIT · dominikmartn/nothing-design-skill) |
| [onboarding](skills/onboarding/) | 생성 | 1.0.0 | 가입 이후 첫 경험과 활성화 개선 (forked · MIT · coreyhaines31/marketingskills) |
| [output-skill](skills/output-skill/) | 생성 | 1.0.0 | 작업 결과를 일관된 형식으로 정리·전달 (forked · MIT · Leonxlnx/taste-skill) |
| [programmatic-seo](skills/programmatic-seo/) | 생성 | 1.0.0 | 템플릿과 데이터로 SEO 페이지 대량 생성 (forked · MIT · coreyhaines31/marketingskills) |
| [redesign-skill](skills/redesign-skill/) | 생성 | 1.0.0 | 현행 디자인 진단 후 기능을 깨지 않고 품질 상향 (forked · MIT · Leonxlnx/taste-skill) |
| [schema](skills/schema/) | 생성 | 1.0.0 | JSON-LD 스키마 마크업 추가·수정·최적화 (forked · MIT · coreyhaines31/marketingskills) |
| [seo-audit](skills/seo-audit/) | 생성 | 1.0.0 | 사이트 SEO 문제 진단·기술 SEO 점검 (forked · MIT · coreyhaines31/marketingskills) |
| [site-architecture](skills/site-architecture/) | 생성 | 1.0.0 | 페이지 위계·내비게이션·URL·내부 링크 설계 (forked · MIT · coreyhaines31/marketingskills) |
| [skill-creator](skills/skill-creator/) | 생성 | 1.0.0 | 새 스킬 작성·개선·성능 측정 (forked · Apache-2.0 · anthropics/skills) |
| [soft-skill](skills/soft-skill/) | 생성 | 1.0.0 | 폰트·여백·그림자·카드 구조로 고급스러움 만들기 (forked · MIT · Leonxlnx/taste-skill) |
| [styleseed-design-review](skills/styleseed-design-review/) | 리뷰 | 1.0.0 | UI가 'AI 티 나는' 이유를 짚고 교정 방법을 제시하는 리뷰 (forked · MIT · bitjaru/styleseed) |
| [swiftui-design](skills/swiftui-design/) | 생성 | 1.0.0 | iOS/macOS SwiftUI 시각 디자인 — AI 슬롭 방지 규칙과 디자인 방향 (forked · MIT · wholiver/swiftui-design-skill) |
| [taste-skill](skills/taste-skill/) | 생성 | 1.0.0 | 브리프를 읽고 방향을 잡아 템플릿 티 안 나게 구현 (forked · MIT · Leonxlnx/taste-skill) |
| [theme-factory](skills/theme-factory/) | 변환 | 1.0.0 | 슬라이드·문서·HTML에 10종 프리셋 폰트/컬러 테마 적용 (forked · Apache-2.0 · anthropics/skills) |
| [ui-craft](skills/ui-craft/) | 생성 | upstream | \"Use for UI design and implementation work to avoid generic AI-looking interfaces. Provides anti-slop rules, a required discovery phase before coding, and guida (forked · MIT · educlopez/ui-craft) |
| [ui-craft-dense-dashboard](skills/ui-craft-dense-dashboard/) | 생성 | upstream | \"Dense dashboard / admin / Bloomberg / Retool / data-heavy internal tools. Locked knobs: CRAFT=7, MOTION=3, DENSITY=9. IBM Plex + mono numbers, semantic palette (forked · MIT · educlopez/ui-craft) |
| [ui-craft-editorial](skills/ui-craft-editorial/) | 생성 | upstream | \"Editorial / magazine / long-form / Medium / Substack / content-heavy UIs. Locked knobs: CRAFT=9, MOTION=4, DENSITY=3. Serif display + humanist body, wide readi (forked · MIT · educlopez/ui-craft) |
| [ui-craft-minimal](skills/ui-craft-minimal/) | 생성 | upstream | \"Minimal / clean / Linear / Notion / Vercel / whitespace-heavy UIs. Locked knobs: CRAFT=8, MOTION=3, DENSITY=2. Monochrome + one accent, Inter/Geist, hairline b (forked · MIT · educlopez/ui-craft) |
| [ux-research](skills/ux-research/) | 생성 | 1.0.0 | 리서치 설계·인터뷰 스크립트·정성 데이터 분석 (forked · MIT · cuellarfr/design-skills) |
| [ux-strategy](skills/ux-strategy/) | 생성 | 1.0.0 | 경쟁 분석·JTBD·가치 제안·UX 지표로 방향 설정 (forked · MIT · cuellarfr/design-skills) |
| [ux-writing](skills/ux-writing/) | 생성 | 1.0.0 | 버튼·오류 메시지·온보딩 등 인터페이스 문구 작성 (forked · MIT · cuellarfr/design-skills) |
| [visual-design-direction](skills/visual-design-direction/) | 생성 | 1.0.0 | 레퍼런스에서 시각 방향을 정리해 디렉션 문서로 (forked · Apache-2.0 · sonyabirch/skills) |
| [visual-qa](skills/visual-qa/) | 리뷰 | 1.4.0 | 렌더 결과를 뷰포트별로 점검 — 겹침·오버플로·대비·여백 리듬 (first-party · MIT) |
| [waza-check](skills/waza-check/) | 생성 | 1.0.0 | 디프·PR·이슈 큐·릴리스 준비 상태 점검 (forked · MIT · tw93/Waza) |
| [waza-ui](skills/waza-ui/) | 생성 | 1.0.0 | 페이지·컴포넌트·타이포를 운영 수준으로 마감 (forked · MIT · tw93/Waza) |
| [waza-write](skills/waza-write/) | 생성 | 1.0.0 | AI 말투를 걷어내고 문장을 다시 쓰기 (forked · MIT · tw93/Waza) |
| [web-artifacts-builder](skills/web-artifacts-builder/) | 생성 | 1.0.0 | React·Tailwind·shadcn/ui 기반 복합 다중 컴포넌트 HTML 아티팩트 구축 (forked · Apache-2.0 · anthropics/skills) |
| [web-asset-generator](skills/web-asset-generator/) | 생성 | 1.0.0 | 파비콘·PWA 앱 아이콘·OG/소셜 메타 이미지 일괄 생성 (forked · MIT · alonw0/web-asset-generator) |
| [web-design-engineer](skills/web-design-engineer/) | 생성 | 1.0.0 | 페이지·대시보드·프로토타입·슬라이드를 브라우저로 구현 (forked · MIT · ConardLi/garden-skills) |
| [web-video-presentation](skills/web-video-presentation/) | 생성 | 1.0.0 | 글·대본을 영상처럼 보이는 16:9 웹 발표물로 (forked · MIT · ConardLi/garden-skills) |
| [webapp-testing](skills/webapp-testing/) | 생성 | 1.0.0 | Playwright로 로컬 웹앱 검증·디버깅·스크린샷 (forked · Apache-2.0 · anthropics/skills) |
<!-- SKILLS:END -->

---

Maintained by WEBIS · [designskill.dev](https://designskill.dev)
