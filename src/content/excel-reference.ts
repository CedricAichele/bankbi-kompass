import { sectionsOf, type Content } from "./schema";
export function excelEntries(items: Content[]) {
  return items.filter(x => x.bereich === "Excel" && x.art === "artikel" && x.formelreferenz).map(item => {
    const parts = sectionsOf(item.body);
    return { id:item.id, category:item.kategorie, name:item.formelreferenz!.funktion,
      input:item.formelreferenz!.eingabe, adapt:item.formelreferenz!.anpassen, version:item.formelreferenz!.version,
      use:parts["Wann brauche ich das?"], code:(item.kurzformel || parts.Beispiel).match(/(?:```|~~~)excel\s*([\s\S]*?)(?:```|~~~)/)?.[1].trim() || "",
      result:parts.Ergebnis, pitfall:parts["Typischer Fehler"] };
  });
}
