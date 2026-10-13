---
{
  "id": "divide",
  "slug": "divide",
  "titel": "DIVIDE: Quote berechnen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DIVIDE teilt Zähler durch Nenner und liefert bei Nenner 0 oder BLANK standardmäßig BLANK.",
  "ort": "Power BI → Neues Measure",
  "tags": [
    "DIVIDE: Quote berechnen",
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "synonyme": [
    "divide"
  ],
  "verwandteThemen": [
    "plan-ist",
    "blank",
    "measure",
    "dax-formeln"
  ],
  "kontexte": [
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/divide-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nEinlagenanteil = DIVIDE ( CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = \"Einlagen\" ), CALCULATE ( SUM ( Konten[Bestand_EUR] ), REMOVEFILTERS ( Konten[Produktgruppe] ) ) )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ],
  "ebene": "Praxisartikel"
}
---

## Wann brauche ich das?

Du brauchst einen Anteil mit kontrolliertem Verhalten bei Nenner null.

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
Einlagenanteil = DIVIDE ( CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = "Einlagen" ), CALCULATE ( SUM ( Konten[Bestand_EUR] ), REMOVEFILTERS ( Konten[Produktgruppe] ) ) )
```

### Nachher · Beispielergebnis

45 % ohne weitere Filter: 4.050 / 9.000. Für P003: 20 % aus 800 / 4.000.

## Ergebnis

Eine Division behandelt einen leeren oder nullwertigen Nenner ausdrücklich.

## Warum funktioniert das?

Erstes Argument: Zähler. Zweites: Nenner. DIVIDE liefert bei Nenner 0 oder BLANK standardmäßig BLANK; ein optionales drittes konstantes Argument kann einen Ersatzwert festlegen. Hier setzt der Zähler den Filter auf Konten[Produktgruppe] auf Einlagen; der Nenner hebt den Filter auf dieser Spalte auf. Andere Filter, etwa auf Personennummer, bleiben bestehen.

## Typischer Fehler

**Symptom:** 4.500 % statt 45 %. **Ursache:** zusätzlich mit 100 multipliziert. **Lösung:** 0,45 berechnen und nur das Format Prozent wählen.

## Plausibilitätscheck

Prüfe Zähler und Nenner zunächst als zwei getrennte Karten. Ein Anteil über 100 % kann auf unterschiedliche Filter oder Bezugsgrößen hinweisen.

## Argumente verstehen

| Argument | Bedeutung |
| --- | --- |
| Zähler | Die zu teilende Kennzahl. |
| Nenner | Die Bezugsgröße. |
| Alternativergebnis | Optionaler konstanter Wert bei Nenner 0/BLANK; ohne Angabe BLANK. |


## Was muss ich anpassen?

Ersetze die im Beispiel verwendeten Tabellen-, Spalten- und Measure-Namen durch deine Modellnamen. Behalte den gezeigten Eingabeort: eine berechnete Spalte ist etwas anderes als ein Measure. Grenzwerte, Ergebnistexte und Filterbedingungen an die fachliche Regel anpassen. Prüfe die gleiche Kennzahl ungefiltert, je Gruppe und im Gesamtergebnis; eine technisch gültige Formel beweist keine passende Datenebene.
