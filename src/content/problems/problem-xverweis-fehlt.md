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
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/trim-function",
    "https://support.microsoft.com/de-de/office/gl%C3%A4tten-funktion-410388fa-c5df-49c6-b16c-9e5630b479f9"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
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

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Vergleiche die beiden Zellen direkt mit =A2=F2 sowie deren LÄNGE.
3. Vereinheitliche den Schlüsseltyp an der Quelle. Entferne unerwünschte Leerzeichen mit GLÄTTEN; geschützte Leerzeichen zuerst gezielt ersetzen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Leerzeichen entfernen: GLÄTTEN](#/wissen/glaetten). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| "K003 " hat 5 Zeichen, "K003" hat 4: optisch ähnlich, nicht gleich. |

### Aktion

Vereinheitliche den Schlüsseltyp an der Quelle. Entferne unerwünschte Leerzeichen mit GLÄTTEN; geschützte Leerzeichen zuerst gezielt ersetzen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Exakter Vergleich muss WAHR liefern; anschließend Ergebnis 2.000 prüfen. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Exakter Vergleich muss WAHR liefern; anschließend Ergebnis 2.000 prüfen.

## Warum funktioniert das?

GLÄTTEN normalisiert das normale Leerzeichen. Geschützte Leerzeichen aus Webseiten können einen zusätzlichen WECHSELN-Schritt benötigen.
