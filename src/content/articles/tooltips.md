---
{
  "id": "tooltips",
  "slug": "tooltips",
  "titel": "Tooltip gezielt ergänzen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Tooltip ergänzt einen Datenpunkt beim Darüberfahren. Wesentliche Informationen müssen auch ohne Hover erreichbar bleiben.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Tooltip gezielt ergänzen"
  ],
  "synonyme": [
    "tooltip"
  ],
  "verwandteThemen": [
    "karte",
    "filterkontext"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-tooltips"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du möchtest Anzahl und Datenstand zu einer Säule ergänzen.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Visual markieren → Visual erstellen → Tooltips. Ziehe eine geeignete zusätzliche Kennzahl in diesen Bereich. Bewege den Mauszeiger im Bericht über einen Datenpunkt.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Tooltip am Datenpunkt A: Bestand 200 und 2 Konten.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Säule Segment A: Bestand 200, Kontenanzahl 2 |

### Aktion

Visual markieren → Visual erstellen → Tooltips. Ziehe eine geeignete zusätzliche Kennzahl in diesen Bereich. Bewege den Mauszeiger im Bericht über einen Datenpunkt.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Tooltip am Datenpunkt A: Bestand 200 und 2 Konten. |

## Ergebnis

Ein Tooltip ergänzt einen Datenpunkt beim Darüberfahren. Wesentliche Informationen müssen auch ohne Hover erreichbar bleiben.

## Warum funktioniert das?

Der Tooltip wird im Kontext des berührten Datenpunkts ausgewertet. Ein Tooltip ist keine zusätzliche ungefilterte Gesamtauswertung.

## Typischer Fehler

Die einzige Erklärung einer Kennzahl im Tooltip verstecken.

## Plausibilitätscheck

Tooltip am Datenpunkt A: Bestand 200 und 2 Konten.
