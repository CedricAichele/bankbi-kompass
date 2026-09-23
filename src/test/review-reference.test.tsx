import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { contents, byId } from "../content";
import { searchContent, searchTarget } from "../lib/search";
import { ExcelReference } from "../components/ExcelReference";
import { MReference } from "../components/MReference";
import { excelEntries } from "../content/excel-reference";
import { archivedIdaIds } from "../content/redirects";

describe("Review: Suche und praktische Referenzen",()=>{
  it.each(["aufrunden","Number.RoundUp","nach unten auffüllen","führende Nullen","Laufzeit in Stunden"])("findet die M-Aufgabe %s unter den ersten drei Treffern",q=>{
    expect(searchContent(contents,q).slice(0,3).map(x=>x.id)).toContain("power-query-m");
  });
  it.each([["XVERWEIS","xverweis"],["SUMMEWENNS","summewenns"],["Ordnerimport","dateien-kombinieren"],["NULL","nullwerte"],["Merge","zusammenfuehren"]])("erhält den Fachartikel für %s",(q,id)=>{
    expect(searchContent(contents,q).slice(0,3).map(x=>x.id)).toContain(id);
  });
  it("respektiert Werkzeuge und Kategorien und verlinkt konkrete M-Funktionen",()=>{
    expect(searchContent(contents,"aufrunden",{bereich:"IDA"})).toEqual([]);
    const m=byId("power-query-m")!;
    expect(searchTarget(m,"Number.RoundUp")).toBe("/wissen/power-query-m?funktion=Number.RoundUp");
    expect(searchContent(contents,"Datum",{bereich:"Excel",kategorie:"Datum & Datentypen"}).every(x=>x.bereich==="Excel" && x.kategorie==="Datum & Datentypen")).toBe(true);
    for(const q of ["aufbereiten","nachschlagen","NULL","M","Excel"])
      expect(searchContent(contents,q).some(x=>archivedIdaIds.has(x.id)||x.bereich==="IDA")).toBe(false);
  });
  it("hält die Excel-Karten an die ausführlichen Artikel gebunden",()=>{
    for(const entry of excelEntries(contents)) {
      expect(byId(entry.id)?.formelreferenz).toBeDefined();
      expect(entry.code).toMatch(/^=/);
      expect(entry.code).not.toMatch(/Table\.|Text\.|CALCULATE/);
      expect(entry.result).toBeTruthy();
    }
    expect(searchContent(contents,"excel formelreferenz")[0].id).toBe("excel-formeln");
  });
  it("filtert Excel nach Aufgabe und Kategorie, zeigt Eingaben und setzt zurück",()=>{
    render(<MemoryRouter><ExcelReference/></MemoryRouter>);
    const search=screen.getByRole("searchbox",{name:"Excel-Funktion oder Aufgabe"});
    fireEvent.change(search,{target:{value:"Nachschlagen"}});
    expect(document.querySelectorAll(".excel-results .m-entry").length).toBeGreaterThan(0);
    fireEvent.change(search,{target:{value:"SORTIERENNACH"}});
    const card=document.querySelector(".excel-results .m-entry")! as HTMLElement;
    expect(within(card).getByText("Eingabezellen und Ausgangswerte")).toBeVisible();
    expect(within(card).getByRole("link")).toHaveAttribute("href","/wissen/sortierennach");
    fireEvent.change(screen.getByRole("combobox",{name:"Kategorie"}),{target:{value:"Datum & Datentypen"}});
    expect(screen.getByText(/Kein Treffer/)).toBeVisible();
    fireEvent.click(screen.getByRole("button",{name:"Filter zurücksetzen"}));
    expect(document.querySelectorAll(".excel-results .m-entry")).toHaveLength(excelEntries(contents).length);
  });
  it.each([['Text.Trim', 'Text.Trim([Ort])'],['Table.Combine','= Table.Combine({Januar, Februar})']])("zeigt den Eingabeort vor dem Code und kopiert %s korrekt",async(name,code)=>{
    const copy=vi.fn().mockResolvedValue(undefined);Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:copy}});
    render(<MemoryRouter initialEntries={["/?funktion="+encodeURIComponent(name)]}><MReference/></MemoryRouter>);
    const card=document.querySelector(".m-results .m-entry")! as HTMLElement;
    const label=card.querySelector(".code-location")!, block=card.querySelector(".codeblock")!;
    expect(label.compareDocumentPosition(block)&Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(label).toHaveTextContent(name.startsWith("Table.")?"Formelleiste – vollständiger Abfrageschritt":"Benutzerdefinierte Spalte – nur den Ausdruck eingeben");
    fireEvent.click(within(card).getByRole("button",{name:"Kopieren"}));
    expect(copy).toHaveBeenCalledWith(code);
    expect(await within(card).findByText("Kopiert")).toBeVisible();
  });
});
