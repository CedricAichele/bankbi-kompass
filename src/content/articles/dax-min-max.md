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
    "maximum",
    "max",
    "maxx",
    "min",
    "minx"
  ],
  "verwandteThemen": [
    "measure",
    "filterkontext",
    "aktueller-stichtag",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/max-function-dax",
    "https://learn.microsoft.com/en-us/dax/maxx-function-dax",
    "https://learn.microsoft.com/en-us/dax/min-function-dax",
    "https://learn.microsoft.com/en-us/dax/minx-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nLetztes Datum = MAX ( Fakt[Datum] )\n```",
  "ebene": "Praxisartikel"
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


## MIN, MAX, MINX und MAXX gegenüberstellen
Eine Zahlenspalte Fakt[Bestand] mit 100, 0 und BLANK liefert als Measures MIN(Fakt[Bestand]) = **0**, MAX(Fakt[Bestand]) = **100**. Eine vorhandene 0 unterscheidet sich fachlich von einem fehlenden Betrag. Das Zwei-Argument-Muster hat andere BLANK-Regeln; diese Ergebnisse gelten für die Spaltenaggregation.

Für eine **Berechnung je Zeile** verwende Iteratoren. Separate Tabelle Positionen: Menge/Einzelpreis = 2/10 und 3/5. Lege zwei Measures einzeln an:
```dax
Kleinster Positionswert = MINX(Positionen, Positionen[Menge] * Positionen[Einzelpreis])
```
```dax
Groesster Positionswert = MAXX(Positionen, Positionen[Menge] * Positionen[Einzelpreis])
```
Die Positionswerte sind 20 und 15, Ergebnis **15** beziehungsweise **20**. Ersetze Tabelle und beide Zahlenspalten. MINX/MAXX liefern den Extremwert des Ausdrucks, keine vollständige Zeile und keinen automatisch zugeordneten Kundennamen. Für die Zeile zum Extremwert eine eigene Auswahlregel mit Gleichstandsbehandlung definieren. Prüfe auch gleiche Werte und Filter auf nur eine Position.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
