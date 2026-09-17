---
{
  "id": "distinctcount",
  "slug": "distinctcount",
  "titel": "DISTINCTCOUNT: eindeutige Personen zählen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DISTINCTCOUNT zählt unterschiedliche Schlüssel im aktuellen Filterkontext, statt jede Kontenzeile zu zählen.",
  "ort": "Power BI → Neues Measure",
  "tags":
    [
      "DISTINCTCOUNT: eindeutige Personen zählen",
      "Kundenanalyse",
      "Datenqualität",
    ],
  "synonyme":
    [
      "mehrere konten pro kunde",
      "eine Liste ohne doppelte Werte",
      "eine Zeile je Person",
      "einzigartige Kunden",
      "COUNT vs DISTINCTCOUNT",
      "einzigartige kunden",
      "eindeutige kunden",
    ],
  "verwandteThemen": ["countrows", "granularitaet", "eine-zeile-je-person"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Person kann mehrere Konten haben und soll nur einmal zählen.

## Schritte

1. Fachlichen Personenschlüssel wählen.
2. Fehlende Schlüssel prüfen.
3. DISTINCTCOUNT verwenden und mit einer kleinen Liste vergleichen.

## Beispiel

```dax
Personen = DISTINCTCOUNT ( Demo_Konto[PERSON_ID] )
```

P001/K-A, P001/K-B, P002/K-C → 3 Zeilen, 2 Personen.

## Typischer Fehler

BLANK zählt als eigener Wert mit. Eindeutige Anzahlen über überlappende Gruppen sind nicht additiv.
