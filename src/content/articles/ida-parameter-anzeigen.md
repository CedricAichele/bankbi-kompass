---
{
  "id": "ida-parameter-anzeigen",
  "slug": "ida-parameter-anzeigen",
  "titel": "Parameterwert im Ergebnis anzeigen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeige die wirksame Auswahl, damit ein Ergebnis später zugeordnet werden kann.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Parameterwert im Ergebnis anzeigen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-parameter-filter",
    "ida-betrieb",
    "ida-excel-liste"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=prompts-running-report"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Ein exportierter Bericht soll Zeitraum und Segmentauswahl nachvollziehbar machen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Nutzwert und Anzeigewert unterscheiden; lesbare Beschriftung und eindeutige Auswahl sicherstellen.
2. Formuliere die gewünschte Regel: **Begleitinformation aus den tatsächlich verwendeten Parameterwerten erzeugen**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Parameter ändern und sowohl Berichtskopf als auch enthaltene Daten kontrollieren.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Parameter Stichtag = 31.03.2026; Segmente = A und B. |

### Aktion

```text
Fachliche Regel: Begleitinformation aus den tatsächlich verwendeten Parameterwerten erzeugen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Berichtskopf: Stichtag 31.03.2026; Segmente A und B. |

## Ergebnis

Zeige die wirksame Auswahl, damit ein Ergebnis später zugeordnet werden kann.

## Warum funktioniert das?

Eine dynamische Parameteranzeige dokumentiert die Auswahl. Sie beweist allein noch nicht, dass der Filter korrekt gebunden ist.

## Typischer Fehler

Freitextüberschrift aktualisieren, während der tatsächlich verwendete Filter unverändert bleibt.

## Plausibilitätscheck

Berichtskopf: Stichtag 31.03.2026; Segmente A und B.
