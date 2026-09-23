---
{
  "id": "ida-bedingungen",
  "slug": "ida-bedingungen",
  "titel": "Mehrere Bedingungen: UND / ODER",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "UND verlangt alle Bedingungen. ODER lässt Alternativen zu. Klammern machen gemischte Logik eindeutig.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Mehrere Bedingungen: UND / ODER",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-filter",
    "ida-filter-pruefen",
    "ida-mehrfachauswahl"
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

Mehrere Segmente sollen gemeinsam mit einer Datumsgrenze gelten.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Notiere zuerst die Alternative A/B, danach die gemeinsame Zeitraumseinschränkung.
2. Teste zusätzlich A außerhalb des Zeitraums, weil dieser Fall einen Klammerfehler aufdeckt.
3. Notiere die fachliche Regel: **(Segment A ODER Segment B) UND Im Zeitraum**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Segment | Im Zeitraum |
| --- | --- | --- |
| P001 | A | Ja |
| P002 | B | Nein |
| P003 | C | Ja |
| P004 | A | Nein |

### Aktion

```text
Pseudologik: (Segment A ODER Segment B) UND Im Zeitraum.
```

### Nachher · Beispielergebnis

| Person | Eingeschlossen |
| --- | --- |
| P001 | Ja |
| P002 | Nein |
| P003 | Nein |
| P004 | Nein |

## Ergebnis

UND verlangt alle Bedingungen. ODER lässt Alternativen zu. Klammern machen gemischte Logik eindeutig.

## Warum funktioniert das?

Die Klammer verbindet die Alternativen zu einer gemeinsamen Gruppe. Die Zeitraumspflicht gilt damit für beide Segmente.

## Typischer Fehler

**Symptom/Ursache:** A ODER (B UND Zeitraum) erlaubt auch A außerhalb des Zeitraums.

## Plausibilitätscheck

Nur P001 bleibt. A ODER (B UND Zeitraum) würde P004 fälschlich zulassen.
