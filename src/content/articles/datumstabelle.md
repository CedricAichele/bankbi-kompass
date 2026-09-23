---
{
  "id": "datumstabelle",
  "slug": "datumstabelle",
  "titel": "Datumstabelle erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
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
    "beziehungen",
    "ytd",
    "vorjahr",
    "datum-sortieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/calendar-function-dax",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nDimDatum = CALENDAR ( DATE ( 2025, 1, 1 ), DATE ( 2026, 12, 31 ) )\n```"
}
---

## Wann brauche ich das?

Zeiträume vollständig und einheitlich über mehrere Faktentabellen auswerten.

## Voraussetzungen

Eine Faktentabelle mit reinem Datumsfeld und bekanntem Auswertungszeitraum.

## Schritte

1. Bestimme den benötigten Zeitraum einschließlich vollständiger Kalenderjahre.
2. Erstelle oder lade **DimDatum** mit genau einer lückenlosen Zeile pro Tag. Eine berechnete Tabelle kann unter **Modellierung → Neue Tabelle** entstehen. CALENDAR erzeugt dabei zunächst die Spalte **Date**; benenne sie in der Tabellenansicht in **Datum** um, damit die folgende Beziehung denselben Namen verwendet.
3. Ergänze bei Bedarf Jahr, Monatsnummer und Jahr-Monat. Sortiere Monatsnamen nach Monatsnummer, Jahr-Monat nach einem jahresübergreifenden Sortierschlüssel.
4. Für klassische DAX-Zeitintelligenz markiere die Tabelle über **Tabellentools → Als Datumstabelle markieren** und wähle **Datum**. Prüfe Eindeutigkeit, keine leeren Werte und keine Lücken.
5. Erstelle **DimDatum[Datum] (1) → FaktBestand[Datum] (*)**, aktiv und mit einfacher Filterrichtung. FaktBestand[Datum] darf keine Uhrzeiten enthalten.
6. Verwende Datumsfelder aus DimDatum im Bericht. YTD und Vorjahresberechnungen behandeln die verlinkten eigenen Artikel.

## Beispiel

### Vorher · Beispieldaten

| FaktBestand.Datum | Bestand |
| --- | --- |
| 01.01.2026 | 100 |
| 03.01.2026 | 150 |

### Aktion

```dax
DimDatum = CALENDAR ( DATE ( 2025, 1, 1 ), DATE ( 2026, 12, 31 ) )
```

### Nachher · Beispielergebnis

| DimDatum.Datum (Ausschnitt) | Passende Faktzeile |
| --- | --- |
| 01.01.2026 | 100 |
| 02.01.2026 | Keine |
| 03.01.2026 | 150 |

## Ergebnis

Ein vollständiger Kalender bildet die gemeinsame zeitliche Analyseachse, auch an Tagen ohne Fakten.

## Warum funktioniert das?

Die Faktentabelle enthält nur beobachtete Tage und kann Lücken haben. Eine eigene Datumstabelle stellt unabhängig davon alle Kalendertage bereit und filtert die zugehörigen Fakten.

## Typischer Fehler

Die Datumstabelle nur aus vorhandenen Faktentagen erzeugen oder Bestände über mehrere Tage wie Umsätze summieren.

## Plausibilitätscheck

Der 02.01. existiert im Kalender ohne künstlich erzeugten Bestand. Jeder Faktentag findet genau einen Kalendertag.
