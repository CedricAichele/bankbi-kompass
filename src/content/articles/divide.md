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
  "synonyme": [],
  "verwandteThemen": [
    "plan-ist",
    "blank",
    "measure"
  ],
  "kontexte": [
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/divide-function-dax"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```dax\nEinlagenanteil = DIVIDE ( CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = \"Einlagen\" ), CALCULATE ( SUM ( Konten[Bestand_EUR] ), REMOVEFILTERS ( Konten[Produktgruppe] ) ) )\n```",
  "schnellschritte": [
    "Tabelle Konten mit synthetischen Daten laden.",
    "Neues Measure mit der angegebenen Formel erstellen.",
    "Ergebnis ohne Filter und mit Slicer vergleichen."
  ]
}
---

## Wann brauche ich das?

Du brauchst einen Anteil mit kontrolliertem Verhalten bei Nenner null.

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
Einlagenanteil = DIVIDE ( CALCULATE ( SUM ( Konten[Bestand_EUR] ), Konten[Produktgruppe] = "Einlagen" ), CALCULATE ( SUM ( Konten[Bestand_EUR] ), REMOVEFILTERS ( Konten[Produktgruppe] ) ) )
```

## Ergebnis

45 % ohne weitere Filter: 4.050 / 9.000. Für P003: 20 % aus 800 / 4.000.

## Warum funktioniert das?

Erstes Argument: Zähler. Zweites: Nenner. DIVIDE liefert bei Nenner null oder BLANK standardmäßig BLANK; ein optionales drittes konstantes Argument kann einen Ersatzwert festlegen. Hier entfernt nur der Nenner den Produktfilter.

## Typischer Fehler

**Symptom:** 4.500 % statt 45 %. **Ursache:** zusätzlich mit 100 multipliziert. **Lösung:** 0,45 berechnen und nur das Format Prozent wählen.

## Plausibilitätscheck

Prüfe Zähler und Nenner zunächst als zwei getrennte Karten. Ein Anteil über 100 % kann auf unterschiedliche Filter oder Bezugsgrößen hinweisen.
