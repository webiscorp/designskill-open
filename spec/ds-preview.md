# 디자인시스템 프리뷰 규격 (DS Preview Spec)

DesignSkill 디자인시스템 프리뷰의 출력 계약. 단일 자립 HTML, `:root` CSS 변수 = 토큰,
섹션 블록 구조 + 시스템 스타일의 nav·hero·footer로 구성한다.

**규격 12블록** (추출기 출력 계약 = 프리뷰 템플릿 = 플랫폼 렌더 대상):

| # | 블록 | 내용 |
|---|---|---|
| 00 | Nav | 시스템 스타일의 메뉴바 (로고·링크·CTA) |
| 01 | Visual Hero | 이미지/그라디언트 비주얼 히어로 |
| 02 | Text Hero | 타이포 중심 히어로 (카피 톤 표현) |
| 03 | Colors | 팔레트 + 역할(hex·용도) |
| 04 | Typography | 스케일(Display~Caption) + 폰트 스택 |
| 05 | Buttons | primary/secondary/ghost/disabled + hover·focus |
| 06 | Forms | input/select/checkbox/radio + 상태(포커스·에러) |
| 07 | Cards | 라이트·다크 배경 각각 |
| 08 | Badges & Chips | 상태 뱃지·필터 칩·태그 |
| 09 | Spacing | 간격 스케일 바 |
| 10 | Radius | 라운드 스케일 |
| 11 | Elevation | 그림자 깊이 단계 |
| 12 | States & Motion | hover/active/disabled 규칙, 전환 시간 (선택) |

구현 규칙:
- **단일 자립 HTML** (외부 요청은 폰트 CDN만 허용), `:root` CSS 변수로 전 토큰 선언
- 토큰 변수는 `--ds-` 접두를 표준으로 한다 (예: `--ds-primary`, `--ds-radius-md`)
- 블록 마크업 관례: `<section id="<block>">` + `.section-label`(`NN / Name`) + `.section-title`
- 라이트/다크는 파일 분리(`preview.html` / `preview-dark.html`) 또는 변수 스왑
- 추출기는 이 12블록을 채우는 것을 목표로 하되, 근거 없는 블록은 생략(추정 금지)하고
  `manifest`에 누락 블록 기록
