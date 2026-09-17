---
{
  "id": "power-query",
  "slug": "power-query",
  "titel": "Power Query",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Power Query bereitet Daten beim Aktualisieren vor. Wähle die Transformation nach deinem Ziel: Spalten ergänzen, Zeilen stapeln oder Daten verdichten.",
  "ort": "Power BI: Daten transformieren · Excel: Daten → Abfragen & Verbindungen",
  "tags": ["Power Query", "Reporting"],
  "synonyme": ["mehrere Dateien zusammenführen"],
  "verwandteThemen": ["zusammenfuehren", "anhaengen", "gruppieren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-power-query.webp",
        "alt": "Power Query mit sechs synthetischen Kontenzeilen.",
        "caption": "Power Query mit sechs synthetischen Kontenzeilen.",
        "schritt": 1,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du wiederholst dieselbe Bereinigung bei jeder neuen Datei.

## Schritte

1. Abfrage öffnen und die gewünschte Spalte auswählen.
2. Passende Transformation anwenden.
3. Unter „Angewendete Schritte“ das Ergebnis kontrollieren.

## Beispiel

| Ziel                            | Funktion       |
| ------------------------------- | -------------- |
| Spalten über Schlüssel ergänzen | Zusammenführen |
| Zeilen untereinander setzen     | Anhängen       |
| Eine Zeile je Gruppe            | Gruppieren     |

## Typischer Fehler

Ein Slicer führt Power-Query-Schritte nicht erneut aus. Dynamische Kennzahlen gehören in Measures.
