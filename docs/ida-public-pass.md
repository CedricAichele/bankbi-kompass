# Öffentlicher IDA-Bereich – Umsetzung und Quellenprüfung

> Historischer Bericht des ersten Umbaus. Die aktuelle Notizstruktur ist in [ida-notes-pass.md](ida-notes-pass.md) dokumentiert.

Stand: 3. November 2026. Projekt: BankBI Kompass.

## Struktur und Umfang

Ein Hauptnavigationseintrag IDA bleibt innerhalb der sieben bestehenden Hauptpunkte. Die Landingpage bietet drei Säulen: Auswertungen & Reporting, GVM und aCI-Batch. Ein eigener Referenzeinstieg steht daneben. Maximal vier direkte Reporting-Einstiege; die Reporting-Übersicht bündelt zehn Themen in drei Gruppen.

15 redaktionelle Inhalte: 14 Praxis-/Grundlagenartikel und eine Formelreferenz. Hinzu kommen drei Navigationsansichten (Landingpage, Reporting-Übersicht, erweiterter Katalog), insgesamt 18 kanonische IDA-Ansichten. Keine neuen Miniartikel pro Funktion.

| Inhalt | Route |
|---|---|
| Abfragen verbinden: Join, Union, Intersect, Except | `#/wissen/ida-abfragen-verbinden` |
| Liste, Kreuztabelle und Berichtsausgabe | `#/wissen/ida-ausgabe` |
| Berechnungen und Aggregationen in IDA | `#/wissen/ida-berechnungen` |
| Scheduling, Versand und Bursting – kurz erklärt | `#/wissen/ida-berichtsbetrieb` |
| agree21CI-Batch / aCI-Batch | `#/wissen/ida-ci-batch` |
| Von der IDA-Auswertung zur Bestandsänderung | `#/wissen/ida-ci-datenbasis` |
| Erste IDA-Auswertung aufbauen | `#/wissen/ida-erste-auswertung` |
| Filter in IDA richtig einsetzen | `#/wissen/ida-filter-praxis` |
| IDA / Cognos – Formeln & Funktionen | `#/wissen/ida-formeln` |
| Granularität und Zeilenebene in IDA | `#/wissen/ida-granularitaet` |
| IDA und GVM: von der Auswahl zur Fallmenge | `#/wissen/ida-gvm-datenbasis` |
| Geschäftsvorfallmanagement (GVM) | `#/wissen/ida-gvm` |
| IDA / Cognos verstehen | `#/wissen/ida-orientierung` |
| Plausibilitätsprüfung und Fehlersuche in IDA | `#/wissen/ida-plausibilitaet` |
| Prompts und Parameter praktisch verwenden | `#/wissen/ida-prompts` |

GVM: Grundlagen sowie Auswahl → Fallmenge, jeweils mit verlinkter Plausibilitätskontrolle. Zwei auffällige Kontozeilen ergeben im synthetischen Personenbeispiel einen fachlichen Prüffall. aCI-Batch: Grundlagen sowie IDA-Auswahl → fachliche Änderungsbasis. Drei ausgewählte Objekte bedeuten im Beispiel zwei notwendige Änderungen; ein Zielkonflikt wird gesondert erklärt. Diese Tabellen sind keine Schnittstellen-/Dateischemata. Beide Ketten sind ausdrücklich Konzepte, keine technische Integrationszusage.

## Konsolidierung des Archivs

Alle 47 Markdown-Dateien unter `docs/archive/ida` wurden als Material gelesen und anhand ihrer Kernaussagen und Kontrollfälle bewertet: 46 IDA-Miniartikel und der frühere generische Reporting-Einstieg. Sie bleiben archiviert und werden nicht in den öffentlichen Inhaltsindex aufgenommen. Zusätzlich wird die historische Laufzeitanalyse-Adresse abgefangen: insgesamt 48 alte IDs mit redaktionell zugeordnetem Ziel.

Übernommen wurden die allgemein erklärbaren Themen und Prüfprinzipien: Zeilenebene, Zählobjekt, Filterzeitpunkt, Parameter, Join-Vervielfachung, Summen/Quoten, Exportstruktur und nachvollziehbare Ausgaben. Neue eigene Sammeltexte und synthetische Beispiele ersetzen die alten Einzelanleitungen. Die alten Texte sind kein neuer Syntaxbeleg. Nicht jeder frühere Detailfall wird als eigener Abschnitt fortgeführt; die Tabelle dokumentiert die fachlich passende Anschlussseite.

| Alter Inhalt | Öffentlicher Anschluss |
|---|---|
| Aggregationsebene festlegen (`ida-aggregation`) | `#/wissen/ida-berechnungen` |
| Anzahl: Zeilen oder eindeutige Schlüssel? (`ida-anzahl`) | `#/wissen/ida-berechnungen` |
| Bericht ausführen und Ausgabeformat wählen (`ida-ausfuehren`) | `#/wissen/ida-erste-auswertung` |
| Mehrere Bedingungen: UND / ODER (`ida-bedingungen`) | `#/wissen/ida-filter-praxis` |
| Berechnetes Datenelement (`ida-berechnung`) | `#/wissen/ida-berechnungen` |
| Ergebnisse reproduzierbar prüfen (`ida-betrieb`) | `#/wissen/ida-berichtsbetrieb` |
| CSV für die Weiterverarbeitung (`ida-csv`) | `#/wissen/ida-ausgabe` |
| Datenelement hinzufügen (`ida-datenelement`) | `#/wissen/ida-erste-auswertung` |
| Dubletten erkennen (`ida-dubletten`) | `#/wissen/ida-granularitaet` |
| Durchschnitt berechnen (`ida-durchschnitt`) | `#/wissen/ida-berechnungen` |
| Detail- oder Gruppierungsebene? (`ida-ebene`) | `#/wissen/ida-granularitaet` |
| Excel-Export kontrollieren (`ida-excel-export`) | `#/wissen/ida-ausgabe` |
| Liste sinnvoll für Excel aufbauen (`ida-excel-liste`) | `#/wissen/ida-ausgabe` |
| Maximum und Minimum (`ida-extrema`) | `#/wissen/ida-berechnungen` |
| Bedingte Berechnung: CASE-/IF-Prinzip (`ida-falllogik`) | `#/wissen/ida-berechnungen` |
| Filterlogik prüfen (`ida-filter-pruefen`) | `#/wissen/ida-plausibilitaet` |
| Filter erstellen (`ida-filter`) | `#/wissen/ida-filter-praxis` |
| Filter vor oder nach Aggregation (`ida-filterebene`) | `#/wissen/ida-filter-praxis` |
| Text-, Zahlen- und Datumsfilter (`ida-filtertypen`) | `#/wissen/ida-filter-praxis` |
| Datums- und Zahlenformate prüfen (`ida-formate`) | `#/wissen/ida-ausgabe` |
| Liste gruppieren (`ida-gruppieren`) | `#/wissen/ida-berechnungen` |
| Nach einem Join richtig aggregieren (`ida-join-aggregation`) | `#/wissen/ida-abfragen-verbinden` |
| Ergebnis vor / nach Join plausibilisieren (`ida-join-pruefen`) | `#/wissen/ida-abfragen-verbinden` |
| Eine Zeile je Konto und Stichtag (`ida-konto`) | `#/wissen/ida-granularitaet` |
| Mehrere 1:n-Joins plausibilisieren (`ida-mehrere-joins`) | `#/wissen/ida-abfragen-verbinden` |
| Filter mit Mehrfachauswahl (`ida-mehrfachauswahl`) | `#/wissen/ida-prompts` |
| NULL und NOT NULL unterscheiden (`ida-not-null`) | `#/wissen/ida-filter-praxis` |
| NULL prüfen und behandeln (`ida-null`) | `#/wissen/ida-formeln?funktion=coalesce` |
| Führende Nullen beim Export erhalten (`ida-nullstellen`) | `#/wissen/ida-plausibilitaet` |
| Parameterwert im Ergebnis anzeigen (`ida-parameter-anzeigen`) | `#/wissen/ida-prompts` |
| Parameter im Filter einsetzen (`ida-parameter-filter`) | `#/wissen/ida-prompts` |
| Mehrere Parameterwerte verwenden (`ida-parameter-mehrfach`) | `#/wissen/ida-prompts` |
| Optionaler Parameter (`ida-parameter-optional`) | `#/wissen/ida-prompts` |
| Parameter-Datentyp festlegen (`ida-parameter-typ`) | `#/wissen/ida-prompts` |
| Parameter / Eingabeaufforderung planen (`ida-parameter`) | `#/wissen/ida-prompts` |
| Langsame Liste eingrenzen (`ida-performance`) | `#/wissen/ida-plausibilitaet` |
| Parameter und Eingabeaufforderung unterscheiden (`ida-prompt`) | `#/wissen/ida-prompts` |
| Quote berechnen (`ida-quote`) | `#/wissen/ida-berechnungen` |
| Liste sortieren (`ida-sortieren`) | `#/wissen/ida-ausgabe` |
| Datenelemente entfernen und umordnen (`ida-spalten`) | `#/wissen/ida-erste-auswertung` |
| Berichtdefinition und Ausgabe unterscheiden (`ida-speichern`) | `#/wissen/ida-erste-auswertung` |
| Mehrere Status je Vorgang (`ida-statusverlauf`) | `#/wissen/ida-granularitaet` |
| Summe berechnen (`ida-summe`) | `#/wissen/ida-berechnungen` |
| Eine Zeile je Vorgang (`ida-vorgang`) | `#/wissen/ida-granularitaet` |
| Zeitplanung fachlich vorbereiten (`ida-zeitplanung`) | `#/wissen/ida-berichtsbetrieb` |
| Zielgranularität vor dem Join festlegen (`ida-zielgranularitaet`) | `#/wissen/ida-granularitaet` |
| Liste erstellen (`reporting`) | `#/wissen/ida-orientierung` |
| Historischer Einstieg `laufzeitanalyse` | `#/wissen/ida-plausibilitaet` |

## Vertraulichkeit

Keine privaten Notizen oder internen Bilder wurden als Quelle verwendet. Es wurden keine Screenshots erstellt, eingebunden oder veröffentlicht. Öffentliche IDA-Inhalte haben leere Bilderlisten. Alle Datenelemente, Bezüge, Zahlen und Kontrolltabellen sind erfunden.

Bewusst ausgeschlossen sind interne Package-/Berichts-/Vorlagennamen, Kennungen, Feldschlüssel, Bankcodes, konkrete Dateinamen und Schemas, Feldlängen aus internen Unterlagen, reale Empfänger, Pfade, Übertragungszyklen, Freigabe-/Berechtigungsabläufe und bankindividuelle Regeln. Auch ein Beispiel-Importformat für aCI-Batch wurde nicht erfunden.

Die Inhaltsprüfung erlaubt ausschließlich die 15 neuen IDs; alte IDs dürfen nicht als Inhalte zurückkehren. Der bestehende Repository-Scan bleibt erhalten und prüft neue IDA-Texte zusätzlich auf Kennungszuweisungen, qualifizierte Modellpfade, Dateinamen und interne Pfade. Neue öffentliche Produktquellen sind nur mit genau festgelegtem Host und Pfad ohne Queryparameter zugelassen. Die Musterprüfung ergänzt die manuelle Redaktion und garantiert keine vollständige Erkennung vertraulicher Inhalte.

## Funktionsreferenz

40 Funktionen und Ausdrucksmuster stehen im Schnellbereich, 75 insgesamt im getrennten erweiterten Katalog. Die 40 sind Teil der 75. Mehrere Varianten derselben Funktion sowie Operator-/Parameter-Muster zählen als eigene Einträge; es sind nicht 75 verschiedene Funktionsnamen. Die Standardliste zeigt kompakte Aufgaben und Namen, Details erst nach Auswahl. Der erweiterte Katalog ist durchsuchbar, gefiltert und auf 25 Einträge je Seite begrenzt.

Kategorien: Aggregation, Logik, NULL, Vergleiche, Text, Datum/Zeit, Typumwandlung, Analyse/Window, Prompt/Parameter, Zahlen, Dimensional / OLAP.

| Herkunft / Verfügbarkeit | Einträge |
|---|---:|
| Cognos / Reporting | 53 |
| Umgebungsabhängig / prüfen | 1 |
| Prompt-/Makrofunktion | 2 |
| Dimensional / OLAP | 8 |
| Datenquellenabhängig | 11 |

Als datenquellenabhängig markiert: `dense_rank`, `row_number`, `lag`, `lead`, `sum over partition`, `avg over partition`, `min over partition`, `max over partition`, `count over partition`, `regexp_replace`, `regexp_like`. SQL-Window-Muster sind für Db2 LUW 12.1 dokumentiert und ausdrücklich keine universellen Cognos-Berichtsformeln. Die Regex-Belege betreffen Db2 for z/OS und nennen die erforderliche passthrough-/Beschleunigungsunterstützung. Median ist zusätzlich als umgebungsabhängig markiert. OLAP steht nur im erweiterten Bereich.

### Art der Quellenprüfung

Aktuelle öffentliche IBM-Cognos-12-Dokumentation belegt Ausdruckskontexte, Function Sets und die Reporting-Methoden. Die direkt zugängliche offizielle IBM-Ausdrucksreferenz in Framework Manager 10.1.1, Anhang B, dient als versionsgebundener Beleg für die konkrete Kernsyntax. Ihr Alter wird in der Eingabehilfe und an jedem zugehörigen Eintrag sichtbar genannt. Daraus folgt keine Zusage für jede aktuelle IDA-Installation.

Beispiele unterscheiden Cognos `total`/`average`/`minimum`/`maximum` von SQL-Suchaliasen SUM/AVG/MIN/MAX, `cast(Ausdruck, Typ)` von nativer SQL-AS-Syntax sowie Parameter, Controls und Makros. Nicht ausreichend belegte Kandidaten wie NVL, zusätzliche Regex- oder Textvarianten wurden nicht als universelle Funktionen aufgenommen.

Syntax und erwartete Ergebnisse wurden redaktionell mit den jeweils verlinkten IBM-Belegen abgeglichen. Die Website führt keine Abfragen aus; eine Laufzeitprüfung in IDA/Cognos ist nicht Bestandteil dieses Nachweises. Jede tatsächliche Installation muss ihre verfügbaren Funktionen und Eingabekontexte selbst validieren.

### IBM- und öffentliche Produkt-/Praxisquellen

- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=query-create-join-relationship)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=subjects-creating-query-sets)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=queries-layout)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationally-add-simple-summary)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions)
- [IBM-Dokumentation](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=subscriptions-creating-job-schedule-multiple-entries)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reporting-bursting-reports)
- [Öffentliches Produktangebot](https://www.rurberatung.de/)
- [Öffentliche Arbeitgeberbeschreibung zu IDA und CI-Batch](https://www.arbeitsagentur.de/jobsuche/jobdetail/14935-00011588_007-S)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=editor-creating-expressions)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=behavior-selecting-function-sets)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query)
- [Öffentlicher agree21-Praxisartikel](https://bankinghub.de/operations/migration-ausbaustufen-agree21)
- [IBM-Dokumentation](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page)

Die drei Produkt-/Praxisquellen belegen nur öffentlich genannte Begriffe und allgemeine Rollen. Sie sind keine offizielle technische Produktdokumentation und belegen keine konkrete Transfer- oder Bearbeitungskette. Auf der Website werden sie entsprechend als öffentliche Produkt-/Praxisquellen beschriftet. Bilder, Kontaktdaten und Arbeitgebernamen daraus wurden nicht in die Artikeltexte übernommen.

### Einzelnachweis für alle 75 Referenzeinträge

| Eintrag | Standard | Kontext | Syntaxquelle |
|---|---|---|---|
| count | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=384) |
| count distinct | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=384) |
| total · Summe | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=394) |
| average · Durchschnitt | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=384) |
| minimum | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=385) |
| maximum | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=384) |
| median | Ja | Umgebungsabhängig / prüfen | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=385) |
| case | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=400) |
| if / then / else | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=399) |
| coalesce | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=417) |
| nullif | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=420) |
| in / not in | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=381) |
| between | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=379) |
| like / not like | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=382) |
| is null / is not null | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=382) |
| upper | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=422) |
| lower | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=419) |
| trim | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=421) |
| substring | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=421) |
| char_length | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=416) |
| position | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=420) |
| Text verketten (+) | Ja | Cognos / Reporting | [IBM Cognos Analytics 12.0 · Ausdrücke und Typen](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query) |
| current_date | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=417) |
| current_timestamp | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=417) |
| extract · year | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=418) |
| extract · month | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=418) |
| extract · day | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=418) |
| _add_days | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=400) |
| _add_months | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=401) |
| _first_of_month | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=403) |
| _last_of_month | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=403) |
| _days_between | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=402) |
| cast · Text | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=416) |
| cast · Zahl | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=416) |
| cast · Datum | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=416) |
| rank | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=389) |
| Parameter ?…? | Ja | Cognos / Reporting | [IBM Cognos Analytics 12.0 · Prompt pages](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page) |
| prompt | Ja | Prompt-/Makrofunktion | [IBM Cognos Analytics 12.0 · Query macros](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query) |
| promptmany | Ja | Prompt-/Makrofunktion | [IBM Cognos Analytics 12.0 · Query macros](https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query) |
| _round | Ja | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=421) |
| abs | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=415) |
| floor | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=418) |
| ceiling | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=416) |
| mod | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=419) |
| power | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=420) |
| ln | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=418) |
| exp | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=418) |
| sqrt | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=421) |
| _add_years | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=401) |
| _day_of_week | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=402) |
| _day_of_year | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=402) |
| _week_of_year | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=404) |
| _make_timestamp | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=403) |
| _days_to_end_of_month | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=402) |
| _months_between | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=403) |
| _years_between | Nein | Cognos / Reporting | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=404) |
| tuple | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=440) |
| set | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=438) |
| currentMember | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=426) |
| parent | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=437) |
| children | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=424) |
| ancestor | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=422) |
| descendants | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=427) |
| caption | Nein | Dimensional / OLAP | [IBM Ausdrucksreferenz · Framework Manager 10.1.1, Anhang B](https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf#page=424) |
| dense_rank | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| row_number | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| lag | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| lead | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| sum over partition | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| avg over partition | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| min over partition | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| max over partition | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| count over partition | Nein | Datenquellenabhängig | [IBM Db2 LUW 12.1 · OLAP specification](https://www.ibm.com/docs/en/db2/12.1.0?topic=expressions-olap-specification) |
| regexp_replace | Nein | Datenquellenabhängig | [IBM Db2 for z/OS · passthrough-only Regex](https://www.ibm.com/docs/en/db2-for-zos/12.0.0?topic=functions-regexp-replace) |
| regexp_like | Nein | Datenquellenabhängig | [IBM Db2 for z/OS · passthrough-only Regex](https://www.ibm.com/docs/en/db2-for-zos/13.0.0?topic=functions-regexp-like) |

## Technische Prüfung und Browser-QA

- `npm ci`: erfolgreiche saubere Installation aus dem aktualisierten Lockfile.
- `npm run typecheck`: bestanden.
- `npm test`: 312 Tests in 14 Dateien bestanden. Bestehende Suchregressionen bleiben geprüft; alte Entwicklungsstatus-Erwartungen wurden an die neue öffentliche Struktur angepasst. Kein Test wurde deaktiviert. Alle 48 historischen Weiterleitungen sind einzeln abgedeckt.
- `npm run content:check -- --strict`: 212 Inhalte gültig; Querverweise und IDA-Whitelist geprüft.
- `npm run privacy:check`: 430 veröffentlichbare Dateien einschließlich dieses Berichts geprüft; 0 strukturelle Vertraulichkeitstreffer.
- `npm run build`: erfolgreich. Hinweise: bestehende Warnung zu einem großen Anwendungs-Chunk sowie unschädliche PURE-Kommentarwarnungen in der neuen Zod-Abhängigkeit. Kein Buildfehler.
- `npm audit`: 0 Schwachstellen nach gezielten Updates auf Vite 7.3.7, Vitest 4.1.12 und Zod 4.6.7. Die Inhaltsschemas wurden dafür nicht gelockert.

Die Tests sichern zusätzlich synthetische Kontrollsummen (3 Kontozeilen, 2 Personen, Summe 350; fehlerhafter Join 5 Zeilen/650), Pflichtfelder der Referenzeinträge, Sprachkontexte, Synonymsuche, Katalogbegrenzung, Kopieren, Abschnittsziele und Vertraulichkeitsmuster. Die vorhandene Frage nach mehr Zeilen nach einem Join findet weiter ihre bestehende Power-Query-Fehlerhilfe.

Browserprüfung am Produktionsbuild, ausschließlich DOM-/Layout- und Bedienprüfung, ohne Bildschirmaufnahmen: alle 13 angeforderten Ansichten bei 1920 × 1080, 1366 × 768 und 390 × 844, insgesamt 39 Kombinationen. Jeweils genau eine Hauptüberschrift, keine horizontale Seitenüberbreite und keine Bilder im IDA-Inhalt. Der lange GVM-Titel bricht auf Mobilgeräten um. Tabellen und Code bleiben innerhalb der jeweiligen Ansicht beziehungsweise ihres Scrollcontainers.

Geprüfte Ansichten: Landingpage, Reporting-Übersicht, Filter, Prompts, Verknüpfungen, Berechnungen, Plausibilitätsprüfung, Schnellreferenz, erweiterter Katalog, GVM, IDA + GVM, aCI-Batch und IDA + aCI-Batch.

Bedienprüfung: globale Suche `ida count distinct` führt zum konkreten Eintrag; 40 kompakte Schnelleinträge, 25 geschlossene Detailkarten je Katalogseite, Folgeseite, Verfügbarkeitsfilter mit acht OLAP-Treffern, konkrete LAG-Suche mit SQL-Kennzeichnung, Kopierstatus, mobile Eingabehilfe, GVM-Kontrollsprung mit Tastaturfokus und historischer Join-Link. Die automatisierten Suchtests prüfen zusätzlich GVM-/CI-Begriffe und natürliche Funktionsaufgaben.

## Veröffentlichung

Commit, Push, Actions-Deployment und abschließende Live-Prüfung werden nach den lokalen Prüfungen ausgeführt. Die konkrete Commit-SHA und der Workflow-Link stehen im Abschlussbericht des Chats.
