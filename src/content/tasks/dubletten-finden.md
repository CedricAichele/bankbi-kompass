---
{
  "id": "dubletten-finden",
  "slug": "dubletten-finden",
  "titel": "Dubletten finden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Definiere zuerst die Kombination, die eindeutig sein muss. Dann markiere Mehrfachvorkommen und untersuche sie.",
  "ort": "Power Query: Gruppieren / Duplikate · Excel: ZÄHLENWENNS · IDA: Schlüsselprüfung",
  "tags": ["Dubletten finden", "Kundenanalyse", "Datenqualität"],
  "synonyme": ["Dubletten"],
  "verwandteThemen": ["dubletten", "excel-dubletten-finden", "ida-dubletten"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Wiederholungen sollen vor dem Weiterverarbeiten sichtbar werden.

## Schritte

1. Fachliche Ebene notieren.
2. Häufigkeit je Schlüsselkombination bestimmen.
3. Abweichende Details prüfen, bevor du etwas löschst.

## Beispiel

K-A am 31.03.2026 zweimal → untersuchen. P001 mit K-A und K-B → auf Kontoebene korrekt.

[Excel-Prüfung](#/wissen/excel-dubletten-finden) · [Power Query](#/wissen/dubletten) · [IDA-Prüfung](#/wissen/ida-dubletten)

## Typischer Fehler

Wiederholte Personenkennungen pauschal als fehlerhafte Dubletten behandeln.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Dubletten prüfen und entfernen](#/wissen/dubletten) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [Duplikate finden](#/wissen/excel-dubletten-finden)                                                                     |
| IDA / Reporting | [Dubletten erkennen](#/wissen/ida-dubletten); generisches Konzept                                                       |
