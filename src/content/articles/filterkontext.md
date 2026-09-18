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
    "calculate",
    "filterrichtung",
    "measure-fehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-filterbereich.webp",
      "alt": "Visualfilter auf P003: Nur dieses Visual wird auf die ausgewählte Person eingeschränkt.",
      "caption": "Visualfilter auf P003: Nur dieses Visual wird auf die ausgewählte Person eingeschränkt.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ]
}
---


## Wann brauche ich das?

Ein Measure liefert je Visual unterschiedliche oder unerwartete Zahlen.

## Schritte

1. Ein einfaches Basismeasure in einer Kontrollmatrix anzeigen.
2. Seiten-, Berichts- und Visualfilter prüfen.
3. Aktive Beziehungen und filterändernde DAX-Funktionen kontrollieren.

## Beispiel

Segment A hat 120 Euro, B 80 Euro. Slicer A → 120. Keine Segmentbegrenzung → 200.

## Typischer Fehler

Eine Matrix-Gesamtzeile ist eine neue Auswertung im Gesamtkontext und nicht immer die Summe sichtbarer Zeilen.

## Einfach erklärt

Filterkontext ist die Menge der wirksamen Einschränkungen bei einer DAX-Auswertung.

## Mini-Beispiel

P003 im Slicer und Einlagen in einer Tabellenzeile ergeben gemeinsam nur K005 mit 800.

## Warum ist das wichtig?

Die Definition bestimmt, welche Zuordnung oder Berechnung fachlich zulässig ist. Nur den sichtbaren Slicer beachten und Seitenfilter übersehen.

## Wo taucht das auf?

DAX-Measure, Slicer, Visualzeile und Filterbereich.
