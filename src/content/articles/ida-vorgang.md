---
{
  "id": "ida-vorgang",
  "slug": "ida-vorgang",
  "titel": "Eine Zeile je Vorgang",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Fasse Ereignisse erst nach einer definierten Zeit- und Statusregel zu genau einem Vorgang zusammen.",
  "ort": "IDA / Reporting: allgemeines Granularitätsprinzip",
  "tags": ["Eine Zeile je Vorgang", "Prozessanalyse"],
  "synonyme": [],
  "verwandteThemen": ["granularitaet", "ida-extrema", "median"],
  "kontexte": ["Prozessanalyse"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Vorgang erscheint wegen mehrerer Stufen mehrfach.

## Schritte

1. VORGANG_ID als Gruppenschlüssel bestimmen.
2. Start-/Endereignis und offene Vorgänge fachlich definieren.
3. Ergebnisanzahl mit eindeutigen Vorgangs-IDs vergleichen.

## Beispiel

V032 mit drei Stufen ergibt drei Detailzeilen, aber einen Vorgang. Parallele Stufendauern dürfen nicht blind zur Gesamtdauer addiert werden.

## Typischer Fehler

Den alphabetisch größten Status mit dem letzten Status verwechseln.
