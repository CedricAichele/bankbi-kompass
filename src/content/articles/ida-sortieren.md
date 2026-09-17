---
{
  "id": "ida-sortieren",
  "slug": "ida-sortieren",
  "titel": "Liste sortieren",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Sortiere nach fachlichen Datentypen und ergänze bei gleichen Werten einen eindeutigen Schlüssel.",
  "ort": "IDA / Reporting: allgemeine Sortierregel; konkrete Bedienung TODO",
  "tags": ["Liste sortieren", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-formate", "ida-betrieb"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Export soll nachvollziehbar und reproduzierbar geordnet sein.

## Schritte

1. Hauptsortierung festlegen.
2. Bei Gleichstand eine zweite Sortierung wie Vorgangs-ID nutzen.
3. Prüfen, ob Zahlen und Datum tatsächlich entsprechend typisiert sind.

## Beispiel

Zuerst STICHTAG aufsteigend, dann KONTO_ID aufsteigend.

## Typischer Fehler

Textsortierung von Beträgen: „100“ kann vor „20“ stehen.
