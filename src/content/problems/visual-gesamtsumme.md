---
{
  "id": "visual-gesamtsumme",
  "slug": "visual-gesamtsumme",
  "titel": "Warum die Gesamtsumme anders ausfällt",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler & Plausibilitätsprüfung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Measure wird in der Gesamtzeile im gesamten Filterkontext neu berechnet. Das ist nicht automatisch die Summe sichtbarer Zeilen.",
  "ort": "Power BI → Kontrolltabelle mit Stichtag, Schlüssel und Measure",
  "tags": [
    "Warum die Gesamtsumme anders ausfällt"
  ],
  "synonyme": [
    "visual falsche gesamtsumme",
    "Gesamtsumme einer Quote wirkt falsch",
    "Gesamtquote entspricht nicht der Summe oder dem Mittel der Zeilenquoten."
  ],
  "verwandteThemen": [
    "divide",
    "filterkontext",
    "sumx"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/divide-function-dax",
    "https://learn.microsoft.com/en-us/dax/dax-overview#context"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Gesamtquote entspricht nicht der Summe oder dem Mittel der Zeilenquoten.

## Symptom

Gesamtquote entspricht nicht der Summe oder dem Mittel der Zeilenquoten.

## Mögliche Ursachen

Measures werden in der Gesamtzeile neu ausgewertet; unterschiedliche Nenner erfordern Gewichtung.

## Schnelltest

Zeige Zähler und Nenner neben jeder Quote und bilde deren Summen.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zeige Zähler und Nenner neben jeder Quote und bilde deren Summen.
3. Berechne die Gesamtquote als Gesamtergebnis geteilt durch Gesamtbasis. SUMX nur verwenden, wenn die fachliche Kennzahl tatsächlich additiv über diese Zeilen sein soll.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [DIVIDE: Quote berechnen](#/wissen/divide). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| A: 1/2 = 50 %, B: 9/10 = 90 %. Gesamt: 10/12 = 83,33 %, nicht 70 % oder 140 %. |

### Aktion

Berechne die Gesamtquote als Gesamtergebnis geteilt durch Gesamtbasis. SUMX nur verwenden, wenn die fachliche Kennzahl tatsächlich additiv über diese Zeilen sein soll.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Zähler 10 und Nenner 12 müssen in der Gesamtzeile separat sichtbar sein. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Zähler 10 und Nenner 12 müssen in der Gesamtzeile separat sichtbar sein.

## Warum funktioniert das?

Die Gesamtquote gewichtet nach den Fallzahlen. Ein einfacher Mittelwert der Gruppenquoten würde kleinen und großen Gruppen dasselbe Gewicht geben.
