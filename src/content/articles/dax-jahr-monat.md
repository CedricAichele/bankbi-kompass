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

**DimDatum**, Ausschnitt aus der vollständigen Datumstabelle der verlinkten Anleitung:

| Datum |
| --- |
| 28.02.2025 |
| 31.01.2026 |
| 28.02.2026 |

### Aktion

Wähle DimDatum und lege jede der folgenden Definitionen einzeln über **Modellierung → Neue Spalte** an. Die Datumsspalte heißt hier **Datum**.

```dax
Jahr = YEAR ( DimDatum[Datum] )
```

```dax
MonatNr = MONTH ( DimDatum[Datum] )
```

```dax
JahrMonatSort = YEAR ( DimDatum[Datum] ) * 100 + MONTH ( DimDatum[Datum] )
```

Für die sichtbare Monatsachse ergänze eine weitere Spalte:

```dax
JahrMonat = FORMAT ( DimDatum[Datum], "yyyy-MM" )
```

Markiere JahrMonat und wähle **Spaltentools → Nach Spalte sortieren → JahrMonatSort**. Verwende JahrMonat anschließend auf der Achse.

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
