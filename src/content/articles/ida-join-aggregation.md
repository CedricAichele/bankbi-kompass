---
{
  "id": "ida-join-aggregation",
  "slug": "ida-join-aggregation",
  "titel": "Nach einem Join richtig aggregieren",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Join kann Beträge wiederholen. Aggregiere auf fachlich passender Ebene, bevor wiederholte Werte aufsummiert werden.",
  "ort": "IDA / Reporting: allgemeines Join-Prinzip",
  "tags": ["Nach einem Join richtig aggregieren", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["ida-join-pruefen", "gruppieren", "summe-zu-hoch"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Listenbetrag steigt nach einer Verknüpfung.

## Schritte

1. Granularität beider Seiten bestimmen.
2. Mehrfachtreffer je Schlüssel ermitteln.
3. Details nötigenfalls vor dem Join verdichten; Ergebnis kontrollieren.

## Beispiel

Ein Planbetrag von 100 Euro trifft auf drei Konten. Die drei Ergebniszeilen machen daraus keinen Plan von 300 Euro.

## Typischer Fehler

SUM(DISTINCT Betrag) als Reparatur: Zwei unterschiedliche Fälle können denselben korrekten Betrag haben.
