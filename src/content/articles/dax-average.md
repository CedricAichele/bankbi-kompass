---
{
  "id": "dax-average",
  "slug": "dax-average",
  "titel": "AVERAGE: Durchschnitt je Datenzeile",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "AVERAGE mittelt numerische Spaltenwerte. Leere Werte werden ignoriert, echte Nullen zählen mit.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "AVERAGE: Durchschnitt je Datenzeile"
  ],
  "synonyme": [
    "average",
    "durchschnitt",
    "averagex"
  ],
  "verwandteThemen": [
    "measure",
    "filterkontext",
    "granularitaet",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/average-function-dax",
    "https://learn.microsoft.com/en-us/dax/averagex-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nMittelwert = AVERAGE ( Fakt[Bestand] )\n```",
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du brauchst den durchschnittlichen Bestand je Konto am gewählten Stichtag.

## Voraussetzungen

Eine vorhandene Tabelle mit passendem Zahlen- beziehungsweise Datumsfeld.

## Schritte

1. Prüfe die Spalte **Bestand** und ihren Datentyp.
2. Wähle **Modellierung → Neues Measure** und gib die Formel aus dem Beispiel ein; passe Fakt und den Spaltennamen an dein Modell an.
3. Ziehe das Measure in eine Karte. Vergleiche zunächst ohne Filter, anschließend mit einer eingeschränkten Auswahl.

## Beispiel

### Vorher · Beispieldaten

| Fakt[Bestand] |
| --- |
| 100 |
| 0 |
| BLANK |

### Aktion

```dax
Mittelwert = AVERAGE ( Fakt[Bestand] )
```

### Nachher · Beispielergebnis

| Ohne weitere Filter |
| --- |
| 50 |

## Ergebnis

AVERAGE mittelt numerische Spaltenwerte. Leere Werte werden ignoriert, echte Nullen zählen mit.

## Warum funktioniert das?

AVERAGE ignoriert BLANK in der Zahlenspalte, zählt eine echte 0 aber als Beobachtung. Deshalb wird 100 durch zwei geteilt.

## Typischer Fehler

Kontodurchschnitt mit Personendurchschnitt verwechseln, wenn Personen mehrere Konten haben.

## Plausibilitätscheck

Ungefiltert 50. Ein Filter begrenzt die ausgewerteten Zeilen und kann deshalb das Ergebnis verändern.


## AVERAGEX: einen Ausdruck je Zeile mitteln
AVERAGE liest eine vorhandene Zahlenspalte. AVERAGEX berechnet zuerst je Zeile einen Ausdruck. Separater synthetischer Test, Tabelle Positionen:

| Menge | Einzelpreis |
|---:|---:|
| 2 | 10 |
| 3 | 5 |

**Neues Measure**:
```dax
Mittlerer Positionswert = AVERAGEX(Positionen, Positionen[Menge] * Positionen[Einzelpreis])
```
Ergebnis **17,5**: (20 + 15) / 2. Der Mittelwert der Menge mal Mittelwert des Einzelpreises wäre 2,5 × 7,5 = 18,75 und beantwortet eine andere Frage. Ersetze Tabelle, Mengen- und Preisspalte; definiere, ob je Konto, Kunde oder Vorgang gemittelt werden soll. Jede sichtbare Zeile besitzt hier gleiches Gewicht. Für einen gewichteten Preis braucht es eine ausdrücklich gewichtete Formel. Fehlende Ausdrücke werden beim Mittelwert nicht wie 0 behandelt; Anzahl gültiger Positionen mitkontrollieren.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
