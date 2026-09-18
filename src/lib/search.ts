import Fuse from "fuse.js";
import type { Content } from "../content/schema";
import { toolsCatalog } from "../content/catalog";
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
    ],
  });
  return fuse
    .search(q)
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
                : 4;
      return (
        priority(a) - priority(b) ||
        (a.score ?? 1) - (b.score ?? 1) ||
        a.item.item.titel.localeCompare(b.item.item.titel, "de")
      );
    })
    .map((x) => x.item.item);
}
