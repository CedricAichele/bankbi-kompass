---
{
  "id": "ida-summe",
  "slug": "ida-summe",
  "titel": "Summe berechnen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Summiere additive Werte innerhalb einer passenden Ebene und eines passenden Zeitraums.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Summe berechnen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "SUMME"
  ],
  "verwandteThemen": [
    "ida-aggregation",
    "bestand-bewegung",
    "stichtag"
  ],
  "kontexte": [
    "Bestandsanalyse",
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

Eine Liste braucht einen Gruppenbetrag.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Zeitraum beziehungsweise Stichtag eingrenzen.
2. Betrag als Summenkennzahl auf der gewählten Gruppe verwenden.
3. Notiere die fachliche Regel: **Betrag je Person am gleichen Stichtag addieren**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
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
Pseudologik: Betrag je Person am gleichen Stichtag addieren.
```

### Nachher · Beispielergebnis

| Person | Summe |
| --- | --- |
| P001 | 200 |
| P002 | 50 |

## Ergebnis

Summiere additive Werte innerhalb einer passenden Ebene und eines passenden Zeitraums.

## Warum funktioniert das?

Eine Summe fasst additive Messwerte zusammen. Wiederholte Monatsbestände beschreiben dagegen verschiedene Beobachtungszeitpunkte desselben Vermögens.

## Typischer Fehler

Bestände verschiedener Stichtage als aktuellen Bestand addieren.

## Plausibilitätscheck

120 + 80 = 200 für P001; insgesamt 250.
