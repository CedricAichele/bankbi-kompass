---
{
  "id": "plan-ist",
  "slug": "plan-ist",
  "titel": "Neugeschäft und Plan-Ist",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie viel Neugeschäft wurde im Zeitraum erreicht, und wie groß ist der Abstand zum vergleichbaren Plan?",
  "tags": ["Neugeschäft und Plan-Ist", "Bankprozess"],
  "synonyme": [],
  "verwandteThemen":
    ["measure", "calculate", "ytd", "filterkontext", "visualisierung"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Neugeschäft und Plan-Ist“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Wie viel Neugeschäft wurde im Zeitraum erreicht, und wie groß ist der Abstand zum vergleichbaren Plan?

## Typische Datenebenen

Ist kann je Geschäftsfall vorliegen; Plan häufig je Monat und Produktgruppe. Behalte diese Ebenen in getrennten Tabellen.

## Beispielhafte Dimensionen

Datum, Produktgruppe und erfundene Organisationseinheit.

## Beispielhafte Kennzahlen

Neugeschäft, Plan, Abweichung, Planerreichung und YTD.

## Vollständig synthetisches Mini-Beispiel

Im März beträgt das synthetische Ist 80 Euro, der Plan 100 Euro: Abweichung −20 Euro, Planerreichung 80 %. Bei Plan null ist die Quote ohne zusätzliche Fachregel nicht definiert.

## Relevante Power-BI-Konzepte

[Measures: dein erstes SUM und DIVIDE](#/wissen/measure) · [CALCULATE verstehen](#/wissen/calculate) · [YTD: seit Jahresbeginn kumulieren](#/wissen/ytd) · [Filterkontext verständlich erklärt](#/wissen/filterkontext) · [Matrix, Slicer und verständliche Visuals](#/wissen/visualisierung). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Monatsplan nach einem Join in jeder Detailzeile wiederholen und aufsummieren; YTD-Ist mit Ganzjahresplan verwechseln.

## Datenqualitätsprüfungen

Prüfe Planversion, Periodenabdeckung und gemeinsame Dimensionen. Rechne einen Monat von Hand nach.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
