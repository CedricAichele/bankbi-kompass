---
{
  "id": "aufgabe-ytd",
  "slug": "aufgabe-ytd",
  "titel": "YTD berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kumuliere additive Bewegungen seit Jahresbeginn bis zu einem festgelegten Enddatum.",
  "ort": "Power BI: DATESYTD · Excel: Datumsintervall · IDA: Zeitraumfilter",
  "tags": ["YTD berechnen", "Bestandsanalyse", "Reporting"],
  "synonyme": ["YTD"],
  "verwandteThemen": ["ytd", "stichtag", "plan-ist"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst bisheriges Neugeschäft oder einen vergleichbaren Plan-Ist-Zeitraum.

## Schritte

1. Beginn und Ende festlegen.
2. Bewegungen im Intervall summieren.
3. Gleichen Zeitraum für Vergleichs- und Planwerte verwenden.

## Beispiel

Januar 10, Februar 15, März 12 → 37 Euro.

[Power BI: YTD](#/wissen/ytd) · [Excel: SUMMEWENNS](#/wissen/summewenns) · [IDA: Filter](#/wissen/ida-filter)

## Typischer Fehler

Snapshots sind keine additiven Monatsbewegungen. Abweichende Geschäftsjahre benötigen eine eigene Regel.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                   |
| --------------- | ------------------------------------------------------------------------------------ |
| Power BI        | [YTD berechnen](#/wissen/ytd) · [DATESYTD oder TOTALYTD](#/wissen/datesytd-totalytd) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                    |
| IDA / Reporting | [Filter vor oder nach Aggregation](#/wissen/ida-filterebene); generisches Konzept    |
