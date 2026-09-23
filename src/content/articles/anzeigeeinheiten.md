---
{
  "id": "anzeigeeinheiten",
  "slug": "anzeigeeinheiten",
  "titel": "Anzeigeeinheiten und Dezimalstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Anzeigeeinheiten verkürzen die Darstellung, verändern aber nicht den gespeicherten Wert. Einheit und Rundung müssen erkennbar sein.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Anzeigeeinheiten und Dezimalstellen"
  ],
  "synonyme": [
    "display units",
    "tausend millionen",
    "visual formatieren"
  ],
  "verwandteThemen": [
    "datenbeschriftungen",
    "prozentformat"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-custom-format-strings"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Karte zeigt 1,2 Tsd. statt 1250.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Visual markieren → Visual formatieren → Datenbeschriftungen beziehungsweise Y-Achse → Anzeigeeinheiten. Stelle Tausend und eine Dezimalstelle ein.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **1,3 Tsd.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Betrag 1250 |

### Aktion

Visual markieren → Visual formatieren → Datenbeschriftungen beziehungsweise Y-Achse → Anzeigeeinheiten. Stelle Tausend und eine Dezimalstelle ein.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| 1,3 Tsd. |

## Ergebnis

Anzeigeeinheiten verkürzen die Darstellung, verändern aber nicht den gespeicherten Wert. Einheit und Rundung müssen erkennbar sein.

## Warum funktioniert das?

Die Skalierung verändert nur die Anzeige; gerechnet wird weiterhin mit 1250.

## Typischer Fehler

Den Betrag zusätzlich im Measure durch 1000 teilen und nochmals Tausenderanzeige wählen.

## Plausibilitätscheck

1,3 Tsd.
