---
{
  "id": "ida-falllogik",
  "slug": "ida-falllogik",
  "titel": "Bedingte Berechnung: CASE-/IF-Prinzip",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine bedingte Berechnung ordnet Werte anhand festgelegter Regeln zu. Syntax und verfügbare Funktionen hängen vom Reportingkontext ab.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Bedingte Berechnung: CASE-/IF-Prinzip"
  ],
  "synonyme": [
    "case",
    "if reporting"
  ],
  "verwandteThemen": [
    "ida-null",
    "ida-berechnung",
    "ida-extrema"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du brauchst eine verständliche Statusklasse.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Schreibe die Falltabelle einschließlich Grenzwert 3 und fehlendem Wert auf.
2. Übertrage sie in eine unterstützte bedingte Berechnung; die unten angegebene Regel ist Pseudologik, keine garantierte IDA-Syntax.
3. Notiere die fachliche Regel: **Wenn Dauer fehlt: Offen; sonst bis einschließlich 3: Kurz; sonst Länger.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Dauer |
| --- | --- |
| V001 | NULL |
| V002 | 3 |
| V003 | 4 |

### Aktion

```text
Pseudologik: Wenn Dauer fehlt: Offen; sonst bis einschließlich 3: Kurz; sonst Länger.
```

### Nachher · Beispielergebnis

| Vorgang | Klasse |
| --- | --- |
| V001 | Offen |
| V002 | Kurz |
| V003 | Länger |

## Ergebnis

Eine bedingte Berechnung ordnet Werte anhand festgelegter Regeln zu. Syntax und verfügbare Funktionen hängen vom Reportingkontext ab.

## Warum funktioniert das?

Geordnete Fallzweige bilden sich ausschließende Kategorien. Die erste zutreffende Bedingung entscheidet; der NULL-Fall muss vor gewöhnlichen Zahlenvergleichen fachlich geklärt sein.

## Typischer Fehler

MAX(Status) als letzte fachliche Entscheidung verwenden. Implementierbare IDA-Syntax bleibt TODO.

## Plausibilitätscheck

NULL, 3 und 4 ergeben drei eindeutig unterschiedliche Klassen.
