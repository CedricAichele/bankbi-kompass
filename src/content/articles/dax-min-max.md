---
{
  "id": "dax-min-max",
  "slug": "dax-min-max",
  "titel": "MIN und MAX: kleinster oder größter Wert",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MIN und MAX ermitteln Extremwerte im aktuellen Filterkontext. Der größte Zeitpunkt liefert nicht automatisch die zugehörige ganze Zeile.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["MIN und MAX: kleinster oder größter Wert"],
  "synonyme": ["minimum", "maximum"],
  "verwandteThemen": ["aktueller-stichtag", "ida-extrema"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/max-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du suchst das späteste vorliegende Bestandsdatum.

## Schritte

1. Spalte auf passenden Typ prüfen.
2. MIN oder MAX als Measure verwenden.
3. Prüfen, welche Filter den betrachteten Bereich einschränken.

## Beispiel

```dax
Letztes Datum = MAX ( Demo_Bestand[STICHTAG] )
```

31.01. und 28.02. → 28.02.

## Typischer Fehler

MAX(Status) als „letzten Status“ verwenden; Textreihenfolge ist keine zeitliche Reihenfolge.
