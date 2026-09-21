---
{
  "id": "begriff-zeilenkontext",
  "slug": "begriff-zeilenkontext",
  "titel": "Zeilenkontext",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeilenkontext bedeutet, dass ein Ausdruck gerade für eine bestimmte Zeile ausgewertet wird.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Zeilenkontext",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "sumx"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/dax-overview",
    "https://learn.microsoft.com/en-us/dax/sumx-function-dax"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Berechnete Spalten und DAX-Iteratoren.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: Menge/Preis: 2/10 und 3/20.
2. Je Zeile Menge × Preis berechnen, danach addieren.
3. Prüfe die Unterscheidung am Ergebnis: 20 + 60 = 80.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Menge/Preis: 2/10 und 3/20. |

### Aktion

Je Zeile Menge × Preis berechnen, danach addieren.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 20 + 60 = 80. |

## Ergebnis

Zeilenkontext bedeutet, dass ein Ausdruck gerade für eine bestimmte Zeile ausgewertet wird.

## Warum funktioniert das?

Der Zeilenkontext liefert Werte der aktuellen Zeile. Er ist von Filtern zu unterscheiden, die festlegen, welche Zeilen überhaupt betrachtet werden.

## Typischer Fehler

Zeilenkontext als Filter auf andere Tabellen missverstehen; Kontextübergang ist ein eigener Mechanismus.

## Plausibilitätscheck

20 + 60 = 80.
