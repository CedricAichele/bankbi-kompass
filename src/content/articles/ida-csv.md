---
{
  "id": "ida-csv",
  "slug": "ida-csv",
  "titel": "CSV für die Weiterverarbeitung",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "CSV enthält getrennte Textwerte, aber keine verlässlichen Zelltypen oder Excel-Formatierungen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "CSV für die Weiterverarbeitung",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "csv-import",
    "ida-nullstellen",
    "ida-formate",
    "daten-laden"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst einen einfachen, flachen Datenaustausch.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Trennzeichen, Zeichencodierung und Kopfzeile in der Vorschau prüfen.
2. Formuliere die gewünschte Regel: **CSV mit Semikolon und passendem Gebietsschema importieren; Kennung als Text behandeln.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. In Excel Daten → Aus Text/CSV verwenden; automatische Typkonvertierung der Kennung verhindern.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Textzeile: 0012;31.03.2026;1234,50. |

### Aktion

```text
Fachliche Regel: CSV mit Semikolon und passendem Gebietsschema importieren; Kennung als Text behandeln.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Kennung 0012, Datum 31.03.2026, Zahl 1234,50. |

## Ergebnis

CSV enthält getrennte Textwerte, aber keine verlässlichen Zelltypen oder Excel-Formatierungen.

## Warum funktioniert das?

CSV enthält Zeichen und Trennzeichen, keine verlässlichen Excel-Zelltypen. Die Importentscheidung bestimmt deshalb, ob Kennungen und Zahlen erhalten bleiben.

## Typischer Fehler

CSV per Doppelklick öffnen und automatische Typinterpretationen ungeprüft akzeptieren.

## Plausibilitätscheck

Kennung 0012, Datum 31.03.2026, Zahl 1234,50.
