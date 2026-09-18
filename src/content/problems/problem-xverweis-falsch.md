---
{
  "id": "problem-xverweis-falsch",
  "slug": "problem-xverweis-falsch",
  "titel": "XVERWEIS liefert falschen Datensatz",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung. Schlüssel doppelt oder Such- und Ergebnisbereiche gegeneinander verschoben.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "XVERWEIS liefert falschen Datensatz"
  ],
  "synonyme": [
    "XVERWEIS liefert falschen Datensatz",
    "Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung."
  ],
  "verwandteThemen": [
    "xverweis",
    "excel-mehrere-kriterien",
    "excel-filtern"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
}
---

## Wann brauche ich das?

Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung.

## Symptom

Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung.

## Mögliche Ursachen

Schlüssel doppelt oder Such- und Ergebnisbereiche gegeneinander verschoben.

## Schnelltest

Zähle den Schlüssel mit ZÄHLENWENN und markiere die beiden Formelbereiche.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zähle den Schlüssel mit ZÄHLENWENN und markiere die beiden Formelbereiche.
3. Korrigiere Bereichsgrenzen. Verwende bei echten Mehrfachtreffern FILTER oder ergänze ein fachlich erforderliches Kriterium.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

K003 zweimal mit 2.000 und 2.100: der erste Treffer löst den Konflikt nicht.

## Ergebnis

Suchschlüssel genau einmal oder vollständige Mehrfachausgabe explizit erwartet.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Suchschlüssel genau einmal oder vollständige Mehrfachausgabe explizit erwartet.
