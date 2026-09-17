---
{
  "id": "stichtagsreporting",
  "slug": "stichtagsreporting",
  "titel": "Stichtagsreporting",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Welcher Bestand gilt am ausgewählten Monatsultimo, und wie hat er sich gegenüber einem vergleichbaren Stichtag verändert?",
  "tags": ["Stichtagsreporting", "Bankprozess"],
  "synonyme": ["Bestand addieren", "Snapshot"],
  "verwandteThemen": ["stichtag", "datumstabelle", "vorjahr", "power-query"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Stichtagsreporting“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Welcher Bestand gilt am ausgewählten Monatsultimo, und wie hat er sich gegenüber einem vergleichbaren Stichtag verändert?

## Typische Datenebenen

Eine Zeile je Konto und Stichtag. Der fachliche Schlüssel enthält beide Merkmale.

## Beispielhafte Dimensionen

Datum, Produktgruppe und Segment.

## Beispielhafte Kennzahlen

Bestand am Stichtag und absolute beziehungsweise relative Bestandsänderung.

## Vollständig synthetisches Mini-Beispiel

31.01.2026: 100 Mio. Euro; 28.02.2026: 104 Mio. Euro; 31.03.2026: 101 Mio. Euro. Der Märzbestand ist 101 Mio. Euro. 305 Mio. Euro ist kein sinnvoller aktueller Bestand.

## Relevante Power-BI-Konzepte

[Stichtag, Snapshot und Bestand](#/wissen/stichtag) · [Eine verlässliche Datumstabelle](#/wissen/datumstabelle) · [Vorjahresvergleich mit SAMEPERIODLASTYEAR](#/wissen/vorjahr) · [Power Query: laden, verbinden, formen](#/wissen/power-query). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Snapshots als zusätzliche Geschäftsvorfälle behandeln oder unterschiedliche letzte Liefertage mischen.

## Datenqualitätsprüfungen

Prüfe Eindeutigkeit je Konto und Stichtag, Vollständigkeit der Lieferung und gemeinsame Vergleichstermine.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
