---
{
  "id": "pivot-felder",
  "slug": "pivot-felder",
  "titel": "Pivot-Felder zuordnen: Zeilen, Spalten, Werte",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Pivot",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeilen und Spalten bestimmen die Gruppierung; Werte bestimmen die Berechnung. Filter begrenzen die Auswahl.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": [
    "Pivot-Felder zuordnen: Zeilen, Spalten, Werte"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pivottable",
    "excel-liste-vorbereiten",
    "pivot-summe-anzahl"
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
      "src": "images/excel/excel-pivot-felder.webp",
      "alt": "Personennummer liegt im Zeilenbereich, Summe von Bestand_EUR im Wertebereich.",
      "caption": "Personennummer liegt im Zeilenbereich, Summe von Bestand_EUR im Wertebereich.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Zeilen, Spalten, Werte und Filter passend anordnen.

## Voraussetzungen

Eine vorhandene Excel-Tabelle mit einer Überschriftenzeile und passenden Datentypen. Für die meisten Schritte eine bereits angelegte PivotTable.

## Schritte

1. Klicke in eine vorhandene **PivotTable**. Falls die Feldliste fehlt, wähle **PivotTable-Analyse → Feldliste**.
2. Ziehe **Kunde** in Zeilen und **Segment** in Spalten. Ziehe **Betrag** in Werte.
3. Öffne das Menü des Wertefelds → **Wertfeldeinstellungen → Summe**.
4. Entferne testweise Segment aus Spalten und prüfe, dass nur die Aufteilung verschwindet, die Gesamtsumme aber 200 bleibt.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Segment | Betrag |
| --- | --- | --- |
| P001 | A | 100 |
| P001 | A | 50 |
| P002 | B | 50 |

### Aktion

Kunde × Segment mit Summe Betrag.

### Nachher · Beispielergebnis

| Kunde | A | B | Gesamt |
| --- | --- | --- | --- |
| P001 | 150 |  | 150 |
| P002 |  | 50 | 50 |
| Gesamt | 150 | 50 | 200 |

## Ergebnis

Zeilen und Spalten bestimmen die Gruppierung; Werte bestimmen die Berechnung. Filter begrenzen die Auswahl.

## Warum funktioniert das?

Die Feldbereiche definieren den Kontext jeder Zelle. Werte aggregiert die dazugehörigen Ausgangszeilen.

## Typischer Fehler

Kennungen als Wertefeld summieren statt als Gruppenmerkmal verwenden.

## Plausibilitätscheck

Vergleiche die oben angegebenen Ergebniswerte mit der Quelle. Entferne für die Gesamtkontrolle alle nicht beabsichtigten Filter.
