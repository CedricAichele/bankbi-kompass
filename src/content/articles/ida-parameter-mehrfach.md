---
{
  "id": "ida-parameter-mehrfach",
  "slug": "ida-parameter-mehrfach",
  "titel": "Mehrere Parameterwerte verwenden",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein mehrwertiger Parameter liefert eine Menge, keinen einzelnen Vergleichswert.",
  "ort": "IDA / Reporting: allgemeines Konzept; IDA-spezifische Übergabe TODO",
  "tags": ["Mehrere Parameterwerte verwenden", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-mehrfachauswahl", "ida-parameter-filter"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Mehrere synthetische Segmente sollen gleichzeitig auswählbar sein.

## Schritte

1. Mehrfachauswahl fachlich definieren.
2. Mengenvergleich statt Einzelwertvergleich verwenden.
3. Leere Auswahl, einen und mehrere Werte testen.

## Beispiel

Auswahl {A, B}: Alle Zeilen aus A oder B werden zugelassen. „Keine Auswahl“ muss bewusst „alle“ oder „keine“ bedeuten.

## Typischer Fehler

Eine kommaseparierte Zeichenfolge ohne definierte Verarbeitung als Wertemenge interpretieren.
