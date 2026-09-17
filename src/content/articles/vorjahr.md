---
{
  "id": "vorjahr",
  "slug": "vorjahr",
  "titel": "Vorjahr berechnen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Verschiebe den aktuellen Datumsbereich ins Vorjahr und werte dort dieselbe Kennzahl aus.",
  "ort": "Power BI → Neues Measure; markierte Datumstabelle mit aktiver Beziehung",
  "tags": ["Vorjahr berechnen", "Bestandsanalyse", "Reporting"],
  "synonyme": ["Vorjahr"],
  "verwandteThemen": ["datumstabelle", "stichtag", "ytd"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du vergleichst Neugeschäft mit dem entsprechenden Vorjahreszeitraum.

## Schritte

1. Vollständigen Kalender und Vorjahresdaten prüfen.
2. SAMEPERIODLASTYEAR im CALCULATE verwenden.
3. Identische fachliche Zeiträume vergleichen.

## Beispiel

```dax
Neugeschaeft VJ =
CALCULATE ( [Neugeschaeft], SAMEPERIODLASTYEAR ( Demo_Datum[Date] ) )
```

[Neugeschaeft] summiert Bewegungsbeträge.

## Typischer Fehler

Leeres Vorjahr nicht pauschal als 0 interpretieren. Bestände benötigen vergleichbare einzelne Stichtage; Monatsenden und Schaltjahre separat prüfen.
