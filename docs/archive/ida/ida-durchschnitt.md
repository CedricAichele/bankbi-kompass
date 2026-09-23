---
{
  "id": "ida-durchschnitt",
  "slug": "ida-durchschnitt",
  "titel": "Durchschnitt berechnen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Berechnungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Durchschnitt ist Summe durch Anzahl der berücksichtigten Werte.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Durchschnitt berechnen",
    "Prozessanalyse"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "median",
    "ida-vorgang",
    "ida-null"
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

Du brauchst eine mittlere Dauer auf Vorgangsebene.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip für relationale Daten. Beispiele und Feldnamen sind frei erfunden.

## Schritte

1. Prüfe, ob jeder Vorgang genau einmal in der Berechnungsmenge steht.
2. Lege fest, wie offene Vorgänge ohne bekannte Dauer behandelt werden.
3. Notiere die fachliche Regel: **Eine Beobachtung je Vorgang verwenden und Dauer mitteln**. Syntax und verfügbare Funktionen sind in der Dokumentation der eingesetzten Umgebung zu prüfen.
4. Wende die Regel auf einen überschaubaren, bekannten Datenbereich an. Vergleiche jede erwartete Ergebniszeile mit der Ausgabe.
5. Kontrolliere zusätzlich den beschriebenen Grenz- oder Fehlerfall und dokumentiere Zähleinheit, Filter und Aggregation.

## Beispiel

### Vorher · Beispieldaten

| Vorgang | Dauer in Tagen |
| --- | --- |
| V001 | 1 |
| V002 | 2 |
| V003 | 30 |

### Aktion

```text
Pseudologik: Eine Beobachtung je Vorgang verwenden und Dauer mitteln.
```

### Nachher · Beispielergebnis

| Kennzahl | Wert |
| --- | --- |
| Durchschnitt | 11 |
| Median | 2 |

## Ergebnis

Der Durchschnitt ist Summe durch Anzahl der berücksichtigten Werte.

## Warum funktioniert das?

Der Durchschnitt gewichtet jede Beobachtungszeile gleich. Zusätzliche Stufenzeilen eines Vorgangs würden diesen Vorgang stärker gewichten; der Ausreißer 30 erklärt den Abstand zum Median.

## Typischer Fehler

Vorgänge mit mehr Stufen durch einen Mittelwert über Stufenzeilen stärker gewichten.

## Plausibilitätscheck

(1 + 2 + 30) / 3 = 11. Offene Vorgänge nicht stillschweigend als Dauer 0 ergänzen.
