---
{
  "id": "dax-switch",
  "slug": "dax-switch",
  "titel": "SWITCH: mehrere Fälle verständlich ordnen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SWITCH eignet sich für mehrere feste Werte oder geordnete Bedingungen. Der erste passende Fall bestimmt das Ergebnis.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["SWITCH: mehrere Fälle verständlich ordnen"],
  "synonyme": ["switch", "ampel"],
  "verwandteThemen": ["dax-if", "divide"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/switch-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine Ampel mit klaren Schwellen.

## Schritte

1. Schwellen fachlich festlegen.
2. Mit SWITCH(TRUE()) vom speziellen zum allgemeinen Fall prüfen.
3. Sonst-Fall und fehlende Werte vor den Schwellen behandeln.

## Beispiel

```dax
Status =
SWITCH ( TRUE(),
 ISBLANK ( [Quote] ), "Keine Daten",
 [Quote] >= 1, "Erreicht",
 [Quote] >= 0.9, "Nahe Ziel",
 "Unter Ziel" )
```

## Typischer Fehler

Die Grenze 0,9 vor 1 prüfen: Dann erreicht der Fall 1 nie seine eigene Kategorie.
