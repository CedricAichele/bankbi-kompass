---
{
  "id": "ytd",
  "slug": "ytd",
  "titel": "YTD: seit Jahresbeginn kumulieren",
  "bereich": "Power BI",
  "kategorie": "Zeitintelligenz",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "YTD kumuliert eine Bewegungskennzahl seit Jahresbeginn bis zum gewählten Datum. Monatsbestände dürfen dabei nicht einfach aufaddiert werden.",
  "tags": ["YTD", "DATESYTD", "Jahresbeginn", "Year to date"],
  "synonyme": ["YTD", "DATESYTD", "Jahresbeginn", "Year to date"],
  "verwandteThemen": ["datumstabelle", "vorjahr", "plan-ist"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

YTD beantwortet beispielsweise, wie viel Neugeschäft vom 1. Januar bis zum gewählten Datum entstanden ist. Es ist eine Zeitraumbetrachtung.

## Codebeispiel

Demo_Datum ist eine vollständige, markierte Datumstabelle mit aktiver Beziehung zum Geschäftsdatum. Neugeschaeft summiert die Bewegungsbeträge.

```dax
Neugeschaeft YTD =
CALCULATE (
    [Neugeschaeft],
    DATESYTD ( Demo_Datum[Date] )
)
```

## Synthetisches Beispiel

Januar: 10 Euro; Februar: 15 Euro; März: 12 Euro. Mit einem Datum bis 31. März beträgt YTD 37 Euro. Für Ende Februar sind es 25 Euro.

## Was passiert dabei?

DATESYTD liefert den Datumsbereich seit Beginn des Kalenderjahrs bis zum letzten Datum im aktuellen Kontext. CALCULATE nutzt ihn für die Kennzahl. Andere fachliche Filter, etwa eine Produktgruppe, wirken weiterhin.

## Typischer Fehler

Einen Januarbestand von 100, Februarbestand von 104 und Märzbestand von 101 zu 305 kumulieren. Bestände sind Snapshots; dieselben Positionen können in jedem Monat vorkommen.

## Wann brauche ich etwas anderes?

Bei einem abweichenden Geschäftsjahr muss die Periodenlogik ausdrücklich angepasst werden. Bei Planvergleichen muss auch der Plan zum selben Zeitraum und zur gleichen fachlichen Ebene gehören.

## Wenn du aus Excel kommst

Eine laufende Summe über Monatszellen kann ähnlich aussehen. Das DAX-Measure entsteht aus einer Datumsauswahl im Modell, nicht aus der Position einer Zelle.
