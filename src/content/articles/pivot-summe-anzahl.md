---
{
  "id": "pivot-summe-anzahl",
  "slug": "pivot-summe-anzahl",
  "titel": "Pivot zeigt Anzahl statt Summe",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Pivot",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe zuerst den Quelldatentyp, dann die Zusammenfassung des Wertfelds.",
  "ort": "Excel → PivotTable-Analyse / Rechtsklick in PivotTable",
  "tags": ["Pivot zeigt Anzahl statt Summe"],
  "synonyme": [],
  "verwandteThemen": ["excel-zahl-text", "pivot-aktualisieren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://support.microsoft.com/de-DE/Excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    ],
  "screenshots":
    [
      {
        "src": "images/excel/excel-pivot-aggregation.webp",
        "alt": "Wertfeldeinstellungen: Summe statt Anzahl für die Bestandsspalte.",
        "caption": "Wertfeldeinstellungen: Summe statt Anzahl für die Bestandsspalte.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Eine Betragsspalte wird als Anzahl ausgewertet.

## Schritte

1. Quellwerte auf Text, Leerzellen und Fehler prüfen.
2. Nach Korrektur Pivot aktualisieren.
3. Wertfeldeinstellungen → Summe wählen; Zahlenformat dort festlegen.

## Beispiel

Drei Beträge 100, 50, 20 → Summe 170, Anzahl 3.

## Typischer Fehler

Nur die Pivot auf Summe umstellen und Textbeträge weiterhin unbeachtet lassen.
