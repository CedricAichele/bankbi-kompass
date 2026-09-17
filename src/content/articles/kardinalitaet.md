---
{
  "id": "kardinalitaet",
  "slug": "kardinalitaet",
  "titel": "Kardinalität prüfen: 1:1, 1:n oder n:m",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kardinalität beschreibt, ob ein Schlüssel auf jeder Seite einmal oder mehrfach vorkommt. Sie ist keine Einstellung zum Verbergen von Dubletten.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": ["Kardinalität prüfen: 1:1, 1:n oder n:m"],
  "synonyme": [],
  "verwandteThemen": ["eins-zu-viele", "beziehung-eins-eins", "beziehung-nm"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du legst eine Beziehung an oder erhältst einen Eindeutigkeitsfehler.

## Schritte

1. Je Tabelle den fachlichen Schlüssel und die Zeilenebene bestimmen.
2. Mehrfachvorkommen und Leerwerte zählen.
3. Nur die zur Datenlage und Fachfrage passende Beziehung erstellen.

## Beispiel

Person P001 einmal in Personen, zweimal in Konten → 1:n. Wiederholte Monatsbestände erfordern zusätzlich den Stichtag.

## Typischer Fehler

Ein nicht eindeutiges Personenattribut ungeprüft auf die 1-Seite setzen.
