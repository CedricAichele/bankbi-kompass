---
{
  "id": "problem-pivot-alt",
  "slug": "problem-pivot-alt",
  "titel": "Pivot zeigt alte Daten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine PivotTable zeigt eine neue Quellzeile nicht. Prüfe zuerst den Quellumfang und danach die Aktualisierung.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Pivot zeigt alte Daten"
  ],
  "synonyme": [
    "Pivot zeigt alte Daten",
    "Änderung oder neue Quellzeile fehlt."
  ],
  "verwandteThemen": [
    "pivottable"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/refresh-pivottable-data"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

Eine PivotTable zeigt eine neue Quellzeile nicht. Prüfe zuerst den Quellumfang und danach die Aktualisierung.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Lege in einer Testkopie A1:B3 mit Konto/Bestand und K001/100, K002/200 an. Erstelle eine PivotTable mit Summe Bestand.
2. Ergänze K003/50 in Zeile 4 außerhalb des bisherigen festen Quellbereichs. Die Pivot zeigt weiterhin 300.
3. Prüfe PivotTable-Analyse → Datenquelle ändern: auf A1:B4 erweitern oder eine benannte Excel-Tabelle verwenden, die die neue Zeile einschließt.
4. Rechtsklick in die PivotTable → Aktualisieren. Prüfe 350; [PivotTable](#/wissen/pivottable) beschreibt den gesamten Aufbau.

## Beispiel

Vorher: Quelle A1:B3 enthält zwei Datenzeilen mit 100 und 200; Pivot-Summe **300**. Nach Ergänzung von K003/50 in A4:B4 bleibt die Pivot bei unverändertem Quellbereich **300**, auch nach Aktualisierung. Nach Erweiterung auf A1:B4 und erneuter Aktualisierung wird **350** erwartet.

## Ergebnis

Drei Quellzeilen werden berücksichtigt, Pivot-Summe 350 statt 300.

## Warum funktioniert das?

Eine Aktualisierung liest nur die definierte Quelle. Sie erweitert einen festen Zellbereich nicht automatisch.

## Typischer Fehler

Nur Aktualisieren klicken, ohne den zu kurzen Quellbereich zu ändern.

## Plausibilitätscheck

100 + 200 + 50 = 350. Die Differenz 50 entspricht genau der neuen Zeile; neue Zeilen innerhalb einer benannten Quelltabelle ergänzen.
