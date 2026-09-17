---
{
  "id": "ida-null",
  "slug": "ida-null",
  "titel": "NULL prüfen und behandeln",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "NULL steht für einen fehlenden Wert und ist fachlich von 0 und leerem Text zu unterscheiden.",
  "ort": "IDA / Reporting: allgemeines NULL-Prinzip; konkrete Syntax TODO",
  "tags": ["NULL prüfen und behandeln", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["nullwerte", "ida-durchschnitt"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Filter oder eine Kennzahl lässt fehlende Werte unerwartet weg.

## Schritte

1. NULL, Leertext und 0 getrennt ermitteln.
2. Fachlich festlegen, ob fehlende Werte eingeschlossen werden.
3. Filter und Aggregation mit je einem Testfall prüfen.

## Beispiel

Dauer: 0 Tage = bekannt und null. NULL = nicht bekannt. Beides gleichzusetzen kann den Durchschnitt verändern.

## Typischer Fehler

In SQL-artiger Logik ist ein gewöhnlicher Vergleich mit NULL kein normaler Gleichheitsvergleich. Eine ausdrücklich geeignete NULL-Prüfung verwenden.
