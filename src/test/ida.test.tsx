import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { contents, byId } from "../content";
import { archivedIdaIds } from "../content/redirects";
import { idaPublicIds, idaLegacyTargets, idaSectionKey } from "../content/ida";
import { idaFunctions, idaCategories, idaAvailability, findIdaFunctions } from "../content/ida-reference";
import { IdaReference } from "../components/IdaReference";
import { articleToc, articleBreadcrumbs } from "../lib/article-navigation";
import { scanContent } from "../lib/content-safety";
import { searchContent, searchTarget } from "../lib/search";
import { sectionsOf, parseContent } from "../content/schema";
import { documentationLabel } from "../lib/sources";

describe("IDA als persönliche Notizsammlung",()=>{
  it("enthält vier eigenständige Notizseiten ohne vorgeschriebene Tutorialabschnitte",()=>{
    const ida=contents.filter(x=>x.bereich==="IDA");
    expect(ida.map(x=>x.id).sort()).toEqual([...idaPublicIds].sort());
    expect(ida).toHaveLength(4);
    for(const item of ida){
      expect(item.darstellung).toBe("ida-note");
      expect(item.screenshots).toHaveLength(0);
      expect(item.verwandteThemen.length).toBeLessThanOrEqual(4);
      expect(item.quellen.length).toBeGreaterThan(0);
      expect(scanContent(JSON.stringify(item))).toEqual([]);
      expect(item.body).not.toMatch(/P-A|K-A1|Demo-A|Ergebnis = 350/);
      for(const name of ["Wann brauche ich das?","Voraussetzungen","Schritte","Ergebnis","Plausibilitätscheck","Warum funktioniert das?","Was muss ich anpassen?","Typischer Fehler"])expect(sectionsOf(item.body)[name],item.id+name).toBeUndefined();
    }
    expect(byId("ida-gvm")!.body).toContain("welche Vorlage aktiv verwendet wird");
    expect(byId("ida-ci-batch")!.body).toContain("kein aCI-Batch-Dateischema");
  });
  it("zeigt vier direkte Einstiege bei unverändert sieben Hauptpunkten",async()=>{
    window.location.hash="/bereich/ida";render(<App/>);
    await screen.findByRole("heading",{level:1,name:"IDA / Cognos"});
    const main=screen.getByRole("main");
    expect(main.querySelectorAll(".ida-note-index li")).toHaveLength(4);
    expect(within(main).getByRole("link",{name:"Auswertungen & Reporting"})).toHaveAttribute("href","#/wissen/ida-reporting");
    expect(within(screen.getByRole("navigation",{name:"Hauptnavigation"})).getAllByRole("link")).toHaveLength(7);
    expect(main.querySelectorAll(".discovery-card, .function-card")).toHaveLength(0);
    fireEvent.click(within(main).getByRole("link",{name:"Auswertungen & Reporting"}));
    await within(main).findByRole("heading",{level:1,name:"Auswertungen & Reporting"});
    expect(main.querySelector(".ida-note")).toBeTruthy();
    expect(main.querySelectorAll(".answer,.pitfall,.reference-grid,.context-tags")).toHaveLength(0);
    expect(within(main).getByRole("navigation",{name:"Weiterführend"}).querySelectorAll("a")).toHaveLength(3);
    expect(articleToc(byId("ida-reporting")!)).toHaveLength(9);
    for(const entry of articleToc(byId("ida-reporting")!)){expect(entry.children).toBeUndefined();expect(document.getElementById(entry.target)).toBeTruthy();}
    expect(articleBreadcrumbs(byId("ida-reporting")!).map(x=>x.label)).toEqual(["Start","IDA / Cognos","Auswertungen & Reporting"]);
  });
  it("hält alle sechzig ersetzten IDs aus dem öffentlichen Index und verlinkt echte Abschnitte",()=>{
    expect(archivedIdaIds.size).toBe(60);
    for(const id of archivedIdaIds){
      expect(byId(id)).toBeUndefined();
      const [target,query]=idaLegacyTargets[id].split("?");
      expect(idaPublicIds).toContain(target);
      const section=new URLSearchParams(query).get("abschnitt");
      if(section)expect(Object.keys(sectionsOf(byId(target)!.body)).map(idaSectionKey)).toContain(section);
    }
  });
  it("prüft die Konto-/Personenebene und eine Join-Vervielfachung unabhängig vom Text",()=>{
    const konten=[{person:10001,bestand:1500},{person:10001,bestand:4000},{person:10002,bestand:2500}];
    const partner=[10001,10001,10002];
    const joined=konten.flatMap(k=>partner.filter(p=>p===k.person).map(()=>k));
    expect(konten.reduce((s,k)=>s+k.bestand,0)).toBe(8000);
    expect(new Set(konten.map(k=>k.person)).size).toBe(2);
    expect(joined).toHaveLength(5);
    expect(joined.reduce((s,k)=>s+k.bestand,0)).toBe(13500);
  });
  it("validiert den eigenen Inhaltstyp, ohne das Standardschema zu lockern",()=>{
    const item=byId("ida-reporting")!;
    const raw=(meta:object,body:string)=>"---\n"+JSON.stringify(meta)+"\n---\n"+body;
    expect(()=>parseContent(raw(item,"Kurze Einordnung.\n\n## Thema\nNützlich.\n\n## Kontrolle\nAnzahl prüfen."))).not.toThrow();
    expect(()=>parseContent(raw({...item,bereich:"Excel"},"Einordnung.\n\n## Thema\nText.\n\n## Kontrolle\nText."))).toThrow();
    expect(()=>parseContent(raw(item,"## Thema\nText."))).toThrow();
    expect(()=>parseContent(raw({...item,darstellung:undefined},"Einordnung.\n\n## Thema\nText."))).toThrow(/Abschnitt/);
  });
  it.each([["join","joins"],["mehrfachauswahl","prompts"],["burst","versand"],["ida filter","filter"],["ida granularität","granularitaet"]])("führt %s unmittelbar zum Abschnitt", (q,section)=>{
    expect(searchContent(contents,q,{bereich:"IDA"}).map(x=>x.id)).toContain("ida-reporting");
    expect(searchTarget(byId("ida-reporting")!,q)).toBe("/wissen/ida-reporting?abschnitt="+section);
  });
});

describe("Cognos-Funktionen und Sprachkontexte",()=>{
  it("begrenzt Schnellbereich und trennt alle fünf Verfügbarkeitsklassen",()=>{
    expect(idaFunctions).toHaveLength(102);
    expect(idaFunctions.filter(e=>e.frequent)).toHaveLength(43);
    expect(new Set(idaFunctions.map(e=>e.id)).size).toBe(102);
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
    expect(idaFunctions.find(e=>e.id==="count-distinct")!.code).toBe("count(distinct [Personennummer] for report)");
  });
  it.each([["eindeutige personen","count-distinct"],["zeilen zählen","count"],["summe","total"],["wenn dann","case"],["leerwert","coalesce"],["mehrere werte prompt","promptmany"],["rang","rank"],["vorherige zeile","sql-lag"],["text enthält","position"],["monat letzter tag","last-of-month"]])("findet %s über Alltagssprache",(q,id)=>{
    expect(findIdaFunctions(q).map(e=>e.id)).toContain(id);
    expect(searchContent(contents,"ida "+q,{bereich:"IDA"}).slice(0,3).map(x=>x.id)).toContain("ida-formeln");
    expect(searchTarget(byId("ida-formeln")!,"ida "+q)).toBe((id==="sql-lag"?"/ida/referenz":"/wissen/ida-formeln")+"?funktion="+id);
  });
  it.each(["gvm","geschäftsvorfallmanagement","ci batch","aci batch","massenänderung","bestandsänderung","burst","kreuztabelle"])("erschließt den Themenbereich %s",q=>{
    expect(searchContent(contents,q).slice(0,3).some(x=>x.bereich==="IDA")).toBe(true);
  });
  it("zeigt Bedeutung und Beispiel für alle 43 häufigen Einträge ohne Aufklappen",()=>{
    render(<MemoryRouter><IdaReference/></MemoryRouter>);
    const table=screen.getByRole("table",{name:"Häufige IDA-Funktionen"});
    expect(table.querySelectorAll(".ida-expression-row")).toHaveLength(43);
    expect(table.querySelectorAll(".ida-expression-row code")).toHaveLength(43);
    expect(table.querySelectorAll("details[open]")).toHaveLength(0);
    expect(table.querySelector(".ida-expression-row code")).toBeVisible();
    expect(table.textContent).not.toMatch(/currentMember|regexp_|dense_rank|row_number/);
    expect(screen.getByRole("link",{name:"Alle Funktionen anzeigen →"})).toHaveAttribute("href","/ida/referenz");
  });
  it("öffnet Hinweise inline und kopiert nur das konkrete Beispiel",async()=>{
    const copy=vi.fn().mockResolvedValue(undefined);Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:copy}});
    render(<MemoryRouter initialEntries={["/?funktion=promptmany"]}><IdaReference/></MemoryRouter>);
    const detail=document.querySelector("#ida-detail-promptmany")!;
    expect(detail).toHaveAttribute("open");
    for(const label of ["Eingabe","Ausgang","Ergebnis","Anpassen","Beachten"])expect(within(detail as HTMLElement).getByText(label,{exact:true})).toBeVisible();
    fireEvent.click(within(detail as HTMLElement).getByRole("button",{name:"Kopieren"}));
    await waitFor(()=>expect(copy).toHaveBeenCalledWith("[Kundengruppe] in (#promptmany('pKundengruppe', 'string')#)"));
  });
  it("erhält alle erweiterten Einträge, Filter und Seitennavigation",()=>{
    render(<MemoryRouter initialEntries={["/?funktion=sql-lag"]}><IdaReference extended/></MemoryRouter>);
    expect(document.querySelectorAll(".ida-expression-row")).toHaveLength(1);
    expect(document.querySelector("#ida-detail-sql-lag")).toHaveAttribute("open");
    expect(screen.getByText("Eingabe",{exact:true})).toBeVisible();
    fireEvent.click(screen.getByRole("button",{name:"Filter zurücksetzen"}));
    expect(document.querySelectorAll(".ida-expression-row")).toHaveLength(25);
    fireEvent.click(screen.getByRole("button",{name:"Weitere Funktionen"}));
    expect(document.querySelector(".ida-reference > p[role=status]")).toHaveTextContent("Seite 2");
    fireEvent.change(screen.getByRole("combobox",{name:"Herkunft / Verfügbarkeit"}),{target:{value:"Dimensional / OLAP"}});
    expect(document.querySelectorAll(".ida-expression-row")).toHaveLength(8);
    expect(document.querySelectorAll(".ida-expression-details[open]")).toHaveLength(0);
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
