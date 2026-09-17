---
{
  "id": "datenbereinigung",
  "slug": "datenbereinigung",
  "titel": "Datentyp ändern / Daten bereinigen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Setze Datentypen ausdrücklich: Schlüssel häufig als Text, Stichtage als Datum und Beträge als passende Zahl.",
  "ort": "Power Query → Typsymbol links am Spaltennamen",
  "tags": ["Datentyp ändern / Daten bereinigen", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["nullwerte", "dubletten"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-datentyp.webp",
        "alt": "Datentyp über das Symbol am Spaltenkopf auswählen.",
        "caption": "Datentyp über das Symbol am Spaltenkopf auswählen.",
        "schritt": 1,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Eine Summe, Sortierung oder Beziehung liefert unerwartete Ergebnisse.

## Schritte

1. Spalte auswählen und passenden Datentyp setzen.
2. Bei fremden Datums- oder Zahlenformaten „Mit Gebietsschema“ verwenden.
3. Fehlerzeilen und bekannte Testwerte kontrollieren.

## Beispiel

Text „0012“ bleibt eine Kennung mit führenden Nullen. Der Text „1.234,50“ wird mit deutschem Gebietsschema zur Zahl 1234,50.

## Typischer Fehler

Die Anzeigeformatierung mit dem Datentyp verwechseln. Null ist nicht automatisch 0.
