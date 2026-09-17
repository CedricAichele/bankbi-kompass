---
{
  "id": "aktueller-stichtag",
  "slug": "aktueller-stichtag",
  "titel": "Letzten verfügbaren Stichtag bestimmen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der letzte verfügbare Stichtag kommt aus den Daten, nicht aus der Systemuhr. Entscheide, ob er global oder je Auswahl gelten soll.",
  "ort": "Power BI: Datumstabelle und Measures",
  "tags": ["Letzten verfügbaren Stichtag bestimmen"],
  "synonyme": ["aktueller stichtag", "letzter datenstand", "aktueller monat"],
  "verwandteThemen": ["monatsultimo", "stichtag", "bestand-bewegung"],
  "kontexte": ["Bestandsanalyse", "Neugeschäft", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Die neueste Monatslieferung liegt noch nicht vor.

## Schritte

1. Für die Fachfrage globalen oder gefilterten Datenstand festlegen.
2. MAX des Stichtags auf der gewünschten Datenmenge bestimmen.
3. Bestand ausschließlich für dieses Datum auswerten und Datum sichtbar anzeigen.

## Beispiel

```dax
Bestand letzter sichtbarer Stichtag =
VAR Tag = MAX ( Demo_Bestand[STICHTAG] )
RETURN CALCULATE ( [Bestand], Demo_Bestand[STICHTAG] = Tag )
```

Die Formel arbeitet innerhalb der aktuellen Auswahl; sie hebt Kalenderfilter nicht global auf.

## Typischer Fehler

Je Produkt einen anderen letzten Stichtag verwenden und die Summe als gemeinsamen Datenstand darstellen.
