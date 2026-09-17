---
{
  "id": "personen-zaehlen",
  "slug": "personen-zaehlen",
  "titel": "Eindeutige Personen zählen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zähle unterschiedliche Personenkennungen, nicht alle Kontenzeilen.",
  "ort": "Power BI: DISTINCTCOUNT · Excel: EINDEUTIG · IDA: eindeutiges Zählkonzept",
  "tags": ["Eindeutige Personen zählen", "Kundenanalyse", "Datenqualität"],
  "synonyme": ["einzigartige Kunden"],
  "verwandteThemen": ["distinctcount", "eindeutig", "ida-anzahl"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst die Kundenanzahl trotz mehrerer Konten je Kunde.

## Schritte

1. Personenschlüssel definieren.
2. Fehlende Schlüssel separat behandeln.
3. Zählung mit einer kleinen eindeutigen Liste kontrollieren.

## Beispiel

P001, P001, P002 → 2 Personen.

[Power BI: DISTINCTCOUNT](#/wissen/distinctcount) · [Excel: EINDEUTIG](#/wissen/eindeutig) · [IDA: Zählgrößen](#/wissen/ida-anzahl)

## Typischer Fehler

Gruppenanzahlen addieren, obwohl eine Person in mehreren Gruppen vorkommen kann.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [DISTINCTCOUNT: eindeutige Personen zählen](#/wissen/distinctcount) · [COUNTROWS: Zeilen zählen](#/wissen/countrows) |
| Excel           | [EINDEUTIG: Liste ohne Wiederholungen](#/wissen/eindeutig)                                                           |
| IDA / Reporting | [Anzahl: Zeilen oder eindeutige Schlüssel?](#/wissen/ida-anzahl); generisches Konzept                                |
