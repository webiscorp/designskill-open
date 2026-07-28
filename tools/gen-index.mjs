#!/usr/bin/env node
// gen-index.mjs — regenerate the Skills tables in README.md / README.ko.md
// from skills/*/skill.yaml + each skill's README.md (source of truth per folder).
// Usage: node tools/gen-index.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TYPE_KO = { generate: "생성", review: "리뷰", extract: "추출", transform: "변환" };

const yamlField = (s, key) => (s.match(new RegExp(`^${key}:\\s*(.+)$`, "m")) || [])[1]?.trim().replace(/^"|"$/g, "");
const originField = (s, key) => (s.match(new RegExp(`^\\s{2}${key}:\\s*(.+)$`, "m")) || [])[1]?.trim();

const rows = [];
for (const name of fs.readdirSync(path.join(ROOT, "skills")).sort()) {
  if (name.startsWith("_")) continue;
  const dir = path.join(ROOT, "skills", name);
  const yf = path.join(dir, "skill.yaml");
  if (!fs.existsSync(yf)) { console.error(`skip ${name}: no skill.yaml`); continue; }
  const y = fs.readFileSync(yf, "utf8");
  const readme = fs.existsSync(path.join(dir, "README.md")) ? fs.readFileSync(path.join(dir, "README.md"), "utf8") : "";
  const type = yamlField(y, "type") || "generate";
  const version = yamlField(y, "version") || "1.0.0";
  // EN summary: README blockquote line; fallback to yaml summary
  const en = (readme.match(/^>\s*(.+)$/m) || [])[1]?.trim() || yamlField(y, "summary") || "";
  // KO summary: bold line of the "## 한국어" section, text after the first " — "
  const koSec = readme.split(/^## 한국어/m)[1] || "";
  const koBold = (koSec.match(/\*\*[^*]+\*\*\s*—\s*(.+)$/m) || [])[1]?.trim() || en;
  const kind = originField(y, "kind") || "first_party";
  const lic = originField(y, "license") || "MIT";
  const src = (originField(y, "source_url") || "").match(/github\.com\/([^/]+\/[^/]+)/)?.[1];
  const suffix = kind === "forked" ? `(forked · ${lic} · ${src || "upstream"})` : `(first-party · MIT)`;
  rows.push({ name, type, version, en, ko: koBold, suffix });
}

const table = (lang) => {
  const h = lang === "ko" ? "| 이름 | 유형 | 버전 | 요약 |" : "| Name | Type | Version | Summary |";
  const lines = [h, "|---|---|---|---|"];
  for (const r of rows) {
    const t = lang === "ko" ? TYPE_KO[r.type] || r.type : r.type;
    const s = lang === "ko" ? r.ko : r.en;
    lines.push(`| [${r.name}](skills/${r.name}/) | ${t} | ${r.version} | ${s} ${r.suffix} |`);
  }
  return lines.join("\n");
};

for (const [file, lang] of [["README.md", "en"], ["README.ko.md", "ko"]]) {
  const p = path.join(ROOT, file);
  const s = fs.readFileSync(p, "utf8");
  const out = s.replace(/<!-- SKILLS:START -->[\s\S]*<!-- SKILLS:END -->/, `<!-- SKILLS:START -->\n${lang === "ko" ? `${rows.length}개 스킬.` : `${rows.length} skills.`}\n\n${table(lang)}\n<!-- SKILLS:END -->`);
  fs.writeFileSync(p, out);
  console.log(`${file}: ${rows.length} rows`);
}
