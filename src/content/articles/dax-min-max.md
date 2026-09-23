---
{
  "id": "dax-min-max",
  "slug": "dax-min-max",
  "titel": "MIN und MAX: kleinster oder größter Wert",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MIN und MAX ermitteln Extremwerte im aktuellen Filterkontext. Der größte Zeitpunkt liefert nicht automatisch die zugehörige ganze Zeile.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "MIN und MAX: kleinster oder größter Wert"
  ],
  "synonyme": [
    "minimum",
    "maximum"
  ],
  "verwandteThemen": [
    "measure",
    "filterkontext",
    "aktueller-stichtag"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/max-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nLetztes Datum = MAX ( Fakt[Datum] )\n```"
}
---

## Wann brauche ich das?

Du suchst das späteste vorliegende Bestandsdatum.

## Voraussetzungen

Eine vorhandene Tabelle mit passendem Zahlen- beziehungsweise Datumsfeld.

## Schritte

1. Prüfe die Spalte **Datum** und ihren Datentyp.
2. Wähle **Modellierung → Neues Measure** und gib die Formel aus dem Beispiel ein; passe Fakt und den Spaltennamen an dein Modell an.
3. Ziehe das Measure in eine Karte. Vergleiche zunächst ohne Filter, anschließend mit einer eingeschränkten Auswahl.

## Beispiel

### Vorher · Beispieldaten

| Fakt[Datum] |
| --- |
| 31.01.2026 |
| 28.02.2026 |

### Aktion

```dax
Letztes Datum = MAX ( Fakt[Datum] )
```

### Nachher · Beispielergebnis

| Ohne weitere Filter |
| --- |
| 28.02.2026 |

## Ergebnis

MIN und MAX ermitteln Extremwerte im aktuellen Filterkontext. Der größte Zeitpunkt liefert nicht automatisch die zugehörige ganze Zeile.

## Warum funktioniert das?

MAX liefert den größten vorhandenen Wert im Filterkontext, nicht automatisch die übrigen Merkmale seiner Zeile.

## Typischer Fehler

MAX(Status) als „letzten Status“ verwenden; Textreihenfolge ist keine zeitliche Reihenfolge.

## Plausibilitätscheck

Ungefiltert 28.02.2026. Ein Filter begrenzt die ausgewerteten Zeilen und kann deshalb das Ergebnis verändern.
