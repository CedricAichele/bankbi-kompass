---
{
  "id": "begriff-etl",
  "slug": "begriff-etl",
  "titel": "ETL und Power Query",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Grundbegriffe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ETL steht für Extrahieren, Transformieren und Laden. Power Query kann solche Vorbereitungsschritte beschreiben.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "ETL und Power Query",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "power-query"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/power-query-ui"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Daten abrufen, Angewendete Schritte und Aktualisieren.

## Voraussetzungen

Kenntnis der fachlichen Bedeutung der Daten; keine bestimmte Beispieldatei erforderlich.

## Schritte

1. Beschreibe die Ausgangssituation: CSV enthält Konto als Text und Betrag als Zahlentext.
2. Extrahieren → Typen transformieren → Tabelle laden.
3. Prüfe die Unterscheidung am Ergebnis: Eine typisierte Modelltabelle; Quelle bleibt unverändert.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| CSV enthält Konto als Text und Betrag als Zahlentext. |

### Aktion

Extrahieren → Typen transformieren → Tabelle laden.

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| Eine typisierte Modelltabelle; Quelle bleibt unverändert. |

## Ergebnis

ETL steht für Extrahieren, Transformieren und Laden. Power Query kann solche Vorbereitungsschritte beschreiben.

## Warum funktioniert das?

ETL trennt die Beschaffung, Aufbereitung und Bereitstellung. Wiederverwendbare Transformationen ersetzen wiederholte manuelle Korrekturen.

## Typischer Fehler

Eine Vorschauänderung mit einer Änderung der Originaldatei verwechseln.

## Plausibilitätscheck

Eine typisierte Modelltabelle; Quelle bleibt unverändert.
