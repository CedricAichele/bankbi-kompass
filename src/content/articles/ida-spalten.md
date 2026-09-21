---
{
  "id": "ida-spalten",
  "slug": "ida-spalten",
  "titel": "Datenelemente entfernen und umordnen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die sichtbare Spaltenauswahl soll die Arbeitsfrage beantworten. Entfernte Anzeigespalten können in Berechnungen weiterhin benötigt werden.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Datenelemente entfernen und umordnen"
  ],
  "synonyme": [
    "datenelement entfernen",
    "reihenfolge spalten"
  ],
  "verwandteThemen": [
    "ida-datenelement",
    "ida-excel-liste"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Exportliste enthält zu viele Spalten.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Vor dem Entfernen prüfen, ob Filter, Sortierung oder Berechnungen auf das Feld zugreifen.
2. Formuliere die gewünschte Regel: **Notiz aus der Ausgabe entfernen; Person, Konto, Stichtag und Betrag in dieser Reihenfolge anzeigen.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Zeilenzahl und Summe vergleichen; der fachliche Schlüssel muss weiterhin nachvollziehbar sein.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Liste mit Person, Konto, Stichtag, Betrag und optionaler Notiz. |

### Aktion

```text
Fachliche Regel: Notiz aus der Ausgabe entfernen; Person, Konto, Stichtag und Betrag in dieser Reihenfolge anzeigen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Gleiche Datensätze mit vier fachlich benötigten Spalten. |

## Ergebnis

Die sichtbare Spaltenauswahl soll die Arbeitsfrage beantworten. Entfernte Anzeigespalten können in Berechnungen weiterhin benötigt werden.

## Warum funktioniert das?

Sichtbare Spalten und Abfrageelemente sind nicht immer dasselbe. Ein für Filter oder Berechnung benötigtes Feld kann technisch erforderlich bleiben, obwohl es nicht ausgegeben wird.

## Typischer Fehler

Den Schlüssel entfernen und anschließend nicht mehr erkennen, warum mehrere Zeilen existieren.

## Plausibilitätscheck

Gleiche Datensätze mit vier fachlich benötigten Spalten.
