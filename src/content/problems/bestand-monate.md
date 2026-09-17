---
{
  "id": "bestand-monate",
  "slug": "bestand-monate",
  "titel": "Bestand wird über Monate aufsummiert",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Filtere auf einen fachlich festgelegten Stichtag, bevor du Bestände addierst.",
  "ort": "Power BI → Kontrolltabelle mit Stichtag, Schlüssel und Measure",
  "tags": ["Bestand wird über Monate aufsummiert"],
  "synonyme": ["bestand wird aufsummiert"],
  "verwandteThemen":
    ["aktueller-stichtag", "bestand-bewegung", "summe-zu-hoch"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Jahreskarte ist viel höher als jeder Monatsbestand.

## Schritte

1. Stichtag in eine Kontrolltabelle aufnehmen.
2. Prüfen, ob dasselbe Konto in mehreren Monaten enthalten ist.
3. Gewünschten Stichtag festlegen oder ein explizites Letztbestandsmeasure verwenden.

## Beispiel

K001 mit 100 im Januar und 120 im Februar → Februarbestand 120.

## Typischer Fehler

Mit DISTINCT auf Beträgen entdoppeln; zwei Konten dürfen denselben Betrag besitzen.
