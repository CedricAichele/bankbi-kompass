# BankBI Kompass

BankBI Kompass ist ein praxisorientiertes Wissens- und Nachschlagewerk für Datenanalyse, Business Intelligence und Reporting. Der aktuelle Schwerpunkt liegt auf Power BI, Power Query und Excel. IDA ist in Entwicklung und soll langfristig ein wichtiger Bereich werden. Die Inhalte helfen dabei, typische Aufgaben aus Datenaufbereitung, Analyse, Datenmodellierung, Reporting und Controlling schnell nachzuschlagen und praktisch nachzuvollziehen.

**[BankBI Kompass öffnen](https://cedricaichele.github.io/bankbi-kompass/)**

## Was ist BankBI Kompass?

BankBI Kompass unterstützt das gezielte Nachschlagen im Arbeitsalltag. Kurze Antworten bieten einen schnellen Einstieg; nachvollziehbare Anleitungen und fachliche Erläuterungen vertiefen das jeweilige Thema.

## Was bietet die Anwendung?

- Zentrale Suche nach Funktionen, Begriffen und Aufgaben.
- Aktive Kataloge für Power BI und Excel; IDA mit eigener Entwicklungsübersicht.
- Durchsuchbare Power-Query-M-Referenz mit Funktionsübersicht, Eingabeorten und ausführlichen Beispielen.
- Power-Query-Workflow für neue Daten und eine gemeinsame Transformationsbasis für Power BI und Excel.
- Typische Aufgaben, Probleme & Lösungen, Werkzeugwahl und Datenbegriffe.
- Schritt-für-Schritt-Anleitungen mit Vorher-/Nachher-Beispielen sowie DAX- und Excel-Formeln.
- Typische Fehler, Plausibilitätschecks, verwandte Themen und offizielle Dokumentationslinks.
- Favoriten, lokal im jeweiligen Browser gespeichert – ohne Anmeldung und ohne Synchronisierung zwischen Geräten.

## Für wen ist BankBI Kompass?

Für Einsteiger, Analysten, Controller, BI-Anwender und Personen im Reporting, die während ihrer täglichen Arbeit eine Frage klären möchten. Die Anwendung ist sowohl als persönliche Wissensbasis als auch als öffentlich nutzbares Nachschlagewerk konzipiert.

## Suche und Navigation

Die zentrale Suche erschließt die Inhalte über Funktionsnamen, Fachbegriffe und aufgabenbezogene Suchbegriffe. Die Werkzeugkataloge für Power BI und Excel bieten einen thematisch geordneten Zugang. Ergänzend führen die Bereiche „Typische Aufgaben“, „Probleme & Lösungen“ und „Werkzeugwahl“ zu passenden Anleitungen und Entscheidungshilfen.

## Wie sind die Inhalte aufgebaut?

Die Kurzantwort steht oben. Danach folgen Anlass und Voraussetzungen, konkrete Schritte, Beispiel und Ergebnis. Fachliche Erklärungen, typische Fehler und Plausibilitätschecks helfen beim Übertragen auf eigene Daten. Verwandte Themen und offizielle Dokumentation ermöglichen die Vertiefung.

## Inhaltsschwerpunkte

**Power BI:** Power Query, Datenmodellierung, DAX, Zeitintelligenz, Visualisierung und Fehlersuche.

**Power Query:** Datenaufbereitung, wiederkehrende Dateien und die M-Referenz „Formeln & Funktionen“ mit Suche, Kategorien und übertragbaren Codebeispielen.

**Excel:** Formeln, Datenbereinigung, PivotTables, Power Query und Analyse.

**IDA/Cognos:** In Entwicklung. Der Bereich wird neu aufgebaut; frühere Artikel sind archiviert und nicht Teil des öffentlichen Katalogs. Geplant sind allgemein gehaltene Reporting- und Analysehilfen.

## Langfristige Entwicklung

Der Katalog soll schrittweise um weitere fachliche und technische Themen erweitert werden: allgemeine bankfachliche Analyse, Vertriebsmanagement, Vertriebssteuerung, weitere Steuerungs- und Reportingfragen sowie Datenverarbeitungs- und Batchprozesse. Diese Entwicklungsrichtung beschreibt noch keinen vollständigen Themenbestand.

## Beispiele und Datenschutz

Öffentlich gezeigte Beispieltabellen und Screenshot-Daten sind synthetisch. Die Anleitungen lassen sich auf passende Arbeitsdaten übertragen; Beispieldateien sind keine allgemeine Voraussetzung.

Veröffentlicht werden allgemeine Methoden und öffentlich dokumentierte Technologien. Reale Kunden-, Mitarbeiter- und Unternehmensdaten, interne Systeme, Feldnamen, Bildschirmaufnahmen, Prozesse und Unternehmenslogik bleiben ausgeschlossen. Die Anwendung bietet keine Uploads, Nutzerkonten, externe KI oder eigenes Tracking. Hinweise zum Hosting und zur lokalen Speicherung stehen im [Datenschutz](https://cedricaichele.github.io/bankbi-kompass/#/datenschutz).

## Technischer Aufbau

React, TypeScript und Vite erzeugen eine statische Website für GitHub Pages. Inhalte liegen in Markdown mit geprüften Metadaten vor. Es gibt kein Backend und keine Datenbank. Die Suche läuft lokal; Favoriten verwenden localStorage. Hash-Routen ermöglichen Direktlinks unter /bankbi-kompass/.

## Lokal starten

Voraussetzung: Node.js 22.18 oder neuer und npm. Im Projektordner:

```sh
npm ci
npm run dev
```

Die lokale Adresse steht im Terminal, normalerweise http://127.0.0.1:5173/bankbi-kompass/. Unter PowerShell bei Bedarf npm.cmd verwenden. npm run build erzeugt dist/; npm run preview startet die lokale Build-Vorschau.

## Qualität

```sh
npm run typecheck
npm test
npm run content:check -- --strict
npm run privacy:check
npm run build
npm audit
```

Die Prüfungen decken Typen, Anwendungsfunktionen, Suchqualität, Inhaltsschema, Querverweise und auffällige Veröffentlichungsdaten ab. Sie ersetzen weder die fachliche Prüfung von Beispielen noch eine rechtliche Prüfung der Betreiberangaben.

Für neue oder geänderte Beispiele müssen Eingabeort, benötigte Tabellen beziehungsweise Zellen, Anpassungen und kontrollierbares Ergebnis zusammenpassen. M-Ausdrücke für benutzerdefinierte Spalten, vollständige Abfrageschritte, DAX und Excel-Formeln werden ausdrücklich unterschieden. Vor einer fachlichen Freigabe sind die vorgesehenen Beispiele zusätzlich im jeweiligen Produkt auszuführen; erfolgreiche Website-Tests belegen diese Ausführung nicht. Öffentliche Texte verwenden reguläre deutsche Schreibweise und enthalten keine internen Redaktionsaufträge. Screenshots müssen zum Beispiel passen oder ihre abweichenden Bezeichnungen nachvollziehbar erklären.

Technische Unterlagen: [Start und Veröffentlichung](DEPLOYMENT.md) · [Entwicklungsdokumentation](docs/README.md).

## Entwickler

BankBI Kompass wird von **Cedric Aichele** entwickelt. Ich habe Wirtschaftsingenieurwesen an der Hochschule Mannheim studiert, mit dem Bachelor of Engineering abgeschlossen und mich auf Datenanalyse spezialisiert. Beruflich beschäftige ich mich mit Controlling und Reporting im Bankenumfeld. Mit diesem Projekt vertiefe ich mein Wissen und meine praktische Erfahrung in Power BI, IDA und Excel.

Meine Bachelorarbeit behandelte die Modernisierung von Reporting-Systemen: Anforderungsanalyse, Werkzeugvergleich und prototypische Umsetzung datenbankgestützter Berichte und interaktiver Auswertungen.

Mehr zu Motivation und fachlicher Entwicklung: [Über das Projekt](https://cedricaichele.github.io/bankbi-kompass/#/ueber) · [GitHub-Profil](https://github.com/CedricAichele).

BankBI Kompass ist unabhängig entwickelt und steht in keiner offiziellen Verbindung zu einem Arbeitgeber, Microsoft oder IBM. [Impressum](https://cedricaichele.github.io/bankbi-kompass/#/impressum).
