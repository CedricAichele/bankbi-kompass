---
{
  "id": "removefilters",
  "slug": "removefilters",
  "titel": "REMOVEFILTERS: Filter gezielt aufheben",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "REMOVEFILTERS entfernt die angegebenen Filter für eine Berechnung, etwa für einen Anteilsnenner.",
  "ort": "Power BI → DAX-Measure mit CALCULATE",
  "tags": [
    "REMOVEFILTERS: Filter gezielt aufheben",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "calculate",
    "filterkontext",
    "divide"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/removefilters-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nBestand alle Produkte = CALCULATE ( SUM ( Konten[Bestand_EUR] ), REMOVEFILTERS ( Konten[Produktgruppe] ) )\n```",
  "schnellschritte": [
    "Tabelle Konten mit synthetischen Daten laden.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Ein Nenner soll den Produktfilter ignorieren, den Personenfilter aber behalten.

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
Bestand alle Produkte = CALCULATE ( SUM ( Konten[Bestand_EUR] ), REMOVEFILTERS ( Konten[Produktgruppe] ) )
```

## Ergebnis

P003 und Einlagen ausgewählt: 4.000 im Measure, 800 in der ungeänderten Summe.

## Warum funktioniert das?

REMOVEFILTERS entfernt im CALCULATE-Kontext die Einschränkung der angegebenen Spalte. Es bereinigt keine Daten und entfernt keinen Filter einer anderen Tabelle.

## Typischer Fehler

**Symptom:** Nenner ignoriert auch Person. **Ursache:** zu breit entfernte Filter. **Lösung:** die konkrete Produktspalte statt der gesamten Tabelle freigeben.

## Plausibilitätscheck

Wechsle P003 zu P001: der Nenner muss auf 2.000 wechseln.
