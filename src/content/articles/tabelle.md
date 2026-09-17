---
{
  "id": "tabelle",
  "slug": "tabelle",
  "titel": "Tabelle: Details prüfen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Tabelle zeigt Felder nebeneinander und eignet sich zur Kontrolle von Detailwerten.",
  "ort": "Power BI → Berichtsansicht → Tabellenvisual",
  "tags": ["Tabelle: Details prüfen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["granularitaet", "matrix"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-tabelle.webp",
        "alt": "Tabelle: vier Personen mit zusammen 9.000 Bestand.",
        "caption": "Tabelle: vier Personen mit zusammen 9.000 Bestand.",
        "schritt": 3,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du willst einzelne Konten und Beträge nachvollziehen.

## Schritte

1. Schlüssel und gewünschte Attribute hinzufügen.
2. Bei Zahlen die beabsichtigte Zusammenfassung prüfen.
3. Zeilenebene und Kontrollsumme vergleichen.

## Beispiel

KONTO_ID, STICHTAG und BESTAND_EUR für drei synthetische Konten zeigen.

## Typischer Fehler

Ohne eindeutigen Schlüssel können gleiche Merkmalskombinationen verdichtet erscheinen.
