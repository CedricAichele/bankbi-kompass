> Historischer Umbauvermerk. Update 18.09.2026: Das damals aufbewahrte Archiv wurde inzwischen entfernt; der aktuelle Stand steht im Qualitätsbericht.

# Umbau zum Arbeits- und Nachschlagewerk

Historisches Protokoll des ersten Strukturumbaus. Aktueller Ausbau und Prüfergebnisse: [QUALITAETSBERICHT.md](QUALITAETSBERICHT.md). Die unten genannten 120 Inhalte und 39 Tests beschreiben den damaligen Zwischenstand.

## 1. Entfernte Strukturen

Lernpfad, Lernschritte, Kursblöcke, Fortschrittsdarstellung und die Lernpfadroute wurden entfernt. Lange Prozessseiten sind nicht mehr Teil des Produktes. Referenzseiten zeigen die unmittelbare Antwort und kurze Arbeitsschritte, keine längeren Einführungen oder Lesezeitangaben.

## 2. Startseite

„Was möchtest du machen oder finden?“ mit großer Suche und direkten Treffervorschlägen. Danach häufig gebrauchte Funktionen, Power BI / Excel / IDA mit konkreten Aufgaben, typische Aufgaben und Fehlerhilfen. Exakte Suchsynonyme haben Vorrang vor unscharfen Texttreffern. Die drei gewünschten Suchfälle sind automatisiert abgesichert.

## 3. Power BI

Daten vorbereiten, Datenmodell, DAX & Measures, Bericht und Fehler. Sammelthemen wurden in direkt anwählbare Referenzen aufgeteilt, unter anderem die einzelnen Power-Query-Transformationen, DAX-Funktionen und Berichtselemente. Beziehungen, Filterkontext und Granularität bleiben miteinander verknüpft.

## 4. Excel

Nachschlagen, Filtern und Listen, Aggregieren, Logik und Fehler, Daten bereinigen, Daten auswerten und Power Query. Einzelne Funktionen und konkrete Aufbereitungsschritte ersetzen die bisherigen allgemeinen Sammelartikel. Gemeinsame Power-Query-Themen sind aus beiden Werkzeugbereichen erreichbar.

## 5. IDA

31 eigene kurze Referenzen plus gemeinsam genutzte Datenkonzepte und Aufgaben. Einstieg über Listen, Filter, Parameter / Eingabeaufforderungen, Berechnungen, Mehrfachzeilen / Joins, Ausgabe und Berichtsbetrieb. Listen und Excel-Weiterverarbeitung stehen im Vordergrund. Alle konkreten Produktbehauptungen ohne öffentlichen Beleg bleiben offen.

## 6. Screenshots

Strukturierte Metadaten für Bildpfad, Alt-Text, Bildunterschrift, Hinweis und Bildtyp. Große Darstellung mit anklickbarem Dialog, Tastaturbedienung und korrektem Unterpfad. Drei Bildverzeichnisse sind eingerichtet. Ein selbst erstelltes Beziehungsschema demonstriert die Funktion; keine internen Screenshots wurden ergänzt.

## 7. Typische Aufgaben

Zwölf eigene kurze Aufgabenseiten: Tabellen verbinden, eine Zeile je Person, eindeutige Personen zählen, Dubletten finden, Stichtag, Vorjahr, YTD, Plan/Ist, Daten bereinigen, Dateien kombinieren, Werte holen und Daten gruppieren. Sie erläutern die fachliche Entscheidung und verweisen auf passende Werkzeugreferenzen.

## 8. Bestehende Inhalte

Alle 39 Originaltexte sind unter `docs/archive-v1/` erhalten, außerhalb des Website-Imports und Suchindex. Die neue Ausgabe umfasst 120 Einträge: 102 Referenzen, sechs Fehlerhilfen und zwölf Aufgaben. Der Schwerpunkt liegt auf Umformulierung und Aufteilung, nicht auf Übernahme langer Texte.

| Frühere Inhalte                                                      | Behandlung                                                                                           |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| CALCULATE, Filterkontext, DISTINCTCOUNT, Datumstabelle, Vorjahr, YTD | Kurzantwort, drei Schritte, kleineres Beispiel und typischer Fehler                                  |
| Power Query                                                          | Grundreferenz plus einzelne Transformationen, Zusammenführen, Anhängen, Dateien kombinieren          |
| DAX-Sammelinhalte                                                    | Eigene Referenzen für SUM, DIVIDE, COUNTROWS, SUMX, FILTER, REMOVEFILTERS, SELECTEDVALUE und RELATED |
| Excel-Sammelinhalte                                                  | Eigene Nachschlage-, Listen-, Aggregations-, Logik- und Bereinigungsreferenzen                       |
| Beziehungen, Sternschema, Granularität und Dubletten                 | Erhalten, gekürzt und durch Aufgaben-/Fehlerverweise verbunden                                       |
| Allgemeiner Reportingartikel                                         | Listenorientierter IDA-Bereich mit ausdrücklich generischen Erläuterungen                            |
| Fünf Problemseiten                                                   | Kurze Fehlerhilfen, ergänzt um weitere konkrete Fehlerfälle im Werkzeugkatalog                       |
| Kundenstruktur und Kundenansprache                                   | Aufgaben „Eine Zeile je Person“ und „Eindeutige Personen zählen“                                     |
| Stichtagsreporting und Produktanalyse                                | Konkrete Stichtagsaufgabe; Kontext Bestandsanalyse                                                   |
| Vertriebssteuerung und Management-Reporting                          | Plan/Ist-Aufgabe und Kontext-Tags                                                                    |
| Laufzeitanalyse                                                      | Kurze Referenz zur Vorgangsebene; weitergehende Prozessprosa nur im Archiv                           |
| Visualisierung                                                       | Einzelne Berichtselemente; alter Direktlink führt zur Matrixreferenz                                 |

Alte IDs werden soweit vorgesehen auf Nachfolger abgebildet. Favoriten mit weiterhin gültigen oder umbenannten IDs bleiben erhalten. Die sieben Kontext-Tags ersetzen die Prozessnavigation und lassen sich in der Suche filtern. Die sechs bestehenden Entscheidungshilfen bleiben als optionaler, kompakter Einstieg erhalten.

## 9. IDA-TODOs

Menüwege, Ausdruckssyntax, Parameterbindung, produktspezifische Join-/Aggregationskonfiguration, Exportoptionen und Betriebsabläufe bleiben TODO. Die Anwendung benennt diese Grenze direkt an IDA-Inhalten. Einzelheiten stehen in [../TODO.md](../TODO.md).

## 10. Spätere eigene Screenshots

Vorrangig Power-BI-Beziehungen und Power-Query-Zusammenführen/Gruppieren, Excel-XVERWEIS und PivotTable. Danach Measure/Spalte, Visualinteraktionen, Entpivotieren und Formatkorrekturen. IDA ausschließlich durch eigene allgemeine Schemen illustrieren. Die konkrete Bildwunschliste steht in [../TODO.md](../TODO.md).

## Prüfung und Freigabestatus

Abschlussprüfung am 17. September 2026: `npm run typecheck`, `npm test` (39 Tests), `npm run content:check -- --strict` (120 Einträge) und `npm run build` erfolgreich. Zusätzlich im lokalen Produktions-Build geprüft: Startseite und CALCULATE-Referenz bei 1440 × 900, Suchvorschläge für „mehrere konten pro kunde“, Beziehungsschema mit Vergrößerung und Escape sowie mobile Referenz und Navigation bei 390 × 844. Kein horizontaler Seitenüberlauf in der geprüften mobilen Referenz; keine erfassten Browserfehler. Das Nutzungsziel wurde noch nicht zeitlich mit Nutzern validiert. Keine Veröffentlichung und kein Push im Rahmen dieses Umbaus.
