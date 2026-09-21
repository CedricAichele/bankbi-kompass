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
    "anzahl nichtleer"
  ],
  "verwandteThemen": [
    "countrows",
    "distinctcount"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/count-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nBetragswerte = COUNT ( Konten[Bestand_EUR] )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
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
