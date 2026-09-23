---
{
  "id": "begriff-ytd",
  "slug": "begriff-ytd",
  "titel": "YTD und Vorjahr",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "YTD bedeutet seit Jahresbeginn bis zur Auswahl; Vorjahr vergleicht einen entsprechenden früheren Zeitraum.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "YTD und Vorjahr",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ytd",
    "vorjahr"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

DAX-Zeitintelligenz und zeitabhängige Excel-Kriterien.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: Januar 2026: 10; Februar 2026: 15; Februar 2025: 9.
2. Ab Jahresbeginn kumulieren beziehungsweise denselben Vorjahresmonat vergleichen.
3. Prüfe die Unterscheidung am Ergebnis: Februar-YTD 25; Vorjahres-Februar 9.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Januar 2026: 10; Februar 2026: 15; Februar 2025: 9. |

### Aktion

Ab Jahresbeginn kumulieren beziehungsweise denselben Vorjahresmonat vergleichen.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Februar-YTD 25; Vorjahres-Februar 9. |

## Ergebnis

YTD bedeutet seit Jahresbeginn bis zur Auswahl; Vorjahr vergleicht einen entsprechenden früheren Zeitraum.

## Warum funktioniert das?

YTD erweitert das aktuelle Jahresintervall nach hinten zum Jahresbeginn. Vorjahr verschiebt dagegen den Vergleichszeitraum.

## Typischer Fehler

YTD bis Februar mit einem vollen Vorjahr vergleichen.

## Plausibilitätscheck

Februar-YTD 25; Vorjahres-Februar 9.
