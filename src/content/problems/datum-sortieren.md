---
{
  "id": "datum-sortieren",
  "slug": "datum-sortieren",
  "titel": "Datum / Monat falsch sortiert",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Datentyp und Sortierspalte bestimmen die Reihenfolge; Monatsnamen allein reichen nicht.",
  "ort": "Power BI → Monatsnamenspalte → Spaltentools → Nach Spalte sortieren",
  "tags": [
    "Datum / Monat falsch sortiert",
    "Reporting"
  ],
  "synonyme": [
    "Datum wird alphabetisch sortiert",
    "April steht vor Februar oder Monatsnamen laufen über Jahre durcheinander.",
    "datum falsch"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "datenbereinigung",
    "dax-jahr-monat"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/year-function-dax",
    "https://learn.microsoft.com/en-us/dax/month-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

April steht vor Februar oder Monatsnamen laufen über Jahre durcheinander.

## Symptom

April steht vor Februar oder Monatsnamen laufen über Jahre durcheinander.

## Mögliche Ursachen

Textmonat ohne Sortierspalte oder Jahr nicht berücksichtigt.

## Schnelltest

Stelle Monatsname und Monatsnummer nebeneinander; jede Bezeichnung muss genau einer Nummer entsprechen.

## Schritte

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Stelle Monatsname und Monatsnummer nebeneinander; jede Bezeichnung muss genau einer Nummer entsprechen.
3. Wähle Monatsname in der Datenansicht → Spaltentools → Nach Spalte sortieren → Monatsnummer. Für mehrere Jahre zusätzlich Jahr verwenden oder JahrMonat mit einem eindeutigen numerischen Sortierschlüssel.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [YEAR und MONTH: Kalenderattribute](#/wissen/dax-jahr-monat). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Januar → 1, Februar → 2, März → 3. 2026-01 wird nach 2025-12 einsortiert. |

### Aktion

Wähle Monatsname in der Datenansicht → Spaltentools → Nach Spalte sortieren → Monatsnummer. Für mehrere Jahre zusätzlich Jahr verwenden oder JahrMonat mit einem eindeutigen numerischen Sortierschlüssel.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Prüfe Dezember/Januar am Jahreswechsel. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Prüfe Dezember/Januar am Jahreswechsel.

## Warum funktioniert das?

Jahr × 100 + Monat hält Jahr und Monat in chronologischer Reihenfolge. Ein Monatsname allein unterscheidet keine Jahre.
