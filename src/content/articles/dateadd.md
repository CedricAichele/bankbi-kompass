---
{
  "id": "dateadd",
  "slug": "dateadd",
  "titel": "DATEADD und SAMEPERIODLASTYEAR",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DATEADD verschiebt die aktuelle Datumsauswahl; SAMEPERIODLASTYEAR liefert bei klassischer Datumslogik die entsprechende Vorjahresauswahl.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "DATEADD und SAMEPERIODLASTYEAR"
  ],
  "synonyme": [
    "sameperiodlastyear",
    "dateadd",
    "vorjahreswert"
  ],
  "verwandteThemen": [
    "vorjahr",
    "datumstabelle",
    "pq-datum",
    "ytd"
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
    "https://learn.microsoft.com/en-us/dax/dateadd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du vergleichst Neugeschäft für denselben Zeitraum.

## Schritte

1. Prüfe Datenzeitraum, Datumstyp und benötigte Zeilenebene. Kläre, ob eine Bewegung oder ein Bestand ausgewertet wird.
2. Markierte Datumstabelle und aktive Datumsbeziehung verwenden.
3. Verschiebung auf der Datumsspalte berechnen.
4. Schaltjahre, Monatsenden und unvollständige Zeiträume mit kleinen Beispielen prüfen.
5. Vergleiche mit dem Beispiel: Februar 2026: Neugeschäft 15; Vorjahres-Februar: 9.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Die Datumsauswahl um ein Jahr verschieben und die Basiskennzahl dort erneut berechnen.

```dax
Neugeschaeft VJ = CALCULATE ( [Neugeschaeft],
 DATEADD ( Demo_Datum[Date], -1, YEAR ) )
```

### Nachher · Beispielergebnis

Februar 2026: Neugeschäft 15; Vorjahres-Februar: 9.

## Typischer Fehler

Bei klassischer datumsspaltenbasierter DATEADD-Logik eine nicht zusammenhängende Auswahl verwenden; Kalender-basierte Varianten können anders arbeiten.

## Voraussetzungen

Ein vorhandenes Modell mit echten Datumswerten. Für klassische Zeitintelligenz eine vollständige, markierte Datumstabelle und aktive Beziehung zum Faktendatum verwenden.

## Ergebnis

DATEADD verschiebt die aktuelle Datumsauswahl; SAMEPERIODLASTYEAR liefert bei klassischer Datumslogik die entsprechende Vorjahresauswahl.

## Warum funktioniert das?

DATEADD liefert eine verschobene Datumsmenge; CALCULATE wertet die Kennzahl in diesem veränderten Kalenderkontext aus.

## Plausibilitätscheck

Februar 2026: Neugeschäft 15; Vorjahres-Februar: 9. Prüfe außerdem einen Zeitraum ohne Daten.
