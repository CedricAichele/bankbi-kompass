export type Group = { title: string; items: { label: string; id: string }[] };
export type Tool = { name: "Power BI" | "Excel" | "IDA"; slug: string; description: string; groups: Group[] };
export const toolsCatalog: Tool[] = [
  {
    "name": "Power BI",
    "slug": "power-bi",
    "description": "Unser aktueller Schwerpunkt: von der Datenquelle über Power Query und das Modell bis zur geprüften Kennzahl.",
    "groups": [
      {
        "title": "Daten importieren",
        "items": [
          {
            "id": "daten-laden",
            "label": "Daten in Power BI laden"
          },
          {
            "id": "csv-import",
            "label": "CSV korrekt importieren"
          },
          {
            "id": "dateien-kombinieren",
            "label": "Ordnerimport · wiederkehrende Dateien"
          }
        ]
      },
      {
        "title": "Power Query & Datenaufbereitung",
        "items": [
          {"id":"power-query-m", "label":"M-Formeln & Funktionen für Power Query"},
          {
            "id": "power-query",
            "label": "Was ist Power Query?"
          },
          {
            "id": "pq-workflow",
            "label": "Daten in Power Query aufbereiten"
          },
          {
            "id": "pq-profiling",
            "label": "Spaltenqualität, Spaltenverteilung und Spaltenprofil"
          },
          {
            "id": "nullwerte",
            "label": "Was mache ich mit fehlenden Werten?"
          },
          {
            "id": "zusammenfuehren",
            "label": "Merge: Tabellen über Schlüssel zusammenführen"
          },
          {
            "id": "anhaengen",
            "label": "Append: Tabellen untereinander anhängen"
          }
        ]
      },
      {
        "title": "Datenmodell",
        "items": [
          {
            "id": "beziehungen",
            "label": "Beziehung erstellen"
          },
          {
            "id": "eins-zu-viele",
            "label": "1:n: Warum entstehen mehrere Zeilen?"
          },
          {
            "id": "filterrichtung",
            "label": "Filterrichtung verstehen"
          },
          {
            "id": "fakt-dimension",
            "label": "Fakt- und Dimensionstabelle"
          },
          {
            "id": "star-schema",
            "label": "Star Schema aufbauen"
          },
          {
            "id": "granularitaet",
            "label": "Granularität: Was bedeutet eine Zeile?"
          },
          {
            "id": "aktive-beziehung",
            "label": "Aktive und inaktive Beziehung"
          },
          {
            "id": "beziehung-eins-eins",
            "label": "1:1-Beziehung richtig einordnen"
          },
          {
            "id": "beziehung-nm",
            "label": "n:m-Beziehung fachlich modellieren"
          },
          {
            "id": "fakt-zu-fakt",
            "label": "Warum Fakt-zu-Fakt problematisch ist"
          },
          {
            "id": "kardinalitaet",
            "label": "Kardinalität prüfen: 1:1, 1:n oder n:m"
          },
          {
            "id": "modellansicht",
            "label": "Modellansicht lesen"
          },
          {
            "id": "schluessel",
            "label": "Stabile Schlüssel verwenden"
          }
        ]
      },
      {
        "title": "DAX & Measures",
        "items": [
          {
            "id": "measure",
            "label": "Measure erstellen"
          },
          {
            "id": "berechnete-spalte",
            "label": "Berechnete Spalte erstellen"
          },
          {
            "id": "measure-spalte",
            "label": "Measure oder Spalte?"
          },
          {
            "id": "sum",
            "label": "SUM: Spalte summieren"
          },
          {
            "id": "divide",
            "label": "DIVIDE: Quote berechnen"
          },
          {
            "id": "calculate",
            "label": "CALCULATE"
          },
          {
            "id": "distinctcount",
            "label": "DISTINCTCOUNT: eindeutige Personen zählen"
          },
          {
            "id": "countrows",
            "label": "COUNTROWS: Zeilen zählen"
          },
          {
            "id": "sumx",
            "label": "SUMX: zeilenweise rechnen und summieren"
          },
          {
            "id": "dax-filter",
            "label": "FILTER: eine Teilmenge bilden"
          },
          {
            "id": "removefilters",
            "label": "REMOVEFILTERS: Filter gezielt aufheben"
          },
          {
            "id": "selectedvalue",
            "label": "SELECTEDVALUE: eindeutige Auswahl lesen"
          },
          {
            "id": "related",
            "label": "RELATED: Wert aus einer Beziehung holen"
          },
          {
            "id": "filterkontext",
            "label": "Filterkontext prüfen"
          },
          {
            "id": "count",
            "label": "COUNT: nichtleere Werte zählen"
          },
          {
            "id": "dax-all",
            "label": "ALL oder REMOVEFILTERS?"
          },
          {
            "id": "dax-average",
            "label": "AVERAGE: Durchschnitt je Datenzeile"
          },
          {
            "id": "dax-coalesce",
            "label": "COALESCE und ISBLANK: fehlende Ergebnisse behandeln"
          },
          {
            "id": "dax-if",
            "label": "IF: zwei Ergebnisse unterscheiden"
          },
          {
            "id": "dax-median",
            "label": "MEDIAN: mittleren Wert bestimmen"
          },
          {
            "id": "dax-min-max",
            "label": "MIN und MAX: kleinster oder größter Wert"
          },
          {
            "id": "dax-switch",
            "label": "SWITCH: mehrere Fälle verständlich ordnen"
          },
          {
            "id": "dax-values",
            "label": "VALUES und HASONEVALUE: Auswahl prüfen"
          }
        ]
      },
      {
        "title": "Zeitintelligenz",
        "items": [
          {
            "id": "ytd",
            "label": "YTD berechnen"
          },
          {
            "id": "vorjahr",
            "label": "Vorjahr berechnen"
          },
          {
            "id": "datumstabelle",
            "label": "Datumstabelle erstellen"
          },
          {
            "id": "aktueller-stichtag",
            "label": "Letzten verfügbaren Stichtag bestimmen"
          },
          {
            "id": "bestand-bewegung",
            "label": "Bestandskennzahl oder Bewegungskennzahl?"
          },
          {
            "id": "dateadd",
            "label": "DATEADD und SAMEPERIODLASTYEAR"
          },
          {
            "id": "datesytd-totalytd",
            "label": "DATESYTD oder TOTALYTD"
          },
          {
            "id": "dax-jahr-monat",
            "label": "YEAR und MONTH: Kalenderattribute"
          },
          {
            "id": "monatsultimo",
            "label": "EOMONTH: Monatsultimo bestimmen"
          }
        ]
      },
      {
        "title": "Berichte & Visualisierung",
        "items": [
          {
            "id": "karte",
            "label": "Karte: eine Kennzahl anzeigen"
          },
          {
            "id": "tabelle",
            "label": "Tabelle: Details prüfen"
          },
          {
            "id": "matrix",
            "label": "Matrix: nach Dimensionen auswerten"
          },
          {
            "id": "balkendiagramm",
            "label": "Balkendiagramm: Kategorien vergleichen"
          },
          {
            "id": "liniendiagramm",
            "label": "Liniendiagramm: Zeitverlauf zeigen"
          },
          {
            "id": "slicer",
            "label": "Slicer: Auswahl anbieten"
          },
          {
            "id": "drilldown",
            "label": "Drilldown: Detailstufe wechseln"
          },
          {
            "id": "visualinteraktionen",
            "label": "Visualinteraktionen einstellen"
          },
          {
            "id": "bedingte-formatierung",
            "label": "Bedingte Formatierung verwenden"
          },
          {
            "id": "datenbeschriftungen",
            "label": "Datenbeschriftungen einschalten"
          },
          {
            "id": "anzeigeeinheiten",
            "label": "Anzeigeeinheiten und Dezimalstellen"
          },
          {
            "id": "diagrammtitel",
            "label": "Diagrammtitel mit Kontext"
          },
          {
            "id": "drillthrough",
            "label": "Drillthrough: zur Detailseite wechseln"
          },
          {
            "id": "prozentformat",
            "label": "0,95 als 95 % anzeigen"
          },
          {
            "id": "referenzlinie",
            "label": "Referenzlinie im Diagramm"
          },
          {
            "id": "saeulendiagramm",
            "label": "Säulendiagramm erstellen"
          },
          {
            "id": "tooltips",
            "label": "Tooltip gezielt ergänzen"
          },
          {
            "id": "visual-sortieren",
            "label": "Visual nach Wert oder Kategorie sortieren"
          }
        ]
      },
      {
        "title": "Fehler & Plausibilitätsprüfung",
        "items": [
          {
            "id": "summe-zu-hoch",
            "label": "Falsche Summe prüfen"
          },
          {
            "id": "blank",
            "label": "BLANK: Warum bleibt die Kennzahl leer?"
          },
          {
            "id": "filter-fehler",
            "label": "Filter funktioniert nicht"
          },
          {
            "id": "beziehung-fehler",
            "label": "Beziehung lässt sich nicht erstellen"
          },
          {
            "id": "datum-sortieren",
            "label": "Datum / Monat falsch sortiert"
          },
          {
            "id": "measure-fehler",
            "label": "Measure reagiert unerwartet"
          },
          {
            "id": "bestand-monate",
            "label": "Bestand wird über Monate aufsummiert"
          },
          {
            "id": "mehrere-datumsbeziehungen",
            "label": "Datumsfilter wirkt auf das falsche Datum"
          },
          {
            "id": "visual-gesamtsumme",
            "label": "Warum die Gesamtsumme anders ausfällt"
          }
        ]
      }
    ]
  },
  {
    "name": "Excel",
    "slug": "excel",
    "description": "Aktive Praxishilfe: Listen vorbereiten, Werte zuordnen, Formeln einsetzen und Ergebnisse auswerten.",
    "groups": [
      {
        "title": "Daten prüfen & bereinigen",
        "items": [
          {
            "id": "excel-liste-vorbereiten",
            "label": "Excel-Liste für Auswertung vorbereiten"
          },
          {
            "id": "excel-dubletten-finden",
            "label": "Duplikate finden"
          },
          {
            "id": "excel-leere-zellen",
            "label": "Leere Zellen und Fehlerwerte prüfen"
          }
        ]
      },
      {
        "title": "Text bearbeiten",
        "items": [
          {
            "id": "glaetten",
            "label": "Leerzeichen entfernen: GLÄTTEN"
          },
          {
            "id": "text-ausschnitt",
            "label": "LINKS, RECHTS und TEIL"
          },
          {
            "id": "text-trennzeichen",
            "label": "TEXTVOR und TEXTNACH"
          },
          {
            "id": "textteilen",
            "label": "TEXTTEILEN: Text dynamisch verteilen"
          },
          {
            "id": "textverketten",
            "label": "TEXTVERKETTEN: Werte mit Trennzeichen verbinden"
          },
          {
            "id": "wechseln-ersetzen",
            "label": "WECHSELN oder ERSETZEN?"
          }
        ]
      },
      {
        "title": "Datum & Datentypen",
        "items": [
          {
            "id": "excel-zahl-text",
            "label": "Zahlen als Text erkennen und umwandeln"
          },
          {
            "id": "excel-datum",
            "label": "Datumswerte korrigieren"
          },
          {
            "id": "excel-kalender",
            "label": "JAHR, MONAT, TAG und DATUM"
          },
          {
            "id": "excel-datumsdifferenz",
            "label": "Differenz zwischen Datumswerten"
          },
          {
            "id": "excel-monatsende",
            "label": "MONATSENDE und HEUTE"
          }
        ]
      },
      {
        "title": "Nachschlagen & Zuordnen",
        "items": [
          {
            "id": "excel-formeln",
            "label": "Excel – Formeln & Funktionen"
          },
          {
            "id": "xverweis",
            "label": "XVERWEIS: Segment aus Stammdaten holen"
          },
          {
            "id": "index-vergleich",
            "label": "INDEX / VERGLEICH"
          },
          {
            "id": "excel-fehlende-treffer",
            "label": "Fehlende Treffer gezielt behandeln"
          },
          {
            "id": "excel-mehrere-kriterien",
            "label": "Nachschlagen mit mehreren Kriterien"
          }
        ]
      },
      {
        "title": "Filtern & eindeutige Listen",
        "items": [
          {
            "id": "excel-filtern",
            "label": "FILTER: passende Zeilen ausgeben"
          },
          {
            "id": "eindeutig",
            "label": "EINDEUTIG: Liste ohne Wiederholungen"
          },
          {
            "id": "sortieren",
            "label": "SORTIEREN: dynamische Liste ordnen"
          },
          {
            "id": "excel-sichtbare",
            "label": "Nur sichtbare Zeilen kopieren oder bearbeiten"
          },
          {
            "id": "sortierennach",
            "label": "SORTIERENNACH: nach mehreren Feldern sortieren"
          }
        ]
      },
      {
        "title": "Aggregieren",
        "items": [
          {
            "id": "summewenns",
            "label": "SUMMEWENNS: nach Geschäftsstelle und Produkt auswerten"
          },
          {
            "id": "zaehlenwenns",
            "label": "ZÄHLENWENNS: nach Geschäftsstelle und Produkt auswerten"
          },
          {
            "id": "mittelwertwenns",
            "label": "MITTELWERTWENNS"
          },
          {
            "id": "aggregat",
            "label": "AGGREGAT: Fehler gezielt auslassen"
          },
          {
            "id": "mittelwertwenn",
            "label": "MITTELWERTWENN: bedingt mitteln"
          },
          {
            "id": "summewenn",
            "label": "SUMMEWENN: ein Kriterium"
          },
          {
            "id": "teilergebnis",
            "label": "TEILERGEBNIS: gefilterte Zeilen auswerten"
          },
          {
            "id": "zaehlenwenn",
            "label": "ZÄHLENWENN: Treffer zählen"
          }
        ]
      },
      {
        "title": "Logik & Fehlerbehandlung",
        "items": [
          {
            "id": "excel-fehler",
            "label": "WENN: zwischen zwei Ergebnissen wählen"
          },
          {
            "id": "und",
            "label": "UND: alle Bedingungen erfüllen"
          },
          {
            "id": "oder",
            "label": "ODER: mindestens eine Bedingung erfüllen"
          },
          {
            "id": "wennfehler",
            "label": "WENNFEHLER: Fehler bewusst abfangen"
          },
          {
            "id": "wennnv",
            "label": "WENNNV: fehlende Treffer kennzeichnen"
          },
          {
            "id": "nicht",
            "label": "NICHT: Bedingung umkehren"
          },
          {
            "id": "wenns",
            "label": "WENNS: geordnete Regeln"
          }
        ]
      },
      {
        "title": "PivotTables & Auswertung",
        "items": [
          {
            "id": "pivottable",
            "label": "PivotTable erstellen"
          },
          {
            "id": "pivotchart",
            "label": "PivotChart erstellen"
          },
          {
            "id": "pivot-eindeutig",
            "label": "Eindeutige Anzahl in einer PivotTable"
          },
          {
            "id": "pivot-gruppieren",
            "label": "Pivot nach Datum oder Zahlen gruppieren"
          },
          {
            "id": "pivot-summe-anzahl",
            "label": "Pivot zeigt Anzahl statt Summe"
          }
        ]
      },
      {
        "title": "Excel Power Query",
        "items": [
          {
            "id": "excel-power-query",
            "label": "Power Query in Excel verwenden"
          },
          {
            "id": "pq-excel-oder-powerbi",
            "label": "Power Query in Excel oder Power BI?"
          },
          {
            "id": "xverweis-oder-query",
            "label": "XVERWEIS oder Power Query?"
          },
          {
            "id": "pivot-oder-query",
            "label": "PivotTable oder Power Query?"
          }
        ]
      },
      {
        "title": "Typische Probleme",
        "items": [
          {
            "id": "problem-xverweis-fehlt",
            "label": "XVERWEIS findet Wert nicht"
          },
          {
            "id": "problem-xverweis-falsch",
            "label": "XVERWEIS liefert falschen Datensatz"
          },
          {
            "id": "problem-summewenns",
            "label": "SUMMEWENNS stimmt nicht"
          },
          {
            "id": "problem-pivot-alt",
            "label": "Pivot zeigt alte Daten"
          },
          {
            "id": "problem-pivot-anzahl",
            "label": "Pivot zählt statt summiert"
          },
          {
            "id": "problem-filter-kalk",
            "label": "FILTER liefert #KALK!"
          },
          {
            "id": "problem-formel-text",
            "label": "Formel wird als Text angezeigt"
          },
          {
            "id": "problem-zahl-text",
            "label": "Zahl ist als Text gespeichert"
          },
          {
            "id": "problem-datum-excel",
            "label": "Datum wird nicht erkannt"
          }
        ]
      }
    ]
  },
  {
    "name": "IDA",
    "slug": "ida",
    "description": "In Entwicklung. Allgemeine Reporting- und Analysehilfen; der Bereich wird derzeit neu aufgebaut.",
    "groups": []
  }
];
export const powerQueryGroups: Group[] = [
  {
    "title": "Einstieg",
    "items": [
      {
        "id": "power-query",
        "label": "Was ist Power Query?"
      },
      {
        "id": "daten-laden",
        "label": "Daten in Power BI laden"
      },
      {
        "id": "pq-workflow",
        "label": "Daten in Power Query aufbereiten"
      }
    ]
  },
  {
    "title": "Daten verstehen",
    "items": [
      {
        "id": "pq-profiling",
        "label": "Spaltenqualität, Spaltenverteilung und Spaltenprofil"
      },
      {
        "id": "datenbereinigung",
        "label": "Datentypen fachlich richtig festlegen"
      },
      {
        "id": "granularitaet",
        "label": "Granularität: Was bedeutet eine Zeile?"
      }
    ]
  },
  {
    "title": "Daten bereinigen",
    "items": [
      {
        "id": "nullwerte",
        "label": "Was mache ich mit fehlenden Werten?"
      },
      {
        "id": "dubletten",
        "label": "Dubletten anhand der richtigen Zeilenebene prüfen"
      },
      {
        "id": "pq-text",
        "label": "Text bereinigen, ersetzen und teilen"
      },
      {
        "id": "spalten-entfernen",
        "label": "Benötigte Spalten bewusst auswählen"
      }
    ]
  },
  {
    "title": "Struktur verändern",
    "items": [
      {
        "id": "gruppieren",
        "label": "Gruppieren: eine Zeile je Kunde"
      },
      {
        "id": "pivotieren",
        "label": "Pivotieren: eine breite Übergabetabelle erstellen"
      },
      {
        "id": "entpivotieren",
        "label": "Entpivotieren: Monate von breit nach lang"
      },
      {
        "id": "pq-bedingt",
        "label": "Bedingte Spalte"
      },
      {
        "id": "pq-benutzerdefiniert",
        "label": "Benutzerdefinierte Spalte"
      },
      {
        "id": "pq-datum",
        "label": "Datum in Power Query transformieren"
      }
    ]
  },
  { title: "M / Code", items: [{id: "power-query-m", label: "M-Grundlagen · Formeln & Funktionen"}] },
  {
    "title": "Tabellen kombinieren",
    "items": [
      {
        "id": "zusammenfuehren",
        "label": "Merge: Tabellen über Schlüssel zusammenführen"
      },
      {
        "id": "anhaengen",
        "label": "Append: Tabellen untereinander anhängen"
      },
      {
        "id": "dateien-kombinieren",
        "label": "Ordnerimport · wiederkehrende Dateien"
      }
    ]
  },
  {
    "title": "Abfragen organisieren",
    "items": [
      {
        "id": "pq-duplizieren",
        "label": "Referenz oder Duplikat einer Abfrage?"
      },
      {
        "id": "pq-laden",
        "label": "Laden einer Hilfsabfrage steuern"
      }
    ]
  },
  {
    "title": "Fehler & Kontrolle",
    "items": [
      {
        "id": "pq-fehler",
        "label": "Fehlerhafte Werte prüfen"
      },
      {
        "id": "problem-merge-zeilen",
        "label": "Mehr Zeilen nach Merge"
      },
      {
        "id": "schluessel",
        "label": "Stabile Schlüssel verwenden"
      }
    ]
  }
];
export const frequent = ["pq-workflow", "pq-profiling", "calculate", "xverweis", "beziehungen", "dubletten", "measure-spalte", "distinctcount"];
