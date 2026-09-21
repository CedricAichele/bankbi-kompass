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
  "quellen": [
    "https://support.microsoft.com/en-us/excel/refresh-pivottable-data"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
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

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Ändere einen bestehenden Betrag kontrolliert und aktualisiere. Prüfe danach eine neu angefügte Zeile.
3. Rechtsklick → Aktualisieren; unter Datenquelle ändern den Bereich prüfen. Für wachsende Daten eine Excel-Tabelle als Quelle nutzen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [PivotTable aktualisieren](#/wissen/pivot-aktualisieren). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Neue K007-Zeile außerhalb A1:D7 fehlt bei unverändertem festen Bereich. |

### Aktion

Rechtsklick → Aktualisieren; unter Datenquelle ändern den Bereich prüfen. Für wachsende Daten eine Excel-Tabelle als Quelle nutzen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Zeilenzahl und Summe nach Aktualisierung gegen die erweiterte Quelle vergleichen. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Zeilenzahl und Summe nach Aktualisierung gegen die erweiterte Quelle vergleichen.

## Warum funktioniert das?

Nach Änderungen an Quelldaten muss die Pivot-Auswertung aktualisiert werden. Eine benannte Tabelle erleichtert das Mitwachsen.
