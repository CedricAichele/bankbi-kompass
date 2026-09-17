---
{
  "id": "ida-excel-liste",
  "slug": "ida-excel-liste",
  "titel": "Liste sinnvoll für Excel aufbauen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Verwende eine Kopfzeile, eine Spalte je Merkmal und eine Zeile je festgelegtem Schlüssel.",
  "ort": "IDA / Reporting: generische Ausgabestruktur",
  "tags": ["Liste sinnvoll für Excel aufbauen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["reporting", "pivottable", "ida-parameter-anzeigen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Die Ausgabe soll gefiltert, verbunden oder in einer PivotTable genutzt werden.

## Schritte

1. Eindeutige Spaltenüberschriften und Schlüssel aufnehmen.
2. Leere Trennzeilen, verbundene Zellen und eingestreute Summen vermeiden.
3. Filterbeschreibung außerhalb des eigentlichen Datenbereichs dokumentieren.

## Beispiel

PERSON_ID | KONTO_ID | STICHTAG | BESTAND_EUR. Jede Datenzeile folgt derselben Struktur.

## Typischer Fehler

Gruppenköpfe oder Summenzeilen als gewöhnliche Daten exportieren und später erneut summieren.
