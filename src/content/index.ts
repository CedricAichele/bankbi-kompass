import { parseContent, validateLinks } from "./schema";
const files = import.meta.glob("./{articles,problems,tasks}/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
export const contents = Object.values(files).map((raw) =>
  parseContent(raw as string),
);
validateLinks(contents);
export const byId = (id: string) => contents.find((x) => x.id === id);
