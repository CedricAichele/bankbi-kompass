export type Group = { title: string; status?: string; items: { label: string; id: string }[] };
export type Tool = { name: "Power BI" | "Excel" | "IDA"; slug: string; description?: string; groups: Group[] };
export const toolsCatalog: Tool[] = [
  {
    "name": "Power BI",
    "slug": "power-bi",
    "description": "Aktiv: zusammenhängende Arbeitsabläufe für Power Query, Datenmodell und DAX. Der Berichtsbereich wird gezielt erweitert.",
    "groups": [
      {
        "title": "Start",
        "status": "Aktiv",
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
            "id": "measure-spalte",
            "label": "Measure oder Spalte?"
          }
        ]
      },
      {
        "title": "Power Query & Datenaufbereitung",
        "status": "Ausgebaut",
        "items": [
          {
            "id": "pq-workflow",
            "label": "Daten in Power Query aufbereiten"
          },
          {
            "id": "pq-profiling",
            "label": "Spaltenqualität, Spaltenverteilung und Spaltenprofil"
          },
          {
            "id": "pq-text",
            "label": "Text bereinigen, ersetzen und teilen"
          },
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
            "label": "Wiederkehrende Dateien automatisch einlesen – Ordnerimport"
          },
          {
            "id": "power-query-m",
            "label": "Power Query M – Formeln & Funktionen"
          }
        ]
      },
      {
        "title": "Datenmodell",
        "status": "Aktiv · Grundlagen",
        "items": [
          {
            "id": "granularitaet",
            "label": "Granularität: Was bedeutet eine Zeile?"
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
            "id": "beziehungen",
            "label": "Beziehung erstellen"
          },
          {
            "id": "kardinalitaet",
            "label": "Kardinalität prüfen: 1:1, 1:n oder n:m"
          },
          {
            "id": "filterrichtung",
            "label": "Filterrichtung verstehen"
          },
          {
            "id": "schluessel",
            "label": "Stabile Schlüssel verwenden"
          },
          {
            "id": "datumstabelle",
            "label": "Datumstabelle erstellen"
          }
        ]
      },
      {
        "title": "DAX",
        "status": "Ausgebaut",
        "items": [
          {
            "id": "dax-grundlagen",
            "label": "DAX verstehen: Measures, Kontexte und Iteratoren"
          },
          {
            "id": "measure",
            "label": "Measure erstellen"
          },
          {
            "id": "calculate",
            "label": "CALCULATE"
          },
          {
            "id": "sumx",
            "label": "SUMX: zeilenweise rechnen und summieren"
          },
          {
            "id": "dax-variablen",
            "label": "VAR / RETURN: DAX verständlich aufbauen"
          },
          {
            "id": "dax-perioden",
            "label": "Monat, Quartal und Vorperiode in DAX vergleichen"
          },
          {
            "id": "dax-formeln",
            "label": "DAX – Funktionen & Formeln"
          }
        ]
      },
      {
        "title": "Berichte & Visualisierung",
        "status": "In Ausbau",
        "items": [
          {
            "id": "visualwahl",
            "label": "Welches Power-BI-Visual brauche ich?"
          },
          {
            "id": "visual-formatierung",
            "label": "Visuals lesbar formatieren und sortieren"
          },
          {
            "id": "slicer",
            "label": "Slicer: Auswahl anbieten"
          },
          {
            "id": "drillthrough",
            "label": "Drillthrough: zur Detailseite wechseln"
          },
          {
            "id": "tooltips",
            "label": "Tooltip gezielt ergänzen"
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
            "id": "power-bi-csv-export",
            "label": "Power-BI-Tabelle als CSV exportieren und in Excel öffnen"
          }
        ]
      },
      {
        "title": "Fehlersuche",
        "status": "Aktiv",
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
            "id": "beziehung-fehler",
            "label": "Beziehung lässt sich nicht erstellen"
          },
          {
            "id": "filter-fehler",
            "label": "Filter funktioniert nicht"
          },
          {
            "id": "problem-merge-zeilen",
            "label": "Mehr Zeilen nach Merge"
          },
          {
            "id": "datum-sortieren",
            "label": "Datum / Monat falsch sortiert"
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
    "description": "Aktiv: Listen vorbereiten, Werte zuordnen, Formeln nachschlagen und Ergebnisse mit PivotTables oder Power Query prüfen.",
    "groups": [
      {
        "title": "Daten prüfen & bereinigen",
        "items": [
          {
            "id": "excel-csv-spalten",
            "label": "CSV in einer Spalte? Richtig trennen und laden"
          },
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
            "id": "excel-text-zerlegen",
            "label": "Text in Excel zerlegen: Position oder Trennzeichen?"
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
  {
    "title": "M / Code",
    "items": [
      {
        "id": "power-query-m",
        "label": "M-Grundlagen · Formeln & Funktionen"
      }
    ]
  },
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
export const daxGroups: Group[] = [
  {
    "title": "Kernwissen",
    "items": [
      {
        "id": "dax-grundlagen",
        "label": "DAX verstehen: Measures, Kontexte und Iteratoren"
      },
      {
        "id": "measure-spalte",
        "label": "Measure oder Spalte?"
      },
      {
        "id": "measure",
        "label": "Measure erstellen"
      },
      {
        "id": "filterkontext",
        "label": "Filterkontext prüfen"
      },
      {
        "id": "datumstabelle",
        "label": "Datumstabelle erstellen"
      },
      {
        "id": "bestand-bewegung",
        "label": "Bestandskennzahl oder Bewegungskennzahl?"
      }
    ]
  },
  {
    "title": "Kennzahlen & Logik",
    "items": [
      {
        "id": "sum",
        "label": "SUM: Spalte summieren"
      },
      {
        "id": "count",
        "label": "COUNT: nichtleere Werte zählen"
      },
      {
        "id": "countrows",
        "label": "COUNTROWS: Zeilen zählen"
      },
      {
        "id": "distinctcount",
        "label": "DISTINCTCOUNT: eindeutige Personen zählen"
      },
      {
        "id": "divide",
        "label": "DIVIDE: Quote berechnen"
      },
      {
        "id": "dax-average",
        "label": "AVERAGE: Durchschnitt je Datenzeile"
      },
      {
        "id": "dax-min-max",
        "label": "MIN und MAX: kleinster oder größter Wert"
      },
      {
        "id": "dax-if",
        "label": "IF: zwei Ergebnisse unterscheiden"
      },
      {
        "id": "dax-switch",
        "label": "SWITCH: mehrere Fälle verständlich ordnen"
      },
      {
        "id": "dax-coalesce",
        "label": "COALESCE und ISBLANK: fehlende Ergebnisse behandeln"
      }
    ]
  },
  {
    "title": "Filter & Kontext",
    "items": [
      {
        "id": "calculate",
        "label": "CALCULATE"
      },
      {
        "id": "dax-filter",
        "label": "FILTER: eine Teilmenge bilden"
      },
      {
        "id": "dax-all",
        "label": "ALL oder REMOVEFILTERS?"
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
        "id": "dax-values",
        "label": "VALUES und HASONEVALUE: Auswahl prüfen"
      },
      {
        "id": "dax-variablen",
        "label": "VAR / RETURN: DAX verständlich aufbauen"
      }
    ]
  },
  {
    "title": "Tabellen & Beziehungen",
    "items": [
      {
        "id": "sumx",
        "label": "SUMX: zeilenweise rechnen und summieren"
      },
      {
        "id": "dax-tabellen",
        "label": "DAX-Tabellen: auswählen, ergänzen und gruppieren"
      },
      {
        "id": "related",
        "label": "RELATED: Wert aus einer Beziehung holen"
      },
      {
        "id": "dax-beziehungen",
        "label": "DAX über Tabellen hinweg: Beziehungen und Zuordnung"
      },
      {
        "id": "dax-ranglisten",
        "label": "TOPN, RANKX und CONCATENATEX: Ranglisten nachvollziehen"
      }
    ]
  },
  {
    "title": "Datum & Zeitvergleiche",
    "items": [
      {
        "id": "dax-jahr-monat",
        "label": "YEAR und MONTH: Kalenderattribute"
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
        "id": "dax-perioden",
        "label": "Monat, Quartal und Vorperiode in DAX vergleichen"
      },
      {
        "id": "aktueller-stichtag",
        "label": "Letzten verfügbaren Stichtag bestimmen"
      }
    ]
  },
  {
    "title": "Referenz",
    "items": [
      {
        "id": "dax-formeln",
        "label": "DAX – Funktionen & Formeln"
      }
    ]
  }
];
export const frequent = ["pq-workflow","pq-profiling","calculate","xverweis","beziehungen","dubletten","measure-spalte","distinctcount"];
