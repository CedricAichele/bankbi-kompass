---
{
  "id": "pivot-summe-anzahl",
  "slug": "pivot-summe-anzahl",
  "titel": "Pivot zeigt Anzahl statt Summe",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "PivotTables & Auswertung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe zuerst den Quelldatentyp, dann die Zusammenfassung des Wertfelds.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": [
    "Pivot zeigt Anzahl statt Summe"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten",
    "excel-zahl-text"
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
  "screenshots": [
    {
      "src": "images/excel/excel-pivot-aggregation.webp",
      "alt": "Wertfeldeinstellungen: Summe statt Anzahl für die Bestandsspalte.",
      "caption": "Wertfeldeinstellungen: Summe statt Anzahl für die Bestandsspalte.",
      "schritt": 3,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine unerwartete Anzahl statt der gewünschten Summe korrigieren.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Prüfe den Betrag in der Quelle mit **ISTZAHL**. Korrigiere Zahlentexte fachlich passend.
2. Klicke in die PivotTable und wähle **Rechtsklick → Aktualisieren**.
3. Öffne in der Feldliste das Menü des Wertefelds → **Wertfeldeinstellungen**.
4. Wähle **Summe** statt Anzahl und anschließend unter Zahlenformat das gewünschte Format.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Segment | Betrag |
| --- | --- | --- |
| P001 | A | 100 |
| P001 | A | 50 |
| P002 | B | 50 |

### Aktion

Betrag als Summe aggregieren.

### Nachher · Beispielergebnis

| Aggregation | Gesamt |
| --- | --- |
| Anzahl | 3 |
| Summe | 200 |

## Ergebnis

Prüfe zuerst den Quelldatentyp, dann die Zusammenfassung des Wertfelds.

## Warum funktioniert das?

Die Anzahl misst befüllte Datensätze; die Summe addiert Beträge. Eine andere Aggregationsart ändert die Bedeutung der Kennzahl.

## Typischer Fehler

Nur den angezeigten Namen in Summe ändern; die tatsächliche Einstellung muss passen.

## Plausibilitätscheck

Vergleiche die oben angegebenen Ergebniswerte mit der Quelle. Entferne für die Gesamtkontrolle alle nicht beabsichtigten Filter.
