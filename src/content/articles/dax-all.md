---
{
  "id": "dax-all",
  "slug": "dax-all",
  "titel": "ALL oder REMOVEFILTERS?",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "REMOVEFILTERS drückt das Aufheben von Filtern aus. ALL kann zusätzlich eine Tabelle für einen Tabellenausdruck liefern.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": ["ALL oder REMOVEFILTERS?"],
  "synonyme": ["all", "filter entfernen"],
  "verwandteThemen": ["removefilters", "calculate"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/dax/all-function-dax"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst einen Anteil an allen Produktgruppen im aktuellen Zeitraum.

## Schritte

1. Nenner und aufzuhebende Filterspalte klar benennen.
2. Nur den gewünschten Produktfilter im Nenner entfernen.
3. Datums- und Geschäftsstellenfilter bewusst erhalten.

## Beispiel

```dax
Anteil = DIVIDE ( [Bestand],
 CALCULATE ( [Bestand], REMOVEFILTERS ( Demo_Produkt[PRODUKTGRUPPE] ) ) )
```

## Typischer Fehler

Mit ALL auf einer ganzen Tabelle mehr Filter entfernen als fachlich vorgesehen; mehrere Filter derselben Tabelle können zusätzliche Effekte haben.
