---
{
  "id": "ida-extrema",
  "slug": "ida-extrema",
  "titel": "Maximum und Minimum",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Maximum und Minimum liefern die größten beziehungsweise kleinsten Werte innerhalb einer Gruppe.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Maximum und Minimum",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-statusverlauf",
    "ida-durchschnitt",
    "ida-vorgang",
    "ida-aggregation"
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

Du suchst den ersten oder letzten Zeitpunkt oder eine besonders lange Dauer.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Lege Gruppe und Zahlen- beziehungsweise Datumsfeld fest.
2. Wenn der ganze Datensatz benötigt wird, ordne den Extremwert wieder passenden Zeilen zu und kläre Gleichstände.
3. Notiere die fachliche Regel: **Minimum und Maximum der Dauer berechnen**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Dauer |
| --- | --- |
| V001 | 1 |
| V002 | 2 |
| V003 | 30 |

### Aktion

```text
Pseudologik: Minimum und Maximum der Dauer berechnen.
```

### Nachher · Beispielergebnis

| Minimum | Maximum |
| --- | --- |
| 1 | 30 |

## Ergebnis

Maximum und Minimum liefern die größten beziehungsweise kleinsten Werte innerhalb einer Gruppe.

## Warum funktioniert das?

Ein Extremwert ist ein einzelner Wert. Die übrigen Felder der zugehörigen Zeile werden dadurch nicht automatisch ausgewählt; Gleichstände benötigen eine eigene Regel.

## Typischer Fehler

MAX(Datum) liefert nicht automatisch die übrigen Felder derselben Datensatzzeile.

## Plausibilitätscheck

Minimum 1 gehört V001; Maximum 30 gehört V003.
