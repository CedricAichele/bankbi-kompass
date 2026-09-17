---
{
  "id": "ida-dubletten",
  "slug": "ida-dubletten",
  "titel": "Dubletten erkennen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe Wiederholungen anhand der gewollten Schlüsselkombination, nicht nur anhand der Anzeige.",
  "ort": "IDA / Reporting: allgemeine Schlüsselprüfung",
  "tags": ["Dubletten erkennen", "Kundenanalyse", "Datenqualität"],
  "synonyme": ["Dubletten"],
  "verwandteThemen": ["dubletten", "granularitaet"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste enthält scheinbar doppelte Personen oder Vorgänge.

## Schritte

1. Gewünschte Zeilenebene festlegen.
2. Anzahl je Schlüsselkombination bestimmen.
3. Mehrfachkombinationen auf abweichende Details prüfen.

## Beispiel

P001/K-A und P001/K-B sind auf Kontoebene keine Dubletten. Zweimal K-A zum selben Stichtag muss untersucht werden.

## Typischer Fehler

Unterschiedliche Detailzeilen nur optisch ausblenden und die falsche Summe behalten.
