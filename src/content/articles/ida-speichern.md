---
{
  "id": "ida-speichern",
  "slug": "ida-speichern",
  "titel": "Berichtdefinition und Ausgabe unterscheiden",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berichtsbetrieb",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine gespeicherte Definition beschreibt die Abfrage und Darstellung; eine Ausgabe ist ein Ergebnis zu einem bestimmten Lauf.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Berichtdefinition und Ausgabe unterscheiden"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-betrieb",
    "ida-ausfuehren",
    "ida-parameter-anzeigen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=cubes-saving-report-output"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du möchtest ein Ergebnis später nachvollziehen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Definition, Parameter und Ausgabezeitpunkt unterscheidbar benennen.
2. Formuliere die gewünschte Regel: **Definition und konkrete Ausgabe getrennt dokumentieren.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Prüfen, ob für die Nachvollziehbarkeit eine Ausgabeversion zusätzlich zur Definition benötigt wird.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Gleiche Berichtsdefinition, Januarwert 100 und Februarwert 120. |

### Aktion

```text
Fachliche Regel: Definition und konkrete Ausgabe getrennt dokumentieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Eine Definition; zwei Ausgaben mit jeweils eigenem Stichtag und Datenstand. |

## Ergebnis

Eine gespeicherte Definition beschreibt die Abfrage und Darstellung; eine Ausgabe ist ein Ergebnis zu einem bestimmten Lauf.

## Warum funktioniert das?

Gespeicherte Berichtslogik ist kein unveränderlicher Datenabzug. Ein erneuter Lauf kann durch andere Parameter oder aktualisierte Quellen ein anderes Ergebnis liefern.

## Typischer Fehler

Eine gespeicherte Definition mit unveränderlichen Ergebnisdaten verwechseln.

## Plausibilitätscheck

Eine Definition; zwei Ausgaben mit jeweils eigenem Stichtag und Datenstand.
