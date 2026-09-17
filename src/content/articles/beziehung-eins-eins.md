---
{
  "id": "beziehung-eins-eins",
  "slug": "beziehung-eins-eins",
  "titel": "1:1-Beziehung richtig einordnen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bei 1:1 ist der Schlüssel in beiden Tabellen eindeutig. Prüfe, ob beide Tabellen fachlich eine gemeinsame Dimension bilden sollten.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": ["1:1-Beziehung richtig einordnen"],
  "synonyme": [],
  "verwandteThemen": ["kardinalitaet", "zusammenfuehren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-one-to-one",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Personenattribute sind auf zwei eindeutige Tabellen verteilt.

## Schritte

1. Eindeutigkeit und gleiche Schlüsselmenge prüfen.
2. Eine gemeinsame Dimension durch Zusammenführen erwägen.
3. Wenn getrennt: 1:1-Beziehung und Filterwirkung testen.

## Beispiel

P001 und P002 haben jeweils genau eine Stammdaten- und eine zusätzliche Klassifikationszeile.

## Typischer Fehler

1:1 wählen, obwohl die Zusatzdaten historisiert sind und mehrere Gültigkeiten haben.
