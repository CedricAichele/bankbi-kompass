---
{
  "id": "pivot-gruppieren",
  "slug": "pivot-gruppieren",
  "titel": "Pivot nach Datum oder Zahlen gruppieren",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "PivotTables & Auswertung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Gruppieren fasst passende Detailwerte zu Intervallen zusammen. Die Quelldaten bleiben erhalten.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": [
    "Pivot nach Datum oder Zahlen gruppieren"
  ],
  "synonyme": [
    "pivot datum gruppieren"
  ],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten",
    "excel-datum"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable",
    "https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    "https://support.microsoft.com/de-de/excel/get-started/group-or-ungroup-data-in-a-pivottable"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Datumswerte nach Jahren und Monaten bündeln.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Prüfe in der Quelle echte Datumswerte ohne Text oder Fehler und aktualisiere die PivotTable.
2. Ziehe Datum in die Zeilen der PivotTable.
3. Klicke mit rechts auf einen Datumswert → **Gruppieren**. Wähle **Jahre** und **Monate** gemeinsam.
4. Bestätige und prüfe den Jahreswechsel. Je nach Datenquelle oder Datenmodell steht die manuelle Gruppierung nicht zur Verfügung; dann Kalenderattribute aus der Quelle verwenden.

## Beispiel

### Vorher · Beispieldaten

| Datum | Betrag |
| --- | --- |
| 15.01.2025 | 100 |
| 15.01.2026 | 150 |

### Aktion

Datum nach Jahr und Monat gruppieren.

### Nachher · Beispielergebnis

| Gruppe | Summe |
| --- | --- |
| 2025 Januar | 100 |
| 2026 Januar | 150 |

## Ergebnis

Januar 2025 ergibt 100 und Januar 2026 ergibt 150 in getrennten Gruppen.

## Warum funktioniert das?

Monat allein wiederholt sich jedes Jahr. Der zusätzliche Jahresschlüssel verhindert die Vermischung verschiedener Jahre.

## Typischer Fehler

Nur Monate gruppieren und Januar verschiedener Jahre als einen Zeitraum lesen.

## Plausibilitätscheck

Zwei Jahr-Monat-Gruppen; 100 + 150 = 250 insgesamt. Beide Januare nicht als eine Periode lesen.
