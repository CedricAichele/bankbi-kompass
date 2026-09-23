import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parseContent, validateLinks, sectionsOf } from "../src/content/schema";
import { scanContent } from "../src/lib/content-safety";
import { toolsCatalog, powerQueryGroups, frequent } from "../src/content/catalog";
const files = ["articles", "problems", "tasks"].flatMap((dir) =>
  readdirSync(join("src/content", dir))
    .filter((x) => x.endsWith(".md"))
    .map((file) => join("src/content", dir, file)),
);
const items = files.map((file) => parseContent(readFileSync(file, "utf8")));
validateLinks(items);
if (items.some(x => x.bereich === "IDA")) throw new Error("Archivierte IDA-Inhalte dürfen nicht öffentlich indexiert werden.");
const ids = new Set(items.map((x) => x.slug));
for (const id of [
  ...frequent,
  ...powerQueryGroups.flatMap(g => g.items.map(x => x.id)),
  ...toolsCatalog.flatMap((t) =>
    t.groups.flatMap((g) => g.items.map((x) => x.id)),
  ),
])
  if (!ids.has(id)) throw new Error(`Ungültiger Katalogeintrag: ${id}`);
for (const tool of toolsCatalog)
  for (const group of tool.groups)
    if (!group.items.length) throw new Error(`Leere Kataloggruppe: ${tool.name}/${group.title}`);
for (const [label, selected] of [
  ["Probleme", items.filter((x) => x.art === "problem")],
  ["Aufgaben", items.filter((x) => x.art === "aufgabe")],
  ["Werkzeugwahl", items.filter((x) => x.kategorie === "Werkzeugwahl")],
  ["Grundbegriffe", items.filter((x) => x.bereich === "Datenanalyse" || x.tags.includes("Grundbegriff"))],
] as const) if (!selected.length) throw new Error(`Leerer Bereich: ${label}`);
for (const [i, item] of items.entries()) {
  const sections = sectionsOf(item.body);
  if (!item.quellen.length)
    throw new Error(`${item.id}: Passende offizielle Dokumentation fehlt.`);
  if (item.praxis && (!sections.Ergebnis || !sections["Warum funktioniert das?"] || !sections["Plausibilitätscheck"]))
    throw new Error(`${item.id}: Vertiefte Anleitung benötigt Ergebnis, Erklärung und Plausibilitätscheck.`);
  if ((frequent.includes(item.id) || item.art === "aufgabe") && !sections.Ergebnis)
    console.warn(`Redaktioneller Hinweis ${item.id}: konkretes Ergebnis als eigenen Abschnitt ergänzen.`);
  for (const image of item.screenshots) {
    if ((image.status === "todo" || image.status === "ersetzen") && (!image.aufnahmeplan || !image.schritt))
      throw new Error(`${item.id}: Offene Aufnahme benötigt einen vollständigen Aufnahmeplan und eine Schrittzuordnung.`);
    if (image.status === "todo") continue;
    const file = join("public", image.src!);
    if (!existsSync(file))
      throw new Error(`${item.id}: Bilddatei fehlt: ${image.src}`);
    if (
      file.endsWith(".svg") &&
      /<script|\bon\w+\s*=|<foreignObject|(?:href|src)\s*=\s*["'](?:https?:|data:|javascript:)/i.test(
        readFileSync(file, "utf8"),
      )
    )
      throw new Error(`${item.id}: SVG enthält aktive oder externe Inhalte.`);
  }
  for (const match of item.body.matchAll(/\]\(#\/wissen\/([^)]+)\)/g))
    if (!ids.has(match[1].split("?")[0]))
      throw new Error(`Ungültiger Markdown-Link in ${files[i]}: ${match[1]}`);
  const findings = scanContent(readFileSync(files[i], "utf8"));
  for (const finding of findings)
    console.warn(`Inhaltswarnung ${files[i]}: ${finding}`);
  if (findings.length && process.argv.includes("--strict"))
    process.exitCode = 1;
}
console.log(
  `${items.length} Inhalte: Schema, IDs und Querverweise gültig. Die Musterprüfung ersetzt keine redaktionelle Vertraulichkeitsprüfung.`,
);
