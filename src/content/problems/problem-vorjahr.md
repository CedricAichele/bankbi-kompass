---
{
  "id": "problem-vorjahr",
  "slug": "problem-vorjahr",
  "titel": "Vorjahr ist leer",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Aktueller Betrag sichtbar, Vorjahr BLANK. Kalender oder Daten enthalten das Vorjahr nicht; falscher Filterweg.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Vorjahr ist leer"
  ],
  "synonyme": [
    "Vorjahr ist leer",
    "Aktueller Betrag sichtbar, Vorjahr BLANK."
  ],
  "verwandteThemen": [
    "vorjahr",
    "datumstabelle",
    "blank"
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

Aktueller Betrag sichtbar, Vorjahr BLANK.

## Symptom

Aktueller Betrag sichtbar, Vorjahr BLANK.

## Mögliche Ursachen

Kalender oder Daten enthalten das Vorjahr nicht; falscher Filterweg.

## Schnelltest

Öffne eine Tabelle mit Kalenderdatum und Basismeasure für den Vorjahresmonat.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Öffne eine Tabelle mit Kalenderdatum und Basismeasure für den Vorjahresmonat.
3. Erweitere den Kalender bei Bedarf auf vollständige Jahre. Prüfe tatsächlich vorhandene Vorjahresdaten und die aktive Beziehung. Keine fehlenden Daten erfinden oder ungeprüft durch 0 ersetzen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

Februar 2026 = 15; Februar 2025 = 9. März 2025 fehlt, daher März-Vorjahr BLANK.

## Ergebnis

Vorjahresmeasure muss mit dem Basismeasure bei direkter Vorjahresauswahl übereinstimmen.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Vorjahresmeasure muss mit dem Basismeasure bei direkter Vorjahresauswahl übereinstimmen.
