---
{
  "id": "stichtag",
  "slug": "stichtag",
  "titel": "Bestand zum Stichtag",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Bestand ist eine Momentaufnahme. Wähle einen definierten Stichtag; addiere nicht mehrere Monatsbestände.",
  "ort": "Power BI: Stichtags-Slicer · Excel: Datumskriterium · IDA: Stichtagsfilter",
  "tags": [
    "Bestand zum Stichtag",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "Bestand addieren",
    "Snapshot",
    "aktueller monat",
    "bestand addieren"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "sum",
    "summewenns",
    "ida-filter"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/calendar-function-dax",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Einen Bestand zu genau einem fachlich vollständigen Datum berechnen.

## Voraussetzungen

Ein vorhandener Datenbestand mit passender Zeilenebene. Tabellen- und Feldnamen im Beispiel auf die eigene Quelle übertragen.

## Schritte

1. Definiere, ob ein ausgewählter oder der letzte vollständig gelieferte Stichtag gemeint ist. Im Beispiel ist es der 31.03.2026.
2. Importiere Stichtag als Datum, Konto als Text und Betrag als Zahl.
3. Prüfe Eindeutigkeit der Kombination Konto/Stichtag.
4. Lege eine Summe über Betrag an und setze einen Filter auf 31.03.2026.
5. Zeige den Stichtag neben der Kennzahl, damit der zeitliche Bezug sichtbar ist.
6. Entferne den Datumsfilter testweise: 305 zeigt, warum eine Summe über alle Snapshots nicht als Bestand verwendet werden darf. Setze ihn zurück.

## Beispiel

### Vorher · Beispieldaten

| Stichtag | Konto | Betrag |
| --- | --- | --- |
| 31.01.2026 | K001 | 100 |
| 28.02.2026 | K001 | 104 |
| 31.03.2026 | K001 | 101 |

Excel mit Datum in A2:A4 und Betrag in C2:C4:

```excel
=SUMMEWENNS(C2:C4;A2:A4;DATUM(2026;3;31))
```

### Aktion

Prüfe Eindeutigkeit der Kombination Konto/Stichtag.
Lege eine Summe über Betrag an und setze einen Filter auf 31.03.2026.

### Nachher · Beispielergebnis

101 zum 31.03.2026, nicht 305.

## Ergebnis

Ein Bestand ist eine Momentaufnahme. Wähle einen definierten Stichtag; addiere nicht mehrere Monatsbestände.

## Warum funktioniert das?

Ein Snapshot beschreibt einen Zustand. Derselbe Bestand kann in mehreren Snapshots vorkommen; sie sind über Zeit nicht additiv.

## Typischer Fehler

**Ursache und Lösung:** Ein globales MAX(Datum) kann unvollständig gelieferte Produkte ausblenden. Vollständigkeit vor Automatisierung prüfen.

## Plausibilitätscheck

Ein Konto, ein Stichtag, genau eine Ergebniszeile mit 101.

## Vergleich

Power BI: Datumsslicer + SUM. Excel: SUMMEWENNS. Reporting: Datumsfilter vor Summierung.
