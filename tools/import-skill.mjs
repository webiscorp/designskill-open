#!/usr/bin/env node
// 외부 스킬 수용기 — 사용: node tools/import-skill.mjs <owner/repo> <repo내 스킬경로> [로컬이름]
// 규칙: 재배포 허용 라이선스만, 원 LICENSE 보존, skill.yaml origin에 업스트림 커밋 기록.
// 재실행하면 업스트림 최신으로 갱신(패치 추적).
import fs from "node:fs";
import path from "node:path";

const [repo, srcPath, localName] = process.argv.slice(2);
if (!repo || !srcPath) { console.log("사용: node tools/import-skill.mjs <owner/repo> <path> [name]"); process.exit(1); }
const name = localName || path.basename(srcPath);
const api = (p) => fetch(`https://api.github.com/repos/${repo}${p}`, { headers: { "user-agent": "designskill-open" } }).then((r) => r.json());
const raw = (ref, p) => fetch(`https://raw.githubusercontent.com/${repo}/${ref}/${p}`).then((r) => (r.ok ? r.text() : null));

const head = (await api("/commits?per_page=1"))[0];
const ref = head.sha;
const dir = path.join(import.meta.dirname, "..", "skills", name);
fs.mkdirSync(dir, { recursive: true });

const skill = await raw(ref, `${srcPath}/SKILL.md`);
if (!skill) { console.error("SKILL.md 없음 — 경로 확인"); process.exit(1); }
fs.writeFileSync(path.join(dir, "SKILL.md"), skill);
const lic = (await raw(ref, `${srcPath}/LICENSE.txt`)) || (await raw(ref, "LICENSE")) || (await raw(ref, "LICENSE.md"));
if (!lic) { console.error("LICENSE 미확인 — 수용 불가(재배포 허용 라이선스 필수)"); process.exit(1); }
fs.writeFileSync(path.join(dir, "LICENSE.txt"), lic);
const licName = /Apache License/i.test(lic) ? "Apache-2.0" : /MIT License/i.test(lic) ? "MIT" : "UNKNOWN";
if (licName === "UNKNOWN") { console.error("라이선스 판별 실패 — 수동 검토 필요"); process.exit(1); }
const summary = /^description:\s*(.+)$/m.exec(skill)?.[1]?.slice(0, 160) || "";

fs.writeFileSync(path.join(dir, "skill.yaml"), `name: ${name}
version: upstream
type: generate
summary: ${JSON.stringify(summary)}
origin:
  kind: forked
  source_url: https://github.com/${repo}/tree/main/${srcPath}
  upstream_commit: ${ref}
  imported_at: ${new Date().toISOString().slice(0, 10)}
  license: ${licName}
targets: [claude, codex, gemini]
conflicts: []
order: standalone
`);
fs.writeFileSync(path.join(dir, "README.md"), `# ${name} (forked)

업스트림: https://github.com/${repo}/tree/main/${srcPath} (커밋 \`${ref.slice(0, 7)}\`, ${licName})
원 라이선스는 [LICENSE.txt](LICENSE.txt)로 보존. 갱신: \`node tools/import-skill.mjs ${repo} ${srcPath}\` 재실행.
`);
console.log(`수용 완료 → skills/${name}/ (upstream ${ref.slice(0, 7)}, ${licName})`);
