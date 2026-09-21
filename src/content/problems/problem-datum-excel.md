---
{
  "id": "problem-datum-excel",
  "slug": "problem-datum-excel",
  "titel": "Datum wird nicht erkannt",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Datumsfilter oder zeitliche Sortierung funktionieren nicht. Datumszeichenfolge wurde als Text oder mit falschem Gebietsschema interpretiert.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Datum wird nicht erkannt"
  ],
  "synonyme": [
    "Datum wird nicht erkannt",
    "Datumsfilter oder zeitliche Sortierung funktionieren nicht."
  ],
  "verwandteThemen": [
    "excel-datum",
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
    "https://support.microsoft.com/en-us/excel/functions/datevalue-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Datumsfilter oder zeitliche Sortierung funktionieren nicht.

## Symptom

Datumsfilter oder zeitliche Sortierung funktionieren nicht.

## Mögliche Ursachen

Datumszeichenfolge wurde als Text oder mit falschem Gebietsschema interpretiert.

## Schnelltest

Prüfe ISTZAHL; formatiere eine Kopie als Zahl und vergleiche Tag und Monat.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Prüfe ISTZAHL; formatiere eine Kopie als Zahl und vergleiche Tag und Monat.
3. Importiere über Power Query mit explizitem Datentyp Datum und richtigem Gebietsschema. Bei mehrdeutigen Daten die Quelle klären.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Datumswerte korrigieren](#/wissen/excel-datum). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| 03/04/2026 kann je Kultur 3. April oder 4. März bedeuten. |

### Aktion

Importiere über Power Query mit explizitem Datentyp Datum und richtigem Gebietsschema. Bei mehrdeutigen Daten die Quelle klären.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Teste einen eindeutigen Tag wie 31.03.2026 und den mehrdeutigen Wert. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Teste einen eindeutigen Tag wie 31.03.2026 und den mehrdeutigen Wert.

## Warum funktioniert das?

Excel speichert Datumswerte als fortlaufende Zahlen. DATWERT interpretiert einen passenden Datumstext; das Zellformat macht den Wert als Datum lesbar.
