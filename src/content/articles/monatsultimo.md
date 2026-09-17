---
{
  "id": "monatsultimo",
  "slug": "monatsultimo",
  "titel": "EOMONTH: Monatsultimo bestimmen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "EOMONTH liefert das Monatsende relativ zu einem Ausgangsdatum. Es beweist nicht, dass Daten für diesen Stichtag vorliegen.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": ["EOMONTH: Monatsultimo bestimmen"],
  "synonyme": ["eomonth", "aktueller monat", "monatsende"],
  "verwandteThemen": ["aktueller-stichtag", "stichtag"],
  "kontexte": ["Bestandsanalyse", "Neugeschäft", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/eomonth-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du willst einen fachlich festgelegten Monatsendbestand anzeigen.

## Schritte

1. Ausgangsdatum als echten Datumswert wählen.
2. Mit 0 den gleichen, mit −1 den vorherigen Monat bestimmen.
3. Verfügbarkeit des gewünschten Bestandsstichtags prüfen.

## Beispiel

```dax
Monatsende = EOMONTH ( DATE ( 2026, 3, 17 ), 0 )
```

Ergebnis: 31.03.2026.

## Typischer Fehler

TODAY() als letzten verfügbaren Datenstand interpretieren.
