---
{
  "id": "saeulendiagramm",
  "slug": "saeulendiagramm",
  "titel": "Säulendiagramm erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Säulen vergleichen Beträge entlang einer kurzen Kategorie- oder Zeitachse. Für lange Beschriftungen sind Balken meist lesbarer.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Säulendiagramm erstellen"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "balkendiagramm",
    "datum-sortieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-column-charts"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du vergleichst monatliches Neugeschäft.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Freie Berichtsfläche → Gruppiertes Säulendiagramm. Ziehe Jahr-Monat auf X-Achse und ein additives Neugeschäft-Measure auf Y-Achse.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Drei Säulen in zeitlicher Reihenfolge; Februar am höchsten.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| 2026-01: 10; 2026-02: 15; 2026-03: 12 |

### Aktion

Freie Berichtsfläche → Gruppiertes Säulendiagramm. Ziehe Jahr-Monat auf X-Achse und ein additives Neugeschäft-Measure auf Y-Achse.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Drei Säulen in zeitlicher Reihenfolge; Februar am höchsten. |

## Ergebnis

Säulen vergleichen Beträge entlang einer kurzen Kategorie- oder Zeitachse. Für lange Beschriftungen sind Balken meist lesbarer.

## Warum funktioniert das?

Jede Kategorie erzeugt einen eigenen Filterkontext. Die Höhe zeigt den Wert dieser Periode, keine kumulierte Jahressumme.

## Typischer Fehler

Monatsnamen alphabetisch sortieren oder viele Kategorien mit abgeschnittenen Labels zeigen.

## Plausibilitätscheck

Drei Säulen in zeitlicher Reihenfolge; Februar am höchsten.
