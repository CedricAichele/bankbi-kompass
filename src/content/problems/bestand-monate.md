---
{
  "id": "bestand-monate",
  "slug": "bestand-monate",
  "titel": "Bestand wird über Monate aufsummiert",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Filtere auf einen fachlich festgelegten Stichtag, bevor du Bestände addierst.",
  "ort": "Power BI → Kontrolltabelle mit Stichtag, Schlüssel und Measure",
  "tags": [
    "Bestand wird über Monate aufsummiert"
  ],
  "synonyme": [
    "bestand wird aufsummiert",
    "Stichtage wurden addiert",
    "Bestand erscheint mit der Zahl ausgewählter Monate vervielfacht."
  ],
  "verwandteThemen": [
    "aktueller-stichtag",
    "bestand-bewegung",
    "summe-zu-hoch"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Bestand erscheint mit der Zahl ausgewählter Monate vervielfacht.

## Symptom

Bestand erscheint mit der Zahl ausgewählter Monate vervielfacht.

## Mögliche Ursachen

Eine Zustandsgröße wurde über die Zeit summiert.

## Schnelltest

Zeige den Bestand getrennt nach Stichtag.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zeige den Bestand getrennt nach Stichtag.
3. Wähle einen fachlich vollständigen Stichtag oder definiere ein ausdrücklich gewünschtes Durchschnittsmaß. Kein YTD über Monatsbestände.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Bestandskennzahl oder Bewegungskennzahl?](#/wissen/bestand-bewegung). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Januar 100, Februar 104, März 101: Märzbestand 101; Summe 305 ist kein aktueller Bestand. |

### Aktion

Wähle einen fachlich vollständigen Stichtag oder definiere ein ausdrücklich gewünschtes Durchschnittsmaß. Kein YTD über Monatsbestände.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Ergebnis gegen genau die Quelle des gewählten Stichtags prüfen. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Ergebnis gegen genau die Quelle des gewählten Stichtags prüfen.

## Warum funktioniert das?

Eine Bewegung beschreibt Veränderung im Intervall. Ein Bestand beschreibt einen Zustand und darf über verschiedene Tage nicht als Vermögenszuwachs summiert werden.
