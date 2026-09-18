---
{
  "id": "problem-granularitaet",
  "slug": "problem-granularitaet",
  "titel": "Aggregation auf falscher Ebene",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Plan oder Quote vervielfacht sich mit der Anzahl von Details. Monatsplan mit Einzelkonten verbunden und wiederholt summiert.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Aggregation auf falscher Ebene"
  ],
  "synonyme": [
    "Aggregation auf falscher Ebene",
    "Plan oder Quote vervielfacht sich mit der Anzahl von Details."
  ],
  "verwandteThemen": [
    "plan-ist",
    "star-schema",
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

Plan oder Quote vervielfacht sich mit der Anzahl von Details.

## Symptom

Plan oder Quote vervielfacht sich mit der Anzahl von Details.

## Mögliche Ursachen

Monatsplan mit Einzelkonten verbunden und wiederholt summiert.

## Schnelltest

Zähle pro Monat, wie oft derselbe Planwert im Ergebnis steht.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zähle pro Monat, wie oft derselbe Planwert im Ergebnis steht.
3. Aggregiere Ist zuerst auf die Planebene oder verwende getrennte Fakten mit gemeinsamen Dimensionen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Monatsplan 100 und drei Kontenzeilen erzeugen nach einem flachen Join dreimal 100. Der Plan bleibt fachlich 100.

## Ergebnis

Plan je Monat genau einmal; Ist weiterhin vollständig.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Plan je Monat genau einmal; Ist weiterhin vollständig.
