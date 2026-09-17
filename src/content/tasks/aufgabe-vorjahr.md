---
{
  "id": "aufgabe-vorjahr",
  "slug": "aufgabe-vorjahr",
  "titel": "Vorjahr berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche dieselbe Kennzahl für fachlich gleichartige Zeiträume oder Stichtage.",
  "ort": "Power BI: Zeitmeasure · Excel: Datumskriterien · IDA: Vergleichsauswahl",
  "tags": ["Vorjahr berechnen", "Bestandsanalyse", "Reporting"],
  "synonyme": ["Vorjahr"],
  "verwandteThemen": ["vorjahr", "datumstabelle", "summewenns"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Entwicklung soll gegenüber dem Vorjahr eingeordnet werden.

## Schritte

1. Zeitraum und Datenabdeckung klären.
2. Vorjahreszeitraum mit gleicher Definition auswählen.
3. Differenz und gegebenenfalls Quote berechnen.

## Beispiel

Power BI: [SAMEPERIODLASTYEAR](#/wissen/vorjahr).
Excel: [SUMMEWENNS](#/wissen/summewenns) mit entsprechenden Vorjahresgrenzen.
IDA: [Parameter im Filter](#/wissen/ida-parameter-filter).

120 gegenüber 100 → +20 beziehungsweise +20 %.

## Typischer Fehler

Einen angebrochenen aktuellen Monat ungekennzeichnet mit einem vollständigen Vorjahresmonat vergleichen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| Power BI        | [Vorjahr berechnen](#/wissen/vorjahr) · [DATEADD und SAMEPERIODLASTYEAR](#/wissen/dateadd) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                          |
| IDA / Reporting | [Text-, Zahlen- und Datumsfilter](#/wissen/ida-filtertypen); generisches Konzept           |
