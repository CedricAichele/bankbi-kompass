---
{
  "id": "datumstabelle",
  "slug": "datumstabelle",
  "titel": "Eine verlässliche Datumstabelle",
  "bereich": "Power BI",
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine lückenlose Datumstabelle schafft eine gemeinsame Zeitachse für Monatsauswertungen, Vorjahresvergleiche und YTD.",
  "tags": ["Kalender", "Datum falsch sortiert", "Monatsultimo"],
  "synonyme": ["Kalender", "Datum falsch sortiert", "Monatsultimo"],
  "verwandteThemen": ["vorjahr", "ytd", "stichtag"],
  "prozessBezug": [],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Eine Datumstabelle enthält jeden Kalendertag genau einmal, auch Tage ohne Geschäft. So können Auswertungen mit einer vollständigen Zeitachse arbeiten.

## Einfaches Beispiel

```dax
Demo_Datum =
CALENDAR ( DATE ( 2025, 1, 1 ), DATE ( 2026, 12, 31 ) )
```

CALENDAR erzeugt die Spalte Date. Verwende sie in den Zeitbeispielen dieser Bibliothek. Ergänze Jahr, Monatsnummer, Monatsname und einen Jahr-Monat-Schlüssel.

## Einrichtung

Für die hier gezeigte klassische Zeitintelligenz markierst du die Tabelle als Datumstabelle und wählst Date. Verbinde sie aktiv mit dem Datum der Faktentabelle. Die Datumsspalte muss eindeutige, nichtleere, lückenlose Datumswerte enthalten. Decke vollständige Jahre und alle benötigten Faktendaten ab.

## Monat richtig sortieren

Sortiere Monatsname nach Monatsnummer. Für eine mehrjährige Zeitreihe nutze zusätzlich Jahr oder einen eindeutig sortierten Jahr-Monat-Schlüssel. „Januar“ allein fasst sonst verschiedene Jahre zusammen.

## Typischer Fehler

Ein Datum mit Uhrzeit in den Fakten trifft nicht auf ein reines Datum mit Mitternacht. Bereite bei Bedarf eine eigene Datumsspalte ohne Uhrzeit vor.

## Wenn du aus Excel kommst

Eine Liste nur der vorhandenen Stichtage genügt nicht für alle Zeitberechnungen. Die gemeinsame Datumstabelle ist eine eigene Modelldimension.

## Öffentliche Quelle

[Microsoft Learn: Datumstabellen](https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables)
