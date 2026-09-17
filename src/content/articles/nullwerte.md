---
{
  "id": "nullwerte",
  "slug": "nullwerte",
  "titel": "Nullwerte behandeln",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Null bedeutet fehlend. Ersetze es nur durch 0, wenn „fehlend“ fachlich wirklich „kein Betrag“ bedeutet.",
  "ort": "Power Query → Spaltenfilter / benutzerdefinierte Spalte",
  "tags": ["Nullwerte behandeln", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["datenbereinigung", "ida-null"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Importierte Spalten enthalten leere Kennungen oder Beträge.

## Schritte

1. Null, leeren Text und Fehler getrennt prüfen.
2. Fachregel für den Ersatz festlegen.
3. Fehlende Werte separat zählen und Ergebnis kontrollieren.

## Beispiel

```m
if [BETRAG_EUR] = null then "Fehlt" else "Vorhanden"
```

## Typischer Fehler

Eine Null-Ersetzung kann den Durchschnitt verändern und fehlende Lieferungen verstecken.
