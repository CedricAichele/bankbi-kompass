---
{
  "id": "bedingte-formatierung",
  "slug": "bedingte-formatierung",
  "titel": "Bedingte Formatierung verwenden",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Farben oder Symbole kennzeichnen fachlich definierte Abweichungen.",
  "ort": "Power BI → Formatbereich des Visuals → passende Eigenschaft / fx",
  "tags": [
    "Bedingte Formatierung verwenden",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "plan-ist",
    "datenbeschriftungen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Plan-Ist-Unterschiede sollen direkt auffallen.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Tabelle oder Matrix markieren → Menü am numerischen Wertefeld → Bedingte Formatierung → Symbole. Wähle Regeln für Werte kleiner 0 und ab 0; lasse die Zahl zusätzlich sichtbar.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **-20 erhält die definierte Negativmarkierung; 0 und 30 nicht.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Abweichungen -20, 0, 30 |

### Aktion

Tabelle oder Matrix markieren → Menü am numerischen Wertefeld → Bedingte Formatierung → Symbole. Wähle Regeln für Werte kleiner 0 und ab 0; lasse die Zahl zusätzlich sichtbar.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| -20 erhält die definierte Negativmarkierung; 0 und 30 nicht. |

## Ergebnis

Farben oder Symbole kennzeichnen fachlich definierte Abweichungen.

## Warum funktioniert das?

Eine Regel übersetzt einen numerischen Wert in eine zusätzliche visuelle Bedeutung. Die fachliche Bedeutung von negativ muss zuvor feststehen.

## Typischer Fehler

Nur Rot/Grün verwenden oder pauschal jedes negative Ergebnis als schlecht einstufen. Verfügbarkeit und Position hängen vom Visual ab.

## Plausibilitätscheck

-20 erhält die definierte Negativmarkierung; 0 und 30 nicht.
