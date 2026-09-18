---
{
  "id": "datumstabelle",
  "slug": "datumstabelle",
  "titel": "Datumstabelle erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine vollständige Datumstabelle liefert eine gemeinsame Zeitachse für Vorjahr und YTD.",
  "ort": "Power BI → Modellierung → Neue Tabelle",
  "tags": [
    "Datumstabelle erstellen",
    "Reporting"
  ],
  "synonyme": [
    "datum falsch"
  ],
  "verwandteThemen": [
    "vorjahr",
    "ytd",
    "datum-sortieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nNeugeschaeft = SUM ( Bewegungen[Betrag] )\n```"
}
---



## Wann brauche ich das?

Du willst Bewegungen nach Zeitraum filtern und Jahreswerte reproduzierbar vergleichen.

## Voraussetzungen

Klassische DAX-Zeitintelligenz mit einer als Datumstabelle markierten Kalendertabelle. Keine Visualberechnung.

## Schritte

1. Erstelle per Start → Daten eingeben die Tabelle Bewegungen mit Datum und Betrag. Stelle Datum auf Datum ohne Uhrzeit und Betrag auf Zahl.
2. Erstelle unter Modellierung → Neue Tabelle den Kalenderausdruck aus dem Beispiel.
3. Markiere Kalender über Tabellentools → Als Datumstabelle markieren und wähle Date.
4. Verbinde in der Modellansicht Kalender[Date] auf der 1-Seite mit Bewegungen[Datum] auf der *-Seite. Verwende eine aktive Beziehung und einfache Filterrichtung Kalender → Bewegungen.
5. Erstelle das Basismeasure Neugeschaeft = SUM ( Bewegungen[Betrag] ).
6. Erstelle gegebenenfalls das YTD- beziehungsweise Vorjahresmeasure aus dem Beispiel als weiteres Measure.
7. Nutze Kalender[Date] als Datenschnitt vom Typ Zwischen. Wähle 01.02.2026 bis 28.02.2026; verwende keine automatische Datumshierarchie der Faktentabelle.
8. Zeige Basismeasure und Vergleichsmeasure in Karten. Prüfe Februar, dann Januar bis Februar, dann März.

## Beispiel

| Datum | Betrag |
| --- | --- |
| 15.01.2025 | 8 |
| 15.02.2025 | 9 |
| 15.01.2026 | 10 |
| 15.02.2026 | 15 |
| 15.03.2026 | 12 |

```dax
Kalender = CALENDAR ( DATE ( 2025, 1, 1 ), DATE ( 2026, 12, 31 ) )
```

```dax
Neugeschaeft = SUM ( Bewegungen[Betrag] )
```

## Ergebnis

730 eindeutige Tageszeilen für die vollständigen Jahre 2025 und 2026. Bewegungssumme 2026: 37.

## Warum funktioniert das?

Eine lückenlose Datumstabelle liefert auch Tage ohne Bewegung und einen gemeinsamen Kalender für Filter. Faktendaten müssen deshalb nicht an jedem Tag vorhanden sein.

## Typischer Fehler

**Symptom:** leerer Vorjahreswert oder falsches YTD. **Ursache:** Kalender endet vor dem Vorjahr, inaktive Beziehung, Datum mit Uhrzeit oder Faktendatum als Slicer. **Lösung:** Datentyp, Zeitraum und Filterweg prüfen. Bestände niemals wie Bewegungen kumulieren.

## Plausibilitätscheck

Basis Februar 2026 = 15; Vorjahr Februar = 9; YTD Februar = 25. Prüfe jede Zahl einzeln, bevor du eine Abweichung berechnest.
