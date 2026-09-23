---
{
  "id": "visual-sortieren",
  "slug": "visual-sortieren",
  "titel": "Visual nach Wert oder Kategorie sortieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Sortierung eines Visuals und die Sortierspalte im Modell erfüllen unterschiedliche Aufgaben.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "Visual nach Wert oder Kategorie sortieren"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datum-sortieren",
    "balkendiagramm"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-sort-by-column"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Geschäftsstellen sollen nach Volumen, Monate chronologisch stehen.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Visual markieren → Drei-Punkte-Menü (…) → Achse sortieren beziehungsweise Sortieren nach. Wähle Betrag und Absteigend. Für Monatsnamen: Feld markieren → Spaltentools → Nach Spalte sortieren → Monatsnummer.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Absteigend: B vor A.**
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A: 100; B: 200 |

### Aktion

Visual markieren → Drei-Punkte-Menü (…) → Achse sortieren beziehungsweise Sortieren nach. Wähle Betrag und Absteigend. Für Monatsnamen: Feld markieren → Spaltentools → Nach Spalte sortieren → Monatsnummer.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Absteigend: B vor A. |

## Ergebnis

Die Sortierung eines Visuals und die Sortierspalte im Modell erfüllen unterschiedliche Aufgaben.

## Warum funktioniert das?

Die Sortierung ändert die Reihenfolge, nicht die Werte. Monatsnamen benötigen eine fachliche Sortierreihenfolge, weil alphabetische Ordnung keine Chronologie ist.

## Typischer Fehler

Eine Rangsortierung mit chronologischer Darstellung vermischen.

## Plausibilitätscheck

Absteigend: B vor A.
