---
{
  "id": "ida-prompts",
  "slug": "ida-prompts",
  "titel": "Prompts und Parameter praktisch verwenden",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Berichtsauswahl über Value Prompts bereitstellen, Parameter wiederverwenden und Einfach-, Mehrfach- sowie optionale Auswahl gezielt testen.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida prompt",
    "cognos parameter",
    "mehrere werte prompt",
    "ida mehrfachauswahl",
    "prompt liefert keine werte"
  ],
  "verwandteThemen": [
    "ida-erste-auswertung",
    "ida-granularitaet",
    "ida-filter-praxis",
    "ida-abfragen-verbinden"
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
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query"
  ]
}
---

## Wann brauche ich das?

Derselbe Bericht soll mit wechselndem Segment oder Zeitraum laufen. Nutzende sollen gültige Werte auswählen können, ohne den Filter jedes Mal umzuschreiben.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Lege das fachliche Datenelement, seinen Typ und den Parameternamen fest.
2. Erzeuge in Cognos Reporting eine Prompt-Seite und ein geeignetes Control, etwa Value Prompt. Die tatsächliche IDA-Bedienung kann abweichen.
3. Verknüpfe das Control mit einem neuen oder bestehenden Parameter.
4. Wähle Einfach- oder Mehrfachauswahl. Richte verwendeten Wert und sichtbare Beschriftung passend ein.
5. Erzeuge den parameterisierten Filter über den Assistenten. Für Mehrfachauswahl eine Mitgliedschaftsprüfung verwenden.
6. Entscheide Pflicht, optional und gegebenenfalls Standardwert ausdrücklich.
7. Teste einzelne, mehrere, keine und nicht verfügbare Werte sowie die Wiederverwendung in weiteren Abfragen.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Einfachauswahl mit selbst angelegtem Parameter pSegment, als Filterausdruck:
```cognos
[Segment] = ?pSegment?
```
A ergibt zwei Konten und 300. Ein Value Prompt ist das sichtbare Eingabefeld; pSegment ist der Wert, den der Filter verwendet. Derselbe Parameter kann in mehreren passenden Filtern referenziert werden.

## Ergebnis

Auswahl A: 2 Konten, 1 Person, 300. Auswahl B: 1 Konto, 1 Person, 50. Mehrfachauswahl A+B: 3 Konten, 2 Personen, 350.

## Warum funktioniert das?

Das Control sammelt die Auswahl; der Parameter verbindet Auswahl und Berichtsausdruck. Ein angezeigter Text kann sich vom tatsächlich verwendeten Wert unterscheiden. Ein Makro erzeugt dagegen Ausdrucks-/Abfragetext und ist nicht einfach ein weiteres Prompt-Control.

## Mehrfachauswahl und Makros

Für einen zugelassenen Cognos-Makrofilter zeigt IBM promptmany. Beispiel mit synthetischem Parameter:
```cognos
[Segment] in (#promptmany('pSegment', 'string')#)
```
Der Parameter liefert bei A+B eine Menge korrekt quotierter Werte. Die Zeichenfolge 'A,B' wäre ein einzelner Wert. Bei Einfachauswahl ist `#prompt('pSegment', 'string')#` das entsprechende Makromuster. Makroblöcke stehen zwischen #; nicht mit M-, DAX- oder JavaScript-Funktionen verwechseln.

## Pflicht, optional und Standard

Ein Pflichtprompt verlangt einen gültigen Wert. Bei einem optionalen Filter kann die Auswahl nach der eingerichteten Usage-Einstellung entfallen. Ein Standardwert ist eine explizite Vorauswahl; „leer“ bedeutet nicht von selbst „alle“. DefaultText in prompt/promptmany ist Ausdruckstext und muss im jeweiligen Kontext korrekt sein. Für einfache Berichte den Prompt-Assistenten nutzen, statt SQL-Text aus freien Eingaben zusammenzubauen.

## Typischer Fehler

Ein Control auf Mehrfachauswahl stellen, den Filter aber als Gleichheitsvergleich belassen. Oder dieselbe sichtbare Beschriftung für unterschiedliche technische Werte als eindeutige Auswahl behandeln.

## Plausibilitätscheck

Prüfe A, B, A+B und keine Auswahl getrennt. Für die leere Auswahl die beabsichtigte Pflicht-/Optionalregel dokumentieren. Liefert der Prompt keine Werte, zuerst Werteabfrage, aktive Filter, Datenstand, Typ und Wert/Beschriftungszuordnung prüfen.
