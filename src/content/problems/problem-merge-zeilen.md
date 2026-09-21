---
{
  "id": "problem-merge-zeilen",
  "slug": "problem-merge-zeilen",
  "titel": "Mehr Zeilen nach Merge",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl. Mehrere rechte Treffer je Join-Schlüssel.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Mehr Zeilen nach Merge"
  ],
  "synonyme": [
    "Mehr Zeilen nach Merge",
    "Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl.",
    "mehr zeilen nach join"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "ida-join-pruefen",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl.

## Symptom

Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl.

## Mögliche Ursachen

Mehrere rechte Treffer je Join-Schlüssel.

## Schnelltest

Gruppiere die rechte Tabelle nach Join-Schlüssel mit Zeilenanzahl. Filtere Anzahl größer 1.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Gruppiere die rechte Tabelle nach Join-Schlüssel mit Zeilenanzahl. Filtere Anzahl größer 1.
3. Kläre fehlende Join-Bestandteile wie Stichtag. Verdichte rechts nur, wenn die fachliche Zielzuordnung dadurch eindeutig wird.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Tabellen zusammenführen](#/wissen/zusammenfuehren). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Links K001/P001/120; rechts P001/A und P001/B → zwei Zeilen, Summe 240. |

### Aktion

Kläre fehlende Join-Bestandteile wie Stichtag. Verdichte rechts nur, wenn die fachliche Zielzuordnung dadurch eindeutig wird.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Bei reiner Anreicherung müssen Zeilenzahl und Bestandssumme konstant bleiben. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Bei reiner Anreicherung müssen Zeilenzahl und Bestandssumme konstant bleiben.

## Warum funktioniert das?

Ein Join findet alle passenden Zeilen, nicht automatisch genau eine. Zwei Kundentreffer würden jede betroffene Kontenzeile beim Erweitern verdoppeln. Die Join-Art bestimmt zusätzlich, welche nicht passenden Zeilen erhalten bleiben.
