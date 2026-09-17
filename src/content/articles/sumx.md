---
{
  "id": "sumx",
  "slug": "sumx",
  "titel": "SUMX: zeilenweise rechnen und summieren",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "SUMX berechnet einen Ausdruck für jede sichtbare Tabellenzeile und addiert die Ergebnisse.",
  "ort": "Power BI → Neues Measure",
  "tags":
    ["SUMX: zeilenweise rechnen und summieren", "Bestandsanalyse", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["sum", "granularitaet"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Betrag entsteht erst aus Menge × Einzelwert je Zeile.

## Schritte

1. Passende Detailtabelle wählen.
2. Zeilenausdruck in SUMX definieren.
3. Ergebnis an zwei Zeilen von Hand nachrechnen.

## Beispiel

```dax
Gesamtwert =
SUMX ( Demo_Position, Demo_Position[MENGE] * Demo_Position[PREIS_EUR] )
```

2 × 10 + 3 × 20 = 80 Euro.

## Typischer Fehler

SUM(Menge) × SUM(Preis) wäre hier 5 × 30 = 150 und ist eine andere Rechnung.
