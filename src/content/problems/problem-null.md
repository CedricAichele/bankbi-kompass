---
{
  "id": "problem-null",
  "slug": "problem-null",
  "titel": "NULL verhält sich unerwartet",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten. Fehlend wird mit 0 oder leerem Text gleichgesetzt.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "NULL verhält sich unerwartet"
  ],
  "synonyme": [
    "NULL verhält sich unerwartet",
    "Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten."
  ],
  "verwandteThemen": [
    "nullwerte",
    "blank"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/replace-values"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten.

## Symptom

Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten.

## Mögliche Ursachen

Fehlend wird mit 0 oder leerem Text gleichgesetzt.

## Schnelltest

Erstelle drei Testfälle: fehlend, echte 0, befüllter Wert. Prüfe Filter und Aggregation getrennt.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Erstelle drei Testfälle: fehlend, echte 0, befüllter Wert. Prüfe Filter und Aggregation getrennt.
3. Definiere die Bedeutung fehlender Werte. Verwende die werkzeugspezifische NULL-/BLANK-Prüfung und ersetze nur nach dokumentierter fachlicher Regel.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Nullwerte behandeln](#/wissen/nullwerte). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| 0 Abschlüsse bei 10 Vorgängen ist eine gemessene Quote von 0 %; fehlende Abschlussdaten sind keine gemessenen 0 %. |

### Aktion

Definiere die Bedeutung fehlender Werte. Verwende die werkzeugspezifische NULL-/BLANK-Prüfung und ersetze nur nach dokumentierter fachlicher Regel.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Fehlwertanzahl separat ausweisen, damit Ersetzungen sichtbar bleiben. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Fehlwertanzahl separat ausweisen, damit Ersetzungen sichtbar bleiben.

## Warum funktioniert das?

NULL beschreibt Abwesenheit. Leerer Text ist ein vorhandener Text mit Länge null. Wird ein unbekannter Betrag durch 0 ersetzt, ändert sich etwa der Durchschnitt von 250 auf rund 166,67; die Daten sehen vollständiger aus, als sie sind.
