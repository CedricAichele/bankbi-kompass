---
{
  "id": "ida-konto",
  "slug": "ida-konto",
  "titel": "Eine Zeile je Konto und Stichtag",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kontolisten brauchen eine ausdrückliche Zeitregel. Eine Kontonummer allein ist bei historischen Beständen nicht eindeutig.",
  "ort": "Allgemeines Listenprinzip; konkrete IDA-Bedienung TODO",
  "tags": ["Eine Zeile je Konto und Stichtag"],
  "synonyme": ["eine zeile je konto"],
  "verwandteThemen": ["ida-dubletten", "stichtag"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Liste zeigt scheinbar doppelte Konten.

## Schritte

1. Kontonummer plus Stichtag als Zeilenschlüssel festlegen.
2. Unnötige Status- oder Zuordnungsdetails von der Ausgabe trennen.
3. Eindeutigkeit der Kombination und Kontrollsumme prüfen.

## Beispiel

K001 am 31.01. mit 100 und am 28.02. mit 120 sind zwei fachlich gültige Zeilen.

## Typischer Fehler

Eine Monatszeile als Dublette löschen, obwohl beide Datenstände benötigt werden.
