---
{
  "id": "filterkontext",
  "slug": "filterkontext",
  "titel": "Filterkontext prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Slicer, Visualzeilen, Filter und Beziehungen bestimmen gemeinsam, welche Fakten ein Measure auswertet.",
  "ort": "Power BI → Filterbereich, Slicer und Modellansicht",
  "tags": [
    "Filterkontext prüfen",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [
    "falsche summe"
  ],
  "verwandteThemen": [
    "measure",
    "calculate",
    "filterrichtung",
    "begriff-zeilenkontext",
    "measure-fehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/dax-overview",
    "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-filterbereich.webp",
      "alt": "Visualfilter auf P003: Nur dieses Visual wird auf die ausgewählte Person eingeschränkt.",
      "caption": "Visualfilter auf P003: Nur dieses Visual wird auf die ausgewählte Person eingeschränkt.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Dieselbe Formel liefert je Zeile oder Auswahl verschiedene Ergebnisse.

## Voraussetzungen

Ein Bericht mit Kennzahl und den dazugehörigen Gruppierungs- oder Filterfeldern.

## Schritte

1. Zeige eine Summe in einer Karte ohne zusätzliche Auswahl.
2. Füge einen Datenschnitt für Segment hinzu und wähle **A**.
3. Zeige dieselbe Summe in einer Tabelle mit Segment als Zeilenfeld. Jede Zeile liefert nun ihren eigenen Kontext.
4. Prüfe weitere Filter auf Visual-, Seiten- und Berichtsebene sowie aktive Beziehungen. CALCULATE kann diesen Kontext innerhalb eines Measures gezielt ändern.

## Beispiel

### Vorher · Beispieldaten

| Segment | Betrag |
| --- | --- |
| A | 120 |
| B | 80 |

### Aktion

Summe erst ohne Filter, dann für A auswerten.

### Nachher · Beispielergebnis

| Kontext | Ergebnis |
| --- | --- |
| Keine Auswahl | 200 |
| Segment A | 120 |
| Segment B | 80 |

## Ergebnis

Eine Kennzahl berücksichtigt die gemeinsam wirksamen Filter der jeweiligen Abfrage.

## Warum funktioniert das?

Die Formel bleibt gleich, aber die Menge sichtbarer Daten ändert sich. Eine Tabellenzeile ist für ein Measure ein Filter auf ihre Gruppe; sie ist nicht einfach der Zeilenkontext einer berechneten Spalte.

## Typischer Fehler

Nur den sichtbaren Slicer prüfen und versteckte Visual- oder Seitenfilter übersehen.

## Plausibilitätscheck

120 + 80 = 200 bei dieser additiven Summe. Für Quoten oder eindeutige Anzahlen muss die Gesamtzeile neu ausgewertet werden.
