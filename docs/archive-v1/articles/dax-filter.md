---
{
  "id": "dax-filter",
  "slug": "dax-filter",
  "titel": "FILTER, REMOVEFILTERS und SELECTEDVALUE",
  "bereich": "Power BI",
  "kategorie": "DAX",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "FILTER liefert eine gefilterte Tabelle, REMOVEFILTERS hebt gezielt Filter auf und SELECTEDVALUE liest einen eindeutig ausgewählten Wert.",
  "tags": ["FILTER", "REMOVEFILTERS", "SELECTEDVALUE"],
  "synonyme": ["FILTER", "REMOVEFILTERS", "SELECTEDVALUE"],
  "verwandteThemen": ["calculate", "filterkontext", "measure"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Die drei Funktionen erfüllen unterschiedliche Aufgaben. FILTER ist eine Tabellenfunktion; REMOVEFILTERS verändert Filter; SELECTEDVALUE liefert einen Einzelwert.

## FILTER

```dax
Positive Zeilen =
COUNTROWS (
    FILTER ( Demo_Bestand, Demo_Bestand[BESTAND_EUR] > 0 )
)
```

FILTER prüft jede Zeile der im Kontext sichtbaren Tabelle und gibt die passenden Zeilen zurück. Für einfache Spaltenbedingungen in CALCULATE ist häufig eine direkte Bedingung verständlicher.

## REMOVEFILTERS

```dax
Bestand alle Produkte =
CALCULATE ( [Bestand], REMOVEFILTERS ( Demo_Produkt ) )
```

Das entfernt Filter der Produktdimension für diese Berechnung. Datumsfilter werden damit nicht absichtlich entfernt. Ob weitere Modellwege Einfluss haben, hängt vom Modell ab.

## SELECTEDVALUE

```dax
Produktauswahl =
SELECTEDVALUE (
    Demo_Produkt[PRODUKTGRUPPE],
    "Keine eindeutige Auswahl"
)
```

Der Ersatztext erscheint sowohl bei keinem als auch bei mehr als einem unterschiedlichen Wert. Er bedeutet nicht ausschließlich „mehrere ausgewählt“.

## Typischer Fehler

Für einen Anteilsnenner pauschal alle Filter im Modell zu entfernen. Dann ändert sich möglicherweise auch der Zeitraum. Entferne nur die fachlich beabsichtigten Filter.

## Wenn du aus Excel kommst

Die Excel-Funktion FILTER gibt ein Zellarray aus. DAX FILTER liefert eine Tabelle innerhalb einer DAX-Berechnung. Trotz gleichem Namen sind sie nicht austauschbar.
