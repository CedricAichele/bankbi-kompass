---
{
  "id": "dax-filter",
  "slug": "dax-filter",
  "titel": "FILTER: eine Teilmenge bilden",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "FILTER liefert eine Tabelle mit den Zeilen, die eine Bedingung erfüllen.",
  "ort": "Power BI → DAX-Formel im Measure",
  "tags": ["FILTER: eine Teilmenge bilden", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["calculate", "countrows", "excel-filtern"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine weitere DAX-Berechnung benötigt eine ausdrücklich gefilterte Zeilenmenge.

## Schritte

1. Ausgangstabelle festlegen.
2. Zeilenbedingung formulieren.
3. Die resultierende Tabelle z. B. an COUNTROWS übergeben.

## Beispiel

```dax
Positive Zeilen =
COUNTROWS ( FILTER ( Demo_Bestand, Demo_Bestand[BESTAND_EUR] > 0 ) )
```

## Typischer Fehler

DAX FILTER ist keine Excel-Ausgabeliste. Einfache Spaltenfilter in CALCULATE benötigen oft keine zusätzliche FILTER-Tabelle.
