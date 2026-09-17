---
{
  "id": "ida-quote",
  "slug": "ida-quote",
  "titel": "Quote berechnen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Gesamtquote entsteht aus Gesamtzähler geteilt durch Gesamtnenner.",
  "ort": "IDA / Reporting: allgemeines Verhältnisprinzip",
  "tags": ["Quote berechnen", "Marktsteuerung", "Neugeschäft"],
  "synonyme": [],
  "verwandteThemen": ["divide", "ida-aggregation"],
  "kontexte": ["Marktsteuerung", "Neugeschäft"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du möchtest den Anteil einer fachlich definierten Teilmenge bestimmen.

## Schritte

1. Zähler und Nenner auf gleiche Ebene und Zeitraum abstimmen.
2. Nenner 0 und NULL ausdrücklich behandeln.
3. Als Prozent formatieren und Gesamtwert separat prüfen.

## Beispiel

8 von 10 und 1 von 2 → zusammen 9 von 12 = 75 %.

## Typischer Fehler

80 % und 50 % ungewichtet mitteln: 65 % ist hier nicht die Gesamtquote.
