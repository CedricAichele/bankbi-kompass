---
{
  "id": "ida-zielgranularitaet",
  "slug": "ida-zielgranularitaet",
  "titel": "Zielgranularität vor dem Join festlegen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lege zuerst fest, was genau eine Ergebniszeile bedeutet. Daraus folgen Schlüssel, Aggregationen und erlaubte Detailfelder.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Zielgranularität vor dem Join festlegen"
  ],
  "synonyme": [
    "zielgranularität"
  ],
  "verwandteThemen": [
    "ida-aggregation",
    "ida-mehrere-joins",
    "granularitaet",
    "eine-zeile-je-person"
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
      "src": "images/ida/zielgranularitaet.svg",
      "alt": "Detail: P001 · K001 · 1.250 €: P001 · K002 · 750 €. Aggregation: Gruppieren nach Person: SUMME des Bestands. Ziel: eine Zeile je Person: P001 · 2.000 €: Kontodetails entfallen",
      "caption": "Die Zeilenebene zuerst festlegen",
      "hinweis": "Aggregation verdichtet Daten; sie entfernt keine fachlich falschen Dubletten.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Person mit mehreren Konten soll genau einmal mit Gesamtbestand erscheinen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Ziel eine Zeile je Person festlegen; Konto aus der Zielgruppierung entfernen.
2. Formuliere die gewünschte Regel: **Vor einem Join auf eine eindeutige Kundentabelle die Konten nach Person summieren.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Drei Detailzeilen gegen zwei Ergebniszeilen und unveränderte Summe 250 prüfen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| P001/K001/120, P001/K002/80, P002/K003/50. |

### Aktion

```text
Fachliche Regel: Vor einem Join auf eine eindeutige Kundentabelle die Konten nach Person summieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| P001/200 und P002/50; anschließend je ein Stammdatentreffer. |

## Ergebnis

Lege zuerst fest, was genau eine Ergebniszeile bedeutet. Daraus folgen Schlüssel, Aggregationen und erlaubte Detailfelder.

## Warum funktioniert das?

Die Voraggregation beseitigt nicht vermeintliche Dubletten, sondern ändert bewusst die Ebene. Kontodetails können danach nicht beliebig zusätzlich ausgegeben werden.

## Typischer Fehler

**Symptom/Ursache:** DISTINCT über Person und Kontonummer behält mehrere Zeilen pro Person.

## Plausibilitätscheck

P001/200 und P002/50; anschließend je ein Stammdatentreffer.
