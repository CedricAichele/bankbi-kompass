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
  "zuletztGeprueft": "2026-09-18",
  "art": "problem",
  "quellen": [],
  "screenshots": []
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

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zeige den Bestand getrennt nach Stichtag.
3. Wähle einen fachlich vollständigen Stichtag oder definiere ein ausdrücklich gewünschtes Durchschnittsmaß. Kein YTD über Monatsbestände.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Januar 100, Februar 104, März 101: Märzbestand 101; Summe 305 ist kein aktueller Bestand.

## Ergebnis

Ergebnis gegen genau die Quelle des gewählten Stichtags prüfen.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Ergebnis gegen genau die Quelle des gewählten Stichtags prüfen.
