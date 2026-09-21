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
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/model-date-tables",
    "https://learn.microsoft.com/en-us/dax/totalytd-function-dax",
    "https://learn.microsoft.com/en-us/dax/sameperiodlastyear-function-dax"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
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

1. Arbeite in einer Kopie der betroffenen Auswertung. Notiere den fehlerhaften Wert, die aktuelle Auswahl und den zugrunde liegenden Datenstand.
2. Öffne eine Tabelle mit Kalenderdatum und Basismeasure für den Vorjahresmonat.
3. Erweitere den Kalender bei Bedarf auf vollständige Jahre. Prüfe tatsächlich vorhandene Vorjahresdaten und die aktive Beziehung. Keine fehlenden Daten erfinden oder ungeprüft durch 0 ersetzen.
4. Wiederhole den Schnelltest mit genau derselben Auswahl. Prüfe zusätzlich einen Gegenfall ohne den Fehler.
5. Den konkreten Bedienweg für die Korrektur findest du unter [Vorjahr berechnen](#/wissen/vorjahr). Prüfe danach erneut denselben Datenbereich, damit der Vergleich aussagekräftig bleibt.

## Beispiel

### Vorher · Fehlerbild

| Beobachtung |
| --- |
| Februar 2026 = 15; Februar 2025 = 9. März 2025 fehlt, daher März-Vorjahr BLANK. |

### Aktion

Erweitere den Kalender bei Bedarf auf vollständige Jahre. Prüfe tatsächlich vorhandene Vorjahresdaten und die aktive Beziehung. Keine fehlenden Daten erfinden oder ungeprüft durch 0 ersetzen.

### Nachher · Erwartete Kontrolle

| Prüfergebnis |
| --- |
| Vorjahresmeasure muss mit dem Basismeasure bei direkter Vorjahresauswahl übereinstimmen. |

## Ergebnis

Die Abweichung ist auf eine konkrete Ursache zurückgeführt; die Korrektur wird mit unveränderter Auswahl gegen die Quelle geprüft.

## Typischer Fehler

Nur den sichtbaren Ergebniswert korrigieren. Dadurch bleibt die Ursache in Daten, Modell oder Formel bestehen.

## Plausibilitätscheck

Vorjahresmeasure muss mit dem Basismeasure bei direkter Vorjahresauswahl übereinstimmen.

## Warum funktioniert das?

SAMEPERIODLASTYEAR liefert die verschobene Datumsmenge. CALCULATE wertet das Basismeasure unter dieser Datumauswahl aus. Verglichen werden gleiche Zeiträume.
