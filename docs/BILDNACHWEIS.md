# Bildnachweis und Sichtprüfung

Stand: 17. September 2026. Alle 27 Rasterbilder wurden selbst in Power BI Desktop bzw. Microsoft Excel aufgenommen. Die Quelldaten wurden für dieses Projekt vollständig erfunden. Die Aufnahmen wurden auf den relevanten Bedien- oder Ergebnisbereich zugeschnitten und als verlustfreie WebP-Dateien ohne EXIF-/XMP-Metadaten neu gespeichert. Es wurden keine Programmoberflächen künstlich nachgebaut.

Jede veröffentlichte Rasteraufnahme wurde nach dem Zuschnitt visuell geprüft. Keine sichtbaren Kontoprofile, privaten Pfade, fremden Fenster oder betrieblichen Daten. Konten K001–K006 und Personen P001–P004 sind reine Demokennungen. Die Power-BI- und Excel-Beispiele enthalten zusammen 9.000 synthetische Bestandseinheiten. Rohbilder und Office-Arbeitsdateien bleiben im ignorierten lokalen Demo-Verzeichnis.

| Referenz               | Datei                        | Gezeigter Schritt                                                                                                         |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| power-query            | pbi-power-query.webp         | Power Query mit sechs synthetischen Kontenzeilen.                                                                         |
| csv-import             | pbi-csv-import.webp          | CSV-Vorschau: UTF-8 und Semikolon trennen die fünf Spalten korrekt.                                                       |
| datenbereinigung       | pbi-datentyp.webp            | Datentyp über das Symbol am Spaltenkopf auswählen.                                                                        |
| gruppieren             | pbi-gruppieren.webp          | Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen. |
| pq-text                | pbi-text-bereinigen.webp     | Das Format-Menü enthält Kürzen und Bereinigen.                                                                            |
| pq-duplizieren         | pbi-abfragen.webp            | Das Kontextmenü bietet Duplizieren und Verweis.                                                                           |
| measure                | pbi-measure.webp             | Neues Measure: Gesamtbestand = SUM(Konten[Bestand_EUR]).                                                                  |
| karte                  | pbi-karte.webp               | Die Karte zeigt den synthetischen Gesamtbestand 9.000 als 9 Tsd.                                                          |
| diagrammtitel          | pbi-titel.webp               | Allgemein → Titel: Text, Schrift und Ausrichtung einstellen.                                                              |
| tabelle                | pbi-tabelle.webp             | Tabelle: vier Personen mit zusammen 9.000 Bestand.                                                                        |
| matrix                 | pbi-matrix.webp              | Matrix: Personennummer in Zeilen, Gesamtbestand in Werte.                                                                 |
| balkendiagramm         | pbi-balken.webp              | Absteigender Vergleich: P003 hat mit 4.000 den höchsten Demo-Bestand.                                                     |
| filterkontext          | pbi-filterbereich.webp       | Visualfilter auf P003: Nur dieses Visual wird auf die ausgewählte Person eingeschränkt.                                   |
| fakt-dimension         | pbi-dimension.webp           | Demo-Dimension: DISTINCT erzeugt vier eindeutige Personennummern aus sechs Kontenzeilen.                                  |
| beziehungen            | pbi-beziehungen.webp         | Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der \*-Seite.                                               |
| excel-dubletten-finden | excel-dubletten.webp         | Bedingte Formatierung markiert P001 und P003 als mehrfach vorkommende Personennummern.                                    |
| xverweis               | excel-xverweis.webp          | XVERWEIS liefert für das synthetische Konto K003 den Bestand 2.000.                                                       |
| summewenns             | excel-summewenns.webp        | SUMMEWENNS summiert die zwei Konten von P001 zu 2.000.                                                                    |
| zaehlenwenns           | excel-zaehlenwenns.webp      | ZÄHLENWENNS zählt für P001 zwei Kontenzeilen.                                                                             |
| index-vergleich        | excel-index-vergleich.webp   | INDEX und VERGLEICH liefern für K004 den Bestand 3.200.                                                                   |
| teilergebnis           | excel-teilergebnis.webp      | TEILERGEBNIS mit 109: zunächst ungefiltert ergibt die Summe 9.000.                                                        |
| excel-filtern          | excel-filter.webp            | FILTER gibt beide Konten von P001 als dynamischen Bereich zurück.                                                         |
| eindeutig              | excel-eindeutig.webp         | EINDEUTIG liefert vier unterschiedliche Personennummern.                                                                  |
| sortieren              | excel-sortieren.webp         | SORTIEREN ordnet die Konten nach Bestand absteigend.                                                                      |
| pivottable             | excel-pivot-erstellen.webp   | PivotTable aus der synthetischen Tabelle DemoKonten auf einem neuen Arbeitsblatt erstellen.                               |
| pivot-felder           | excel-pivot-felder.webp      | Personennummer liegt im Zeilenbereich, Summe von Bestand_EUR im Wertebereich.                                             |
| pivot-summe-anzahl     | excel-pivot-aggregation.webp | Wertfeldeinstellungen: Summe statt Anzahl für die Bestandsspalte.                                                         |

## Schematische Darstellungen

Sieben selbst erstellte SVG-Dateien unter images/ida: eins-zu-viele, mehrere-joins, zielgranularitaet, parameter-filter, filterebene, statusverlauf, export-datentypen. Alle wurden im Browser visuell auf vollständige Beschriftung und Überlappungen geprüft. Ein zusätzliches Beziehungsschema liegt unter images/power-bi/beziehung.svg. Die Abbildungen sind sichtbar als schematisch gekennzeichnet und bilden keine reale IDA-Oberfläche nach.

## Grenzen

Die Bilder dokumentieren eine bestimmte Programmversion. Einige Ergebnisvisuals sind kleine Originalausschnitte; Zoomen erzeugt keine zusätzlichen Bilddetails. Der Neue-Beziehung-Dialog wurde wegen uneinheitlicher deutscher Symbolbeschriftung nicht übernommen; verwendet wird die gespeicherte Beziehung mit eindeutig sichtbaren 1-/\*-Markierungen. Ein leerer Bedingte-Spalte-Dialog wurde ebenfalls nicht veröffentlicht. Der Merge-Screenshot bleibt als offener TODO gekennzeichnet.

## Ergänzungen vom 18. September 2026

- images/excel/excel-tabelle-erstellen.jpg: eigene echte Excel-Aufnahme aus einer leeren Demo-Arbeitsmappe, Dialog für A1:D7 mit Überschriften; Anleitung Excel-Liste vorbereiten, Schritt 3. Keine realen Daten.
- images/power-bi/dax-pruefergebnisse.jpg: eigene echte Aufnahme der DAX-Abfrageansicht mit synthetischer Kontentabelle (6 Zeilen, 4 Personen, 9.000 Bestand). Enger Zuschnitt auf Ergebnisraster, keine Profil-, Pfad- oder Dateiangaben; im COUNTROWS-Eintrag. SUMX verwendet die separate Positionsdemo.

Die Aufnahmen sind Ergebnis-/Bediennachweise, keine nachgebauten Produktoberflächen. Insgesamt nun 37 Bilddateien: 29 echte Rasteraufnahmen und 8 Schemata. Rohaufnahmen und Office-Demos bleiben lokal ignoriert.
