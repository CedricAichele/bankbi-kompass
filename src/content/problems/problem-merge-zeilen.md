---
{
  "id": "problem-merge-zeilen",
  "slug": "problem-merge-zeilen",
  "titel": "Mehr Zeilen nach Merge",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl. Mehrere rechte Treffer je Join-Schlüssel.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Mehr Zeilen nach Merge"
  ],
  "synonyme": [
    "Mehr Zeilen nach Merge",
    "Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl.",
    "mehr zeilen nach join"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "ida-join-pruefen",
    "granularitaet"
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

Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl.

## Symptom

Nach Erweiterung einer Tabellenspalte steigt die Zeilenzahl.

## Mögliche Ursachen

Mehrere rechte Treffer je Join-Schlüssel.

## Schnelltest

Gruppiere die rechte Tabelle nach Join-Schlüssel mit Zeilenanzahl. Filtere Anzahl größer 1.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Gruppiere die rechte Tabelle nach Join-Schlüssel mit Zeilenanzahl. Filtere Anzahl größer 1.
3. Kläre fehlende Join-Bestandteile wie Stichtag. Verdichte rechts nur, wenn die fachliche Zielzuordnung dadurch eindeutig wird.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Links K001/P001/120; rechts P001/A und P001/B → zwei Zeilen, Summe 240.

## Ergebnis

Bei reiner Anreicherung müssen Zeilenzahl und Bestandssumme konstant bleiben.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Bei reiner Anreicherung müssen Zeilenzahl und Bestandssumme konstant bleiben.
