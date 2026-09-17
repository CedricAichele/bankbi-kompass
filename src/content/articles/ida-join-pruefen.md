---
{
  "id": "ida-join-pruefen",
  "slug": "ida-join-pruefen",
  "titel": "Ergebnis vor / nach Join plausibilisieren",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche Zeilen, eindeutige Schlüssel, Kontrollsummen und fehlende Treffer vor und nach jeder Verknüpfung.",
  "ort": "IDA / Reporting: allgemeines Prüfverfahren",
  "tags": ["Ergebnis vor / nach Join plausibilisieren", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen":
    ["eins-zu-viele", "ida-join-aggregation", "zusammenfuehren"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/ida/eins-zu-viele.svg",
        "alt": "Vor dem Join: Person P001: 1 Personenzeile. Nach dem Join: P001 · Konto K001: P001 · Konto K002. Kontrolle: 2 Zeilen, 1 Person: Personen eindeutig zählen",
        "caption": "Eine Person, mehrere Konten",
        "hinweis": "Eine 1:n-Verknüpfung erzeugt mehrere Zeilen je Person.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Eine neue Verknüpfung soll fachlich abgesichert werden.

## Schritte

1. Ausgangsmengen und Summen notieren.
2. Treffer je Schlüssel prüfen.
3. Nach Join dieselben Kennzahlen vergleichen und Abweichungen erklären.

## Beispiel

Vorher: 3 Zeilen, 250 Euro. Nachher: 5 Zeilen, 450 Euro. Prüfe zuerst Mehrfachtreffer, bevor du die Formel änderst.

## Typischer Fehler

Nur die Gesamtsumme prüfen: Fehlende und doppelte Zeilen können sich zufällig ausgleichen.
