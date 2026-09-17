---
{
  "id": "dax-if",
  "slug": "dax-if",
  "titel": "IF: zwei Ergebnisse unterscheiden",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "IF wählt abhängig von einer Bedingung zwischen zwei Ergebnissen. Leere Werte brauchen gegebenenfalls einen eigenen Fall.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["IF: zwei Ergebnisse unterscheiden"],
  "synonyme": ["if dax"],
  "verwandteThemen": ["dax-coalesce", "dax-switch"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/if-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du möchtest eine Planabweichung als unter oder über Plan einordnen.

## Schritte

1. Ein numerisches Basismeasure definieren.
2. Bedingung und beide Ergebnisfälle angeben.
3. Grenzfall 0 und BLANK separat testen.

## Beispiel

```dax
Planstatus = IF ( [Abweichung] >= 0, "Im Plan", "Unter Plan" )
```

## Typischer Fehler

BLANK unbemerkt wie 0 behandeln und dadurch fehlende Daten als Zielerreichung darstellen.
