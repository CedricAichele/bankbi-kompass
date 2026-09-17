---
{
  "id": "kundenstruktur",
  "slug": "kundenstruktur",
  "titel": "Kundenstruktur",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie viele unterschiedliche Personen gibt es, und wie verteilen sie sich auf Segmente?",
  "tags": ["Kundenstruktur", "Bankprozess"],
  "synonyme": ["einzigartige Kunden", "eindeutige Kunden"],
  "verwandteThemen":
    ["distinctcount", "granularitaet", "beziehungen", "star-schema"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Kundenstruktur“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Wie viele unterschiedliche Personen gibt es, und wie verteilen sie sich auf Segmente?

## Typische Datenebenen

Eine Person kann mehrere Konten haben. Kontenzeilen und Personenebene müssen auseinandergehalten werden.

## Beispielhafte Dimensionen

Stichtag, synthetisches Segment und Geschäftsstelle.

## Beispielhafte Kennzahlen

Eindeutige Personen, Konten und Konten je Person.

## Vollständig synthetisches Mini-Beispiel

P001 besitzt K-A und K-B; P002 besitzt K-C. Es gibt drei Zeilen, drei Konten und zwei Personen. Wird P001 zwei Produktgruppen zugeordnet, darf die Summe der Gruppenanzahlen die Gesamtpersonenzahl übersteigen.

## Relevante Power-BI-Konzepte

[DISTINCTCOUNT: eindeutige Kunden zählen](#/wissen/distinctcount) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) · [Beziehungen und 1:n](#/wissen/beziehungen) · [Star Schema: Fakten und Dimensionen](#/wissen/star-schema). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Kontenzeilen als Kunden zählen oder legitime Mehrfachkonten löschen.

## Datenqualitätsprüfungen

Prüfe fehlende Personenkennungen, fachliche Eindeutigkeit und die Segmentzuordnung zum betrachteten Stichtag.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
