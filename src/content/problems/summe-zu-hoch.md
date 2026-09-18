---
{
  "id": "summe-zu-hoch",
  "slug": "summe-zu-hoch",
  "titel": "Falsche Summe prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe zuerst Zeilenebene, Mehrfachtreffer und Stichtage, bevor du die Formel änderst.",
  "ort": "Power Query und Power BI → kleine Kontrolltabelle",
  "tags": [
    "Falsche Summe prüfen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "falsche summe",
    "Bestand addieren",
    "Summe ist zu hoch",
    "Die Summe ist höher als in der Quelle.",
    "summe stimmt nicht"
  ],
  "verwandteThemen": [
    "granularitaet",
    "eins-zu-viele",
    "dubletten",
    "filterkontext",
    "ida-aggregation"
  ],
  "kontexte": [
    "Bestandsanalyse",
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

Die Summe ist höher als in der Quelle.

## Symptom

Die Summe ist höher als in der Quelle.

## Mögliche Ursachen

Mehrere Stichtage oder durch einen Merge vervielfachte Kontenzeilen.

## Schnelltest

Zeige Kontonummer, Stichtag und Betrag in einer Tabelle; zähle Zeilen pro Kombination.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zeige Kontonummer, Stichtag und Betrag in einer Tabelle; zähle Zeilen pro Kombination.
3. Filtere zuerst einen Stichtag. Vergleiche anschließend Zeilenzahl und Summe vor und nach dem letzten Merge. Korrigiere dessen Schlüssel oder rechte Granularität.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

K001 steht am gleichen Stichtag zweimal mit 120: angezeigt 240, fachlich erwartet 120.

## Ergebnis

Ein Konto je Stichtag und dieselbe Kontrollsumme wie vor dem Merge.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Ein Konto je Stichtag und dieselbe Kontrollsumme wie vor dem Merge.
