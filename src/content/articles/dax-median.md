---
{
  "id": "dax-median",
  "slug": "dax-median",
  "titel": "MEDIAN: mittleren Wert bestimmen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MEDIAN liefert den mittleren numerischen Wert einer sortierten Spalte und ist weniger empfindlich gegenüber einzelnen Ausreißern.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "MEDIAN: mittleren Wert bestimmen"
  ],
  "synonyme": [
    "median dax"
  ],
  "verwandteThemen": [
    "measure",
    "filterkontext",
    "median",
    "ida-vorgang"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/median-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nMedian Dauer = MEDIAN ( Fakt[Dauer] )\n```"
}
---

## Wann brauche ich das?

Einzelne sehr lange Vorgänge verzerren den Durchschnitt.

## Voraussetzungen

Eine vorhandene Tabelle mit passendem Zahlen- beziehungsweise Datumsfeld.

## Schritte

1. Prüfe die Spalte **Dauer** und ihren Datentyp.
2. Wähle **Modellierung → Neues Measure** und gib die Formel aus dem Beispiel ein; passe Fakt und den Spaltennamen an dein Modell an.
3. Ziehe das Measure in eine Karte. Vergleiche zunächst ohne Filter, anschließend mit einer eingeschränkten Auswahl.

## Beispiel

### Vorher · Beispieldaten

| Fakt[Dauer] |
| --- |
| 1 |
| 2 |
| 30 |

### Aktion

```dax
Median Dauer = MEDIAN ( Fakt[Dauer] )
```

### Nachher · Beispielergebnis

| Ohne weitere Filter |
| --- |
| 2 |

## Ergebnis

MEDIAN liefert den mittleren numerischen Wert einer sortierten Spalte und ist weniger empfindlich gegenüber einzelnen Ausreißern.

## Warum funktioniert das?

Die mittlere Position der sortierten Zahlen ist 2. Der hohe Wert 30 verschiebt den Median hier nicht wie den arithmetischen Mittelwert.

## Typischer Fehler

Mehrere Statuszeilen je Vorgang als unabhängige Vorgänge mitteln.

## Plausibilitätscheck

Ungefiltert 2. Ein Filter begrenzt die ausgewerteten Zeilen und kann deshalb das Ergebnis verändern.
