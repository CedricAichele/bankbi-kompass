---
{
  "id": "pivottable",
  "slug": "pivottable",
  "titel": "PivotTable erstellen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten auswerten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine PivotTable verdichtet eine flache Ausgangstabelle nach frei gewählten Merkmalen.",
  "ort": "Excel → Einfügen → PivotTable",
  "tags": ["PivotTable erstellen", "Reporting"],
  "synonyme": ["eine Zeile je Person"],
  "verwandteThemen": ["pivotchart", "matrix", "excel-zahl-text"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-pivot-erstellen.webp",
        "alt": "PivotTable aus der synthetischen Tabelle DemoKonten auf einem neuen Arbeitsblatt erstellen.",
        "caption": "PivotTable aus der synthetischen Tabelle DemoKonten auf einem neuen Arbeitsblatt erstellen.",
        "schritt": 1,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du möchtest eine Summe je Produktgruppe ohne viele Formeln.

## Schritte

1. Quelle als Tabelle mit eindeutigen Überschriften aufbauen.
2. Produktgruppe in Zeilen und Betrag in Werte legen.
3. Aggregation, Stichtagsfilter und Aktualisierung prüfen.

## Beispiel

Gruppe A: 120 + 80 = 200 Euro; Gruppe B: 50 Euro. Gesamt am selben Stichtag: 250 Euro.

## Typischer Fehler

Anzahl statt Summe verwenden, weil Zahlen in der Quelle als Text vorliegen.
