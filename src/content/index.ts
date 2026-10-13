import { parseContent, validateLinks } from "./schema";
import { mEntries, mAliases } from "./m-reference";
import { daxEntries } from "./dax-reference";
import { excelEntries } from "./excel-reference";
const files = import.meta.glob("./{articles,problems,tasks}/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
export const contents = Object.values(files).map((raw) =>
  parseContent(raw as string),
);
validateLinks(contents);
const mReference = contents.find(x => x.id === "power-query-m");
if (mReference) mReference.synonyme.push(...mEntries.flatMap(x => [x.name, x.name.replaceAll(".", " "), ...(mAliases[x.name] || [])]));
const daxReference = contents.find(x => x.id === "dax-formeln");
if (daxReference) daxReference.synonyme.push(...daxEntries.flatMap(x => [x.name, ...x.synonyms]));
const excelReference = contents.find(x => x.id === "excel-formeln");
if (excelReference) excelReference.synonyme.push(...excelEntries(contents).map(x => x.name));
export const byId = (id: string) => contents.find((x) => x.id === id);
