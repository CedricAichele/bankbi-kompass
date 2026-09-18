---
{
  "id": "dubletten-finden",
  "slug": "dubletten-finden",
  "titel": "Dubletten finden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Definiere zuerst die Kombination, die eindeutig sein muss. Dann markiere Mehrfachvorkommen und untersuche sie.",
  "ort": "Power Query: Gruppieren / Duplikate · Excel: ZÄHLENWENNS · IDA: Schlüsselprüfung",
  "tags": [
    "Dubletten finden",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "Dubletten"
  ],
  "verwandteThemen": [
    "dubletten",
    "excel-dubletten-finden",
    "ida-dubletten"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Wiederholungen sollen vor dem Weiterverarbeiten sichtbar werden.

## Schritte

1. Fachliche Ebene notieren.
2. Häufigkeit je Schlüsselkombination bestimmen.
3. Abweichende Details prüfen, bevor du etwas löschst.
4. Öffne die [konkrete Duplikate finden-Anleitung](#/wissen/excel-dubletten-finden) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Filtere auf den vollständigen fachlichen Schlüssel und zeige alle Detailspalten.

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

## Ergebnis

P001 darf bei zwei verschiedenen Konten zweimal vorkommen; dieselbe Konto-Stichtag-Kombination soll nur einmal vorkommen.

## Warum funktioniert das?

Duplikate sind immer relativ zur gewählten Schlüsselmenge.

## Plausibilitätscheck

Filtere auf den vollständigen fachlichen Schlüssel und zeige alle Detailspalten.
