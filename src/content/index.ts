import { parseContent, validateLinks } from "./schema";
import { mEntries } from "./m-reference";
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
if (mReference) mReference.synonyme.push(...mEntries.flatMap(x => [x.name, x.name.replaceAll(".", " ")]));
export const byId = (id: string) => contents.find((x) => x.id === id);
