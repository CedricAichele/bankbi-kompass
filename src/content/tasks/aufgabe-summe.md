---
{
  "id": "aufgabe-summe",
  "slug": "aufgabe-summe",
  "titel": "Falsche Summe untersuchen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe zuerst Zeilenebene, Stichtag und Join-Vermehrung; erst danach die Rechenformel.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "Falsche Summe untersuchen"
  ],
  "synonyme": [
    "summe falsch",
    "falsche summe"
  ],
  "verwandteThemen": [
    "summe-zu-hoch",
    "ida-join-pruefen",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Ergebnis liegt unerwartet über dem plausiblen Wert.

## Schritte

1. Kontrollliste mit Schlüssel, Datum und Betrag erzeugen.
2. Mehrfachzeilen und Filterumfang erklären.
3. Summe nach jeder Transformation gegenrechnen.
4. Öffne die [konkrete Falsche Summe prüfen-Anleitung](#/wissen/summe-zu-hoch) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Vergleiche Zeilenzahl und Summe vor und nach jeder Transformation.

## Beispiel

Zwei Konten mit 100 und 50 müssen am selben Stichtag 150 ergeben, auch nach einer Stammdatenverknüpfung.

## Typischer Fehler

Mit DISTINCT auf Beträgen echte gleiche Werte entfernen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Falsche Summe prüfen](#/wissen/summe-zu-hoch) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [TEILERGEBNIS: gefilterte Zeilen auswerten](#/wissen/teilergebnis)                                                |
| IDA / Reporting | [Ergebnis vor / nach Join plausibilisieren](#/wissen/ida-join-pruefen); generisches Konzept                       |

## Ergebnis

K001 zweimal mit 120 erklärt 240 statt 120.

## Warum funktioniert das?

Eine Vervielfachung von Zeilen vervielfacht auch additive Beträge.

## Plausibilitätscheck

Vergleiche Zeilenzahl und Summe vor und nach jeder Transformation.
