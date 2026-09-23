---
{
  "id": "pivot-aktualisieren",
  "slug": "pivot-aktualisieren",
  "titel": "PivotTable aktualisieren",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Pivot",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nach Änderungen an Quelldaten muss die Pivot-Auswertung aktualisiert werden. Eine benannte Tabelle erleichtert das Mitwachsen.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": [
    "PivotTable aktualisieren"
  ],
  "synonyme": [
    "pivot aktualisieren"
  ],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/refresh-pivottable-data",
    "https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    "https://support.microsoft.com/de-DE/Excel/get-started/create-a-pivottable-to-analyze-worksheet-data"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Quellenänderungen in einer bestehenden PivotTable sichtbar machen.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Prüfe unter **PivotTable-Analyse → Datenquelle ändern**, ob der vollständige Quellbereich beziehungsweise die benannte Excel-Tabelle verwendet wird.
2. Ergänze eine neue Quellzeile innerhalb der Tabelle, im Beispiel P003/C/25.
3. Klicke in die PivotTable → **Rechtsklick → Aktualisieren**.
4. Prüfe, ob P003 und der erhöhte Gesamtbetrag erscheinen. Bei einem festen Bereich muss dessen Ende gegebenenfalls erweitert werden.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Segment | Betrag |
| --- | --- | --- |
| P001 | A | 100 |
| P001 | A | 50 |
| P002 | B | 50 |

### Aktion

Neue Quellzeile 25 aufnehmen und Pivot aktualisieren.

### Nachher · Beispielergebnis

| Stand | Gesamt |
| --- | --- |
| Vor Ergänzung | 200 |
| Nach Aktualisierung | 225 |

## Ergebnis

Nach Änderungen an Quelldaten muss die Pivot-Auswertung aktualisiert werden. Eine benannte Tabelle erleichtert das Mitwachsen.

## Warum funktioniert das?

Die Pivot-Auswertung verwendet einen eigenen Datenstand. Aktualisieren liest ihre definierte Quelle erneut; ein zu kleiner Quellbereich wird dadurch nicht automatisch repariert.

## Typischer Fehler

Nur aktualisieren, obwohl die neue Zeile außerhalb des Quellbereichs liegt.

## Plausibilitätscheck

Vergleiche die oben angegebenen Ergebniswerte mit der Quelle. Entferne für die Gesamtkontrolle alle nicht beabsichtigten Filter.
