---
{
  "id": "ida-gruppieren",
  "slug": "ida-gruppieren",
  "titel": "Liste gruppieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterscheide sichtbare Gruppenköpfe von echter Verdichtung auf eine Zeile je Gruppe.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Liste gruppieren",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-aggregation",
    "ida-ebene",
    "gruppieren",
    "eine-zeile-je-person"
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

Detailzeilen sollen nach Person gebündelt oder zusammengefasst werden.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Entscheide vorab, ob Kontozeilen sichtbar bleiben sollen.
2. Für eine eindeutige Personenliste Konto als Detail entfernen und den Betrag je Person aggregieren.
3. Notiere die fachliche Regel: **Nach Person gruppieren; je nach Ziel Details behalten oder aggregieren**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
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
Pseudologik: Nach Person gruppieren; je nach Ziel Details behalten oder aggregieren.
```

### Nachher · Beispielergebnis

| Darstellung | Ergebnis |
| --- | --- |
| Optisch gruppiert | P001: K001/120 und K002/80; P002: K003/50 |
| Aggregiert | P001/200; P002/50 |

## Ergebnis

Unterscheide sichtbare Gruppenköpfe von echter Verdichtung auf eine Zeile je Gruppe.

## Warum funktioniert das?

Eine sichtbare Gruppierung kann Details lediglich zusammen darstellen. Erst eine Aggregation auf Person reduziert die fachlichen Ergebniszeilen.

## Typischer Fehler

Eine sortierte oder optisch gruppierte Liste bereits für eine eindeutige Personenliste halten.

## Plausibilitätscheck

Drei Detailzeilen oder zwei Gruppenzeilen sind je nach festgelegtem Ziel korrekt.
