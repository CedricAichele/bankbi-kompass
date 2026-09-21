export type Group = { title: string; items: { label: string; id: string }[] };
export type Tool = {
  name: "Power BI" | "Excel" | "IDA";
  slug: string;
  description: string;
  groups: Group[];
};
export const toolsCatalog: Tool[] = [
  {
    name: "Power BI",
    slug: "power-bi",
    description: "Daten vorbereiten, Kennzahlen berechnen, Berichte prüfen.",
    groups: [
      {
        title: "Daten vorbereiten",
        items: [
          {
            label: "Daten laden",
            id: "daten-laden",
          },
          {
            label: "Power Query",
            id: "power-query",
          },
          {
            label: "Datentyp ändern",
            id: "datenbereinigung",
          },
          {
            label: "Spalten entfernen",
            id: "spalten-entfernen",
          },
          {
            label: "Spalten teilen",
            id: "spalten-teilen",
          },
          {
            label: "Werte ersetzen",
            id: "werte-ersetzen",
          },
          {
            label: "Nullwerte behandeln",
            id: "nullwerte",
          },
          {
            label: "Duplikate entfernen",
            id: "dubletten",
          },
          {
            label: "Gruppieren",
            id: "gruppieren",
          },
          {
            label: "Pivotieren",
            id: "pivotieren",
          },
          {
            label: "Entpivotieren",
            id: "entpivotieren",
          },
          {
            label: "Tabellen zusammenführen",
            id: "zusammenfuehren",
          },
          {
            label: "Tabellen anhängen",
            id: "anhaengen",
          },
          {
            id: "csv-import",
            label: "CSV korrekt importieren",
          },
          {
            id: "dateien-kombinieren",
            label: "Mehrere Dateien kombinieren",
          },
          {
            id: "excel-import",
            label: "Excel-Datei importieren",
          },
          {
            id: "pq-bedingt",
            label: "Bedingte Spalte",
          },
          {
            id: "pq-benutzerdefiniert",
            label: "Benutzerdefinierte Spalte",
          },
          {
            id: "pq-datum",
            label: "Datum in Power Query transformieren",
          },
          {
            id: "pq-duplizieren",
            label: "Abfrage duplizieren oder referenzieren",
          },
          {
            id: "pq-fehler",
            label: "Fehlerhafte Werte prüfen",
          },
          {
            id: "pq-laden",
            label: "Laden einer Hilfsabfrage steuern",
          },
          {
            id: "pq-text",
            label: "Text in Power Query bereinigen",
          },
          {
            id: "pq-ueberschriften",
            label: "Erste Zeile als Überschrift verwenden",
          },
          {
            id: "pq-umbenennen",
            label: "Spalten umbenennen",
          },
        ],
      },
      {
        title: "Datenmodell",
        items: [
          {
            label: "Beziehung erstellen",
            id: "beziehungen",
          },
          {
            label: "1:n verstehen",
            id: "eins-zu-viele",
          },
          {
            label: "Filterrichtung verstehen",
            id: "filterrichtung",
          },
          {
            label: "Fakt- und Dimensionstabelle",
            id: "fakt-dimension",
          },
          {
            label: "Star Schema",
            id: "star-schema",
          },
          {
            label: "Datumstabelle",
            id: "datumstabelle",
          },
          {
            label: "Granularität",
            id: "granularitaet",
          },
          {
            id: "aktive-beziehung",
            label: "Aktive und inaktive Beziehung",
          },
          {
            id: "beziehung-eins-eins",
            label: "1:1-Beziehung richtig einordnen",
          },
          {
            id: "beziehung-nm",
            label: "n:m-Beziehung fachlich modellieren",
          },
          {
            id: "fakt-zu-fakt",
            label: "Warum Fakt-zu-Fakt problematisch ist",
          },
          {
            id: "kardinalitaet",
            label: "Kardinalität prüfen: 1:1, 1:n oder n:m",
          },
          {
            id: "modellansicht",
            label: "Modellansicht lesen",
          },
          {
            id: "schluessel",
            label: "Stabile Schlüssel verwenden",
          },
        ],
      },
      {
        title: "DAX & Measures",
        items: [
          {
            label: "Measure erstellen",
            id: "measure",
          },
          {
            label: "Berechnete Spalte erstellen",
            id: "berechnete-spalte",
          },
          {
            label: "Measure oder Spalte?",
            id: "measure-spalte",
          },
          {
            label: "SUM",
            id: "sum",
          },
          {
            label: "DIVIDE",
            id: "divide",
          },
          {
            label: "CALCULATE",
            id: "calculate",
          },
          {
            label: "DISTINCTCOUNT",
            id: "distinctcount",
          },
          {
            label: "COUNTROWS",
            id: "countrows",
          },
          {
            label: "SUMX",
            id: "sumx",
          },
          {
            label: "FILTER",
            id: "dax-filter",
          },
          {
            label: "REMOVEFILTERS",
            id: "removefilters",
          },
          {
            label: "SELECTEDVALUE",
            id: "selectedvalue",
          },
          {
            label: "RELATED",
            id: "related",
          },
          {
            label: "Vorjahr",
            id: "vorjahr",
          },
          {
            label: "YTD",
            id: "ytd",
          },
          {
            label: "Filterkontext",
            id: "filterkontext",
          },
          {
            id: "count",
            label: "COUNT: nichtleere Werte zählen",
          },
          {
            id: "dax-all",
            label: "ALL oder REMOVEFILTERS?",
          },
          {
            id: "dax-average",
            label: "AVERAGE: Durchschnitt je Datenzeile",
          },
          {
            id: "dax-coalesce",
            label: "COALESCE und ISBLANK: fehlende Ergebnisse behandeln",
          },
          {
            id: "dax-if",
            label: "IF: zwei Ergebnisse unterscheiden",
          },
          {
            id: "dax-median",
            label: "MEDIAN: mittleren Wert bestimmen",
          },
          {
            id: "dax-min-max",
            label: "MIN und MAX: kleinster oder größter Wert",
          },
          {
            id: "dax-switch",
            label: "SWITCH: mehrere Fälle verständlich ordnen",
          },
          {
            id: "dax-values",
            label: "VALUES und HASONEVALUE: Auswahl prüfen",
          },
        ],
      },
      {
        title: "Zeitintelligenz",
        items: [
          {
            id: "ytd",
            label: "YTD berechnen",
          },
          {
            id: "vorjahr",
            label: "Vorjahr berechnen",
          },
          {
            id: "datumstabelle",
            label: "Datumstabelle erstellen",
          },
          {
            id: "aktueller-stichtag",
            label: "Letzten verfügbaren Stichtag bestimmen",
          },
          {
            id: "bestand-bewegung",
            label: "Bestandskennzahl oder Bewegungskennzahl?",
          },
          {
            id: "dateadd",
            label: "DATEADD und SAMEPERIODLASTYEAR",
          },
          {
            id: "datesytd-totalytd",
            label: "DATESYTD oder TOTALYTD",
          },
          {
            id: "dax-jahr-monat",
            label: "YEAR und MONTH: Kalenderattribute",
          },
          {
            id: "monatsultimo",
            label: "EOMONTH: Monatsultimo bestimmen",
          },
        ],
      },
      {
        title: "Bericht",
        items: [
          {
            label: "Karte",
            id: "karte",
          },
          {
            label: "Tabelle",
            id: "tabelle",
          },
          {
            label: "Matrix",
            id: "matrix",
          },
          {
            label: "Balkendiagramm",
            id: "balkendiagramm",
          },
          {
            label: "Liniendiagramm",
            id: "liniendiagramm",
          },
          {
            label: "Slicer",
            id: "slicer",
          },
          {
            label: "Drilldown",
            id: "drilldown",
          },
          {
            label: "Visualinteraktionen",
            id: "visualinteraktionen",
          },
          {
            label: "Bedingte Formatierung",
            id: "bedingte-formatierung",
          },
          {
            label: "Datenbeschriftungen",
            id: "datenbeschriftungen",
          },
          {
            id: "anzeigeeinheiten",
            label: "Anzeigeeinheiten und Dezimalstellen",
          },
          {
            id: "diagrammtitel",
            label: "Diagrammtitel mit Kontext",
          },
          {
            id: "drillthrough",
            label: "Drillthrough: zur Detailseite wechseln",
          },
          {
            id: "prozentformat",
            label: "0,95 als 95 % anzeigen",
          },
          {
            id: "referenzlinie",
            label: "Referenzlinie im Diagramm",
          },
          {
            id: "saeulendiagramm",
            label: "Säulendiagramm erstellen",
          },
          {
            id: "tooltips",
            label: "Tooltip gezielt ergänzen",
          },
          {
            id: "visual-sortieren",
            label: "Visual nach Wert oder Kategorie sortieren",
          },
        ],
      },
      {
        title: "Fehler",
        items: [
          {
            label: "Falsche Summe",
            id: "summe-zu-hoch",
          },
          {
            label: "Doppelte Werte",
            id: "dubletten",
          },
          {
            label: "BLANK",
            id: "blank",
          },
          {
            label: "Filter funktioniert nicht",
            id: "filter-fehler",
          },
          {
            label: "Beziehung lässt sich nicht erstellen",
            id: "beziehung-fehler",
          },
          {
            label: "Datum falsch sortiert",
            id: "datum-sortieren",
          },
          {
            label: "Measure reagiert unerwartet",
            id: "measure-fehler",
          },
          {
            id: "bestand-monate",
            label: "Bestand wird über Monate aufsummiert",
          },
          {
            id: "mehrere-datumsbeziehungen",
            label: "Mehrere Datumsbeziehungen prüfen",
          },
          {
            id: "visual-gesamtsumme",
            label: "Warum die Gesamtsumme anders ausfällt",
          },
        ],
      },
    ],
  },
  {
    name: "Excel",
    slug: "excel",
    description:
      "Formeln finden, Listen bereinigen und Ergebnisse weiterverarbeiten.",
    groups: [
      {
        title: "Nachschlagen",
        items: [
          {
            label: "XVERWEIS",
            id: "xverweis",
          },
          {
            label: "INDEX / VERGLEICH",
            id: "index-vergleich",
          },
          {
            id: "excel-fehlende-treffer",
            label: "Fehlende Treffer gezielt behandeln",
          },
          {
            id: "excel-index",
            label: "INDEX und VERGLEICH einzeln verstehen",
          },
          {
            id: "excel-mehrere-kriterien",
            label: "Nachschlagen mit mehreren Kriterien",
          },
        ],
      },
      {
        title: "Filtern und Listen",
        items: [
          {
            label: "FILTER",
            id: "excel-filtern",
          },
          {
            label: "EINDEUTIG",
            id: "eindeutig",
          },
          {
            label: "SORTIEREN",
            id: "sortieren",
          },
          {
            id: "excel-kombinationen",
            label: "Eindeutige Kombinationen erzeugen",
          },
          {
            id: "excel-sichtbare",
            label: "Nur sichtbare Zeilen kopieren oder bearbeiten",
          },
          {
            id: "sortierennach",
            label: "SORTIERENNACH: nach mehreren Feldern sortieren",
          },
        ],
      },
      {
        title: "Aggregieren",
        items: [
          {
            label: "SUMMEWENNS",
            id: "summewenns",
          },
          {
            label: "ZÄHLENWENNS",
            id: "zaehlenwenns",
          },
          {
            label: "MITTELWERTWENNS",
            id: "mittelwertwenns",
          },
          {
            id: "aggregat",
            label: "AGGREGAT: Fehler gezielt auslassen",
          },
          {
            id: "mittelwertwenn",
            label: "MITTELWERTWENN: bedingt mitteln",
          },
          {
            id: "summewenn",
            label: "SUMMEWENN: ein Kriterium",
          },
          {
            id: "teilergebnis",
            label: "TEILERGEBNIS: gefilterte Zeilen auswerten",
          },
          {
            id: "zaehlenwenn",
            label: "ZÄHLENWENN: Treffer zählen",
          },
        ],
      },
      {
        title: "Logik und Fehler",
        items: [
          {
            label: "WENN",
            id: "excel-fehler",
          },
          {
            label: "UND",
            id: "und",
          },
          {
            label: "ODER",
            id: "oder",
          },
          {
            label: "WENNFEHLER",
            id: "wennfehler",
          },
          {
            label: "WENNNV",
            id: "wennnv",
          },
          {
            id: "nicht",
            label: "NICHT: Bedingung umkehren",
          },
          {
            id: "wenns",
            label: "WENNS: geordnete Regeln",
          },
        ],
      },
      {
        title: "Daten bereinigen",
        items: [
          {
            label: "Duplikate finden",
            id: "excel-dubletten-finden",
          },
          {
            label: "Duplikate entfernen",
            id: "excel-dubletten-entfernen",
          },
          {
            label: "Leerzeichen entfernen",
            id: "glaetten",
          },
          {
            label: "Text bereinigen",
            id: "saeubern",
          },
          {
            label: "Werte ersetzen",
            id: "excel-ersetzen",
          },
          {
            label: "Text aufteilen",
            id: "excel-text-teilen",
          },
          {
            label: "Zahlen als Text erkennen",
            id: "excel-zahl-text",
          },
          {
            label: "Datumswerte korrigieren",
            id: "excel-datum",
          },
          {
            id: "excel-leere-zellen",
            label: "Leere Zellen und Fehlerwerte prüfen",
          },
          {
            id: "excel-liste-vorbereiten",
            label: "Excel-Liste für Auswertung vorbereiten",
          },
        ],
      },
      {
        title: "Daten auswerten",
        items: [
          {
            label: "PivotTable",
            id: "pivottable",
          },
          {
            label: "PivotChart",
            id: "pivotchart",
          },
          {
            label: "Eine Zeile je Schlüssel erzeugen",
            id: "eine-zeile-je-person",
          },
          {
            label: "Mehrere Werte je Person zusammenfassen",
            id: "gruppieren",
          },
          {
            label: "Daten von lang nach breit",
            id: "pivotieren",
          },
          {
            label: "Daten von breit nach lang",
            id: "entpivotieren",
          },
        ],
      },
      {
        title: "Power Query",
        items: [
          {
            label: "Daten importieren",
            id: "daten-laden",
          },
          {
            label: "Dateien kombinieren",
            id: "dateien-kombinieren",
          },
          {
            label: "Gruppieren",
            id: "gruppieren",
          },
          {
            label: "Zusammenführen",
            id: "zusammenfuehren",
          },
          {
            label: "Anhängen",
            id: "anhaengen",
          },
          {
            label: "Spalten transformieren",
            id: "power-query",
          },
          {
            id: "csv-import",
            label: "CSV korrekt importieren",
          },
          {
            id: "datenbereinigung",
            label: "Datentyp ändern / Daten bereinigen",
          },
          {
            id: "dubletten",
            label: "Dubletten prüfen und entfernen",
          },
          {
            id: "entpivotieren",
            label: "Entpivotieren: von breit nach lang",
          },
          {
            id: "excel-import",
            label: "Excel-Datei importieren",
          },
          {
            id: "nullwerte",
            label: "Nullwerte behandeln",
          },
          {
            id: "pivotieren",
            label: "Pivotieren: von lang nach breit",
          },
          {
            id: "pq-bedingt",
            label: "Bedingte Spalte",
          },
          {
            id: "pq-benutzerdefiniert",
            label: "Benutzerdefinierte Spalte",
          },
          {
            id: "pq-datum",
            label: "Datum in Power Query transformieren",
          },
          {
            id: "pq-duplizieren",
            label: "Abfrage duplizieren oder referenzieren",
          },
          {
            id: "pq-fehler",
            label: "Fehlerhafte Werte prüfen",
          },
          {
            id: "pq-laden",
            label: "Laden einer Hilfsabfrage steuern",
          },
          {
            id: "pq-text",
            label: "Text in Power Query bereinigen",
          },
          {
            id: "pq-ueberschriften",
            label: "Erste Zeile als Überschrift verwenden",
          },
          {
            id: "pq-umbenennen",
            label: "Spalten umbenennen",
          },
          {
            id: "spalten-entfernen",
            label: "Spalten entfernen",
          },
          {
            id: "spalten-teilen",
            label: "Spalten teilen",
          },
          {
            id: "werte-ersetzen",
            label: "Werte ersetzen",
          },
        ],
      },
      {
        title: "Datum",
        items: [
          {
            id: "excel-datumsdifferenz",
            label: "Differenz zwischen Datumswerten",
          },
          {
            id: "excel-kalender",
            label: "JAHR, MONAT, TAG und DATUM",
          },
          {
            id: "excel-monatsende",
            label: "MONATSENDE und HEUTE",
          },
        ],
      },
      {
        title: "Pivot",
        items: [
          {
            id: "pivot-aktualisieren",
            label: "PivotTable aktualisieren",
          },
          {
            id: "pivot-eindeutig",
            label: "Eindeutige Anzahl in einer PivotTable",
          },
          {
            id: "pivot-felder",
            label: "Pivot-Felder zuordnen: Zeilen, Spalten, Werte",
          },
          {
            id: "pivot-filtern",
            label: "PivotTable filtern",
          },
          {
            id: "pivot-gruppieren",
            label: "Pivot nach Datum oder Zahlen gruppieren",
          },
          {
            id: "pivot-summe-anzahl",
            label: "Pivot zeigt Anzahl statt Summe",
          },
        ],
      },
      {
        title: "Text",
        items: [
          {
            id: "text-ausschnitt",
            label: "LINKS, RECHTS und TEIL",
          },
          {
            id: "text-trennzeichen",
            label: "TEXTVOR und TEXTNACH",
          },
          {
            id: "textteilen",
            label: "TEXTTEILEN: Text dynamisch verteilen",
          },
          {
            id: "textverketten",
            label: "TEXTVERKETTEN: Werte mit Trennzeichen verbinden",
          },
          {
            id: "wechseln-ersetzen",
            label: "WECHSELN oder ERSETZEN?",
          },
        ],
      },
    ],
  },
  {
    name: "IDA",
    slug: "ida",
    description:
      "Reporting mit IDA/Cognos: übertragbare Prinzipien für Listen, Filter, Parameter, Berechnungen, Joins und Exporte.",
    groups: [
      {
        title: "Listen",
        items: [
          {
            label: "Liste erstellen",
            id: "reporting",
          },
          {
            label: "Datenelement hinzufügen",
            id: "ida-datenelement",
          },
          {
            label: "Sortieren",
            id: "ida-sortieren",
          },
          {
            label: "Gruppierung",
            id: "ida-gruppieren",
          },
          {
            label: "Aggregation",
            id: "ida-aggregation",
          },
          {
            label: "Detail- vs. Gruppierungsebene",
            id: "ida-ebene",
          },
          {
            id: "ida-konto",
            label: "Eine Zeile je Konto und Stichtag",
          },
          {
            id: "ida-spalten",
            label: "Datenelemente entfernen und umordnen",
          },
        ],
      },
      {
        title: "Filter",
        items: [
          {
            label: "Filter erstellen",
            id: "ida-filter",
          },
          {
            label: "Mehrere Bedingungen",
            id: "ida-bedingungen",
          },
          {
            label: "UND / ODER",
            id: "ida-bedingungen",
          },
          {
            label: "NULL",
            id: "ida-null",
          },
          {
            label: "Mehrfachauswahl",
            id: "ida-mehrfachauswahl",
          },
          {
            label: "Filterlogik prüfen",
            id: "ida-filter-pruefen",
          },
          {
            id: "ida-filterebene",
            label: "Filter vor oder nach Aggregation",
          },
          {
            id: "ida-filtertypen",
            label: "Text-, Zahlen- und Datumsfilter",
          },
          {
            id: "ida-not-null",
            label: "NULL und NOT NULL unterscheiden",
          },
        ],
      },
      {
        title: "Parameter / Eingabeaufforderungen",
        items: [
          {
            label: "Parameter anlegen",
            id: "ida-parameter",
          },
          {
            label: "Parameter im Filter einsetzen",
            id: "ida-parameter-filter",
          },
          {
            label: "Mehrere Werte",
            id: "ida-parameter-mehrfach",
          },
          {
            label: "Datentypen",
            id: "ida-parameter-typ",
          },
          {
            label: "Parameterwert anzeigen",
            id: "ida-parameter-anzeigen",
          },
          {
            id: "ida-parameter-optional",
            label: "Optionaler Parameter",
          },
          {
            id: "ida-prompt",
            label: "Parameter und Eingabeaufforderung unterscheiden",
          },
        ],
      },
      {
        title: "Berechnungen",
        items: [
          {
            label: "Berechnetes Datenelement",
            id: "ida-berechnung",
          },
          {
            label: "Summe",
            id: "ida-summe",
          },
          {
            label: "Anzahl",
            id: "ida-anzahl",
          },
          {
            label: "Durchschnitt",
            id: "ida-durchschnitt",
          },
          {
            label: "Median",
            id: "median",
          },
          {
            label: "Quote",
            id: "ida-quote",
          },
          {
            label: "NULL-Behandlung",
            id: "ida-null",
          },
          {
            label: "Maximum",
            id: "ida-extrema",
          },
          {
            label: "Minimum",
            id: "ida-extrema",
          },
          {
            id: "ida-falllogik",
            label: "Bedingte Berechnung: CASE-/IF-Prinzip",
          },
        ],
      },
      {
        title: "Mehrfachzeilen / Joins",
        items: [
          {
            label: "Warum entstehen mehrere Zeilen?",
            id: "eins-zu-viele",
          },
          {
            label: "1:n",
            id: "eins-zu-viele",
          },
          {
            label: "Granularität",
            id: "granularitaet",
          },
          {
            label: "Eine Zeile je Person",
            id: "eine-zeile-je-person",
          },
          {
            label: "Eine Zeile je Vorgang",
            id: "ida-vorgang",
          },
          {
            label: "Aggregation nach Join",
            id: "ida-join-aggregation",
          },
          {
            label: "Dubletten erkennen",
            id: "ida-dubletten",
          },
          {
            label: "Ergebnis vor/nach Join plausibilisieren",
            id: "ida-join-pruefen",
          },
          {
            id: "ida-mehrere-joins",
            label: "Mehrere 1:n-Joins plausibilisieren",
          },
          {
            id: "ida-statusverlauf",
            label: "Mehrere Status je Vorgang",
          },
          {
            id: "ida-zielgranularitaet",
            label: "Zielgranularität vor dem Join festlegen",
          },
        ],
      },
      {
        title: "Ausgabe",
        items: [
          {
            label: "Excel-Export",
            id: "ida-excel-export",
          },
          {
            label: "CSV",
            id: "ida-csv",
          },
          {
            label: "Liste sinnvoll für Excel aufbauen",
            id: "ida-excel-liste",
          },
          {
            label: "Datums- und Zahlenformate prüfen",
            id: "ida-formate",
          },
          {
            id: "ida-nullstellen",
            label: "Führende Nullen beim Export erhalten",
          },
        ],
      },
      {
        title: "Berichtsbetrieb",
        items: [
          {
            label: "Ergebnisse reproduzierbar prüfen",
            id: "ida-betrieb",
          },
          {
            id: "ida-ausfuehren",
            label: "Bericht ausführen und Ausgabeformat wählen",
          },
          {
            id: "ida-performance",
            label: "Langsame Liste eingrenzen",
          },
          {
            id: "ida-speichern",
            label: "Berichtdefinition und Ausgabe unterscheiden",
          },
          {
            id: "ida-zeitplanung",
            label: "Zeitplanung fachlich vorbereiten",
          },
        ],
      },
    ],
  },
];
export const frequent = [
  "calculate",
  "xverweis",
  "power-query",
  "datenbereinigung",
  "beziehungen",
  "dubletten",
  "measure-spalte",
  "distinctcount",
];
