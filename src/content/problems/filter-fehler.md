---
{
  "id": "filter-fehler",
  "slug": "filter-fehler",
  "titel": "Filter funktioniert nicht",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
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
  "zuletztGeprueft": "2026-09-18",
  "art": "problem",
  "quellen": [],
  "screenshots": []
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

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Teste eine einfache SUM neben dem ursprünglichen Measure und verwende denselben Slicer.
3. Reagiert SUM nicht, prüfe in der Modellansicht den aktiven Filterpfad. Reagiert nur das ursprüngliche Measure nicht, suche darin ALL oder REMOVEFILTERS auf den betroffenen Spalten.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Personen-Slicer P003 soll die sechs Konten auf zwei Konten mit 4.000 reduzieren.

## Ergebnis

Teste P001 = 2.000 und P003 = 4.000; entfernte Auswahl = 9.000.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Teste P001 = 2.000 und P003 = 4.000; entfernte Auswahl = 9.000.
