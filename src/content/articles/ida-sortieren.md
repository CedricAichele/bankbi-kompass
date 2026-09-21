---
{
  "id": "ida-sortieren",
  "slug": "ida-sortieren",
  "titel": "Liste sortieren",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Sortiere nach fachlichen Datentypen und ergänze bei gleichen Werten einen eindeutigen Schlüssel.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Liste sortieren",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-filtertypen",
    "ida-excel-liste",
    "ida-formate",
    "ida-betrieb"
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

Ein Export soll nachvollziehbar und reproduzierbar geordnet sein.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Datumsfeld als Datum und Kennung als Text prüfen.
2. Formuliere die gewünschte Regel: **Zuerst Stichtag aufsteigend, dann Konto aufsteigend sortieren.**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Ersten und letzten Wert sowie Reihenfolge innerhalb desselben Tages kontrollieren.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| K002/02.03.2026; K001/01.03.2026; K003/01.03.2026. |

### Aktion

```text
Fachliche Regel: Zuerst Stichtag aufsteigend, dann Konto aufsteigend sortieren.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| K001/01.03.; K003/01.03.; K002/02.03. |

## Ergebnis

Sortiere nach fachlichen Datentypen und ergänze bei gleichen Werten einen eindeutigen Schlüssel.

## Warum funktioniert das?

Mehrere Sortierschlüssel lösen Gleichstände nachvollziehbar auf. Eine Sortierung verändert weder Gruppen noch Datensätze.

## Typischer Fehler

Textsortierung von Beträgen: „100“ kann vor „20“ stehen.

## Plausibilitätscheck

K001/01.03.; K003/01.03.; K002/02.03.
