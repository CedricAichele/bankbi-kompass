---
{
  "id": "problem-export",
  "slug": "problem-export",
  "titel": "Ergebnis nach Export anders",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennungen, Datum oder Summe ändern sich in Excel. Importinterpretation, Rundung oder unvollständiger Export.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Ergebnis nach Export anders"
  ],
  "synonyme": [
    "Ergebnis nach Export anders",
    "Kennungen, Datum oder Summe ändern sich in Excel."
  ],
  "verwandteThemen": [
    "ida-excel-export",
    "ida-nullstellen",
    "excel-import"
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

Kennungen, Datum oder Summe ändern sich in Excel.

## Symptom

Kennungen, Datum oder Summe ändern sich in Excel.

## Mögliche Ursachen

Importinterpretation, Rundung oder unvollständiger Export.

## Schnelltest

Vergleiche Zeilenzahl, Kontrollsumme und eine Kennung mit führenden Nullen vor/nach Export.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Vergleiche Zeilenzahl, Kontrollsumme und eine Kennung mit führenden Nullen vor/nach Export.
3. Importiere CSV über Daten → Aus Text/CSV. Lege Typen und Gebietsschema ausdrücklich fest; prüfe Exportbegrenzungen anhand öffentlicher Werkzeugdokumentation.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

00123 wird bei automatischer Zahleninterpretation zu 123.

## Ergebnis

Kennung unverändert fünfstellig, Betrag numerisch und Summe identisch.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Kennung unverändert fünfstellig, Betrag numerisch und Summe identisch.
