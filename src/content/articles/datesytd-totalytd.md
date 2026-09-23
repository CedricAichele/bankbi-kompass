---
{
  "id": "datesytd-totalytd",
  "slug": "datesytd-totalytd",
  "titel": "DATESYTD oder TOTALYTD",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DATESYTD liefert eine Datumsauswahl seit Jahresbeginn; TOTALYTD wertet einen Ausdruck für diese Auswahl aus.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "DATESYTD oder TOTALYTD"
  ],
  "synonyme": [
    "datesytd",
    "totalytd",
    "DATESYTD oder TOTALYTD"
  ],
  "verwandteThemen": [
    "ytd",
    "bestand-bewegung",
    "datumstabelle",
    "pq-datum",
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
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/datesytd-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du möchtest Neugeschäft seit Jahresbeginn kumulieren.

## Schritte

1. Prüfe Datenzeitraum, Datumstyp und benötigte Zeilenebene. Kläre, ob eine Bewegung oder ein Bestand ausgewertet wird.
2. Additives Basismeasure für Neugeschäft definieren.
3. Eine markierte, lückenlose Datumstabelle aktiv mit dem Buchungsdatum verbinden.
4. TOTALYTD oder CALCULATE mit DATESYTD einsetzen und Monatswerte gegenrechnen.
5. Vergleiche mit dem Beispiel: Februar 2026: YTD 10 + 15 = 25.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Neugeschäft seit Jahresbeginn bis zum gewählten Tagesende berechnen.

```dax
Neugeschaeft YTD = TOTALYTD ( [Neugeschaeft], Demo_Datum[Date] )
```

Januar 10, Februar 15 → Februar-YTD 25.

### Nachher · Beispielergebnis

Februar 2026: YTD 10 + 15 = 25.

## Typischer Fehler

Bestände kumulieren oder unvollständige Daten mit einem vollständigen Vorjahr vergleichen.

## Voraussetzungen

Ein vorhandenes Modell mit echten Datumswerten. Für klassische Zeitintelligenz eine vollständige, markierte Datumstabelle und aktive Beziehung zum Faktendatum verwenden.

## Ergebnis

DATESYTD liefert eine Datumsauswahl seit Jahresbeginn; TOTALYTD wertet einen Ausdruck für diese Auswahl aus.

## Warum funktioniert das?

DATESYTD liefert die Datumsmenge, TOTALYTD wertet einen Ausdruck innerhalb dieser Jahresmenge aus. Beide benötigen einen passenden Kalender und eine additive Basiskennzahl.

## Plausibilitätscheck

Februar 2026: YTD 10 + 15 = 25. Prüfe außerdem einen Zeitraum ohne Daten.
