---
{
  "id": "problem-summewenns",
  "slug": "problem-summewenns",
  "titel": "SUMMEWENNS stimmt nicht",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Summe bleibt 0 oder ist unerwartet hoch. Kriterien greifen nicht, Beträge sind Text oder Zeitkriterium fehlt.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "SUMMEWENNS stimmt nicht"
  ],
  "synonyme": [
    "SUMMEWENNS stimmt nicht",
    "Summe bleibt 0 oder ist unerwartet hoch."
  ],
  "verwandteThemen": [
    "summewenns",
    "zaehlenwenns",
    "stichtag"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
}
---

## Wann brauche ich das?

Summe bleibt 0 oder ist unerwartet hoch.

## Symptom

Summe bleibt 0 oder ist unerwartet hoch.

## Mögliche Ursachen

Kriterien greifen nicht, Beträge sind Text oder Zeitkriterium fehlt.

## Schnelltest

Prüfe zuerst ZÄHLENWENNS mit identischen Kriterien. Zeige die passenden Zeilen mit Filter an.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Prüfe zuerst ZÄHLENWENNS mit identischen Kriterien. Zeige die passenden Zeilen mit Filter an.
3. Gleiche Bereichsgrößen, Kriterien und Datentypen ab. Nutze bei mehreren Stichtagen ein zusätzliches Datumskriterium.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

P001 hat 1.250 und 750 am selben Stichtag → 2.000; bei zwei Stichtagen dürfen nicht beide Bestände einfließen.

## Ergebnis

Trefferzahl 2 und Summe 2.000 gemeinsam plausibilisieren.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Trefferzahl 2 und Summe 2.000 gemeinsam plausibilisieren.
