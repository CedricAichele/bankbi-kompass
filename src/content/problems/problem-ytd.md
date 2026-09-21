---
{
  "id": "problem-ytd",
  "slug": "problem-ytd",
  "titel": "YTD liefert falsche Werte",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Jahreskumulation startet falsch oder entspricht nur dem Monat. Faktendatum statt Kalendertag gefiltert; Geschäftsjahr falsch; Bestandskennzahl.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "YTD liefert falsche Werte"
  ],
  "synonyme": [
    "YTD liefert falsche Werte",
    "Die Jahreskumulation startet falsch oder entspricht nur dem Monat."
  ],
  "verwandteThemen": [
    "ytd",
    "datumstabelle",
    "bestand-bewegung"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Die Jahreskumulation startet falsch oder entspricht nur dem Monat.

## Symptom

Die Jahreskumulation startet falsch oder entspricht nur dem Monat.

## Mögliche Ursachen

Faktendatum statt Kalendertag gefiltert; Geschäftsjahr falsch; Bestandskennzahl.

## Schnelltest

Teste Januar allein und Januar bis Februar mit einer bekannten Bewegungsreihe.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Teste Januar allein und Januar bis Februar mit einer bekannten Bewegungsreihe.
3. Nutze einen vollständigen Kalender und dessen Felder für Slicer. Prüfe aktive Datumsbeziehung und die gewählte Jahresdefinition.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [YTD berechnen](#/wissen/ytd). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Januar 10, Februar 15: YTD Februar = 25. |

### Aktion

Nutze einen vollständigen Kalender und dessen Felder für Slicer. Prüfe aktive Datumsbeziehung und die gewählte Jahresdefinition.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Vergleiche jeden Monatswert mit der fortlaufenden Handsumme. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Vergleiche jeden Monatswert mit der fortlaufenden Handsumme.

## Warum funktioniert das?

TOTALYTD erhält zuerst das Basismeasure, dann die Datumsspalte. Es erweitert die Datumauswahl vom Jahresanfang bis zum letzten sichtbaren Datum.
