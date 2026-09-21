---
{
  "id": "ida-dubletten",
  "slug": "ida-dubletten",
  "titel": "Dubletten erkennen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe Wiederholungen anhand der gewollten Schlüsselkombination, nicht nur anhand der Anzeige.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Dubletten erkennen",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "Dubletten"
  ],
  "verwandteThemen": [
    "dubletten",
    "ida-konto",
    "ida-anzahl",
    "granularitaet"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationships-creating-relationship-manually"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Liste enthält scheinbar doppelte Personen oder Vorgänge.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Fachlichen Schlüssel und zusätzliche Vergleichsfelder bestimmen.
2. Formuliere die gewünschte Regel: **Nach Konto und Stichtag zählen; identische Mehrfachlieferung untersuchen.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Abweichende Werte je Schlüssel vor jedem Entfernen klären; nicht nur optisch ausblenden.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| P001/K001/31.01./100 zweimal; P001/K002/31.01./200 einmal. |

### Aktion

```text
Fachliche Regel: Nach Konto und Stichtag zählen; identische Mehrfachlieferung untersuchen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| K001/31.01.: Anzahl 2; K002/31.01.: Anzahl 1. |

## Ergebnis

Prüfe Wiederholungen anhand der gewollten Schlüsselkombination, nicht nur anhand der Anzeige.

## Warum funktioniert das?

Die Schlüsselauswahl entscheidet, was doppelt ist. Wiederholte Personennummern können mehrere gültige Konten beschreiben.

## Typischer Fehler

Unterschiedliche Detailzeilen nur optisch ausblenden und die falsche Summe behalten.

## Plausibilitätscheck

K001/31.01.: Anzahl 2; K002/31.01.: Anzahl 1.
