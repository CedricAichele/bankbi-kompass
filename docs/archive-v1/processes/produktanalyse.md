---
{
  "id": "produktanalyse",
  "slug": "produktanalyse",
  "titel": "Produkt- und Bestandsanalyse",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Welche erfundenen Produktgruppen verändern ihren Bestand und welchen Anteil haben sie am Gesamtbestand?",
  "tags": ["Produkt- und Bestandsanalyse", "Bankprozess"],
  "synonyme": [],
  "verwandteThemen": ["star-schema", "dax-filter", "measure", "vorjahr"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Produkt- und Bestandsanalyse“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Welche erfundenen Produktgruppen verändern ihren Bestand und welchen Anteil haben sie am Gesamtbestand?

## Typische Datenebenen

Konto je Stichtag; Produktbeschreibungen liegen getrennt und eindeutig vor.

## Beispielhafte Dimensionen

Produkt, Produktgruppe, Produktbereich, Segment und Datum.

## Beispielhafte Kennzahlen

Bestand, eindeutige Personen, Anteil am definierten Gesamtbestand und Veränderung zum Vorjahr.

## Vollständig synthetisches Mini-Beispiel

Produktgruppe A enthält am selben Stichtag 60 Euro, Gruppe B 40 Euro. Der Anteil von A an beiden Gruppen beträgt 60 %. Ein Slicer kann den gewünschten Nenner verändern; definiere deshalb, ob ausgewählte oder alle Produkte gemeint sind.

## Relevante Power-BI-Konzepte

[Star Schema: Fakten und Dimensionen](#/wissen/star-schema) · [FILTER, REMOVEFILTERS und SELECTEDVALUE](#/wissen/dax-filter) · [Measures: dein erstes SUM und DIVIDE](#/wissen/measure) · [Vorjahresvergleich mit SAMEPERIODLASTYEAR](#/wissen/vorjahr). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Reale Produkthierarchien übernehmen oder für Anteilsquoten versehentlich den Datumsfilter entfernen.

## Datenqualitätsprüfungen

Prüfe Produktzuordnungen und dokumentiere den Nenner der Quote. Stelle gleiche Stichtage sicher.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
