---
{
  "id": "excel-monatsende",
  "slug": "excel-monatsende",
  "titel": "MONATSENDE und HEUTE",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Datum",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MONATSENDE bestimmt den letzten Kalendertag eines Monats. HEUTE liefert das aktuelle Systemdatum, keinen Datenstand.",
  "ort": "Excel → Formelzelle",
  "tags": ["MONATSENDE und HEUTE"],
  "synonyme": ["monatsende", "heute"],
  "verwandteThemen": ["monatsultimo", "aktueller-stichtag"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-DE/Excel/excel-functions-alphabetical"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst einen Monatsabschluss-Stichtag.

## Schritte

1. Ausgangsdatum fachlich festlegen.
2. MONATSENDE mit 0 oder einem Monatsversatz verwenden.
3. Den resultierenden Stichtag mit verfügbaren Daten abgleichen.

## Beispiel

```excel
=MONATSENDE(DATUM(2026;3;17);0)
=HEUTE()
```

Die erste Formel liefert 31.03.2026.

## Typischer Fehler

Einen noch nicht vorliegenden Monatsendbestand mit dem aktuellen Systemdatum beschriften.
