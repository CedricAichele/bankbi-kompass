---
{
  "id": "datenbeschriftungen",
  "slug": "datenbeschriftungen",
  "titel": "Datenbeschriftungen einschalten",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Beschrifte Datenpunkte mit der benötigten Genauigkeit und Einheit.",
  "ort": "Power BI → Visual auswählen → Formatbereich → Datenbeschriftungen",
  "tags": [
    "Datenbeschriftungen einschalten",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "balkendiagramm",
    "liniendiagramm"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-customize-title-background-and-legend"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein kleiner Balkenvergleich soll ohne Achsenablesen verständlich sein.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Visual markieren → Visual formatieren → Datenbeschriftungen aktivieren. Stelle Anzeigeeinheiten und Dezimalstellen passend zur Achse ein.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Beschriftung 120 Tsd. bei entsprechender Einheit.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Betrag 120000 |

### Aktion

Visual markieren → Visual formatieren → Datenbeschriftungen aktivieren. Stelle Anzeigeeinheiten und Dezimalstellen passend zur Achse ein.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Beschriftung 120 Tsd. bei entsprechender Einheit. |

## Ergebnis

Beschrifte Datenpunkte mit der benötigten Genauigkeit und Einheit.

## Warum funktioniert das?

Beschriftungen zeigen ausgewertete Werte am Datenpunkt; ihre Rundung kann von der ungefilterten Quelltabelle abweichen.

## Typischer Fehler

So stark runden, dass unterschiedliche Werte gleich wirken; dicht belegte Linien vollständig beschriften.

## Plausibilitätscheck

Beschriftung 120 Tsd. bei entsprechender Einheit.
