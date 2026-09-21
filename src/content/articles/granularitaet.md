---
{
  "id": "granularitaet",
  "slug": "granularitaet",
  "titel": "Granularität: Was bedeutet eine Zeile?",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lege vor jeder Auswertung fest: Eine Zeile steht für genau welche fachliche Einheit?",
  "ort": "Vor Aggregation, Join und Kennzahldefinition",
  "tags": [
    "Granularität: Was bedeutet eine Zeile?",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "falsche summe",
    "eine Zeile je Person",
    "einzigartige Kunden",
    "mehrere Zeilen",
    "summe stimmt nicht"
  ],
  "verwandteThemen": [
    "schluessel",
    "kardinalitaet",
    "beziehungen",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Summen sind falsch, Personen mehrfach vorhanden oder ein Join verändert das Ergebnis.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: P001/K001/31.01./1000; P001/K002/31.01./2000; P001/K001/28.02./1100.
2. Den vollständigen Schlüssel vor Gruppierung oder Join festlegen.
3. Prüfe die Unterscheidung am Ergebnis: Drei Konto-Stichtag-Zeilen; zwei Konten; eine Person.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Stichtag | Bestand |
| --- | --- | --- | --- |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K002 | 31.01.2026 | 2000 |
| P001 | K001 | 28.02.2026 | 1100 |

### Aktion

Konto und Stichtag gemeinsam als Schlüssel prüfen. Der Kundenschlüssel allein ist auf dieser Ebene nicht eindeutig.

### Nachher · Beispielergebnis

| Betrachtung | Anzahl |
| --- | --- |
| Konto-Stichtag-Kombinationen | 3 |
| Konten | 2 |
| Kunden | 1 |

## Ergebnis

Lege vor jeder Auswertung fest: Eine Zeile steht für genau welche fachliche Einheit?

## Warum funktioniert das?

Die Granularität ist die Bedeutung einer Zeile. Ein Join auf Kunde allein verbindet eine gröbere Identität als Konto und Stichtag; dadurch können Kombinationen entstehen, die keine einzelne Beobachtung darstellen.

## Typischer Fehler

Eine Personen-ID als eindeutigen Schlüssel einer Konto-Stichtags-Tabelle betrachten.

## Plausibilitätscheck

Drei Konto-Stichtag-Zeilen; zwei Konten; eine Person.
