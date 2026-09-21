---
{
  "id": "ida-parameter-mehrfach",
  "slug": "ida-parameter-mehrfach",
  "titel": "Mehrere Parameterwerte verwenden",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein mehrwertiger Parameter liefert eine Menge, keinen einzelnen Vergleichswert.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Mehrere Parameterwerte verwenden",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-mehrfachauswahl",
    "ida-parameter-optional",
    "ida-parameter-filter"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Mehrere Segmente sollen gleichzeitig auswählbar sein.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Festlegen, ob keine Auswahl alle zulässigen Werte oder keine Werte bedeutet.
2. Formuliere die gewünschte Regel: **Eine mengenfähige Parameterauswahl mit einer Mitgliedschaftsprüfung verbinden.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. A allein, A+B und keine Auswahl als getrennte Fälle ausführen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Personen P001/A, P002/B, P003/C; Auswahl {A,B}. |

### Aktion

```text
Fachliche Regel: Eine mengenfähige Parameterauswahl mit einer Mitgliedschaftsprüfung verbinden.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| P001 und P002; zwei Zeilen. |

## Ergebnis

Ein mehrwertiger Parameter liefert eine Menge, keinen einzelnen Vergleichswert.

## Warum funktioniert das?

Mehrfachauswahl ist eine Menge einzelner Werte. Sie ist nicht automatisch ein Text mit Kommas.

## Typischer Fehler

Eine kommaseparierte Zeichenfolge ohne definierte Verarbeitung als Wertemenge interpretieren.

## Plausibilitätscheck

P001 und P002; zwei Zeilen.
