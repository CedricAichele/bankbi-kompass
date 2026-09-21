---
{
  "id": "begriff-stichtag",
  "slug": "begriff-stichtag",
  "titel": "Stichtag, Zeitraum und Snapshot",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Stichtag beschreibt einen Zustand zu einem Zeitpunkt; ein Zeitraum umfasst Ereignisse zwischen Grenzen. Ein Snapshot speichert einen solchen Zustand.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Stichtag, Zeitraum und Snapshot",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "bestand-bewegung",
    "stichtag"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Stichtagsslicer, Exportdatum und Monatsabschlussanalyse.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: 31.01.: Bestand 100; 28.02.: Bestand 120; Februar-Zugang 20.
2. Zustand am Datum und Bewegung im Intervall getrennt auswerten.
3. Prüfe die Unterscheidung am Ergebnis: Februarbestand 120; Februarzugang 20.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| 31.01.: Bestand 100; 28.02.: Bestand 120; Februar-Zugang 20. |

### Aktion

Zustand am Datum und Bewegung im Intervall getrennt auswerten.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Februarbestand 120; Februarzugang 20. |

## Ergebnis

Ein Stichtag beschreibt einen Zustand zu einem Zeitpunkt; ein Zeitraum umfasst Ereignisse zwischen Grenzen. Ein Snapshot speichert einen solchen Zustand.

## Warum funktioniert das?

Ein Snapshot beobachtet einen Zustand; eine Bewegung beschreibt eine Veränderung. Beide besitzen einen anderen zeitlichen Bezug.

## Typischer Fehler

Mehrere Snapshots summieren und als aktuellen Bestand ausgeben.

## Plausibilitätscheck

Februarbestand 120; Februarzugang 20.
