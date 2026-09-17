---
{
  "id": "dax-coalesce",
  "slug": "dax-coalesce",
  "titel": "COALESCE und ISBLANK: fehlende Ergebnisse behandeln",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ISBLANK prüft auf ein leeres Ergebnis. COALESCE liefert den ersten nichtleeren Ausdruck. Ersetze BLANK nur mit fachlicher Begründung.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["COALESCE und ISBLANK: fehlende Ergebnisse behandeln"],
  "synonyme": ["coalesce", "isblank", "nullwerte dax"],
  "verwandteThemen": ["blank", "dax-if"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/coalesce-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Karte soll bei fehlenden Buchungen 0 zeigen, aber fehlende Daten müssen erkennbar bleiben.

## Schritte

1. Klären, ob BLANK „keine Buchung“ oder „unbekannt“ bedeutet.
2. ISBLANK für Kennzeichnung oder COALESCE für einen erlaubten Ersatz verwenden.
3. Nicht vorhandene Daten getrennt von echten Nullwerten testen.

## Beispiel

```dax
Anzeige = COALESCE ( [Neugeschaeft], 0 )
```

Nur verwenden, wenn keine Buchung fachlich tatsächlich 0 bedeutet.

## Typischer Fehler

Fehlende Daten mit Nullwerten kaschieren.
