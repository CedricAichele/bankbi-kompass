---
{
  "id": "pq-umbenennen",
  "slug": "pq-umbenennen",
  "titel": "Spalten umbenennen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Verständliche und eindeutige Spaltennamen erleichtern Formeln und die spätere Berichtsauswahl.",
  "ort": "Power Query → Doppelklick auf Spaltenüberschrift",
  "tags": [
    "Spalten umbenennen"
  ],
  "synonyme": [
    "spalte umbenennen"
  ],
  "verwandteThemen": [
    "pq-ueberschriften",
    "schluessel",
    "datenbereinigung",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/rename-column"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Unverständliche Spaltennamen durch eindeutige Begriffe ersetzen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Doppelklicke auf die Überschrift **Wert_1**.
3. Trage **Bestand** ein und bestätige mit Enter.
4. Prüfe spätere Schritte, die den bisherigen Namen verwenden.

## Beispiel

### Vorher · Beispieldaten

| Wert_1 |
| --- |
| 1000 |

### Aktion

Wert_1 in Bestand umbenennen.

### Nachher · Beispielergebnis

| Bestand |
| --- |
| 1000 |

## Ergebnis

Die Spalte erhält einen neuen Namen; ihre Werte bleiben gleich.

## Warum funktioniert das?

Der Name ist die Adresse des Felds für spätere Transformationen. Eine Umbenennung verändert keine Beträge oder Datentypen.

## Typischer Fehler

Gleiche oder irreführende Namen für unterschiedliche fachliche Größen verwenden.

## Plausibilitätscheck

Der Betrag 1000 und die Zeilenzahl sind unverändert.
