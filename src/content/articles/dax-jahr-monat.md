---
{
  "id": "dax-jahr-monat",
  "slug": "dax-jahr-monat",
  "titel": "YEAR und MONTH: Kalenderattribute",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "YEAR und MONTH leiten numerische Kalenderattribute aus einem Datum ab. Für eine Monatsachse brauchst du zusätzlich das Jahr.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "YEAR und MONTH: Kalenderattribute"
  ],
  "synonyme": [
    "year",
    "month"
  ],
  "verwandteThemen": [
    "datum-sortieren",
    "datumstabelle",
    "pq-datum",
    "ytd",
    "vorjahr"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Neugeschäft",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/year-function-dax",
    "https://learn.microsoft.com/en-us/dax/month-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Monate sollen chronologisch über Jahresgrenzen laufen.

## Schritte

1. Prüfe Datenzeitraum, Datumstyp und benötigte Zeilenebene. Kläre, ob eine Bewegung oder ein Bestand ausgewertet wird.
2. Eine vollständige Datumstabelle verwenden.
3. Jahr und Monatsnummer als Spalten ableiten.
4. Jahr-Monat-Anzeige nach einem Jahr-Monat-Schlüssel sortieren.
5. Vergleiche mit dem Beispiel: 28.02.2026 → Jahr 2026, Monat 2, Sortierschlüssel 202602.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Jahr, Monat und jahresübergreifenden Sortierschlüssel aus dem Datum ableiten.

```dax
Jahr = YEAR ( Demo_Datum[Date] )
MonatNr = MONTH ( Demo_Datum[Date] )
JahrMonatSort = YEAR ( Demo_Datum[Date] ) * 100 + MONTH ( Demo_Datum[Date] )
```

### Nachher · Beispielergebnis

28.02.2026 → Jahr 2026, Monat 2, Sortierschlüssel 202602.

## Typischer Fehler

Nur nach Monatsnamen sortieren oder Januar verschiedener Jahre zusammenfassen.

## Voraussetzungen

Ein vorhandenes Modell mit echten Datumswerten. Für klassische Zeitintelligenz eine vollständige, markierte Datumstabelle und aktive Beziehung zum Faktendatum verwenden.

## Ergebnis

YEAR und MONTH leiten numerische Kalenderattribute aus einem Datum ab. Für eine Monatsachse brauchst du zusätzlich das Jahr.

## Warum funktioniert das?

Jahr × 100 + Monat hält Jahr und Monat in chronologischer Reihenfolge. Ein Monatsname allein unterscheidet keine Jahre.

## Plausibilitätscheck

28.02.2026 → Jahr 2026, Monat 2, Sortierschlüssel 202602. Prüfe außerdem einen Zeitraum ohne Daten.
