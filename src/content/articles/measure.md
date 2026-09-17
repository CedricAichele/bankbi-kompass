---
{
  "id": "measure",
  "slug": "measure",
  "titel": "Measure erstellen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Measure berechnet eine Kennzahl für die aktuelle Auswahl im Bericht.",
  "ort": "Power BI → Modellierung → Neues Measure",
  "tags": ["Measure erstellen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["measure-spalte", "sum", "filterkontext"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-measure.webp",
        "alt": "Neues Measure: Gesamtbestand = SUM(Konten[Bestand_EUR]).",
        "caption": "Neues Measure: Gesamtbestand = SUM(Konten[Bestand_EUR]).",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Eine Summe oder Quote soll auf Slicer und Filter reagieren.

## Schritte

1. Zieltabelle auswählen und neues Measure erstellen.
2. Formel eingeben; Format und Einheit setzen.
3. In einer Karte oder Matrix mit bekannten Testwerten prüfen.

## Beispiel

```dax
Bestand = SUM ( Demo_Bestand[BESTAND_EUR] )
```

120 und 80 Euro am selben Stichtag ergeben 200 Euro.

## Typischer Fehler

Eine gespeicherte Spalte statt eines Measures anlegen oder mehrere Bestandsstichtage addieren.
