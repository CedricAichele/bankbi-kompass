import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { extname } from "node:path";
// Git respektiert die Ignore-Regeln. Trefferwerte werden bewusst nicht ausgegeben.
const files = execFileSync(
  "git",
  [
    "-c",
    `safe.directory=${process.cwd().replaceAll("\\", "/")}`,
    "ls-files",
    "--cached",
    "--others",
    "--exclude-standard",
    "-z",
  ],
  { encoding: "utf8" },
)
  .split("\0")
  .filter(Boolean);
const rules: [string, RegExp][] = [
  [
    "private Pfade",
    /(?:[A-Z]:[\\/](?:Users|Benutzer)[\\/]|\/Users\/|\/home\/)[^\s"']+/i,
  ],
  [
    "ausgeschlossene Unternehmensbezeichnung",
    /Volksbank\s+Alzey[ -]Worms|VR[ -]Bank\s+Mainz/i,
  ],
  ["IBAN", /\b[A-Z]{2}\d{2}(?:\s?\d){18}\b/],
  [
    "Tokenformat",
    /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|sk-[A-Za-z0-9]{24,})\b/,
  ],
  [
    "private Netzwerkadresse",
    /https?:\/\/(?:10\.\d|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.)/i,
  ],
  ["E-Mail-Adresse", /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
  [
    "interner Hostname",
    /https?:\/\/[^\s/"']+\.(?:local|internal|intranet|corp)\b/i,
  ],
  ["Telefonangabe", /\b(?:Telefon|Mobil|Tel\.)\s*:?\s*\+?\d[\d ()/-]{7,}/i],
  [
    "Secret-Zuweisung",
    /\b(?:api[_-]?key|access[_-]?token|password|client[_-]?secret)\s*[:=]\s*["'][A-Za-z0-9_+/-]{12,}["']/i,
  ],
];
let flags = 0;
for (const file of files) {
  if (!existsSync(file)) continue;
  if (
    /(?:^|\/)(?:node_modules|\.local-demo|working-assets|\.qa|\.env[^/]*)(?:\/|$)|\.(?:xlsx?|xlsm|pbix|pbit|tmp|log)$/i.test(
      file,
    )
  ) {
    console.error("Unzulässige Datei:", file);
    flags++;
    continue;
  }
  if ([".png", ".webp", ".jpg", ".jpeg"].includes(extname(file))) continue;
  const text = readFileSync(file, "utf8");
  // Prüfprogramme und Test-Fixtures enthalten die gesuchten Muster absichtlich.
  if (file === "scripts/check-repository.ts" || file.startsWith("src/test/"))
    continue;
  for (const [label, regex] of rules)
    if (regex.test(text)) {
      console.error(`${file}: ${label}`);
      flags++;
    }
}
console.log(
  `${files.length} veröffentlichbare Dateien geprüft; ${flags} strukturelle Vertraulichkeitstreffer. Bilder und fachliche Identifizierbarkeit zusätzlich manuell prüfen.`,
);
if (flags) process.exitCode = 1;
