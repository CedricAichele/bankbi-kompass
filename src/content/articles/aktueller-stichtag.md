---
{
  "id": "aktueller-stichtag",
  "slug": "aktueller-stichtag",
  "titel": "Letzten verfügbaren Stichtag bestimmen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der letzte verfügbare Stichtag kommt aus den Daten, nicht aus der Systemuhr. Entscheide, ob er global oder je Auswahl gelten soll.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": [
    "Letzten verfügbaren Stichtag bestimmen"
  ],
  "synonyme": [
    "aktueller stichtag",
    "letzter datenstand",
    "aktueller monat"
  ],
  "verwandteThemen": [
    "monatsultimo",
    "stichtag",
    "bestand-bewegung",
    "datumstabelle",
    "pq-datum",
    "ytd",
    "vorjahr"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Neugeschäft",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/max-function-dax"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Die neueste Monatslieferung liegt noch nicht vor.

## Schritte

1. Prüfe Datenzeitraum, Datumstyp und benötigte Zeilenebene. Kläre, ob eine Bewegung oder ein Bestand ausgewertet wird.
2. Für die Fachfrage globalen oder gefilterten Datenstand festlegen.
3. MAX des Stichtags auf der gewünschten Datenmenge bestimmen.
4. Bestand ausschließlich für dieses Datum auswerten und Datum sichtbar anzeigen.
5. Vergleiche mit dem Beispiel: Im Kontext Januar bis Februar 2026 ist der letzte Faktentag 28.02.2026; Bestand 120.

## Beispiel

### Vorher · Beispieldaten

| Datum | Neugeschäft | Bestand |
| --- | --- | --- |
| 28.02.2025 | 9 | 90 |
| 31.01.2026 | 10 | 100 |
| 28.02.2026 | 15 | 120 |

### Aktion

Letzten sichtbaren Faktentag bestimmen und Bestand für diesen Tag berechnen.

```dax
Bestand letzter sichtbarer Stichtag =
VAR Tag = MAX ( Demo_Bestand[STICHTAG] )
RETURN CALCULATE ( [Bestand], Demo_Bestand[STICHTAG] = Tag )
```

Die Formel arbeitet innerhalb der aktuellen Auswahl; sie hebt Kalenderfilter nicht global auf.

### Nachher · Beispielergebnis

Im Kontext Januar bis Februar 2026 ist der letzte Faktentag 28.02.2026; Bestand 120.

## Typischer Fehler

Je Produkt einen anderen letzten Stichtag verwenden und die Summe als gemeinsamen Datenstand darstellen.

## Voraussetzungen

Ein vorhandenes Modell mit echten Datumswerten. Für klassische Zeitintelligenz eine vollständige, markierte Datumstabelle und aktive Beziehung zum Faktendatum verwenden.

## Ergebnis

Der letzte verfügbare Stichtag kommt aus den Daten, nicht aus der Systemuhr. Entscheide, ob er global oder je Auswahl gelten soll.

## Warum funktioniert das?

MAX findet nur den letzten vorhandenen Wert im betrachteten Kontext. Das ist kein Beweis, dass dieser Datenstand vollständig geliefert wurde.

## Plausibilitätscheck

Im Kontext Januar bis Februar 2026 ist der letzte Faktentag 28.02.2026; Bestand 120. Prüfe außerdem einen Zeitraum ohne Daten.
