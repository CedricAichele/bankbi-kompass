---
{
  "id": "summe-zu-hoch",
  "slug": "summe-zu-hoch",
  "titel": "Falsche Summe prüfen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe zuerst Zeilenebene, Mehrfachtreffer und Stichtage, bevor du die Formel änderst.",
  "ort": "Power Query und Power BI → kleine Kontrolltabelle",
  "tags": ["Falsche Summe prüfen", "Bestandsanalyse", "Reporting"],
  "synonyme": ["falsche summe", "Bestand addieren"],
  "verwandteThemen":
    [
      "granularitaet",
      "eins-zu-viele",
      "dubletten",
      "filterkontext",
      "ida-aggregation",
    ],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Die Gesamtsumme ist höher als die erwartete Kontrollsumme.

## Schritte

1. Auf einen Stichtag und wenige Schlüssel begrenzen.
2. Zeilen und Summe vor/nach Join vergleichen.
3. Prüfen, ob Plan oder Bestand pro Detailzeile wiederholt wird.

## Beispiel

100 Euro treffen nach einem Join auf zwei Detailzeilen → sichtbare Summe 200 Euro, obwohl es nur einen Ausgangsbetrag gibt.

## Typischer Fehler

DISTINCT auf Beträge anwenden: Zwei fachlich verschiedene Konten können denselben Betrag besitzen.
