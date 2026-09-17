---
{
  "id": "ida-spalten",
  "slug": "ida-spalten",
  "titel": "Datenelemente entfernen und umordnen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die sichtbare Spaltenauswahl soll die Arbeitsfrage beantworten. Entfernte Anzeigespalten können in Berechnungen weiterhin benötigt werden.",
  "ort": "Allgemeines Listenprinzip; konkrete IDA-Bedienung TODO",
  "tags": ["Datenelemente entfernen und umordnen"],
  "synonyme": ["datenelement entfernen", "reihenfolge spalten"],
  "verwandteThemen": ["ida-datenelement", "ida-excel-liste"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Exportliste enthält zu viele Spalten.

## Schritte

1. Zielgranularität und notwendige Schlüssel festlegen.
2. Nicht benötigte Anzeigespalten entfernen; Schlüssel und Datum nach vorn stellen.
3. Abhängige Filter und Berechnungen sowie Exportspalten prüfen.

## Beispiel

Personennummer, Kontonummer, Stichtag, Bestand_EUR bilden eine klare Bestandsliste.

## Typischer Fehler

Den Schlüssel entfernen und anschließend nicht mehr erkennen, warum mehrere Zeilen existieren.
