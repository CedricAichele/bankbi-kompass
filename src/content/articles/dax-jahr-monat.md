---
{
  "id": "dax-jahr-monat",
  "slug": "dax-jahr-monat",
  "titel": "YEAR und MONTH: Kalenderattribute",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "YEAR und MONTH leiten numerische Kalenderattribute aus einem Datum ab. Für eine Monatsachse brauchst du zusätzlich das Jahr.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": ["YEAR und MONTH: Kalenderattribute"],
  "synonyme": ["year", "month"],
  "verwandteThemen": ["datum-sortieren", "datumstabelle"],
  "kontexte": ["Bestandsanalyse", "Neugeschäft", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/dax/year-function-dax",
      "https://learn.microsoft.com/en-us/dax/month-function-dax",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Monate sollen chronologisch über Jahresgrenzen laufen.

## Schritte

1. Eine vollständige Datumstabelle verwenden.
2. Jahr und Monatsnummer als Spalten ableiten.
3. Jahr-Monat-Anzeige nach einem Jahr-Monat-Schlüssel sortieren.

## Beispiel

```dax
Jahr = YEAR ( Demo_Datum[Date] )
MonatNr = MONTH ( Demo_Datum[Date] )
JahrMonatSort = YEAR ( Demo_Datum[Date] ) * 100 + MONTH ( Demo_Datum[Date] )
```

## Typischer Fehler

Nur nach Monatsnamen sortieren oder Januar verschiedener Jahre zusammenfassen.
