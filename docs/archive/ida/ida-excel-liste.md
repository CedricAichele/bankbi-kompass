---
{
  "id": "ida-excel-liste",
  "slug": "ida-excel-liste",
  "titel": "Liste sinnvoll für Excel aufbauen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Verwende eine Kopfzeile, eine Spalte je Merkmal und eine Zeile je festgelegtem Schlüssel.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Liste sinnvoll für Excel aufbauen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "reporting",
    "ida-excel-export",
    "pivottable",
    "ida-parameter-anzeigen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Die Ausgabe soll gefiltert, verbunden oder in einer PivotTable genutzt werden.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Eine fachliche Zeile pro Konto und Stichtag festlegen.
2. Formuliere die gewünschte Regel: **Für den Datenexport eine flache Liste ohne Gruppen- oder Summenzeilen definieren**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Nach Export nur Detailbeträge summieren: 200, nicht 400.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Bericht enthält einen Gruppenkopf P001, zwei Kontenzeilen 120/80 und eine Zwischensumme 200. |

### Aktion

```text
Fachliche Regel: Für den Datenexport eine flache Liste ohne Gruppen- oder Summenzeilen definieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| P001/K001/120 und P001/K002/80 mit einer Überschriftenzeile. |

## Ergebnis

Verwende eine Kopfzeile, eine Spalte je Merkmal und eine Zeile je festgelegtem Schlüssel.

## Warum funktioniert das?

Eine Datenliste braucht gleichartig aufgebaute Zeilen. Eine zusätzlich exportierte Zwischensumme wäre in Excel ein weiterer Betrag und könnte doppelt gezählt werden.

## Typischer Fehler

Gruppenköpfe oder Summenzeilen als gewöhnliche Daten exportieren und später erneut summieren.

## Plausibilitätscheck

P001/K001/120 und P001/K002/80 mit einer Überschriftenzeile.
