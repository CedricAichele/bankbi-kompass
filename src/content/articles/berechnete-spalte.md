---
{
  "id": "berechnete-spalte",
  "slug": "berechnete-spalte",
  "titel": "Berechnete Spalte erstellen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine berechnete Spalte liefert ein Merkmal je Zeile. Im Importmodell wird es bei der Verarbeitung gespeichert.",
  "ort": "Power BI → Modellierung → Neue Spalte",
  "tags": ["Berechnete Spalte erstellen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["measure-spalte", "power-query"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine feste Kategorie als Achse oder Slicer und dafür Logik aus dem Modell.

## Schritte

1. Prüfen, ob Power Query die Aufgabe schon vor dem Laden erledigen kann.
2. Neue Spalte mit einer Zeilenformel anlegen.
3. Einzelzeilen und Speicherbedarf prüfen.

## Beispiel

```dax
Positiv = IF ( Demo_Bestand[BESTAND_EUR] > 0, "Ja", "Nein" )
```

## Typischer Fehler

Erwarten, dass sich die gespeicherte Spalte mit einem Slicer neu berechnet.
