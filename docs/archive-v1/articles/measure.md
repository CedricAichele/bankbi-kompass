---
{
  "id": "measure",
  "slug": "measure",
  "titel": "Measures: dein erstes SUM und DIVIDE",
  "bereich": "Power BI",
  "kategorie": "Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Measure berechnet eine Kennzahl für die aktuelle Auswahl im Bericht. SUM summiert Werte; DIVIDE behandelt eine Division durch null kontrolliert.",
  "tags": ["Measure", "SUM", "DIVIDE", "Kennzahl", "erstes Measure"],
  "synonyme": ["Measure", "SUM", "DIVIDE", "Kennzahl", "erstes Measure"],
  "verwandteThemen": ["filterkontext", "calculate", "measure-spalte"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Ein Measure liefert einen Wert für den gerade gültigen Filterkontext. Wählst du ein anderes Segment, wird dieselbe Definition für eine andere Datenmenge ausgewertet.

## Einfaches Beispiel

Die vollständig erfundene Tabelle Demo_Bestand enthält zwei Konten am gleichen Stichtag mit 120 und 80 Euro. Ohne weitere Filter ergibt das Measure 200 Euro.

```dax
Bestand = SUM ( Demo_Bestand[BESTAND_EUR] )
```

Ein einfacher SUM berücksichtigt vorhandene Filter bereits. CALCULATE ist dafür nicht nötig.

## Eine Quote berechnen

Die Measures Neugeschaeft und Plan seien jeweils Summen eigener, fachlich abgestimmter Daten.

```dax
Planerreichung = DIVIDE ( [Neugeschaeft], [Plan] )
```

Bei Plan = 0 oder BLANK liefert DIVIDE ohne dritten Parameter BLANK. Bei Ist = 80 und Plan = 100 ergibt sich 0,8; formatiert als Prozent sind das 80 %.

## Was passiert in einer Gesamtsumme?

Power BI wertet ein Measure für die Gesamtmenge neu aus. Eine Gesamtquote ist deshalb normalerweise Gesamt-Ist durch Gesamt-Plan, nicht die Summe der angezeigten Einzelquoten.

## Typischer Fehler

Bestände verschiedener Monatsstichtage mit SUM zu einem „aktuellen Bestand“ addieren. Begrenze die Kennzahl auf einen definierten Stichtag.

## Wenn du aus Excel kommst

Ein Measure ähnelt einer zentralen Berechnungsregel für eine Pivot-Auswertung. Es steht nicht als individuelle Formel in jeder Datenzeile.
