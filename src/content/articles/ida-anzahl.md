---
{
  "id": "ida-anzahl",
  "slug": "ida-anzahl",
  "titel": "Anzahl: Zeilen oder eindeutige Schlüssel?",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeilenanzahl, nichtleere Werte und eindeutige Personen sind verschiedene Kennzahlen.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Anzahl: Zeilen oder eindeutige Schlüssel?",
    "Reporting"
  ],
  "synonyme": [
    "COUNT vs DISTINCTCOUNT"
  ],
  "verwandteThemen": [
    "distinctcount",
    "granularitaet"
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
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Kundenanzahl wirkt zu hoch.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Zählobjekt ausdrücklich benennen: Kontozeile oder Person.
2. Fehlende Personenschlüssel separat prüfen; keine künstliche Person aus NULL erzeugen.
3. Notiere die fachliche Regel: **Zeilen zählen und unterschiedliche Personenschlüssel separat zählen.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Person | Konto | Segment | Betrag |
| --- | --- | --- | --- |
| P001 | K001 | A | 120 |
| P001 | K002 | A | 80 |
| P002 | K003 | B | 50 |

### Aktion

```text
Pseudologik: Zeilen zählen und unterschiedliche Personenschlüssel separat zählen.
```

### Nachher · Beispielergebnis

| Kennzahl | Ergebnis |
| --- | --- |
| Kontenzeilen | 3 |
| Unterschiedliche Personen | 2 |

## Ergebnis

Zeilenanzahl, nichtleere Werte und eindeutige Personen sind verschiedene Kennzahlen.

## Warum funktioniert das?

Die gewählte Zähleinheit entscheidet über die Kennzahl. Eine Person mit zwei Konten trägt zwei Zeilen, aber nur eine eindeutige Personenkennung bei.

## Typischer Fehler

Die Zahl nichtleerer Kontowerte als eindeutige Personenanzahl bezeichnen.

## Plausibilitätscheck

P001 erscheint zweimal, P002 einmal: drei Zeilen, zwei Personen.
