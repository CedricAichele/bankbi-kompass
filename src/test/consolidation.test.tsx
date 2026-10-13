import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DaxReference } from "../components/DaxReference";
import { contents, byId } from "../content";
import { daxEntries, daxCategories, findDaxEntries } from "../content/dax-reference";
import { mEntries, mSyntax, findMEntries } from "../content/m-reference";
import { excelEntries, excelCategories } from "../content/excel-reference";
import { consolidatedRoutes, migrateIds } from "../content/redirects";
import { searchContent, searchTarget } from "../lib/search";
import { sectionsOf } from "../content/schema";
import App from "../App";
import sourceManifest from "../../docs/reference-source-manifest.json";

const coreFunctions = "SUM AVERAGE MIN MAX COUNT COUNTA COUNTROWS DISTINCTCOUNT DIVIDE CALCULATE FILTER ALL REMOVEFILTERS ALLEXCEPT VALUES DISTINCT SELECTEDVALUE HASONEVALUE SUMX AVERAGEX MINX MAXX IF SWITCH COALESCE ISBLANK RELATED RELATEDTABLE USERELATIONSHIP CROSSFILTER TREATAS LOOKUPVALUE ADDCOLUMNS SELECTCOLUMNS SUMMARIZE SUMMARIZECOLUMNS TOPN RANKX CONCATENATEX DATE YEAR MONTH DAY EOMONTH DATEADD SAMEPERIODLASTYEAR DATESYTD TOTALYTD DATESMTD TOTALMTD DATESQTD TOTALQTD PARALLELPERIOD PREVIOUSMONTH PREVIOUSYEAR".split(" ");
describe("Struktur und Referenzbestand", () => {
  it("erhält den abgeglichenen offiziellen Funktionsbestand einschließlich DISTINCT-Varianten", () => {
    expect(daxEntries.map(x => x.name).sort()).toEqual(sourceManifest.daxNames);
    expect(daxCategories).toEqual(sourceManifest.daxCategories);
    const distinct = daxEntries.find(x => x.name === "DISTINCT")!;
    expect(distinct.syntax).toContain("column");
    expect(distinct.overloads?.[0].syntax).toContain("table");
    expect(distinct.overloads?.[0].source).toContain("distinct-table-function-dax");
  });
  it("trennt Ebenen, reduziert Artikel und hält konsolidierte Inhalte aus dem Index", () => {
    expect(contents.filter(x => x.art === "artikel").length).toBeLessThan(163);
    for (const item of contents.filter(x => x.art === "artikel")) expect(item.ebene, item.id).toBeTruthy();
    expect(contents.filter(x => x.ebene === "Referenz").map(x => x.id).sort()).toEqual(["dax-formeln", "excel-formeln", "power-query-m"]);
    for (const [id, path] of Object.entries(consolidatedRoutes)) {
      expect(byId(id)).toBeUndefined();
      expect(byId(path.split("/").pop()!.split("?")[0]), id).toBeDefined();
    }
    expect(migrateIds(["matrix", "tabelle", "textteilen", "dax-median"], new Set(contents.map(x => x.id)))).toEqual(["visualwahl", "excel-text-zerlegen", "dax-formeln"]);
  });
  it("enthält alle Kategorien, eindeutige Namen und Praxisziele für jede geforderte DAX-Kernfunktion", () => {
    expect(daxCategories).toHaveLength(15);
    expect(daxEntries.length).toBeGreaterThan(400);
    expect(new Set(daxEntries.map(x => x.name)).size).toBe(daxEntries.length);
    for (const category of daxCategories) expect(findDaxEntries("", category).length, category).toBeGreaterThan(0);
    for (const name of coreFunctions) {
      const entry = daxEntries.find(x => x.name === name)!;
      expect(entry, name).toBeDefined();
      expect(entry.article, name).toBeTruthy();
      const article = byId(entry.article!)!;
      expect(article, name).toBeDefined();
      expect(article.body, name).toContain(name);
      for (const section of ["Beispiel", "Ergebnis", "Plausibilitätscheck", "Typischer Fehler"]) expect(sectionsOf(article.body)[section], name).toBeTruthy();
      expect(article.quellen, name).toContain(entry.source);
    }
    for (const e of daxEntries) {
      expect(e.syntax, e.name).toBeTruthy();
      expect(e.source).toMatch(/^https:\/\/learn.microsoft.com\/en-us\/dax\//);
      expect(["Sehr häufig", "Häufig", "Situativ", "Spezial"]).toContain(e.relevance);
      expect(e.description.length, e.name).toBeGreaterThan(15);
    }
    for (const name of ["VAR", "RETURN", "EVALUATE", "DEFINE"]) expect(daxEntries.some(x => x.name === name)).toBe(false);
    expect(daxEntries.find(x => x.name === "FORMAT")!.returnType).toBe("Text");
    expect(daxEntries.find(x => x.name === "SELECTEDVALUE")!.returnType).toContain("Skalar");
  });
  it("deckt die ergänzten M-Muster mit geprüfter Syntax ab und unterscheidet skalare Ergebnisse", () => {
    for (const name of "Text.Range Text.PositionOf Text.Split Text.Select Text.Remove Text.PadEnd Date.WeekOfYear Duration.TotalDays List.Select List.Transform List.Sort List.First List.Last Table.ReorderColumns Table.TransformColumns Table.Pivot Table.Unpivot Table.UnpivotOtherColumns Table.Join Table.ExpandTableColumn Table.ExpandRecordColumn Table.Skip Table.FirstN Table.LastN Table.RowCount Table.ColumnNames Table.Schema Record.Field Record.FieldOrDefault Record.HasFields Record.SelectFields File.Contents Folder.Files Excel.Workbook Csv.Document Table.Buffer Error.Record".split(" ")) {
      expect(mEntries.find(x => x.name === name), name).toBeDefined();
      expect(mSyntax.get(name), name).toContain(name);
    }
    expect(mEntries.find(x => x.name === "Table.RowCount")!.result).toBe("3");
    expect(mEntries.find(x => x.name === "Table.Buffer")!.note).toMatch(/langsamer/);
  });
  it("erhält Excel-Muster beim Zusammenführen und bietet alle acht Kategorien", () => {
    const entries = excelEntries(contents);
    expect(new Set(entries.map(x => x.category))).toEqual(new Set(excelCategories));
    for (const name of ["LINKS", "RECHTS", "TEIL", "TEXTVOR", "TEXTNACH", "TEXTTEILEN"]) expect(entries.find(x => x.name === name)?.id).toBe("excel-text-zerlegen");
    expect(entries.find(x => x.name === "TEXTTEILEN")!.version).toContain("nicht Excel 2021");
  });
  it.each(["eindeutige kunden", "wert andere tabelle", "filter ändern", "zeilenweise rechnen", "division durch null", "auswahl slicer", "vorjahr", "rang", "top 10", "text zusammen", "top kunden"])("erschließt DAX über %s", query => {
    expect(findDaxEntries(query).length).toBeGreaterThan(0);
    expect(searchContent(contents, query).slice(0,3).map(x => x.id)).toContain("dax-formeln");
  });
  it.each([["leerzeichen", "Text.Trim"], ["monat ende", "Date.EndOfMonth"], ["tabelle filtern", "Table.SelectRows"], ["doppelte", "Table.Distinct"], ["join", "Table.NestedJoin"]])("findet das M-Arbeitsproblem %s", (q, name) => {
    expect(findMEntries(q).map(x => x.name)).toContain(name);
    expect(searchTarget(byId("power-query-m")!, q)).toContain(encodeURIComponent(name));
  });
  it("öffnet DAX-Suchtreffer direkt und hält Excel-Werkzeugfilter ein", () => {
    expect(searchTarget(byId("dax-formeln")!, "eindeutige kunden")).toBe("/wissen/dax-formeln?funktion=DISTINCTCOUNT");
    expect(searchTarget(byId("dax-formeln")!, "INFO.VIEW.TABLES")).toContain("INFO.VIEW.TABLES");
    expect(searchContent(contents, "SUMX", {bereich:"Excel"}).some(x => x.id === "dax-formeln")).toBe(false);
  });
});
describe("DAX-Referenz bedienen", () => {
  it("zeigt Grundlagen vor einer begrenzten Liste und blättert weiter", () => {
    render(<MemoryRouter><DaxReference /></MemoryRouter>);
    expect(screen.getByRole("heading", {name:"DAX verstehen, bevor du eine Formel kopierst"})).toBeVisible();
    expect(document.querySelectorAll(".function-card")).toHaveLength(30);
    expect(document.querySelectorAll(".function-card[open]")).toHaveLength(0);
    const first = document.querySelector(".function-card summary")!.textContent;
    fireEvent.click(screen.getByRole("button", {name:"Weitere Funktionen"}));
    expect(document.querySelector(".function-card summary")!.textContent).not.toBe(first);
    expect(document.querySelector(".dax-reference > p[role=status]")!.textContent).toContain("Seite 2");
  });
  it("erhält Direktfilter, zeigt ein Beispiel und setzt alle Filter zurück", () => {
    render(<MemoryRouter initialEntries={["/?funktion=CALCULATE&gruppe=Filter&haeufig=1"]}><DaxReference /></MemoryRouter>);
    const card = document.querySelector(".function-card")! as HTMLElement;
    expect(document.querySelectorAll(".function-card")).toHaveLength(1);
    expect(card).toHaveAttribute("open");
    expect(within(card).getByRole("heading", {name:"Mini-Beispiel"})).toBeVisible();
    expect(screen.getByRole("checkbox")).toBeChecked();
    fireEvent.change(screen.getByRole("combobox", {name:"Praxisrelevanz"}), {target:{value:"Spezial"}});
    expect(screen.getByText(/Kein Treffer/)).toBeVisible();
    fireEvent.click(screen.getByRole("button", {name:"Filter zurücksetzen"}));
    expect(screen.getByRole("searchbox")).toHaveValue("");
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(document.querySelectorAll(".function-card")).toHaveLength(30);
  });
  it("begrenzt Häufigkeit und kennzeichnet Modellmetadaten als fortgeschritten", () => {
    render(<MemoryRouter initialEntries={["/?gruppe=INFO&funktion=INFO.VIEW.TABLES"]}><DaxReference /></MemoryRouter>);
    expect(document.querySelectorAll(".function-card")).toHaveLength(1);
    expect(document.querySelector(".function-card summary")!.textContent).toContain("Neu / Fortgeschritten");
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText(/Kein Treffer/)).toBeVisible();
  });
  it("leitet alte Visual-, Text- und Medianadressen auf nutzbare Ziele um", async () => {
    for (const [old, title] of [["matrix", "Welches Power-BI-Visual brauche ich?"], ["textteilen", "Text in Excel zerlegen: Position oder Trennzeichen?"], ["dax-median", "DAX – Funktionen & Formeln"]]) {
      window.location.hash="/wissen/"+old;
      const view=render(<App />);
      expect(await screen.findByRole("heading", {level:1,name:title})).toBeVisible();
      if(old==="dax-median") expect(screen.getByRole("searchbox", {name:"Funktion oder Aufgabe"})).toHaveValue("MEDIAN");
      view.unmount();
    }
  });
});
