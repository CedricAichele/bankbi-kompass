---
{
  "id": "ida-filter-pruefen",
  "slug": "ida-filter-pruefen",
  "titel": "Filterlogik prüfen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe jeden Filter mit einer kleinen Wahrheitstabelle und bekannten Grenzfällen.",
  "ort": "IDA / Reporting: synthetische Kontrollliste",
  "tags": ["Filterlogik prüfen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-bedingungen", "ida-null"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Das Ergebnis enthält unerwartete oder zu wenige Zeilen.

## Schritte

1. Einzelbedingungen separat testen.
2. UND/ODER und Klammern kontrollieren.
3. NULL, Grenzwert, fehlenden Schlüssel und leere Auswahl ergänzen.

## Beispiel

Für Betrag > 0: −1 → nein, 0 → nein, 1 → ja; NULL muss eine ausdrücklich definierte Behandlung haben.

## Typischer Fehler

Nur positive Beispieldaten testen und Grenzfälle auslassen.
