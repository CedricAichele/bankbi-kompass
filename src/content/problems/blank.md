---
{
  "id": "blank",
  "slug": "blank",
  "titel": "BLANK: Warum bleibt die Kennzahl leer?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
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
    "divide",
    "selectedvalue",
    "filterkontext"
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

Eine Karte bleibt leer.

## Symptom

Eine Karte bleibt leer.

## Mögliche Ursachen

Keine passenden Daten, fehlende Zuordnung oder Nenner null.

## Schnelltest

Zeige zunächst COUNTROWS und das Basismeasure unter demselben Filter.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zeige zunächst COUNTROWS und das Basismeasure unter demselben Filter.
3. Behebe fehlende Daten oder Filter zuerst. Verwende COALESCE([Measure], 0) nur, wenn fehlend fachlich wirklich als null angezeigt werden darf.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Keine Daten für P999: leer. Das beweist keinen gemessenen Bestand von 0.

## Ergebnis

Unterscheide Testfall mit echter 0 von einem Testfall ohne Datensatz.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Unterscheide Testfall mit echter 0 von einem Testfall ohne Datensatz.
