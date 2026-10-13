---
{
  "id": "dax-grundlagen",
  "slug": "dax-grundlagen",
  "titel": "DAX verstehen: Measures, Kontexte und Iteratoren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Ein durchgängiges Beispiel erklärt, wann DAX berechnet, welche Zeilen eine Kennzahl sieht und warum CALCULATE und Iteratoren unterschiedliche Aufgaben haben.",
  "ort": "Power BI Desktop → Modellierung; Eingabeort steht bei jeder Formel",
  "tags": [
    "SUM",
    "CALCULATE",
    "SUMX",
    "FILTER",
    "Grundbegriff"
  ],
  "synonyme": [
    "sum",
    "calculate",
    "sumx",
    "filter",
    "dax grundlagen",
    "zeilenkontext",
    "kontextübergang",
    "iteratoren"
  ],
  "verwandteThemen": [
    "measure-spalte",
    "filterkontext",
    "calculate",
    "sumx",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "ebene": "Kernwissen",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/sum-function-dax",
    "https://learn.microsoft.com/en-us/dax/calculate-function-dax",
    "https://learn.microsoft.com/en-us/dax/sumx-function-dax",
    "https://learn.microsoft.com/en-us/dax/filter-function-dax"
  ]
}
---

## Wann brauche ich das?
Du kannst eine Formel eingeben, aber ihr Ergebnis verändert sich unerwartet mit Slicern, Tabellenzeilen oder Beziehungen. Starte hier, bevor du viele Funktionen kombinierst.
## Voraussetzungen
Über Start → Daten eingeben eine synthetische Tabelle **Konten** anlegen. Bestand als Zahl und IDs als Text laden. Eine Zeile ist ein Konto am selben Stichtag; Bestände verschiedener Stichtage werden hier nicht zusammengerechnet.
## Schritte
1. Lege die drei Beispielzeilen an und prüfe die Zeilenebene.
2. Wähle Modellierung → Neues Measure und lege Bestand gesamt an.
3. Zeige das Measure in einer Karte und in einer Tabelle mit Produkt.
4. Lege eine berechnete Spalte an und vergleiche ihr Verhalten mit dem Measure.
5. Prüfe den Kontextübergang am Beispiel und anschließend einen Iterator.
## Beispiel
| Konto | Produkt | Bestand |
|---|---|---:|
| K01 | A | 10 |
| K02 | A | 20 |
| K03 | B | 5 |

**Measure** über Modellierung → Neues Measure:
```dax
Bestand gesamt = SUM(Konten[Bestand])
```
Ohne Auswahl liefert die Karte **35**. In einer Tabelle mit Produkt liefert A **30**, B **5**, die Gesamtsumme **35**. Der Filterkontext jeder Visualzeile bestimmt die sichtbaren Konten. Ein Slicer A begrenzt auch die Karte auf 30.

**Berechnete Spalte** über Modellierung → Neue Spalte in Konten:
```dax
Bestandsklasse = IF(Konten[Bestand] > 10, "Hoch", "Niedrig")
```
K01 → Niedrig, K02 → Hoch, K03 → Niedrig. Diese Zeilenwerte werden bei der Modellverarbeitung berechnet. Ein Slicer verändert die gespeicherten Klassen nicht; er beschränkt die sichtbaren Zeilen.
## Ergebnis
Measures beantworten Fragen zur aktuellen Auswahl; berechnete Spalten liefern Merkmale je Zeile. Eine Spalte verbraucht Modellspeicher und reagiert während der Berichtsnutzung anders als ein Measure.
## Warum funktioniert das?
**Zeilenkontext** stellt den Wert der aktuellen Zeile bereit. **Filterkontext** begrenzt die sichtbaren Daten. In einer berechneten Spalte würde SUM(Konten[Bestand]) zunächst überall 35 liefern: Die aktuelle Zeile ist noch kein Filter für SUM.

Neue Spalte in Konten, nur zur Demonstration:
```dax
Bestand mit Kontextübergang = CALCULATE(SUM(Konten[Bestand]))
```
Mit den hier eindeutigen Kontozeilen ergibt das **10, 20, 5**. CALCULATE überführt den vorhandenen Zeilenkontext in Filterkontext. Bei identischen doppelten Zeilen kann dabei mehr als eine Zeile erfasst werden. Ein Measure-Aufruf innerhalb eines Zeilenkontexts führt ebenfalls einen Kontextübergang aus.

CALCULATE verändert außerdem Filter. Als neues Measure:
```dax
Bestand A = CALCULATE([Bestand gesamt], Konten[Produkt] = "A")
```
Es liefert 30; eine bestehende Auswahl auf derselben Spalte wird ersetzt, soweit kein KEEPFILTERS verwendet wird. Andere wirksame Filter bleiben relevant.
## Iteratoren und Tabellenfunktionen
SUMX durchläuft eine Tabelle und berechnet den Ausdruck pro Zeile. Als Measure:
```dax
Positiver Bestand = SUMX(FILTER(Konten, Konten[Bestand] > 0), Konten[Bestand])
```
FILTER liefert hier eine Tabelle mit drei Zeilen; SUMX liefert die Zahl 35. Eine Tabellenausgabe allein ist kein gültiges Measure-Ergebnis. Für das Produkt aus Menge und Einzelpreis brauchst du einen Iterator wie SUMX, nicht das Produkt zweier Gesamtsummen.
## Was muss ich anpassen?
Konten ist deine Tabelle, Konten[Bestand] deine Zahlenspalte, [Bestand gesamt] ein vorher angelegtes Measure. Ersetze Produkt und A passend zur eigenen Regel. Bei Tabellennamen mit Leerzeichen etwa 'Monatsbestand'[Betrag] schreiben. Namen und Ergebnistyp müssen stimmen; die offizielle Syntax verwendet Platzhalter, die du nicht unverändert kopierst.
## Typischer Fehler
Der sichtbare Gesamtwert ist keine automatische Summe aller dargestellten Zeilenergebnisse. DAX wertet ein Measure im Gesamtkontext erneut aus. Zeilenkontext, Beziehungen und fachliche Granularität getrennt prüfen.
## Plausibilitätscheck
Kontrolliere 3 Zeilen und 35 Bestand; A hat 2 Zeilen und 30, B 1 und 5. Wechselt die Auswahl, muss sich das Measure entsprechend ändern. Ein Filter ohne Treffer kann BLANK ergeben. Teste auch doppelte Schlüssel und fehlende Werte.
