---
{
  "id": "ida-join-aggregation",
  "slug": "ida-join-aggregation",
  "titel": "Nach einem Join richtig aggregieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Join kann Beträge wiederholen. Aggregiere auf fachlich passender Ebene, bevor wiederholte Werte aufsummiert werden.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Nach einem Join richtig aggregieren",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-zielgranularitaet",
    "fakt-zu-fakt",
    "ida-aggregation",
    "ida-join-pruefen",
    "gruppieren",
    "summe-zu-hoch"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationships-creating-relationship-manually"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Listenbetrag steigt nach einer Verknüpfung.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Bestimme die Ebene des Plans: hier Person, nicht Konto.
2. Verdichte die Kontendetails vor dem Join auf Person oder halte Kennzahlen in getrennten Fakten mit gemeinsamen Dimensionen.
3. Notiere die fachliche Regel: **Konten zuerst je Person aggregieren, dann Plan zuordnen.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Tabelle | Person | Betrag |
| --- | --- | --- |
| Plan | P001 | 100 |
| Konten | P001/K001 | 20 |
| Konten | P001/K002 | 30 |
| Konten | P001/K003 | 40 |

### Aktion

```text
Pseudologik: Konten zuerst je Person aggregieren, dann Plan zuordnen.
```

### Nachher · Beispielergebnis

| Person | Plan | Kontenbetrag |
| --- | --- | --- |
| P001 | 100 | 90 |

## Ergebnis

Ein Join kann Beträge wiederholen. Aggregiere auf fachlich passender Ebene, bevor wiederholte Werte aufsummiert werden.

## Warum funktioniert das?

Beide Seiten werden auf dieselbe Zielgranularität gebracht. Ein Planwert muss nicht je Konto wiederholt und anschließend erneut summiert werden.

## Typischer Fehler

SUM(DISTINCT Betrag) als Reparatur: Zwei unterschiedliche Fälle können denselben korrekten Betrag haben.

## Plausibilitätscheck

Plan bleibt 100; Kontoaggregation ergibt 90. SUM(DISTINCT Betrag) wäre keine allgemeine Reparatur.
