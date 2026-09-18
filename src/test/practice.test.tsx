import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { contents, byId } from "../content";
import { Reference } from "../pages/Reference";
import { searchContent } from "../lib/search";
import { parseContent, stepsOf, sectionsOf } from "../content/schema";

describe("Vertiefte Praxis und Orientierung", () => {
  it("zeigt längere Schrittfolgen, sichtbare Ergebnisse und aufklappbare Erklärungen", () => {
    render(<MemoryRouter initialEntries={["/wissen/xverweis"]}><Routes><Route path="/wissen/:slug" element={<Reference favorites={[]} onToggle={() => {}} />} /></Routes></MemoryRouter>);
    expect(screen.getByRole("heading", {name:"Ergebnis"})).toBeInTheDocument();
    expect(screen.getByRole("heading", {name:"Schritt 7"})).toBeInTheDocument();
    expect(screen.getByText("Warum funktioniert das?").closest("details")).not.toHaveAttribute("open");
  });
  it("erreichbar macht bestehende Grundbegriffe ohne Kopien derselben Inhalte", () => {
    const ids = searchContent(contents, "", {bereich:"Datenanalyse"}).map(x=>x.id);
    for (const id of ["granularitaet","schluessel","filterkontext","star-schema","begriff-zeile"])
      expect(ids).toContain(id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it.each([
    ["summe stimmt nicht", "summe-zu-hoch"],
    ["kunde mehrfach", "problem-person-mehrfach"],
    ["mehr zeilen nach join", "problem-merge-zeilen"],
    ["nur eindeutige kunden", "distinctcount"],
    ["wert aus anderer tabelle", "xverweis"],
  ])("findet das konkrete Anliegen %s", (query,id) => {
    expect(searchContent(contents,query).slice(0,5).map(x=>x.id)).toContain(id);
  });
  it("akzeptiert ausführliche Schritte, verweigert jedoch falsche Bildzuordnungen", () => {
    const item=byId("xverweis")!;
    expect(stepsOf(sectionsOf(item.body).Schritte).length).toBeGreaterThan(3);
    const raw='---\n'+JSON.stringify({...item,screenshots:[{...item.screenshots[0],schritt:99}]})+'\n---\n'+item.body;
    expect(()=>parseContent(raw)).toThrow(/nicht vorhandenen Schritt/);
  });
});
