---
{
  "id": "ida-berechnung",
  "slug": "ida-berechnung",
  "titel": "Berechnetes Datenelement",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kläre, ob eine Formel je Detailzeile oder auf bereits aggregierten Werten rechnen soll.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Berechnetes Datenelement",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "ida-quote",
    "ida-falllogik",
    "ida-aggregation"
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

Eine Liste benötigt eine abgeleitete Kennzahl.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Konkreter IDA-Menüweg nicht öffentlich belegt. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Lege Name, Einheit und Eingabefelder des neuen Datenelements fest.
2. Entscheide zwischen Zeilenberechnung und aggregierter Kennzahl, bevor du den Ausdruck im jeweiligen Berichtswerkzeug anlegst.
3. Notiere die fachliche Regel: **Je Zeile Wert = Menge × Preis ableiten.**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Menge | Preis |
| --- | --- | --- |
| V001 | 2 | 10 |
| V002 | 3 | 20 |

### Aktion

```text
Pseudologik: Je Zeile Wert = Menge × Preis ableiten.
```

### Nachher · Beispielergebnis

| Vorgang | Wert |
| --- | --- |
| V001 | 20 |
| V002 | 60 |

## Ergebnis

Kläre, ob eine Formel je Detailzeile oder auf bereits aggregierten Werten rechnen soll.

## Warum funktioniert das?

Eine Zeilenberechnung verwendet Werte desselben Vorgangs. Eine Gruppenquote muss dagegen aus passenden Gruppensummen entstehen. Die Berechnungsebene ist deshalb Teil der Definition.

## Typischer Fehler

Zeilen- und Gruppenberechnung vermischen.

## Plausibilitätscheck

2 × 10 = 20; 3 × 20 = 60; Summe 80.
