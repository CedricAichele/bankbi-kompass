---
{
  "id": "ida-parameter",
  "slug": "ida-parameter",
  "titel": "Parameter / Eingabeaufforderung planen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Parameter ist eine Eingabe mit festgelegtem Typ und Bedeutung. Er filtert erst, wenn die Auswertung ihn verwendet.",
  "ort": "IDA / Reporting: allgemeines Parameterkonzept; konkreter Anlagedialog TODO",
  "tags": ["Parameter / Eingabeaufforderung planen", "Reporting"],
  "synonyme": ["parameter", "eingabeparameter"],
  "verwandteThemen": ["ida-parameter-filter", "ida-parameter-typ"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Stichtag soll auswählbar sein statt fest im Filter zu stehen.

## Schritte

1. Bedeutung, Datentyp, Pflichtangabe und Standardwert definieren.
2. Eingabe mit der vorgesehenen Auswertung verknüpfen.
3. Geänderten und fehlenden Wert testen.

## Beispiel

Ein synthetischer Parameter AuswahlDatum hat den Typ Datum und wird im Stichtagsfilter verwendet.

## Typischer Fehler

Eine Eingabeaufforderung anzeigen, deren Wert nie im Filter ankommt.
