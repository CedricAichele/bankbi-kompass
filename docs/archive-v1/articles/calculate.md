---
{
  "id": "calculate",
  "slug": "calculate",
  "titel": "CALCULATE verstehen",
  "bereich": "Power BI",
  "kategorie": "DAX",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "CALCULATE wertet einen Ausdruck in einem veränderten Filterkontext aus. Die Kennzahl bleibt gleich, die Auswahl für ihre Berechnung ändert sich.",
  "tags": ["CALCULATE verstehen", "SUMMEWENNS"],
  "synonyme": ["CALCULATE verstehen", "SUMMEWENNS"],
  "verwandteThemen": ["filterkontext", "measure", "dax-filter"],
  "prozessBezug": [],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

CALCULATE beantwortet: „Wie groß ist diese Kennzahl, wenn ich ihre Filter gezielt ändere?“ Eine einfache Summe braucht kein CALCULATE.

## Einfaches Beispiel

Demo_Produkt enthält je PRODUKT_ID genau eine Produktgruppe. Eine aktive 1:n-Beziehung führt zu Demo_Bestand. Alle Beträge gehören zu einem einzigen Stichtag.

```dax
Bestand = SUM ( Demo_Bestand[BESTAND_EUR] )

Aktivbestand =
CALCULATE (
    [Bestand],
    Demo_Produkt[PRODUKTBEREICH] = "Aktiv"
)
```

## Was passiert dabei?

Das Measure Bestand bleibt unverändert. CALCULATE setzt für seine Auswertung den Filter auf den Produktbereich Aktiv. Sind synthetisch 120 Euro Aktivbestand und 80 Euro Passivbestand vorhanden, ergibt sich 120 Euro.

## Ein wichtiger Unterschied

Ein vorhandener Filter auf **derselben Spalte** PRODUKTBEREICH wird normalerweise ersetzt. Ein Slicer auf Passiv verhindert hier daher nicht den Wert für Aktiv. Filter auf anderen Spalten bleiben grundsätzlich bestehen und können die Datenmenge weiter einschränken. Mit KEEPFILTERS lässt sich stattdessen die Schnittmenge mit dem bestehenden Filter bilden.

## Typischer Fehler

CALCULATE um jedes Measure zu schreiben. Verwende es, wenn eine bewusste Kontextänderung nötig ist. Es behebt keine doppelt geladenen Daten.

## Wenn du aus Excel kommst

SUMMEWENNS summiert anhand ausdrücklich genannter Bedingungen. CALCULATE verändert den Kontext eines beliebigen Ausdrucks und arbeitet mit dem Datenmodell. Das ist eine hilfreiche Brücke, keine 1:1-Entsprechung.

## Öffentliche Quelle

[Microsoft Learn: CALCULATE](https://learn.microsoft.com/en-us/dax/calculate-function-dax)
