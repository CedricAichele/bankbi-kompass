---
{
  "id": "pivotchart",
  "slug": "pivotchart",
  "titel": "PivotChart erstellen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "PivotTables & Auswertung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein PivotChart visualisiert die zugehörige Pivot-Auswertung und reagiert auf deren Filter.",
  "ort": "Excel → PivotTable auswählen → PivotChart",
  "tags": [
    "PivotChart erstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten",
    "balkendiagramm"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-excel-stunning-report"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Pivot-Auswertung als Diagramm darstellen.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Klicke in die vorbereitete PivotTable mit Segment in Zeilen und Summe Betrag in Werte.
2. Wähle **PivotTable-Analyse → PivotChart**.
3. Wähle ein Balken- oder Säulendiagramm und bestätige.
4. Ergänze Titel und Einheit. Filtere Segment A und prüfe, ob Diagramm und PivotTable dieselbe Auswahl zeigen.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Segment | Betrag |
| --- | --- | --- |
| P001 | A | 100 |
| P001 | A | 50 |
| P002 | B | 50 |

### Aktion

Pivotwerte als Balken darstellen.

### Nachher · Beispielergebnis

| Segment | Balkenwert |
| --- | --- |
| A | 150 |
| B | 50 |

## Ergebnis

Ein PivotChart visualisiert die zugehörige Pivot-Auswertung und reagiert auf deren Filter.

## Warum funktioniert das?

Das PivotChart visualisiert die Pivot-Aggregation. Seine Filter sind mit der zugrunde liegenden Pivot-Auswertung verbunden.

## Typischer Fehler

Diagramm und PivotTable als unabhängig gepflegte Datenstände behandeln.

## Plausibilitätscheck

Vergleiche die oben angegebenen Ergebniswerte mit der Quelle. Entferne für die Gesamtkontrolle alle nicht beabsichtigten Filter.
