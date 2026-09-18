---
{
  "id": "problem-werte-verschwinden",
  "slug": "problem-werte-verschwinden",
  "titel": "Werte verschwinden im Bericht",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nach einer Auswahl fehlen bekannte Zeilen. Inner Join, Detailfilter, fehlende Schlüsselzuordnung oder mehrere Filter wirken gemeinsam.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Werte verschwinden im Bericht"
  ],
  "synonyme": [
    "Werte verschwinden im Bericht",
    "Nach einer Auswahl fehlen bekannte Zeilen."
  ],
  "verwandteThemen": [
    "beziehungen",
    "zusammenfuehren",
    "filterkontext"
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

Nach einer Auswahl fehlen bekannte Zeilen.

## Symptom

Nach einer Auswahl fehlen bekannte Zeilen.

## Mögliche Ursachen

Inner Join, Detailfilter, fehlende Schlüsselzuordnung oder mehrere Filter wirken gemeinsam.

## Schnelltest

Entferne in einer Berichtskopie Filter nacheinander und prüfe die Zeilenzahl.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Entferne in einer Berichtskopie Filter nacheinander und prüfe die Zeilenzahl.
3. Prüfe Import-/Merge-Schritte und den Filterbereich auf Visual-, Seiten- und Berichtsebene. Fehlende Zuordnungen separat ausweisen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

K003 ohne passende Personendimension kann in einem selektierten Personensegment fehlen.

## Ergebnis

Zähle zugeordnete und nicht zugeordnete Konten; zusammen muss die Quelle erreicht werden.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Zähle zugeordnete und nicht zugeordnete Konten; zusammen muss die Quelle erreicht werden.
