---
{
  "id": "aufgabe-excel-liste",
  "slug": "aufgabe-excel-liste",
  "titel": "Excel-Liste für Auswertung vorbereiten",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bereite eine saubere rechteckige Liste vor, bevor du Formeln, Pivot oder Power Query darauf aufbaust.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Excel-Liste für Auswertung vorbereiten"
  ],
  "synonyme": [
    "excel liste vorbereiten"
  ],
  "verwandteThemen": [
    "excel-liste-vorbereiten",
    "ida-excel-liste",
    "datenqualitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine exportierte Liste enthält Titel, Summen und verbundene Zellen.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Liste sinnvoll für Excel aufbauen-Anleitung](#/wissen/ida-excel-liste). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

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

## Typischer Fehler

Gruppenköpfe oder Summenzeilen als gewöhnliche Daten exportieren und später erneut summieren.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Power BI        | [Power Query](#/wissen/power-query) · [Datentyp ändern / Daten bereinigen](#/wissen/datenbereinigung) |
| Excel           | [Excel-Liste für Auswertung vorbereiten](#/wissen/excel-liste-vorbereiten)                            |
| IDA / Reporting | [Liste sinnvoll für Excel aufbauen](#/wissen/ida-excel-liste); generisches Konzept                    |

## Ergebnis

Verwende eine Kopfzeile, eine Spalte je Merkmal und eine Zeile je festgelegtem Schlüssel.

## Warum funktioniert das?

Eine Datenliste braucht gleichartig aufgebaute Zeilen. Eine zusätzlich exportierte Zwischensumme wäre in Excel ein weiterer Betrag und könnte doppelt gezählt werden.

## Plausibilitätscheck

P001/K001/120 und P001/K002/80 mit einer Überschriftenzeile.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
