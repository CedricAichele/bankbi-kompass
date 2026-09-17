---
{
  "id": "sum",
  "slug": "sum",
  "titel": "SUM: Spalte summieren",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUM addiert die Zahlen einer Spalte unter den aktuell wirksamen Filtern.",
  "ort": "Power BI → Neues Measure",
  "tags": ["SUM: Spalte summieren", "Bestandsanalyse", "Reporting"],
  "synonyme": ["SUMME"],
  "verwandteThemen": ["sumx", "calculate", "stichtag"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Die zu summierenden Beträge liegen bereits als Spaltenwerte vor.

## Schritte

1. Zahltyp und fachliche Zeilenebene prüfen.
2. SUM über die Betragsspalte definieren.
3. Bei Beständen einen einzelnen Stichtag auswählen.

## Beispiel

```dax
Bestand = SUM ( Demo_Bestand[BESTAND_EUR] )
```

## Typischer Fehler

SUM benötigt für vorhandene Slicerfilter kein zusätzliches CALCULATE. Für ein Produkt je Zeile kommt SUMX infrage.
