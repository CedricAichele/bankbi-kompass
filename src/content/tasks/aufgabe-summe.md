---
{
  "id": "aufgabe-summe",
  "slug": "aufgabe-summe",
  "titel": "Falsche Summe untersuchen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
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
    "granularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Ergebnis liegt unerwartet über dem plausiblen Wert.

## Schritte

1. Definiere das gewünschte Ergebnis und den fachlichen Schlüssel jeder Ergebniszeile. Notiere Zeilenzahl und eine geeignete Kontrollsumme der Quelle.
2. Prüfe die Eingabefelder und Datentypen anhand der Ausgangstabelle im Beispiel. Übertrage die dort verwendeten Namen bewusst auf deine Daten.
3. Nutze die konkrete [Falsche Summe prüfen-Anleitung](#/wissen/summe-zu-hoch). Sie zeigt Bedienort, Auswahl und Einstellungen für diese Operation.
4. Vergleiche das Ergebnis mit den passenden Quellzeilen und der unten genannten Kontrolle. Kläre Mehrfachtreffer oder fehlende Werte vor der Weiterverwendung.
5. Prüfe auch den im Fehlerabschnitt genannten Gegenfall. Halte eine fachlich begründete Änderung der Zeilenzahl oder Summe fest.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| K001 steht am gleichen Stichtag zweimal mit 120: angezeigt 240, fachlich erwartet 120. |

### Aktion

Filtere zuerst einen Stichtag. Vergleiche anschließend Zeilenzahl und Summe vor und nach dem letzten Merge. Korrigiere dessen Schlüssel oder rechte Granularität.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Ein Konto je Stichtag und dieselbe Kontrollsumme wie vor dem Merge. |

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Power BI        | [Falsche Summe prüfen](#/wissen/summe-zu-hoch) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) |
| Excel           | [TEILERGEBNIS: gefilterte Zeilen auswerten](#/wissen/teilergebnis)                                                |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Warum funktioniert das?

Ein Join findet alle passenden Zeilen, nicht automatisch genau eine. Zwei Kundentreffer würden jede betroffene Kontenzeile beim Erweitern verdoppeln. Die Join-Art bestimmt zusätzlich, welche nicht passenden Zeilen erhalten bleiben.

## Plausibilitätscheck

Ein Konto je Stichtag und dieselbe Kontrollsumme wie vor dem Merge.

## Voraussetzungen

Ein vorhandener Datenbestand mit bekannter Zeilenebene und Zugriff auf das gewählte Werkzeug. Die Beispielwerte veranschaulichen ausschließlich den Ablauf.
