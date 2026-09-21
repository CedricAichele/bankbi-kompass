---
{
  "id": "mehrere-datumsbeziehungen",
  "slug": "mehrere-datumsbeziehungen",
  "titel": "Datumsfilter wirkt auf das falsche Datum",
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
  "zuletztGeprueft": "2026-09-21",
  "art": "problem",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive",
    "https://learn.microsoft.com/en-us/dax/userelationship-function-dax"
  ],
  "screenshots": [],
  "praxis": true
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

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Zeige beide Datumsfelder bei einem Vorgang und prüfe den Slicer mit Tagen, an denen sie auseinanderliegen.
3. Wähle die Datumsrolle bewusst. Verwende für ein passendes Measure USERELATIONSHIP oder separate Kalenderrollen; dokumentiere, welche Rolle gemeint ist.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Aktive und inaktive Beziehung](#/wissen/aktive-beziehung). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| V1 eröffnet im Januar, abgeschlossen im März: Abschlussanzahl muss im März erscheinen. |

### Aktion

Wähle die Datumsrolle bewusst. Verwende für ein passendes Measure USERELATIONSHIP oder separate Kalenderrollen; dokumentiere, welche Rolle gemeint ist.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Teste einen noch offenen Vorgang: Er darf keine abgeschlossene Aktivität erzeugen. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Teste einen noch offenen Vorgang: Er darf keine abgeschlossene Aktivität erzeugen.

## Warum funktioniert das?

Das Datum 03.01. beschreibt je nach Rolle andere Ereignisse. Eine inaktive Beziehung ist vorhanden, überträgt aber standardmäßig keinen Filter. USERELATIONSHIP wählt sie nur für die jeweilige Berechnung.
