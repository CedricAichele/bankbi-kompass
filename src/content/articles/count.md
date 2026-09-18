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
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/count-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nBetragswerte = COUNT ( Konten[Bestand_EUR] )\n```",
  "schnellschritte": [
    "Tabelle Konten mit synthetischen Daten laden.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Du willst befüllte Werte einer Spalte zählen.

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
Betragswerte = COUNT ( Konten[Bestand_EUR] )
```

## Ergebnis

6 befüllte Beträge. Entferne in einer Kopie den Betrag K006: COUNT = 5, COUNTROWS weiterhin 6.

## Warum funktioniert das?

Das Argument ist eine Spalte, keine Tabelle. COUNT überspringt BLANK, berücksichtigt aber eine vorhandene Null. Für Wahrheitswerte ist COUNTA geeignet.

## Typischer Fehler

**Symptom:** COUNT ist kleiner als die Zeilenzahl. **Ursache:** fehlende Werte. **Lösung:** Erst entscheiden, ob Werte oder Zeilen gezählt werden sollen.

## Plausibilitätscheck

Ersetze den leeren Testwert durch 0: Die Anzahl muss wieder 6 sein.
