---
{
  "id": "excel-dubletten-entfernen",
  "slug": "excel-dubletten-entfernen",
  "titel": "Duplikate entfernen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entferne nur fachlich bestätigte doppelte Schlüsselkombinationen.",
  "ort": "Excel → Daten → Duplikate entfernen",
  "tags": [
    "Duplikate entfernen",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "excel-dubletten-finden",
    "dubletten"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/find-and-remove-duplicates"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Nach einer festgelegten Schlüsselkombination doppelte Zeilen entfernen.

## Voraussetzungen

Eine vorhandene Excel-Liste mit geklärter Zeilenebene und bekanntem Aufbau.

## Schritte

1. Sichere die Ausgangsliste, da die Operation Zeilen entfernt.
2. Markiere die ganze Liste einschließlich Überschriften und wähle **Daten → Duplikate entfernen**.
3. Aktiviere **Daten haben Überschriften**. Wähle nur die Spalten, die zusammen einen Datensatz identifizieren, hier **Konto** bei genau einem Stichtag.
4. Bestätige und notiere die gemeldete Anzahl entfernter Duplikate.
5. Vergleiche die verbleibenden Zeilen und Summen mit der gesicherten Quelle. Bei abweichenden Werten je Schlüssel zuerst die gültige Version klären.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

Konto als eindeutigen Schlüssel prüfen und Duplikate entfernen.

### Nachher · Beispielergebnis

| Beispielergebnis |
| --- |
| Im gezeigten Beispiel wird keine Zeile entfernt: K001, K002 und K003 sind verschieden. |

## Ergebnis

Pro gewählter Schlüsselkombination bleibt eine Zeile erhalten.

## Warum funktioniert das?

Die markierten Prüfspalten definieren, welche Zeilen gleich gelten. Kunde allein wäre für eine Kontenliste zu grob.

## Typischer Fehler

Nur Kunde auswählen und K002 verlieren.

## Plausibilitätscheck

Drei Konten und Summe 3500 bleiben unverändert. Mit einer zusätzlich identischen K001-Zeile müsste genau diese eine Doppelzeile entfallen.
