# BankBI Kompass

Schnelles Arbeits- und Nachschlagewerk für Power BI, Excel und allgemeine IDA-/Reportingkonzepte. Entwickelt von Cedric Aichele. Ziel: während der Arbeit eine passende Antwort oder Vorgehensweise in 20–60 Sekunden finden.

## Stand des Umbaus

228 kurze Einträge: 196 Referenzen, 9 Problemlösungen und 23 werkzeugübergreifende Aufgaben. Nach primärem Bereich: 95 Power BI, 52 Excel, 47 IDA, 31 werkzeugübergreifend und 3 Datenanalyse. Die Startseite bietet Suche mit direkten Vorschlägen, häufig gebrauchte Funktionen und drei Werkzeugbereiche. Tätigkeitsgruppen ersetzen Kurskapitel. Sieben Kontext-Tags ersetzen lange Bankprozessseiten. Es gibt keinen Lernpfad und keine Fortschrittsanzeige.

Alle Einträge enthalten Kurzantwort, Einsatzfall, Schritte, Beispiel, häufigsten Fehler und verwandte Themen. Der Markdown-Text ist auf 250 Wörter begrenzt. Die Kurzantwort steht separat in den Metadaten. Screenshots und Abbildungen sind optional und lassen sich vergrößern.

Der Ausbau enthält 15 echte Power-BI-Screenshots, 12 echte Excel-Screenshots, 7 schematische IDA-Abbildungen und ein zusätzliches Beziehungsschema. Suchtreffer bieten eine aufklappbare Schnellansicht; die Werkzeugwahl enthält 10 interaktive Entscheidungen. Den aktuellen Veröffentlichungsstatus dokumentiert [DEPLOYMENT.md](DEPLOYMENT.md). Details zur Inhaltsmigration stehen in [docs/UMBAU.md](docs/UMBAU.md), offene IDA-Fragen und die Bildwunschliste in [TODO.md](TODO.md).

## Lokal starten und prüfen

Voraussetzung: Node.js 22.18 oder neuer und npm. Im Projektordner:

```sh
npm install
npm run dev
```

Die lokale Adresse steht im Terminal, normalerweise `http://127.0.0.1:5173/bankbi-kompass/`. Unter PowerShell bei Bedarf `npm.cmd` verwenden. Der Server bindet nur an die lokale Loopback-Adresse.

```sh
npm run typecheck
npm test
npm run content:check -- --strict
npm run privacy:check
npm run build
npm audit
npm run preview
```

Der Build schreibt die statische Website nach `dist/`. `npm ci` verwendet das vorhandene Lockfile; `npm run test:watch` startet den Test-Watchmodus. Bei Windows-Zertifikatsproblemen kann `$env:NODE_OPTIONS = "--use-system-ca"` den System-Zertifikatsspeicher aktivieren, ohne die Zertifikatsprüfung auszuschalten.

Die Tests prüfen Suchpriorität, Synonyme, Tippfehler, Filter, Inhaltsstruktur, Querverweise, Werkzeugkatalog, alte Direktlinks und Favoriten, Navigation, Kopieren und Bilddialog. Die automatisierten Tests führen Formelbeispiele nicht in Office aus. Die illustrierten Excel-Funktionen sowie SUM und die Personendimension wurden zusätzlich in den echten Desktop-Anwendungen mit synthetischen Daten geprüft; das ist keine Laufzeitprüfung aller 228 Einträge. Browserprüfungen ergänzen die automatisierten Tests; das zeitliche Produktziel ist noch nicht durch Nutzertests gemessen.

## Aufbau

React, TypeScript und Vite erzeugen eine statische Anwendung. HashRouter unterstützt Direktlinks unter dem konfigurierten Unterpfad `/bankbi-kompass/`. Markdown wird mit React Markdown und remark-gfm dargestellt; YAML-Frontmatter wird mit Zod geprüft. Fuse.js sucht lokal, exakte Suchsynonyme haben Vorrang.

```text
src/content/articles/       Kurze Funktions- und Konzeptreferenzen
src/content/problems/       Konkrete Fehlerhilfen
src/content/tasks/          Werkzeugübergreifende Aufgaben
src/content/catalog.ts      Werkzeugseiten und Tätigkeitsgruppen
src/content/schema.ts       Metadaten, Bildmodell und Pflichtabschnitte
src/content/redirects.ts    Migration alter Links und Favoriten
src/pages/                 Suche, Werkzeugseiten und Referenzansicht
src/components/            Listen, Markdown, Code und Bilddialog
src/lib/                   Suche, Favoriten, Entscheidungen, Inhaltsprüfung
scripts/check-content.ts   Strikte Prüfung einschließlich Bildpfaden
public/images/             Lokale Abbildungen
docs/archive-v1/           Alte Inhalte, nicht im Website-Bundle
```

Die ursprünglichen Texte bleiben im Archiv nachvollziehbar. Sie werden nicht durchsucht oder ausgeliefert. Frühere Prozess-IDs führen zu konkreten Aufgaben; die Lernpfadroute wurde entfernt. Gültige Favoriten bleiben erhalten, umbenannte IDs werden beim Laden zugeordnet.

## Einen kurzen Eintrag ergänzen

Datei unter `src/content/articles/`, `problems/` oder `tasks/` anlegen. Das folgende Frontmatter ist eine Vorlage; IDs und Quellen passend ersetzen:

```yaml
---
id: mein-thema
slug: mein-thema
titel: Meine konkrete Aufgabe
bereich: Power BI
werkzeuge: [Power BI]
kategorie: Datenmodell
schwierigkeit: Grundlage
kurzbeschreibung: Eine direkte Antwort auf die Frage des Nutzers in ein bis zwei Sätzen.
ort: Power BI Desktop → Modellansicht
tags: [Schlüssel]
synonyme: [Wie verbinde ich diese Daten?]
verwandteThemen: [beziehungen, granularitaet]
kontexte: [Reporting, Datenqualität]
quelleTyp: synthetisches-beispiel
zuletztGeprueft: "2026-09-16"
art: artikel
screenshots: []
quellen: []
---

## Wann brauche ich das?
Ein konkreter Arbeitsanlass.

## Schritte
1. Ausgangslage prüfen.
2. Die passende Aktion ausführen.
3. Ergebnis plausibilisieren.

## Beispiel
Ein kleines, vollständig synthetisches Beispiel mit erwartetem Ergebnis.

## Typischer Fehler
Der wichtigste Stolperstein und seine Folge.
```

`kurzbeschreibung` liefert die sichtbare Kurzantwort, `ort` den Bedienort beziehungsweise einen klaren generischen IDA-Hinweis. Pflichtabschnitte verwenden genau die gezeigten Überschriften. Codeblöcke unterstützen beispielsweise `dax`, `excel`, `m` und `text`; die Hervorhebung ist kein Sprachparser.

Suchsynonyme als echte Nutzerfragen formulieren. Neue Einträge gelangen automatisch in den Suchindex. Für den Einstieg über eine Werkzeugseite zusätzlich die ID in `catalog.ts` der passenden Tätigkeitsgruppe zuordnen. Mehrfachzuordnungen sind möglich, insbesondere bei Power Query. Querverweise müssen vorhandene IDs enthalten. Links im Text: `[Beziehungen](#/wissen/beziehungen)`.

Kontexte: Marktsteuerung, Bestandsanalyse, Neugeschäft, Kundenanalyse, Prozessanalyse, Reporting, Datenqualität. Keine neuen langen Prozessaufsätze anlegen.

## Bilder ergänzen

Dateien unter `public/images/power-bi/`, `public/images/excel/` oder `public/images/ida/` ablegen. Im Frontmatter ohne `public/` und ohne führenden Schrägstrich referenzieren:

```yaml
screenshots:
  - src: images/power-bi/beziehung.svg
    alt: Eine Produktdimension filtert zwei passende Bestandszeilen.
    caption: Selbst erstelltes Beziehungsschema.
    hinweis: Die 1-Seite enthält jeden Schlüssel nur einmal.
    schritt: 2
    schema: true
    status: bereit
```

Erlaubt sind PNG, JPG, JPEG, WebP und SVG mit Kleinbuchstaben, Ziffern und Bindestrichen. Alt-Text, Caption, Schema-Kennzeichnung und Status sind Pflicht. Eine optionale Schrittnummer ordnet das Bild einem vorhandenen Arbeitsschritt zu. Fehlende Aufnahmen erhalten `status: todo`, einen konkreten `todo`-Text und keinen erfundenen Bildpfad.

Screenshots für Power BI und Excel stammen aus echten Anwendungen mit vollständig synthetischen Daten. IDA verwendet ausschließlich gekennzeichnete allgemeine Schemen. Bilder liegen lokal, laden verzögert und öffnen einen Dialog mit Zoom, Scrollbereich und Escape. Fehlerhafte Bilder zeigen einen verständlichen Ersatzhinweis. Das Verzeichnis `.local-demo/` mit Rohaufnahmen, CSV, Arbeitsmappen und Zwischenständen bleibt aus Git ausgeschlossen.

## Datenschutz und fachliche Grenzen

Unabhängiges Wissensprojekt, keine offizielle Anwendung eines Kreditinstituts. Kein Backend, keine Anmeldung, keine Uploads, keine KI-API und kein Tracking. Keine externen Schriftarten oder automatisch geladenen Fremdinhalte. Favoriten liegen nur unter `bankbi:favoriten:v1` im localStorage. Die Kopierfunktion schreibt sichtbaren Beispielcode erst nach Klick und liest die Zwischenablage nicht.

Nur generische oder vollständig synthetische Beispiele verwenden: keine Arbeitgebernamen, Logos, realen Kunden, Kennzahlen, internen URLs, Feldnamen, Datenmodelle, Tickets oder Prozesse. IDA-Einträge erklären allgemeine Reportingkonzepte; unbekannte Bedienelemente, Syntax und Betriebsabläufe bleiben ausdrücklich TODO. Öffentliche Quellen werden direkt am Eintrag verlinkt.

Die Inhaltsprüfung untersucht Metadaten und Markdown auf verdächtige Muster, prüft Verweise, Länge und Bilddateien. `--strict` macht Warnungen zu Fehlern. Treffer werden ohne Ausgabe des verdächtigen Werts gemeldet. Eine Musterprüfung kann vertrauliche Inhalte übersehen; eine redaktionelle Prüfung bleibt erforderlich.

## Veröffentlichung

Ziel ist GitHub Pages unter dem Repository CedricAichele/bankbi-kompass. Der Actions-Workflow prüft TypeScript, Tests, Inhalte und Repository-Vertraulichkeit vor dem Build. Er veröffentlicht ausschließlich main. Status, Grenzen und nächste Schritte: [DEPLOYMENT.md](DEPLOYMENT.md). Hash-Routen sind nicht einzeln vorgerendert; Social-Metadaten und Suchmaschinenindexierung bleiben begrenzt.
