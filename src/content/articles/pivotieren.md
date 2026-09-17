---
{
  "id": "pivotieren",
  "slug": "pivotieren",
  "titel": "Pivotieren: von lang nach breit",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Pivotieren macht Werte einer Spalte zu neuen Spaltenüberschriften.",
  "ort": "Power Query → Transformieren → Spalte pivotieren",
  "tags": ["Pivotieren: von lang nach breit", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["entpivotieren", "gruppieren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst pro Person separate Spalten für synthetische Produktgruppen.

## Schritte

1. Übrige Spalten auf die gewünschte Zeilenebene begrenzen.
2. Die Kategorie zum Pivotieren und die Wertspalte wählen.
3. Bei Mehrfachwerten eine fachlich passende Aggregation festlegen.

## Beispiel

P001 / Gruppe A / 10 und P001 / Gruppe B / 20 → P001 mit den Spalten A = 10 und B = 20.

## Typischer Fehler

Eine zusätzliche Konto-ID als Gruppierungsschlüssel stehen lassen: Dann entstehen weiterhin mehrere Personenzeilen.
