---
{
  "id": "ida-vorgang",
  "slug": "ida-vorgang",
  "titel": "Eine Zeile je Vorgang",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Fasse Ereignisse erst nach einer definierten Zeit- und Statusregel zu genau einem Vorgang zusammen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Eine Zeile je Vorgang",
    "Prozessanalyse"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-statusverlauf",
    "ida-anzahl",
    "ida-durchschnitt",
    "granularitaet",
    "ida-extrema",
    "median"
  ],
  "kontexte": [
    "Prozessanalyse"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Vorgang erscheint wegen mehrerer Stufen mehrfach.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Zähleinheit Vorgang und gewünschten Statuszeitpunkt bestimmen.
2. Formuliere die gewünschte Regel: **Vorgänge eindeutig zählen und Status-/Dauerregeln getrennt festlegen.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. V001 einmal zählen und die benötigte Statuszeile nach der Zeitregel auswählen.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| V001 mit Stufen S1, S2 und S3; V002 mit Stufe S1. |

### Aktion

```text
Fachliche Regel: Vorgänge eindeutig zählen und Status-/Dauerregeln getrennt festlegen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Zwei Vorgänge, vier Stufenzeilen. |

## Ergebnis

Fasse Ereignisse erst nach einer definierten Zeit- und Statusregel zu genau einem Vorgang zusammen.

## Warum funktioniert das?

Stufen sind untergeordnete Ereignisse. Ihre Anzahl ist keine Vorgangsanzahl; parallele Stufendauern ergeben auch nicht einfach die gesamte Durchlaufzeit.

## Typischer Fehler

Den alphabetisch größten Status mit dem letzten Status verwechseln.

## Plausibilitätscheck

Zwei Vorgänge, vier Stufenzeilen.
