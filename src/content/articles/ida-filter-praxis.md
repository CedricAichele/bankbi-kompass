---
{
  "id": "ida-filter-praxis",
  "slug": "ida-filter-praxis",
  "titel": "Filter in IDA richtig einsetzen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bedingungen verständlich kombinieren und Detailfilter von Filtern auf aggregierte Gruppen unterscheiden. NULL-Werte und Filterreihenfolge bewusst prüfen.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida filter",
    "filter cognos",
    "ida and or",
    "ida summary filter",
    "ida filter greift nicht"
  ],
  "verwandteThemen": [
    "ida-erste-auswertung",
    "ida-granularitaet",
    "ida-prompts",
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
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter",
    "https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf"
  ]
}
---

## Wann brauche ich das?

Du willst eine fachlich klar definierte Teilmenge oder ein Filter verändert eine Summe anders als erwartet. Entscheidend sind Bedingung, Verknüpfung und Zeitpunkt der Anwendung.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Formuliere die Auswahl zuerst in einem Satz mit UND/ODER und klaren Grenzen.
2. Erstelle einen Detailfilter für einzelne Zeilen oder einen Summary Filter für Gruppenkennzahlen.
3. Füge den Ausdruck im passenden Filtereditor ein und validiere ihn.
4. Prüfe bei Detailfiltern die Einstellung vor/nach automatischer Aggregation.
5. Teste Grenzwerte, NULL und mehrere gleichzeitig aktive Filter.
6. Vergleiche Detailzeilen, eindeutige Schlüssel und Summen vor und nach der Auswahl.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Cognos-Detailfilter:
```cognos
[Segment] = 'A' and [Betrag] >= 100
```
Ergebnis: K-A1 und K-A2; Betrag 300. Spaltennamen, Auswahlwert A und Grenze 100 durch die eigene fachliche Regel ersetzen.

## Ergebnis

Der Filter schließt P-B aus. Ein ODER statt UND würde auch Zeilen zulassen, die nur eine Teilbedingung erfüllen. Klammern machen gemischte Bedingungen ausdrücklich: `([Segment] = 'A' or [Segment] = 'B') and [Betrag] > 0`.

## Warum funktioniert das?

Detailfilter prüfen Zeilenbedingungen. Summary Filter prüfen verdichtete Werte für eine festgelegte Gruppierung. IBM unterscheidet bei Detailfiltern zusätzlich die Anwendung vor oder nach automatischer Aggregation. Ein After-auto-aggregation-Detailfilter ist nicht pauschal dasselbe wie jeder Summary Filter.

## Operatoren im Alltag

| Aufgabe | Ausdruck / Muster | Hinweis |
|---|---|---|
| Gleich / ungleich | [Segment] = 'A' / [Segment] <> 'A' | Datentypen müssen passen |
| Grenzen | [Betrag] > 100 / < 100 / >= 100 / <= 100 | Randwert ausdrücklich testen |
| Mehrere Werte | [Segment] in ('A', 'B') | Menge statt Kommazeichenfolge |
| Ausschließen | [Segment] not in ('A', 'B') | NULL gesondert betrachten |
| Bereich | [Betrag] between 100 and 200 | Grenzen eingeschlossen |
| Textmuster | [Produkt] like 'Giro%' / not like 'Giro%' | % und _ sind Platzhalter |
| Fehlende Werte | [Betrag] is null / is not null | Kein = NULL verwenden |
| Verknüpfen | Bedingung and / or Bedingung; not (Bedingung) | Gemischte Logik klammern |

## Vor und nach Aggregation

Bei Gruppierung je Person und Grenze > 100 liefert ein Detailfilter auf Konto-Betrag vor Aggregation nur K-A2/200. Ein Summary Filter auf Personenbetrag > 100 lässt P-A mit beiden Konten und 300 zu. Für beide Varianten die beabsichtigte Gruppierung und die erzeugte Ausgabe prüfen.

## NULL und Zeitstempel

Ein Vergleich mit einem fehlenden Wert ergibt nicht automatisch wahr oder falsch im fachlichen Sinn. Bei einem Outer Join kann ein späterer Filter auf ein rechtes Feld nicht zugeordnete Zeilen ausschließen. Bei Zeitstempeln ist eine Endgrenze am Tagesanfang kein vollständiger letzter Tag.

## Typischer Fehler

Einen Summary Filter auf der falschen Gruppierung anlegen oder mit einem ODER mehr Zeilen einschließen als beabsichtigt. Ein anderer Ausdruck repariert keine ungeklärte fachliche Auswahl.

## Plausibilitätscheck

Mit Segment A und Betrag >= 100: 2 Konten, 1 Person, 300. Vor-Aggregationsfilter Betrag > 100: 1 Konto und 200. Personen-Summary > 100: P-A und 300. Unterschied ist gewollt und erklärbar.
