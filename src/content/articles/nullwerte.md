---
{
  "id": "nullwerte",
  "slug": "nullwerte",
  "titel": "Nullwerte behandeln",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Null bedeutet fehlend. Ersetze es nur durch 0, wenn „fehlend“ fachlich wirklich „kein Betrag“ bedeutet.",
  "ort": "Power Query → Spaltenfilter / benutzerdefinierte Spalte",
  "tags": [
    "Nullwerte behandeln",
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "datenbereinigung",
    "ida-null"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": []
}
---


## Wann brauche ich das?

Importierte Spalten enthalten leere Kennungen oder Beträge.

## Schritte

1. Null, leeren Text und Fehler getrennt prüfen.
2. Fachregel für den Ersatz festlegen.
3. Fehlende Werte separat zählen und Ergebnis kontrollieren.

## Beispiel

```m
if [BETRAG_EUR] = null then "Fehlt" else "Vorhanden"
```

## Typischer Fehler

Eine Null-Ersetzung kann den Durchschnitt verändern und fehlende Lieferungen verstecken.

## Einfach erklärt

Fehlend ist nicht dasselbe wie eine gemessene Null. NULL und BLANK sind werkzeugspezifische Repräsentationen.

## Mini-Beispiel

Kein Abschlussdatum ist offen/unbekannt; Anzahl 0 kann ein gültig gemessenes Ergebnis sein.

## Warum ist das wichtig?

Die Definition bestimmt, welche Zuordnung oder Berechnung fachlich zulässig ist. Alle fehlenden Beträge ohne fachliche Regel auf 0 setzen.

## Wo taucht das auf?

Power Query null, DAX BLANK und Reporting-NULL.
