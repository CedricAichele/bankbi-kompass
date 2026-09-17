---
{
  "id": "ida-performance",
  "slug": "ida-performance",
  "titel": "Langsame Liste eingrenzen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berichtsbetrieb",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Begrenze unnötige Daten und prüfe Zeilenvermehrung, bevor du Berechnungen optimierst.",
  "ort": "Allgemeines Berichtsbetriebsprinzip; konkrete IDA-Menüs und Abläufe TODO",
  "tags": ["Langsame Liste eingrenzen"],
  "synonyme": ["performance", "bericht langsam"],
  "verwandteThemen": ["ida-mehrere-joins", "ida-filterebene"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Bericht wird nach einer zusätzlichen Verknüpfung langsam.

## Schritte

1. Mit kleiner repräsentativer Auswahl Laufzeit und Zeilenzahl vergleichen.
2. Nicht benötigte Detailspalten und ungewollte Join-Vermehrung prüfen.
3. Fachlich zulässige Filter früh anwenden; Ergebnis und Export gegenprüfen.

## Beispiel

2 Konten × 3 Vorgänge erzeugen 6 statt der erwarteten 2 Zeilen und zusätzliche Rechenarbeit.

## Typischer Fehler

Für Geschwindigkeit benötigte Daten oder Prüfschritte entfernen.
