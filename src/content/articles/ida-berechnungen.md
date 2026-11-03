---
{
  "id": "ida-berechnungen",
  "slug": "ida-berechnungen",
  "titel": "Berechnungen und Aggregationen in IDA",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zählungen, Summen, Bedingungen und Quoten auf einer geklärten Zeilenebene aufbauen. Ranking und Window-Ausdrücke stehen als getrennte fortgeschrittene Muster daneben.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida berechnung",
    "cognos aggregation",
    "ida summe",
    "ida count",
    "ida count distinct",
    "ida rank",
    "ida top n"
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
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions",
    "https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf",
    "https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification"
  ]
}
---

## Wann brauche ich das?

Aus einer Detailtabelle sollen eine Summe, eindeutige Personenzahl, Quote oder Klasse entstehen. Du brauchst dafür Zähleinheit, Gruppierung und die Syntax des tatsächlichen Ausdruckskontexts.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Definiere Detail- oder Gruppenberechnung und den gewünschten Umfang.
2. Wähle die Eingabedatenelemente und prüfe Zahl, Text, Datum und NULL.
3. Lege in Cognos ein berechnetes Datenelement an. Gib den Ausdruck ein und validiere ihn.
4. Vergleiche die Funktion mit der Hilfe des konkreten Expression Editors.
5. Teste ein kleines Beispiel ohne Filter und anschließend mit einer Auswahl.
6. Prüfe Detailausgabe, Gruppenergebnis und Berichtsgesamt getrennt.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

| Frage | Cognos-Ausdruck im Berichtsgesamt | Ergebnis |
|---|---|---:|
| Konten über gefüllten Schlüssel zählen | count([Konto] for report) | 3 |
| Personen eindeutig zählen | count(distinct [Person] for report) | 2 |
| Betrag summieren | total([Betrag] for report) | 350 |
| Durchschnitt je Konto | average([Betrag] for report) | 116,666… |
| Kleinster Betrag | minimum([Betrag] for report) | 50 |
| Größter Betrag | maximum([Betrag] for report) | 200 |
| Median | median([Betrag] for report) | 100 |

SUM, AVG, MIN und MAX sind nützliche Suchbegriffe beziehungsweise SQL-Namen; im gezeigten Cognos-Berichtsausdruck werden total, average, minimum und maximum verwendet.

## Ergebnis

P-A hat 2 Konten und 300, P-B 1 Konto und 50. Die gesamte Auswahl hat 3 Konten und 2 Personen. Die Durchschnittsfrage muss sagen, ob Konten oder Personen die Bezugsgröße sind: 350/3 ist nicht 350/2.

## Warum funktioniert das?

Ein Datenelementausdruck wird im Kontext von Abfrage und Bericht ausgewertet. Gruppierung und Aggregationseigenschaften können den Umfang verändern. `for report` macht im Beispiel den Berichtsumfang ausdrücklich. NULL wird bei einer Zählung vorhandener Werte nicht mitgezählt; eine Quote ist häufig das Verhältnis zweier Summen und nicht der Durchschnitt von Einzelquoten.

## Bedingungen und NULL

Berechnete Spalte für eine fachlich bestätigte Klasse:
```cognos
case when [Betrag] is null then 'Fehlt'
     when [Betrag] > 100 then 'Hoch'
     else 'Bis 100' end
```
Die Beispielwerte ergeben Bis 100, Hoch, Bis 100. Als einfache Zweiteilung ohne NULL: `if ([Betrag] > 100) then ('Hoch') else ('Bis 100')`. `coalesce([Betrag], 0)` ersetzt fehlende Beträge nur, wenn 0 fachlich begründet ist. `nullif([Nenner], 0)` kann einen Nullnenner kennzeichnen; Ergebnis- und Zahlentypen einer Division prüfen.

## Top-N und Ranking

Relationales Cognos-Beispiel: `rank([Betrag] desc for report)`. Für 100, 100, 50 entstehen 1, 1, 3. Ein Filter Rang <= 1 lässt beide Spitzenwerte zu. Ein festes N benötigt zusätzlich eine eindeutige Regel für Gleichstände. Erst die gewünschte Ebene aggregieren, dann die Rangfolge dieser Werte betrachten. [rank nachschlagen](#/wissen/ida-formeln?funktion=rank).

## Fortgeschritten: Window und Partition

Db2-SQL-Muster wie `DENSE_RANK() OVER (ORDER BY BETRAG DESC)`, `ROW_NUMBER() OVER (ORDER BY BETRAG DESC, OBJEKT)` oder `SUM(BETRAG) OVER (PARTITION BY OBJEKT)` sind keine pauschal verfügbaren Cognos-Berichtsformeln. Dense Rank ergibt bei 100,100,50 die Ränge 1,1,2. Row Number vergibt 1,2,3 bei eindeutiger Sortierung. Window-Ausdrücke behalten Detailzeilen; ein wiederholter Gruppenbetrag darf nicht erneut aufsummiert werden. LAG/LEAD benötigen eine eindeutige Zeitreihenfolge. Verfügbarkeit hängt vom Function Set, Datenquellentyp und dessen Version ab. [Erweiterten Katalog bewusst öffnen](#/ida/referenz?gruppe=Analyse%2FWindow).

## Was muss ich anpassen?

Datenelemente, Filterumfang, Gruppierung und fachliche Grenzwerte ersetzen. Keine SQL-Typnamen als eigenständige Cognos-Funktionen interpretieren. Der [Katalog](#/wissen/ida-formeln) trennt Berichtsausdruck, Makro, OLAP und datenquellenabhängiges SQL.

## Typischer Fehler

Einen Mittelwert aus bereits verdichteten Mittelwerten berechnen, ohne deren Gewichte zu kennen. Oder COUNT eines teilweise leeren Felds als vollständige Zeilenzahl ausgeben.

## Plausibilitätscheck

3 Konten, 2 Personen, 350 Betrag; Durchschnitt je Konto 350/3, Median 100. Mit Segment A: 2 Konten, 1 Person, 300. Eine neue Gruppierung darf nicht unerklärt zu einer höheren Summe führen.
