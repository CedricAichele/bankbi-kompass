---
{
  "id": "pivot-eindeutig",
  "slug": "pivot-eindeutig",
  "titel": "Eindeutige Anzahl in einer PivotTable",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Pivot",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eindeutige Anzahl steht bei geeigneten datenmodellbasierten PivotTables zur Verfügung. Eine normale Anzahl zählt Detailzeilen.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": [
    "Eindeutige Anzahl in einer PivotTable"
  ],
  "synonyme": [
    "pivot eindeutige anzahl"
  ],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten",
    "eindeutig",
    "distinctcount"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/ways-to-count-values-in-a-worksheet",
    "https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    "https://support.microsoft.com/de-DE/Excel/create-a-data-model-in-excel"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eindeutige Kunden statt Kontenzeilen zählen.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Erstelle in Excel Desktop für Windows eine PivotTable über **Einfügen → PivotTable** und aktiviere **Diese Daten dem Datenmodell hinzufügen**. Die Verfügbarkeit hängt von der Excel-Ausgabe ab.
2. Ziehe **Kunde** in Werte und öffne **Wertfeldeinstellungen**.
3. Wähle **Diskrete Anzahl** beziehungsweise die versionsabhängig bezeichnete eindeutige Anzahl.
4. Vergleiche mit der normalen Anzahl. Ist die Datenmodellfunktion nicht verfügbar, nutze eine separate EINDEUTIG-Auswertung oder eine vorab deduplizierte Schlüsselliste.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Segment | Betrag |
| --- | --- | --- |
| P001 | A | 100 |
| P001 | A | 50 |
| P002 | B | 50 |

### Aktion

Kunde eindeutig zählen.

### Nachher · Beispielergebnis

| Kennzahl | Wert |
| --- | --- |
| Normale Anzahl | 3 |
| Eindeutige Kunden | 2 |

## Ergebnis

Eindeutige Anzahl steht bei geeigneten datenmodellbasierten PivotTables zur Verfügung. Eine normale Anzahl zählt Detailzeilen.

## Warum funktioniert das?

Das Datenmodell kann unterschiedliche Schlüssel statt ihrer Vorkommen zählen. P001 erscheint zweimal in der Quelle, trägt aber nur einmal zur Kundenanzahl bei.

## Typischer Fehler

Die normale Anzahl als eindeutige Kundenanzahl beschriften.

## Plausibilitätscheck

Vergleiche die oben angegebenen Ergebniswerte mit der Quelle. Entferne für die Gesamtkontrolle alle nicht beabsichtigten Filter.
