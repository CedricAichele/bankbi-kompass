---
{
  "id": "datum-sortieren",
  "slug": "datum-sortieren",
  "titel": "Datum / Monat falsch sortiert",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Datentyp und Sortierspalte bestimmen die Reihenfolge; Monatsnamen allein reichen nicht.",
  "ort": "Power BI → Monatsnamenspalte → Spaltentools → Nach Spalte sortieren",
  "tags": ["Datum / Monat falsch sortiert", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["datumstabelle", "datenbereinigung"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

April steht vor Februar oder zwei Jahre werden vermischt.

## Schritte

1. Datumstyp und Gebietsschema prüfen.
2. Monatsname nach Monatsnummer sortieren.
3. Für mehrere Jahre einen eindeutigen Jahr-Monat-Schlüssel nutzen.

## Beispiel

„Jan 2026“, „Feb 2026“ werden nach 202601, 202602 sortiert.

## Typischer Fehler

Ein Monatsname darf nicht auf mehrere Sortierwerte verweisen; Jahr-Monat benötigt ein eigenes Label.
