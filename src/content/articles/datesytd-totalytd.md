---
{
  "id": "datesytd-totalytd",
  "slug": "datesytd-totalytd",
  "titel": "DATESYTD oder TOTALYTD",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DATESYTD liefert eine Datumsauswahl seit Jahresbeginn; TOTALYTD wertet einen Ausdruck für diese Auswahl aus.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": ["DATESYTD oder TOTALYTD"],
  "synonyme": ["datesytd", "totalytd"],
  "verwandteThemen": ["ytd", "bestand-bewegung"],
  "kontexte": ["Bestandsanalyse", "Neugeschäft", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/totalytd-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du möchtest Neugeschäft seit Jahresbeginn kumulieren.

## Schritte

1. Additives Basismeasure für Neugeschäft definieren.
2. Eine markierte, lückenlose Datumstabelle aktiv mit dem Buchungsdatum verbinden.
3. TOTALYTD oder CALCULATE mit DATESYTD einsetzen und Monatswerte gegenrechnen.

## Beispiel

```dax
Neugeschaeft YTD = TOTALYTD ( [Neugeschaeft], Demo_Datum[Date] )
```

Januar 10, Februar 15 → Februar-YTD 25.

## Typischer Fehler

Bestände kumulieren oder unvollständige Daten mit einem vollständigen Vorjahr vergleichen.
