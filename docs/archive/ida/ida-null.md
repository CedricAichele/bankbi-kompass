---
{
  "id": "ida-null",
  "slug": "ida-null",
  "titel": "NULL prüfen und behandeln",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "NULL steht für einen fehlenden Wert und ist fachlich von 0 und leerem Text zu unterscheiden.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "NULL prüfen und behandeln",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-not-null",
    "nullwerte",
    "ida-durchschnitt"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=metadata-cleaning-data",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Filter oder eine Kennzahl lässt fehlende Werte unerwartet weg.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Unterscheide fehlende Werte, leeren Text und echte Nullen.
2. Verwende eine vom Werkzeug unterstützte NULL-Prüfung und lege Ersatz nur mit fachlicher Begründung fest.
3. Notiere die fachliche Regel: **Bekannte Dauerwerte mitteln; unbekannte Dauer separat zählen**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Dauer |
| --- | --- |
| V001 | 0 |
| V002 | 10 |
| V003 | NULL |

### Aktion

```text
Pseudologik: Bekannte Dauerwerte mitteln; unbekannte Dauer separat zählen.
```

### Nachher · Beispielergebnis

| Kennzahl | Wert |
| --- | --- |
| Bekannter Durchschnitt | 5 |
| Unbekannte Dauern | 1 |

## Ergebnis

NULL steht für einen fehlenden Wert und ist fachlich von 0 und leerem Text zu unterscheiden.

## Warum funktioniert das?

0 ist ein beobachteter Wert. NULL ist fehlende Information. Würde NULL als 0 eingesetzt, sänke der Durchschnitt ohne neue Beobachtung auf rund 3,33.

## Typischer Fehler

In SQL-artiger Logik ist ein gewöhnlicher Vergleich mit NULL kein normaler Gleichheitsvergleich. Eine ausdrücklich geeignete NULL-Prüfung verwenden.

## Plausibilitätscheck

Zwei bekannte Werte ergeben Mittelwert 5; ein unbekannter bleibt ausgewiesen.
