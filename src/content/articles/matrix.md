---
{
  "id": "matrix",
  "slug": "matrix",
  "titel": "Matrix: nach Dimensionen auswerten",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Matrix gliedert Measures nach Zeilen- und Spaltendimensionen.",
  "ort": "Power BI → Berichtsansicht → Matrixvisual",
  "tags": ["Matrix: nach Dimensionen auswerten", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["distinctcount", "divide", "pivottable"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-matrix.webp",
        "alt": "Matrix: Personennummer in Zeilen, Gesamtbestand in Werte.",
        "caption": "Matrix: Personennummer in Zeilen, Gesamtbestand in Werte.",
        "schritt": 3,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du vergleichst Produktgruppen über Monate oder Segmente.

## Schritte

1. Dimension in Zeilen und bei Bedarf weitere Dimension in Spalten legen.
2. Measure in Werte setzen.
3. Zwischen- und Gesamtzeilen fachlich kontrollieren.

## Beispiel

Produktgruppe in Zeilen, Monat in Spalten, [Neugeschaeft] als Wert.

## Typischer Fehler

DISTINCTCOUNT und Quoten sind nicht generell über Matrixzeilen additiv.
