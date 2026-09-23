---
{
  "id": "begriff-append",
  "slug": "begriff-append",
  "titel": "Append / Anfügen",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Anfügen stapelt gleichartig aufgebaute Zeilen untereinander.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Append / Anfügen",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "anhaengen"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/append-queries"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Power Query in Excel und Power BI.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: Januar: K001/10; Februar: K001/15.
2. Zeilen untereinander anfügen.
3. Prüfe die Unterscheidung am Ergebnis: K001/Jan/10 und K001/Feb/15; zwei Zeilen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Januar: K001/10; Februar: K001/15. |

### Aktion

Zeilen untereinander anfügen.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| K001/Jan/10 und K001/Feb/15; zwei Zeilen. |

## Ergebnis

Anfügen stapelt gleichartig aufgebaute Zeilen untereinander.

## Warum funktioniert das?

Append erhöht die Zahl der Datensätze und ordnet Spalten nach Namen zu. Es sucht keine passenden Schlüssel.

## Typischer Fehler

Dublettenbereinigung oder Schlüsselzuordnung erwarten.

## Plausibilitätscheck

K001/Jan/10 und K001/Feb/15; zwei Zeilen.
