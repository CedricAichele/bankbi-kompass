---
{
  "id": "problem-visual-slicer",
  "slug": "problem-visual-slicer",
  "titel": "Visual reagiert nicht auf Slicer",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Andere Visuals reagieren, eines bleibt unverändert. Visualinteraktion deaktiviert oder abweichendes Measure.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Visual reagiert nicht auf Slicer"
  ],
  "synonyme": [
    "Visual reagiert nicht auf Slicer",
    "Andere Visuals reagieren, eines bleibt unverändert."
  ],
  "verwandteThemen": [
    "visualinteraktionen",
    "filter-fehler"
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

Andere Visuals reagieren, eines bleibt unverändert.

## Symptom

Andere Visuals reagieren, eines bleibt unverändert.

## Mögliche Ursachen

Visualinteraktion deaktiviert oder abweichendes Measure.

## Schnelltest

Lege eine Kopie des einfachen Testvisuals an und vergleiche seine Reaktion.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Lege eine Kopie des einfachen Testvisuals an und vergleiche seine Reaktion.
3. Markiere den Slicer → Format → Interaktionen bearbeiten. Wähle am Zielvisual das Filtersymbol statt Keine. Prüfe danach das Measure.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

P003 gewählt: Karte 4.000, Tabelle zeigt weiterhin alle Konten.

## Ergebnis

Nach Korrektur zeigen beide dieselbe Personenmenge.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Nach Korrektur zeigen beide dieselbe Personenmenge.
