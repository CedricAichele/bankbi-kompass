---
{
  "id": "ida-extrema",
  "slug": "ida-extrema",
  "titel": "Maximum und Minimum",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Maximum und Minimum liefern die größten beziehungsweise kleinsten Werte innerhalb einer Gruppe.",
  "ort": "IDA / Reporting: allgemeine Aggregation; konkrete Funktionssyntax TODO",
  "tags": ["Maximum und Minimum", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-vorgang", "ida-aggregation"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du suchst den ersten oder letzten Zeitpunkt oder eine besonders lange Dauer.

## Schritte

1. Gruppierung und Datentyp festlegen.
2. Minimum und Maximum für das gewünschte Feld bestimmen.
3. Prüfen, ob zusätzlich die zugehörige ganze Zeile benötigt wird.

## Beispiel

Dauern 1, 2, 30 → Minimum 1, Maximum 30.

## Typischer Fehler

MAX(Datum) liefert nicht automatisch die übrigen Felder derselben Datensatzzeile.
