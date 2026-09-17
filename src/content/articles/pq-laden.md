---
{
  "id": "pq-laden",
  "slug": "pq-laden",
  "titel": "Laden einer Hilfsabfrage steuern",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lade nur benötigte Ergebnistabellen. Eine Hilfsabfrage kann weiterhin andere Abfragen versorgen.",
  "ort": "Power Query → Abfragekontextmenü / Excel: Laden in",
  "tags": ["Laden einer Hilfsabfrage steuern"],
  "synonyme": ["laden deaktivieren", "nur verbindung"],
  "verwandteThemen": ["pq-duplizieren", "power-query"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Zwischenschritte erscheinen unnötig im Datenmodell oder als Excel-Blätter.

## Schritte

1. Abhängigkeiten prüfen: Welche Ergebnistabellen verwenden die Abfrage?
2. Power BI: Laden aktivieren im Abfragekontextmenü deaktivieren; Excel: Laden in → Nur Verbindung wählen.
3. Aktualisierung und abhängige Ergebnisse anschließend testen.

## Beispiel

Basis_Konten bleibt Hilfsabfrage; Konten_Je_Person wird als Ergebnis geladen.

## Typischer Fehler

Laden deaktivieren mit „wird nie mehr ausgeführt“ verwechseln; abhängige Abfragen benötigen die Basis weiter.
