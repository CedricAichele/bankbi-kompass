---
{
  "id": "bestand-bewegung",
  "slug": "bestand-bewegung",
  "titel": "Bestandskennzahl oder Bewegungskennzahl?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bestände sind Momentaufnahmen, Bewegungen beziehen sich auf Zeiträume. Bestände sind über Zeit meist nicht additiv.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "Bestandskennzahl oder Bewegungskennzahl?",
    "Grundbegriff"
  ],
  "synonyme": [
    "bestand über monate",
    "snapshot",
    "bewegungskennzahl"
  ],
  "verwandteThemen": [
    "stichtag",
    "ytd",
    "visual-gesamtsumme"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Neugeschäft",
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

Du baust eine Monats- oder YTD-Auswertung.

## Schritte

1. Kennzahl als Stichtagswert oder Periodenbewegung einordnen.
2. Bestände je Stichtag, Bewegungen über den gewünschten Zeitraum auswerten.
3. Gesamtsumme fachlich festlegen: letzter Bestand, Durchschnitt oder kumulierte Bewegung.

## Beispiel

Januarbestand 100 und Februarbestand 120 ergeben keinen Bestand von 220. Neugeschäft 10 plus 15 ergibt dagegen 25.

## Typischer Fehler

Eine technisch korrekte SUM-Formel ohne Zeitregel als fachlich korrekte Kennzahl betrachten.

## Einfach erklärt

Bestand ist ein Zustand, Bewegung eine Veränderung oder Aktivität während eines Zeitraums. Neugeschäft benötigt eine ausdrücklich definierte Ereignisregel.

## Mini-Beispiel

Bestand 100 zu Beginn; Zugang 20 und Abgang 15 → 105, sofern keine weiteren Veränderungen existieren.

## Warum ist das wichtig?

Die Definition bestimmt, welche Zuordnung oder Berechnung fachlich zulässig ist. Neugeschäft automatisch als reine Bestandsdifferenz interpretieren.

## Wo taucht das auf?

Zeitreihen, YTD und Bestandsanalysen.
