---
{
  "id": "selectedvalue",
  "slug": "selectedvalue",
  "titel": "SELECTEDVALUE: eindeutige Auswahl lesen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SELECTEDVALUE gibt den einzigen unterschiedlichen Wert einer Spalte zurück; sonst den Ersatzwert.",
  "ort": "Power BI → Neues Measure",
  "tags": ["SELECTEDVALUE: eindeutige Auswahl lesen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["slicer", "blank"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Kartenbeschriftung soll die ausgewählte Produktgruppe nennen.

## Schritte

1. Auswahlspalte bestimmen.
2. Ersatztext für keine eindeutige Auswahl setzen.
3. Null, eine und mehrere Ausprägungen testen.

## Beispiel

```dax
Auswahl =
SELECTEDVALUE ( Demo_Produkt[GRUPPE], "Keine eindeutige Auswahl" )
```

## Typischer Fehler

Der Ersatzwert unterscheidet nicht zwischen keinem und mehreren unterschiedlichen Werten.
