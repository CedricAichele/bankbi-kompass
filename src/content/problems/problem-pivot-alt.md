---
{
  "id": "problem-pivot-alt",
  "slug": "problem-pivot-alt",
  "titel": "Pivot zeigt alte Daten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Änderung oder neue Quellzeile fehlt. Cache nicht aktualisiert oder Quellbereich endet zu früh.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Pivot zeigt alte Daten"
  ],
  "synonyme": [
    "Pivot zeigt alte Daten",
    "Änderung oder neue Quellzeile fehlt."
  ],
  "verwandteThemen": [
    "pivottable",
    "pivot-aktualisieren"
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

Änderung oder neue Quellzeile fehlt.

## Symptom

Änderung oder neue Quellzeile fehlt.

## Mögliche Ursachen

Cache nicht aktualisiert oder Quellbereich endet zu früh.

## Schnelltest

Ändere einen bestehenden Betrag kontrolliert und aktualisiere. Prüfe danach eine neu angefügte Zeile.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Ändere einen bestehenden Betrag kontrolliert und aktualisiere. Prüfe danach eine neu angefügte Zeile.
3. Rechtsklick → Aktualisieren; unter Datenquelle ändern den Bereich prüfen. Für wachsende Daten eine Excel-Tabelle als Quelle nutzen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Neue K007-Zeile außerhalb A1:D7 fehlt bei unverändertem festen Bereich.

## Ergebnis

Zeilenzahl und Summe nach Aktualisierung gegen die erweiterte Quelle vergleichen.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Zeilenzahl und Summe nach Aktualisierung gegen die erweiterte Quelle vergleichen.
