---
{
  "id": "problem-xverweis-falsch",
  "slug": "problem-xverweis-falsch",
  "titel": "XVERWEIS liefert falschen Datensatz",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung. Schlüssel doppelt oder Such- und Ergebnisbereiche gegeneinander verschoben.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "XVERWEIS liefert falschen Datensatz"
  ],
  "synonyme": [
    "XVERWEIS liefert falschen Datensatz",
    "Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung."
  ],
  "verwandteThemen": [
    "xverweis",
    "excel-mehrere-kriterien",
    "excel-filtern"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/xlookup-function"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung.

## Symptom

Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung.

## Mögliche Ursachen

Schlüssel doppelt oder Such- und Ergebnisbereiche gegeneinander verschoben.

## Schnelltest

Zähle den Schlüssel mit ZÄHLENWENN und markiere die beiden Formelbereiche.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zähle den Schlüssel mit ZÄHLENWENN und markiere die beiden Formelbereiche.
3. Korrigiere Bereichsgrenzen. Verwende bei echten Mehrfachtreffern FILTER oder ergänze ein fachlich erforderliches Kriterium.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [XVERWEIS](#/wissen/xverweis). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| K003 zweimal mit 2.000 und 2.100: der erste Treffer löst den Konflikt nicht. |

### Aktion

Korrigiere Bereichsgrenzen. Verwende bei echten Mehrfachtreffern FILTER oder ergänze ein fachlich erforderliches Kriterium.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Suchschlüssel genau einmal oder vollständige Mehrfachausgabe explizit erwartet. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Suchschlüssel genau einmal oder vollständige Mehrfachausgabe explizit erwartet.

## Warum funktioniert das?

Excel ermittelt die Position des passenden Kontos und übernimmt den Betrag derselben Position aus der Rückgabematrix. Standardmäßig wird der erste Treffer geliefert.
