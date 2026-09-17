---
{
  "id": "ida-aggregation",
  "slug": "ida-aggregation",
  "titel": "Aggregationsebene festlegen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Aggregation ist nur sinnvoll, wenn Messwert, Gruppierung und Zeitraum zueinander passen.",
  "ort": "IDA / Reporting: allgemeine Prüfung vor der Kennzahlberechnung",
  "tags": ["Aggregationsebene festlegen", "Reporting"],
  "synonyme": ["falsche summe"],
  "verwandteThemen": ["granularitaet", "ida-join-aggregation", "stichtag"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst Summen oder Anzahlen je Segment statt Einzelzeilen.

## Schritte

1. Zeilenebene und Zielgruppe benennen.
2. Aggregation pro Messwert festlegen.
3. Gruppen- und Gesamtergebnis anhand weniger Zeilen vergleichen.

## Beispiel

120 + 80 Euro innerhalb eines Stichtags ergeben 200 Euro. Derselbe Bestand über zwei Stichtage ist keine zusätzliche Summe.

## Typischer Fehler

Nach einem Join mehrfach vorhandene Ausgangsbeträge summieren.
