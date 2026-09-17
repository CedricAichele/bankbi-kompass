---
{
  "id": "dateadd",
  "slug": "dateadd",
  "titel": "DATEADD und SAMEPERIODLASTYEAR",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DATEADD verschiebt die aktuelle Datumsauswahl; SAMEPERIODLASTYEAR liefert bei klassischer Datumslogik die entsprechende Vorjahresauswahl.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": ["DATEADD und SAMEPERIODLASTYEAR"],
  "synonyme": ["sameperiodlastyear", "dateadd", "vorjahreswert"],
  "verwandteThemen": ["vorjahr", "datumstabelle"],
  "kontexte": ["Bestandsanalyse", "Neugeschäft", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
      "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du vergleichst Neugeschäft für denselben Zeitraum.

## Schritte

1. Markierte Datumstabelle und aktive Datumsbeziehung verwenden.
2. Verschiebung auf der Datumsspalte berechnen.
3. Schaltjahre, Monatsenden und unvollständige Zeiträume mit kleinen Beispielen prüfen.

## Beispiel

```dax
Neugeschaeft VJ = CALCULATE ( [Neugeschaeft],
 DATEADD ( Demo_Datum[Date], -1, YEAR ) )
```

## Typischer Fehler

Bei klassischer datumsspaltenbasierter DATEADD-Logik eine nicht zusammenhängende Auswahl verwenden; Kalender-basierte Varianten können anders arbeiten.
