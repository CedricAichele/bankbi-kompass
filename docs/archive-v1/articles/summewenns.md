---
{
  "id": "summewenns",
  "slug": "summewenns",
  "titel": "SUMMEWENNS und ZÄHLENWENNS",
  "bereich": "Excel",
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Mit mehreren Kriterien summieren oder zählen: SUMMEWENNS und ZÄHLENWENNS machen Bedingungen für eine Auswertung ausdrücklich sichtbar.",
  "tags": ["SUMMEWENNS", "ZÄHLENWENNS", "MITTELWERTWENNS"],
  "synonyme": ["SUMMEWENNS", "ZÄHLENWENNS", "MITTELWERTWENNS"],
  "verwandteThemen": ["calculate", "measure", "excel-fehler"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

SUMMEWENNS summiert Werte, deren Zeilen alle angegebenen Bedingungen erfüllen. ZÄHLENWENNS zählt passende Zeilen, nicht automatisch unterschiedliche Personen.

## Synthetisches Beispiel

A2:A10 enthält Produktbereiche, B2:B10 Stichtage, C2:C10 Bestände.

```excel
=SUMMEWENNS(C2:C10;A2:A10;"Aktiv";B2:B10;DATUM(2026;3;31))
=ZÄHLENWENNS(A2:A10;"Aktiv";C2:C10;">0")
=MITTELWERTWENNS(C2:C10;A2:A10;"Aktiv")
```

Die erste Formel summiert Aktivbestände genau am 31.03.2026. Die zweite zählt positive Aktivzeilen. Die dritte berechnet den Mittelwert der passenden Zahlen, nicht eine gewichtete Quote.

## Typischer Fehler

Unterschiedlich große Bereiche, Text statt Datum oder doppelte Bestandszeilen verfälschen die Auswertung. Prüfe zuerst wenige bekannte Übungszeilen.

## Warum der Zeitraum wichtig ist

Ein Bestand ist eine Stichtagsgröße. Fehlt das Datumskriterium, addiert die Formel gegebenenfalls dieselben Konten über mehrere Monate.

## Brücke zu Power BI

Ein SUM-Measure reagiert bereits auf Filter. CALCULATE ist nötig, wenn du diese Filter bewusst ändern willst. Eine mechanische Übersetzung jeder SUMMEWENNS-Formel ist deshalb nicht sinnvoll.
