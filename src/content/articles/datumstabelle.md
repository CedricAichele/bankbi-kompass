---
{
  "id": "datumstabelle",
  "slug": "datumstabelle",
  "titel": "Datumstabelle erstellen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine vollständige Datumstabelle liefert eine gemeinsame Zeitachse für Vorjahr und YTD.",
  "ort": "Power BI → Modellierung → Neue Tabelle",
  "tags": ["Datumstabelle erstellen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["vorjahr", "ytd", "datum-sortieren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du berechnest zeitliche Vergleiche mit klassischer datumsbasierter DAX-Zeitintelligenz.

## Schritte

1. Kalender mit vollständigen Jahren anlegen.
2. Als Datumstabelle markieren; eindeutige, lückenlose Date-Spalte wählen.
3. Aktive Beziehung zum fachlichen Datum der Fakten erstellen.

## Beispiel

```dax
Demo_Datum = CALENDAR ( DATE ( 2025, 1, 1 ), DATE ( 2026, 12, 31 ) )
```

## Typischer Fehler

Zeitstempel mit Uhrzeit treffen nicht automatisch auf ein reines Kalenderdatum.
