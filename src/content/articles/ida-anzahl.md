---
{
  "id": "ida-anzahl",
  "slug": "ida-anzahl",
  "titel": "Anzahl: Zeilen oder eindeutige Schlüssel?",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeilenanzahl, nichtleere Werte und eindeutige Personen sind verschiedene Kennzahlen.",
  "ort": "IDA / Reporting: allgemeines Zählprinzip; verfügbare Funktionen TODO",
  "tags": ["Anzahl: Zeilen oder eindeutige Schlüssel?", "Reporting"],
  "synonyme": ["COUNT vs DISTINCTCOUNT"],
  "verwandteThemen": ["distinctcount", "granularitaet"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Kundenanzahl wirkt zu hoch.

## Schritte

1. Zählobjekt festlegen.
2. Fehlende Schlüssel prüfen.
3. Zeilenanzahl mit Anzahl unterschiedlicher Schlüssel vergleichen.

## Beispiel

P001/K-A, P001/K-B, P002/K-C: 3 Zeilen, 2 Personen.

## Typischer Fehler

Die Zahl nichtleerer Kontowerte als eindeutige Personenanzahl bezeichnen.
