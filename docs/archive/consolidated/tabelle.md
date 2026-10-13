---
{
  "id": "tabelle",
  "slug": "tabelle",
  "titel": "Tabelle: Details prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Tabelle zeigt Felder nebeneinander und eignet sich zur Kontrolle von Detailwerten.",
  "ort": "Power BI → Berichtsansicht → Tabellenvisual",
  "tags": [
    "Tabelle: Details prüfen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "granularitaet",
    "matrix",
    "power-bi-csv-export"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-tables"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-tabelle.webp",
      "alt": "Tabelle: vier Personen mit zusammen 9.000 Bestand.",
      "caption": "Ersatzaufnahme: Power BI – Tabelle: Details prüfen",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Sehr kleine Aufnahme mit Personenaggregation statt der beschriebenen Kontendetails. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Sehr kleine Aufnahme mit Personenaggregation statt der beschriebenen Kontendetails.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Tabelle: Details prüfen",
        "klickfolge": [
          "Freie Berichtsfläche → Tabelle. Ziehe Konto und Bestand in die Spalten. Prüfe im Feldmenü von Bestand die gewünschte Zusammenfassung und ergänze bei mehreren Stichtagen das Datum.",
          "Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.",
          "Kontrolliere am Beispiel die Darstellung: **Drei Kontenzeilen und Gesamtsumme 3500.**"
        ],
        "daten": "| Ausgangswerte |\n| --- |\n| K001: 1000; K002: 2000; K003: 500 |",
        "sichtbar": [
          "Tabelle: Details prüfen",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "pbi-tabelle.webp",
        "zweck": "Sehr kleine Aufnahme mit Personenaggregation statt der beschriebenen Kontendetails.",
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

Du willst einzelne Konten und Beträge nachvollziehen.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## CSV in Excel weiterverwenden

[Tabelle als CSV exportieren und in Excel korrekt öffnen](#/wissen/power-bi-csv-export) erklärt den passenden Klickweg. Bei einer CSV in nur einer Spalte zuerst das Trennzeichen korrigieren, dann Kennungen, Beträge und Datum prüfen.

## Schritte

1. Freie Berichtsfläche → Tabelle. Ziehe Konto und Bestand in die Spalten. Prüfe im Feldmenü von Bestand die gewünschte Zusammenfassung und ergänze bei mehreren Stichtagen das Datum.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Drei Kontenzeilen und Gesamtsumme 3500.**
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| K001: 1000; K002: 2000; K003: 500 |

### Aktion

Freie Berichtsfläche → Tabelle. Ziehe Konto und Bestand in die Spalten. Prüfe im Feldmenü von Bestand die gewünschte Zusammenfassung und ergänze bei mehreren Stichtagen das Datum.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Drei Kontenzeilen und Gesamtsumme 3500. |

## Ergebnis

Eine Tabelle zeigt Felder nebeneinander und eignet sich zur Kontrolle von Detailwerten.

## Warum funktioniert das?

Ein Tabellenvisual gruppiert nach den sichtbaren Kategorien. Ein eindeutiger Kontoschlüssel macht die beabsichtigte Detailtiefe sichtbar.

## Typischer Fehler

Ohne eindeutigen Schlüssel können gleiche Merkmalskombinationen verdichtet erscheinen.

## Plausibilitätscheck

Drei Kontenzeilen und Gesamtsumme 3500.
