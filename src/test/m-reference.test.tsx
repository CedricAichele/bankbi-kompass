import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { mEntries, mCategories, findMEntries } from "../content/m-reference";
import { contents, byId } from "../content";
import { mRelated } from "../components/MDetailContext";
import { searchContent } from "../lib/search";
import { MReference } from "../components/MReference";

describe("Praktische M-Referenz", () => {
  it("zeigt eine datenbasierte Übersicht und öffnet mehrere gewählte Details", () => {
    render(<MemoryRouter><MReference/></MemoryRouter>);
    const overview=screen.getByRole("region",{name:"Formelübersicht"});
    expect(within(overview).getAllByRole("button")).toHaveLength(mEntries.length);
    expect(within(overview).getByText("Text.Trim([Ort])")).toBeVisible();
    expect(document.querySelectorAll(".m-results details")).toHaveLength(0);
    fireEvent.click(screen.getByRole("button",{name:"Details zu Text.Trim"}));
    fireEvent.click(screen.getByRole("button",{name:"Details zu Table.Group"}));
    expect(document.querySelectorAll(".m-results details[open]")).toHaveLength(2);
    expect(screen.getByRole("region",{name:"Nachher: zwei Gruppen"})).toBeVisible();
    for(const entry of mEntries) expect(byId(mRelated(entry))).toBeDefined();
  });
  it("erhält kombinierte Direktfilter und macht Vorschauen nicht kopierbar",()=>{
    render(<MemoryRouter initialEntries={["/?funktion=Table.NestedJoin&gruppe=Merge%20%2F%20Join"]}><MReference/></MemoryRouter>);
    const overview=screen.getByRole("region",{name:"Formelübersicht"});
    expect(within(overview).queryByRole("button",{name:"Kopieren"})).not.toBeInTheDocument();
    expect(within(overview).getByText(/gekürzt/)).toBeVisible();
    expect(document.querySelectorAll(".m-results details[open]")).toHaveLength(1);
    expect(screen.getByRole("searchbox")).toHaveValue("Table.NestedJoin");
  });
  it("findet Arbeitsfragen, normalisierte Funktionsnamen und kombinierte Filter", () => {
    expect(findMEntries("text trim").map(x=>x.name)).toContain("Text.Trim");
    expect(findMEntries("Monatsultimo", "Datum").map(x=>x.name)).toEqual(["Date.EndOfMonth"]);
    expect(findMEntries("text trim", "Zahlen")).toEqual([]);
    expect(findMEntries("unbekanntefunktionxyz")).toEqual([]);
    expect(new Set(mEntries.map(x=>x.name)).size).toBe(mEntries.length);
    expect(mEntries.length).toBeGreaterThanOrEqual(50);
    expect(mEntries.length).toBeLessThanOrEqual(80);
    for(const category of mCategories) expect(findMEntries("", category).length).toBeGreaterThan(0);
  });
  it.each([
    "m", "m code", "power query formel", "power query code", "text trim", "leerzeichen entfernen", "großschreibung", "monatsende", "datum jahr", "fehler abfangen", "try otherwise", "if power query", "and power query", "or power query", "null power query", "table selectrows", "list contains", "Table.NestedJoin", "Duration.TotalHours",
  ])("führt die globale Suche %s zur Referenz", query => {
    expect(searchContent(contents,query).slice(0,3).map(x=>x.id)).toContain("power-query-m");
  });
  it.each([
    "neue datei automatisch", "monatliche datei", "neue excel datei", "ordner power bi", "dateien automatisch einlesen", "bericht automatisch aktualisieren", "immer neue dateien", "monatliche dateien kombinieren", "dateien in ordner legen", "neue datei refresh", "folder connector",
  ])("führt die Frage %s zum Ordnerablauf", query => {
    expect(searchContent(contents,query).slice(0,3).map(x=>x.id)).toContain("dateien-kombinieren");
  });
  it("öffnet einen verlinkten Funktionsfilter, kopiert den Ausdruck und setzt Filter zurück", async () => {
    const copy = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {configurable:true, value:{writeText:copy}});
    render(<MemoryRouter initialEntries={["/wissen/power-query-m?funktion=Text.Trim"]}><MReference /></MemoryRouter>);
    const result = document.querySelector(".m-results")! as HTMLElement;
    expect(result.querySelectorAll("details")).toHaveLength(1);
    expect(within(result).getByText("Ausgangswert")).toBeVisible();
    fireEvent.click(within(result).getByRole("button", {name:"Kopieren"}));
    expect(copy).toHaveBeenCalledWith("Text.Trim([Ort])");
    expect(await within(result).findByText("Kopiert")).toBeVisible();
    fireEvent.change(screen.getByRole("combobox",{name:"Kategorie"}), {target:{value:"Zahlen"}});
    expect(screen.getByText(/Kein Treffer/)).toBeVisible();
    fireEvent.click(screen.getByRole("button",{name:"Filter zurücksetzen"}));
    expect(result.querySelectorAll("details")).toHaveLength(0);
    expect(screen.getAllByRole("button",{name:/Details zu/})).toHaveLength(mEntries.length);
    expect(screen.getByRole("searchbox")).toHaveValue("");
  });
});
