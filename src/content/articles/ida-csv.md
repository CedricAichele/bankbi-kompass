---
{
  "id": "ida-csv",
  "slug": "ida-csv",
  "titel": "CSV für die Weiterverarbeitung",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Ausgabe",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "CSV enthält getrennte Textwerte, aber keine verlässlichen Zelltypen oder Excel-Formatierungen.",
  "ort": "IDA / Reporting: Exportprinzip · Excel: Daten → Aus Text/CSV",
  "tags": ["CSV für die Weiterverarbeitung", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-formate", "daten-laden"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst einen einfachen, flachen Datenaustausch.

## Schritte

1. Trennzeichen und Zeichenkodierung klären.
2. CSV über den Importdialog öffnen und Typen explizit setzen.
3. Umlaute, führende Nullen und Datumswerte prüfen.

## Beispiel

„0012;31.03.2026;1234,50“ benötigt Text, Datum und Zahl mit passendem Gebietsschema.

## Typischer Fehler

CSV per Doppelklick öffnen und automatische Typinterpretationen ungeprüft akzeptieren.
