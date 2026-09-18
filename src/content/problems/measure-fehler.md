---
{
  "id": "measure-fehler",
  "slug": "measure-fehler",
  "titel": "Measure reagiert unerwartet",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche das Measure mit einer einfachen Basiskennzahl und prüfe den Kontext jeder Visualzelle.",
  "ort": "Power BI → Kontrollmatrix und DAX-Formel",
  "tags": [
    "Measure reagiert unerwartet",
    "Datenqualität"
  ],
  "synonyme": [
    "Measure liefert überall denselben Wert",
    "Jede Tabellenzeile zeigt die identische Gesamtsumme."
  ],
  "verwandteThemen": [
    "filterkontext",
    "divide",
    "distinctcount"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "problem",
  "quellen": [],
  "screenshots": []
}
---

## Wann brauche ich das?

Jede Tabellenzeile zeigt die identische Gesamtsumme.

## Symptom

Jede Tabellenzeile zeigt die identische Gesamtsumme.

## Mögliche Ursachen

Zeilenfeld filtert die Faktentabelle nicht oder Measure entfernt den Filter.

## Schnelltest

Ersetze das Measure testweise durch SUM(Konten[Bestand_EUR]).

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Ersetze das Measure testweise durch SUM(Konten[Bestand_EUR]).
3. Prüfe Beziehung und Filterrichtung; entferne zu breite ALL-/REMOVEFILTERS-Ausdrücke. Verwende das passende Dimensionsfeld in den Zeilen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

P001 und P003 zeigen beide 9.000 statt 2.000 und 4.000.

## Ergebnis

Die Summe muss auf beide Testpersonen unterschiedlich reagieren.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Die Summe muss auf beide Testpersonen unterschiedlich reagieren.
