---
{
  "id": "begriff-spalte",
  "slug": "begriff-spalte",
  "titel": "Spalte / Attribut",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Spalte enthält dasselbe Merkmal für jede Zeile.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Spalte / Attribut",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-types"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Feldliste, Tabellenkopf und Datentypauswahl.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: K001 | P001 | 1000.
2. Jedem Feld einen Namen und Datentyp zuordnen.
3. Prüfe die Unterscheidung am Ergebnis: Konto: Text; Kunde: Text; Bestand: Zahl.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| K001 | P001 | 1000. |

### Aktion

Jedem Feld einen Namen und Datentyp zuordnen.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Konto: Text; Kunde: Text; Bestand: Zahl. |

## Ergebnis

Eine Spalte enthält dasselbe Merkmal für jede Zeile.

## Warum funktioniert das?

Eine Spalte beschreibt dieselbe Eigenschaft über alle Zeilen. Ihre Bedeutung und ihr Datentyp bestimmen, welche Operationen sinnvoll sind.

## Typischer Fehler

Datentypen oder Bedeutungen innerhalb einer Spalte mischen.

## Plausibilitätscheck

Konto: Text; Kunde: Text; Bestand: Zahl.
