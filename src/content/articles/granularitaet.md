---
{
  "id": "granularitaet",
  "slug": "granularitaet",
  "titel": "Granularität: Was bedeutet eine Zeile?",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lege vor jeder Auswertung fest: Eine Zeile steht für genau welche fachliche Einheit?",
  "ort": "Vor Aggregation, Join und Kennzahldefinition",
  "tags": [
    "Granularität: Was bedeutet eine Zeile?",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "falsche summe",
    "eine Zeile je Person",
    "einzigartige Kunden",
    "mehrere Zeilen",
    "summe stimmt nicht"
  ],
  "verwandteThemen": [
    "eins-zu-viele",
    "dubletten",
    "distinctcount",
    "ida-aggregation"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": []
}
---


## Wann brauche ich das?

Summen sind falsch, Personen mehrfach vorhanden oder ein Join verändert das Ergebnis.

## Schritte

1. Den Satz „Eine Zeile je …“ vervollständigen.
2. Die dazu passende Schlüsselkombination bestimmen.
3. Mehrfachkombinationen und fehlende Schlüssel prüfen.

## Beispiel

Drei Konten an zwei Stichtagen ergeben sechs Zeilen. Das sind weder sechs Konten noch sechs Personen.

## Typischer Fehler

Eine Personen-ID als eindeutigen Schlüssel einer Konto-Stichtags-Tabelle betrachten.

## Einfach erklärt

Granularität beschreibt, was genau eine einzelne Zeile bedeutet.

## Mini-Beispiel

Konto und Stichtag ist feiner als Person und Monat.

## Warum ist das wichtig?

Die Definition bestimmt, welche Zuordnung oder Berechnung fachlich zulässig ist. Monatsplan je Kontenzeile wiederholen und addieren.

## Wo taucht das auf?

Gruppieren, Joins und Auswahl der Berichtsdetails.
