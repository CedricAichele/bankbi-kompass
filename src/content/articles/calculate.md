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
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "CALCULATE",
    "Reporting"
  ],
  "synonyme": [
    "calculate"
  ],
  "verwandteThemen": [
    "filterkontext",
    "dax-filter",
    "removefilters",
    "measure",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/calculate-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nEinlagenbestand = CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = \"Einlagen\" )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ],
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du brauchst die gleiche Kennzahl unter einer gezielt veränderten Produktauswahl.

## Voraussetzungen

Ein vorhandenes Power-BI-Modell mit den im Ausdruck verwendeten Tabellen, Spalten und gegebenenfalls Basismeasures.

## Schritte

1. Verwende eine geladene Tabelle mit den im Ausdruck benötigten Feldern. Prüfe die Datentypen. Die Namen und frei erfundenen Werte im Beispiel illustrieren die Formel; passe Tabellen- und Spaltennamen an dein Modell an.
2. Wähle **Modellierung → Neues Measure**. Ersetze den gesamten Vorgabetext in der Formelleiste durch die Formel im Beispiel.
3. Bestätige mit Enter. Bei lokalisierter DAX-Trennzeicheneinstellung Kommas gegebenenfalls durch Semikolons ersetzen. Prüfe, ob das Measure ohne Fehlermeldung im Datenbereich erscheint.
4. Füge im Bericht ein Tabellenvisual hinzu. Ziehe `Personennummer` und das neue Measure in die Tabelle. Für die Gesamtprüfung verwende zusätzlich eine Karte mit nur dem Measure.
5. Füge einen Datenschnitt mit `Konten[Produktgruppe]` hinzu. Wähle zunächst Einlagen und vergleiche mit den erwarteten Zahlen.
6. Entferne die Auswahl über das Radierersymbol des Datenschnitts. Teste anschließend den beschriebenen Personenfilter und kontrolliere den Unterschied.

## Beispiel

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |


### Aktion

```dax
Einlagenbestand = CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = "Einlagen" )
```

### Nachher · Beispielergebnis

4.050 ohne Filter. Auch bei einem Slicer auf Konten[Produktgruppe] = Kredite liefert das Measure 4.050. Mit zusätzlichem Filter Personennummer = P003: 800.

## Ergebnis

Eine Kennzahl wird in einem gezielt veränderten Filterkontext ausgewertet.

## Warum funktioniert das?

Das erste Argument ist die zu berechnende Summe. Das zweite ersetzt den Filter auf genau Konten[Produktgruppe] durch Einlagen. Erst in diesem veränderten Kontext wird summiert. Filter auf andere Spalten bleiben bestehen. Ein Filter auf einer separaten Produktdimension ist nicht derselbe Spaltenfilter.

## Typischer Fehler

**Symptom:** Einlagen werden trotz Kredite-Auswahl angezeigt. **Ursache:** bewusste Filterersetzung. **Lösung:** Für eine Schnittmenge `KEEPFILTERS(Konten[Produktgruppe] = "Einlagen")` verwenden; unter Kredite wäre das Ergebnis dann leer.

## Plausibilitätscheck

Wähle anschließend Einlagen: 1.250 + 2.000 + 800 = 4.050. Lösche den Slicer und kontrolliere die Summe der Quellspalte Bestand_EUR: 9.000. Das Einlagenmeasure bleibt bei 4.050.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Ausdruck | Berechnung, die nach der Filteränderung ausgewertet wird. |
| Filterargumente | Ändern Filter auf den angesprochenen Spalten; andere Filter bleiben grundsätzlich erhalten. |


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
