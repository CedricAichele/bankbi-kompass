export const idaPublicIds = ["ida-reporting","ida-formeln","ida-gvm","ida-ci-batch"];
export const idaReportingOutline = [
  {
    "title": "Grundregeln",
    "key": "grundregeln",
    "label": "Grundregeln"
  },
  {
    "title": "Ebenen / Granularität",
    "key": "granularitaet",
    "label": "Granularität"
  },
  {
    "title": "Filter",
    "key": "filter",
    "label": "Filter"
  },
  {
    "title": "Abfragen verbinden",
    "key": "joins",
    "label": "Joins / Union"
  },
  {
    "title": "Prompts / Parameter",
    "key": "prompts",
    "label": "Prompts"
  },
  {
    "title": "Berechnungen & Aggregationen",
    "key": "berechnungen",
    "label": "Berechnungen"
  },
  {
    "title": "Liste / Kreuztabelle",
    "key": "darstellung",
    "label": "Darstellung"
  },
  {
    "title": "Scheduling / Versand / Bursting",
    "key": "versand",
    "label": "Versand"
  },
  {
    "title": "Kontrolle",
    "key": "kontrolle",
    "label": "Kontrolle"
  }
];
export const idaSearchSections = [
  {
    "section": "grundregeln",
    "terms": [
      "erste auswertung",
      "auswertung erstellen"
    ]
  },
  {
    "section": "granularitaet",
    "terms": [
      "granularitat",
      "ebene",
      "konten pro person"
    ]
  },
  {
    "section": "filter",
    "terms": [
      "filter",
      "null werte",
      "and",
      "or"
    ]
  },
  {
    "section": "joins",
    "terms": [
      "join",
      "union",
      "intersect",
      "except",
      "abfragen verbinden"
    ]
  },
  {
    "section": "prompts",
    "terms": [
      "prompt",
      "parameter",
      "mehrfachauswahl",
      "einfachauswahl"
    ]
  },
  {
    "section": "berechnungen",
    "terms": [
      "berechnung",
      "aggregation",
      "rang",
      "ranking",
      "top n"
    ]
  },
  {
    "section": "darstellung",
    "terms": [
      "liste",
      "kreuztabelle",
      "excel export",
      "csv"
    ]
  },
  {
    "section": "versand",
    "terms": [
      "burst",
      "versand",
      "scheduling",
      "zeitplanung"
    ]
  },
  {
    "section": "kontrolle",
    "terms": [
      "kontrolle",
      "plausibilitat",
      "fehlersuche"
    ]
  }
];
export const idaDisclaimer = "Bezeichnungen und verfügbare Funktionen hängen von IDA-/Cognos-Version, Datenquelle und Berechtigung ab. Beispiele sind erfunden; interne Abläufe und Daten werden nicht veröffentlicht.";
export const idaLegacyTargets:Record<string,string> = {
  "ida-aggregation": "ida-reporting?abschnitt=berechnungen",
  "ida-anzahl": "ida-reporting?abschnitt=berechnungen",
  "ida-ausfuehren": "ida-reporting?abschnitt=grundregeln",
  "ida-bedingungen": "ida-reporting?abschnitt=filter",
  "ida-berechnung": "ida-reporting?abschnitt=berechnungen",
  "ida-betrieb": "ida-reporting?abschnitt=versand",
  "ida-csv": "ida-reporting?abschnitt=darstellung",
  "ida-datenelement": "ida-reporting?abschnitt=grundregeln",
  "ida-dubletten": "ida-reporting?abschnitt=granularitaet",
  "ida-durchschnitt": "ida-reporting?abschnitt=berechnungen",
  "ida-ebene": "ida-reporting?abschnitt=granularitaet",
  "ida-excel-export": "ida-reporting?abschnitt=darstellung",
  "ida-excel-liste": "ida-reporting?abschnitt=darstellung",
  "ida-extrema": "ida-reporting?abschnitt=berechnungen",
  "ida-falllogik": "ida-reporting?abschnitt=berechnungen",
  "ida-filter-pruefen": "ida-reporting?abschnitt=kontrolle",
  "ida-filter": "ida-reporting?abschnitt=filter",
  "ida-filterebene": "ida-reporting?abschnitt=filter",
  "ida-filtertypen": "ida-reporting?abschnitt=filter",
  "ida-formate": "ida-reporting?abschnitt=darstellung",
  "ida-gruppieren": "ida-reporting?abschnitt=berechnungen",
  "ida-join-aggregation": "ida-reporting?abschnitt=joins",
  "ida-join-pruefen": "ida-reporting?abschnitt=joins",
  "ida-konto": "ida-reporting?abschnitt=granularitaet",
  "ida-mehrere-joins": "ida-reporting?abschnitt=joins",
  "ida-mehrfachauswahl": "ida-reporting?abschnitt=prompts",
  "ida-not-null": "ida-reporting?abschnitt=filter",
  "ida-null": "ida-formeln?funktion=coalesce",
  "ida-nullstellen": "ida-reporting?abschnitt=kontrolle",
  "ida-parameter-anzeigen": "ida-reporting?abschnitt=prompts",
  "ida-parameter-filter": "ida-reporting?abschnitt=prompts",
  "ida-parameter-mehrfach": "ida-reporting?abschnitt=prompts",
  "ida-parameter-optional": "ida-reporting?abschnitt=prompts",
  "ida-parameter-typ": "ida-reporting?abschnitt=prompts",
  "ida-parameter": "ida-reporting?abschnitt=prompts",
  "ida-performance": "ida-reporting?abschnitt=kontrolle",
  "ida-prompt": "ida-reporting?abschnitt=prompts",
  "ida-quote": "ida-reporting?abschnitt=berechnungen",
  "ida-sortieren": "ida-reporting?abschnitt=darstellung",
  "ida-spalten": "ida-reporting?abschnitt=grundregeln",
  "ida-speichern": "ida-reporting?abschnitt=grundregeln",
  "ida-statusverlauf": "ida-reporting?abschnitt=granularitaet",
  "ida-summe": "ida-reporting?abschnitt=berechnungen",
  "ida-vorgang": "ida-reporting?abschnitt=granularitaet",
  "ida-zeitplanung": "ida-reporting?abschnitt=versand",
  "ida-zielgranularitaet": "ida-reporting?abschnitt=granularitaet",
  "reporting": "ida-reporting?abschnitt=grundregeln",
  "laufzeitanalyse": "ida-reporting?abschnitt=kontrolle",
  "ida-orientierung": "ida-reporting?abschnitt=grundregeln",
  "ida-erste-auswertung": "ida-reporting?abschnitt=grundregeln",
  "ida-granularitaet": "ida-reporting?abschnitt=granularitaet",
  "ida-filter-praxis": "ida-reporting?abschnitt=filter",
  "ida-prompts": "ida-reporting?abschnitt=prompts",
  "ida-abfragen-verbinden": "ida-reporting?abschnitt=joins",
  "ida-berechnungen": "ida-reporting?abschnitt=berechnungen",
  "ida-ausgabe": "ida-reporting?abschnitt=darstellung",
  "ida-plausibilitaet": "ida-reporting?abschnitt=kontrolle",
  "ida-berichtsbetrieb": "ida-reporting?abschnitt=versand",
  "ida-gvm-datenbasis": "ida-gvm?abschnitt=zusammenhang-mit-ida-auswertungen",
  "ida-ci-datenbasis": "ida-ci-batch?abschnitt=datenbasis-vorbereiten"
};
export function idaSectionKey(title:string) { return idaReportingOutline.find(x=>x.title===title)?.key || title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
