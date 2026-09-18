---
{
  "id": "problem-filter-kalk",
  "slug": "problem-filter-kalk",
  "titel": "FILTER liefert #KALK!",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine FILTER-Formel scheitert bei leerer Auswahl. Kein Treffer und kein Ersatzwert für eine leere Ergebnismenge.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "FILTER liefert #KALK!"
  ],
  "synonyme": [
    "FILTER liefert #KALK!",
    "Eine FILTER-Formel scheitert bei leerer Auswahl."
  ],
  "verwandteThemen": [
    "excel-filtern",
    "excel-fehler"
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

Eine FILTER-Formel scheitert bei leerer Auswahl.

## Symptom

Eine FILTER-Formel scheitert bei leerer Auswahl.

## Mögliche Ursachen

Kein Treffer und kein Ersatzwert für eine leere Ergebnismenge.

## Schnelltest

Teste dieselbe Formel mit einem sicher vorhandenen und einem fehlenden Schlüssel.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Teste dieselbe Formel mit einem sicher vorhandenen und einem fehlenden Schlüssel.
3. Ergänze das dritte Argument, beispielsweise "Keine Treffer". Bei #ÜBERLAUF! stattdessen blockierende Zellen unter/neben der Ausgabe prüfen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

FILTER(A2:D7;B2:B7="P999";"Keine Treffer") liefert den Ersatztext.

## Ergebnis

P001 muss weiterhin zwei Zeilen liefern; P999 den Ersatztext.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

P001 muss weiterhin zwei Zeilen liefern; P999 den Ersatztext.
