---
{
  "id": "ida-filter",
  "slug": "ida-filter",
  "titel": "Filter erstellen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter begrenzt die ausgewerteten Zeilen anhand einer ausdrücklich formulierten Bedingung.",
  "ort": "IDA / Reporting: allgemeines Filterkonzept; Ausdruckssyntax TODO",
  "tags": ["Filter erstellen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-bedingungen", "ida-null", "ida-filter-pruefen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine Liste für einen Stichtag oder ein synthetisches Segment.

## Schritte

1. Feld, Operator und Vergleichswert festlegen.
2. Datentyp und Behandlung leerer Werte klären.
3. Einen erwarteten Treffer und einen Nichttreffer testen.

## Beispiel

Pseudobedingung: STICHTAG entspricht 31.03.2026. Datum als Datum behandeln, nicht nur als formatierten Text.

## Typischer Fehler

Eine Filterregel auf falscher Ebene anwenden: Filter vor Aggregation und Filter auf Gruppensummen können unterschiedliche Ergebnisse liefern.
