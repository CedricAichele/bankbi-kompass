import { daxEntries } from "./dax-reference";
import { mEntries } from "./m-reference";

export type DiscoveryLink = { label: string; to: string };
export type DiscoveryArea = { title: string; description: string; links: DiscoveryLink[]; more: DiscoveryLink; groups?: string[] };
const article = (id: string, label: string): DiscoveryLink => ({ label, to: "/wissen/" + id });
const topic = (tool: string, slug: string) => "/bereich/" + tool + "/themen/" + slug;

export const powerBiAreas: DiscoveryArea[] = [
  { title: "Daten aufbereiten", description: "Daten laden, prüfen, bereinigen und für die Analyse vorbereiten.", links: [article("pq-workflow", "Power-Query-Workflow"), article("pq-profiling", "Profiling / Datenqualität"), article("dateien-kombinieren", "Wiederkehrende Dateien / Ordnerimport")], more: { label: "Alle Power-Query-Themen", to: "/power-query" } },
  { title: "Datenmodell", description: "Die Zeilenebene klären und Tabellen über verlässliche Beziehungen verbinden.", links: [article("granularitaet", "Granularität"), article("star-schema", "Star Schema"), article("beziehungen", "Beziehungen verstehen")], more: { label: "Alle Modellthemen", to: topic("power-bi", "modell") }, groups: ["Datenmodell"] },
  { title: "DAX & Kennzahlen", description: "Kennzahlen passend zur Auswahl und zur fachlichen Frage berechnen.", links: [article("dax-grundlagen", "DAX verstehen"), article("calculate", "CALCULATE"), article("measure-spalte", "Measure oder Spalte?")], more: { label: "DAX öffnen", to: "/dax" } },
  { title: "Berichte bauen", description: "Die passende Darstellung wählen und gezielt durch Ergebnisse navigieren.", links: [article("visualwahl", "Welches Visual?"), article("slicer", "Slicer / Filter"), article("drillthrough", "Drillthrough")], more: { label: "Alle Berichtsthemen", to: topic("power-bi", "berichte") }, groups: ["Berichte & Visualisierung"] },
  { title: "Fehler finden", description: "Vom auffälligen Ergebnis zur Ursache und zum nächsten Prüfpunkt.", links: [article("summe-zu-hoch", "Summe stimmt nicht"), article("filter-fehler", "Filter reagiert nicht"), article("problem-merge-zeilen", "Mehr Zeilen nach Merge")], more: { label: "Alle Problemlösungen", to: "/probleme?bereich=Power+BI" } },
  { title: "Nachschlagen", description: "Eine Formel oder Funktion gezielt nachschlagen und bei Bedarf vertiefen.", links: [article("power-query-m", "M-Formeln & Funktionen"), {label:"Wichtige DAX-Funktionen", to:"/dax?abschnitt=funktionen"}, article("dax-formeln", "Erweiterter DAX-Katalog")], more: { label: "Alle Nachschlagehilfen", to: topic("power-bi", "nachschlagen") }, groups: ["Start"] },
];

export const excelAreas: DiscoveryArea[] = [
  { title: "Daten vorbereiten", description: "Eine saubere Liste und passende Datentypen als Grundlage schaffen.", links: [article("excel-liste-vorbereiten", "Excel-Liste vorbereiten"), article("excel-datum", "Datum / Datentypen")], more: { label: "Alle Vorbereitungsthemen", to: topic("excel", "vorbereiten") }, groups: ["Daten prüfen & bereinigen", "Text bearbeiten", "Datum & Datentypen"] },
  { title: "Formeln", description: "Werte zuordnen, Treffer auswählen, Summen bilden und Bedingungen abbilden.", links: [article("xverweis", "XVERWEIS"), article("excel-filtern", "FILTER"), article("summewenns", "SUMMEWENNS"), article("excel-fehler", "WENN")], more: { label: "Wichtige Excel-Formeln", to: topic("excel", "formeln") }, groups: ["Nachschlagen & Zuordnen", "Filtern & eindeutige Listen", "Aggregieren", "Logik & Fehlerbehandlung"] },
  { title: "Auswerten", description: "Daten verdichten und das Ergebnis mit nachvollziehbaren Kontrollen prüfen.", links: [article("pivottable", "PivotTable"), article("eindeutig", "Eindeutige Werte"), article("aggregat", "Aggregieren")], more: { label: "Alle Auswertungsthemen", to: topic("excel", "auswerten") }, groups: ["PivotTables & Auswertung", "Aggregieren"] },
  { title: "Power Query", description: "Wiederkehrende Aufbereitung einmal definieren und bei Aktualisierung anwenden.", links: [article("excel-power-query", "Power Query in Excel"), article("dateien-kombinieren", "Wiederkehrende Dateien")], more: { label: "Gemeinsame Power-Query-Übersicht", to: "/power-query" } },
  { title: "Probleme", description: "Fehler in Formeln, Datentypen und Pivot-Auswertungen gezielt eingrenzen.", links: [article("problem-xverweis-fehlt", "XVERWEIS findet nichts"), article("problem-pivot-anzahl", "Pivot zählt statt summiert"), article("problem-formel-text", "Formel wird als Text angezeigt"), article("problem-zahl-text", "Datum / Zahl falsch erkannt")], more: { label: "Alle Excel-Probleme", to: "/probleme?bereich=Excel" } },
];

export const powerQueryAreas: DiscoveryArea[] = [
  {title:"Start", description:"Quelle verstehen und den Weg bis zur kontrollierten Tabelle kennenlernen.", links:[article("power-query","Power Query verstehen"),article("pq-workflow","Kompletter Workflow")], more:{label:"Daten laden und Schritte verstehen",to:topic("power-bi","pq-start")},groups:["Einstieg","Abfragen organisieren"]},
  {title:"Prüfen & bereinigen", description:"Datenqualität untersuchen und Veränderungen fachlich begründen.", links:[article("pq-profiling","Profiling"),article("datenbereinigung","Datentypen"),article("nullwerte","Fehlende Werte"),article("pq-text","Text bereinigen"),article("dubletten","Dubletten prüfen")], more:{label:"Alle Bereinigungsthemen",to:topic("power-bi","pq-bereinigen")},groups:["Daten verstehen","Daten bereinigen"]},
  {title:"Transformieren", description:"Die Tabellenstruktur passend zur Auswertung verändern.", links:[article("gruppieren","Gruppieren"),article("pivotieren","Pivotieren"),article("entpivotieren","Entpivotieren"),article("pq-benutzerdefiniert","Benutzerdefinierte Spalte")], more:{label:"Alle Transformationsthemen",to:topic("power-bi","pq-transformieren")},groups:["Struktur verändern"]},
  {title:"Kombinieren", description:"Attribute zuordnen oder gleich aufgebaute Tabellen untereinander anhängen.", links:[article("zusammenfuehren","Merge"),article("anhaengen","Append"),article("dateien-kombinieren","Ordnerimport")], more:{label:"Alle Kombinationsthemen",to:topic("power-bi","pq-kombinieren")},groups:["Tabellen kombinieren"]},
  {title:"M / Code", description:"Einen passenden Ausdruck finden und auf die eigenen Spalten übertragen.", links:[{label:"Häufige M-Funktionen",to:"/wissen/power-query-m?abschnitt=haeufig"},article("power-query-m","Vollständige praktische Referenz")], more:{label:"M-Code und Eingabehilfe",to:"/wissen/power-query-m?abschnitt=eingabe"}},
  {title:"Kontrolle", description:"Fehler, Schlüssel, Zeilenzahlen und Summen vor dem Laden prüfen.", links:[article("pq-fehler","Fehlerwerte"),article("schluessel","Schlüssel"),{label:"Plausibilitätsprüfung",to:"/wissen/pq-workflow?abschnitt=kontrolle"}], more:{label:"Weitere Kontrollthemen",to:topic("power-bi","pq-kontrolle")},groups:["Fehler & Kontrolle"]},
];

export const commonDaxGroups = [
  {title:"Grundlagen",names:["SUM","AVERAGE","MIN","MAX","COUNT","COUNTROWS","DISTINCTCOUNT","DIVIDE"]},
  {title:"Filter & Kontext",names:["CALCULATE","FILTER","REMOVEFILTERS","ALL","VALUES","SELECTEDVALUE","HASONEVALUE"]},
  {title:"Logik",names:["IF","SWITCH","ISBLANK","COALESCE"]},
  {title:"Iteratoren",names:["SUMX","AVERAGEX"]},
  {title:"Beziehungen",names:["RELATED","LOOKUPVALUE","USERELATIONSHIP"]},
  {title:"Zeit",names:["DATEADD","SAMEPERIODLASTYEAR","DATESYTD","TOTALYTD","EOMONTH"]},
  {title:"Analyse",names:["RANKX","TOPN","CONCATENATEX"]},
];
export const commonDaxNames = commonDaxGroups.flatMap(g=>g.names);
export function daxDestination(name:string) {
  const entry=daxEntries.find(e=>e.name===name)!;
  return entry.article ? "/wissen/"+entry.article : "/wissen/dax-formeln?funktion="+encodeURIComponent(name);
}
export const daxTasks = [
  {label:"Werte summieren",names:["SUM"]}, {label:"Zeilen zählen",names:["COUNTROWS"]},
  {label:"Eindeutige Kunden zählen",names:["DISTINCTCOUNT"]}, {label:"Eine Quote berechnen",names:["DIVIDE"]},
  {label:"Bedingungen abbilden",names:["IF","SWITCH"]}, {label:"Filter verändern",names:["CALCULATE"]},
  {label:"Zeilen gezielt filtern",names:["FILTER"]}, {label:"Zeilenweise rechnen",names:["SUMX"]},
  {label:"Slicerauswahl auslesen",names:["SELECTEDVALUE"]}, {label:"Wert aus anderer Tabelle holen",names:["RELATED","LOOKUPVALUE"]},
  {label:"Filter entfernen",names:["REMOVEFILTERS"]}, {label:"Rangfolge bilden",names:["RANKX"]},
  {label:"Top-N bilden",names:["TOPN"]}, {label:"Vorjahr vergleichen",names:["SAMEPERIODLASTYEAR","DATEADD"]},
  {label:"YTD berechnen",names:["DATESYTD","TOTALYTD"]}, {label:"Leere Ergebnisse behandeln",names:["COALESCE","ISBLANK"]},
];
export const commonMNames = ["Text.Trim","Text.Upper","Text.Replace","Text.Contains","Text.BeforeDelimiter","Text.AfterDelimiter","Date.Year","Date.EndOfMonth","Number.Round","if … then … else","try … otherwise","Table.SelectRows","Table.AddColumn","Table.TransformColumnTypes","Table.Group","Table.NestedJoin","Table.Combine","Table.Distinct","Table.FillDown","Folder.Files"];
export const commonMEntries = commonMNames.map(name=>mEntries.find(e=>e.name===name)!);
