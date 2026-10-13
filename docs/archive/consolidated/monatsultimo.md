---
{
  "id": "monatsultimo",
  "slug": "monatsultimo",
  "titel": "EOMONTH: Monatsultimo bestimmen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "EOMONTH liefert das Monatsende relativ zu einem Ausgangsdatum. Es beweist nicht, dass Daten für diesen Stichtag vorliegen.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "EOMONTH: Monatsultimo bestimmen"
  ],
  "synonyme": [
    "eomonth",
    "aktueller monat",
    "monatsende"
  ],
  "verwandteThemen": [
    "aktueller-stichtag",
    "stichtag",
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
    "https://learn.microsoft.com/en-us/dax/eomonth-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du willst einen fachlich festgelegten Monatsendbestand anzeigen.

## Schritte

1. Prüfe Datenzeitraum, Datumstyp und benötigte Zeilenebene. Kläre, ob eine Bewegung oder ein Bestand ausgewertet wird.
2. Ausgangsdatum als echten Datumswert wählen.
3. Mit 0 den gleichen, mit −1 den vorherigen Monat bestimmen.
4. Verfügbarkeit des gewünschten Bestandsstichtags prüfen.
5. Vergleiche mit dem Beispiel: 17.03.2026 mit Versatz 0 → 31.03.2026.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Das kalendarische Monatsende zum gewählten Datum bestimmen.

```dax
Monatsende = EOMONTH ( DATE ( 2026, 3, 17 ), 0 )
```

Ergebnis: 31.03.2026.

### Nachher · Beispielergebnis

17.03.2026 mit Versatz 0 → 31.03.2026.

## Typischer Fehler

TODAY() als letzten verfügbaren Datenstand interpretieren.

## Voraussetzungen

Ein vorhandenes Modell mit echten Datumswerten. Für klassische Zeitintelligenz eine vollständige, markierte Datumstabelle und aktive Beziehung zum Faktendatum verwenden.

## Ergebnis

EOMONTH liefert das Monatsende relativ zu einem Ausgangsdatum. Es beweist nicht, dass Daten für diesen Stichtag vorliegen.

## Warum funktioniert das?

EOMONTH berechnet Kalendergrenzen unabhängig davon, ob für dieses Datum bereits ein Faktendatensatz vorliegt.

## Plausibilitätscheck

17.03.2026 mit Versatz 0 → 31.03.2026. Prüfe außerdem einen Zeitraum ohne Daten.

## Passender M-Code

[Monatsende mit Date.EndOfMonth](#/wissen/power-query-m?funktion=Date.EndOfMonth): Ausgangswert, Formel, Ergebnis und Anpassung in der praktischen M-Referenz.
