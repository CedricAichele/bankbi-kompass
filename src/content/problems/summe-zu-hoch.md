---
{
  "id": "summe-zu-hoch",
  "slug": "summe-zu-hoch",
  "titel": "Falsche Summe prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe zuerst Zeilenebene, Mehrfachtreffer und Stichtage, bevor du die Formel änderst.",
  "ort": "Power Query und Power BI → kleine Kontrolltabelle",
  "tags": [
    "Falsche Summe prüfen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "falsche summe",
    "Bestand addieren",
    "Summe ist zu hoch",
    "Die Summe ist höher als in der Quelle.",
    "summe stimmt nicht"
  ],
  "verwandteThemen": [
    "granularitaet",
    "eins-zu-viele",
    "dubletten",
    "filterkontext",
    "ida-aggregation",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Die Summe ist höher als in der Quelle.

## Symptom

Die Summe ist höher als in der Quelle.

## Mögliche Ursachen

Mehrere Stichtage oder durch einen Merge vervielfachte Kontenzeilen.

## Schnelltest

Zeige Kontonummer, Stichtag und Betrag in einer Tabelle; zähle Zeilen pro Kombination.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zeige Kontonummer, Stichtag und Betrag in einer Tabelle; zähle Zeilen pro Kombination.
3. Filtere zuerst einen Stichtag. Vergleiche anschließend Zeilenzahl und Summe vor und nach dem letzten Merge. Korrigiere dessen Schlüssel oder rechte Granularität.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Tabellen zusammenführen](#/wissen/zusammenfuehren). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| K001 steht am gleichen Stichtag zweimal mit 120: angezeigt 240, fachlich erwartet 120. |

### Aktion

Filtere zuerst einen Stichtag. Vergleiche anschließend Zeilenzahl und Summe vor und nach dem letzten Merge. Korrigiere dessen Schlüssel oder rechte Granularität.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Ein Konto je Stichtag und dieselbe Kontrollsumme wie vor dem Merge. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Ein Konto je Stichtag und dieselbe Kontrollsumme wie vor dem Merge.

## Warum funktioniert das?

Ein Join findet alle passenden Zeilen, nicht automatisch genau eine. Zwei Kundentreffer würden jede betroffene Kontenzeile beim Erweitern verdoppeln. Die Join-Art bestimmt zusätzlich, welche nicht passenden Zeilen erhalten bleiben.
