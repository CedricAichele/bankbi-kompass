---
{
  "id": "kundenansprache",
  "slug": "kundenansprache",
  "titel": "Kundenanalyse und Kundenansprache",
  "bereich": "Bankprozesse",
  "kategorie": "Analyseszenarien",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wie lässt sich eine abstrakt definierte Zielgruppe auf der richtigen Datenebene beschreiben und plausibilisieren?",
  "tags": ["Kundenanalyse und Kundenansprache", "Bankprozess"],
  "synonyme": [],
  "verwandteThemen": ["distinctcount", "granularitaet", "datenbereinigung"],
  "prozessBezug": [],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "prozess",
}
---

> Generische bankfachliche Analyseszenarien. Keine Abbildung eines realen Kreditinstituts.

## Worum geht es?

Ein mögliches generisches Analyseszenario ist die Auswertung „Kundenanalyse und Kundenansprache“. Es dient zum Verständnis analytischer Methoden, nicht als Vorgabe für einen realen Ablauf.

## Typische Fragestellungen

Wie lässt sich eine abstrakt definierte Zielgruppe auf der richtigen Datenebene beschreiben und plausibilisieren?

## Typische Datenebenen

Personenebene für eine eindeutige Ergebnisliste; Konten nur als ergänzende Analyseebene.

## Beispielhafte Dimensionen

Abstrakte Segmentmerkmale und betrachteter Stichtag.

## Beispielhafte Kennzahlen

Eindeutige Personen, fehlende Merkmale und Mehrfachzeilen.

## Vollständig synthetisches Mini-Beispiel

P001 kommt wegen zwei Konten zweimal in einer rein synthetischen Ausgangsliste vor. Eine Auswertung auf Personenebene weist P001 einmal aus. Das sagt nichts darüber aus, ob eine konkrete Ansprache zulässig wäre.

## Relevante Power-BI-Konzepte

[DISTINCTCOUNT: eindeutige Kunden zählen](#/wissen/distinctcount) · [Granularität: Was bedeutet eine Zeile?](#/wissen/granularitaet) · [Datentypen und Daten bereinigen](#/wissen/datenbereinigung). Beginne mit der Datenebene und prüfe anschließend die Kennzahl im gewünschten Filterkontext.

## Excel-Bezug

Eine PivotTable kann die definierte Ebene verdichten. Prüfe Wertfeldeinstellungen und den Stichtags- beziehungsweise Zeitraumfilter. Eine Nachschlageformel ersetzt keine Prüfung der Schlüssel.

## Reporting-/IDA-Bezug

Eine Liste dient zur Detailkontrolle, eine Kreuztabelle zur Verdichtung. Hier sind ausschließlich allgemeine Darstellungs- und Aggregationsprinzipien gemeint.

## Typische Fehler

Eine technisch passende Ergebnisliste mit einer freigegebenen Anspracheliste gleichsetzen. Diese Seite enthält keine Selektions- oder Einwilligungslogik.

## Datenqualitätsprüfungen

Zielgruppe fachlich definieren, Person und Konto unterscheiden, Dubletten und Datenqualität prüfen und Ergebnis plausibilisieren. Berechtigungen und Datenschutz nach den jeweils geltenden internen Vorgaben berücksichtigen.

## Datenschutz und Vertraulichkeit

Alle Namen, Kennungen und Zahlen dieser Seite sind frei erfunden. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet. Keine offizielle Anwendung eines Kreditinstituts. Diese Seite enthält keine internen Prozesse oder Berechtigungsregeln und keine rechtliche Beurteilung einer konkreten Kundenansprache.
