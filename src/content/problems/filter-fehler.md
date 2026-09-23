---
{
  "id": "filter-fehler",
  "slug": "filter-fehler",
  "titel": "Filter funktioniert nicht",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler & Plausibilitätsprüfung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter braucht einen wirksamen Modellweg und die vorgesehene Visualinteraktion.",
  "ort": "Power BI → Modellansicht, Filterbereich, Interaktionen",
  "tags": [
    "Filter funktioniert nicht",
    "Datenqualität"
  ],
  "synonyme": [
    "Filter funktioniert nicht",
    "Ein Slicer verändert den erwarteten Betrag nicht."
  ],
  "verwandteThemen": [
    "beziehungen",
    "filterrichtung",
    "visualinteraktionen",
    "calculate"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-bidirectional-filtering"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Slicer verändert den erwarteten Betrag nicht.

## Symptom

Ein Slicer verändert den erwarteten Betrag nicht.

## Mögliche Ursachen

Unverbundene Tabelle, inaktive Beziehung oder aufgehobener Filter im Measure.

## Schnelltest

Teste eine einfache SUM neben dem ursprünglichen Measure und verwende denselben Slicer.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Teste eine einfache SUM neben dem ursprünglichen Measure und verwende denselben Slicer.
3. Reagiert SUM nicht, prüfe in der Modellansicht den aktiven Filterpfad. Reagiert nur das ursprüngliche Measure nicht, suche darin ALL oder REMOVEFILTERS auf den betroffenen Spalten.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Filterrichtung verstehen](#/wissen/filterrichtung). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Personen-Slicer P003 soll die sechs Konten auf zwei Konten mit 4.000 reduzieren. |

### Aktion

Reagiert SUM nicht, prüfe in der Modellansicht den aktiven Filterpfad. Reagiert nur das ursprüngliche Measure nicht, suche darin ALL oder REMOVEFILTERS auf den betroffenen Spalten.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Teste P001 = 2.000 und P003 = 4.000; entfernte Auswahl = 9.000. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Teste P001 = 2.000 und P003 = 4.000; entfernte Auswahl = 9.000.

## Warum funktioniert das?

Ein gerichteter Filterpfad macht Ergebnisse vorhersehbar. Bidirektionale Beziehungen können weitere Tabellen unerwartet einschränken oder mehrere konkurrierende Wege schaffen; mehr Richtungen bedeuten deshalb nicht automatisch bessere Auswertungen.
