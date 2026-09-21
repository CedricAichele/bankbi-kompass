---
{
  "id": "problem-filter-kalk",
  "slug": "problem-filter-kalk",
  "titel": "FILTER liefert #KALK!",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine FILTER-Formel scheitert bei leerer Auswahl. Kein Treffer und kein Ersatzwert für eine leere Ergebnismenge.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "FILTER liefert #KALK!"
  ],
  "synonyme": [
    "FILTER liefert #KALK!",
    "Eine FILTER-Formel scheitert bei leerer Auswahl."
  ],
  "verwandteThemen": [
    "excel-filtern",
    "excel-fehler"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/filter-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Eine FILTER-Formel scheitert bei leerer Auswahl.

## Symptom

Eine FILTER-Formel scheitert bei leerer Auswahl.

## Mögliche Ursachen

Kein Treffer und kein Ersatzwert für eine leere Ergebnismenge.

## Schnelltest

Teste dieselbe Formel mit einem sicher vorhandenen und einem fehlenden Schlüssel.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Teste dieselbe Formel mit einem sicher vorhandenen und einem fehlenden Schlüssel.
3. Ergänze das dritte Argument, beispielsweise "Keine Treffer". Bei #ÜBERLAUF! stattdessen blockierende Zellen unter/neben der Ausgabe prüfen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [FILTER: passende Zeilen ausgeben](#/wissen/excel-filtern). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| FILTER(A2:D7;B2:B7="P999";"Keine Treffer") liefert den Ersatztext. |

### Aktion

Ergänze das dritte Argument, beispielsweise "Keine Treffer". Bei #ÜBERLAUF! stattdessen blockierende Zellen unter/neben der Ausgabe prüfen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| P001 muss weiterhin zwei Zeilen liefern; P999 den Ersatztext. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

P001 muss weiterhin zwei Zeilen liefern; P999 den Ersatztext.

## Warum funktioniert das?

Eine Wahrheitsliste entscheidet für jede Ausgangszeile, ob sie in die Ausgabe gelangt. Mehrere Treffer bleiben als mehrere Zeilen erhalten.
