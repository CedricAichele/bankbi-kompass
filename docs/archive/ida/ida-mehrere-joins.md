---
{
  "id": "ida-mehrere-joins",
  "slug": "ida-mehrere-joins",
  "titel": "Mehrere 1:n-Joins plausibilisieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zwei unabhängige Detailverknüpfungen können sich gegenseitig vervielfachen. Prüfe jede Erweiterung separat.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Mehrere 1:n-Joins plausibilisieren"
  ],
  "synonyme": [
    "mehrere joins",
    "zeilen vervielfachen"
  ],
  "verwandteThemen": [
    "ida-join-pruefen",
    "ida-zielgranularitaet",
    "ida-join-aggregation",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationships-creating-relationship-manually"
  ],
  "screenshots": [
    {
      "src": "images/ida/mehrere-joins.svg",
      "alt": "Konten: P001 · K001: P001 · K002. Vorgänge: P001 · V001 / V002 / V003: 3 Vorgänge. Gemeinsamer Detailjoin: 2 × 3 = 6 Zeilen: Beträge werden wiederholt",
      "caption": "Zwei unabhängige Detailzweige",
      "hinweis": "Vor dem Verbinden beide Detailzweige auf die Zielgranularität bringen.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Personen mit Konten und Vorgängen erzeugen zu viele Zeilen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Zeichne jeden Join mit seiner erwarteten Kardinalität auf.
2. Prüfe nach jedem einzelnen Join Zeilenzahl und Kontrollsummen, statt nur das Endergebnis anzusehen.
3. Notiere die fachliche Regel: **Beide Detailmengen getrennt je Person aggregieren, anschließend zusammenführen**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Konten | Vorgänge |
| --- | --- | --- |
| P001 | K001, K002 | V001, V002, V003 |

### Aktion

```text
Pseudologik: Beide Detailmengen getrennt je Person aggregieren, anschließend zusammenführen.
```

### Nachher · Beispielergebnis

| Person | Kontenanzahl | Vorgangsanzahl |
| --- | --- | --- |
| P001 | 2 | 3 |

## Ergebnis

Zwei unabhängige Detailverknüpfungen können sich gegenseitig vervielfachen. Prüfe jede Erweiterung separat.

## Warum funktioniert das?

Zwei unabhängige Detailmengen bilden bei direktem Join ein Produkt: 2 × 3 = 6 Kombinationen. Getrennte Verdichtung verhindert diese künstliche Kombinationsebene.

## Typischer Fehler

Die vervielfachten Beträge am Ende mit DISTINCT reparieren wollen.

## Plausibilitätscheck

Eine Personenzeile mit 2 und 3; kein ungeklärtes Ergebnis mit 6 Detailkombinationen.
