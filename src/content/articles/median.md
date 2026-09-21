---
{
  "id": "median",
  "slug": "median",
  "titel": "Median statt Durchschnitt?",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Median ist der mittlere Wert der sortierten Liste und reagiert weniger stark auf einzelne Ausreißer.",
  "ort": "Excel: MEDIAN · IDA: allgemeines Konzept; native Funktion ungeprüft",
  "tags": [
    "Median statt Durchschnitt?",
    "Prozessanalyse"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "dax-median",
    "ida-durchschnitt",
    "ida-vorgang"
  ],
  "kontexte": [
    "Prozessanalyse"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/median-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Wenige sehr lange Vorgänge verzerren die typische Dauer.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: Dauern: 1, 2, 30 Tage.
2. Werte sortieren und den mittleren Wert bestimmen.
3. Prüfe die Unterscheidung am Ergebnis: Median 2; arithmetischer Mittelwert 11.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Dauern: 1, 2, 30 Tage. |

### Aktion

Werte sortieren und den mittleren Wert bestimmen.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Median 2; arithmetischer Mittelwert 11. |

## Ergebnis

Der Median ist der mittlere Wert der sortierten Liste und reagiert weniger stark auf einzelne Ausreißer.

## Warum funktioniert das?

Der Median teilt die geordnete Beobachtungsmenge in zwei Hälften und wird durch den einzelnen hohen Wert weniger verschoben. Bei gerader Anzahl wird das Mittel der beiden mittleren Werte verwendet.

## Typischer Fehler

Ohne Beleg behaupten, dass IDA eine bestimmte MEDIAN-Funktion anbietet. Bei Bedarf geprüfte Excel-Weiterverarbeitung nutzen.

## Plausibilitätscheck

Median 2; arithmetischer Mittelwert 11.
