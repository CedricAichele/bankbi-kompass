---
{
  "id": "dax-ranglisten",
  "slug": "dax-ranglisten",
  "titel": "TOPN, RANKX und CONCATENATEX: Ranglisten nachvollziehen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "Eine synthetische Kundenliste zeigt Ranggleichheit, Top-N-Grenzen und sortierte Textausgabe. Auswahlmenge und Gleichstandsregel werden ausdrücklich festgelegt.",
  "ort": "Power BI Desktop → Modellierung; Eingabeort steht bei jeder Formel",
  "tags": [
    "TOPN",
    "RANKX",
    "CONCATENATEX"
  ],
  "synonyme": [
    "topn",
    "rankx",
    "concatenatex"
  ],
  "verwandteThemen": [
    "sumx",
    "dax-tabellen",
    "dax-variablen",
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
    "https://learn.microsoft.com/en-us/dax/topn-function-dax",
    "https://learn.microsoft.com/en-us/dax/rankx-function-dax",
    "https://learn.microsoft.com/en-us/dax/concatenatex-function-dax"
  ]
}
---

## Wann brauche ich das?
Du möchtest die größten Kunden innerhalb einer Auswahl anzeigen oder eine kurze Liste beschriften. Entscheide vorher, ob Gleichstände mehrere Treffer zulassen und ob Rangwerte innerhalb der Auswahl oder des gesamten Bestands gelten.
## Voraussetzungen
Kunden enthält genau drei Zeilen am gleichen Stichtag: K01/100, K02/100, K03/50. Kunde ist eindeutiger Text, Bestand eine Zahl. Neues Basismeasure: Bestand gesamt = SUM(Kunden[Bestand]).
## Schritte
1. Lege die Tabelle und das Basismeasure an.
2. Erstelle ein Rangmeasure und zeige Kunde, Bestand gesamt und Rang in einem Tabellenvisual.
3. Teste TOPN in einer berechneten Tabelle oder innerhalb einer Kennzahl.
4. Vergleiche Gleichstände mit und ohne zweiten Sortierschlüssel.
## Beispiel
**Neues Measure**:
```dax
Kundenrang = IF(
    ISINSCOPE(Kunden[Kunde]),
    RANKX(ALLSELECTED(Kunden[Kunde]), [Bestand gesamt], , DESC, DENSE)
)
```
Ohne Filter: K01 → **1**, K02 → **1**, K03 → **2**. DENSE lässt nach einem Gleichstand keine Ranglücke; SKIP würde K03 Rang 3 geben. ALLSELECTED wählt hier die im Bericht ausgewählten Kunden. Im Gesamtergebnis bleibt der Rang durch ISINSCOPE leer.

**Modellierung → Neue Tabelle**, zum ungefilterten Test:
```dax
Top mit Gleichstand = TOPN(1, Kunden, Kunden[Bestand], DESC)
```
Ergebnis: **K01 und K02**, also 2 Zeilen. TOPN kann bei Gleichstand am Grenzrang mehr als N Zeilen liefern. Reihenfolge der Rückgabetabelle ist nicht garantiert.

Mit eindeutiger zweiter Sortierung als weitere neue Tabelle:
```dax
Top eindeutig = TOPN(1, Kunden, Kunden[Bestand], DESC, Kunden[Kunde], ASC)
```
Ergebnis: **K01**. Der zweite Schlüssel löst den Gleichstand deterministisch auf. Bei einer Faktentabelle mit mehreren Konten pro Kunde zuerst auf Kundenebene aggregieren; TOPN auf Konten wäre eine andere Frage.

**Neues Measure** für die Textausgabe:
```dax
Topkunden als Text =
VAR TopKunden = TOPN(1, Kunden, Kunden[Bestand], DESC)
RETURN
    CONCATENATEX(TopKunden, Kunden[Kunde], ", ", Kunden[Kunde], ASC)
```
Ungefiltert lautet das Ergebnis **K01, K02**. CONCATENATEX liest jede Zeile des Tabellenausdrucks und verbindet die Texte. Die eigene Sortierangabe ist nötig; die TOPN-Sortierung garantiert keine Ausgabereihenfolge.
## Ergebnis
RANKX liefert einen Rang pro Kontext, TOPN eine Teilmenge und CONCATENATEX einen Text. Sie sind keine austauschbaren Wege zum selben Rückgabetyp.
## Warum funktioniert das?
Rangberechnung braucht eine klar definierte Vergleichsmenge. Das Measure wird je Kunde ausgewertet; der Measure-Aufruf innerhalb des Iterators berücksichtigt dessen Zeile. Ein gespeichertes Top-Tabellenergebnis reagiert nicht neu auf Slicer, ein Measure mit virtueller TOPN-Tabelle dagegen schon.
## Was muss ich anpassen?
Kunden, Kunde, Bestand, Basismeasure, N und Vergleichsmenge ersetzen. ALL statt ALLSELECTED kann eine Rangfolge unabhängig von der Kundenauswahl liefern; das muss zur fachlichen Aussage passen. Für Geldbeträge Präzision prüfen: kleine Gleitkommadifferenzen können scheinbare Gleichstände aufheben.
## Typischer Fehler
Genau 10 Zeilen erwarten, obwohl am zehnten Rang mehrere Kunden gleich sind; Textlisten ohne Sortierschlüssel als stabil ansehen oder den Rang der Gesamtsumme anzeigen.
## Plausibilitätscheck
Gleichstände 100/100 müssen gleiche Ränge erhalten. Ohne K02 verbleiben K01 Rang 1 und K03 Rang 2. Beide TOPN-Varianten und die Textausgabe an den bekannten Ergebnissen prüfen.
