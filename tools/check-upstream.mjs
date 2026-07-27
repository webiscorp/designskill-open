#!/usr/bin/env node
// check-upstream.mjs — 포크 스킬의 업스트림 패치 감지
// ✅️ [WEBIS(CLAUDE)-260727] - 원본 스킬이 패치되면 여기서 감지 → import-skill.mjs 재실행으로 반영
//
// 사용법: node tools/check-upstream.mjs   (레포 루트에서)
// 각 skills/<slug>/README.md 의 Upstream 라인(URL + pinned commit)을 읽어
// GitHub API로 해당 경로의 최신 커밋과 비교한다. 다르면 UPDATE 로 표시.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");
const dirs = fs.readdirSync(path.join(ROOT, "skills")).filter((d) => !d.startsWith("_"));

const parse = (readme) => {
  const m = readme.match(/(?:업스트림|Forked from|Source): (\S+?)(?:\s|$).*?(?:커밋|commit) `([0-9a-f]+)`/s);
  if (!m) return null;
  // https://github.com/<owner>/<repo>/tree/<branch>/<path...>
  const u = m[1].match(/github\.com\/([^/]+)\/([^/]+)(?:\/tree\/([^/]+)\/(.+))?/);
  if (!u) return null;
  return { owner: u[1], repo: u[2], branch: u[3] || "main", subpath: u[4] || "", pinned: m[2] };
};

let updates = 0;
for (const slug of dirs) {
  const rp = path.join(ROOT, "skills", slug, "README.md");
  if (!fs.existsSync(rp)) continue;
  const info = parse(fs.readFileSync(rp, "utf8"));
  if (!info) { console.log(`—  ${slug}: 업스트림 없음 (자체 스킬)`); continue; }
  try {
    const api = `https://api.github.com/repos/${info.owner}/${info.repo}/commits?sha=${info.branch}&path=${encodeURIComponent(info.subpath)}&per_page=1`;
    const r = await fetch(api, { headers: { accept: "application/vnd.github+json", "user-agent": "designskill-check-upstream" } });
    if (!r.ok) { console.log(`⚠️  ${slug}: API ${r.status}`); continue; }
    const [latest] = await r.json();
    const sha = latest?.sha?.slice(0, 7);
    if (!sha) { console.log(`⚠️  ${slug}: 커밋 조회 실패`); continue; }
    if (sha === info.pinned || sha.startsWith(info.pinned) || info.pinned.startsWith(sha)) {
      console.log(`✓  ${slug}: 최신 (${info.pinned})`);
    } else {
      updates += 1;
      console.log(`🔺 ${slug}: UPDATE ${info.pinned} → ${sha} (${latest.commit?.committer?.date?.slice(0, 10)}) — node tools/import-skill.mjs ${info.owner}/${info.repo} ${slug} 재실행`);
    }
  } catch (e) {
    console.log(`⚠️  ${slug}: ${e.message}`);
  }
}
console.log(updates ? `\n갱신 필요: ${updates}건` : "\n모두 최신입니다.");
