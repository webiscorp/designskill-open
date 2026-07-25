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

| Name | Type | Version | Summary |
|---|---|---|---|
| [frontend-design](skills/frontend-design/) | generate | upstream | Distinctive, intentional UI visual direction and typography guidance (forked · Apache-2.0 · anthropics/skills) |
| [canvas-design](skills/canvas-design/) | generate | upstream | Visual art in PNG/PDF driven by named design philosophies — posters, covers, art pieces (forked · Apache-2.0 · anthropics/skills) |
| [theme-factory](skills/theme-factory/) | transform | upstream | Apply 10 preset font/color themes to slides, docs, and HTML artifacts (forked · Apache-2.0 · anthropics/skills) |
| [algorithmic-art](skills/algorithmic-art/) | generate | upstream | Generative p5.js art with seeded randomness, flow fields, and particles (forked · Apache-2.0 · anthropics/skills) |
| [web-artifacts-builder](skills/web-artifacts-builder/) | generate | upstream | Elaborate multi-component HTML artifacts with React, Tailwind, shadcn/ui (forked · Apache-2.0 · anthropics/skills) |
| [web-asset-generator](skills/web-asset-generator/) | generate | upstream | Favicons, PWA app icons, and Open Graph / social meta images (forked · MIT · alonw0/web-asset-generator) |
| [anydesign](skills/anydesign/) | extract | upstream | Analyze images, websites, and Figma files into a `design.md` with tokens and component inventory (forked · MIT · uxKero/anydesign) |
| [design-dna](skills/design-dna/) | extract | upstream | Reference UI → quantified design DNA: token system, qualitative style, visual effects (forked · MIT · zanwei/design-dna) |
| [extract-design-system](skills/extract-design-system/) | extract | upstream | Extract design primitives from a public website into starter token files (forked · MIT · arvindrk/extract-design-system) |
| [swiftui-design](skills/swiftui-design/) | generate | upstream | SwiftUI visual design for iOS/macOS with anti-AI-slop rules and design direction (forked · MIT · wholiver/swiftui-design-skill) |
| [cinematic-ui](skills/cinematic-ui/) | generate | upstream | Film-inspired web design: director-driven art direction, storyboard layout, cinematic motion (forked · MIT · akseolabs-seo/cinematic-ui) |
| [styleseed-design-review](skills/styleseed-design-review/) | review | upstream | Explains exactly why a UI "looks AI-generated" — and how to fix it (forked · MIT · bitjaru/styleseed) |
| [design-critique](skills/design-critique/) | review | upstream | UI evaluation against usability heuristics, UX laws, IA, and content quality (forked · MIT · cuellarfr/design-skills) |
| [accessibility-audit](skills/accessibility-audit/) | review | upstream | WCAG 2.2 conformance audits at A/AA/AAA with severity assessment (forked · MIT · cuellarfr/design-skills) |
| [design-systems](skills/design-systems/) | generate | upstream | Design tokens, component specs, pattern libraries, naming, and governance (forked · MIT · cuellarfr/design-skills) |
| [design-elevation](skills/design-elevation/) | transform | upstream | Transforms functional visual outputs into polished, professional design (forked · MIT · cuellarfr/design-skills) |
| [figma-to-code](skills/figma-to-code/) | transform | upstream | Figma designs → production React/Next.js with component reuse and variant mapping (forked · MIT · scoobynko/claude-code-design-skills) |
| [frontend-slides](skills/frontend-slides/) | generate | upstream | Animation-rich HTML presentations, from scratch or converted from PPT/PPTX (forked · MIT · zarazhangrui/frontend-slides) |
| [logo-design](skills/logo-design/) | generate | upstream | Production-grade logo variants across wordmark/lockup/symbol/monogram architectures (forked · MIT · rampstackco/claude-skills) |
| [art-direction](skills/art-direction/) | generate | upstream | Visual and creative direction for campaigns, photography, illustration, video (forked · MIT · rampstackco/claude-skills) |
| [brand-style-guide](skills/brand-style-guide/) | generate | upstream | Build or audit a full brand style guide: story, logo system, color, type, voice (forked · MIT · rampstackco/claude-skills) |

## Design Systems

| Name | Tone | Preview |
|---|---|---|
| _(extractor outputs to be archived here)_ | | |

## Survey log — 2026-07 public design-skill sweep

Sources swept: `anthropics/skills`, "awesome claude skills" lists (travisvn, ComposioHQ, BehiSecc, Chat2AnyLLM, JayZeeDesign), `bergside/awesome-design-skills`, and GitHub repo/code search for design SKILL.md packages. Accepted: **21 skills** (table above). Excluded candidates:

| Candidate | Reason for exclusion |
|---|---|
| anthropics/skills `brand-guidelines` | Anthropic's own brand assets — first-party only |
| anthropics/skills docx / pptx / pdf / xlsx / slack-gif-creator etc. | Document/utility skills, not design output |
| bergside/awesome-design-skills (67 style skills) | Bulk-generated near-identical style presets; low per-skill distinctiveness — deferred |
| rohitg00/awesome-claude-design | Aggregated DESIGN.md prompt collection, not a single SKILL.md package |
| ComposioHQ figma/canva/miro/webflow automation | API automation connectors, not design output/review skills |
| ComposioHQ image-enhancer | Image post-processing utility |
| shadcn/ui skills (docs site) | Distributed via docs site; no repo SKILL.md/LICENSE to verify |
| geekjourneyx/claude-design-card | No LICENSE — redistribution not permitted |
| plugin87/ux-ui-agent-skills | No LICENSE — redistribution not permitted |
| appautomaton/agent-designer | No LICENSE — redistribution not permitted |
| frhscopex/design-skill-os | Not SKILL.md format (skill.json + CLI source) |
| cuellarfr/design-skills remaining 6 (ux-research, journey-mapping, ux-strategy, ux-writing, design-ops, interaction-design) | UX research/strategy process skills — outside direct design output/review scope |
| ancoleman/ai-design-components | 75 skills mostly backend/infra; UI entries are implementation engineering, not design |
| rampstackco/claude-skills remaining (~100: SEO, marketing, PM, etc.) | Non-design scope |
| Competing design-asset services | Criterion ③ — competitor assets excluded |
| awesome-claude-skills lists themselves | Aggregators, not skill sources (mined for leads only) |

---

Maintained by WEBIS · [designskill.dev](https://designskill.dev)
