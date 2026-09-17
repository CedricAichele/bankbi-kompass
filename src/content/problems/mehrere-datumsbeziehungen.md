---
{
  "id": "mehrere-datumsbeziehungen",
  "slug": "mehrere-datumsbeziehungen",
  "titel": "Mehrere Datumsbeziehungen prüfen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Startdatum und Enddatum sind unterschiedliche Rollen. Ein einzelner aktiver Filterweg erklärt nicht beide gleichzeitig.",
  "ort": "Power BI → Kontrolltabelle mit Stichtag, Schlüssel und Measure",
  "tags": ["Mehrere Datumsbeziehungen prüfen"],
  "synonyme": ["mehrere datumsbeziehungen"],
  "verwandteThemen": ["aktive-beziehung", "datumstabelle"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "problem",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Vorgang erscheint im falschen Monat.

## Schritte

1. Aktiven Beziehungspfad und verwendete Datumsachse prüfen.
2. Für alternative Rolle ein Measure mit USERELATIONSHIP verwenden.
3. Für gleichzeitige unabhängige Rollen getrennte Datumstabellen erwägen.

## Beispiel

Vorgang beginnt im Januar und endet im März; beide Monatsauswertungen können korrekt sein.

## Typischer Fehler

Rollen verwechseln oder unbemerkt Start- und Endmonat gleichzeitig einschränken.
