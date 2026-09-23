# Review: Excel und Power Query

Stand: 23. September 2026. Lokale Überarbeitung; kein Deployment.

## Umsetzung

- Globale Suche berücksichtigt Aufgaben aus den bestehenden M- und Excel-Referenzeinträgen. Exakte M-Funktionsnamen führen zur passenden gefilterten Referenz. Bereichsfilter und bisherige Suchprioritäten bleiben erhalten.
- Excel-Referenz mit 32 Formelmustern, Suche, Kategorien, Eingabezellen, Anpassungen, Versionshinweisen und Artikelverweisen. Formeln, Ergebnisse und Anwendungsfälle werden aus den vorhandenen Artikeln abgeleitet, nicht als zweiter Inhaltsbestand gepflegt.
- Excel-Beispiele und Fehlerhilfen korrigiert: Mehrkriterien-Nachschlag, Sortierung nach zwei Schlüsseln, Kalenderbestandteile, echte Leerzellen, Textzahlen, Datumskonvertierung, fehlende und mehrfache Treffer sowie Pivot-Aktualisierung und Aggregation.
- Bereinigungsworkflow mit unverändertem Original, Ausschlussprotokoll, Zeilenabgleich und Kontrollsumme. Die frühere gemischte Vorbereitungskategorie ist in Bereinigung, Text und Datum/Datentypen aufgeteilt.
- Power Query erklärt sichtbar Transformationsregeln, Aktualisierung und die Profilvorschau. M-Beispiele zeigen den Eingabeort vor dem Code; vollständige Formelleistenschritte enthalten das Gleichheitszeichen. Fehlende Bestände werden separat behandelt.
- Importartikel enthalten passende Lade- und Aktualisierungswege für Excel. Lange Artikel haben eine Abschnittsauswahl. DirectQuery bleibt erreichbar, steht jedoch nicht mehr unter den Importgrundlagen.
- Nicht zum Beispiel passende Bilder der Excel-Listenbereinigung und Pivot-Aggregation sind ausgeblendet. Keine neuen Screenshots.

## Bereits vorhanden / bewusst erhalten

Der Ordnerimport enthielt bereits die ausführlichen Voraussetzungen, Hilfsabfragen, Dateifilter, Fehlerursachen und Aktualisierungskontrollen. Diese wurden erhalten und um den Excel-Abschluss ergänzt. Die Bildkomponente blendete versteckte beziehungsweise ausstehende Bilder bereits aus; hier genügten Inhaltsmetadaten. IDA war bereits aus dem aktiven Katalog und der Suche entfernt. Das Archiv wurde nicht reaktiviert, alte IDs leiten weiterhin zur Entwicklungsseite.

## Tatsächlich ausgeführte Prüfungen

- TypeScript: erfolgreich.
- Vollständige Testsuite: **179 Tests in 11 Dateien bestanden**. Neue Verhaltenstests prüfen Aufgabensuche, Filter, Referenzbedienung, Codearten und IDA-Ausschluss.
- Strenge Inhaltsprüfung: **202 Inhalte**, gültige Schemas, IDs und Querverweise.
- Veröffentlichungsdatenprüfung: **379 Dateien, 0 strukturelle Treffer** vor Hinzufügen dieses Berichts. Keine realen Daten oder neuen Bilddateien eingebracht.
- Produktionsbuild: erfolgreich. Vite meldet weiterhin einen JavaScript-Chunk über 500 kB; kein Buildfehler.
- Browser: 15 Routen jeweils bei **1440 und 320 Pixeln** geprüft: Start, Power Query, M-Ausdruck, M-Tabellenschritt, Suche „aufrunden“, Ordnerimport, Excel, Excel-Referenz, Mehrkriterien-Nachschlag, Bereinigungsworkflow, Textzahlen, Datum, Formel-als-Text-Fehlerhilfe, IDA und alter IDA-Link. Keine Seitenüberläufe, sichtbaren TODOs oder defekten geladenen Bilder festgestellt. Prüfung über DOM, Zugänglichkeitsbaum und Layoutmaße, ohne Screenshots.
- Interaktiv geprüft: Excel-Aufgabensuche und Kategorie gemeinsam, Rücksetzen auf 32 Einträge, Artikelverweis, M-Kopieren (`Text.Trim([Ort])` beziehungsweise `= Table.Combine({Januar, Februar})`), Abschnittssprung mit Öffnen des Zielabschnitts, direkter M-Funktionstreffer und scrollbarer Code. Keine Browser-Konsolenfehler beobachtet.

## Echte Excel-Laufzeitprüfung und Grenzen

In einer separaten unsichtbaren Excel-Instanz (Version 16.0) wurde eine neue Arbeitsmappe ausschließlich mit synthetischen Werten berechnet und ohne Speichern geschlossen. **43 Prüffälle bestanden**. Bestehende Nutzerdokumente wurden nicht verändert.

Ausgeführt wurden XVERWEIS mit mehreren Kriterien einschließlich fehlendem und mehrfachem Treffer, SORTIERENNACH mit zwei Schlüsseln und kompletter Ausgabereihenfolge, JAHR/MONAT/TAG/DATUM einschließlich Überlauf, DATWERT, MONATSENDE, HEUTE, ISTLEER, ISTFEHLER, Leerstringvergleiche, ISTZAHL/ISTTEXT, ZAHLENWERT einschließlich leerem und ungültigem Text, SUMME, SUMMEWENNS, ZÄHLENWENNS, FILTER einschließlich Fehler- und Überlauffällen, GROSS/GLÄTTEN, WENNS und WENNFEHLER. HEUTE wurde über eine zeitunabhängige Monatsende-Eigenschaft geprüft, nicht gegen ein dauerhaft festgeschriebenes Tagesdatum.

Die 43 Fälle sind keine Laufzeitprüfung jeder Excel-Formel des gesamten Projekts. M-Code wurde in diesem Review nicht in Excel Power Query oder Power BI ausgeführt. Ebenso wurde kein vollständiger Dateiordner-Refresh, Gateway oder Service-Refresh praktisch durchgespielt. Die M-Eingabeorte, Syntaxdarstellung, Kopierwerte und Verknüpfungen wurden geprüft; daraus wird keine vollständige M-Laufzeitvalidierung abgeleitet. Die automatische Veröffentlichungsdatenprüfung ersetzt keine fachliche Vertraulichkeitsprüfung.
