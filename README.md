# designskill-open

**Open repository of design skills and design-system previews** — the source archive and distribution point for [designskill.dev](https://designskill.dev).

한국어 안내는 [README.ko.md](README.ko.md)를 참고하세요. (Korean guide: [README.ko.md](README.ko.md))

- All first-party content is **MIT** licensed. Fork, modify, and redistribute freely.
- One skill = one folder (`skills/<name>/`). Spec: [spec/skill-package.md](spec/skill-package.md).
- Design-system previews follow the single self-contained HTML spec: [spec/ds-preview.md](spec/ds-preview.md).
- Skills forked from upstream repos record source, upstream commit, and original license in `skill.yaml` `origin` (redistribution-friendly licenses only — MIT/Apache-2.0/CC0 — with the original LICENSE preserved per folder).
- Import/update: `node tools/import-skill.mjs <owner/repo> <path-in-repo> [name]` — re-running tracks the latest upstream commit.
- Collection criteria: ① direct contribution to design output, review, or transformation ② redistribution-friendly license with origin tracking ③ no assets from competing services.

## Skills

<!-- SKILLS:START -->
75 skills.

| Name | Type | Version | Summary |
|---|---|---|---|
| [accessibility-audit](skills/accessibility-audit/) | review | 1.0.0 | WCAG 2.2 conformance audits at A/AA/AAA with severity assessment (forked · MIT · cuellarfr/design-skills) |
| [ai-seo](skills/ai-seo/) | generate | 1.0.0 | Optimizing content to be cited in LLM-generated answers (AEO/GEO) (forked · MIT · coreyhaines31/marketingskills) |
| [algorithmic-art](skills/algorithmic-art/) | generate | 1.0.0 | Generative p5.js art with seeded randomness, flow fields, and particles (forked · Apache-2.0 · anthropics/skills) |
| [anydesign](skills/anydesign/) | extract | 1.0.0 | Analyze images, websites, and Figma files into a design.md with tokens and component inventory (forked · MIT · uxKero/anydesign) |
| [art-direction](skills/art-direction/) | generate | 1.0.0 | Visual and creative direction for campaigns, photography, illustration, video (forked · MIT · rampstackco/claude-skills) |
| [baoyu-design](skills/baoyu-design/) | generate | 1.0.0 | High-quality web design standards and implementation guidance (forked · MIT · JimLiu/baoyu-design) |
| [beautiful-article](skills/beautiful-article/) | generate | 1.0.0 | Turning URLs, PDFs, and docs into a shareable single-file HTML article (forked · MIT · ConardLi/garden-skills) |
| [brand-guidelines](skills/brand-guidelines/) | generate | 1.0.0 | Applying brand colors and typography consistently across artifacts (forked · Apache-2.0 · anthropics/skills) |
| [brand-naming](skills/brand-naming/) | generate | 1.0.0 | A naming process from candidate generation to trademark and domain checks (forked · Apache-2.0 · sonyabirch/skills) |
| [brand-style-guide](skills/brand-style-guide/) | generate | 1.0.0 | Build or audit a full brand style guide: story, logo, color, type, voice (forked · MIT · rampstackco/claude-skills) |
| [brandkit](skills/brandkit/) | generate | 1.0.0 | Generating brand guideline boards, logo systems, and identity decks (forked · MIT · Leonxlnx/taste-skill) |
| [brutalist-skill](skills/brutalist-skill/) | generate | 1.0.0 | Raw interfaces fusing Swiss typography with terminal aesthetics (forked · MIT · Leonxlnx/taste-skill) |
| [canvas-design](skills/canvas-design/) | generate | 1.0.0 | Visual art in PNG/PDF driven by named design philosophies (forked · Apache-2.0 · anthropics/skills) |
| [cinematic-ui](skills/cinematic-ui/) | generate | 1.0.0 | Film-inspired web design: director-driven art direction and cinematic motion (forked · MIT · akseolabs-seo/cinematic-ui) |
| [cognitive-load](skills/cognitive-load/) | generate | 1.0.0 | Diagnose screen complexity through intrinsic, extraneous and germane load (forked · MIT · jpoindexter/design-engineering-canon) |
| [content-strategy](skills/content-strategy/) | generate | 1.0.0 | Deciding what content to create and in what order (forked · MIT · coreyhaines31/marketingskills) |
| [copywriting](skills/copywriting/) | generate | 1.0.0 | Writing copy for home, landing, pricing, and about pages (forked · MIT · coreyhaines31/marketingskills) |
| [cro](skills/cro/) | generate | 1.0.0 | Improving conversion on landing, pricing, and form pages (forked · MIT · coreyhaines31/marketingskills) |
| [css-architecture](skills/css-architecture/) | generate | 1.0.0 | Structure styles with BEM, ITCSS, CUBE CSS and fluid responsive technique (forked · MIT · jpoindexter/design-engineering-canon) |
| [design-critique](skills/design-critique/) | review | 1.0.0 | UI evaluation against usability heuristics, UX laws, IA, and content quality (forked · MIT · cuellarfr/design-skills) |
| [design-dna](skills/design-dna/) | extract | 1.0.0 | Reference UI → quantified design DNA: tokens, qualitative style, visual effects (forked · MIT · zanwei/design-dna) |
| [design-elevation](skills/design-elevation/) | transform | 1.0.0 | Transforms functional visual outputs into polished, professional designs (forked · MIT · cuellarfr/design-skills) |
| [design-ops](skills/design-ops/) | generate | 1.0.0 | Running design sprints, handoff, team rituals, and documentation standards (forked · MIT · cuellarfr/design-skills) |
| [design-qa-checklist](skills/design-qa-checklist/) | generate | 1.0.0 | Generate QA checklists that verify implementation against the design (forked · MIT · Owl-Listener/designer-skills) |
| [design-systems](skills/design-systems/) | generate | 1.0.0 | Design tokens, component specs, pattern libraries, naming, and governance (forked · MIT · cuellarfr/design-skills) |
| [empathy-map](skills/empathy-map/) | generate | 1.0.0 | Synthesize user research into a says/thinks/does/feels empathy map (forked · MIT · Owl-Listener/designer-skills) |
| [extract-design-system](skills/extract-design-system/) | extract | 1.0.0 | Extract design primitives from a public website into starter token files (forked · MIT · arvindrk/extract-design-system) |
| [figma-to-code](skills/figma-to-code/) | transform | 1.0.0 | Figma designs to production React/Next.js with component reuse (forked · MIT · scoobynko/claude-code-design-skills) |
| [frontend-design](skills/frontend-design/) | generate | 1.0.0 | Distinctive, intentional UI visual direction and typography guidance (forked · Apache-2.0 · anthropics/skills) |
| [frontend-slides](skills/frontend-slides/) | generate | 1.0.0 | Animation-rich HTML presentations, from scratch or from PPT/PPTX (forked · MIT · zarazhangrui/frontend-slides) |
| [gestalt-principles](skills/gestalt-principles/) | generate | 1.0.0 | Judge layouts with proximity, similarity, continuity and closure (forked · MIT · jpoindexter/design-engineering-canon) |
| [hallmark](skills/hallmark/) | generate | 1.0.0 | Greenfield pages, audits, redesigns, and design extraction from URLs (forked · MIT · Nutlope/hallmark) |
| [handoff-spec](skills/handoff-spec/) | generate | 1.0.0 | Write handoff specs covering measurements, behaviors, assets and edge cases (forked · MIT · Owl-Listener/designer-skills) |
| [huashu-design](skills/huashu-design/) | generate | 1.0.0 | High-fidelity HTML prototypes, decks, visualizations, and expert review (forked · MIT · alchaincyf/huashu-design) |
| [image-to-code-skill](skills/image-to-code-skill/) | generate | 1.0.0 | Generate the design image first, then implement it faithfully (forked · MIT · Leonxlnx/taste-skill) |
| [imagegen-frontend-web](skills/imagegen-frontend-web/) | generate | 1.0.0 | Generating web screen mockup images before implementation (forked · MIT · Leonxlnx/taste-skill) |
| [interaction-design](skills/interaction-design/) | generate | 1.0.0 | Designing microinteractions, state machines, gestures, and error prevention (forked · MIT · cuellarfr/design-skills) |
| [journey-mapping](skills/journey-mapping/) | generate | 1.0.0 | Building customer journey maps, service blueprints, and empathy maps (forked · MIT · cuellarfr/design-skills) |
| [landing-generate](skills/landing-generate/) | generate | 2.0.0 | Generate complete landing pages with consistent structure and tone (first-party · MIT) |
| [logo-design](skills/logo-design/) | generate | 1.0.0 | Production-grade logo variants across multiple logo architectures (forked · MIT · rampstackco/claude-skills) |
| [mcp-builder](skills/mcp-builder/) | generate | 1.0.0 | Designing and building MCP servers that connect external services (forked · Apache-2.0 · anthropics/skills) |
| [minimalist-skill](skills/minimalist-skill/) | generate | 1.0.0 | Warm monochrome, typographic contrast, and flat bento grids (forked · MIT · Leonxlnx/taste-skill) |
| [motion-animation](skills/motion-animation/) | generate | 1.0.0 | Design UI motion with the 12 principles, easing and spring physics (forked · MIT · jpoindexter/design-engineering-canon) |
| [nielsen-heuristics](skills/nielsen-heuristics/) | generate | 1.0.0 | Evaluate any interface against Nielsen's 10 usability heuristics (forked · MIT · jpoindexter/design-engineering-canon) |
| [nothing-design](skills/nothing-design/) | generate | 1.0.0 | Nothing's dot-matrix, monochrome design language (forked · MIT · dominikmartn/nothing-design-skill) |
| [onboarding](skills/onboarding/) | generate | 1.0.0 | Improving post-signup first-run experience and activation (forked · MIT · coreyhaines31/marketingskills) |
| [output-skill](skills/output-skill/) | generate | 1.0.0 | Organizing and delivering work output in a consistent format (forked · MIT · Leonxlnx/taste-skill) |
| [programmatic-seo](skills/programmatic-seo/) | generate | 1.0.0 | Generating SEO pages at scale from templates and data (forked · MIT · coreyhaines31/marketingskills) |
| [redesign-skill](skills/redesign-skill/) | generate | 1.0.0 | Audit the current design and raise quality without breaking function (forked · MIT · Leonxlnx/taste-skill) |
| [schema](skills/schema/) | generate | 1.0.0 | Adding, fixing, and optimizing JSON-LD structured data (forked · MIT · coreyhaines31/marketingskills) |
| [seo-audit](skills/seo-audit/) | generate | 1.0.0 | Auditing and diagnosing site SEO and technical SEO issues (forked · MIT · coreyhaines31/marketingskills) |
| [site-architecture](skills/site-architecture/) | generate | 1.0.0 | Planning page hierarchy, navigation, URLs, and internal linking (forked · MIT · coreyhaines31/marketingskills) |
| [skill-creator](skills/skill-creator/) | generate | 1.0.0 | Creating, improving, and benchmarking skills (forked · Apache-2.0 · anthropics/skills) |
| [soft-skill](skills/soft-skill/) | generate | 1.0.0 | Fonts, spacing, shadows, and card structure that read as premium (forked · MIT · Leonxlnx/taste-skill) |
| [styleseed-design-review](skills/styleseed-design-review/) | review | 1.0.0 | Explains exactly why a UI looks AI-generated and how to fix it (forked · MIT · bitjaru/styleseed) |
| [swiftui-design](skills/swiftui-design/) | generate | 1.0.0 | SwiftUI visual design for iOS/macOS with anti-AI-slop rules (forked · MIT · wholiver/swiftui-design-skill) |
| [taste-skill](skills/taste-skill/) | generate | 1.0.0 | Reads the brief, infers direction, and ships non-templated interfaces (forked · MIT · Leonxlnx/taste-skill) |
| [theme-factory](skills/theme-factory/) | transform | 1.0.0 | Apply 10 preset font/color themes to slides, docs, and HTML artifacts (forked · Apache-2.0 · anthropics/skills) |
| [ui-craft](skills/ui-craft/) | generate | upstream | \"Use for UI design and implementation work to avoid generic AI-looking interfaces. Provides anti-slop rules, a required discovery phase before coding, and guida (forked · MIT · educlopez/ui-craft) |
| [ui-craft-dense-dashboard](skills/ui-craft-dense-dashboard/) | generate | upstream | \"Dense dashboard / admin / Bloomberg / Retool / data-heavy internal tools. Locked knobs: CRAFT=7, MOTION=3, DENSITY=9. IBM Plex + mono numbers, semantic palette (forked · MIT · educlopez/ui-craft) |
| [ui-craft-editorial](skills/ui-craft-editorial/) | generate | upstream | \"Editorial / magazine / long-form / Medium / Substack / content-heavy UIs. Locked knobs: CRAFT=9, MOTION=4, DENSITY=3. Serif display + humanist body, wide readi (forked · MIT · educlopez/ui-craft) |
| [ui-craft-minimal](skills/ui-craft-minimal/) | generate | upstream | \"Minimal / clean / Linear / Notion / Vercel / whitespace-heavy UIs. Locked knobs: CRAFT=8, MOTION=3, DENSITY=2. Monochrome + one accent, Inter/Geist, hairline b (forked · MIT · educlopez/ui-craft) |
| [ux-research](skills/ux-research/) | generate | 1.0.0 | Research planning, interview scripts, and qualitative analysis (forked · MIT · cuellarfr/design-skills) |
| [ux-strategy](skills/ux-strategy/) | generate | 1.0.0 | Competitive analysis, JTBD, value proposition, and UX metrics (forked · MIT · cuellarfr/design-skills) |
| [ux-writing](skills/ux-writing/) | generate | 1.0.0 | Writing interface copy for buttons, errors, onboarding, and empty states (forked · MIT · cuellarfr/design-skills) |
| [visual-design-direction](skills/visual-design-direction/) | generate | 1.0.0 | Distill references into a documented visual direction (forked · Apache-2.0 · sonyabirch/skills) |
| [visual-qa](skills/visual-qa/) | review | 1.4.0 | Visual inspection pass — layout, contrast, and console errors (first-party · MIT) |
| [waza-check](skills/waza-check/) | generate | 1.0.0 | Reviewing diffs, PRs, issue queues, and release readiness (forked · MIT · tw93/Waza) |
| [waza-ui](skills/waza-ui/) | generate | 1.0.0 | Production-grade UI for pages, components, and typography (forked · MIT · tw93/Waza) |
| [waza-write](skills/waza-write/) | generate | 1.0.0 | Rewriting prose and removing AI-like wording (forked · MIT · tw93/Waza) |
| [web-artifacts-builder](skills/web-artifacts-builder/) | generate | 1.0.0 | Elaborate multi-component HTML artifacts with React, Tailwind, shadcn/ui (forked · Apache-2.0 · anthropics/skills) |
| [web-asset-generator](skills/web-asset-generator/) | generate | 1.0.0 | Favicons, PWA app icons, and Open Graph / social meta images (forked · MIT · alonw0/web-asset-generator) |
| [web-design-engineer](skills/web-design-engineer/) | generate | 1.0.0 | Building pages, dashboards, prototypes, and decks in the browser (forked · MIT · ConardLi/garden-skills) |
| [web-video-presentation](skills/web-video-presentation/) | generate | 1.0.0 | Turning an article or script into a video-like 16:9 web presentation (forked · MIT · ConardLi/garden-skills) |
| [webapp-testing](skills/webapp-testing/) | generate | 1.0.0 | Verifying, debugging, and capturing local web apps with Playwright (forked · Apache-2.0 · anthropics/skills) |
<!-- SKILLS:END -->

---

Maintained by WEBIS · [designskill.dev](https://designskill.dev)
