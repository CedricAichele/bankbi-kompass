---
{
  "id": "laufzeitanalyse",
  "slug": "laufzeitanalyse",
  "titel": "Prozess- und Laufzeitanalyse",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie lange dauern synthetische Vorgänge, und in welchen Stufen fallen längere Zeiten auf?",
  "tags": ["Prozess- und Laufzeitanalyse", "Bankprozess"],
  "synonyme": [],
  "verwandteThemen": ["granularitaet", "beziehungen", "median", "power-query"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Prozess- und Laufzeitanalyse“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Wie lange dauern synthetische Vorgänge, und in welchen Stufen fallen längere Zeiten auf?

## Typische Datenebenen

Ein Vorgang kann mehrere Stufen und mehrere Ereignisse pro Stufe enthalten. Lege zuerst Anfang und Ende der gewünschten Dauer fest.

## Beispielhafte Dimensionen

Vorgang, generische Stufe und Zeitraum.

## Beispielhafte Kennzahlen

Eindeutige Vorgänge, durchschnittliche Dauer, Median, Anzahl langer Vorgänge und Gesamtdauer.

## Vollständig synthetisches Mini-Beispiel

Vorgang V032 durchläuft Eingang, Bearbeitung und Abschluss mit 1, 2 und 1 Tag ohne Überschneidung. Das sind drei Stufenzeilen, ein Vorgang und vier Tage. Bei parallelen Stufen wäre die Summe der Stufendauern nicht automatisch die Gesamtlaufzeit.

## Relevante Power-BI-Konzepte

[Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) · [Beziehungen und 1:n](#/wissen/beziehungen) · [Median, Durchschnitt und Quoten](#/wissen/median) · [Power Query: laden, verbinden, formen](#/wissen/power-query). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Ereignisse als Vorgänge zählen, offene Vorgänge unbemerkt ausschließen oder Kalendertage mit Arbeitstagen vergleichen.

## Datenqualitätsprüfungen

Prüfe Endzeit vor Startzeit, fehlende Endpunkte, wiederholte Ereignisse und überlappende Zeitintervalle.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
