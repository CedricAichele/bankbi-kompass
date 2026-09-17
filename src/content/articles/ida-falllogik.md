---
{
  "id": "ida-falllogik",
  "slug": "ida-falllogik",
  "titel": "Bedingte Berechnung: CASE-/IF-Prinzip",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine bedingte Berechnung ordnet Werte anhand festgelegter Regeln zu. Syntax und verfügbare Funktionen hängen vom Reportingkontext ab.",
  "ort": "Generische Falllogik; konkrete IDA-Funktion TODO",
  "tags": ["Bedingte Berechnung: CASE-/IF-Prinzip"],
  "synonyme": ["case", "if reporting"],
  "verwandteThemen": ["ida-extrema", "ida-null"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine verständliche Statusklasse.

## Schritte

1. Bedingungen in fachlicher Reihenfolge aufschreiben.
2. Fehlende Werte sowie einen Restfall definieren.
3. Mit Grenzfällen prüfen; konkrete Syntax nur nach öffentlichem Beleg einsetzen.

## Beispiel

Dauer fehlt → „Offen“; Dauer bis 3 Tage → „Kurz“; sonst → „Länger“.

## Typischer Fehler

MAX(Status) als letzte fachliche Entscheidung verwenden. Implementierbare IDA-Syntax bleibt TODO.
