---
{
  "id": "referenzlinie",
  "slug": "referenzlinie",
  "titel": "Referenzlinie im Diagramm",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Referenzlinie macht Ziel oder Vergleichswert sichtbar. Verfügbarkeit und Einstellungen hängen vom Visual ab.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Referenzlinie im Diagramm"
  ],
  "synonyme": [
    "referenzlinie",
    "ziellinie"
  ],
  "verwandteThemen": [
    "plan-ist",
    "liniendiagramm"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-analytics-pane"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Monatsziel soll neben dem Ist-Verlauf sichtbar sein.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Ein unterstütztes Säulen- oder Linienvisual markieren → Analysebereich → Konstante Linie hinzufügen. Setze Wert 100 und aktiviere die Beschriftung Ziel 100 EUR. Die verfügbaren Linien hängen vom Visual ab.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Januar liegt unter, Februar über der beschrifteten Linie bei 100.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Ist Januar 90, Februar 110; Ziel 100 |

### Aktion

Ein unterstütztes Säulen- oder Linienvisual markieren → Analysebereich → Konstante Linie hinzufügen. Setze Wert 100 und aktiviere die Beschriftung Ziel 100 EUR. Die verfügbaren Linien hängen vom Visual ab.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Januar liegt unter, Februar über der beschrifteten Linie bei 100. |

## Ergebnis

Eine Referenzlinie macht Ziel oder Vergleichswert sichtbar. Verfügbarkeit und Einstellungen hängen vom Visual ab.

## Warum funktioniert das?

Eine Referenzlinie bietet eine gemeinsame Vergleichsschwelle. Ein fest eingetragener Wert bleibt auch bei veränderten Filtern fest.

## Typischer Fehler

Eine konstante Jahreszahl als monatliches Ziel ausgeben.

## Plausibilitätscheck

Januar liegt unter, Februar über der beschrifteten Linie bei 100.
