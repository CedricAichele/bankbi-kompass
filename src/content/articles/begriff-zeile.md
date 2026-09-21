---
{
  "id": "begriff-zeile",
  "slug": "begriff-zeile",
  "titel": "Zeile / Datensatz",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Zeile beschreibt eine Einheit auf einer festgelegten Ebene.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Zeile / Datensatz",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
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
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Excel-Zeile, Power-Query-Datensatz und Berichtsdetail.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: K001/P001/1000; K002/P001/2000.
2. Eine Zeile als einen Kontodatensatz am Stichtag definieren.
3. Prüfe die Unterscheidung am Ergebnis: Zwei Konten, eine Person, Gesamtbestand 3000.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| K001/P001/1000; K002/P001/2000. |

### Aktion

Eine Zeile als einen Kontodatensatz am Stichtag definieren.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Zwei Konten, eine Person, Gesamtbestand 3000. |

## Ergebnis

Eine Zeile beschreibt eine Einheit auf einer festgelegten Ebene.

## Warum funktioniert das?

Die Wiederholung einer Person macht aus zwei verschiedenen Kontodatensätzen keine Dublette.

## Typischer Fehler

Eine Zeile ungeprüft mit einer Person gleichsetzen.

## Plausibilitätscheck

Zwei Konten, eine Person, Gesamtbestand 3000.
