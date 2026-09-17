---
{
  "id": "calculate",
  "slug": "calculate",
  "titel": "CALCULATE",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "CALCULATE berechnet einen Ausdruck mit geänderten Filtern. Ein Filter auf derselben Spalte wird normalerweise ersetzt.",
  "ort": "Power BI → Neues Measure; aktive Produktbeziehung vorausgesetzt",
  "tags": ["CALCULATE", "Reporting"],
  "synonyme": [],
  "verwandteThemen":
    ["filterkontext", "dax-filter", "removefilters", "measure"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/calculate-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du willst dieselbe Kennzahl gezielt für einen Produktbereich berechnen.

## Schritte

1. Basismeasure [Bestand] als SUM definieren.
2. Gewünschte Filterbedingung in CALCULATE ergänzen.
3. Mit und ohne Slicer auf dieselbe Spalte vergleichen.

## Beispiel

```dax
Aktivbestand =
CALCULATE (
    [Bestand],
    Demo_Produkt[PRODUKTBEREICH] = "Aktiv"
)
```

## Typischer Fehler

Der Filter ersetzt einen bestehenden PRODUKTBEREICH-Filter. Für die Schnittmenge KEEPFILTERS prüfen; andere Spaltenfilter können weiterhin einschränken.
