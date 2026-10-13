---
{
  "id": "dax-variablen",
  "slug": "dax-variablen",
  "titel": "VAR / RETURN: DAX verständlich aufbauen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Variablen benennen Zwischenwerte. RETURN liefert das Ergebnis. Damit lassen sich Kennzahlen lesen und einzelne Bestandteile gezielt prüfen.",
  "ort": "Power BI Desktop → Modellierung; Eingabeort steht bei jeder Formel",
  "tags": [
    "DIVIDE",
    "COUNTROWS",
    "CALCULATE"
  ],
  "synonyme": [
    "divide",
    "countrows",
    "calculate"
  ],
  "verwandteThemen": [
    "divide",
    "calculate",
    "dax-grundlagen",
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
    "https://learn.microsoft.com/en-us/dax/divide-function-dax",
    "https://learn.microsoft.com/en-us/dax/countrows-function-dax",
    "https://learn.microsoft.com/en-us/dax/calculate-function-dax"
  ]
}
---

## Wann brauche ich das?
Du verwendest denselben Teilausdruck mehrmals oder möchtest den Zähler und Nenner einer Quote einzeln untersuchen. VAR und RETURN sind Sprachbestandteile, keine Funktionen.
## Voraussetzungen
Die synthetische Tabelle DimKunden enthält K01, K02, K03, K04 genau einmal. Depot hat den Wert 1 für K01/K02 und 0 für K03/K04. Lege zuerst diese zwei Measures an:
```dax
Kunden gesamt = COUNTROWS(DimKunden)
```
```dax
Depotkunden = CALCULATE([Kunden gesamt], DimKunden[Depot] = 1)
```
## Schritte
1. Prüfe die eindeutige Kundenebene und lege die beiden Basismeasures an.
2. Wähle Modellierung → Neues Measure und gib die Quote ein.
3. Formatiere das Measure als Prozent; multipliziere es nicht nochmals mit 100.
4. Teste zur Fehlersuche zeitweise die einzelnen Variablen als Rückgabewert.
## Beispiel
```dax
Quote =
VAR Kunden = [Kunden gesamt]
VAR Depotkunden = [Depotkunden]
RETURN
    DIVIDE(Depotkunden, Kunden)
```
Ohne Filter: Kunden = 4, Depotkunden = 2, Quote = **0,5**, als Prozent **50 %**. Variablennamen ohne eckige Klammern lesen; [Kunden gesamt] ist dagegen ein Measure-Verweis.
## Ergebnis
Eine nachvollziehbare Quote mit getrennt benanntem Zähler und Nenner. Die Variablen gelten nur innerhalb dieses Ausdrucks.
## Warum funktioniert das?
VAR bindet den Wert im Kontext seiner Definition. Die Variable ist kein Formelalias, der in einem späteren CALCULATE neu berechnet wird. Soll ein anderer Filterkontext gelten, berechne den Wert dort explizit. Variablen vermeiden wiederholtes Schreiben; eine pauschale Garantie für eine bestimmte Beschleunigung ergibt sich daraus nicht.
## Debuggen und anpassen
Ersetze testweise RETURN DIVIDE(...) durch RETURN Kunden oder RETURN Depotkunden. Die Karte muss 4 beziehungsweise 2 anzeigen. Danach den ursprünglichen Rückgabewert wieder einsetzen. Ersetze Tabellen- und Measure-Namen, Depotregel und gewünschtes Format. Bei fehlendem Nenner bewusst entscheiden, ob BLANK oder ein fachlich vertretbarer Ersatz gelten soll.
## Typischer Fehler
VAR Kunden = [Kunden gesamt] definieren und danach erwarten, dass CALCULATE(Kunden, ...) den bereits gebundenen Wert neu auswertet. Für einen neu gefilterten Kundenwert das Measure innerhalb CALCULATE verwenden.
## Plausibilitätscheck
2 / 4 = 0,5. Bei einem Filter auf ausschließlich Depotkunden ist die Quote 100 %; das ist der Anteil innerhalb der gefilterten Auswahl. Soll der Nenner unabhängig davon sein, muss dessen Filterregel ausdrücklich definiert werden.
