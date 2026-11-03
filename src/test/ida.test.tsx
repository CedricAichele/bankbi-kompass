import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { contents, byId } from "../content";
import { archivedIdaIds } from "../content/redirects";
import { idaPublicIds, idaLegacyTargets } from "../content/ida";
import { idaFunctions, idaCategories, idaAvailability, findIdaFunctions } from "../content/ida-reference";
import { IdaReference } from "../components/IdaReference";
import { articleToc, articleBreadcrumbs } from "../lib/article-navigation";
import { scanContent } from "../lib/content-safety";
import { searchContent, searchTarget } from "../lib/search";
import { sectionsOf } from "../content/schema";
import { documentationLabel } from "../lib/sources";

describe("Öffentlicher IDA-Bereich",()=>{
  it("enthält genau 15 neu bewertete Sammelartikel mit Beispielen, Quellen und Kontrollen",()=>{
    const ida=contents.filter(x=>x.bereich==="IDA");
    expect(ida.map(x=>x.id).sort()).toEqual([...idaPublicIds].sort());
    expect(ida).toHaveLength(15);
    for(const item of ida){
      expect(archivedIdaIds.has(item.id)).toBe(false);
      expect(item.screenshots).toHaveLength(0);
      expect(item.quellen.length).toBeGreaterThan(0);
      expect(scanContent(JSON.stringify(item))).toEqual([]);
      const sections=sectionsOf(item.body);
      for(const name of ["Schritte","Beispiel","Ergebnis","Plausibilitätscheck","Typischer Fehler"])expect(sections[name],item.id+name).toBeTruthy();
      expect(item.body.length,item.id).toBeGreaterThan(1000);
    }
    expect(byId("ida-ci-batch")!.body).toContain("kein aCI-Batch-Dateischema");
    expect(byId("ida-gvm-datenbasis")!.body).toContain("keine zugesicherte automatische");
  });
  it("zeigt drei Säulen und die Referenz bei unverändert sieben Hauptpunkten",async()=>{
    window.location.hash="/bereich/ida";render(<App/>);
    await screen.findByRole("heading",{level:1,name:"IDA / Cognos"});
    const main=screen.getByRole("main");
    expect(main.querySelectorAll(".ida-areas .discovery-card")).toHaveLength(3);
    for(const name of ["Auswertungen & Reporting","GVM","aCI-Batch","Formeln & Funktionen"])expect(within(main).getByRole("heading",{level:2,name})).toBeVisible();
    expect(within(main).getByRole("link",{name:"IDA / Cognos – Formeln & Funktionen"})).toHaveAttribute("href","#/wissen/ida-formeln");
    expect(within(screen.getByRole("navigation",{name:"Hauptnavigation"})).getAllByRole("link")).toHaveLength(7);
    expect(within(main).queryByText("In Entwicklung")).not.toBeInTheDocument();
    expect(main.querySelectorAll(".function-card")).toHaveLength(0);
    expect(main.querySelectorAll(".primary-links a")).toHaveLength(10);
    fireEvent.click(within(main).getByRole("link",{name:"Alle Reporting-Themen"}));
    await within(main).findByRole("heading",{level:1,name:"Auswertungen & Reporting"});
    expect(main.querySelectorAll(".catalog-grid a")).toHaveLength(10);
  });
  it("hält alle Archivkennungen unveröffentlicht und hat für jede ein geprüftes Ziel",()=>{
    for(const id of archivedIdaIds){expect(byId(id)).toBeUndefined();expect(idaLegacyTargets[id],id).toBeTruthy();expect(idaPublicIds).toContain(idaLegacyTargets[id].split("?")[0]);}
    expect(articleBreadcrumbs(byId("ida-prompts")!).map(x=>x.label)).toEqual(["Start","IDA / Cognos","Auswertungen & Reporting",byId("ida-prompts")!.titel]);
  });
  it("prüft die synthetische Join-Kontrolle unabhängig vom Artikeltext",()=>{
    const konten=[{person:"Demo-A",betrag:100},{person:"Demo-A",betrag:200},{person:"Demo-B",betrag:50}];
    const partner=["Demo-A","Demo-A","Demo-B"];
    const joined=konten.flatMap(k=>partner.filter(p=>p===k.person).map(()=>k));
    expect(konten.reduce((s,k)=>s+k.betrag,0)).toBe(350);
    expect(joined).toHaveLength(5);expect(joined.reduce((s,k)=>s+k.betrag,0)).toBe(650);
    expect(new Set(konten.map(k=>k.person)).size).toBe(2);
    expect(byId("ida-plausibilitaet")!.body).toContain("650");
  });
});
describe("Cognos-Funktionen und Sprachkontexte",()=>{
  it("begrenzt Schnellbereich und trennt alle fünf Verfügbarkeitsklassen",()=>{
    expect(idaFunctions).toHaveLength(75);
    expect(idaFunctions.filter(e=>e.frequent)).toHaveLength(40);
    expect(new Set(idaFunctions.map(e=>e.id)).size).toBe(75);
    expect(idaAvailability).toHaveLength(5);
    for(const c of idaAvailability)expect(idaFunctions.some(e=>e.availability===c),c).toBe(true);
    for(const c of idaCategories)expect(idaFunctions.some(e=>e.category===c),c).toBe(true);
    for(const e of idaFunctions){
      for(const field of ["use","syntax","input","code","result","adapt","pitfall","source","where","support"])expect(e[field as keyof typeof e],e.id+field).toBeTruthy();
      expect(e.source).toMatch(/^https:\/\/(?:www\.ibm\.com|public\.dhe\.ibm\.com)\//);
      expect(scanContent(JSON.stringify(e),{ida:true}),e.id).toEqual([]);
      if(e.availability==="Dimensional / OLAP"||e.availability==="Datenquellenabhängig")expect(e.frequent).toBe(false);
    }
    expect(idaFunctions.find(e=>e.id==="sql-regexp-like")!.support).toContain("passthrough-only");
    expect(idaFunctions.find(e=>e.id==="sql-lag")!.where).toContain("SQL");
    expect(idaFunctions.find(e=>e.id==="promptmany")!.availability).toBe("Prompt-/Makrofunktion");
  });
  it("verwendet Cognos-Schreibweisen und behandelt SQL-Namen nur als Suchalias",()=>{
    for(const [alias,name] of [["sum","total"],["avg","average"],["min","minimum"],["max","maximum"],["round","_round"],["monatsende","_last_of_month"]]){
      expect(findIdaFunctions(alias).some(e=>e.name.split(" · ")[0]===name),alias).toBe(true);
    }
    expect(idaFunctions.find(e=>e.id==="cast-number")!.code).toBe("cast([Textzahl], decimal(10, 2))");
    expect(idaFunctions.find(e=>e.id==="count-distinct")!.code).toBe("count(distinct [Person] for report)");
  });
  it.each([["eindeutige personen","count-distinct"],["zeilen zählen","count"],["summe","total"],["wenn dann","case"],["leerwert","coalesce"],["mehrere werte prompt","promptmany"],["rang","rank"],["vorherige zeile","sql-lag"],["text enthält","position"],["monat letzter tag","last-of-month"]])("findet %s über Alltagssprache",(q,id)=>{
    expect(findIdaFunctions(q).map(e=>e.id)).toContain(id);
    expect(searchContent(contents,"ida "+q,{bereich:"IDA"}).slice(0,3).map(x=>x.id)).toContain("ida-formeln");
    expect(searchTarget(byId("ida-formeln")!,"ida "+q)).toBe((id==="sql-lag"?"/ida/referenz":"/wissen/ida-formeln")+"?funktion="+id);
  });
  it.each(["gvm","geschäftsvorfallmanagement","ci batch","aci batch","massenänderung","bestandsänderung","burst","kreuztabelle"])("erschließt den Themenbereich %s",q=>{
    expect(searchContent(contents,q).slice(0,3).some(x=>x.bereich==="IDA")).toBe(true);
  });
  it("zeigt ohne Suche 40 kompakte Einstiege und keine OLAP-/SQL-Spezialfunktionen",()=>{
    render(<MemoryRouter><IdaReference/></MemoryRouter>);
    const common=screen.getByLabelText("Häufige IDA-Funktionen");
    expect(within(common).getAllByRole("link")).toHaveLength(40);
    expect(common.textContent).not.toMatch(/currentMember|regexp_|dense_rank|row_number/);
    expect(screen.getByRole("link",{name:"Alle Funktionen anzeigen"})).toHaveAttribute("href","/ida/referenz");
    expect(screen.getByRole("link",{name:/Wert aus vorheriger Zeile/})).toHaveAttribute("href","/ida/referenz?funktion=sql-lag");
  });
  it("öffnet gefilterte Ausdrucksdetails mit Eingabeort, Sollwert und Kopierfunktion",async()=>{
    const copy=vi.fn().mockResolvedValue(undefined);Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:copy}});
    render(<MemoryRouter initialEntries={["/?funktion=promptmany"]}><IdaReference/></MemoryRouter>);
    const detail=screen.getByRole("region",{name:"Ausgewählter IDA-Ausdruck"});
    for(const name of ["Wo eingeben?","Ausgangswert","Erwartetes Ergebnis","Was muss ich anpassen?","Typischer Fehler"])expect(within(detail).getByRole("heading",{name})).toBeVisible();
    expect(within(detail).getByText("Prompt-/Makrofunktion")).toBeVisible();
    fireEvent.click(within(detail).getByRole("button",{name:"Kopieren"}));
    await waitFor(()=>expect(copy).toHaveBeenCalledWith("[Segment] in (#promptmany('pSegment', 'string')#)"));
  });
  it("macht den erweiterten Bestand separat filterbar und erhält Pagination und Direktfilter",()=>{
    render(<MemoryRouter initialEntries={["/?funktion=sql-lag"]}><IdaReference extended/></MemoryRouter>);
    expect(document.querySelectorAll(".function-card")).toHaveLength(1);
    expect(document.querySelector(".function-card")).toHaveAttribute("open");
    expect(screen.getByRole("heading",{name:"Wo eingeben?"})).toBeVisible();
    fireEvent.click(screen.getByRole("button",{name:"Filter zurücksetzen"}));
    expect(document.querySelectorAll(".function-card")).toHaveLength(25);
    fireEvent.click(screen.getByRole("button",{name:"Weitere Funktionen"}));
    expect(document.querySelector(".ida-reference > p[role=status]")).toHaveTextContent("Seite 2");
    fireEvent.change(screen.getByRole("combobox",{name:"Herkunft / Verfügbarkeit"}),{target:{value:"Dimensional / OLAP"}});
    expect(document.querySelectorAll(".function-card")).toHaveLength(8);
    expect(document.querySelectorAll(".function-card[open]")).toHaveLength(0);
  });
  it("verweist in der IDA-TOC nur auf vorhandene semantische Anker",async()=>{
    window.location.hash="/wissen/ida-formeln";render(<App/>);
    await screen.findByRole("heading",{level:1,name:"IDA / Cognos – Formeln & Funktionen"});
    for(const e of articleToc(byId("ida-formeln")!))expect(document.getElementById(e.target),e.target).toBeTruthy();
    expect(screen.getByRole("navigation",{name:"Inhaltsnavigation"}).textContent).not.toContain("promptmany");
  });
});
describe("IDA-Vertraulichkeitsprüfung",()=>{
  it.each([
    "Package-Name: SYNTH_PACKAGE_ALPHA", "Vorlagennummer: SYNTH_TEMPLATE_ALPHA", "Administrationspfad: /intern/demo", "TECH_KEY = SYNTHETISCHER_WERT", "[SYNTH_NAMESPACE].[SYNTH_QUERY].[SYNTH_FIELD]", "synthetische_datei.csv",
  ])("erkennt ausschließlich erfundene Prüfmuster und gibt keine Werte aus",value=>{
    const findings=scanContent(value,{ida:true});expect(findings.length).toBeGreaterThan(0);expect(findings.join(" ")).not.toContain(value);
  });
  it("prüft lange Nummern und fremde URLs weiterhin, erlaubt aber genau belegte öffentliche Produktquellen",()=>{
    expect(scanContent(Array(12).fill("7").join(""),{ida:true})).toContain("Mögliche lange Kontonummer");
    expect(scanContent("https://unbekannt.example.invalid/report",{ida:true})).toContain("URL außerhalb der freigegebenen öffentlichen Quellen");
    expect(scanContent("https://www.rurberatung.de/",{ida:true})).toEqual([]);
    expect(scanContent("https://www.rurberatung.de/interner-pfad",{ida:true})).not.toEqual([]);
    expect(documentationLabel("https://www.rurberatung.de/")).toBe("Öffentliche Produkt- / Praxisquelle");
  });
});
