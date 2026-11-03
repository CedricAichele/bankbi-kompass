---
{
  "id": "ida-berichtsbetrieb",
  "slug": "ida-berichtsbetrieb",
  "titel": "Scheduling, Versand und Bursting – kurz erklärt",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeitgesteuerte Ausführung, Bereitstellung und zielgruppenspezifische Ausgabe unterscheiden. Funktionen, Ausgabeformate und Zugriffsrechte im eigenen Cognos-Kontext prüfen.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida scheduling",
    "ida versand",
    "ida bursting",
    "burst",
    "bericht zeitgesteuert"
  ],
  "verwandteThemen": [
    "ida-erste-auswertung",
    "ida-granularitaet",
    "ida-filter-praxis",
    "ida-prompts"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=subscriptions-creating-job-schedule-multiple-entries",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reporting-bursting-reports"
  ]
}
---

## Wann brauche ich das?

Ein geprüfter Bericht soll wiederholt ausgeführt oder in getrennten Ausschnitten bereitgestellt werden. Dieser Überblick erklärt die allgemeinen Begriffe, keine institutsinternen Versand- oder Betriebsabläufe.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung. Der Bericht ist fachlich geprüft. Benötigte Funktionen und geeignete Testziele müssen im eigenen Rahmen verfügbar sein.

## Schritte

1. Entscheide: nur zeitgesteuert ausführen, Ausgabe bereitstellen oder zusätzlich in Ausschnitte aufteilen?
2. Prüfe Datenstand, Parameter und das gewünschte Format für den vorgesehenen Lauf.
3. Stelle sicher, dass zeitgesteuerte Ausführung und Bereitstellung mit den vorhandenen Rechten möglich sind.
4. Für Bursting die fachliche Trennregel und zugehörige Ausgabezuordnung prüfen.
5. Eine kontrollierte Testausgabe vergleichen, bevor das Ergebnis wiederholt bereitgestellt wird.
6. Erfolg, fehlende Ausgaben, Inhalt und vorgesehenen Empfängerkreis fachlich kontrollieren.

## Beispiel

Rein synthetisches Bursting-Konzept: Nord erhält die Nord-Ausgabe mit zwei Kontozeilen und 300; Süd erhält die Süd-Ausgabe mit einer Kontozeile und 50. Die Bezeichnungen Nord und Süd stehen für erfundene Ausschnitte, nicht für reale Empfängergruppen. Es werden keine Adressen oder Versandregeln vorgegeben.

## Ergebnis

Scheduling steuert den Ausführungszeitpunkt. Versand beziehungsweise Bereitstellung steuert, wie ein Ergebnis zugänglich wird. Bursting teilt die Ausgabe anhand einer definierten Regel. Diese drei Entscheidungen sind verwandt, aber nicht gleichbedeutend.

## Warum funktioniert das?

IBM beschreibt Bursting als einen Berichtslauf mit anschließender Aufteilung in Empfängerausschnitte. Die richtige Zuordnung des Ausschnitts ist genauso wichtig wie der Rechenwert. Eine Meldung „Lauf erfolgreich“ beweist keine korrekte inhaltliche Trennung.

## Grenzen und Verfügbarkeit

Kurz erklärt: Ausgabeoptionen hängen von Version, Format, Lizenz und Berechtigung ab. IBM nennt Einschränkungen für Kreuztabellen und Diagramme beim Bursting; unter passenden Master-Detail-Konstellationen gelten wiederum andere Formatgrenzen. Daraus folgt keine universelle Freigabe für beliebige CSV-, PDF- oder Excel-Ausgaben. Die konkret verlinkte IBM-Dokumentation prüfen. Interne Ziele, Zyklen und Betriebsschritte werden hier nicht beschrieben.

## Typischer Fehler

Einen richtigen Gesamtbericht als Beleg nehmen, dass auch jede einzelne Burst-Ausgabe richtig zugeordnet ist. Ebenso sind gespeicherte Parameterauswahl und Datenaktualität getrennt zu prüfen.

## Plausibilitätscheck

Nord-Ausgabe enthält nur die zwei Nord-Konten, Süd nur das Süd-Konto. Beide Ausschnitte erklären zusammen 3 Konten und 350. Zusätzlich leere und fehlerhafte Ausschnitte sowie die tatsächliche Verfügbarkeit der Ausgabe prüfen.
