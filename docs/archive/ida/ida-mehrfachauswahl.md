---
{
  "id": "ida-mehrfachauswahl",
  "slug": "ida-mehrfachauswahl",
  "titel": "Filter mit Mehrfachauswahl",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Mehrfachauswahl prüft die Zugehörigkeit zu einer Menge erlaubter Werte.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Filter mit Mehrfachauswahl",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-parameter-mehrfach",
    "ida-bedingungen"
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

Eine Liste soll die Segmente A und B gemeinsam enthalten.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Lege die erlaubten Einzelwerte A und B fest.
2. Verwende eine mengenfähige Bedingung und prüfe zusätzlich die Bedeutung keiner Auswahl.
3. Notiere die fachliche Regel: **Segment gehört zur Wertemenge {A, B}**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Segment |
| --- | --- |
| P001 | A |
| P002 | B |
| P003 | C |

### Aktion

```text
Pseudologik: Segment gehört zur Wertemenge {A, B}.
```

### Nachher · Beispielergebnis

| Person | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

## Ergebnis

Eine Mehrfachauswahl prüft die Zugehörigkeit zu einer Menge erlaubter Werte.

## Warum funktioniert das?

Eine Wertemenge erlaubt mehrere einzelne Treffer. Der Text A,B wäre dagegen ein einzelner anderer Wert.

## Typischer Fehler

Mehrere Werte als einzelnen zusammengesetzten Text vergleichen.

## Plausibilitätscheck

Zwei Zeilen; C bleibt ausgeschlossen.
