---
{
  "id": "balkendiagramm",
  "slug": "balkendiagramm",
  "titel": "Balkendiagramm: Kategorien vergleichen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Balken machen Größenunterschiede zwischen Kategorien schnell sichtbar.",
  "ort": "Power BI → Berichtsansicht → Balkendiagramm",
  "tags": [
    "Balkendiagramm: Kategorien vergleichen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datenbeschriftungen",
    "bedingte-formatierung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-excel-stunning-report"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-balken.webp",
      "alt": "Absteigender Vergleich: P003 hat mit 4.000 den höchsten Demo-Bestand.",
      "caption": "Ersatzaufnahme: Power BI – Balkendiagramm: Kategorien vergleichen",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Sehr kleine Aufnahme, Achsen und Werte kaum lesbar; Feldzuweisung fehlt. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Sehr kleine Aufnahme, Achsen und Werte kaum lesbar; Feldzuweisung fehlt.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Balkendiagramm: Kategorien vergleichen",
        "klickfolge": [
          "Freie Berichtsfläche → Visualisierungen → Gruppiertes Balkendiagramm. Ziehe Segment auf die Y-Achse und die Betragssumme auf die X-Achse.",
          "Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.",
          "Kontrolliere am Beispiel die Darstellung: **Zwei horizontale Balken mit Längen 120 und 80.**."
        ],
        "daten": "| Ausgangswerte |\n| --- |\n| Segment A: 120; B: 80 |",
        "sichtbar": [
          "Balkendiagramm: Kategorien vergleichen",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "pbi-balken.webp",
        "zweck": "Sehr kleine Aufnahme, Achsen und Werte kaum lesbar; Feldzuweisung fehlt.",
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

Du vergleichst Bestände je Produktgruppe.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Freie Berichtsfläche → Visualisierungen → Gruppiertes Balkendiagramm. Ziehe Segment auf die Y-Achse und die Betragssumme auf die X-Achse.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Zwei horizontale Balken mit Längen 120 und 80.**.
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Segment A: 120; B: 80 |

### Aktion

Freie Berichtsfläche → Visualisierungen → Gruppiertes Balkendiagramm. Ziehe Segment auf die Y-Achse und die Betragssumme auf die X-Achse.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Zwei horizontale Balken mit Längen 120 und 80. |

## Ergebnis

Balken machen Größenunterschiede zwischen Kategorien schnell sichtbar.

## Warum funktioniert das?

Eine gemeinsame, bei 0 beginnende Wertachse macht Längen als Mengenvergleich interpretierbar.

## Typischer Fehler

Abgeschnittene Skalen übertreiben Unterschiede. Viele Kategorien erschweren den Vergleich.

## Plausibilitätscheck

Zwei horizontale Balken mit Längen 120 und 80.
