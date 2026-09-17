---
{
  "id": "count",
  "slug": "count",
  "titel": "COUNT: nichtleere Werte zählen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "COUNT zählt nichtleere Werte einer unterstützten Spalte. Für Zeilen ist COUNTROWS meist klarer; eindeutige Personen zählt DISTINCTCOUNT.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["COUNT: nichtleere Werte zählen"],
  "synonyme": ["anzahl nichtleer"],
  "verwandteThemen": ["countrows", "distinctcount"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/count-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du willst wissen, für wie viele Vorgänge ein Enddatum vorliegt.

## Schritte

1. Die zu prüfende Spalte wählen.
2. COUNT als Measure anlegen.
3. Fehlende Werte und doppelte Kennungen gegen COUNTROWS vergleichen.

## Beispiel

```dax
Mit Enddatum = COUNT ( Demo_Vorgaenge[Enddatum] )
```

Drei Vorgänge, davon einer ohne Enddatum → 2.

## Typischer Fehler

COUNT ist keine eindeutige Zählung und überspringt leere Werte.
