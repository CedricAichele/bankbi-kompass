---
{
  "id": "diagrammtitel",
  "slug": "diagrammtitel",
  "titel": "Diagrammtitel mit Kontext",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Titel sollte Kennzahl, Einheit und Zeitraum eindeutig machen. Dynamische Titel müssen Mehrfachauswahl berücksichtigen.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Diagrammtitel mit Kontext"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "selectedvalue",
    "tooltips"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-format-visual-titles"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-titel.webp",
      "alt": "Allgemein → Titel: Text, Schrift und Ausrichtung einstellen.",
      "caption": "Allgemein → Titel: Text, Schrift und Ausrichtung einstellen.",
      "schritt": 1,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine exportierte Grafik ist ohne Slicer nicht verständlich.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Visual markieren → Visual formatieren → Allgemein → Titel aktivieren. Trage Kennzahl, Einheit und Zeitraum ein; für einen dynamischen Titel verwende bei Text das fx-Feld und ein Textmeasure.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Titel: Bestand EUR · 31.03.2026.**
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Bestand 200 am 31.03.2026 |

### Aktion

Visual markieren → Visual formatieren → Allgemein → Titel aktivieren. Trage Kennzahl, Einheit und Zeitraum ein; für einen dynamischen Titel verwende bei Text das fx-Feld und ein Textmeasure.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Titel: Bestand EUR · 31.03.2026. |

## Ergebnis

Ein Titel sollte Kennzahl, Einheit und Zeitraum eindeutig machen. Dynamische Titel müssen Mehrfachauswahl berücksichtigen.

## Warum funktioniert das?

Der Titel erklärt den Geltungsbereich. Dynamische Beschriftung und tatsächlicher Filter müssen dieselbe Auswahl widerspiegeln.

## Typischer Fehler

Bei mehreren Segmenten einen einzelnen Segmentnamen im Titel behaupten.

## Plausibilitätscheck

Titel: Bestand EUR · 31.03.2026.
