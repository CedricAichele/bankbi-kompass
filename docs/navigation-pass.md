# Informationsarchitektur und Navigation · 13.10.2026

Die vorhandenen 156 Artikel und 197 öffentlichen Einträge bleiben erhalten. Keine Artikeltexte, Funktionsbestände, Beispieldateien oder Bildassets wurden verändert. Sichtbarkeit und Navigation wurden gezielt reduziert.

## Hauptnavigation

Vorher 12 Punkte, jetzt 7: Start · Power BI · Excel · IDA · Probleme & Lösungen · Favoriten · Über.

Entfernt aus der permanenten Navigation: Typische Aufgaben, Power Query, DAX, Werkzeugwahl und Datenbegriffe. Alle bisherigen Routen bleiben erhalten. Aufgaben und Werkzeugwahl sind auf Start verlinkt, Datenbegriffe über Nachschlagen, Suche und Querverweise. Power Query und DAX sind als Unterbereiche von Power BI sichtbar, einschließlich Brotkrümeln (Start → Power BI → DAX → CALCULATE; Start → Power BI → Power Query → Merge).

## Bereichseinstiege und Linkzahlen

| Ansicht | Vorher sichtbare Inhaltslinks im Hauptbereich | Danach insgesamt | Davon direkte Einstiege in den Bereichskarten |
|---|---:|---:|---:|
| Power BI | 50 | 24 | 18 |
| Excel | 61 | 21 | 15 |

Gezählt wurden Links im main-Element ohne Hauptnavigation, Topbar und Footer; Alle-Themen-Links sind in der Gesamtzahl enthalten. Bei Power BI gibt es 6 zusätzliche Alle-Themen-Wege, bei Excel 5 Bereichswege und einen getrennten Link zur erweiterten Formelreferenz. Die Begrenzung der direkten Einstiege bezieht sich auf die primary-links der Karten.

Power BI: sechs Bereiche Daten aufbereiten, Datenmodell, DAX & Kennzahlen, Berichte bauen, Fehler finden, Nachschlagen. Je ein kurzer Satz, drei direkte Einstiege und ein weiterführender Link. Modell- und Berichtsthemen haben eigene Unteransichten. Alte gruppe-URLs funktionieren weiter.

Excel: fünf Bereiche Daten vorbereiten, Formeln, Auswerten, Power Query, Probleme. Vorbereitung, Formeln und Auswertung besitzen tiefer liegende Themenansichten; Fehler sind nach Werkzeug gefiltert. Die erweiterte Formelreferenz bleibt getrennt. Gemeinsam nutzbare Power-Query-Anleitungen werden verlinkt und nicht dupliziert.

Power Query: sechs Bereiche Start, Prüfen & bereinigen, Transformieren, Kombinieren, M / Code, Kontrolle; 19 direkte Themenlinks. Abfragen organisieren und weitere Transformationen liegen eine Ebene tiefer. Öffentliche Unterteilungen nach Kernwissen/Praxisartikel/Referenz wurden entfernt; die Metadaten bleiben intern erhalten.

## DAX und M

DAX: /dax beginnt mit 16 Aufgaben, zeigt danach 32 wichtige Funktionen in sieben kompakten Gruppen, Grundlagenlinks und zuletzt einen deutlich getrennten Zugang zum erweiterten Katalog. Ohne Suchbegriff sind sichtbar:

- Grundlagen: SUM, AVERAGE, MIN, MAX, COUNT, COUNTROWS, DISTINCTCOUNT, DIVIDE.
- Filter & Kontext: CALCULATE, FILTER, REMOVEFILTERS, ALL, VALUES, SELECTEDVALUE, HASONEVALUE.
- Logik: IF, SWITCH, ISBLANK, COALESCE.
- Iteratoren: SUMX, AVERAGEX.
- Beziehungen: RELATED, LOOKUPVALUE, USERELATIONSHIP.
- Zeit: DATEADD, SAMEPERIODLASTYEAR, DATESYTD, TOTALYTD, EOMONTH.
- Analyse: RANKX, TOPN, CONCATENATEX.

/wissen/dax-formeln bleibt die separate vollständige Referenz mit 464 eindeutigen Funktionen, 15 Kategorien, Suche, Praxisrelevanz, Häufigkeitsfilter und Pagination. Die normale DAX-Ansicht rendert diese Referenz nicht. Spezialfunktionen erscheinen ausschließlich im erweiterten Katalog; die Aufgabenübersicht funktioniert ohne Kenntnis der Funktionsnamen.

M: 20 häufig benötigte Funktionen/Muster vor den Suchfiltern. Ein Klick führt zum ausgewählten Detail. Der vollständige praktische Katalog mit 111 Einträgen bleibt als bewusst aufklappbare Übersicht erhalten. Bestehende Funktions- und Kategorien-Direktlinks bleiben nutzbar. Code, Eingabehilfe und Ergebnisse wurden nicht inhaltlich neu geschrieben.

## Inhaltsnavigation und Status

Die bisherige pauschale Regel (ab zehn Abschnitten) erzeugte 44 Inhaltsnavigationen. Bei 40 dieser Einträge wird sie entfernt; elf gezielt ausgewählte umfangreiche Workflows, Grundlagen- und Referenzseiten erhalten eine Inhaltsnavigation. XVERWEIS bleibt ohne TOC.

Beibehalten beziehungsweise neu gezielt vorgesehen: pq-workflow, dateien-kombinieren, pq-benutzerdefiniert, pq-profiling, dax-grundlagen, excel-liste-vorbereiten, excel-power-query, pivottable, power-query-m, dax-formeln, excel-formeln.

Desktop: semantische Hauptpunkte und maximal eine eingerückte Unterebene. Im Power-Query-Workflow: Quelle verstehen, Daten prüfen, Daten bereinigen, Struktur und Tabellen kombinieren, Ergebnis kontrollieren. Schrittzahlen sind keine TOC-Hauptpunkte. Auf schmaleren Ansichten steht eine kompakte Dropdown-Übersicht über dem Artikel. Die Referenz-TOCs enthalten nur Einstieg, Häufig gebraucht, Kategorien, Referenz durchsuchen und Eingabehilfe, keine Funktionsnamenlisten.

TOC entfernt:

| Eintrag | Titel |
|---|---|
| aggregat | AGGREGAT: Fehler gezielt auslassen |
| bestand-bewegung | Bestandskennzahl oder Bewegungskennzahl? |
| calculate | CALCULATE |
| count | COUNT: nichtleere Werte zählen |
| dax-all | ALL oder REMOVEFILTERS? |
| dax-average | AVERAGE: Durchschnitt je Datenzeile |
| dax-beziehungen | DAX über Tabellen hinweg: Beziehungen und Zuordnung |
| dax-coalesce | COALESCE und ISBLANK: fehlende Ergebnisse behandeln |
| dax-filter | FILTER: eine Teilmenge bilden |
| dax-if | IF: zwei Ergebnisse unterscheiden |
| dax-jahr-monat | YEAR und MONTH: Kalenderattribute |
| dax-min-max | MIN und MAX: kleinster oder größter Wert |
| dax-switch | SWITCH: mehrere Fälle verständlich ordnen |
| dax-values | VALUES und HASONEVALUE: Auswahl prüfen |
| distinctcount | DISTINCTCOUNT: eindeutige Personen zählen |
| divide | DIVIDE: Quote berechnen |
| eindeutig | EINDEUTIG: Liste ohne Wiederholungen |
| excel-datum | Datumswerte korrigieren |
| nullwerte | Was mache ich mit fehlenden Werten? |
| power-query | Was ist Power Query? |
| pq-text | Text bereinigen, ersetzen und teilen |
| sumx | SUMX: zeilenweise rechnen und summieren |
| bestand-monate | Bestand wird über Monate aufsummiert |
| beziehung-fehler | Beziehung lässt sich nicht erstellen |
| blank | BLANK: Warum bleibt die Kennzahl leer? |
| datum-sortieren | Datum / Monat falsch sortiert |
| filter-fehler | Filter funktioniert nicht |
| measure-fehler | Measure reagiert unerwartet |
| mehrere-datumsbeziehungen | Datumsfilter wirkt auf das falsche Datum |
| problem-export | Ergebnis nach Export anders |
| problem-granularitaet | Auswertung zeigt zu viele oder zu wenige Zeilen |
| problem-merge-zeilen | Mehr Zeilen nach Merge |
| problem-null | NULL verhält sich unerwartet |
| problem-person-mehrfach | Person mehrfach vorhanden |
| problem-visual-slicer | Visual reagiert nicht auf Slicer |
| problem-vorjahr | Vorjahr ist leer |
| problem-werte-verschwinden | Werte verschwinden im Bericht |
| problem-ytd | YTD liefert falsche Werte |
| summe-zu-hoch | Falsche Summe prüfen |
| visual-gesamtsumme | Warum die Gesamtsumme anders ausfällt |

Status nur auf Bereichsebene: Power Query Ausgebaut; Berichte In Ausbau; IDA In Entwicklung. IDA-Altartikel bleiben aus Suche und öffentlichem Index ausgeschlossen. Kleine Katalogabschnitte und Detailartikel tragen keine Ausbau- oder Inhaltsebenen-Badges.

## Prüfung

- Typecheck erfolgreich.
- Gesamte Suite: 13 Testdateien, 230 Tests bestanden. 23 neue Navigationstests prüfen die Hauptnavigation, Bereichsanzahlen, direkte Links, DAX-Aufgaben/Funktionsauswahl, separate vollständige Referenz, M-Katalog, bestehende URLs und alle TOC-Anker.
- Nach dem letzten M-Detail-Sprung und der Korrektur der Überschriftenhierarchie: zusätzlich 67 gezielte Tests erfolgreich.
- Strenger Content-Check: 197 gültige Inhalte. Privacy-Check: 0 strukturelle Vertraulichkeitstreffer.
- npm audit: 0 Schwachstellen.
- Build erfolgreich; der bestehende Vite-Größenhinweis zum Hauptbundle bleibt (ca. 1,23 MB, gzip ca. 236 kB).
- Lokale Browser-QA: zwölf geforderte Seiten bei 1920×1080, 1366×768, 390×844. Keine horizontale Seiten-Scrollbar und keine defekten geladenen Bilder. Mobile Bereichskarten stehen untereinander; TOC als Dropdown, DAX-Praxisansicht ohne Katalogkarten. Mobile TOC-Sprung und M-Schnelleinstieg tatsächlich bedient. Keine Konsolenfehler.

Die abschließende Push-, Actions- und Live-Prüfung wird im Abschlussbericht mit Commit-SHA und Workflow-Link dokumentiert.
