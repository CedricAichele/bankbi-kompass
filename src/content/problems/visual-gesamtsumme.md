---
{
  "id": "visual-gesamtsumme",
  "slug": "visual-gesamtsumme",
  "titel": "Warum die Gesamtsumme anders ausfällt",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Measure wird in der Gesamtzeile im gesamten Filterkontext neu berechnet. Das ist nicht automatisch die Summe sichtbarer Zeilen.",
  "ort": "Power BI → Kontrolltabelle mit Stichtag, Schlüssel und Measure",
  "tags": ["Warum die Gesamtsumme anders ausfällt"],
  "synonyme": ["visual falsche gesamtsumme"],
  "verwandteThemen": ["sumx", "distinctcount", "divide"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Quoten oder eindeutige Personen addieren sich nicht wie erwartet.

## Schritte

1. Fachliche Bedeutung der Gesamtzeile klären.
2. Zähler und Nenner beziehungsweise eindeutige Schlüssel separat prüfen.
3. Nur wenn fachlich korrekt eine explizite Iteration über die gewünschte Zeilenebene verwenden.

## Beispiel

Segmentquoten 50 % und 100 % ergeben insgesamt nicht automatisch 150 %; die Gesamtquote ist Gesamtergebnis / Gesamtbasis.

## Typischer Fehler

SUMX einsetzen, nur damit eine erwartete optische Summe entsteht, obwohl Personen mehrfach vorkommen.
