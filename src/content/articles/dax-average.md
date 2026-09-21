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
    "durchschnitt"
  ],
  "verwandteThemen": [
    "measure",
    "filterkontext",
    "granularitaet",
    "dax-median"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/average-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nMittelwert = AVERAGE ( Fakt[Bestand] )\n```"
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
