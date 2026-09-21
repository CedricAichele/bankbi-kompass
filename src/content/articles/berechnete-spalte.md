---
{
  "id": "berechnete-spalte",
  "slug": "berechnete-spalte",
  "titel": "Berechnete Spalte erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine berechnete Spalte liefert ein Merkmal je Zeile. Im Importmodell wird es bei der Verarbeitung gespeichert.",
  "ort": "Power BI → Modellierung → Neue Spalte",
  "tags": [
    "Berechnete Spalte erstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "measure-spalte",
    "measure",
    "pq-bedingt",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculated-columns",
    "https://learn.microsoft.com/en-us/dax/if-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein dauerhaftes Merkmal pro Datenzeile wird zum Gruppieren oder Filtern benötigt.

## Voraussetzungen

Eine geladene Tabelle mit den für die Zeilenberechnung nötigen Spalten.

## Schritte

1. Wähle im Datenbereich die Tabelle **Fakt**.
2. Wähle **Tabellentools → Neue Spalte** beziehungsweise **Modellierung → Neue Spalte**.
3. Trage **Kategorie = IF ( Fakt[Bestand] > 1000, "hoch", "niedrig" )** ein und bestätige.
4. Prüfe den Datentyp Text und die Werte in der Tabellenansicht. Fehlende Bestände benötigen eine eigene fachliche Regel.
5. Verwende Kategorie als Filter- oder Gruppierungsfeld. Vergleiche mit einem Measure: Ein Slicer verändert die sichtbaren Zeilen, berechnet diese gespeicherten Kategorien aber nicht neu.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

```dax
Kategorie = IF ( Fakt[Bestand] > 1000, "hoch", "niedrig" )
```

### Nachher · Beispielergebnis

| Konto | Bestand | Kategorie |
| --- | --- | --- |
| K001 | 1000 | niedrig |
| K002 | 2000 | hoch |
| K003 | 500 | niedrig |

## Ergebnis

Jede Datenzeile erhält ein berechnetes Merkmal, das im Importmodell bei der Aktualisierung berechnet und gespeichert wird.

## Warum funktioniert das?

Der Zeilenkontext liefert der Formel den Bestand der aktuellen Zeile. Ein Measure würde stattdessen für den jeweiligen Berichtskontext berechnen und ist nicht auf dieselbe Weise als Kategorienachse verwendbar.

## Typischer Fehler

Eine dynamische Quote als Spalte speichern und erwarten, dass ihre Bezugsgröße auf Slicer reagiert.

## Plausibilitätscheck

Nur K002 ist hoch. Das Filtern auf P001 ändert K001 nicht von niedrig auf hoch.
