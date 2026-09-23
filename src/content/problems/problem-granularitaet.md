---
{
  "id": "problem-granularitaet",
  "slug": "problem-granularitaet",
  "titel": "Auswertung zeigt zu viele oder zu wenige Zeilen",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Plan oder Quote vervielfacht sich mit der Anzahl von Details. Monatsplan mit Einzelkonten verbunden und wiederholt summiert.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Aggregation auf falscher Ebene"
  ],
  "synonyme": [
    "Aggregation auf falscher Ebene",
    "Plan oder Quote vervielfacht sich mit der Anzahl von Details."
  ],
  "verwandteThemen": [
    "plan-ist",
    "star-schema",
    "granularitaet",
    "fakt-zu-fakt"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-many-to-many"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Plan oder Quote vervielfacht sich mit der Anzahl von Details.

## Symptom

Plan oder Quote vervielfacht sich mit der Anzahl von Details.

## Mögliche Ursachen

Monatsplan mit Einzelkonten verbunden und wiederholt summiert.

## Schnelltest

Zähle pro Monat, wie oft derselbe Planwert im Ergebnis steht.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zähle pro Monat, wie oft derselbe Planwert im Ergebnis steht.
3. Aggregiere Ist zuerst auf die Planebene oder verwende getrennte Fakten mit gemeinsamen Dimensionen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Warum Fakt-zu-Fakt problematisch ist](#/wissen/fakt-zu-fakt). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Monatsplan 100 und drei Kontenzeilen erzeugen nach einem flachen Join dreimal 100. Der Plan bleibt fachlich 100. |

### Aktion

Aggregiere Ist zuerst auf die Planebene oder verwende getrennte Fakten mit gemeinsamen Dimensionen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Plan je Monat genau einmal; Ist weiterhin vollständig. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Plan je Monat genau einmal; Ist weiterhin vollständig.

## Warum funktioniert das?

Ein direkter Join zweier Mehrfachseiten erzeugt alle passenden Kombinationen. Getrennte Fakten vermeiden diese Vervielfachung und bewahren die eigene Bedeutung jeder Messung.
