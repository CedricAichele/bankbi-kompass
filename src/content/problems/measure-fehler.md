---
{
  "id": "measure-fehler",
  "slug": "measure-fehler",
  "titel": "Measure reagiert unerwartet",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche das Measure mit einer einfachen Basiskennzahl und prüfe den Kontext jeder Visualzelle.",
  "ort": "Power BI → Kontrollmatrix und DAX-Formel",
  "tags": ["Measure reagiert unerwartet", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["filterkontext", "divide", "distinctcount"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Gesamtzeile und Einzelzeilen scheinen nicht zusammenzupassen.

## Schritte

1. Basismeasure, Zähler und Nenner nebeneinander anzeigen.
2. Filter je Zeile und Gesamtergebnis vergleichen.
3. CALCULATE, REMOVEFILTERS und Mehrfachzählungen prüfen.

## Beispiel

8/10 und 1/2 ergeben insgesamt 9/12 = 75 %, nicht die Summe oder den einfachen Mittelwert der Quoten.

## Typischer Fehler

Ein korrekt neu berechnetes Gesamtergebnis als Fehler behandeln.
