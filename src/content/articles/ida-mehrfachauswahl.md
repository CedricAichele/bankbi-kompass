---
{
  "id": "ida-mehrfachauswahl",
  "slug": "ida-mehrfachauswahl",
  "titel": "Filter mit Mehrfachauswahl",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Mehrfachauswahl prüft die Zugehörigkeit zu einer Menge erlaubter Werte.",
  "ort": "IDA / Reporting: allgemeines Mengenfilter-Prinzip",
  "tags": ["Filter mit Mehrfachauswahl", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-parameter-mehrfach", "ida-bedingungen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste soll die Segmente A und B gemeinsam enthalten.

## Schritte

1. Erlaubte Werte als Menge definieren.
2. Klärung: Was bedeutet eine leere Auswahl?
3. Treffer für enthaltene, nicht enthaltene und fehlende Werte prüfen.

## Beispiel

```text
Segment ist eines von {A, B}
```

Das ist nicht dasselbe wie Segment = „A,B“.

## Typischer Fehler

Mehrere Werte als einzelnen zusammengesetzten Text vergleichen.
