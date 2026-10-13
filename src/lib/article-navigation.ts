import { type Content, sectionsOf } from "../content/schema";
import { powerQueryGroups } from "../content/catalog";
import { excelAreas } from "../content/discovery";
import type { Crumb } from "../components/Breadcrumbs";

export type TocEntry = { label: string; target: string; children?: TocEntry[] };
export const sectionId = (name:string) => "article-"+name.toLowerCase().replace(/[^a-z0-9äöüß]+/g,"-");
export const workflowPhases = [
  {label:"Quelle verstehen",start:1,end:3,children:[{label:"Quelle öffnen",step:1},{label:"Zeilenebene verstehen",step:3}]},
  {label:"Daten prüfen",start:4,end:6,children:[{label:"Profiling",step:4},{label:"Datentypen",step:5},{label:"Schlüssel",step:6}]},
  {label:"Daten bereinigen",start:7,end:12,children:[{label:"Fehlende Werte",step:7},{label:"Text",step:9},{label:"Dubletten",step:10}]},
  {label:"Struktur und Tabellen kombinieren",start:13,end:15,children:[{label:"Gruppieren / Pivotieren",step:14},{label:"Merge / Append",step:15}]},
  {label:"Ergebnis kontrollieren",start:16,end:18,children:[{label:"Plausibilitätsprüfung",step:17},{label:"Laden",step:18}]},
];
const longGuides = new Set(["pq-workflow","dateien-kombinieren","pq-benutzerdefiniert","pq-profiling","dax-grundlagen","excel-liste-vorbereiten","excel-power-query","pivottable"]);
export function articleToc(item:Content):TocEntry[] {
  if(item.id==="power-query-m") return [
    {label:"Einstieg",target:"m-intro"},{label:"Häufig gebraucht",target:"m-common"},{label:"Kategorien",target:"m-categories"},{label:"Referenz durchsuchen",target:"m-search"},{label:"Eingabehilfe",target:"m-input"},
  ];
  if(item.id==="dax-formeln") return [
    {label:"Einstieg",target:"dax-intro"},{label:"Häufig gebraucht",target:"dax-reference-common"},{label:"Kategorien",target:"dax-categories"},{label:"Referenz durchsuchen",target:"dax-search"},{label:"Eingabehilfe",target:"dax-input"},
  ];
  if(item.id==="excel-formeln") return [{label:"Einstieg",target:sectionId("Wann brauche ich das?")},{label:"Formelreferenz",target:"excel-reference"},{label:"Fehler vermeiden",target:sectionId("Typischer Fehler")}];
  if(!longGuides.has(item.id))return [];
  const sections=sectionsOf(item.body);
  const entry=(label:string,name=label):TocEntry=>({label,target:sectionId(name)});
  if(item.id==="pq-workflow") return [
    entry("Einstieg","Wann brauche ich das?"),
    ...workflowPhases.map(p=>({label:p.label,target:sectionId(p.label),children:p.children.map(c=>({label:c.label,target:"article-step-"+c.step}))})),
    {label:"Durchgängiges Beispiel",target:sectionId("Beispiel"),children:[entry("Ergebnis"),entry("Kontrollwerte","Plausibilitätscheck")]},
  ];
  const explanationNames=Object.keys(sections).filter(n=>!["Wann brauche ich das?","Schritte","Beispiel","Ergebnis","Plausibilitätscheck","Typischer Fehler","Voraussetzungen"].includes(n));
  return [entry("Einstieg","Wann brauche ich das?"),{label:"Ablauf",target:sectionId("Schritte"),children:sections.Voraussetzungen?[entry("Voraussetzungen")]:[]},
    {label:"Beispiel und Ergebnis",target:sectionId("Beispiel"),children:sections.Ergebnis?[entry("Ergebnis")]:[]},
    ...(explanationNames.length ? [{label:item.id==="dax-grundlagen" ? "Kontexte und Iteratoren" : "Zusammenhänge verstehen",target:sectionId(explanationNames[0]),children:explanationNames.slice(1,5).map(n=>entry(n))}]:[]),
    {label:"Ergebnis kontrollieren",target:sectionId("Plausibilitätscheck"),children:[entry("Typische Fehler","Typischer Fehler")]},
  ];
}
export function articleBreadcrumbs(item:Content):Crumb[] {
  const base:Crumb[]=[{label:"Start",to:"/"}];
  if(item.art==="problem")return [...base,{label:"Probleme & Lösungen",to:"/probleme"},{label:item.titel}];
  if(item.art==="aufgabe")return [...base,{label:"Typische Aufgaben",to:"/aufgaben"},{label:item.titel}];
  if(item.bereich==="Power BI") {
    base.push({label:"Power BI",to:"/bereich/power-bi"});
    if(item.id==="power-query-m" || powerQueryGroups.some(g=>g.items.some(x=>x.id===item.id)) && item.kategorie!=="Datenmodell" || item.kategorie==="Power Query & Datenaufbereitung")base.push({label:"Power Query",to:"/power-query"});
    else if(item.id==="dax-formeln" || /DAX|Zeitintelligenz/.test(item.kategorie))base.push({label:"DAX",to:"/dax"});
    else if(item.kategorie==="Datenmodell")base.push({label:"Datenmodell",to:"/bereich/power-bi/themen/modell"});
    else if(item.kategorie==="Berichte & Visualisierung")base.push({label:"Berichte",to:"/bereich/power-bi/themen/berichte"});
  } else if(item.bereich==="Excel") {
    base.push({label:"Excel",to:"/bereich/excel"});
    const area=excelAreas.find(x=>x.groups?.includes(item.kategorie));
    if(area)base.push({label:area.title,to:area.more.to});
  } else base.push({label:item.bereich==="Datenanalyse" ? "Datenbegriffe" : "Suche",to:item.bereich==="Datenanalyse" ? "/bereich/datenanalyse" : "/suche"});
  return [...base,{label:item.titel}];
}
