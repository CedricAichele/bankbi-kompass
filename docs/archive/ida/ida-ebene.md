---
{
  "id": "ida-ebene",
  "slug": "ida-ebene",
  "titel": "Detail- oder Gruppierungsebene?",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Details zeigen einzelne Einheiten; Gruppierung verdichtet diese nach ausgewählten Merkmalen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Detail- oder Gruppierungsebene?",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "granularitaet",
    "ida-zielgranularitaet",
    "ida-gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Liste enthält mehr oder weniger Zeilen als erwartet.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Den vollständigen Zielschlüssel formulieren, bevor Felder ausgewählt werden.
2. Formuliere die gewünschte Regel: **Entweder nach Person oder nach Person und Segment aggregieren**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. An P001 prüfen, ob eine oder zwei Zeilen beabsichtigt sind.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| P001/K001/A/120 und P001/K002/B/80. |

### Aktion

```text
Fachliche Regel: Entweder nach Person oder nach Person und Segment aggregieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Person: P001/200; Person+Segment: P001/A/120 und P001/B/80. |

## Ergebnis

Details zeigen einzelne Einheiten; Gruppierung verdichtet diese nach ausgewählten Merkmalen.

## Warum funktioniert das?

Jeder zusätzliche Gruppenschlüssel verfeinert die Ebene. Eine Zeile je Person und Segment ist nicht eine Zeile je Person.

## Typischer Fehler

Jede sichtbare Zeile als unabhängige Person interpretieren.

## Plausibilitätscheck

Person: P001/200; Person+Segment: P001/A/120 und P001/B/80.
