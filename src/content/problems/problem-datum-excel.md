---
{
  "id": "problem-datum-excel",
  "slug": "problem-datum-excel",
  "titel": "Datum wird nicht erkannt",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Datumsfilter oder zeitliche Sortierung funktionieren nicht. Datumszeichenfolge wurde als Text oder mit falschem Gebietsschema interpretiert.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Datum wird nicht erkannt"
  ],
  "synonyme": [
    "Datum wird nicht erkannt",
    "Datumsfilter oder zeitliche Sortierung funktionieren nicht."
  ],
  "verwandteThemen": [
    "excel-datum",
    "datenbereinigung"
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

Datumsfilter oder zeitliche Sortierung funktionieren nicht.

## Symptom

Datumsfilter oder zeitliche Sortierung funktionieren nicht.

## Mögliche Ursachen

Datumszeichenfolge wurde als Text oder mit falschem Gebietsschema interpretiert.

## Schnelltest

Prüfe ISTZAHL; formatiere eine Kopie als Zahl und vergleiche Tag und Monat.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Prüfe ISTZAHL; formatiere eine Kopie als Zahl und vergleiche Tag und Monat.
3. Importiere über Power Query mit explizitem Datentyp Datum und richtigem Gebietsschema. Bei mehrdeutigen Daten die Quelle klären.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

03/04/2026 kann je Kultur 3. April oder 4. März bedeuten.

## Ergebnis

Teste einen eindeutigen Tag wie 31.03.2026 und den mehrdeutigen Wert.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Teste einen eindeutigen Tag wie 31.03.2026 und den mehrdeutigen Wert.
