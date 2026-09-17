---
{
  "id": "schluessel",
  "slug": "schluessel",
  "titel": "Stabile Schlüssel verwenden",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Schlüssel identifiziert eine fachliche Einheit. Namen und Beschreibungen sind meist ungeeignete Verknüpfungsschlüssel.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": ["Stabile Schlüssel verwenden"],
  "synonyme": [],
  "verwandteThemen": ["granularitaet", "dubletten"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Beziehungen oder Nachschlagen ergeben falsche Treffer.

## Schritte

1. Die gewünschte Einheit bestimmen: Person, Konto oder Konto am Stichtag.
2. Kennung als konsistenten Datentyp behandeln und Eindeutigkeit prüfen.
3. Bei zusammengesetzten Schlüsseln Bestandteile eindeutig kombinieren; Kollisionen testen.

## Beispiel

Konto K001 plus Stichtag 31.03.2026 identifiziert eine Bestandszeile; K001 allein identifiziert das Konto.

## Typischer Fehler

Textteile ohne Trennregel verketten: 1+23 und 12+3 könnten beide 123 ergeben.
