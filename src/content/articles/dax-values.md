---
{
  "id": "dax-values",
  "slug": "dax-values",
  "titel": "VALUES und HASONEVALUE: Auswahl prüfen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "VALUES liefert unterschiedliche Werte im Filterkontext. HASONEVALUE prüft, ob genau ein unterschiedlicher Wert vorliegt.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["VALUES und HASONEVALUE: Auswahl prüfen"],
  "synonyme": ["values", "hasonevalue"],
  "verwandteThemen": ["selectedvalue", "filterkontext"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/dax/values-function-dax",
      "https://learn.microsoft.com/en-us/dax/hasonevalue-function-dax",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Titel oder eine Logik soll nur bei eindeutigem Segment greifen.

## Schritte

1. Die Dimension und die relevante Auswahlspalte bestimmen.
2. Für einen einzelnen Wert bevorzugt SELECTEDVALUE verwenden.
3. Für Tabellenlogik VALUES und für Eindeutigkeitsprüfung HASONEVALUE einsetzen.

## Beispiel

```dax
Ein Segment = HASONEVALUE ( Demo_Personen[Segment] )
```

Ein ausgewähltes Segment → TRUE; mehrere → FALSE.

## Typischer Fehler

VALUES direkt als Einzelwert verwenden, obwohl mehrere Werte vorliegen; eine zusätzliche BLANK-Zeile kann bei ungültigen Beziehungen auftreten.
