---
{
  "id": "aufgabe-vorjahr",
  "slug": "aufgabe-vorjahr",
  "titel": "Vorjahr berechnen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche dieselbe Kennzahl für fachlich gleichartige Zeiträume oder Stichtage.",
  "ort": "Power BI: Zeitmeasure · Excel: Datumskriterien · IDA: Vergleichsauswahl",
  "tags": [
    "Vorjahr berechnen",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "Vorjahr"
  ],
  "verwandteThemen": [
    "vorjahr",
    "datumstabelle",
    "summewenns"
  ],
  "kontexte": [
    "Bestandsanalyse",
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

Eine Entwicklung soll gegenüber dem Vorjahr eingeordnet werden.

## Schritte

1. Zeitraum und Datenabdeckung klären.
2. Vorjahreszeitraum mit gleicher Definition auswählen.
3. Differenz und gegebenenfalls Quote berechnen.
4. Öffne die [konkrete Vorjahr berechnen-Anleitung](#/wissen/vorjahr) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Wähle den Vorjahresmonat direkt und vergleiche das Basismeasure.

## Beispiel

Power BI: [SAMEPERIODLASTYEAR](#/wissen/vorjahr).
Excel: [SUMMEWENNS](#/wissen/summewenns) mit entsprechenden Vorjahresgrenzen.
IDA: [Parameter im Filter](#/wissen/ida-parameter-filter).

120 gegenüber 100 → +20 beziehungsweise +20 %.

## Typischer Fehler

Einen angebrochenen aktuellen Monat ungekennzeichnet mit einem vollständigen Vorjahresmonat vergleichen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                         |
| --------------- | ------------------------------------------------------------------------------------------ |
| Power BI        | [Vorjahr berechnen](#/wissen/vorjahr) · [DATEADD und SAMEPERIODLASTYEAR](#/wissen/dateadd) |
| Excel           | [SUMMEWENNS](#/wissen/summewenns)                                                          |
| IDA / Reporting | [Text-, Zahlen- und Datumsfilter](#/wissen/ida-filtertypen); generisches Konzept           |

## Ergebnis

Februar 2026 = 15; Februar 2025 = 9; absolute Abweichung +6.

## Warum funktioniert das?

Verglichen werden gleiche Zeitspannen, nicht willkürlich ganze Jahre.

## Plausibilitätscheck

Wähle den Vorjahresmonat direkt und vergleiche das Basismeasure.
