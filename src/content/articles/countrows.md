---
{
  "id": "countrows",
  "slug": "countrows",
  "titel": "COUNTROWS: Zeilen zählen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "COUNTROWS zählt Zeilen einer Tabelle im gültigen Kontext. Das ist nicht automatisch die Anzahl eindeutiger Personen.",
  "ort": "Power BI → Neues Measure",
  "tags": [
    "COUNTROWS: Zeilen zählen",
    "Reporting"
  ],
  "synonyme": [
    "COUNT vs DISTINCTCOUNT"
  ],
  "verwandteThemen": [
    "distinctcount",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/countrows-function-dax"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/dax-pruefergebnisse.jpg",
      "alt": "Power-BI-DAX-Abfrage mit sechs Zeilen, vier Personen und Gesamtbestand 9000",
      "caption": "Echter Laufzeitcheck in Power BI Desktop: COUNT 6, COUNTROWS 6, DISTINCTCOUNT 4, SUM 9000, Einlagen 4050, Quote 0,45 und SUMX 80. Der SUMX-Wert nutzt die separate Positionsdemo.",
      "schema": false,
      "schritt": 1,
      "hinweis": "Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true,
  "kurzformel": "```dax\nKontenzeilen = COUNTROWS ( Konten )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Du willst die Zahl der Datensätze im aktuellen Ausschnitt kennen.

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
Kontenzeilen = COUNTROWS ( Konten )
```

### Nachher · Beispielergebnis

6 ohne Filter, 2 für P001, 3 für Einlagen.

## Ergebnis

Die Zeilen der angegebenen Tabelle werden im aktuellen Filterkontext gezählt.

## Warum funktioniert das?

COUNTROWS erhält eine Tabelle. Es zählt deren sichtbare Zeilen unabhängig davon, welche Spalte befüllt ist. Das ist keine Personenzählung.

## Typischer Fehler

**Symptom:** 6 vermeintliche Personen. **Ursache:** Konten- statt Personenebene. **Lösung:** Für Personen DISTINCTCOUNT auf Personennummer verwenden.

## Plausibilitätscheck

Vergleiche die sechs Kontonummern mit den vier verschiedenen Personen.
