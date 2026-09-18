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
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "problem",
  "quellen": [],
  "screenshots": []
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

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Stelle Monatsname und Monatsnummer nebeneinander; jede Bezeichnung muss genau einer Nummer entsprechen.
3. Wähle Monatsname in der Datenansicht → Spaltentools → Nach Spalte sortieren → Monatsnummer. Für mehrere Jahre zusätzlich Jahr verwenden oder JahrMonat mit einem eindeutigen numerischen Sortierschlüssel.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Januar → 1, Februar → 2, März → 3. 2026-01 wird nach 2025-12 einsortiert.

## Ergebnis

Prüfe Dezember/Januar am Jahreswechsel.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Prüfe Dezember/Januar am Jahreswechsel.
