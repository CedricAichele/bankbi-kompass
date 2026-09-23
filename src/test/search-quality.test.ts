import { describe, it, expect } from "vitest";
import { contents } from "../content";
import { searchContent } from "../lib/search";
describe("Suchqualität für den Arbeitsalltag", () => {
  it.each([
    ["calculate", ["calculate"]],
    ["filterkontext", ["filterkontext", "calculate"]],
    [
      "werte aus anderer tabelle",
      ["xverweis", "zusammenfuehren", "werte-holen"],
    ],
    ["zwei tabellen", ["zusammenfuehren", "beziehungen", "tabellen-verbinden"]],
    [
      "mehrere konten pro kunde",
      ["eine-zeile-je-person", "eins-zu-viele", "konten-pro-person"],
    ],
    ["doppelte kunden", ["dubletten", "distinctcount", "granularitaet"]],
    ["falsche summe", ["granularitaet", "eins-zu-viele", "aufgabe-summe"]],
    ["vorjahr", ["vorjahr", "dateadd"]],
    ["ytd", ["ytd", "datesytd-totalytd"]],
    ["stichtag", ["stichtag", "aktueller-stichtag"]],
    ["duplikate", ["dubletten", "dubletten-entfernen"]],
    ["xverweis", ["xverweis"]],
    ["summe wenn", ["summewenn", "summewenns"]],
    ["nullwerte", ["nullwerte", "ida-null", "aufgabe-null"]],
    ["eine zeile je person", ["eine-zeile-je-person", "gruppieren"]],
    ["csv", ["csv-import", "excel-csv", "aufgabe-csv"]],
    ["gruppieren", ["gruppieren", "ida-gruppieren"]],
    ["power query oder dax", ["power-query-oder-dax"]],
    ["kunde mehrfach", ["problem-person-mehrfach", "granularitaet", "eins-zu-viele", "eine-zeile-je-person"]],
    ["kunden mehrfach", ["problem-person-mehrfach", "granularitaet", "eins-zu-viele", "eine-zeile-je-person"]],
    ["summe stimmt nicht", ["summe-zu-hoch", "aufgabe-summe", "problem-summewenns"]],
    ["summe zu hoch", ["summe-zu-hoch", "problem-merge-zeilen", "granularitaet"]],
    ["filter reagiert nicht", ["filter-fehler", "problem-visual-slicer", "visualinteraktionen"]],
    ["slicer reagiert nicht", ["problem-visual-slicer", "filter-fehler", "visualinteraktionen"]],
    ["wert aus anderer tabelle", ["xverweis", "werte-holen", "zusammenfuehren", "related"]],
    ["zwei tabellen verbinden", ["zusammenfuehren", "beziehungen", "tabellen-verbinden"]],
    ["mehr zeilen nach join", ["problem-merge-zeilen", "ida-join-pruefen", "zusammenfuehren"]],
    ["dubletten", ["dubletten", "dubletten-finden", "excel-dubletten-finden"]],
    ["führende nullen", ["csv-import", "datenbereinigung", "ida-nullstellen"]],
    ["letzter stichtag", ["aktueller-stichtag", "stichtag"]],
    ["vorjahr leer", ["problem-vorjahr", "vorjahr", "dateadd"]],
    ["datum falsch", ["problem-datum-excel", "datum-sortieren", "excel-datum", "datenbereinigung"]],
    ["beziehung geht nicht", ["beziehung-fehler", "beziehungen", "kardinalitaet"]],
    ["eine zeile pro person", ["eine-zeile-je-person", "gruppieren", "ida-eine-zeile"]],
    ["mehrere dateien zusammenführen", ["dateien-kombinieren"]],
    ["mein Slicer hat keine Wirkung", ["problem-visual-slicer", "filter-fehler", "visualinteraktionen"]],
    ["warum gibt es nach dem Join mehr Zeilen", ["problem-merge-zeilen", "ida-join-pruefen", "zusammenfuehren"]],
  ])(
    "liefert für %s ein passendes Ergebnis unter den ersten drei",
    (query, ids) => {
      const top = searchContent(contents, query)
        .slice(0, 3)
        .map((x) => x.id);
      expect(
        top.some((id) => ids.includes(id)),
        `${query}: ${top.join(", ")}`,
      ).toBe(true);
    },
  );
});
