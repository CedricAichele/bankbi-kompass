---
{
  "id": "sum",
  "slug": "sum",
  "titel": "SUM: Spalte summieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUM addiert die Zahlen einer Spalte unter den aktuell wirksamen Filtern.",
  "ort": "Power BI → Neues Measure",
  "tags": [
    "SUM: Spalte summieren",
    "Bestandsanalyse",
    "Reporting"
  ],
  "synonyme": [
    "SUMME"
  ],
  "verwandteThemen": [
    "sumx",
    "calculate",
    "stichtag"
  ],
  "kontexte": [
    "Bestandsanalyse",
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/sum-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nGesamtbestand = SUM ( Konten[Bestand_EUR] )\n```",
  "schnellschritte": [
    "Vorhandene Tabelle und benötigte Datentypen prüfen.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Du benötigst einen additiven Betrag für die aktuelle Auswahl.

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
Gesamtbestand = SUM ( Konten[Bestand_EUR] )
```

### Nachher · Beispielergebnis

9.000 gesamt; P003 hat 4.000.

## Ergebnis

Die vorhandenen numerischen Spaltenwerte im aktuellen Filterkontext werden addiert.

## Warum funktioniert das?

SUM erhält genau eine numerische Spalte. Das Measure addiert nur Zeilen im aktuellen Filterkontext. Monatliche Bestände sind über die Zeit nicht additiv.

## Typischer Fehler

**Symptom:** Bestand verdoppelt. **Ursache:** mehrere Stichtage oder vervielfachte Zeilen. **Lösung:** Stichtag und Kontengranularität kontrollieren.

## Plausibilitätscheck

1.250 + 750 + 2.000 + 3.200 + 800 + 1.000 = 9.000.
