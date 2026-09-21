---
{
  "id": "karte",
  "slug": "karte",
  "titel": "Karte: eine Kennzahl anzeigen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Karte zeigt einen einzelnen Kennzahlenwert mit eindeutiger Einheit und Zeitraum.",
  "ort": "Power BI → Berichtsansicht → Kartenvisual",
  "tags": [
    "Karte: eine Kennzahl anzeigen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "stichtag",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-card"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-karte.webp",
      "alt": "Die Karte zeigt den synthetischen Gesamtbestand 9.000 als 9 Tsd.",
      "caption": "Ersatzaufnahme: Power BI – Karte: eine Kennzahl anzeigen",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Sehr kleine Aufnahme ohne Feldzuweisung; abweichender Beispielwert 9 Tsd. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Sehr kleine Aufnahme ohne Feldzuweisung; abweichender Beispielwert 9 Tsd.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Karte: eine Kennzahl anzeigen",
        "klickfolge": [
          "Freie Berichtsfläche → Visualisierungen → Karte. Ziehe eine vorhandene Kennzahl in das Wertefeld. Unter Visual formatieren Titel, Anzeigeeinheit und Dezimalstellen setzen.",
          "Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.",
          "Kontrolliere am Beispiel die Darstellung: **Karte Gesamtbestand: 3500.**."
        ],
        "daten": "| Ausgangswerte |\n| --- |\n| K001: 1000; K002: 2000; K003: 500 |",
        "sichtbar": [
          "Karte: eine Kennzahl anzeigen",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "pbi-karte.webp",
        "zweck": "Sehr kleine Aufnahme ohne Feldzuweisung; abweichender Beispielwert 9 Tsd.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmensdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst eine schnelle Bestands- oder Planerreichungsanzeige.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Freie Berichtsfläche → Visualisierungen → Karte. Ziehe eine vorhandene Kennzahl in das Wertefeld. Unter Visual formatieren Titel, Anzeigeeinheit und Dezimalstellen setzen.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Karte Gesamtbestand: 3500.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| K001: 1000; K002: 2000; K003: 500 |

### Aktion

Freie Berichtsfläche → Visualisierungen → Karte. Ziehe eine vorhandene Kennzahl in das Wertefeld. Unter Visual formatieren Titel, Anzeigeeinheit und Dezimalstellen setzen.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Karte Gesamtbestand: 3500. |

## Ergebnis

Eine Karte zeigt einen einzelnen Kennzahlenwert mit eindeutiger Einheit und Zeitraum.

## Warum funktioniert das?

Eine Karte wertet die Kennzahl einmal im aktuellen Berichtskontext aus. Ohne zusätzliche Gruppen entsteht genau ein angezeigter Wert.

## Typischer Fehler

Eine Karte über mehrere Snapshots summieren, obwohl „aktueller Bestand“ gemeint ist.

## Plausibilitätscheck

Karte Gesamtbestand: 3500.
