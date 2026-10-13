import { sectionsOf, type Content } from "./schema";
export function excelEntries(items: Content[]) {
  return items.filter(x => x.bereich === "Excel" && x.art === "artikel" && (x.formelreferenz || x.formelreferenzen)).flatMap(item => {
    const parts = sectionsOf(item.body);
    const category = excelCategory(item);
    if (item.formelreferenzen) return item.formelreferenzen.map(f => ({ id:item.id, category, name:f.funktion,
      input:f.eingabe, adapt:f.anpassen, version:f.version, use:f.zweck, code:f.code, result:f.ergebnis, pitfall:f.falle }));
    return [{ id:item.id, category, name:item.formelreferenz!.funktion,
      input:item.formelreferenz!.eingabe, adapt:item.formelreferenz!.anpassen, version:item.formelreferenz!.version,
      use:parts["Wann brauche ich das?"], code:(item.kurzformel || parts.Beispiel).match(/(?:```|~~~)excel\s*([\s\S]*?)(?:```|~~~)/)?.[1].trim() || "",
      result:parts.Ergebnis, pitfall:parts["Typischer Fehler"] }];
  });
}
export const excelCategories = ["Nachschlagen", "Aggregation", "Logik", "Text", "Datum", "Dynamische Arrays", "Fehler", "Statistik"];
function excelCategory(item: Content) {
  if (["mittelwertwenn", "mittelwertwenns"].includes(item.id)) return "Statistik";
  if (["wennfehler", "wennnv", "aggregat", "excel-leere-zellen"].includes(item.id)) return "Fehler";
  if (["excel-filtern", "eindeutig", "sortieren", "sortierennach"].includes(item.id)) return "Dynamische Arrays";
  const categories: Record<string,string> = {"Nachschlagen & Zuordnen":"Nachschlagen", "Aggregieren":"Aggregation", "Logik & Fehlerbehandlung":"Logik", "Text bearbeiten":"Text", "Datum & Datentypen":"Datum"};
  return categories[item.kategorie] || "Statistik";
}
