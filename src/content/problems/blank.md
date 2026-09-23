---
{
  "id": "blank",
  "slug": "blank",
  "titel": "BLANK: Warum bleibt die Kennzahl leer?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler & Plausibilitätsprüfung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "BLANK kann fehlende Daten oder ein bewusst nicht berechenbares Ergebnis bedeuten.",
  "ort": "Power BI → Measure und Filterbereich",
  "tags": [
    "BLANK: Warum bleibt die Kennzahl leer?",
    "Reporting"
  ],
  "synonyme": [
    "BLANK statt 0",
    "Eine Karte bleibt leer."
  ],
  "verwandteThemen": [
    "filterkontext",
    "countrows",
    "divide"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/blank-function-dax",
    "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
    "https://learn.microsoft.com/en-us/dax/coalesce-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Karte bleibt leer.

## Symptom

Eine Karte bleibt leer.

## Mögliche Ursachen

Keine passenden Daten, fehlende Zuordnung oder Nenner null.

## Schnelltest

Zeige zunächst COUNTROWS und das Basismeasure unter demselben Filter.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zeige zunächst COUNTROWS und das Basismeasure unter demselben Filter.
3. Behebe fehlende Daten oder Filter zuerst. Verwende COALESCE([Measure], 0) nur, wenn fehlend fachlich wirklich als null angezeigt werden darf.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Wie Filter die Kennzahl beeinflussen, erklärt [Filterkontext](#/wissen/filterkontext). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Keine Daten für P999: leer. Das beweist keinen gemessenen Bestand von 0. |

### Aktion

Behebe fehlende Daten oder Filter zuerst. Verwende COALESCE([Measure], 0) nur, wenn fehlend fachlich wirklich als null angezeigt werden darf.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Unterscheide Testfall mit echter 0 von einem Testfall ohne Datensatz. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Unterscheide Testfall mit echter 0 von einem Testfall ohne Datensatz.

## Warum funktioniert das?

DAX verwendet BLANK für fehlende Werte und leere Berechnungsergebnisse. Eine echte 0 kann einen gemessenen Wert ausdrücken; BLANK belegt ihn nicht. COUNTROWS liefert bei einer leeren Tabelle ebenfalls BLANK. COALESCE ändert die Anzeige, behebt aber keine fehlenden Quelldaten.
