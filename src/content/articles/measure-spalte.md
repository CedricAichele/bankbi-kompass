---
{
  "id": "measure-spalte",
  "slug": "measure-spalte",
  "titel": "Measure oder Spalte?",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Dynamische Kennzahl: Measure. Festes Merkmal je Zeile: Power Query oder berechnete Spalte.",
  "ort": "Vor der Umsetzung: Ergebnis und Einsatzort bestimmen",
  "tags": ["Measure oder Spalte?", "Reporting"],
  "synonyme": ["spalte oder measure"],
  "verwandteThemen": ["measure", "berechnete-spalte", "power-query"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du überträgst eine Excel-Hilfsspalte oder planst eine neue Berechnung.

## Schritte

1. Soll das Ergebnis auf Filter reagieren? → Measure.
2. Brauchst du eine Achse oder Slicer-Kategorie? → Spalte.
3. Kann sie vor dem Laden entstehen? → Power Query prüfen.

## Beispiel

| Ziel                         | Geeigneter Ansatz |
| ---------------------------- | ----------------- |
| Bestand im gewählten Segment | Measure           |
| Feste Kategorie je Zeile     | Spalte            |
| Text bereinigen              | Power Query       |

## Typischer Fehler

Eine Gesamtsumme als Spalte pro Zeile speichern und später erneut summieren.
