---
{
  "id": "problem-xverweis-fehlt",
  "slug": "problem-xverweis-fehlt",
  "titel": "XVERWEIS findet Wert nicht",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Fehlt oder #NV trotz scheinbar vorhandener Kennung. Text/Zahl unterschiedlich oder unsichtbare Leerzeichen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "XVERWEIS findet Wert nicht"
  ],
  "synonyme": [
    "XVERWEIS findet Wert nicht",
    "Fehlt oder #NV trotz scheinbar vorhandener Kennung."
  ],
  "verwandteThemen": [
    "xverweis",
    "glaetten",
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

Fehlt oder #NV trotz scheinbar vorhandener Kennung.

## Symptom

Fehlt oder #NV trotz scheinbar vorhandener Kennung.

## Mögliche Ursachen

Text/Zahl unterschiedlich oder unsichtbare Leerzeichen.

## Schnelltest

Vergleiche die beiden Zellen direkt mit =A2=F2 sowie deren LÄNGE.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Vergleiche die beiden Zellen direkt mit =A2=F2 sowie deren LÄNGE.
3. Vereinheitliche den Schlüsseltyp an der Quelle. Entferne unerwünschte Leerzeichen mit GLÄTTEN; geschützte Leerzeichen zuerst gezielt ersetzen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

"K003 " hat 5 Zeichen, "K003" hat 4: optisch ähnlich, nicht gleich.

## Ergebnis

Exakter Vergleich muss WAHR liefern; anschließend Ergebnis 2.000 prüfen.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Exakter Vergleich muss WAHR liefern; anschließend Ergebnis 2.000 prüfen.
