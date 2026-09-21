---
{
  "id": "ida-not-null",
  "slug": "ida-not-null",
  "titel": "NULL und NOT NULL unterscheiden",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "NULL bedeutet fehlend oder unbekannt. Es ist weder automatisch 0 noch ein leerer Text.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "NULL und NOT NULL unterscheiden"
  ],
  "synonyme": [
    "not null",
    "ist nicht leer"
  ],
  "verwandteThemen": [
    "ida-null",
    "ida-filter",
    "ida-filtertypen"
  ],
  "kontexte": [
    "Reporting"
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

Nur Vorgänge mit vorhandenem Abschlussdatum sollen erscheinen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Prüfe, ob fehlende Abschlüsse tatsächlich NULL und nicht leere Texte sind.
2. Verwende die unterstützte Bedingung für nicht fehlend; kläre die konkrete Syntax anhand des verwendeten Datenquellentyps.
3. Notiere die fachliche Regel: **Nur Vorgänge mit vorhandenem Abschlussdatum einschließen**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Abschlussdatum |
| --- | --- |
| V001 | NULL |
| V002 | 03.03.2026 |

### Aktion

```text
Pseudologik: Nur Vorgänge mit vorhandenem Abschlussdatum einschließen.
```

### Nachher · Beispielergebnis

| Vorgang | Abschlussdatum |
| --- | --- |
| V002 | 03.03.2026 |

## Ergebnis

NULL bedeutet fehlend oder unbekannt. Es ist weder automatisch 0 noch ein leerer Text.

## Warum funktioniert das?

Eine explizite NULL-Prüfung fragt nach vorhandener Information. Ein gewöhnlicher Gleichheitsvergleich mit NULL ist in SQL-artiger Logik keine normale Wahr/Falsch-Prüfung.

## Typischer Fehler

NULL wie einen normalen Wert mit Gleichheit vergleichen; prüfe dafür die NULL-Funktionen deiner Reportingumgebung.

## Plausibilitätscheck

V002 bleibt, V001 bleibt als offener Fall separat nachvollziehbar.
