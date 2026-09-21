---
{
  "id": "problem-zahl-text",
  "slug": "problem-zahl-text",
  "titel": "Zahl ist als Text gespeichert",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUMME ignoriert einen angezeigten Betrag. Import hat Zahlen als Text geliefert.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Zahl ist als Text gespeichert"
  ],
  "synonyme": [
    "Zahl ist als Text gespeichert",
    "SUMME ignoriert einen angezeigten Betrag."
  ],
  "verwandteThemen": [
    "excel-zahl-text",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/numbervalue-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

SUMME ignoriert einen angezeigten Betrag.

## Symptom

SUMME ignoriert einen angezeigten Betrag.

## Mögliche Ursachen

Import hat Zahlen als Text geliefert.

## Schnelltest

Prüfe mit =ISTZAHL(A2). FALSCH weist auf Text hin.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Prüfe mit =ISTZAHL(A2). FALSCH weist auf Text hin.
3. Bei bekanntem Format Daten → Text in Spalten mit passender Interpretation oder Power Query mit Gebietsschema verwenden. Kennungen mit führenden Nullen bleiben ausdrücklich Text.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Zahlen als Text erkennen](#/wissen/excel-zahl-text). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Text "1250" plus Zahl 750 wird bei SUMME eines Bereichs nicht wie zwei Zahlen behandelt. |

### Aktion

Bei bekanntem Format Daten → Text in Spalten mit passender Interpretation oder Power Query mit Gebietsschema verwenden. Kennungen mit führenden Nullen bleiben ausdrücklich Text.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Nach Konvertierung ISTZAHL = WAHR und Gesamtsumme = 2.000. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Nach Konvertierung ISTZAHL = WAHR und Gesamtsumme = 2.000.

## Warum funktioniert das?

Die Trennzeichen werden ausdrücklich vorgegeben. Die Darstellung als Zahl allein würde den zugrunde liegenden Text nicht umwandeln.
