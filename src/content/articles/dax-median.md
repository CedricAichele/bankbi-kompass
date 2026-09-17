---
{
  "id": "dax-median",
  "slug": "dax-median",
  "titel": "MEDIAN: mittleren Wert bestimmen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MEDIAN liefert den mittleren numerischen Wert einer sortierten Spalte und ist weniger empfindlich gegenüber einzelnen Ausreißern.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["MEDIAN: mittleren Wert bestimmen"],
  "synonyme": ["median dax"],
  "verwandteThemen": ["median", "ida-vorgang"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/median-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Einzelne sehr lange Vorgänge verzerren den Durchschnitt.

## Schritte

1. Dauer je Vorgang numerisch bereitstellen.
2. MEDIAN auf diese Spalte anwenden.
3. Leere Werte, offene Vorgänge und Ausreißer separat prüfen.

## Beispiel

```dax
Median Dauer = MEDIAN ( Demo_Vorgaenge[Dauer_Tage] )
```

1, 2, 30 → Median 2 statt Durchschnitt 11.

## Typischer Fehler

Mehrere Statuszeilen je Vorgang als unabhängige Vorgänge mitteln.
