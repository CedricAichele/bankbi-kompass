---
{
  "id": "dax-tabellen",
  "slug": "dax-tabellen",
  "titel": "DAX-Tabellen: auswählen, ergänzen und gruppieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "DISTINCT, SELECTCOLUMNS, ADDCOLUMNS, SUMMARIZE und SUMMARIZECOLUMNS erzeugen Tabellen. Das Beispiel zeigt Zeilenzahlen, Gruppenergebnisse und die passenden Eingabeorte.",
  "ort": "Power BI Desktop → Modellierung; Eingabeort steht bei jeder Formel",
  "tags": [
    "DISTINCT",
    "ADDCOLUMNS",
    "SELECTCOLUMNS",
    "SUMMARIZE",
    "SUMMARIZECOLUMNS"
  ],
  "synonyme": [
    "distinct",
    "addcolumns",
    "selectcolumns",
    "summarize",
    "summarizecolumns"
  ],
  "verwandteThemen": [
    "dax-values",
    "dax-grundlagen",
    "calculate",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/distinct-function-dax",
    "https://learn.microsoft.com/en-us/dax/distinct-table-function-dax",
    "https://learn.microsoft.com/en-us/dax/addcolumns-function-dax",
    "https://learn.microsoft.com/en-us/dax/selectcolumns-function-dax",
    "https://learn.microsoft.com/en-us/dax/summarize-function-dax",
    "https://learn.microsoft.com/en-us/dax/summarizecolumns-function-dax"
  ]
}
---

## Wann brauche ich das?
Du brauchst eine virtuelle Zwischentabelle für eine Kennzahl oder eine kleine modellierte Auswertung. Eine Tabellenfunktion ist kein direktes skalares Measure.
## Voraussetzungen
Konten besitzt drei Zeilen: A/10, A/20, B/5 mit Spalten Produkt (Text) und Bestand (Zahl). Die Ergebnisse unten sind synthetisch und zunächst ungefiltert.
## Schritte
1. Lege Konten über Daten eingeben an und prüfe die Gesamtzahl 3 sowie Summe 35.
2. Öffne Modellierung → Neue Tabelle, um die einzelnen Tabellenausdrücke zu untersuchen.
3. Vergleiche Zeilenzahl und Spalten jeder Ergebnistabelle.
4. Verwende für eine dynamische Kennzahl den Tabellenausdruck innerhalb eines Measures.
## Beispiel
Jede Definition **einzeln als neue Tabelle** anlegen:
```dax
Produkte = DISTINCT(Konten[Produkt])
```
Ergebnis: eine Spalte, zwei Zeilen **A, B**. DISTINCT entfernt doppelte Werte. Anders als VALUES ergänzt es keine unbekannte Leerzeile aufgrund einer verletzten Beziehung; vorhandene BLANK-Werte bleiben möglich.

```dax
Auswahl = SELECTCOLUMNS(Konten, "Produktname", Konten[Produkt], "Betrag", Konten[Bestand])
```
Ergebnis: Produktname/Betrag mit A/10, A/20, B/5. SELECTCOLUMNS projiziert und benennt Spalten; es gruppiert nicht und entfernt keine doppelten Zeilen.

```dax
Ergaenzt = ADDCOLUMNS(Konten, "Doppelter Bestand", Konten[Bestand] * 2)
```
Ergebnis: die ursprünglichen Spalten plus **20, 40, 10**. Der ergänzte Ausdruck wird je Zeile ausgewertet. Eine Aggregation mit SUM an dieser Stelle benötigt eine bewusste Kontextentscheidung.

```dax
Gruppen = SUMMARIZE(Konten, Konten[Produkt])
```
Ergebnis: A und B. Gruppierungsspalten sind vorhandene Spalten. Für zusammengefasste Kennzahlen ist eine getrennte Ergänzung oft leichter zu prüfen:
```dax
Gruppen mit Bestand = ADDCOLUMNS(
    SUMMARIZE(Konten, Konten[Produkt]),
    "Summe", CALCULATE(SUM(Konten[Bestand]))
)
```
Ergebnis: **A/30, B/5**. CALCULATE überführt die aktuelle Gruppenzeile in Filterkontext.

```dax
Gruppen kompakt = SUMMARIZECOLUMNS(
    Konten[Produkt],
    "Summe", SUM(Konten[Bestand])
)
```
Ebenfalls A/30 und B/5 für diese eine Tabelle. SUMMARIZECOLUMNS übernimmt Gruppierung und benannte Ausdrücke. Sein Verhalten bei mehreren Tabellen, Filtern und BLANK ist nicht pauschal identisch mit SUMMARIZE; nur Gruppen mit mindestens einem nichtleeren Ausdruck werden gewöhnlich ausgegeben.
## Ergebnis
SELECTCOLUMNS und ADDCOLUMNS behalten hier 3 Zeilen; DISTINCT und beide Gruppierungen ergeben 2. Keine dieser Funktionen ist ein Ersatz für die Wahl der fachlichen Datenebene.
## Warum funktioniert das?
Tabellen sind DAX-Zwischenergebnisse. Ein Measure kann sie auswerten, etwa:
```dax
Sichtbare Produkte = COUNTROWS(DISTINCT(Konten[Produkt]))
```
Als **neues Measure** liefert das ungefiltert 2, beim Produktfilter A nur 1. Berechnete Tabellen werden hingegen bei der Modellverarbeitung erstellt und reagieren nicht neu auf Berichtsslicer. In der DAX-Abfrageansicht steht vor einem Tabellenausdruck EVALUATE; das ist ein Statement, keine Funktion.
## Was muss ich anpassen?
Konten, Produkt und Bestand ersetzen; Namen der Ergebnisspalten frei wählen. Schlüssel und Stichtag in die Gruppierung aufnehmen, wenn sie zur Ebene gehören. Eine virtuelle Tabelle braucht keine gespeicherte Kopie im Modell, sofern nur eine Kennzahl darauf aufbaut.
## Typischer Fehler
SELECTCOLUMNS mit einer Gruppierung verwechseln oder SUM ohne Kontextübergang je Gruppenzeile wiederholen. Viele-zu-viele-Kombinationen mehrerer Dimensionen können andere Zeilenzahlen erzeugen als das kleine Beispiel.
## Plausibilitätscheck
3 Eingabezeilen → 2 Produkte; Gruppensumme 30 + 5 = 35. Prüfe zusätzlich Filter A, fehlende Produkte, BLANK-Beträge und doppelte Schlüssel.
