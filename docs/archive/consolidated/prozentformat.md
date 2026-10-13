---
{
  "id": "prozentformat",
  "slug": "prozentformat",
  "titel": "0,95 als 95 % anzeigen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Prozentformat stellt den Dezimalwert 0,95 als 95 % dar. Die Formel bleibt numerisch.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": [
    "0,95 als 95 % anzeigen"
  ],
  "synonyme": [
    "0 95 statt 95",
    "prozentwert",
    "prozentformat"
  ],
  "verwandteThemen": [
    "divide",
    "anzeigeeinheiten"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-custom-format-strings"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Quote erscheint als Dezimalzahl.

## Voraussetzungen

Ein bestehender Bericht mit passenden Feldern und gegebenenfalls einem bereits angelegten Measure. Bedienbezeichnungen können je Desktop-Version oder Visual leicht abweichen.

## Schritte

1. Measure im Datenbereich markieren → Measuretools → Format → Prozent. Wähle die benötigten Dezimalstellen; prüfe anschließend das Visual.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Anzeige 95 %.**
4. Teste eine andere Auswahl und prüfe Titel, Einheit, Sortierung sowie lesbare Beschriftungen.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| Ist 95; Plan 100; Quotient 0,95 |

### Aktion

Measure im Datenbereich markieren → Measuretools → Format → Prozent. Wähle die benötigten Dezimalstellen; prüfe anschließend das Visual.

### Nachher · Beispielergebnis

| Erwartete Darstellung |
| --- |
| Anzeige 95 %. |

## Ergebnis

Ein Prozentformat stellt den Dezimalwert 0,95 als 95 % dar. Die Formel bleibt numerisch.

## Warum funktioniert das?

Prozent ist eine Darstellung des Verhältnisses. Eine zusätzliche Multiplikation mit 100 in der Formel würde bei Prozentformat 9500 % erzeugen.

## Typischer Fehler

Mit 100 multiplizieren und zusätzlich Prozentformat setzen: Das zeigt 9500 %.

## Plausibilitätscheck

Anzeige 95 %.
