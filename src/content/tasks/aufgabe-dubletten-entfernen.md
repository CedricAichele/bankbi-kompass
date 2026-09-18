---
{
  "id": "aufgabe-dubletten-entfernen",
  "slug": "aufgabe-dubletten-entfernen",
  "titel": "Dubletten gezielt entfernen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entferne nur fachlich identische Duplikate. Für mehrere gültige Zeilen brauchst du eine Auswahl- oder Aggregationsregel.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Dubletten gezielt entfernen"
  ],
  "synonyme": [
    "duplikate entfernen"
  ],
  "verwandteThemen": [
    "dubletten",
    "excel-dubletten-entfernen",
    "ida-dubletten"
  ],
  "kontexte": [
    "Reporting",
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

Eine Lieferung enthält versehentlich wiederholte Datensätze.

## Schritte

1. Eindeutige Schlüsselkombination festlegen.
2. Mehrfachvorkommen und abweichende Felder prüfen.
3. Nur bestätigte Duplikate entfernen; Anzahl und Summe vorher/nachher dokumentieren.
4. Öffne die [konkrete Duplikate entfernen-Anleitung](#/wissen/excel-dubletten-entfernen) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Vorher 3 Zeilen und 320; nachher 2 und 200. Nur die bestätigte fehlerhafte Doppelzeile entfällt.

## Beispiel

K001 am gleichen Stichtag mit identischem Betrag zweimal → eine Zeile; unterschiedliche Stichtage bleiben erhalten.

## Typischer Fehler

Nur Personennummer als Duplikatkriterium wählen und gültige Konten verlieren.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Dubletten prüfen und entfernen](#/wissen/dubletten) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [Duplikate entfernen](#/wissen/excel-dubletten-entfernen)                                                               |
| IDA / Reporting | [Dubletten erkennen](#/wissen/ida-dubletten); generisches Konzept                                                       |

## Ergebnis

Aus K001/31.03./120 zweimal und K002/31.03./80 einmal werden zwei fachlich bestätigte Zeilen mit Summe 200.

## Warum funktioniert das?

Einzigartigkeit ist erst nach Festlegung der richtigen Ebene sinnvoll.

## Plausibilitätscheck

Vorher 3 Zeilen und 320; nachher 2 und 200. Nur die bestätigte fehlerhafte Doppelzeile entfällt.
