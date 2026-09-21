---
{
  "id": "ida-ausfuehren",
  "slug": "ida-ausfuehren",
  "titel": "Bericht ausführen und Ausgabeformat wählen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berichtsbetrieb",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe Parameter und Ausgabeformat vor dem Lauf. Bildschirmdarstellung und exportierte Datei können unterschiedlich strukturiert sein.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Bericht ausführen und Ausgabeformat wählen"
  ],
  "synonyme": [
    "berichtsausführung",
    "ausgabeformate"
  ],
  "verwandteThemen": [
    "ida-speichern",
    "ida-excel-export",
    "ida-csv"
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

Eine Liste soll in Excel weiterverarbeitet werden.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Vor dem Lauf Pflichtparameter, Datenstand und erwartete Zähleinheit prüfen.
2. Formuliere die gewünschte Regel: **Parameter prüfen, Bericht ausführen und ein zum Zweck passendes Ausgabeformat wählen.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Nach dem Lauf Zeilenzahl, Filter und Exportstruktur kontrollieren.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Definition einer Kontenliste; Auswahl Stichtag 31.03.2026, Segment A. |

### Aktion

```text
Fachliche Regel: Parameter prüfen, Bericht ausführen und ein zum Zweck passendes Ausgabeformat wählen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| HTML zur Sichtprüfung; flache Excel-/CSV-Ausgabe zur Weiterverarbeitung mit denselben fachlichen Filtern. |

## Ergebnis

Prüfe Parameter und Ausgabeformat vor dem Lauf. Bildschirmdarstellung und exportierte Datei können unterschiedlich strukturiert sein.

## Warum funktioniert das?

Die Definition beschreibt die Abfrage; ein Lauf erzeugt die konkrete Ausgabe für einen Datenstand und eine Auswahl. Verschiedene Formate können das Layout unterschiedlich darstellen.

## Typischer Fehler

Die Bildschirmansicht für den Nachweis eines korrekten Exports halten.

## Plausibilitätscheck

HTML zur Sichtprüfung; flache Excel-/CSV-Ausgabe zur Weiterverarbeitung mit denselben fachlichen Filtern.
