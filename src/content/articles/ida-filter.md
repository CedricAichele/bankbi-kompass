---
{
  "id": "ida-filter",
  "slug": "ida-filter",
  "titel": "Filter erstellen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter begrenzt die ausgewerteten Zeilen anhand einer ausdrücklich formulierten Bedingung.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Filter erstellen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-bedingungen",
    "ida-filtertypen",
    "ida-filter-pruefen",
    "ida-null"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Liste soll nur Segment A am gewählten Stichtag enthalten.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Wähle eine Detailbedingung für Segment und eine echte Datumsbedingung für Stichtag.
2. Prüfe die UND-Verknüpfung sowie alle bereits vorhandenen Filter.
3. Notiere die fachliche Regel: **Segment A UND Stichtag 31.03.2026.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Segment | Stichtag | Betrag |
| --- | --- | --- | --- |
| P001 | A | 31.03.2026 | 120 |
| P002 | B | 31.03.2026 | 80 |
| P003 | A | 28.02.2026 | 50 |

### Aktion

```text
Pseudologik: Segment A UND Stichtag 31.03.2026.
```

### Nachher · Beispielergebnis

| Person | Betrag |
| --- | --- |
| P001 | 120 |

## Ergebnis

Ein Filter begrenzt die ausgewerteten Zeilen anhand einer ausdrücklich formulierten Bedingung.

## Warum funktioniert das?

Beide Bedingungen müssen auf dieselbe Detailzeile zutreffen. Ein ODER würde auch die beiden jeweils nur teilweise passenden Datensätze einschließen.

## Typischer Fehler

**Symptom/Ursache:** ODER würde zusätzlich P002 und P003 zulassen.

## Plausibilitätscheck

Nur P001 bleibt; Betrag 120.
