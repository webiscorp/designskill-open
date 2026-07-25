# designskill-open

**디자인 스킬과 디자인시스템 프리뷰의 공개 저장소** — [designskill.dev](https://designskill.dev)의 스킬 원본 보관·배포처입니다.
Open collection of design skills (AI-injectable SKILL.md packages) and self-contained design-system previews, maintained by WEBIS.

- 모든 콘텐츠는 **MIT** 라이선스입니다. 자유롭게 포크·수정·재배포하세요.
- 스킬 하나 = 폴더 하나 (`skills/<name>/`). 규격은 [spec/skill-package.md](spec/skill-package.md).
- 디자인시스템 프리뷰는 단일 자립 HTML 규격을 따릅니다. [spec/ds-preview.md](spec/ds-preview.md).
- 외부에서 포크해 온 스킬은 `skill.yaml`의 `origin`에 출처·업스트림 커밋·원 라이선스를 기록합니다 (MIT/Apache-2.0/CC0 등 재배포 허용 라이선스만, 폴더별 원 LICENSE 보존).
- 수용·갱신: `node tools/import-skill.mjs <owner/repo> <스킬경로>` — 재실행 시 업스트림 최신 커밋으로 패치 추적.
- 수집 기준: ① 디자인 산출·검수·변환에 직접 기여 ② 재배포 허용 라이선스 + origin 추적 ③ 경쟁 서비스 자산 제외.

## Skills

| 이름 | 유형 | 버전 | 요약 |
|---|---|---|---|
| [frontend-design](skills/frontend-design/) | 생성 | upstream | 탈템플릿 UI 시각 방향·타이포 지침 (forked · Apache-2.0 · anthropics/skills) |

## Design Systems

| 이름 | 톤 | 프리뷰 |
|---|---|---|
| _(추출기 산출물 보관 예정)_ | | |

---

Maintained by WEBIS · [designskill.dev](https://designskill.dev)
