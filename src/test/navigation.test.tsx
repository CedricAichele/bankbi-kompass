import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { contents, byId } from "../content";
import { commonDaxNames, commonMEntries, powerBiAreas, excelAreas, powerQueryAreas, daxTasks } from "../content/discovery";
import { articleToc, articleBreadcrumbs } from "../lib/article-navigation";
import { daxEntries } from "../content/dax-reference";

async function open(path:string,title:string) {
  window.location.hash=path;
  const view=render(<App/>);
  const main=screen.getByRole("main");
  await within(main).findByRole("heading",{level:1,name:title});
  return {main,view};
}
describe("Aufgabenorientierte Navigation",()=>{
  it("zeigt genau sieben Hauptpunkte und behält die entfernten Einstiege auf Start",async()=>{
    const {main}=await open("/","Was möchtest du machen oder finden?");
    const links=within(screen.getByRole("navigation",{name:"Hauptnavigation"})).getAllByRole("link");
    expect(links.map(x=>x.textContent)).toEqual(["Start","Power BI","Excel","IDA","Probleme & Lösungen","Favoriten","Über"]);
    for(const target of ["/aufgaben","/werkzeugwahl"])expect(main.querySelector(`a[href="#${target}"]`)).toBeTruthy();
    expect(main.querySelectorAll(".function-card, .common-function-groups")).toHaveLength(0);
  });
  it("zeigt sechs Power-BI-Bereiche mit je drei Einstiegen und erreicht weitere Modellthemen",async()=>{
    const {main}=await open("/bereich/power-bi","Power BI");
    expect(main.querySelectorAll(".discovery-card")).toHaveLength(6);
    expect(main.querySelectorAll(".primary-links a")).toHaveLength(18);
    for(const card of main.querySelectorAll(".discovery-card"))expect(card.querySelectorAll(".primary-links a")).toHaveLength(3);
    expect(main.querySelectorAll(".catalog-level, .content-levels, .area-status")).toHaveLength(0);
    expect(main.textContent).not.toMatch(/Kernwissen|Praxisartikel/);
    expect(within(main).queryByRole("link",{name:/Kardinalität/})).not.toBeInTheDocument();
    fireEvent.click(within(main).getByRole("link",{name:"Alle Modellthemen"}));
    await within(main).findByRole("heading",{level:1,name:"Datenmodell"});
    expect(within(main).getByRole("link",{name:/Kardinalität/})).toBeVisible();
  });
  it("zeigt fünf Excel-Bereiche mit 15 Einstiegen und trennt Formelreferenz",async()=>{
    const {main}=await open("/bereich/excel","Excel");
    expect([...main.querySelectorAll(".discovery-card h2")].map(x=>x.textContent)).toEqual(["Daten vorbereiten","Formeln","Auswerten","Power Query","Probleme"]);
    expect(main.querySelectorAll(".primary-links a")).toHaveLength(15);
    expect(within(main).getByRole("link",{name:/Erweiterte Formelreferenz/})).toHaveAttribute("href","#/wissen/excel-formeln");
    expect(within(main).queryByRole("link",{name:/TEXTVERKETTEN/})).not.toBeInTheDocument();
  });
  it("hält den Power-Query-Einstieg bei sechs Bereichen und höchstens 25 direkten Themen",async()=>{
    const {main}=await open("/power-query","Power Query & Datenaufbereitung");
    expect(main.querySelectorAll(".discovery-card")).toHaveLength(6);
    expect(main.querySelectorAll(".primary-links a").length).toBeLessThanOrEqual(25);
    expect(within(main).queryByRole("link",{name:"Referenz oder Duplikat einer Abfrage?"})).not.toBeInTheDocument();
    fireEvent.click(within(main).getByRole("link",{name:"Daten laden und Schritte verstehen"}));
    await within(main).findByRole("heading",{level:1,name:"Start"});
    expect(within(main).getByRole("link",{name:"Referenz oder Duplikat einer Abfrage?"})).toBeVisible();
  });
  it("macht alle DAX-Aufgaben und 32 wichtige Funktionen ohne Suche sichtbar",async()=>{
    const {main}=await open("/dax","DAX");
    const tasks=within(main).getByRole("region",{name:"DAX-Aufgaben"});
    expect(within(tasks).getAllByRole("link")).toHaveLength(16);
    expect(within(tasks).getByRole("link",{name:/Eindeutige Kunden zählen/})).toHaveAttribute("href","#/wissen/distinctcount");
    const common=within(main).getByRole("region",{name:"Wichtige DAX-Funktionen"});
    expect(within(common).getAllByRole("link")).toHaveLength(32);
    expect([...common.querySelectorAll("a strong")].map(x=>x.textContent)).toEqual(commonDaxNames);
    expect(main.querySelectorAll(".function-card")).toHaveLength(0);
    expect(main.textContent).not.toMatch(/INFO\.|ACCRINT|464 Funktionen/);
    fireEvent.click(within(main).getByRole("link",{name:"Alle DAX-Funktionen öffnen"}));
    await within(main).findByRole("heading",{level:1,name:"DAX – Funktionen & Formeln"});
    expect(main.querySelectorAll(".function-card")).toHaveLength(30);
    expect(main.querySelector(".dax-reference > p[role=status]")).toHaveTextContent(`von ${daxEntries.length} Funktionen`);
  });
  it("priorisiert 20 M-Muster und öffnet den vollständigen Katalog bewusst",async()=>{
    const {main}=await open("/wissen/power-query-m","Power Query M – Formeln & Funktionen");
    const common=within(main).getByRole("region",{name:"Häufige M-Funktionen"});
    expect(within(common).getAllByRole("link")).toHaveLength(20);
    expect(main.querySelector(".m-catalog")).not.toHaveAttribute("open");
    fireEvent.click(within(main).getByText("Alle Funktionen & Muster anzeigen"));
    expect(main.querySelector(".m-catalog")).toHaveAttribute("open");
    fireEvent.click(within(common).getByRole("link",{name:/Text.Trim/}));
    await waitFor(()=>expect(main.querySelectorAll(".m-results details[open]")).toHaveLength(1));
  });
  it.each([["calculate","CALCULATE"],["xverweis","XVERWEIS"],["sum","SUM: Spalte summieren"]])("entfernt die Inhaltsnavigation bei %s",async(id)=>{
    const item=byId(id)!;
    const {main}=await open("/wissen/"+id,item.titel);
    expect(within(main).queryByRole("navigation",{name:"Inhaltsnavigation"})).not.toBeInTheDocument();
    expect(articleToc(item)).toEqual([]);
  });
  it("begrenzt lange TOCs auf zwei Ebenen und springt zu semantischen Workflow-Bereichen",async()=>{
    const {main}=await open("/wissen/pq-workflow","Daten in Power Query aufbereiten");
    const nav=within(main).getByRole("navigation",{name:"Inhaltsnavigation"});
    expect(nav.querySelector("ol ol ol")).toBeNull();
    expect(nav.textContent).not.toMatch(/Schritt \d/);
    for(const e of articleToc(byId("pq-workflow")!))for(const node of [e,...(e.children||[])])expect(document.getElementById(node.target),node.label).toBeTruthy();
    const target=document.getElementById("article-daten-bereinigen")!;
    target.scrollIntoView=vi.fn();
    fireEvent.click(within(nav).getByRole("button",{name:"Daten bereinigen"}));
    expect(target.scrollIntoView).toHaveBeenCalled();
    expect(target).toHaveFocus();
  });
  it.each(["power-query-m","dax-formeln","excel-formeln","dax-grundlagen","dateien-kombinieren","pq-benutzerdefiniert","pq-profiling","excel-liste-vorbereiten","excel-power-query","pivottable"])("verlinkt nur vorhandene Anker in der TOC von %s",async(id)=>{
    const item=byId(id)!;
    await open("/wissen/"+id,item.titel);
    for(const entry of articleToc(item))for(const node of [entry,...(entry.children||[])])expect(document.getElementById(node.target),node.label).toBeTruthy();
  });
  it("zeigt echte DAX- und Power-Query-Zwischenebenen",()=>{
    expect(articleBreadcrumbs(byId("calculate")!).map(x=>x.label)).toEqual(["Start","Power BI","DAX","CALCULATE"]);
    expect(articleBreadcrumbs(byId("zusammenfuehren")!).map(x=>x.label)).toEqual(["Start","Power BI","Power Query",byId("zusammenfuehren")!.titel]);
  });
  it("prüft alle direkten Ziele und erhält intern die Inhaltsebenen",()=>{
    for(const area of [...powerBiAreas,...excelAreas,...powerQueryAreas])for(const link of [...area.links,area.more])if(link.to.startsWith("/wissen/"))expect(byId(link.to.split("/").pop()!.split("?")[0]),link.label).toBeDefined();
    for(const entry of commonMEntries)expect(entry).toBeDefined();
    for(const name of [...commonDaxNames,...daxTasks.flatMap(x=>x.names)])expect(daxEntries.find(x=>x.name===name)?.article,name).toBeTruthy();
    for(const item of contents.filter(x=>x.art==="artikel"))expect(item.ebene,item.id).toBeTruthy();
  });
  it("behält historische Gruppenlinks und den IDA-Entwicklungsstand",async()=>{
    const {view}=await open("/bereich/excel?gruppe=Text%20bearbeiten","Text bearbeiten");
    expect(screen.getByRole("link",{name:"Leerzeichen entfernen: GLÄTTEN"})).toBeVisible();view.unmount();
    const {main}=await open("/bereich/ida","IDA");
    expect(within(main).getByText("In Entwicklung")).toBeVisible();
    expect(main.querySelectorAll('a[href*="/wissen/ida-"]')).toHaveLength(0);
  });
});
