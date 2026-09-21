---
{
  "id": "ida-parameter-filter",
  "slug": "ida-parameter-filter",
  "titel": "Parameter im Filter einsetzen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Filterbedingung muss den tatsächlichen Parameterwert mit einem passenden Datenfeld vergleichen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Parameter im Filter einsetzen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-parameter-typ",
    "ida-filter",
    "ida-parameter"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-syntax-prompt-expressions"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Eingabe verändert das Ergebnis noch nicht.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Prüfe, dass Parameter und Datenfeld kompatible Datentypen haben.
2. Formuliere die gewünschte Regel: **Stichtag mit dem Wert des Parameters AuswahlDatum vergleichen**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Wechsle den Parameter auf 28.02.2026: Nun muss P002 statt P001 erscheinen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| P001 am 31.03.2026; P002 am 28.02.2026. Parameter AuswahlDatum = 31.03.2026. |

### Aktion

```text
Fachliche Regel: Stichtag mit dem Wert des Parameters AuswahlDatum vergleichen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Nur P001. |

## Ergebnis

Die Filterbedingung muss den tatsächlichen Parameterwert mit einem passenden Datenfeld vergleichen.

## Warum funktioniert das?

Ein Parameterbezug liefert den aktuellen Eingabewert. Ein fester Text mit dem Parameternamen würde nach dem Wort AuswahlDatum suchen.

## Typischer Fehler

Statt des Parameterwerts den Namen als festen Text vergleichen.

## Plausibilitätscheck

Nur P001.
