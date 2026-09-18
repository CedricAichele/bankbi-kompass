---
{
  "id": "problem-null",
  "slug": "problem-null",
  "titel": "NULL verhält sich unerwartet",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten. Fehlend wird mit 0 oder leerem Text gleichgesetzt.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "NULL verhält sich unerwartet"
  ],
  "synonyme": [
    "NULL verhält sich unerwartet",
    "Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten."
  ],
  "verwandteThemen": [
    "nullwerte",
    "ida-null",
    "blank"
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

Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten.

## Symptom

Leere Werte verschwinden aus Vergleichen oder verfälschen Quoten.

## Mögliche Ursachen

Fehlend wird mit 0 oder leerem Text gleichgesetzt.

## Schnelltest

Erstelle drei Testfälle: fehlend, echte 0, befüllter Wert. Prüfe Filter und Aggregation getrennt.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Erstelle drei Testfälle: fehlend, echte 0, befüllter Wert. Prüfe Filter und Aggregation getrennt.
3. Definiere die Bedeutung fehlender Werte. Verwende die werkzeugspezifische NULL-/BLANK-Prüfung und ersetze nur nach dokumentierter fachlicher Regel.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

0 Abschlüsse bei 10 Vorgängen ist eine gemessene Quote von 0 %; fehlende Abschlussdaten sind keine gemessenen 0 %.

## Ergebnis

Fehlwertanzahl separat ausweisen, damit Ersetzungen sichtbar bleiben.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Fehlwertanzahl separat ausweisen, damit Ersetzungen sichtbar bleiben.
