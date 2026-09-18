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
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/countrows-function-dax"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/dax-pruefergebnisse.jpg",
      "alt": "Power-BI-DAX-Abfrage mit sechs Zeilen, vier Personen und Gesamtbestand 9000",
      "caption": "Echter Laufzeitcheck in Power BI Desktop: COUNT 6, COUNTROWS 6, DISTINCTCOUNT 4, SUM 9000, Einlagen 4050, Quote 0,45 und SUMX 80. Der SUMX-Wert nutzt die separate Positionsdemo.",
      "schema": false
    }
  ],
  "praxis": true,
  "kurzformel": "```dax\nKontenzeilen = COUNTROWS ( Konten )\n```",
  "schnellschritte": [
    "Tabelle Konten mit synthetischen Daten laden.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---


## Wann brauche ich das?

Du willst die Zahl der Datensätze im aktuellen Ausschnitt kennen.

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
Kontenzeilen = COUNTROWS ( Konten )
```

## Ergebnis

6 ohne Filter, 2 für P001, 3 für Einlagen.

## Warum funktioniert das?

COUNTROWS erhält eine Tabelle. Es zählt deren sichtbare Zeilen unabhängig davon, welche Spalte befüllt ist. Das ist keine Personenzählung.

## Typischer Fehler

**Symptom:** 6 vermeintliche Personen. **Ursache:** Konten- statt Personenebene. **Lösung:** Für Personen DISTINCTCOUNT auf Personennummer verwenden.

## Plausibilitätscheck

Vergleiche die sechs Kontonummern mit den vier verschiedenen Personen.
