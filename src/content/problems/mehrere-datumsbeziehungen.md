---
{
  "id": "mehrere-datumsbeziehungen",
  "slug": "mehrere-datumsbeziehungen",
  "titel": "Mehrere Datumsbeziehungen prüfen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Startdatum und Enddatum sind unterschiedliche Rollen. Ein einzelner aktiver Filterweg erklärt nicht beide gleichzeitig.",
  "ort": "Power BI → Kontrolltabelle mit Stichtag, Schlüssel und Measure",
  "tags": [
    "Mehrere Datumsbeziehungen prüfen"
  ],
  "synonyme": [
    "mehrere datumsbeziehungen",
    "Falsches Datum steuert die Auswertung",
    "Bericht reagiert auf Eröffnung statt Abschluss."
  ],
  "verwandteThemen": [
    "aktive-beziehung",
    "datumstabelle"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive"
  ],
  "screenshots": []
}
---

## Wann brauche ich das?

Bericht reagiert auf Eröffnung statt Abschluss.

## Symptom

Bericht reagiert auf Eröffnung statt Abschluss.

## Mögliche Ursachen

Die aktive Datumsbeziehung verwendet eine andere Datumsrolle.

## Schnelltest

Zeige beide Datumsfelder bei einem Vorgang und prüfe den Slicer mit Tagen, an denen sie auseinanderliegen.

## Schritte

1. Erstelle eine Kopie der Auswertung oder beschränke sie auf synthetische Testdaten. Notiere den fehlerhaften Wert.
2. Zeige beide Datumsfelder bei einem Vorgang und prüfe den Slicer mit Tagen, an denen sie auseinanderliegen.
3. Wähle die Datumsrolle bewusst. Verwende für ein passendes Measure USERELATIONSHIP oder separate Kalenderrollen; dokumentiere, welche Rolle gemeint ist.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.

## Beispiel

V1 eröffnet im Januar, abgeschlossen im März: Abschlussanzahl muss im März erscheinen.

## Ergebnis

Teste einen noch offenen Vorgang: Er darf keine abgeschlossene Aktivität erzeugen.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Teste einen noch offenen Vorgang: Er darf keine abgeschlossene Aktivität erzeugen.
