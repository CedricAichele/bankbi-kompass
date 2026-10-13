---
{
  "id": "dax-beziehungen",
  "slug": "dax-beziehungen",
  "titel": "DAX über Tabellen hinweg: Beziehungen und Zuordnung",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "RELATEDTABLE, USERELATIONSHIP, CROSSFILTER, TREATAS und LOOKUPVALUE lösen unterschiedliche Zuordnungsfragen. Wähle zuerst den Filterweg, dann die Funktion.",
  "ort": "Power BI Desktop → Modellierung; Eingabeort steht bei jeder Formel",
  "tags": [
    "RELATEDTABLE",
    "USERELATIONSHIP",
    "CROSSFILTER",
    "TREATAS",
    "LOOKUPVALUE"
  ],
  "synonyme": [
    "relatedtable",
    "userelationship",
    "crossfilter",
    "treatas",
    "lookupvalue"
  ],
  "verwandteThemen": [
    "beziehungen",
    "related",
    "filterrichtung",
    "aktive-beziehung",
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
    "https://learn.microsoft.com/en-us/dax/relatedtable-function-dax",
    "https://learn.microsoft.com/en-us/dax/userelationship-function-dax",
    "https://learn.microsoft.com/en-us/dax/crossfilter-function-dax",
    "https://learn.microsoft.com/en-us/dax/treatas-function-dax",
    "https://learn.microsoft.com/en-us/dax/lookupvalue-function-dax"
  ]
}
---

## Wann brauche ich das?
Eine Kennzahl soll über einen anderen Datumsbezug laufen, ein Merkmal aus einer zweiten Tabelle holen oder eine unabhängige Auswahl auf die Faktentabelle übertragen. Diese Muster ersetzen keine saubere Modellierung.
## Voraussetzungen
Kunden: K01/Nord, K02/Süd. Konten: K01/10, K01/20, K02/5. Beziehung Kunden[Kunde] **1:n** Konten[Kunde], aktiv mit Filterrichtung Kunden → Konten. Die Kundentabelle enthält eindeutige Textschlüssel. Ein Stichtag gilt für alle drei Bestände.
## Schritte
1. Prüfe die Schlüssel und Beziehung im Modell, bevor du DAX ergänzt.
2. Lege Bestand gesamt = SUM(Konten[Bestand]) als Basismeasure an.
3. Wähle unten das Muster mit dem benötigten Filterweg und beachte den Eingabeort.
4. Kontrolliere bekannte Kunden einzeln und anschließend die Gesamtzahl beziehungsweise Summe.
## Beispiel
### RELATEDTABLE: zugehörige Zeilen lesen
**Neue Spalte in Kunden**:
```dax
Konten je Kunde = COUNTROWS(RELATEDTABLE(Konten))
```
K01 → **2**, K02 → **1**. RELATEDTABLE liefert die zugehörige Tabelle, COUNTROWS die Zahl. Für einen einzelnen Wert aus der 1-Seite in Konten nutze [RELATED](#/wissen/related).

### LOOKUPVALUE: eindeutigen Suchwert holen
**Neue Spalte in Konten**:
```dax
Region gesucht = LOOKUPVALUE(Kunden[Region], Kunden[Kunde], Konten[Kunde])
```
Ergebnis: Nord, Nord, Süd. Rückgabespalte zuerst, danach Suchspalte und Suchwert. Ohne Treffer entsteht BLANK; mehrere Treffer mit verschiedenen Ergebniswerten sind mehrdeutig und können einen Fehler auslösen. Bei einer passenden Beziehung ist RELATED meist der klarere Weg.

### TREATAS: unabhängige Auswahl übertragen
Eine Tabelle Auswahl enthält K01 und K02, **ohne Beziehung**. Slicer auf Auswahl[Kunde], neues Measure:
```dax
Bestand der Auswahl = CALCULATE(
    [Bestand gesamt],
    TREATAS(VALUES(Auswahl[Kunde]), Konten[Kunde])
)
```
Nur K01 ausgewählt → **30**, nur K02 → **5**. Unbekannte Werte finden keine passenden Konten. Anzahl, Reihenfolge und Typen der Zielspalten müssen zum Tabellenausdruck passen. TREATAS ist kein automatischer Ersatz für eine dauerhafte Dimension.
## Alternative Beziehung im Measure
Für das nächste Muster verwende separat **Vorgaenge** mit Betrag sowie Buchungsdatum und Wertdatum als echten Datumswerten. Kalender[Datum] ist eindeutig und lückenlos. Beispiel: Vorgang V01, 10, Buchung 31.01.2026, Wertdatum 01.02.2026. Zwei Beziehungen existieren: Buchungsdatum aktiv, Wertdatum inaktiv. Basismeasure Betrag gesamt = SUM(Vorgaenge[Betrag]).
```dax
Betrag nach Wertdatum = CALCULATE(
    [Betrag gesamt],
    USERELATIONSHIP(Kalender[Datum], Vorgaenge[Wertdatum])
)
```
**Neues Measure**: Beim Kalenderfilter Februar liefert der Wertdatumsbezug 10, der aktive Buchungsbezug hat für diese einzige Zeile keinen Treffer (BLANK). USERELATIONSHIP aktiviert eine bereits vorhandene Beziehung nur für die Berechnung; es legt keine neue an. Bei RLS gelten zusätzliche Einschränkungen.
## Filterrichtung vorübergehend ändern
Im ersten Kunden/Konten-Modell als **neues Measure**:
```dax
Kunden mit sichtbaren Konten = CALCULATE(
    COUNTROWS(Kunden),
    CROSSFILTER(Kunden[Kunde], Konten[Kunde], BOTH)
)
```
Filtere Konten auf Bestand > 15: nur K01 bleibt, Ergebnis **1**. Ohne diesen Filter sind es 2. CROSSFILTER verändert den Filterweg für die Berechnung, nicht dauerhaft das Modell. BOTH nicht wahllos einsetzen; weitere Beziehungen können mehrdeutige Wege erzeugen. Für viele-zu-viele-Beziehungen gelten andere zulässige Richtungsoptionen.
## Ergebnis
Die Funktion richtet sich nach dem Bedarf: zugehörige Zeilen zählen, vorhandene Alternativbeziehung nutzen, Filterrichtung ändern, Auswahl übertragen oder einen eindeutigen Wert suchen.
## Warum funktioniert das?
Beziehungen übertragen Filter auf passende Schlüssel. RELATEDTABLE und LOOKUPVALUE liefern unterschiedliche Ergebnistypen. USERELATIONSHIP und CROSSFILTER sind Modifikatoren innerhalb CALCULATE; TREATAS erzeugt einen Filter aus einer Wertetabelle.
## Was muss ich anpassen?
Tabellen, Schlüssel, Datumsbezug, Ergebnismerkmal und Basismeasure ersetzen. Erst vorhandene Modellbeziehungen und passende Schlüsseltypen kontrollieren. In der Funktion verwendete Endpunkte müssen zu einer existierenden Beziehung passen, wo diese verlangt wird.
## Typischer Fehler
Eine doppelte Kundennummer mit LOOKUPVALUE „reparieren“ oder eine beidseitige Beziehung nur wegen eines passenden Testergebnisses dauerhaft aktivieren. Die Funktion kann einen Modellfehler verdecken.
## Plausibilitätscheck
Nord = 30, Süd = 5, gesamt = 35; Kontenzahlen 2/1. Unbekannten Schlüssel und doppelten Kunden mit abweichender Region separat testen. Beim Datumswechsel muss derselbe Vorgang im anderen Monat erscheinen, nicht zusätzlich zweimal.
