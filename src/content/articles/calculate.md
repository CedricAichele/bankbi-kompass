---
{
  "id": "calculate",
  "slug": "calculate",
  "titel": "CALCULATE",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "CALCULATE berechnet einen Ausdruck mit geänderten Filtern. Ein Filter auf derselben Spalte wird normalerweise ersetzt.",
  "ort": "Power BI → Neues Measure; aktive Produktbeziehung vorausgesetzt",
  "tags": [
    "CALCULATE",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "filterkontext",
    "dax-filter",
    "removefilters",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/calculate-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nEinlagenbestand = CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = \"Einlagen\" )\n```",
  "schnellschritte": [
    "Tabelle Konten mit synthetischen Daten laden.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Du brauchst die gleiche Kennzahl unter einer gezielt veränderten Produktauswahl.

## Voraussetzungen

Power BI Desktop im Importmodus. Die Tabelle wird im ersten Schritt angelegt; ein separates Modell ist für dieses Beispiel nicht nötig.

## Schritte

1. Lege in Power BI Desktop über **Start → Daten eingeben** die Tabelle `Konten` mit den sechs Zeilen aus dem Beispiel an. Alle Beträge beziehen sich auf denselben Stichtag. Setze Bestand_EUR auf Zahl und die Kennungen auf Text.
2. Wähle **Modellierung → Neues Measure**. Ersetze den gesamten Vorgabetext in der Formelleiste durch die Formel im Beispiel.
3. Bestätige mit Enter. Bei lokalisierter DAX-Trennzeicheneinstellung Kommas gegebenenfalls durch Semikolons ersetzen. Prüfe, ob das Measure ohne Fehlermeldung im Datenbereich erscheint.
4. Füge im Bericht ein Tabellenvisual hinzu. Ziehe `Personennummer` und das neue Measure in die Tabelle. Für die Gesamtprüfung verwende zusätzlich eine Karte mit nur dem Measure.
5. Füge einen Datenschnitt mit `Konten[Produktgruppe]` hinzu. Wähle zunächst Einlagen und vergleiche mit den erwarteten Zahlen.
6. Entferne die Auswahl über das Radierersymbol des Datenschnitts. Teste anschließend den beschriebenen Personenfilter und kontrolliere den Unterschied.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```dax
Einlagenbestand = CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = "Einlagen" )
```

## Ergebnis

4.050 ohne Filter. Auch bei einem Slicer auf Konten[Produktgruppe] = Kredite liefert das Measure 4.050. Mit zusätzlichem Filter Personennummer = P003: 800.

## Warum funktioniert das?

Das erste Argument ist die zu berechnende Summe. Das zweite ersetzt den Filter auf genau Konten[Produktgruppe] durch Einlagen. Erst in diesem veränderten Kontext wird summiert. Filter auf andere Spalten bleiben bestehen. Ein Filter auf einer separaten Produktdimension ist nicht derselbe Spaltenfilter.

## Typischer Fehler

**Symptom:** Einlagen werden trotz Kredite-Auswahl angezeigt. **Ursache:** bewusste Filterersetzung. **Lösung:** Für eine Schnittmenge `KEEPFILTERS(Konten[Produktgruppe] = "Einlagen")` verwenden; unter Kredite wäre das Ergebnis dann leer.

## Plausibilitätscheck

Wähle anschließend Einlagen: 1.250 + 2.000 + 800 = 4.050. Lösche den Slicer und prüfe das Basismeasure mit 9.000.
