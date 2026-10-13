import data from "./dax-functions.json";
export type DaxEntry = {
  name: string; category: string; returnType: string; relevance: string;
  description: string; syntax: string; source: string; advanced: boolean;
  support: string; synonyms: string[]; article?: string; example?: string; result?: string;
  overloads?: {label: string; syntax: string; source: string}[];
};
export const daxEntries: readonly DaxEntry[] = data.functions;
export const daxCategories = data.categories;
export const daxChecked = data.checked;
export const daxSource = data.index;
export const referenceNormalize = (s: string) => s.toLocaleLowerCase("de").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, " ").trim();
export function findDaxEntries(query: string, category = "", relevance = "", frequentOnly = false) {
  const words = referenceNormalize(query).split(/\s+/).filter(Boolean);
  return daxEntries.filter(e => (!category || e.category === category)
    && (!relevance || e.relevance === relevance)
    && (!frequentOnly || ["Sehr häufig", "Häufig"].includes(e.relevance))
    && words.every(w => referenceNormalize([e.name, e.category, e.description, ...e.synonyms].join(" ")).includes(w)));
}
