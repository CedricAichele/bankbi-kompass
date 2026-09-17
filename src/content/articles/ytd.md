---
{
  "id": "ytd",
  "slug": "ytd",
  "titel": "YTD berechnen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "YTD kumuliert eine Bewegungskennzahl seit Jahresbeginn bis zum letzten Datum der Auswahl.",
  "ort": "Power BI → Neues Measure; markierte Datumstabelle mit aktiver Beziehung",
  "tags": ["YTD berechnen", "Bestandsanalyse", "Reporting"],
  "synonyme": ["YTD"],
  "verwandteThemen": ["datumstabelle", "stichtag", "vorjahr"],
  "kontexte": ["Neugeschäft", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst das bisherige Neugeschäft des Kalenderjahres.

## Schritte

1. Basismeasure für Bewegungsbeträge definieren.
2. DATESYTD innerhalb von CALCULATE verwenden.
3. Monatssummen mit dem kumulierten Ergebnis vergleichen.

## Beispiel

```dax
Neugeschaeft YTD =
CALCULATE ( [Neugeschaeft], DATESYTD ( Demo_Datum[Date] ) )
```

Januar 10, Februar 15, März 12 → Ende März 37 Euro.

## Typischer Fehler

Monatsbestände nicht kumulieren. Ein abweichendes Geschäftsjahr verlangt eine angepasste Periodenlogik.
