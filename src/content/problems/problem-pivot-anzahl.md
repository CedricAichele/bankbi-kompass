---
{
  "id": "problem-pivot-anzahl",
  "slug": "problem-pivot-anzahl",
  "titel": "Pivot zählt statt summiert",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "P001 zeigt 2 statt 2.000. Wertefeld steht auf Anzahl, oft wegen Textbeträgen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Pivot zählt statt summiert"
  ],
  "synonyme": [
    "Pivot zählt statt summiert",
    "P001 zeigt 2 statt 2.000."
  ],
  "verwandteThemen": [
    "pivottable",
    "pivot-summe-anzahl",
    "excel-zahl-text"
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

P001 zeigt 2 statt 2.000.

## Symptom

P001 zeigt 2 statt 2.000.

## Mögliche Ursachen

Wertefeld steht auf Anzahl, oft wegen Textbeträgen.

## Schnelltest

Prüfe ISTZAHL in der Quelle und öffne Wertfeldeinstellungen.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Prüfe ISTZAHL in der Quelle und öffne Wertfeldeinstellungen.
3. Korrigiere zuerst die Datentypen; aktualisiere die PivotTable. Wähle im Wertefeld Summe.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

P001 mit 1250 und 750 → Summe 2000, Anzahl 2.

## Ergebnis

Summe über alle Personen = 9.000.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Summe über alle Personen = 9.000.
