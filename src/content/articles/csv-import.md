---
{
  "id": "csv-import",
  "slug": "csv-import",
  "titel": "CSV korrekt importieren",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lade CSV über den Importdialog und prüfe Trennzeichen, Zeichencodierung und Datentypen.",
  "ort": "Power BI: Daten abrufen → Text/CSV · Excel: Daten → Aus Text/CSV",
  "tags": ["CSV korrekt importieren"],
  "synonyme": ["csv", "csv öffnen", "csv korrekt laden"],
  "verwandteThemen": ["datenbereinigung", "excel-zahl-text", "ida-csv"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-csv-import.webp",
        "alt": "CSV-Vorschau: UTF-8 und Semikolon trennen die fünf Spalten korrekt.",
        "caption": "CSV-Vorschau: UTF-8 und Semikolon trennen die fünf Spalten korrekt.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Führende Nullen, Umlaute oder Dezimalzahlen kommen falsch an.

## Schritte

1. Text/CSV als Datenquelle wählen; Vorschau auf Spalten und Umlaute prüfen.
2. Transformieren öffnen; Kennungen als Text, Beträge mit passendem Gebietsschema typisieren.
3. Zeilenzahl und Kontrollsumme mit dem erwarteten Ergebnis vergleichen.

## Beispiel

Kennung 00123 bleibt Text. Der deutsche Betrag 1.250,50 muss als Zahl 1250,50 ankommen.

## Typischer Fehler

Doppelklick auf CSV kann Kennungen und Datumswerte bereits falsch interpretieren.
