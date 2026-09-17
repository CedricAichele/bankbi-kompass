---
{
  "id": "vertriebssteuerung",
  "slug": "vertriebssteuerung",
  "titel": "Markt- und Vertriebssteuerung",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie entwickeln sich Bestand, Neugeschäft und Planerreichung je Marktgebiet oder Segment?",
  "tags": ["Markt- und Vertriebssteuerung", "Bankprozess"],
  "synonyme": [],
  "verwandteThemen":
    [
      "star-schema",
      "calculate",
      "filterkontext",
      "ytd",
      "vorjahr",
      "visualisierung",
    ],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Markt- und Vertriebssteuerung“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Wie entwickeln sich Bestand, Neugeschäft und Planerreichung je Marktgebiet oder Segment?

## Typische Datenebenen

Konto und Stichtag für Bestände; einzelner Geschäftsfall für Neugeschäft.

## Beispielhafte Dimensionen

Datum, Marktgebiet, Geschäftsstelle, Segment und Produktgruppe.

## Beispielhafte Kennzahlen

Bestand am Stichtag, Neugeschäft im Zeitraum, eindeutige Personen und relative Veränderung.

## Vollständig synthetisches Mini-Beispiel

Zwei erfundene Marktgebiete Nord und Süd haben am 31.03.2026 Bestände von 120 und 80 Euro. Gemeinsam sind es 200 Euro. Diese Einzelaufnahme sagt noch nichts über Wachstum aus.

## Relevante Power-BI-Konzepte

[Star Schema: Fakten und Dimensionen](#/wissen/star-schema) · [CALCULATE verstehen](#/wissen/calculate) · [Filterkontext verständlich erklärt](#/wissen/filterkontext) · [YTD: seit Jahresbeginn kumulieren](#/wissen/ytd) · [Vorjahresvergleich mit SAMEPERIODLASTYEAR](#/wissen/vorjahr) · [Matrix, Slicer und verständliche Visuals](#/wissen/visualisierung). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Plan und Ist auf verschiedenen Ebenen vergleichen oder Bestände über Monate addieren.

## Datenqualitätsprüfungen

Prüfe gleiche Stichtage, vollständige Gebietszuordnungen und dieselbe Definition von Plan und Ist.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
