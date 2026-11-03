import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "../App";
import { contents, byId } from "../content";
import { idaPublicIds, idaLegacyTargets } from "../content/ida";
import { archivedIdaIds, legacyIds, migrateIds } from "../content/redirects";
import { powerQueryGroups, toolsCatalog } from "../content/catalog";
import { searchContent } from "../lib/search";
import { sectionsOf, stepsOf } from "../content/schema";

describe("Öffentliche Architektur", () => {
  it("hält archivierte IDA-Inhalte aus Index, Suche, Katalog und Favoriten fern", () => {
    for (const id of archivedIdaIds) expect(byId(id)).toBeUndefined();
    for (const query of ["IDA", "Cognos", "Parameter", "", "ida-filter"])
      expect(searchContent(contents, query).some(x => archivedIdaIds.has(x.id))).toBe(false);
    expect(migrateIds([...archivedIdaIds], new Set(contents.map(x=>x.id))).every(id=>idaPublicIds.includes(id))).toBe(true);
    expect(toolsCatalog.find(t=>t.name==="IDA")!.groups.map(g=>g.title)).toEqual(["Auswertungen & Reporting","GVM","aCI-Batch","Formeln & Funktionen"]);
  });
  it.each([...archivedIdaIds])("leitet den archivierten Direktlink %s auf ein neu geprüftes Ziel um",async(id)=>{
    const target=idaLegacyTargets[id];
    expect(target,id).toBeTruthy();
    window.location.hash="/wissen/"+id;
    render(<App/>);
    const item=byId(target.split("?")[0])!;
    expect(await screen.findByRole("heading",{level:1,name:item.titel})).toBeVisible();
    expect(window.location.hash).toBe("#/wissen/"+target);
    expect(byId(id)).toBeUndefined();
    expect(within(screen.getByRole("main")).queryAllByRole("link").every(x=>!archivedIdaIds.has((x.getAttribute("href")||"").split("/").pop()!.split("?")[0]))).toBe(true);
  });
  it("führt die IDA-Suche einschließlich Vorschlag zum öffentlichen Bereich", async () => {
    window.location.hash = "/";
    render(<App />);
    const input = await screen.findByRole("textbox", {name:"Aufgabe oder Funktion suchen"});
    fireEvent.focus(input);
    fireEvent.change(input, {target:{value:"IDA"}});
    expect(screen.getByRole("link", {name:"IDA / Cognos öffnen"})).toHaveAttribute("href", "#/bereich/ida");
    fireEvent.submit(input.closest("form")!);
    expect(await screen.findByRole("heading", {level:1, name:"IDA / Cognos"})).toBeVisible();
  });
  it("erhält zusammengeführte URLs und vermeidet doppelte Katalogeinträge", () => {
    for (const [old,target] of Object.entries(legacyIds)) {
      expect(byId(old)).toBeUndefined();
      expect(byId(target), old).toBeDefined();
    }
    for (const groups of [...toolsCatalog.map(t=>t.groups), powerQueryGroups]) {
      const ids=groups.flatMap(g=>g.items.map(x=>x.id));
      expect(new Set(ids).size).toBe(ids.length);
      for(const id of ids) expect(byId(id), id).toBeDefined();
    }
  });
  it("verbindet Workflow, Profiling und gemeinsame Excel-Transformationen", () => {
    expect(stepsOf(sectionsOf(byId("pq-workflow")!.body).Schritte)).toHaveLength(18);
    const profiling=byId("pq-profiling")!.body;
    for(const term of ["Spaltenqualität","Spaltenverteilung","Spaltenprofil","1000","Gesamter Datensatz","distinct","unique"]) expect(profiling).toContain(term);
    expect(byId("excel-power-query")!.body).toContain("#/wissen/pq-workflow");
    for(const item of contents) expect(sectionsOf(item.body).Voraussetzungen || "",item.id).not.toMatch(/(?:synthetische|Demo-|Beispiel-)datei (?:öffnen|laden|erstellen)|lege.*Demodaten/i);
  });
  it.each([
    ["daten bereinigen", "pq-workflow"], ["neue daten power bi", "daten-laden"],
    ["was nach import", "pq-workflow"], ["spaltenqualität", "pq-profiling"],
    ["spaltenprofil", "pq-profiling"], ["fehlerhafte werte", "pq-fehler"],
    ["nullwerte", "nullwerte"], ["doppelte kunden", "dubletten"],
    ["mehrere konten pro kunde", "konten-pro-person"], ["mehr zeilen nach merge", "zusammenfuehren"],
    ["tabellen verbinden", "zusammenfuehren"], ["tabellen untereinander", "anhaengen"],
    ["eine zeile pro kunde", "gruppieren"], ["wert aus anderer tabelle", "xverweis"],
  ])("findet %s unter den ersten drei Treffern", (query,id)=>{
    expect(searchContent(contents,query).slice(0,3).map(x=>x.id)).toContain(id);
  });
});
