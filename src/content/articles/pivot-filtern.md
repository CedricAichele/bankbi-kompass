---
{
  "id": "pivot-filtern",
  "slug": "pivot-filtern",
  "titel": "PivotTable filtern",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Pivot",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Filter, Datenschnitte und Datumsfilter beschränken die Pivot-Auswertung. Prüfe den verbleibenden Kontext sichtbar.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": [
    "PivotTable filtern"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten",
    "pivot-felder",
    "teilergebnis"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    "https://support.microsoft.com/de-DE/Excel/get-started/create-a-pivottable-to-analyze-worksheet-data"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Pivot-Auswertung auf bestimmte Kategorien eingrenzen.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Klicke in die PivotTable und öffne die Feldliste.
2. Ziehe **Segment** in den Bereich **Filter**.
3. Öffne oberhalb der PivotTable den Segmentfilter und wähle **A**.
4. Prüfe das Gesamtergebnis und stelle danach den Filter wieder auf **Alle**.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Segment | Betrag |
| --- | --- | --- |
| P001 | A | 100 |
| P001 | A | 50 |
| P002 | B | 50 |

### Aktion

Segment A auswählen.

### Nachher · Beispielergebnis

| Filter | Summe |
| --- | --- |
| A | 150 |
| Alle | 200 |

## Ergebnis

Filter, Datenschnitte und Datumsfilter beschränken die Pivot-Auswertung. Prüfe den verbleibenden Kontext sichtbar.

## Warum funktioniert das?

Der Berichtsfilter schränkt die Quellzeilen ein, die in die Pivot-Aggregation eingehen. Er entfernt keine Daten aus der Originaltabelle.

## Typischer Fehler

Einen gesetzten Filter bei der Gesamtsummenprüfung übersehen.

## Plausibilitätscheck

Vergleiche die oben angegebenen Ergebniswerte mit der Quelle. Entferne für die Gesamtkontrolle alle nicht beabsichtigten Filter.
