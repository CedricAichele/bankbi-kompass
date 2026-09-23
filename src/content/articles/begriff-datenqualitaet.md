---
{
  "id": "begriff-datenqualitaet",
  "slug": "begriff-datenqualitaet",
  "titel": "Datenqualität",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Datenqualität heißt, dass Daten für ihren Zweck vollständig, richtig, eindeutig und aktuell genug sind.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datenbereinigung",
    "pq-workflow"
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

Importkontrolle, Fehlwertprüfung und Ergebnisabgleich.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: K001/100, K001/100 und K002/50 am selben Tag.
2. Vollständigkeit, Schlüssel, Datentypen und Summen prüfen.
3. Prüfe die Unterscheidung am Ergebnis: Drei gelieferte Zeilen, zwei Konten; K001 ist als ungeklärte Wiederholung sichtbar.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| K001/100, K001/100 und K002/50 am selben Tag. |

### Aktion

Vollständigkeit, Schlüssel, Datentypen und Summen prüfen.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Drei gelieferte Zeilen, zwei Konten; K001 ist als ungeklärte Wiederholung sichtbar. |

## Ergebnis

Datenqualität heißt, dass Daten für ihren Zweck vollständig, richtig, eindeutig und aktuell genug sind.

## Warum funktioniert das?

Eine technisch lesbare Datei kann fachlich falsch sein. Eindeutigkeit und Vollständigkeit hängen von der erwarteten Zeilenebene ab.

## Typischer Fehler

Eine technisch fehlerfreie Datei für fachlich richtig halten.

## Plausibilitätscheck

Drei gelieferte Zeilen, zwei Konten; K001 ist als ungeklärte Wiederholung sichtbar.
