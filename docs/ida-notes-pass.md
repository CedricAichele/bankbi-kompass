# IDA: Umbau zur persönlichen Notizsammlung

Stand: 3. November 2026. Dieser Pass ersetzt die Artikelstruktur des vorherigen IDA-Umbaus.

## Umfang und Struktur

Vorher: 15 redaktionelle Inhalte und drei Navigationsansichten.
Nachher: vier redaktionelle Notizseiten, eine IDA-Landingpage und der nachgelagerte erweiterte Funktionskatalog. Die frühere Reporting-Übersicht ist eine Weiterleitung.

- Auswertungen & Reporting: zentraler Spickzettel mit neun Oberkapiteln.
- Formeln & Funktionen: kompakte Liste mit unmittelbar sichtbaren Beispielen.
- GVM: Arbeitsnotizen mit Vorlagenbezug, zusätzlichen Abfragen und Fallmenge.
- aCI-Batch: Datenbasis, Zielfelddefinition, Schlüssel, alte/neue Werte und Kontrollen.

Zwölf bisherige Einzelartikel wurden entfernt und in die vier Seiten integriert. Dazu gehören Orientierung, erste Auswertung, Granularität, Filter, Prompts, Verknüpfungen, Berechnungen, Ausgabe, Plausibilitätsprüfung, Berichtsbetrieb sowie die beiden separaten IDA-GVM-/IDA-CI-Seiten.
Zusammen mit den älteren Adressen führen 60 historische IDs auf die passende Seite bzw. den passenden Abschnitt. Favoriten werden auf die kanonischen IDs migriert. Das ältere Archiv bleibt unverändert außerhalb des öffentlichen Website-Index.

## Primärmaterial und Redaktion

Inhaltliche Grundlage sind Cedrics im Chat bereitgestellte IDA-Arbeitsnotizen. Sie bestimmen die Themen und deren Gewicht; IBM-Quellen dienen der Syntax- und Kontextprüfung.

Direkt übernommen und sprachlich verdichtet:

- Angeforderte Auswertungen liefern meist Listen; Textfelder ergänzen die Bearbeitung. Visualisierung spielt in dieser IDA-Nutzung eine geringere Rolle.
- Kunden-, Konto- und Vorgangsebene getrennt vorbereiten und gezielt verbinden; Zeilenzahl vor/nach dem Join kontrollieren.
- Union hängt kompatible Strukturen an; Intersect bildet die Schnittmenge.
- Fachliche Zähleinheit definieren und Kontrollzahlen in komplexen Abfragen mitführen.
- Beim Versand Ausgabeformat, Empfängerzuordnung und Link gegenüber tatsächlichem Bericht prüfen.
- GVM: zusätzliche Abfragen heranziehen, wenn Daten/Filter der vorhandenen Grundlage nicht ausreichen; Vorlagenbezug und parametrisierbaren Zeitraum berücksichtigen.
- aCI-Batch: Änderungsart, Objekt-/Felddefinition, Länge, Nachkommastellen, Format, zusammengesetzten Schlüssel und alte/neue Werte prüfen. Dokumentierte Abhängigkeiten und Nebenobjekte mitbetrachten.

Nicht aus der losen, unklaren Spaltennotiz abgeleitet wurde ein neuer Website-Inhalt. Keine erfundene Produktbedienung und keine interne Vorlage wurde nachgebaut.

## Vertraulichkeit

Interne Auswahlregeln wurden zur allgemeinen Prüfung fachlich erforderlicher Status-, Ausschluss- und Qualitätsfilter zusammengefasst. Die fachliche Aussage bleibt erhalten.

Entfernt bzw. nicht übernommen wurden konkrete Übergabefeldnamen, Objekt-/Sachgebietscodes, Vorlagennummern, Schlüsselzusammensetzungen mit realen Stellenlängen, technische Sonderwerte, Dateischemata, Dokumentnamen, Transferfunktionen und interne Freigabe-/Rechenzentrumsabläufe.
Die veröffentlichten sechs Inhalts-/Referenzdateien wurden zusätzlich lokal auf die im Primärmaterial genannten internen Übergabefeldnamen geprüft: kein Treffer. Die private Prüfliste wurde nicht in Dateien oder Tests des Repositorys geschrieben.

Personennummer, Kontonummer, Geschäftsstelle, Bestand, Stichtag und andere allgemeine Fachbegriffe bleiben erhalten. Die verwendeten Zahlen und Orte sind synthetische Beispiele. Es wurden keine Screenshots oder Fotos erstellt oder verwendet.

## Eigenständiger Inhaltstyp und Renderer

`darstellung: ida-note` ist ein eigener, auf IDA beschränkter Darstellungsmodus. Er benötigt eine Einordnung und eindeutig benannte, gefüllte Abschnitte. Die vier Seiten sind ausdrücklich freigegeben; Bilder sind ausgeschlossen.

`Reference.tsx` übergibt Notizen direkt an `IdaNote.tsx`. Dieser Renderer zeigt Einordnung und Abschnitte in der redaktionellen Reihenfolge. Er erzeugt keine Kurzantwort-, Voraussetzungen-, Ergebnis-, Plausibilitäts-, Erklärungs-, Anpassungs- oder Fehlerblöcke. Auch Suchtreffer erhalten keine Tutorial-Schnellansicht.

Power-BI-/Excel-Inhalte behalten ihre bisherigen Pflichtabschnitte und ihre Darstellung. Die Schemaanforderungen dafür bleiben bestehen. Die Reporting-TOC hat neun Oberkapitel ohne Unterebenen. Weiterführungen sind auf vier begrenzt, aktuell jeweils drei schlichte Links. Der allgemeine IDA-Hinweis steht einmal auf der Landingpage.

## Formelsammlung

43 häufige Funktionen und Muster stehen unmittelbar mit Kategorie, Funktion, Bedeutung und Beispiel in der Liste. Hinweise öffnen inline. Der erweiterte Katalog enthält 102 Einträge einschließlich der häufigen Auswahl; er zeigt 25 Einträge je Seite. Mobile Zeilen werden untereinander angeordnet.

15 zusätzliche Gruppen bewahren weitere Notizschreibweisen und ordnen sie ein. Diese Gruppen zählen nicht als zusätzlich bestätigte Funktionen. Ein Notizname wird nicht allein durch einen Verfügbarkeitshinweis zu ausführbarer Syntax. Beispiele: kurze Statistiknamen, SQL-Typnamen und Maskenfunktionen werden mit Kontext und passenden Referenzwegen erläutert.

27 Einträge sind ausdrücklich datenquellenabhängig: SQL-Window-Muster, vier Regex-Funktionen, LTRIM/RTRIM/LENGTH/LOCATE/REPLACE/CONCAT/LPAD/RPAD/LEFT/RIGHT/REPEAT/TRANSLATE sowie NVL und DECODE. OLAP bleibt im erweiterten Bereich. Median ist als umgebungsabhängig gekennzeichnet.

Wichtige Syntaxkorrekturen: SUM/AVG/MIN/MAX aus den Notizen sind im Cognos-Bericht hier als total/average/minimum/maximum ausgeführt. COUNT DISTINCT verwendet den fachlichen Schlüssel. `count(rows for report)` wird nicht ungeprüft als universelle Schreibweise übernommen. Cognos-cast mit Komma wird von SQL-CAST mit AS unterschieden. Bei TRANSLATE ist die produktabhängige Argumentreihenfolge sichtbar. ParamValue/ParamDisplayValue sind Berichtsausdrücke, keine Promptmakros.

Die Funktionsdaten enthalten pro Eintrag einen IBM-Beleg. Kernsyntax und Layout-Konvertierungen sind anhand der öffentlich zugänglichen, ausdrücklich versionsgebundenen Framework-Manager-10.1.1-Referenz geprüft. Aktuelle Cognos-12- und Db2-12.1-Dokumentation ergänzt Kontext und Datenquellenabgrenzung. Ein Lauf gegen ein reales IDA-System wird nicht behauptet. Für konkrete Installationen bleiben Function Set und Ausdruckskontext maßgeblich.

## Prüfung

- Typecheck erfolgreich.
- 330 Tests in 14 Dateien bestanden, darunter 60 einzeln geprüfte historische Weiterleitungen.
- Strenge Inhaltsprüfung: 201 Inhalte gültig.
- Privacy-Scan: keine strukturellen Vertraulichkeitstreffer; zusätzlich manuelle Prüfung des Primärmaterials.
- Produktionsbuild erfolgreich. Bestehende Hinweise zu Chunkgröße und PURE-Kommentaren aus Zod bleiben.
- npm audit: 0 Schwachstellen.
- Browserprüfung ohne Screenshots: sechs IDA-Ansichten bei 1920 × 1080, 1366 × 768 und 390 × 844, insgesamt 18 Kombinationen. Keine horizontale Seitenüberbreite, keine Standard-Artikelboxen und keine Bilder in den IDA-Inhalten.
- Bedienprüfung: vier Einstiege, neun Reporting-Abschnitte, Tastaturfokus beim Sprung, sechs angeforderte Suchbegriffe, historischer Prompt-Link, sichtbare Beispiele, Inline-Hinweise, Kopieren, Pagination, OLAP-Filter und Einordnung von dateMask.

Commit, Push, Pages-Deployment und Live-Prüfung folgen auf den geprüften Stand. Die konkreten Ergebnisse und der Commit stehen im Abschlussbericht des Chats.
