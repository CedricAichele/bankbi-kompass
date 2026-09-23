---
{
  "id": "drilldown",
  "slug": "drilldown",
  "titel": "Drilldown: Detailstufe wechseln",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Drilldown wechselt innerhalb einer Hierarchie von einer Übersicht zur nächsten Detailstufe.",
  "ort": "Power BI → Visual mit Hierarchie → Drill-Steuerelemente",
  "tags": [
    "Drilldown: Detailstufe wechseln",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "matrix",
    "datumstabelle"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/consumer/end-user-drill"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du willst vom Jahr über Quartal zum Monat wechseln.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Säulenvisual markieren. Lege Jahr, Quartal und Monat in dieser Reihenfolge auf die X-Achse. Aktiviere im Visualkopf den Drilldown-Modus und wähle ein Jahr.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Innerhalb 2026 werden die tieferen Ebenen angezeigt; Q1 ergibt 37.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| 2026: Januar 10, Februar 15, März 12 |

### Aktion

Säulenvisual markieren. Lege Jahr, Quartal und Monat in dieser Reihenfolge auf die X-Achse. Aktiviere im Visualkopf den Drilldown-Modus und wähle ein Jahr.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Innerhalb 2026 werden die tieferen Ebenen angezeigt; Q1 ergibt 37. |

## Ergebnis

Drilldown wechselt innerhalb einer Hierarchie von einer Übersicht zur nächsten Detailstufe.

## Warum funktioniert das?

Drilldown verändert die angezeigte Hierarchiestufe und erhält je nach Aktion den ausgewählten übergeordneten Kontext.

## Typischer Fehler

Drilldown nicht mit Drillthrough verwechseln: Drillthrough führt auf eine andere Detailseite.

## Plausibilitätscheck

Innerhalb 2026 werden die tieferen Ebenen angezeigt; Q1 ergibt 37.
