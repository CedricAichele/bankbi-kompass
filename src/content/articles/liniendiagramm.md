---
{
  "id": "liniendiagramm",
  "slug": "liniendiagramm",
  "titel": "Liniendiagramm: Zeitverlauf zeigen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Linie zeigt die Entwicklung einer Kennzahl über eine geordnete Zeitachse.",
  "ort": "Power BI → Berichtsansicht → Liniendiagramm",
  "tags": [
    "Liniendiagramm: Zeitverlauf zeigen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datum-sortieren",
    "stichtag"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-line-chart"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du willst Monatswerte statt Einzelkategorien vergleichen.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Freie Berichtsfläche → Liniendiagramm. Ziehe das vollständige Datum auf die X-Achse und das passende Measure auf die Y-Achse. Verwende für mehrere Jahre keinen Monatsnamen allein.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Drei chronologisch verbundene Punkte: 100 → 104 → 101.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| 31.01.: 100; 28.02.: 104; 31.03.: 101 |

### Aktion

Freie Berichtsfläche → Liniendiagramm. Ziehe das vollständige Datum auf die X-Achse und das passende Measure auf die Y-Achse. Verwende für mehrere Jahre keinen Monatsnamen allein.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Drei chronologisch verbundene Punkte: 100 → 104 → 101. |

## Ergebnis

Eine Linie zeigt die Entwicklung einer Kennzahl über eine geordnete Zeitachse.

## Warum funktioniert das?

Jeder Punkt repräsentiert einen eigenen Zeitkontext. Eine Verbindungslinie addiert keine Bestände; Lücken dürfen nicht ungeprüft als Nullwerte gelesen werden.

## Typischer Fehler

Monatsnamen alphabetisch sortieren oder verschiedene Jahre zusammenfassen.

## Plausibilitätscheck

Drei chronologisch verbundene Punkte: 100 → 104 → 101.
