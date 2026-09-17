---
{
  "id": "pq-bedingt",
  "slug": "pq-bedingt",
  "titel": "Bedingte Spalte",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine bedingte Spalte ordnet Zeilen anhand geordneter Regeln eine Kategorie zu.",
  "ort": "Power Query → Spalte hinzufügen → Bedingte Spalte",
  "tags": ["Bedingte Spalte"],
  "synonyme": ["bedingte spalte"],
  "verwandteThemen": ["pq-benutzerdefiniert", "dax-switch"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://learn.microsoft.com/en-us/power-query/add-conditional-column"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du willst synthetische Betragsklassen vor dem Laden bilden.

## Schritte

1. Spalte hinzufügen → Bedingte Spalte öffnen.
2. Bedingungen in der gewünschten Reihenfolge festlegen.
3. Sonst-Fall sowie fehlende Werte ausdrücklich prüfen.

## Beispiel

Bestand ab 1000 → „Ab 1000“; darunter → „Unter 1000“. Fehlende Werte separat kennzeichnen.

## Typischer Fehler

Überlappende Regeln falsch anordnen: Der erste passende Fall gewinnt.
