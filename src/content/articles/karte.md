---
{
  "id": "karte",
  "slug": "karte",
  "titel": "Karte: eine Kennzahl anzeigen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Karte zeigt einen einzelnen Kennzahlenwert mit eindeutiger Einheit und Zeitraum.",
  "ort": "Power BI → Berichtsansicht → Kartenvisual",
  "tags": ["Karte: eine Kennzahl anzeigen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["stichtag", "measure"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-karte.webp",
        "alt": "Die Karte zeigt den synthetischen Gesamtbestand 9.000 als 9 Tsd.",
        "caption": "Die Karte zeigt den synthetischen Gesamtbestand 9.000 als 9 Tsd.",
        "schritt": 3,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst eine schnelle Bestands- oder Planerreichungsanzeige.

## Schritte

1. Karte einfügen und ein Measure zuweisen.
2. Titel, Einheit und Dezimalstellen setzen.
3. Stichtagsfilter und Slicerwirkung kontrollieren.

## Beispiel

[Bestand] am 31.03.2026: 101 Mio. Euro. Im Titel steht derselbe Stichtag.

## Typischer Fehler

Eine Karte über mehrere Snapshots summieren, obwohl „aktueller Bestand“ gemeint ist.
