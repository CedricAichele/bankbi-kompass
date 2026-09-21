---
{
  "id": "pq-ueberschriften",
  "slug": "pq-ueberschriften",
  "titel": "Erste Zeile als Überschrift verwenden",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Hebe die erste Datenzeile nur dann zu Spaltennamen an, wenn sie tatsächlich die Feldbezeichnungen enthält.",
  "ort": "Power Query → Start oder Transformieren → Erste Zeile als Überschriften verwenden",
  "tags": [
    "Erste Zeile als Überschrift verwenden"
  ],
  "synonyme": [
    "erste zeile überschrift"
  ],
  "verwandteThemen": [
    "pq-umbenennen",
    "csv-import",
    "excel-import",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/table-promote-demote-headers"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine erste Datenzeile, die tatsächlich Feldnamen enthält, als Überschrift verwenden.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Prüfe, ob die erste Zeile Feldnamen und keine Nutzdaten enthält.
3. Wähle **Start → Erste Zeile als Überschriften verwenden**.
4. Prüfe die neuen Namen und Datentypen. Eine erste echte Datenzeile darf dabei nicht verloren gehen.

## Beispiel

### Vorher · Beispieldaten

| Column1 | Column2 |
| --- | --- |
| Konto | Bestand |
| K001 | 1000 |

### Aktion

Erste Zeile zu Spaltennamen machen.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |

## Ergebnis

Die erste Zeile liefert die Spaltennamen und zählt nicht mehr als Datenzeile.

## Warum funktioniert das?

Eine Kopfzeile beschreibt die Struktur; sie ist kein fachlicher Datensatz.

## Typischer Fehler

Einen bereits korrekt erkannten Header erneut hochstufen.

## Plausibilitätscheck

Aus zwei Vorschauzeilen wird eine Datenzeile mit den Namen Konto und Bestand.
