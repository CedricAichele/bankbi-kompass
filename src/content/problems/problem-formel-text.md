---
{
  "id": "problem-formel-text",
  "slug": "problem-formel-text",
  "titel": "Formel wird als Text angezeigt",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Zelle zeigt =SUMME(...) statt eines Ergebnisses. Zellformat Text, führendes Apostroph oder Formeln-anzeigen-Modus.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Formel wird als Text angezeigt"
  ],
  "synonyme": [
    "Formel wird als Text angezeigt",
    "Die Zelle zeigt =SUMME(...) statt eines Ergebnisses."
  ],
  "verwandteThemen": [
    "excel-zahl-text",
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
    "https://support.microsoft.com/en-us/excel/functions/numbervalue-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Die Zelle zeigt =SUMME(...) statt eines Ergebnisses.

## Symptom

Die Zelle zeigt =SUMME(...) statt eines Ergebnisses.

## Mögliche Ursachen

Zellformat Text, führendes Apostroph oder Formeln-anzeigen-Modus.

## Schnelltest

Prüfe, ob alle Formeln sichtbar sind oder nur eine einzelne Zelle.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Prüfe, ob alle Formeln sichtbar sind oder nur eine einzelne Zelle.
3. Bei einzelnen Zellen Format auf Standard setzen, führendes Apostroph entfernen und mit F2 → Enter neu bestätigen. Bei allen Formeln Formeln → Formeln anzeigen ausschalten.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Zahlen als Text erkennen](#/wissen/excel-zahl-text). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Die Eingabe =1+1 muss danach 2 ergeben. |

### Aktion

Bei einzelnen Zellen Format auf Standard setzen, führendes Apostroph entfernen und mit F2 → Enter neu bestätigen. Bei allen Formeln Formeln → Formeln anzeigen ausschalten.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Nicht nur das Format ändern: Die vorhandene Texteingabe muss erneut interpretiert werden. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Nicht nur das Format ändern: Die vorhandene Texteingabe muss erneut interpretiert werden.

## Warum funktioniert das?

Die Trennzeichen werden ausdrücklich vorgegeben. Die Darstellung als Zahl allein würde den zugrunde liegenden Text nicht umwandeln.
