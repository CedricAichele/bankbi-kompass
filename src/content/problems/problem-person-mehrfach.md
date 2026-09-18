---
{
  "id": "problem-person-mehrfach",
  "slug": "problem-person-mehrfach",
  "titel": "Person mehrfach vorhanden",
  "bereich": "Datenanalyse",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Kennung erscheint auf mehreren Zeilen. Mehrere Konten, mehrere Stichtage oder echte Datendubletten.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Person mehrfach vorhanden"
  ],
  "synonyme": [
    "Person mehrfach vorhanden",
    "Eine Kennung erscheint auf mehreren Zeilen.",
    "kunde mehrfach"
  ],
  "verwandteThemen": [
    "eine-zeile-je-person",
    "dubletten",
    "distinctcount"
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

Eine Kennung erscheint auf mehreren Zeilen.

## Symptom

Eine Kennung erscheint auf mehreren Zeilen.

## Mögliche Ursachen

Mehrere Konten, mehrere Stichtage oder echte Datendubletten.

## Schnelltest

Zeige Person, Konto und Stichtag gemeinsam. Bestimme die tatsächlich erwartete Zeilenebene.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zeige Person, Konto und Stichtag gemeinsam. Bestimme die tatsächlich erwartete Zeilenebene.
3. Für eine Personenliste eindeutige Kennungen ausgeben; für Personenbestände nach Person und Stichtag summieren. Echte fehlerhafte Doppelzeilen an der Quelle bereinigen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

P001/K001 und P001/K002 sind zwei gültige Konten; beide Kontobeträge gehören zum Personenbestand.

## Ergebnis

Vier Personen, sechs Konten, unveränderte Betragssumme.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Vier Personen, sechs Konten, unveränderte Betragssumme.
