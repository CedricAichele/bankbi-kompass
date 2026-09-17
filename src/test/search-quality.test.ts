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
    ["parameter", ["ida-parameter", "ida-prompt"]],
    ["nullwerte", ["nullwerte", "ida-null", "aufgabe-null"]],
    ["eine zeile je person", ["eine-zeile-je-person", "gruppieren"]],
    ["csv", ["csv-import", "excel-csv", "aufgabe-csv"]],
    ["gruppieren", ["gruppieren", "ida-gruppieren"]],
    ["power query oder dax", ["power-query-oder-dax"]],
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
