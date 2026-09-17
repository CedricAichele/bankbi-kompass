---
{
  "id": "gruppieren",
  "slug": "gruppieren",
  "titel": "Gruppieren: Werte je Schlüssel zusammenfassen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Gruppieren erzeugt eine Zeile je Schlüsselkombination und berechnet dazu passende Aggregationen.",
  "ort": "Power Query → Start → Gruppieren nach",
  "tags": ["Gruppieren: Werte je Schlüssel zusammenfassen", "Reporting"],
  "synonyme": ["eine Zeile je Person"],
  "verwandteThemen": ["eine-zeile-je-person", "granularitaet"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/power-query/group-by"],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-gruppieren.webp",
        "alt": "Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen.",
        "caption": "Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst eine Summe je Person, Produkt oder Vorgang statt Einzelzeilen.

## Schritte

1. Gruppierungsschlüssel wählen; bei Beständen Stichtag einschließen.
2. Operation und Wertspalte festlegen, z. B. Summe von BESTAND_EUR.
3. Kontrollsumme und Anzahl der Gruppen prüfen.

## Beispiel

P001: 120 + 80 Euro am selben Stichtag → eine Zeile mit 200 Euro. P002: 50 Euro → eine Zeile mit 50 Euro.

## Typischer Fehler

Wichtige Details gehen in der verdichteten Ergebnistabelle verloren. Bei späterem Detailbedarf die Ausgangsabfrage behalten.
