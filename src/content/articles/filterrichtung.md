---
{
  "id": "filterrichtung",
  "slug": "filterrichtung",
  "titel": "Filterrichtung verstehen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Filterrichtung legt fest, ob eine Auswahl von einer Tabelle zur anderen weitergegeben wird.",
  "ort": "Power BI → Modellansicht → Beziehung bearbeiten",
  "tags": ["Filterrichtung verstehen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["filterkontext", "filter-fehler", "star-schema"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Slicer zeigt Werte, verändert die Kennzahl aber nicht.

## Schritte

1. Dimension und Faktentabelle identifizieren.
2. Im einfachen Sternschema eine Richtung von Dimension zu Fakten verwenden.
3. Slicer mit einem normalen SUM-Measure prüfen.

## Beispiel

Auswahl der Produktgruppe A in Demo_Produkt begrenzt Demo_Bestand auf passende PRODUKT_ID-Werte.

## Typischer Fehler

Bidirektionale Filter ohne Prüfung einschalten: Mehrere Filterwege können Mehrdeutigkeit schaffen.
