---
{
  "id": "problem-export",
  "slug": "problem-export",
  "titel": "Ergebnis nach Export anders",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennungen, Datum oder Summe ändern sich in Excel. Importinterpretation, Rundung oder unvollständiger Export.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Ergebnis nach Export anders"
  ],
  "synonyme": [
    "Ergebnis nach Export anders",
    "Kennungen, Datum oder Summe ändern sich in Excel."
  ],
  "verwandteThemen": [
    "ida-excel-export",
    "ida-nullstellen",
    "excel-import"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Kennungen, Datum oder Summe ändern sich in Excel.

## Symptom

Kennungen, Datum oder Summe ändern sich in Excel.

## Mögliche Ursachen

Importinterpretation, Rundung oder unvollständiger Export.

## Schnelltest

Vergleiche Zeilenzahl, Kontrollsumme und eine Kennung mit führenden Nullen vor/nach Export.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Vergleiche Zeilenzahl, Kontrollsumme und eine Kennung mit führenden Nullen vor/nach Export.
3. Importiere CSV über Daten → Aus Text/CSV. Lege Typen und Gebietsschema ausdrücklich fest; prüfe Exportbegrenzungen anhand öffentlicher Werkzeugdokumentation.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Excel-Export kontrollieren](#/wissen/ida-excel-export). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| 00123 wird bei automatischer Zahleninterpretation zu 123. |

### Aktion

Importiere CSV über Daten → Aus Text/CSV. Lege Typen und Gebietsschema ausdrücklich fest; prüfe Exportbegrenzungen anhand öffentlicher Werkzeugdokumentation.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Kennung unverändert fünfstellig, Betrag numerisch und Summe identisch. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Kennung unverändert fünfstellig, Betrag numerisch und Summe identisch.

## Warum funktioniert das?

Die korrekte Bildschirmdarstellung garantiert keinen korrekten Export. Ausgabeformat und spätere Interpretation sind getrennte Verarbeitungsschritte.
