# Inhaltsarchitektur · 23. September 2026

Öffentlicher Index: 272 → 200 Einträge. 47 IDA-Artikel archiviert, 28 überlappende Seiten integriert, 3 neue Artikel (pq-workflow, pq-profiling, excel-power-query). Mengen dienen nur der Nachvollziehbarkeit; Qualitätsziel sind brauchbare Arbeitswege.

## Aktive Bereiche

Power BI: Daten importieren; Power Query & Datenaufbereitung; Datenmodell; DAX & Measures; Zeitintelligenz; Berichte & Visualisierung; Fehler & Plausibilitätsprüfung. Die eigene Power-Query-Übersicht liegt unter /power-query und führt vom Einstieg bis zur Abschlusskontrolle.

Excel: Daten vorbereiten; Nachschlagen & Zuordnen; Filtern & eindeutige Listen; Aggregieren; Logik & Fehlerbehandlung; PivotTables & Auswertung; Excel Power Query; Typische Probleme. Transformationen werden gemeinsam gepflegt, Excel erklärt den eigenen Einstieg und das Ladeziel.

IDA: nur Entwicklungsseite unter /bereich/ida. Alle früheren IDs und reporting sowie laufzeitanalyse werden dorthin umgeleitet. Der Import-Glob umfasst ausschließlich src/content/articles, problems und tasks; docs/archive wird nicht ins Website-Bundle aufgenommen. Favoriten werden gegen den aktiven Index bereinigt.

## Zusammenführungen

Die Quellfassungen liegen zur Nachvollziehbarkeit unter docs/archive/merged; sie sind nicht öffentlich indexiert. Jede alte URL leitet zum Zielartikel weiter. Querverweise im aktiven Inhalt verwenden direkt das neue Ziel.

| Frühere ID | Aktives Ziel |
| --- | --- |
| excel-import | daten-laden |
| pq-umbenennen | pq-workflow |
| pq-ueberschriften | pq-workflow |
| spalten-teilen | pq-text |
| werte-ersetzen | pq-text |
| excel-index | index-vergleich |
| pivot-felder | pivottable |
| pivot-aktualisieren | pivottable |
| pivot-filtern | pivottable |
| excel-ersetzen | wechseln-ersetzen |
| excel-text-teilen | textteilen |
| excel-dubletten-entfernen | excel-dubletten-finden |
| saeubern | glaetten |
| excel-kombinationen | eindeutig |
| aufgabe-breit-lang | entpivotieren |
| aufgabe-lang-breit | pivotieren |
| aufgabe-null | nullwerte |
| aufgabe-csv | csv-import |
| aufgabe-excel-liste | excel-liste-vorbereiten |
| aufgabe-dubletten-entfernen | dubletten |
| aufgabe-ytd | ytd |
| aufgabe-vorjahr | vorjahr |
| aufgabe-datum-sortieren | datum-sortieren |
| daten-gruppieren | gruppieren |
| dateien-zusammenfassen | dateien-kombinieren |
| datenqualitaet | pq-workflow |
| begriff-append | anhaengen |
| begriff-join | zusammenfuehren |

## Fachliche Entscheidungen

- Workflow mit 18 Schritten: Bedeutung und Qualitätsprüfung vor Transformation. Nicht jede Transformation ist obligatorisch.
- Profiling gemeinsam erklärt; distinct und unique unterscheiden, Gesamtmenge statt nur erster 1000 Zeilen prüfen.
- NULL anhand aktiver Verträge, bestätigter Nullmenge, unbekanntem Bestand und fehlendem Pflichtschlüssel behandeln.
- Gruppieren ändert Granularität; Deduplizieren ersetzt keine Aggregation.
- Merge zeigt 1:1, 1:n und n:m sowie die Gefahr vervielfachter Kennzahlen. Append erhält den Zeitbezug; Bestände sind nicht über Stichtage additiv.
- XVERWEIS liefert ein Segment aus Stammdaten. SUMMEWENNS/ZÄHLENWENNS verwenden Geschäftsstelle und Produkt.
- PivotTable enthält Quellenaufbau, Feldzuordnung, Aggregation, Filter, Aktualisierung und Kontrolle.

## Bildplanung

49 aktive Aufnahme-/Ersatzpläne, siehe [Arbeitsliste](SCREENSHOT-TODO.md). Keine neuen Aufnahmen und keine Änderungen an Bilddateien. Unpassende alte Abbildungen sind ausgeblendet; passende bestehende Abbildungen bleiben nutzbar.

## Grenzen

Beispiele redaktionell und rechnerisch geprüft; in diesem Umbau keine Ausführung neuer Fälle in Power BI Desktop oder Excel. Betreiberangaben, Aufnahmen, komplexere Modellvalidierung und Nutzertests bleiben offen. Kein Push und kein Deployment.

## Validierung

132 Tests in 9 Dateien bestanden, einschließlich aller archivierten IDA-Weiterleitungen und der Alltagssuche. Typecheck, strenge Inhaltsprüfung, Vertraulichkeitsprüfung und Produktionsbuild erfolgreich. npm audit: 0 Schwachstellen. Bestehende Vite-Warnung für ein Bundle über 500 kB bleibt.

Browser: 13 angeforderte Seiten bei 1920×1080, 1366×768 und 390×844 per DOM-/Layoutprüfung kontrolliert, ohne Screenshots. Keine Seitenüberläufe, defekten eingebundenen Bilder oder öffentlichen IDA-Altlinks. Zusätzlich die übrigen Artikel der fachlichen Stichprobe im Build gelesen.

Zusätzlich korrigiert: Fehlerlisten müssen den Zustand vor einer Ersetzung erhalten; eine Referenz auf das bereinigte Endergebnis kann Fehler nicht mehr nachweisen. Ein sichtbares undefined-Präfix in einer älteren Bildbeschreibung entfernt.
