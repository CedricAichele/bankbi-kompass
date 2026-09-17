---
{
  "id": "eine-zeile-je-person",
  "slug": "eine-zeile-je-person",
  "titel": "Eine Zeile je Person",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine reine Personenliste braucht eindeutige IDs. Für zusätzliche Messwerte musst du je Person fachlich passend aggregieren.",
  "ort": "Power Query: Gruppieren · Excel: EINDEUTIG / PivotTable · IDA: Gruppierungskonzept",
  "tags": ["Eine Zeile je Person", "Kundenanalyse", "Datenqualität"],
  "synonyme":
    ["mehrere konten pro kunde", "eine Zeile je Person", "einzigartige Kunden"],
  "verwandteThemen":
    [
      "granularitaet",
      "distinctcount",
      "eins-zu-viele",
      "dubletten",
      "gruppieren",
    ],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Mehrere Konten pro Kunde sollen in einer übersichtlichen Personenliste zusammenkommen.

## Schritte

1. Personenschlüssel bestimmen und leere IDs prüfen.
2. Nur IDs? → eindeutige Werteliste erstellen.
3. Auch Beträge? → nach Person und bei Beständen zusätzlich nach Stichtag gruppieren.

## Beispiel

P001/K-A/120 und P001/K-B/80 → P001/200 Euro am selben Stichtag.

Excel: [EINDEUTIG](#/wissen/eindeutig). Power BI/Excel: [Gruppieren](#/wissen/gruppieren). IDA: [Gruppierung](#/wissen/ida-gruppieren).

## Typischer Fehler

DISTINCTCOUNT liefert eine Zahl, keine Personenliste. Kontonummern als weitere Gruppenschlüssel verhindern eine Zeile je Person.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Power BI        | [Gruppieren: Werte je Schlüssel zusammenfassen](#/wissen/gruppieren) · [DISTINCTCOUNT: eindeutige Personen zählen](#/wissen/distinctcount) |
| Excel           | [PivotTable erstellen](#/wissen/pivottable)                                                                                                |
| IDA / Reporting | [Zielgranularität vor dem Join festlegen](#/wissen/ida-zielgranularitaet); generisches Konzept                                             |
