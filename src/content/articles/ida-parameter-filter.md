---
{
  "id": "ida-parameter-filter",
  "slug": "ida-parameter-filter",
  "titel": "Parameter im Filter einsetzen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Filterbedingung muss den tatsächlichen Parameterwert mit einem passenden Datenfeld vergleichen.",
  "ort": "IDA / Reporting: allgemeine Verknüpfung; konkrete Ausdruckssyntax TODO",
  "tags": ["Parameter im Filter einsetzen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-parameter", "ida-filter"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Eingabe verändert das Ergebnis noch nicht.

## Schritte

1. Feld und Parameter auf gleiche fachliche Bedeutung und Typ prüfen.
2. Parameter ausdrücklich in der Filterregel verwenden.
3. Zwei bekannte Werte eingeben und Ergebnismengen vergleichen.

## Beispiel

```text
STICHTAG entspricht dem Parameter AuswahlDatum
```

## Typischer Fehler

Statt des Parameterwerts den Namen als festen Text vergleichen.
