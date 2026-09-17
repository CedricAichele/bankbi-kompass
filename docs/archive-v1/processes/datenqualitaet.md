---
{
  "id": "datenqualitaet",
  "slug": "datenqualitaet",
  "titel": "Datenqualität und Plausibilisierung",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Sind Kennzahlen anhand der Zeilen, Schlüssel und Datentypen erklärbar? Welche Auffälligkeiten müssen vor der Auswertung untersucht werden?",
  "tags": ["Datenqualität und Plausibilisierung", "Bankprozess"],
  "synonyme": [],
  "verwandteThemen":
    ["datenbereinigung", "granularitaet", "power-query", "summe-zu-hoch"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Datenqualität und Plausibilisierung“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Sind Kennzahlen anhand der Zeilen, Schlüssel und Datentypen erklärbar? Welche Auffälligkeiten müssen vor der Auswertung untersucht werden?

## Typische Datenebenen

Prüfungen beginnen auf der Detailzeile und werden je fachlichem Schlüssel und Zeitraum zusammengefasst.

## Beispielhafte Dimensionen

Prüfart, Tabelle, Datum und synthetische Produktgruppe.

## Beispielhafte Kennzahlen

Fehlende Schlüssel, Mehrfachkombinationen, Fehlerquote und Zeilenanzahl vor und nach einem Join.

## Vollständig synthetisches Mini-Beispiel

Eine linke Übungstabelle hat drei Zeilen. Nach dem Zusammenführen sind es fünf. Zwei Schlüssel treffen mehrfach. Vergleiche zusätzlich die Betragssumme und untersuche die rechten Treffer, bevor du Zeilen entfernst.

## Relevante Power-BI-Konzepte

[Datentypen und Daten bereinigen](#/wissen/datenbereinigung) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) · [Power Query: laden, verbinden, formen](#/wissen/power-query) · [Meine Summe ist zu hoch](#/wissen/summe-zu-hoch). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Dubletten pauschal löschen oder null pauschal durch 0 ersetzen und damit Symptome verstecken.

## Datenqualitätsprüfungen

Prüfe null, Leertext, Schlüsselabdeckung, Typfehler, Datumslücken, Ausreißer und Kontrollsummen. Dokumentiere erwartete Werte sowie Abweichungen vor und nach jedem strukturellen Schritt.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
