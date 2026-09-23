---
{
  "id": "schluessel",
  "slug": "schluessel",
  "titel": "Stabile Schlüssel verwenden",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Schlüssel identifiziert eine fachliche Einheit. Namen und Beschreibungen sind meist ungeeignete Verknüpfungsschlüssel.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": [
    "Stabile Schlüssel verwenden",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "kardinalitaet",
    "pq-text",
    "granularitaet",
    "dubletten"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Datensätze zuverlässig über Tabellen und Aktualisierungen hinweg zuordnen.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Definiere die Identität: Kunde, Konto oder Konto und Stichtag sind verschiedene Schlüsselaufgaben.
2. Verwende einen stabilen, fachlich passenden Quellschlüssel. Namen oder Zeilenpositionen sind in der Regel ungeeignet.
3. Vereinheitliche Datentyp, Leerzeichen und erforderlichenfalls Schreibweise vor dem Vergleich. Erhalte führende Nullen.
4. Prüfe Eindeutigkeit auf der Dimensionsseite und fehlende Gegenstücke auf der Faktseite.
5. Wenn mehrere Felder gemeinsam eindeutig sind, verwende einen zuverlässig gebildeten kombinierten Schlüssel oder einen gepflegten technischen Schlüssel. Vermeide uneindeutige Verkettungen ohne Trennregel.

## Beispiel

### Vorher · Beispieldaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

P001 als Kundenschlüssel, K001 als Kontoschlüssel verwenden.

### Nachher · Beispielergebnis

| Feld | Geeignet wofür? |
| --- | --- |
| P001 | Kunde über Tabellen zuordnen |
| K001 + 31.01.2026 | Kontobestand an einem Tag identifizieren |
| Zeile 1 | Keine dauerhafte fachliche Identität |

## Ergebnis

Jeder Datensatz lässt sich auf der vorgesehenen Ebene verlässlich identifizieren und zuordnen.

## Warum funktioniert das?

Ein Schlüssel trägt Identität, nicht bloß eine optisch eindeutige Beschriftung. Eine Umbenennung oder neue Sortierung darf die Zuordnung nicht verändern.

## Typischer Fehler

Einen neu berechneten Index als dauerhaft stabilen Kundenschlüssel einsetzen, obwohl sich die Quellsortierung ändern kann.

## Plausibilitätscheck

Jede Faktkennung findet genau den vorgesehenen Dimensionsdatensatz; neue Lieferungen verändern alte Identitäten nicht.
