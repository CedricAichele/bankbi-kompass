---
{
  "id": "ida-statusverlauf",
  "slug": "ida-statusverlauf",
  "titel": "Mehrere Status je Vorgang",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Statushistorie erzeugt mehrere Zeilen je Vorgang. Für einen aktuellen Status brauchst du eine zeitliche und eindeutige Auswahlregel.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Mehrere Status je Vorgang"
  ],
  "synonyme": [
    "mehrere status je vorgang",
    "letzter status"
  ],
  "verwandteThemen": [
    "ida-vorgang",
    "ida-extrema"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [
    {
      "src": "images/ida/statusverlauf.svg",
      "alt": "Historie · V001: 01.03. · Prüfung: 03.03. · Erledigt. Auswahlregel: Letzter gültiger Zeitpunkt: Gleichstand eindeutig auflösen. Aktueller Stand: 03.03. · Erledigt: Datum und Status gemeinsam",
      "caption": "Aktuellen Status aus derselben Zeile lesen",
      "hinweis": "MAX(Status) ist keine zeitliche Auswahlregel.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Vorgangsliste enthält mehrere Bearbeitungsstände.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Bei identischen Zeitstempeln eine zusätzliche fachliche Reihenfolge oder eindeutige Ereigniskennung verlangen.
2. Formuliere die gewünschte Regel: **Letzten gültigen Zeitstempel je Vorgang bestimmen und die gesamte passende Statuszeile wählen**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Prüfen, dass der ausgegebene Status tatsächlich in der gewählten Quellzeile steht.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| V001: 01.03.2026 Prüfung; 03.03.2026 Erledigt. |

### Aktion

```text
Fachliche Regel: Letzten gültigen Zeitstempel je Vorgang bestimmen und die gesamte passende Statuszeile wählen.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| V001: 03.03.2026 Erledigt. |

## Ergebnis

Statushistorie erzeugt mehrere Zeilen je Vorgang. Für einen aktuellen Status brauchst du eine zeitliche und eindeutige Auswahlregel.

## Warum funktioniert das?

MAX(Datum) und MAX(Status) unabhängig können Felder aus verschiedenen Zeilen kombinieren. Die Auswahl muss den Zeilenzusammenhang erhalten.

## Typischer Fehler

Maximum von Datum und Status unabhängig aggregieren und dadurch eine nie vorhandene Kombination erzeugen.

## Plausibilitätscheck

V001: 03.03.2026 Erledigt.
