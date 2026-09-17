---
{
  "id": "removefilters",
  "slug": "removefilters",
  "titel": "REMOVEFILTERS: Filter gezielt aufheben",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "REMOVEFILTERS entfernt die angegebenen Filter für eine Berechnung, etwa für einen Anteilsnenner.",
  "ort": "Power BI → DAX-Measure mit CALCULATE",
  "tags": ["REMOVEFILTERS: Filter gezielt aufheben", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["calculate", "filterkontext", "divide"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Gesamtwert soll unabhängig von der gewählten Produktgruppe sein, aber denselben Zeitraum behalten.

## Schritte

1. Festlegen, welche Filter fachlich entfallen sollen.
2. Nur diese Dimension oder Spalte an REMOVEFILTERS übergeben.
3. Datums- und Segmentfilter im Kontrollfall prüfen.

## Beispiel

```dax
Alle Produkte =
CALCULATE ( [Bestand], REMOVEFILTERS ( Demo_Produkt ) )
```

## Typischer Fehler

Pauschal alle Modellfilter aufheben und dadurch unbemerkt den Zeitraum ändern.
