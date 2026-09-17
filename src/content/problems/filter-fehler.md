---
{
  "id": "filter-fehler",
  "slug": "filter-fehler",
  "titel": "Filter funktioniert nicht",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Filter braucht einen wirksamen Modellweg und die vorgesehene Visualinteraktion.",
  "ort": "Power BI → Modellansicht, Filterbereich, Interaktionen",
  "tags": ["Filter funktioniert nicht", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen":
    ["beziehungen", "filterrichtung", "visualinteraktionen", "calculate"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Slicer verändert die Zahl nicht oder liefert unerwartet BLANK.

## Schritte

1. Aktive Beziehung und Filterrichtung prüfen.
2. Mit einfachem SUM statt komplexem Measure testen.
3. Interaktionen und CALCULATE / REMOVEFILTERS im Measure kontrollieren.

## Beispiel

Slicer aus Demo_Produkt → aktive 1:n-Beziehung → Demo_Bestand → SUM. Fehlt der Filterweg, bleibt die Summe unverändert.

## Typischer Fehler

Bidirektionale Beziehungen einschalten, ohne die Ursache zu kennen.
