---
{
  "id": "ida-reporting",
  "slug": "ida-reporting",
  "titel": "Auswertungen & Reporting",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Mein IDA-Spickzettel: Ebenen, Filter, Joins, Prompts, Berechnungen, Ausgabe und die Kontrollen, die ich bei einer Auswertung brauche.",
  "ort": "Persönliche IDA-Arbeitsnotizen",
  "tags": [
    "Auswertungen & Reporting",
    "IDA-Notizen"
  ],
  "synonyme": [
    "ida reporting",
    "ida auswertung",
    "join",
    "ida join",
    "union",
    "ida union",
    "ida filter",
    "mehrfachauswahl",
    "ida mehrfachauswahl",
    "prompts",
    "ida parameter",
    "burst",
    "bursting",
    "ida scheduling",
    "ida summe",
    "ida granularität",
    "ida kreuztabelle",
    "ida plausibilitätsprüfung"
  ],
  "verwandteThemen": [
    "ida-formeln",
    "ida-gvm",
    "ida-ci-batch"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Kernwissen",
  "praxis": false,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter",
    "https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=query-create-join-relationship",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=subjects-creating-query-sets",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions",
    "https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=queries-layout",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationally-add-simple-summary",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=subscriptions-creating-job-schedule-multiple-entries",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reporting-bursting-reports"
  ],
  "darstellung": "ida-note"
}
---

Bei normalen bzw. angeforderten Auswertungen ist für meine Arbeit meistens eine Liste die eigentliche Ausgabe. Weitere Bearbeitung erfolgt teilweise über Textfelder; Filter, Berechnungen und Gruppierungen ergänze ich je nach Abteilung und Anforderung. Umfangreiche Visualisierung ist in IDA für mich weniger zentral; dafür kann Power BI geeigneter sein.

## Grundregeln

- Zuerst festlegen, was eine Ergebniszeile bedeutet.
- Kunden-, Konto- und Vorgangsebene nicht ungeprüft mischen.
- Nur benötigte Datenelemente aufnehmen; Filter und Stichtag sichtbar halten.
- Schlüssel und Ergebnisanzahl bei jeder Verbindung kontrollieren.
- Bei auffälligen Summen zuerst nach vervielfachten Zeilen suchen.

## Ebenen / Granularität

| Ebene | Eine Zeile bedeutet |
|---|---|
| Kunde | eine Person, z. B. über die Personennummer |
| Konto | ein Konto über die Kontonummer |
| Vorgang | ein fachlicher Vorgang; mehrere Vorgänge können zu einer Person gehören |
| Kunde × Konto | eine Zuordnung; eine Person kann mehrfach vorkommen |
| Konto × Stichtag | ein Kontobestand zu einem Zeitpunkt |

Vor einer Zählung festlegen, welche fachliche Einheit gemeint ist: Person, Konto, Haushalt, Organisation oder eine andere Einheit. Kunden- und Kontodaten bei Bedarf in getrennten Abfragen vorbereiten und erst danach gezielt verbinden.

Vollständig erfundene Beispieldaten, ein gemeinsamer Stichtag:

| Personennummer | Kontonummer | Geschäftsstelle | Bestand |
|---|---|---|---:|
| 10001 | 4711 | Mannheim | 1.500 |
| 10001 | 4712 | Mannheim | 4.000 |
| 10002 | 5821 | Heidelberg | 2.500 |

Das sind drei Konten und zwei Personen. Auf Personenebene ergeben sich 5.500 und 2.500 Bestand. Wiederholte Personennummern sind hier keine Dubletten. Bei mehreren Stichtagen nicht alle Bestände zum aktuellen Bestand addieren.

## Filter

| Zweck | Ausdrücke |
|---|---|
| Vergleichen | `=`, `<>`, `>`, `<`, `>=`, `<=` |
| Wertemenge | `IN`, `NOT IN` |
| Bereich | `BETWEEN` – Grenzen eingeschlossen |
| Textmuster | `LIKE` – `%` für beliebig viele, `_` für ein Zeichen |
| Fehlende Werte | `IS NULL`, `IS NOT NULL` |
| Verknüpfen | `AND`, `OR`, `NOT` |

Beispiel: `([Geschäftsstelle] = 'Mannheim' or [Geschäftsstelle] = 'Heidelberg') and [Bestand] > 0`. Gemischte UND-/ODER-Bedingungen klammern. NULL ist weder 0 noch leerer Text; bei NOT IN fehlende Werte gesondert prüfen.

Ein **Detailfilter** bezieht sich auf Detaildatenelemente. Seine Anwendung kann in Cognos vor oder nach der automatischen Aggregation liegen. Ein **Summary Filter** filtert Gruppen anhand ihrer aggregierten Werte; den Geltungsbereich der Gruppe mitprüfen. „Einzelkonto über 3.000“ und „Gesamtbestand je Person über 3.000“ sind verschiedene Auswahlen.

Neben ausdrücklich angeforderten Filtern auch fachlich notwendige Status-, Ausschluss- und Qualitätsfilter prüfen. Diese sind fach- und institutsabhängig.

## Abfragen verbinden

### Join

Zwei Abfragen bzw. Tabellen über eine oder mehrere Verbindungsspalten zusammenführen. Vorher prüfen, welche Treffer auf beiden Seiten vorkommen:

| Beziehung | Bedeutung |
|---|---|
| 1:1 | je Schlüssel höchstens ein passender Datensatz auf beiden Seiten |
| 1:n / n:1 | eine Seite hat mehrere passende Detailzeilen |
| n:m | Mehrfachtreffer auf beiden Seiten können sich vervielfachen |

Mehr Zeilen nach einem Join können fachlich korrekt sein. Wird aber ein Personenbestand an mehrere Kontenzeilen gehängt, steht derselbe Betrag mehrfach da. Eine anschließende Summe kann dadurch falsch werden. Bei historischen Daten gegebenenfalls Kontonummer **und** Stichtag verbinden. Ein Left Join erhält linke Zeilen ohne Treffer; ein nachgelagerter Filter auf rechte Merkmale kann diese wieder ausschließen.

### Union / Intersect / Except

**Union** hängt Abfragen mit kompatiblem Spaltenaufbau untereinander. Reihenfolge, Datentypen und Bedeutung der Spalten müssen zusammenpassen. **Intersect** liefert gemeinsame Ergebniszeilen, **Except** die Zeilen der ersten Menge ohne Entsprechung in der zweiten. Die gewählte Behandlung doppelter Ergebniszeilen prüfen; Union ist kein Join.

## Prompts / Parameter

Ein Prompt-Control, z. B. einen Value Prompt, auf die Prompt-Seite bzw. in den Bericht ziehen und mit einem neuen oder vorhandenen Parameter verbinden.

- Einfachauswahl: einen Wert auswählen; Filter z. B. `[Geschäftsstelle] = ?pGeschaeftsstelle?`.
- Mehrfachauswahl: mehrere Werte; mengenbasierter Filter mit `IN`. Passendes [promptmany-Muster](#/wissen/ida-formeln?funktion=promptmany).
- Pflicht / optional und Standardwert bewusst einstellen. „Keine Auswahl“ muss eine klare Bedeutung haben.
- Übergebenen Wert und Datentyp prüfen; angezeigte Beschriftung und verwendeter Wert können verschieden sein.
- Parameter können in weiteren passenden Ausdrücken wiederverwendet werden. Das sichtbare Control, der Parameter und ein Makro sind unterschiedliche Dinge.

## Berechnungen & Aggregationen

Kurze Notation für relationale Cognos-Berichtsausdrücke; die tatsächliche Gruppierung bestimmt den Umfang:

| Gesucht | Cognos-Ausdruck |
|---|---|
| gefüllte Kontowerte zählen | `count([Kontonummer])` |
| eindeutige Personen | `count(distinct [Personennummer])` |
| Summe (SUM) | `total([Bestand])` |
| Durchschnitt (AVG) | `average([Bestand])` |
| Minimum / Maximum (MIN / MAX) | `minimum([Bestand])` / `maximum([Bestand])` |
| Median | `median([Bestand])` – Unterstützung prüfen |
| Fallunterscheidung | `case when [Bestand] > 0 then 'Positiv' else 'Nicht positiv' end` |
| zwei Alternativen | `if ([Bestand] > 0) then ('Positiv') else ('Nicht positiv')` |
| begründeter NULL-Ersatz | `coalesce([Bestand], 0)` |

COUNT ignoriert NULL-Werte im gezählten Ausdruck. Fehlende Bestände nur dann durch 0 ersetzen, wenn das fachlich passt. Gesamtquoten aus Gesamtzähler und Gesamtnenner bilden; Gruppenquoten nicht ungeprüft mitteln.

### Top-N / Ranking

`rank([Bestand] desc for report)` ordnet absteigend; Gleichstände können Ranglücken erzeugen. Ein Top-N-Filter kann deshalb mehr als N Zeilen liefern. `dense_rank`, `row_number` und Window-Muster sind im [erweiterten Katalog](#/ida/referenz) als datenquellenabhängig gekennzeichnet. Für eindeutige Reihenfolgen zusätzliche Sortiermerkmale festlegen.

Weitere Beispiele und kurze Hinweise: [Formeln & Funktionen](#/wissen/ida-formeln).

## Liste / Kreuztabelle

**Liste:** Detaildaten oder Arbeitsliste. Eine klare Kopfzeile, fachliche Schlüssel und benötigte Merkmale; sichtbare Gruppenköpfe sind keine automatische Verdichtung.

**Kreuztabelle:** verdichteter Vergleich, z. B. Geschäftsstelle × Produktgruppe mit Anzahl oder Bestand. Die Zähleinheit muss auch hier stimmen.

Für Excel möglichst eine flache Datenliste ausgeben. Kennungen als Text behandeln; Datums- und Zahlenwerte nach dem Export prüfen. Steht eine CSV komplett in einer Spalte: [CSV in Excel richtig einlesen und trennen](#/wissen/excel-csv-spalten).

## Scheduling / Versand / Bursting

- **Scheduling:** Bericht zeitgesteuert ausführen; Datenbereitstellung und Parameter müssen dazu passen.
- **Versand:** Ausgabeformat und Empfängerzuordnung prüfen. Kontrollieren, ob nur ein Link oder der eigentliche Bericht versendet wird.
- **Bursting:** Bericht anhand eines Gruppierungsschlüssels in zugeordnete Teilausgaben aufteilen. Zuordnung und Inhalt vor dem Versand prüfen.

Ausgabeformat und gültige Auswahl mit dem Ergebnis festhalten. Ein erfolgreicher Lauf beweist noch keinen aktuellen oder vollständigen Datenstand.

## Kontrolle

- Anzahl der Ergebniszeilen und eindeutige fachliche Schlüssel prüfen; bei komplexen Abfragen Kontrollzahlen mitführen.
- Für eine Zählung nichtleerer Werte z. B. `count([Kontonummer] for report)` verwenden. Einen verlässlich gefüllten Schlüssel wählen; dadurch werden nicht stillschweigend NULL-Zeilen übergangen.
- Summen vor und nach einem Join vergleichen; fehlende und mehrfache Treffer untersuchen.
- Filter testweise einzeln entfernen oder ergänzen, um Abweichungen einzugrenzen.
- Einzelne Fälle vom Detail bis zum Ergebnis nachverfolgen.
- NULL-Werte und Grenzfälle kontrollieren.
- Detaildaten gegen das Aggregat prüfen; Zeitraum und Stichtag gleich halten.
