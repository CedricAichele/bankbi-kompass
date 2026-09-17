---
{
  "id": "ida-durchschnitt",
  "slug": "ida-durchschnitt",
  "titel": "Durchschnitt berechnen",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Durchschnitt ist Summe durch Anzahl der berücksichtigten Werte.",
  "ort": "IDA / Reporting: allgemeine Aggregation",
  "tags": ["Durchschnitt berechnen", "Prozessanalyse"],
  "synonyme": [],
  "verwandteThemen": ["median", "ida-vorgang"],
  "kontexte": ["Prozessanalyse"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine mittlere Dauer auf Vorgangsebene.

## Schritte

1. Zuerst genau einen Dauerwert je Vorgang erzeugen.
2. Fehlende Werte und echte Nullen unterscheiden.
3. Mittelwert und Ausreißer gemeinsam prüfen.

## Beispiel

Dauern 1, 2 und 30 Tage: Durchschnitt 11 Tage, Median 2 Tage.

## Typischer Fehler

Vorgänge mit mehr Stufen durch einen Mittelwert über Stufenzeilen stärker gewichten.
