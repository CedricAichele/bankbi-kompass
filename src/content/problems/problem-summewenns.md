---
{
  "id": "problem-summewenns",
  "slug": "problem-summewenns",
  "titel": "SUMMEWENNS stimmt nicht",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Summe bleibt 0 oder ist unerwartet hoch. Kriterien greifen nicht, Beträge sind Text oder Zeitkriterium fehlt.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "SUMMEWENNS stimmt nicht"
  ],
  "synonyme": [
    "SUMMEWENNS stimmt nicht",
    "Summe bleibt 0 oder ist unerwartet hoch."
  ],
  "verwandteThemen": [
    "summewenns",
    "zaehlenwenns",
    "stichtag"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sumifs-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Summe bleibt 0 oder ist unerwartet hoch.

## Symptom

Summe bleibt 0 oder ist unerwartet hoch.

## Mögliche Ursachen

Kriterien greifen nicht, Beträge sind Text oder Zeitkriterium fehlt.

## Schnelltest

Prüfe zuerst ZÄHLENWENNS mit identischen Kriterien. Zeige die passenden Zeilen mit Filter an.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Prüfe zuerst ZÄHLENWENNS mit identischen Kriterien. Zeige die passenden Zeilen mit Filter an.
3. Gleiche Bereichsgrößen, Kriterien und Datentypen ab. Nutze bei mehreren Stichtagen ein zusätzliches Datumskriterium.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [SUMMEWENNS](#/wissen/summewenns). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| P001 hat 1.250 und 750 am selben Stichtag → 2.000; bei zwei Stichtagen dürfen nicht beide Bestände einfließen. |

### Aktion

Gleiche Bereichsgrößen, Kriterien und Datentypen ab. Nutze bei mehreren Stichtagen ein zusätzliches Datumskriterium.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Trefferzahl 2 und Summe 2.000 gemeinsam plausibilisieren. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Trefferzahl 2 und Summe 2.000 gemeinsam plausibilisieren.

## Warum funktioniert das?

Die Kriterien wirken als UND. Nur K001 gehört zugleich zu P001 und Segment A.
