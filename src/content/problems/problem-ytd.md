---
{
  "id": "problem-ytd",
  "slug": "problem-ytd",
  "titel": "YTD liefert falsche Werte",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Jahreskumulation startet falsch oder entspricht nur dem Monat. Faktendatum statt Kalendertag gefiltert; Geschäftsjahr falsch; Bestandskennzahl.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "YTD liefert falsche Werte"
  ],
  "synonyme": [
    "YTD liefert falsche Werte",
    "Die Jahreskumulation startet falsch oder entspricht nur dem Monat."
  ],
  "verwandteThemen": [
    "ytd",
    "datumstabelle",
    "bestand-bewegung"
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

Die Jahreskumulation startet falsch oder entspricht nur dem Monat.

## Symptom

Die Jahreskumulation startet falsch oder entspricht nur dem Monat.

## Mögliche Ursachen

Faktendatum statt Kalendertag gefiltert; Geschäftsjahr falsch; Bestandskennzahl.

## Schnelltest

Teste Januar allein und Januar bis Februar mit einer bekannten Bewegungsreihe.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Teste Januar allein und Januar bis Februar mit einer bekannten Bewegungsreihe.
3. Nutze einen vollständigen Kalender und dessen Felder für Slicer. Prüfe aktive Datumsbeziehung und die gewählte Jahresdefinition.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Januar 10, Februar 15: YTD Februar = 25.

## Ergebnis

Vergleiche jeden Monatswert mit der fortlaufenden Handsumme.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Vergleiche jeden Monatswert mit der fortlaufenden Handsumme.
