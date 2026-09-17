export const legacyIds: Record<string, string> = {
  kundenstruktur: "eine-zeile-je-person",
  stichtagsreporting: "stichtag",
  vertriebssteuerung: "plan-ist",
  produktanalyse: "stichtag",
  laufzeitanalyse: "ida-vorgang",
  kundenansprache: "personen-zaehlen",
  "management-reporting": "plan-ist",
  visualisierung: "matrix",
  "power-bi": "power-query",
  "erster-bericht": "measure",
};
export function migrateIds(ids: string[], valid: Set<string>) {
  return [
    ...new Set(
      ids.map((id) => legacyIds[id] || id).filter((id) => valid.has(id)),
    ),
  ];
}
