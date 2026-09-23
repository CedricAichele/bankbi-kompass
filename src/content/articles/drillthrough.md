---
{
  "id": "drillthrough",
  "slug": "drillthrough",
  "titel": "Drillthrough: zur Detailseite wechseln",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Drillthrough öffnet eine vorbereitete Detailseite mit dem Kontext eines ausgewählten Datenpunkts.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Drillthrough: zur Detailseite wechseln"
  ],
  "synonyme": [
    "drillthrough"
  ],
  "verwandteThemen": [
    "drilldown",
    "tabelle"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-drillthrough"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Von einer Segmentübersicht soll eine passende Personenliste erreichbar sein.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Neue Berichtsseite anlegen. Ziehe Segment in den Bereich Drillthrough-Felder der Zielseite. Füge dort die benötigte Detailliste hinzu. Rechtsklick auf Segment A im Quellvisual → Drillthrough → Zielseite.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Die Zielseite zeigt für A K001 und K002.**
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Segment A hat K001 und K002; B hat K003. |

### Aktion

Neue Berichtsseite anlegen. Ziehe Segment in den Bereich Drillthrough-Felder der Zielseite. Füge dort die benötigte Detailliste hinzu. Rechtsklick auf Segment A im Quellvisual → Drillthrough → Zielseite.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Die Zielseite zeigt für A K001 und K002. |

## Ergebnis

Drillthrough öffnet eine vorbereitete Detailseite mit dem Kontext eines ausgewählten Datenpunkts.

## Warum funktioniert das?

Die Navigation übergibt den gewählten Kontext an die Zielseite; das Drillthrough-Feld muss mit dem Quellkontext zusammenpassen.

## Typischer Fehler

Nur gleich beschriftete, aber fachlich unterschiedliche Felder verwenden oder notwendige Filterübernahme nicht prüfen.

## Plausibilitätscheck

Die Zielseite zeigt für A K001 und K002.
