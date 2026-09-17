---
{
  "id": "ida-parameter-typ",
  "slug": "ida-parameter-typ",
  "titel": "Parameter-Datentyp festlegen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Parameter und Vergleichsfeld müssen kompatible Datentypen haben.",
  "ort": "IDA / Reporting: allgemeines Typkonzept",
  "tags": ["Parameter-Datentyp festlegen", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["datenbereinigung", "ida-formate"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine scheinbar passende Eingabe liefert keine Treffer.

## Schritte

1. Datum, Zahl oder Text nach fachlicher Bedeutung wählen.
2. IDs mit führenden Nullen als Text behandeln.
3. Ungültige Eingaben und Gebietsschema prüfen.

## Beispiel

Kennung „0012“ als Text ist nicht automatisch dieselbe Darstellung wie Zahl 12.

## Typischer Fehler

Einen Stichtag als mehrdeutigen Text vergleichen.
