---
{
  "id": "problem-zahl-text",
  "slug": "problem-zahl-text",
  "titel": "Zahl ist als Text gespeichert",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUMME ignoriert einen angezeigten Betrag. Import hat Zahlen als Text geliefert.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Zahl ist als Text gespeichert"
  ],
  "synonyme": [
    "Zahl ist als Text gespeichert",
    "SUMME ignoriert einen angezeigten Betrag."
  ],
  "verwandteThemen": [
    "excel-zahl-text",
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

SUMME ignoriert einen angezeigten Betrag.

## Symptom

SUMME ignoriert einen angezeigten Betrag.

## Mögliche Ursachen

Import hat Zahlen als Text geliefert.

## Schnelltest

Prüfe mit =ISTZAHL(A2). FALSCH weist auf Text hin.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Prüfe mit =ISTZAHL(A2). FALSCH weist auf Text hin.
3. Bei bekanntem Format Daten → Text in Spalten mit passender Interpretation oder Power Query mit Gebietsschema verwenden. Kennungen mit führenden Nullen bleiben ausdrücklich Text.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Text "1250" plus Zahl 750 wird bei SUMME eines Bereichs nicht wie zwei Zahlen behandelt.

## Ergebnis

Nach Konvertierung ISTZAHL = WAHR und Gesamtsumme = 2.000.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Nach Konvertierung ISTZAHL = WAHR und Gesamtsumme = 2.000.
