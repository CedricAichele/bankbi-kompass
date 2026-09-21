# BankBI Kompass

BankBI Kompass ist das persönliche Wissens-, Nachschlage- und Portfolio-Projekt von **Cedric Aichele** zu Datenanalyse, Business Intelligence und Reporting. Es verbindet praktische Hilfen für den Arbeitsalltag mit der verständlichen Dokumentation seiner fachlichen und technischen Entwicklung. Der aktuelle Schwerpunkt liegt auf Power BI, Excel und allgemeinen IDA-/Cognos-Reportingprinzipien.

**[BankBI Kompass öffnen](https://cedricaichele.github.io/bankbi-kompass/)** · [Über das Projekt](https://cedricaichele.github.io/bankbi-kompass/#/ueber) · [GitHub-Profil](https://github.com/CedricAichele)

## Was bietet BankBI Kompass?

- Eine zentrale Suche nach Funktionen und typischen Fragen: etwa „kunde mehrfach“, „summe stimmt nicht“, „zwei tabellen verbinden“, „wert aus anderer tabelle“, „vorjahr“ oder „dubletten“.
- Wissenskataloge für Power BI und Excel sowie allgemeine Reporting- und Cognos-Grundlagen.
- Typische Aufgaben, Probleme & Lösungen, Werkzeugwahl und verständliche Datenbegriffe.
- Schritt-für-Schritt-Anleitungen mit Vorher-/Nachher-Beispielen, Excel-Formeln und DAX.
- Erklärungen, typische Fehler, Plausibilitätschecks und Links zur offiziellen Dokumentation.
- Favoriten, die lokal im jeweiligen Browser gespeichert werden. Eine Anmeldung ist nicht nötig; eine Synchronisierung zwischen Geräten findet nicht statt.

## Für wen ist das Projekt?

Das Projekt dient Cedric als persönliches Nachschlagewerk, Kollegen und anderen Anwendern als praktische Wissensbasis und interessierten Besuchern als öffentliches Portfolio. Einsteiger, Analysten, Controller und BI-Anwender können konkrete Fragen nachschlagen, Arbeitsschritte nachvollziehen und passende Methoden auswählen.

## Grundidee

Die schnelle Antwort steht oben, die ausführliche Erklärung darunter. Ein Eintrag führt von der praktischen Frage über konkrete Schritte und ein kleines Beispiel zum überprüfbaren Ergebnis. So bleibt er beim Nachschlagen übersichtlich und bietet zugleich genug Kontext zum Lernen.

## Aktuelle Inhaltsschwerpunkte

**Power BI:** Daten laden, Power Query, Datenmodellierung, DAX, Visualisierung und Fehlersuche.

**Excel:** Formeln, PivotTables, Datenbereinigung, Power Query und Analyse.

**Reporting:** allgemeine Reporting- und Cognos-Prinzipien, Filter, Aggregation, Parameter und Ergebnisprüfung. Die IDA-Rubrik behandelt ausschließlich übertragbare Konzepte; interne Systemdetails oder unbelegte produktspezifische Menüwege werden nicht beschrieben.

## Langfristige Entwicklung

BankBI Kompass soll mit Cedrics beruflichem und fachlichem Wissen wachsen. Über die heutigen Werkzeuge hinaus können allgemeine Themen der bankfachlichen Analyse, des Vertriebsmanagements, der Vertriebssteuerung, der Datenverarbeitung und Batchprozesse sowie weitere Steuerungs- und Reportingfragen hinzukommen. Diese Ausrichtung beschreibt die geplante Entwicklung, nicht bereits vollständig vorhandene Inhalte. Veröffentlicht werden ausschließlich übertragbare Methoden und synthetische Beispiele, keine internen Abläufe oder Unternehmenslogik.

## Beispiele und Datenschutz

Alle öffentlich gezeigten Beispieldaten, Beispieltabellen und Screenshot-Daten sind synthetisch. Die Anleitungen lassen sich auf passende Arbeitsdaten übertragen; Beispieldateien sind keine allgemeine Voraussetzung.

Das Projekt veröffentlicht keine echten Kunden-, Mitarbeiter- oder Unternehmensdaten und keine internen Systeme, Feldnamen oder Prozesse. Quellen werden am jeweiligen Eintrag genannt. Fehlende oder zu ersetzende Abbildungen sind als Screenshot-TODO gekennzeichnet.

## Über den Entwickler

Cedric Aichele hat einen Bachelor of Engineering in Wirtschaftsingenieurwesen an der Hochschule Mannheim und beschäftigt sich beruflich mit Controlling und Datenanalyse im Bankenumfeld. Er arbeitet mit Reporting, Datenanalyse, Excel, IDA/Cognos und zunehmend Power BI. Sein Interesse gilt der Verbindung fachlicher Fragestellungen mit Datenmodellen, Reporting und Business Intelligence.

BankBI Kompass ist ein unabhängig entwickeltes Projekt und steht in keiner offiziellen Verbindung zu einem Arbeitgeber, Microsoft oder IBM.

## Technischer Aufbau

React, TypeScript und Vite erzeugen eine statische Website für GitHub Pages. Es gibt kein Backend und keine Datenbank. Inhalte liegen als Markdown mit geprüften Metadaten vor. Die Suche läuft im Browser; Favoriten verwenden localStorage. Hash-Routen ermöglichen Direktlinks unter /bankbi-kompass/.

## Lokal starten

Voraussetzung: Node.js 22.18 oder neuer und npm. Im Projektordner:

```sh
npm ci
npm run dev
```

Die lokale Adresse steht im Terminal, normalerweise http://127.0.0.1:5173/bankbi-kompass/. Unter PowerShell bei Bedarf npm.cmd verwenden. npm run build erzeugt dist/; npm run preview öffnet eine lokale Build-Vorschau.

## Qualität

```sh
npm run typecheck
npm test
npm run content:check -- --strict
npm run privacy:check
npm run build
npm audit
```

Die Prüfungen decken Typen, Anwendungsfunktionen, Inhaltsschema, Querverweise und auffällige Veröffentlichungsdaten ab. Sie ersetzen weder die fachliche Prüfung von Beispielen noch eine rechtliche Prüfung der Betreiberangaben.

## Projektdokumentation

- [Start und Veröffentlichung](DEPLOYMENT.md)
- [Offene Punkte](TODO.md)
- [Screenshot-Arbeitsliste](docs/SCREENSHOT-TODO.md) und [Bildnachweis](docs/BILDNACHWEIS.md)
- [Dokumentationsübersicht und Entwicklungshistorie](docs/README.md)

[Impressum](https://cedricaichele.github.io/bankbi-kompass/#/impressum) und [Datenschutz](https://cedricaichele.github.io/bankbi-kompass/#/datenschutz) sind in der Website erreichbar. Noch fehlende Betreiberangaben sind dort ausdrücklich als TODO markiert.
