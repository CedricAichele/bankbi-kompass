---
{
  "id": "pq-text",
  "slug": "pq-text",
  "titel": "Text in Power Query bereinigen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Trimmen entfernt äußere Leerzeichen; Bereinigen entfernt bestimmte nicht druckbare Zeichen. Prüfe geschützte Leerzeichen gesondert.",
  "ort": "Power Query → Transformieren → Format",
  "tags": ["Text in Power Query bereinigen"],
  "synonyme": ["text bereinigen power query"],
  "verwandteThemen": ["glaetten", "saeubern", "zusammenfuehren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-text-bereinigen.webp",
        "alt": "Das Format-Menü enthält Kürzen und Bereinigen.",
        "caption": "Das Format-Menü enthält Kürzen und Bereinigen.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Schlüssel sehen gleich aus, finden aber keinen Treffer.

## Schritte

1. Originalspalte für die Kontrolle erhalten.
2. Transformieren → Format → Trimmen beziehungsweise Bereinigen anwenden.
3. Problematische Sonderzeichen gezielt ersetzen und Join-Treffer prüfen.

## Beispiel

„ P001 “ wird „P001“. Ein geschütztes Leerzeichen ist nicht zuverlässig durch Standard-Trimmen beseitigt.

## Typischer Fehler

Groß-/Kleinschreibung oder Sonderzeichen ungeprüft gleichsetzen, obwohl sie fachlich relevant sind.
