---
{
  "id": "ida-summe",
  "slug": "ida-summe",
  "titel": "Summe berechnen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Summiere additive Werte innerhalb einer passenden Ebene und eines passenden Zeitraums.",
  "ort": "IDA / Reporting: allgemeine Aggregation; konkrete Funktion TODO",
  "tags": ["Summe berechnen", "Bestandsanalyse", "Reporting"],
  "synonyme": ["SUMME"],
  "verwandteThemen": ["ida-aggregation", "stichtag"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste braucht einen Gruppenbetrag.

## Schritte

1. Zahlenfeld und Gruppierung festlegen.
2. Doppelte Beträge durch Joins ausschließen.
3. Gesamtsumme auf dieselbe Datenmenge abstimmen.

## Beispiel

120 + 80 Euro am selben Stichtag = 200 Euro.

## Typischer Fehler

Bestände verschiedener Stichtage als aktuellen Bestand addieren.
