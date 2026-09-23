import Fuse from "fuse.js";
import type { Content } from "../content/schema";
import { toolsCatalog } from "../content/catalog";
import { mEntries } from "../content/m-reference";
import { excelEntries } from "../content/excel-reference";
export type Filters = {
  bereich?: string;
  schwierigkeit?: string;
  kategorie?: string;
  art?: string;
  kontext?: string;
};
export const normalize = (s: string) =>
  s
    .toLocaleLowerCase("de")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
export function searchContent(
  items: Content[],
  query: string,
  filters: Filters = {},
) {
  const eligible = items.filter(
    (x) =>
      (!filters.bereich ||
        x.bereich === filters.bereich ||
        (filters.bereich === "Datenanalyse" && x.tags.includes("Grundbegriff")) ||
        x.werkzeuge.includes(filters.bereich as "Power BI")) &&
      (!filters.schwierigkeit || x.schwierigkeit === filters.schwierigkeit) &&
      (!filters.kategorie ||
        x.kategorie === filters.kategorie ||
        toolsCatalog
          .find((t) => t.name === filters.bereich)
          ?.groups.find((g) => g.title === filters.kategorie)
          ?.items.some((i) => i.id === x.id)) &&
      (!filters.art || x.art === filters.art) &&
      (!filters.kontext || x.kontexte.some((c) => c === filters.kontext)),
  );
  const q = normalize(query);
  if (!q) return eligible;
  const indexed = eligible.map((item) => ({
    item,
    title: normalize(item.titel),
    synonyms: item.synonyme.map(normalize),
    tags: item.tags.map(normalize),
    description: normalize(item.kurzbeschreibung),
    category: normalize(item.kategorie),
    body: normalize(item.body),
    tasks: item.id === "power-query-m" ? mEntries.map(x=>normalize([x.name,x.category,x.use,x.adapt,x.note].join(" "))) : item.id === "excel-formeln" ? excelEntries(items).map(x=>normalize([x.name,x.category,x.use,x.adapt].join(" "))) : [],
  }));
  const fuse = new Fuse(indexed, {
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.32,
    keys: [
      { name: "synonyms", weight: 8 },
      { name: "title", weight: 6 },
      { name: "tags", weight: 3 },
      { name: "description", weight: 2 },
      "category",
      "body",
      { name: "tasks", weight: 0.5 },
    ],
  });
  const matches = fuse.search(q);
  // Require every meaningful term within one reference entry, never across unrelated cards.
  const taskTerms=q.split(" ").filter(w=>!["in","im","der","die","das","einer","einem","mit","von","und","zu"].includes(w));
  const taskHit=(x:typeof indexed[number])=>taskTerms.length>0 && x.tasks.some(t=>taskTerms.every(w=>t.includes(w)));
  for (const entry of indexed.filter(taskHit)) if(!matches.some(x=>x.item===entry)) matches.push({item:entry,refIndex:indexed.indexOf(entry),score:0.3});
  if (!matches.length) {
    // Longer questions can fail phrase matching despite containing useful terms.
    // Keep negations and compare all remaining terms, independent of word order.
    const filler = new Set(["ich", "mein", "meine", "meinen", "der", "die", "das", "ein", "eine", "ist", "hat", "habe", "es", "gibt", "warum", "wie", "nach", "dem", "beim", "von", "mit", "im", "auf", "mir", "kann", "zu"]);
    const terms = [...new Set(q.split(" ").filter(term => !filler.has(term)))];
    if (terms.length >= 2) {
      return indexed
        .filter(x => {
          const text = [x.title, ...x.synonyms, ...x.tags, x.description].join(" ");
          return terms.every(term => text.includes(term));
        })
        .sort((a, b) => {
          const titleHits = (x: typeof a) => terms.filter(term => x.title.includes(term)).length;
          return titleHits(b) - titleHits(a) || a.item.titel.localeCompare(b.item.titel, "de");
        })
        .map(x => x.item);
    }
  }
  return matches
    .sort((a, b) => {
      const priority = (x: typeof a) =>
        x.item.synonyms.includes(q)
          ? 0
          : x.item.title === q
            ? 1
            : x.item.synonyms.some((s) => s.includes(q))
              ? 2
              : x.item.title.includes(q)
                ? 3
                : taskHit(x.item) ? 3.5 : 4;
      return (
        priority(a) - priority(b) ||
        (a.score ?? 1) - (b.score ?? 1) ||
        a.item.item.titel.localeCompare(b.item.item.titel, "de")
      );
    })
    .map((x) => x.item.item);
}
/** Exact function searches can open the matching reference card without duplicating articles. */
export function searchTarget(item: Content, query = "") {
  const base="/wissen/"+item.slug;
  if(item.id === "power-query-m") {
    const exact=mEntries.find(x=>normalize(x.name)===normalize(query));
    if(exact) return base+"?funktion="+encodeURIComponent(exact.name);
  }
  return base;
}
