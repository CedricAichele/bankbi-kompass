---
{
  "id": "count",
  "slug": "count",
  "titel": "COUNT: nichtleere Werte zählen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "COUNT zählt nichtleere Werte einer unterstützten Spalte. Für Zeilen ist COUNTROWS meist klarer; eindeutige Personen zählt DISTINCTCOUNT.",
  "ort": "Power BI Desktop → Modellierung → Neues Measure",
  "tags": [
    "COUNT: nichtleere Werte zählen"
  ],
  "synonyme": [
    "anzahl nichtleer",
    "count",
    "counta"
  ],
  "verwandteThemen": [
    "countrows",
    "distinctcount",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/count-function-dax",
    "https://learn.microsoft.com/en-us/dax/counta-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nBetragswerte = COUNT ( Konten[Bestand_EUR] )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ],
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du willst befüllte Werte einer Spalte zählen.

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
Betragswerte = COUNT ( Konten[Bestand_EUR] )
```

### Nachher · Beispielergebnis

6 befüllte Beträge. Entferne in einer Kopie den Betrag K006: COUNT = 5, COUNTROWS weiterhin 6.

## Ergebnis

Nichtleere, unterstützte Werte einer Spalte werden gezählt; das ist keine Zählung unterschiedlicher Personen.

## Warum funktioniert das?

Das Argument ist eine Spalte, keine Tabelle. COUNT überspringt BLANK, berücksichtigt aber eine vorhandene Null. Für Wahrheitswerte ist COUNTA geeignet.

## Typischer Fehler

**Symptom:** COUNT ist kleiner als die Zeilenzahl. **Ursache:** fehlende Werte. **Lösung:** Erst entscheiden, ob Werte oder Zeilen gezählt werden sollen.

## Plausibilitätscheck

Ersetze den leeren Testwert durch 0: Die Anzahl muss wieder 6 sein.


## COUNT oder COUNTA?
COUNT zählt nichtleere Werte einer unterstützten Spalte; Wahrheitswerte werden nicht unterstützt. COUNTA berücksichtigt auch true/false. Für eine Zeilenzahl unabhängig von der Befüllung einer Spalte verwende COUNTROWS.

Separater synthetischer Test: Tabelle Pruefung mit Flag = TRUE, FALSE, BLANK. **Neues Measure**:
```dax
Vorhandene Flags = COUNTA(Pruefung[Flag])
```
Ergebnis **2**. COUNTROWS(Pruefung) wäre **3**. Ein FALSE ist ein vorhandener Wert, kein fehlender Wert. Ersetze Tabelle und Flag durch deine Spalte; befüllte Beträge oder Flags sind noch keine eindeutige Kundenzahl.


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
