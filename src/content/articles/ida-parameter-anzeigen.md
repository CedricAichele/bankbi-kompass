---
{
  "id": "ida-parameter-anzeigen",
  "slug": "ida-parameter-anzeigen",
  "titel": "Parameterwert im Ergebnis anzeigen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeige die wirksame Auswahl, damit ein Ergebnis später zugeordnet werden kann.",
  "ort": "IDA / Reporting: allgemeines Ausgabeprinzip; konkrete Bindung TODO",
  "tags": ["Parameterwert im Ergebnis anzeigen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-excel-liste", "ida-betrieb"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein exportierter Bericht soll Zeitraum und Segmentauswahl nachvollziehbar machen.

## Schritte

1. Wirksamen Wert statt nur den Standardwert verwenden.
2. Mehrfachauswahl und leere Auswahl lesbar beschreiben.
3. Bei Excel-Listen Metadaten getrennt vom Datenbereich ausgeben.

## Beispiel

Begleitinformation: „Stichtag 31.03.2026; Segmente A und B“.

## Typischer Fehler

Freitextüberschrift aktualisieren, während der tatsächlich verwendete Filter unverändert bleibt.
