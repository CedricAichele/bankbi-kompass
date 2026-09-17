---
{
  "id": "median",
  "slug": "median",
  "titel": "Median statt Durchschnitt?",
  "bereich": "Datenanalyse",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Median ist der mittlere Wert der sortierten Liste und reagiert weniger stark auf einzelne Ausreißer.",
  "ort": "Excel: MEDIAN · IDA: allgemeines Konzept; native Funktion ungeprüft",
  "tags": ["Median statt Durchschnitt?", "Prozessanalyse"],
  "synonyme": [],
  "verwandteThemen": ["ida-durchschnitt", "ida-vorgang"],
  "kontexte": ["Prozessanalyse"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Wenige sehr lange Vorgänge verzerren die typische Dauer.

## Schritte

1. Eine Dauer je Vorgang herstellen.
2. Werte sortieren; bei gerader Anzahl die beiden mittleren Zahlen mitteln.
3. Median, Mittelwert und Fallzahl gemeinsam betrachten.

## Beispiel

1, 2, 30 Tage → Median 2, Durchschnitt 11. Bei 1, 2, 4, 30 → Median 3.

## Typischer Fehler

Ohne Beleg behaupten, dass IDA eine bestimmte MEDIAN-Funktion anbietet. Bei Bedarf geprüfte Excel-Weiterverarbeitung nutzen.
