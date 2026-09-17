---
{
  "id": "dax-average",
  "slug": "dax-average",
  "titel": "AVERAGE: Durchschnitt je Datenzeile",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "AVERAGE mittelt numerische Spaltenwerte. Leere Werte werden ignoriert, echte Nullen zählen mit.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["AVERAGE: Durchschnitt je Datenzeile"],
  "synonyme": ["average", "durchschnitt"],
  "verwandteThemen": ["granularitaet", "dax-median"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/average-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst den durchschnittlichen Bestand je Konto am gewählten Stichtag.

## Schritte

1. Sicherstellen, dass eine Zeile einem Konto am Stichtag entspricht.
2. AVERAGE auf die Betragsspalte anwenden.
3. Nullen, Leerwerte und Gewichtung prüfen.

## Beispiel

```dax
Ø Bestand = AVERAGE ( Demo_Bestand[BESTAND_EUR] )
```

100, 0 und BLANK → 50.

## Typischer Fehler

Kontodurchschnitt mit Personendurchschnitt verwechseln, wenn Personen mehrere Konten haben.
