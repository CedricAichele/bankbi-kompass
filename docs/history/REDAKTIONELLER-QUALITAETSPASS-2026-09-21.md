# Redaktioneller Qualitätspass · 21.09.2026

Der Stand ist für eine lokale Prüfung vorbereitet. Es wurden keine neuen Screenshots erstellt, keine vorhandenen Bilddateien verändert und kein Deployment veranlasst.

## Umfang

Alle 272 vorhandenen Einträge wurden in den Katalogpass einbezogen. 214 Einträge wurden wesentlich erweitert, darunter 164 Fachartikel und 50 Aufgaben beziehungsweise Problemlösungen. Diese Zahl ist konservativ aus dem Vergleich zum Ausgangsbestand ermittelt: mehr als 400 Zeichen Unterschied im Artikeltext. Weitere Einträge erhielten gezielte Korrekturen, Quellen, Querverweise oder eine neue Trennung von Beispiel und allgemeinem Ergebnis. Es gibt keine neuen Artikel und keine gelöschten Suchziele.

Schwerpunkte waren Power Query, Datenmodell, DAX, Excel-Formeln und PivotTables sowie sämtliche 47 IDA-/Cognos-Einträge. Die Beispiele zeigen Ausgangswerte, eine konkrete Operation und erwartete Ergebnisse. Transformationsartikel verwenden echte Markdown-Tabellen, bei Entscheidungshilfen und Betriebskonzepten kommen kurze Vergleichs- und Ergebnistabellen zum Einsatz. Allgemeine Voraussetzungen verlangen keine synthetischen Daten mehr.

## Strukturentscheidungen

- **Spalte umbenennen** und **Erste Zeile als Überschrift** bleiben kompakte Einzelreferenzen mit nachvollziehbarem Vorher/Nachher und Verweis auf den Power-Query-Grundlagenartikel.
- **Text bereinigen** bleibt eigenständig, weil Kürzen, Bereinigen und Großschreibung unterschiedliche Operationen sind; der Unterschied zu Excel GLÄTTEN wird erklärt.
- **Excel-Datei importieren** bleibt als Vertiefung zu benannter Excel-Tabelle, Arbeitsblatt, Navigator und Quellbereich erhalten. **Daten laden** erklärt dagegen die allgemeine Connectorauswahl.
- Keine Artikel wurden zusammengelegt. Die gemeinsame Orientierung erfolgt über Querverweise; bestehende Suchbegriffe und URLs bleiben erhalten.

## Quellen und Verknüpfungen

297 offizielle Quellenverweise wurden auf Artikelebene neu ergänzt beziehungsweise durch passendere Adressen ersetzt. Darunter befinden sich 87 gegenüber dem Ausgangsbestand neue unterschiedliche URLs. Alle Einträge enthalten jetzt offizielle Quellen.

144 unterschiedliche Quellenadressen wurden geprüft: 131 lieferten HTTP 200. Die 13 IBM-Adressen sperrten den direkten automatisierten Abruf mit HTTP 403; die Themen wurden über die öffentliche IBM-Dokumentationssuche nachvollzogen. Es verblieben keine festgestellten HTTP-404-Adressen. Eine Abrufsperre ist kein Beweis für einen toten Link, aber auch kein erfolgreicher Direktabruf.

267 verwandte Themen wurden ergänzt. Besonders die folgenden Verbindungen sind gegenseitig ausgebaut:

- Power-Query-Datum ↔ Datumstabelle ↔ Beziehung, YTD und Vorjahr
- Granularität ↔ Gruppieren, Beziehung, Kardinalität, Join und Mehrfachzeilen
- Fakt/Dimension ↔ Sternschema ↔ 1:n und Filterrichtung
- Merge ↔ Join, Kardinalität und Zeilenvervielfachung
- Measure ↔ Filterkontext, CALCULATE und Measure/Spalte-Entscheidung

## Screenshot-Arbeitsliste

[SCREENSHOT-TODO.md](../SCREENSHOT-TODO.md) enthält **45** geordnete Aufnahmeaufträge: **35 Power BI**, **10 Excel**, **0 IDA**. **18** vorhandene Aufnahmen sind zum Ersatz markiert. Jeder Auftrag enthält Schritt, Oberfläche, Klickfolge, synthetische Daten, sichtbare Elemente, Ausschnitt, Dateiname und Ersatzgrund.

Zum Ersatz markiert sind:

- Power BI: CSV-Import, Gruppieren, Power-Query-Übersicht, Dimension, Measure, Matrix, Tabelle, Karte und Balkendiagramm.
- Excel: XVERWEIS, SUMMEWENNS, ZÄHLENWENNS, INDEX/VERGLEICH, FILTER, EINDEUTIG, SORTIEREN, TEILERGEBNIS und Duplikatmarkierung.

Gründe sind kleine oder schlecht lesbare Ausschnitte, fehlende relevante Einstellungen oder Abweichungen vom überarbeiteten Beispiel. Noch hilfreiche Bedienansichten bleiben mit Hinweis sichtbar. Irreführende Ergebnisbilder werden bis zum Ersatz als Platzhalter angezeigt; die Originaldateien bleiben erhalten. Bestehende SVGs bleiben ausdrücklich als schematische Darstellungen gekennzeichnet.

## Oberfläche

Katalogüberschriften, Beschreibungen und Zwischenüberschriften besitzen jetzt übereinstimmende horizontale Abstände. Der Abschnitt „Allgemeines Ergebnis“ ist von „Nachher · Beispielergebnis“ unterscheidbar. Vorhandene Kurzformeln erscheinen bereits bei der Kurzantwort. Ausführliche Erklärungen und Screenshot-Aufnahmepläne bleiben einklappbar.

Browserprüfung ohne neue Screenshots: 1920×1080, 1366×768 und 390×844. Geprüft wurden Power-BI-Katalog, Merge, XVERWEIS, Measure und IDA-Filterebene. Die DOM-Geometrie zeigte keine seitlichen Seitenüberläufe und bündige Überschriften/Untertexte. Tabellen, Code, Bildplatzhalter, aufgeklappte Aufnahmepläne, Erklärungen und ein tatsächlich angeklickter Querverweis wurden geprüft. Keine Browser-Konsolenfehler in dieser Stichprobe.

## Grenzen und verbleibende Unsicherheiten

Konkrete IDA-Menüwege bleiben öffentlich unbelegt und sind entsprechend gekennzeichnet. Cognos-Beispiele beschreiben überwiegend relationale Prinzipien; verfügbare Syntax und Funktionen hängen von Produktversion und Datenquelle ab. Power-BI-Menübezeichnungen und Excel-Datenmodellfunktionen können nach Version beziehungsweise Ausgabe abweichen. Neue Aufnahmen und deren abschließende visuelle Freigabe übernimmt Cedric anhand der Arbeitsliste.

## Validierung

- TypeScript-Prüfung erfolgreich.
- 76 Tests in sechs Dateien erfolgreich, einschließlich Ersatzbild- und Aufnahmeplanprüfung.
- Strenge Inhaltsprüfung: 272 gültige Inhalte, vollständige Quellen, gültige interne Links und Aufnahmepläne.
- Repository-/Vertraulichkeitsprüfung: keine strukturellen Treffer; vorhandene Bilder zusätzlich geprüft.
- Produktionsbuild erfolgreich; Vite weist weiterhin auf ein JavaScript-Bundle über 500 kB hin. Keine funktionale Buildstörung.
- `npm audit`: 0 Schwachstellen.
- Keine Änderungen unter `public/images`; keine Bildaufnahmen in diesem Durchlauf.

Der Commit wird ausschließlich lokal angelegt. Seine SHA steht im Abschlussbericht der Aufgabe; sie wird nicht in diesen eigenen Commit hineingeschrieben.
