---
{
  "id": "dateien-zusammenfassen",
  "slug": "dateien-zusammenfassen",
  "titel": "Mehrere Dateien kombinieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze einen wiederholbaren Ordnerimport für Dateien mit gleichem Aufbau.",
  "ort": "Power BI und Excel → Power Query → Aus Ordner",
  "tags": [
    "Mehrere Dateien kombinieren",
    "Reporting"
  ],
  "synonyme": [
    "mehrere Dateien zusammenführen"
  ],
  "verwandteThemen": [
    "dateien-kombinieren",
    "anhaengen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Monatliche Dateien sollen ohne manuelles Kopieren gemeinsam ausgewertet werden.

## Schritte

1. Dateien und Spaltenschema abgleichen.
2. Dateiliste filtern und Transformation für die Beispieldatei definieren.
3. Ergebnis je Quelldatei und insgesamt kontrollieren.
4. Öffne die [konkrete Mehrere Dateien kombinieren-Anleitung](#/wissen/dateien-kombinieren) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Notiere vor dem Kombinieren die Anzahl je Datei; kontrolliere sie anschließend anhand der Herkunftsspalte.

## Beispiel

Zwei Dateien mit 3 und 4 Zeilen → 7 Zeilen. Den Quelldateinamen zur Kontrolle behalten.

[Power Query: Dateien kombinieren](#/wissen/dateien-kombinieren). Für IDA wird kein unbelegter interner Dateiimport beschrieben.

## Typischer Fehler

Temporäre oder abweichend aufgebaute Dateien ungefiltert einbeziehen.

## Vergleich

| Werkzeug | Passender Einstieg                                                                                    |
| -------- | ----------------------------------------------------------------------------------------------------- |
| Power BI | [Mehrere Dateien kombinieren](#/wissen/dateien-kombinieren) · [Tabellen anhängen](#/wissen/anhaengen) |
| Excel    | [Mehrere Dateien kombinieren](#/wissen/dateien-kombinieren)                                           |

## Ergebnis

Januar mit 2 Zeilen und Februar mit 3 Zeilen ergeben 5 Zeilen, wenn keine Filter greifen.

## Warum funktioniert das?

Dateien gleichen Aufbaus können dieselbe Transformation durchlaufen.

## Plausibilitätscheck

Notiere vor dem Kombinieren die Anzahl je Datei; kontrolliere sie anschließend anhand der Herkunftsspalte.
