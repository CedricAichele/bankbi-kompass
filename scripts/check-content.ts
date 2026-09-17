import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parseContent, validateLinks } from "../src/content/schema";
import { scanContent } from "../src/lib/content-safety";
import { toolsCatalog, frequent } from "../src/content/catalog";
const files = ["articles", "problems", "tasks"].flatMap((dir) =>
  readdirSync(join("src/content", dir))
    .filter((x) => x.endsWith(".md"))
    .map((file) => join("src/content", dir, file)),
);
const items = files.map((file) => parseContent(readFileSync(file, "utf8")));
validateLinks(items);
const ids = new Set(items.map((x) => x.slug));
for (const id of [
  ...frequent,
  ...toolsCatalog.flatMap((t) =>
    t.groups.flatMap((g) => g.items.map((x) => x.id)),
  ),
])
  if (!ids.has(id)) throw new Error(`Ungültiger Katalogeintrag: ${id}`);
for (const [i, item] of items.entries()) {
  if (item.body.split(/\s+/).length > 250)
    throw new Error(
      `${item.id}: Schnellreferenz auf höchstens 250 Wörter kürzen.`,
    );
  for (const image of item.screenshots) {
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
    if (!ids.has(match[1]))
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
