---
{
  "id": "excel-text-teilen",
  "slug": "excel-text-teilen",
  "titel": "Text aufteilen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Text in Spalten trennt einen Zellinhalt anhand fester Positionen oder eines Trennzeichens.",
  "ort": "Excel → Daten → Text in Spalten",
  "tags": [
    "Text aufteilen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "textteilen",
    "spalten-teilen",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/split-text-into-different-columns-with-the-convert-text-to-columns-wizard"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Getrennte Bestandteile ohne dynamische Formel in Nachbarspalten aufteilen.

## Voraussetzungen

Eine vorhandene Excel-Liste mit geklärter Zeilenebene und bekanntem Aufbau.

## Schritte

1. Markiere die Textspalte mit Kennungen wie **P001-K001**.
2. Stelle sicher, dass die Zielspalten frei sind, und wähle **Daten → Text in Spalten**.
3. Wähle **Getrennt**, dann als anderes Trennzeichen **-**. Prüfe die Vorschau.
4. Wähle für Kennungen den Spaltentyp **Text** und einen freien Zielbereich.
5. Bestätige und prüfe beide Bestandteile. Die Ausgabe wird bei späterer Änderung der Quelle nicht automatisch neu geteilt.

## Beispiel

### Vorher · Beispieldaten

| Kennung |
| --- |
| P001-K001 |

### Aktion

P001-K001 am Bindestrich teilen.

### Nachher · Beispielergebnis

| Beispielergebnis |
| --- |
| Zwei Zellen: P001 und K001. |

## Ergebnis

Textbestandteile werden einmalig auf getrennte Zellen verteilt.

## Warum funktioniert das?

Ein Trennzeichen bestimmt die Grenze. Anders als eine Formel muss der Assistent bei geänderten Quellwerten erneut ausgeführt werden.

## Typischer Fehler

Benachbarte Daten überschreiben oder führende Nullen als Zahlen importieren.

## Plausibilitätscheck

Beide Kennungen vollständig; keine Nachbarspalte überschrieben.
