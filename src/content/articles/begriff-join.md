---
{
  "id": "begriff-join",
  "slug": "begriff-join",
  "titel": "Join / Merge",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Join ordnet Zeilen anhand einer Bedingung einander zu; Power Query nennt dies Zusammenführen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Join / Merge",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "zusammenfuehren",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Power Query und allgemeines Reporting.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: Konten: K001/P001; Kunden: P001/A.
2. Über Kunde passende Attribute zuordnen.
3. Prüfe die Unterscheidung am Ergebnis: K001/P001/A; bei zwei rechten P001-Treffern zwei Ergebniszeilen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Konten: K001/P001; Kunden: P001/A. |

### Aktion

Über Kunde passende Attribute zuordnen.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| K001/P001/A; bei zwei rechten P001-Treffern zwei Ergebniszeilen. |

## Ergebnis

Ein Join ordnet Zeilen anhand einer Bedingung einander zu; Power Query nennt dies Zusammenführen.

## Warum funktioniert das?

Die Anzahl passender Schlüssel bestimmt die Anzahl resultierender Kombinationen.

## Typischer Fehler

Links außen mit unveränderter Zeilenzahl verwechseln.

## Plausibilitätscheck

K001/P001/A; bei zwei rechten P001-Treffern zwei Ergebniszeilen.
