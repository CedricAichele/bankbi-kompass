---
{
  "id": "ida-aggregation",
  "slug": "ida-aggregation",
  "titel": "Aggregationsebene festlegen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Aggregation ist nur sinnvoll, wenn Messwert, Gruppierung und Zeitraum zueinander passen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Aggregationsebene festlegen",
    "Reporting"
  ],
  "synonyme": [
    "falsche summe"
  ],
  "verwandteThemen": [
    "granularitaet",
    "ida-gruppieren",
    "ida-summe",
    "ida-join-aggregation",
    "stichtag"
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

Du brauchst Summen oder Anzahlen je Segment statt Einzelzeilen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Zielschlüssel Person festlegen; Konto aus der Ergebnisgruppierung entfernen.
2. Aggregation Betrag = Summe auf dieser Ebene festlegen.
3. Notiere die fachliche Regel: **Nach Person gruppieren und Betrag summieren.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Konto | Segment | Betrag |
| --- | --- | --- | --- |
| P001 | K001 | A | 120 |
| P001 | K002 | A | 80 |
| P002 | K003 | B | 50 |

### Aktion

```text
Pseudologik: Nach Person gruppieren und Betrag summieren.
```

### Nachher · Beispielergebnis

| Person | Betrag |
| --- | --- |
| P001 | 200 |
| P002 | 50 |

## Ergebnis

Eine Aggregation ist nur sinnvoll, wenn Messwert, Gruppierung und Zeitraum zueinander passen.

## Warum funktioniert das?

Die Zeilenebene wechselt von Konto zu Person. Nur Messwerte, die innerhalb desselben Zeitraums additiv sind, dürfen summiert werden.

## Typischer Fehler

Nach einem Join mehrfach vorhandene Ausgangsbeträge summieren.

## Plausibilitätscheck

Drei Detailzeilen ergeben zwei Gruppen; Summe 250 bleibt erhalten.
