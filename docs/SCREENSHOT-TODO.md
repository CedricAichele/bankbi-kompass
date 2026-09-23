# Screenshot-Arbeitsliste

Stand: 23.09.2026. Keine neuen Screenshots erstellt. Bilddateien unverändert. Diese Liste gehört zur internen Arbeitsdokumentation, nicht zur Website. Alle Aufnahmen ausschließlich mit frei erfundenen Daten.

Priorität: Workflow; Spaltenqualität, Spaltenverteilung und Spaltenprofil; Datentypen; Gruppieren; Merge; Append; Pivot/Unpivot; angewendete Schritte; XVERWEIS; PivotTable.

Zusammengeführte Inhalte erhalten keine separaten Aufträge mehr: Textaufteilung und Wertersetzung gehören zu pq-text; Überschriften und Umbenennen zum Workflow; Pivot-Felder, Filter und Aktualisieren zur PivotTable. IDA-Aufnahmen sind bis zum Neuaufbau ausgesetzt. Frühere Pläne bleiben ausschließlich im Archiv.

## Daten in Power Query aufbereiten · Schritt 4

- Artikel: [Daten in Power Query aufbereiten](../src/content/articles/pq-workflow.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power-Query-Workflow: Datenprofil und Abfrageschritte
- Dateiname: `pq-workflow-4.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. **Quelle öffnen:** Power BI → Start → Daten abrufen → Daten transformieren. In Excel → Daten → Daten abrufen bzw. Aus Tabelle/Bereich. Quelle, Tabelle und Zeitraum bewusst wählen.
2. **Vorschau ansehen:** Sind die Überschriften korrekt und wurden Titel, Fußzeilen oder Summenzeilen als Daten eingelesen? Kopfzeilen erst nach Entfernen von Vorspannzeilen verwenden. Spalten sprechend und eindeutig benennen.
3. **Struktur verstehen:** Formuliere „Eine Zeile beschreibt …“. Im Beispiel ist es ein Konto zu einem Stichtag. [Granularität](#/wissen/granularitaet) entscheidet, ob mehrere Zeilen je Kunde richtig sind.
4. **Profiling aktivieren:** Unter Ansicht Spaltenqualität, Spaltenverteilung und Spaltenprofil einschalten. Für eine vollständige Prüfung unten von den ersten 1000 Zeilen auf den gesamten Datensatz wechseln. [Profiling lesen](#/wissen/pq-profiling).
5. **Datentypen prüfen:** Kennungen als Text erhalten, Betrag passend numerisch, Datum als Datum und Zeitstempel als Datum/Uhrzeit. Gebietsschema für Textzahlen und Datumsangaben bewusst wählen. [Datentypen](#/wissen/datenbereinigung).
6. **Schlüssel prüfen:** Sind Konto und Stichtag gemeinsam eindeutig und vollständig? Kundennummer allein ist in einer Kontentabelle normalerweise nicht eindeutig. Fehlende Schlüssel separat untersuchen.
7. **Fehlende Werte entscheiden:** Ein leeres Kündigungsdatum kann korrekt sein; ein unbekannter Bestand bleibt unbekannt. null nur nach fachlicher Regel ersetzen. [Entscheidung bei fehlenden Werten](#/wissen/nullwerte).
8. **Spalten reduzieren:** Benötigte Schlüssel, Zeitbezug und Messgrößen behalten. Bei breiten Quellen Andere Spalten entfernen verwenden; erwartete Schemaänderungen berücksichtigen. [Spaltenauswahl](#/wissen/spalten-entfernen).
9. **Text standardisieren:** Führende/nachgestellte Leerzeichen entfernen und relevante Schreibweisen vereinheitlichen. Eine vereinbarte Schreibweise für Segmente hilft bei Vergleichen. [Textbereinigung](#/wissen/pq-text).
10. **Dubletten untersuchen:** Nach dem fachlichen Schlüssel gruppieren und Häufigkeiten prüfen. Erst bei identischen oder fachlich eindeutig auflösbaren Wiederholungen entfernen. [Dublettenprüfung](#/wissen/dubletten).
11. **Spalten bei Bedarf teilen oder kombinieren:** Nur wenn ein Feld mehrere Merkmale enthält, etwa Ort und Region mit vereinbartem Trennzeichen. IDs nicht ohne Regel zerlegen. [Text vor/nach Trennzeichen](#/wissen/pq-text).
12. **Werte gezielt ersetzen:** Fachlich bestätigte Platzhalter wie n/a in einer Datums-/Zahlenspalte in null umwandeln, bevor der Datentyp gesetzt wird. Originalwert und Umfang der Änderung nachvollziehbar halten.
13. **Datenstruktur prüfen:** Wiederholen Monatsnamen dieselbe Messgröße in vielen Spalten? Dann eine lange Struktur anstreben. Detailspalten nicht vorschnell wegaggregieren.
14. **Struktur nur bei Bedarf ändern:** [Gruppieren](#/wissen/gruppieren) für eine Zeile je Kunde; [Entpivotieren](#/wissen/entpivotieren) für Monat/Wert; [Pivotieren](#/wissen/pivotieren) für eine bewusst breite Übergabetabelle.
15. **Tabellen bei Bedarf kombinieren:** [Merge](#/wissen/zusammenfuehren) ergänzt passende Attribute. [Append](#/wissen/anhaengen) ergänzt Zeilen gleicher Struktur. Bei Merge Eindeutigkeit und Trefferzahl, bei Append Zeitraum und Spaltennamen prüfen.
16. **Angewendete Schritte kontrollieren:** Reihenfolge, Benennung und erste Fehlerstelle prüfen. Spaltenänderungen in einem frühen Schritt können spätere Schritte brechen. [Schritte verwalten](#/wissen/power-query).
17. **Ergebnis plausibilisieren:** Zeilenzahl, eindeutige Schlüssel, fehlende Werte, Fehler und Kontrollsumme mit dem Ausgang vergleichen. Bewusst ausgeschlossene Zeilen gesondert nachweisen.
18. **Laden:** Power BI → Schließen & übernehmen; Excel → Schließen & laden. Hilfsabfragen nur laden, wenn deren Ergebnis wirklich gebraucht wird. Anschließend Beziehungen bzw. Pivot-Auswertung prüfen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · Konten zu einem Stichtag

| Konto | Kunde | Ort | Bestand (Text) | Kündigungsdatum |
| --- | --- | --- | --- | --- |
| 001 | 1001 | " Mannheim " | "100,00" | null |
| 002 | 1001 | "MANNHEIM" | "200,00" | null |
| 003 | 1002 | "mannheim" | "500,00" | 31.12.2026 |

### Aktion

Konto und Kunde als Text, Bestand mit deutschem Gebietsschema als Festkommazahl, Kündigungsdatum als Datum. Ort trimmen und großschreiben. Kunde 1001 erscheint zweimal, weil er zwei Konten hat: **keine Dublette entfernen**. null im Kündigungsdatum bleibt bei aktiven Verträgen erhalten. Keine Gruppierung, da das Modell Kontendetails benötigt.

### Nachher

| Konto (Text) | Kunde (Text) | Ort | Bestand (Zahl) | Kündigungsdatum |
| --- | --- | --- | --- | --- |
| 001 | 1001 | MANNHEIM | 100,00 | null |
| 002 | 1001 | MANNHEIM | 200,00 | null |
| 003 | 1002 | MANNHEIM | 500,00 | 31.12.2026 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Neue Daten geladen? Prüfe zuerst Struktur und Qualität, entscheide dann über Bereinigung und Kombination und kontrolliere das Ergebnis vor dem Laden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Daten in Power Query aufbereiten · Schritt 16

- Artikel: [Daten in Power Query aufbereiten](../src/content/articles/pq-workflow.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Angewendete Schritte und geprüfter Endstand
- Dateiname: `pq-workflow-16.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. **Quelle öffnen:** Power BI → Start → Daten abrufen → Daten transformieren. In Excel → Daten → Daten abrufen bzw. Aus Tabelle/Bereich. Quelle, Tabelle und Zeitraum bewusst wählen.
2. **Vorschau ansehen:** Sind die Überschriften korrekt und wurden Titel, Fußzeilen oder Summenzeilen als Daten eingelesen? Kopfzeilen erst nach Entfernen von Vorspannzeilen verwenden. Spalten sprechend und eindeutig benennen.
3. **Struktur verstehen:** Formuliere „Eine Zeile beschreibt …“. Im Beispiel ist es ein Konto zu einem Stichtag. [Granularität](#/wissen/granularitaet) entscheidet, ob mehrere Zeilen je Kunde richtig sind.
4. **Profiling aktivieren:** Unter Ansicht Spaltenqualität, Spaltenverteilung und Spaltenprofil einschalten. Für eine vollständige Prüfung unten von den ersten 1000 Zeilen auf den gesamten Datensatz wechseln. [Profiling lesen](#/wissen/pq-profiling).
5. **Datentypen prüfen:** Kennungen als Text erhalten, Betrag passend numerisch, Datum als Datum und Zeitstempel als Datum/Uhrzeit. Gebietsschema für Textzahlen und Datumsangaben bewusst wählen. [Datentypen](#/wissen/datenbereinigung).
6. **Schlüssel prüfen:** Sind Konto und Stichtag gemeinsam eindeutig und vollständig? Kundennummer allein ist in einer Kontentabelle normalerweise nicht eindeutig. Fehlende Schlüssel separat untersuchen.
7. **Fehlende Werte entscheiden:** Ein leeres Kündigungsdatum kann korrekt sein; ein unbekannter Bestand bleibt unbekannt. null nur nach fachlicher Regel ersetzen. [Entscheidung bei fehlenden Werten](#/wissen/nullwerte).
8. **Spalten reduzieren:** Benötigte Schlüssel, Zeitbezug und Messgrößen behalten. Bei breiten Quellen Andere Spalten entfernen verwenden; erwartete Schemaänderungen berücksichtigen. [Spaltenauswahl](#/wissen/spalten-entfernen).
9. **Text standardisieren:** Führende/nachgestellte Leerzeichen entfernen und relevante Schreibweisen vereinheitlichen. Eine vereinbarte Schreibweise für Segmente hilft bei Vergleichen. [Textbereinigung](#/wissen/pq-text).
10. **Dubletten untersuchen:** Nach dem fachlichen Schlüssel gruppieren und Häufigkeiten prüfen. Erst bei identischen oder fachlich eindeutig auflösbaren Wiederholungen entfernen. [Dublettenprüfung](#/wissen/dubletten).
11. **Spalten bei Bedarf teilen oder kombinieren:** Nur wenn ein Feld mehrere Merkmale enthält, etwa Ort und Region mit vereinbartem Trennzeichen. IDs nicht ohne Regel zerlegen. [Text vor/nach Trennzeichen](#/wissen/pq-text).
12. **Werte gezielt ersetzen:** Fachlich bestätigte Platzhalter wie n/a in einer Datums-/Zahlenspalte in null umwandeln, bevor der Datentyp gesetzt wird. Originalwert und Umfang der Änderung nachvollziehbar halten.
13. **Datenstruktur prüfen:** Wiederholen Monatsnamen dieselbe Messgröße in vielen Spalten? Dann eine lange Struktur anstreben. Detailspalten nicht vorschnell wegaggregieren.
14. **Struktur nur bei Bedarf ändern:** [Gruppieren](#/wissen/gruppieren) für eine Zeile je Kunde; [Entpivotieren](#/wissen/entpivotieren) für Monat/Wert; [Pivotieren](#/wissen/pivotieren) für eine bewusst breite Übergabetabelle.
15. **Tabellen bei Bedarf kombinieren:** [Merge](#/wissen/zusammenfuehren) ergänzt passende Attribute. [Append](#/wissen/anhaengen) ergänzt Zeilen gleicher Struktur. Bei Merge Eindeutigkeit und Trefferzahl, bei Append Zeitraum und Spaltennamen prüfen.
16. **Angewendete Schritte kontrollieren:** Reihenfolge, Benennung und erste Fehlerstelle prüfen. Spaltenänderungen in einem frühen Schritt können spätere Schritte brechen. [Schritte verwalten](#/wissen/power-query).
17. **Ergebnis plausibilisieren:** Zeilenzahl, eindeutige Schlüssel, fehlende Werte, Fehler und Kontrollsumme mit dem Ausgang vergleichen. Bewusst ausgeschlossene Zeilen gesondert nachweisen.
18. **Laden:** Power BI → Schließen & übernehmen; Excel → Schließen & laden. Hilfsabfragen nur laden, wenn deren Ergebnis wirklich gebraucht wird. Anschließend Beziehungen bzw. Pivot-Auswertung prüfen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · Konten zu einem Stichtag

| Konto | Kunde | Ort | Bestand (Text) | Kündigungsdatum |
| --- | --- | --- | --- | --- |
| 001 | 1001 | " Mannheim " | "100,00" | null |
| 002 | 1001 | "MANNHEIM" | "200,00" | null |
| 003 | 1002 | "mannheim" | "500,00" | 31.12.2026 |

### Aktion

Konto und Kunde als Text, Bestand mit deutschem Gebietsschema als Festkommazahl, Kündigungsdatum als Datum. Ort trimmen und großschreiben. Kunde 1001 erscheint zweimal, weil er zwei Konten hat: **keine Dublette entfernen**. null im Kündigungsdatum bleibt bei aktiven Verträgen erhalten. Keine Gruppierung, da das Modell Kontendetails benötigt.

### Nachher

| Konto (Text) | Kunde (Text) | Ort | Bestand (Zahl) | Kündigungsdatum |
| --- | --- | --- | --- | --- |
| 001 | 1001 | MANNHEIM | 100,00 | null |
| 002 | 1001 | MANNHEIM | 200,00 | null |
| 003 | 1002 | MANNHEIM | 500,00 | 31.12.2026 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Neue Daten geladen? Prüfe zuerst Struktur und Qualität, entscheide dann über Bereinigung und Kombination und kontrolliere das Ergebnis vor dem Laden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Spaltenqualität, Spaltenverteilung und Spaltenprofil · Schritt 2

- Artikel: [Spaltenqualität, Spaltenverteilung und Spaltenprofil](../src/content/articles/pq-profiling.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Spaltenqualität
- Dateiname: `pq-profiling-2.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.
2. **Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.
3. **Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.
4. **Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.
5. **Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.
6. Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann.

### Synthetische Daten und erwartetes Ergebnis

| Kunde | Betrag |
| --- | --- |
| 1001 | 100 |
| 1001 | 200 |
| 1002 | 500 |

**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.

Ein fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Spaltenqualität, Spaltenverteilung und Spaltenprofil · Schritt 3

- Artikel: [Spaltenqualität, Spaltenverteilung und Spaltenprofil](../src/content/articles/pq-profiling.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Spaltenverteilung
- Dateiname: `pq-profiling-3.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.
2. **Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.
3. **Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.
4. **Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.
5. **Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.
6. Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann.

### Synthetische Daten und erwartetes Ergebnis

| Kunde | Betrag |
| --- | --- |
| 1001 | 100 |
| 1001 | 200 |
| 1002 | 500 |

**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.

Ein fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Spaltenqualität, Spaltenverteilung und Spaltenprofil · Schritt 4

- Artikel: [Spaltenqualität, Spaltenverteilung und Spaltenprofil](../src/content/articles/pq-profiling.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Spaltenprofil
- Dateiname: `pq-profiling-4.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.
2. **Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.
3. **Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.
4. **Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.
5. **Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.
6. Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann.

### Synthetische Daten und erwartetes Ergebnis

| Kunde | Betrag |
| --- | --- |
| 1001 | 100 |
| 1001 | 200 |
| 1002 | 500 |

**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.

Ein fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Datentypen fachlich richtig festlegen · Schritt 5

- Artikel: [Datentypen fachlich richtig festlegen](../src/content/articles/datenbereinigung.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Datentypen fachlich richtig festlegen
- Dateiname: `pbi-datenbereinigung.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Automatisch eingefügte Schritte **Geänderter Typ** prüfen. Wurde eine Kennung bereits zur Zahl, gehe vor diesen Schritt zurück und verhindere die Umwandlung; nachträgliches Textformat stellt verlorene Nullen nicht wieder her.
2. Kunden- und Kontonummern als **Text** setzen, wenn sie Identifikatoren und keine Rechengrößen sind. Einheitliche Typen auch in späteren Join- und Beziehungsspalten verwenden.
3. Betrag als **Dezimalzahl** oder **Feste Dezimalzahl** wählen. Festkomma hat vier Nachkommastellen; für Geld geeignet, wenn diese Genauigkeit ausreicht. Nicht als bloße Anzeigeformatierung verstehen.
4. Datum als **Datum**, Zeitstempel als **Datum/Uhrzeit** setzen. Falls Zeitzonen fachlich relevant sind, nicht unbeabsichtigt entfernen.
5. Bei Textzahlen und Textdaten **Rechtsklick auf Spalte → Typ ändern → Mit Gebietsschema** verwenden, etwa Deutsch (Deutschland) für 1.250,50 und 31.01.2026.
6. Spaltenqualität nach der Umwandlung prüfen. Fehlerzeilen mit Originalwerten vergleichen, bevor sie ersetzt oder ausgeschlossen werden.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Kennung (Text) | Betrag (Text) | Datum (Text) |
| --- | --- | --- |
| 00123 | 1.250,50 | 31.01.2026 |

### Aktion
Kennung als Text behalten. Betrag und Datum mit deutschem Gebietsschema konvertieren.

### Nachher
| Kennung (Text) | Betrag (Festkomma) | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.01.2026 |

Der Betrag ist jetzt summierbar. Das Datum lässt sich chronologisch sortieren. Die fünfstellige Kennung bleibt unverändert.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Kennungen sind meist Text, Beträge Zahlen und Datumsangaben echte Datumswerte. Der passende Typ erhält Informationen und ermöglicht Berechnungen, Sortierung und Beziehungen.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Gruppieren: eine Zeile je Kunde · Schritt 4

- Artikel: [Gruppieren: eine Zeile je Kunde](../src/content/articles/gruppieren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Gruppieren: eine Zeile je Kunde
- Dateiname: `pbi-gruppieren.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Ziel festlegen: vorher eine Zeile je Konto, nachher eine Zeile je Kunde. Alle Bestände müssen zum gleichen Stichtag gehören; sonst den Stichtag zusätzlich gruppieren.
2. Kunde auswählen → **Start/Transformieren → Gruppieren nach**. Für mehrere Kennzahlen auf **Erweitert** wechseln.
3. Ausgabespalte **Summe Bestand**, Operation **Summe**, Quellspalte **Bestand** wählen.
4. Zweite Aggregation **Konten**, Operation **Anzahl Zeilen** hinzufügen. Das zählt nur dann Konten, wenn vorher tatsächlich genau eine Zeile je Konto vorhanden ist.
5. Bei Bedarf andere Aggregationen wählen: **Durchschnitt**, **Minimum**, **Maximum** oder **Alle Zeilen**. Alle Zeilen bewahrt Detailtabellen pro Gruppe, statt direkt eine Kennzahl zu liefern.
6. Ergebnis gegen die Quellgruppen und Gesamtsumme prüfen. Für spätere Kontodetails die Quellabfrage behalten oder im Modell mit Measures aggregieren.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Kunde | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |

### Aktion
Nach Kunde gruppieren; Summe von Bestand und Anzahl Zeilen bilden.

### Nachher
| Kunde | Summe Bestand | Konten |
| --- | --- | --- |
| 1001 | 300 | 2 |
| 1002 | 500 | 1 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Eine Kontentabelle soll eine Kundenübersicht werden. Gruppiere nach Kunde und berechne Bestandssumme und Kontenzahl, wenn die Detailzeilen im Ergebnis nicht mehr gebraucht werden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Merge: Tabellen über Schlüssel zusammenführen · Schritt 4

- Artikel: [Merge: Tabellen über Schlüssel zusammenführen](../src/content/articles/zusammenfuehren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Merge: Tabellen über Schlüssel zusammenführen
- Dateiname: `pbi-zusammenfuehren.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Ziel festlegen: Bestand soll das Segment aus Kunden erhalten. Kunden muss dafür genau eine gültige Segmentzeile je Kundennummer enthalten.
2. Schlüssel beider Tabellen auf gleichen Datentyp, Leerzeichen, führende Nullen, fehlende Werte und Eindeutigkeit prüfen. Mehrteilige Schlüssel in derselben Reihenfolge auswählen.
3. Bestand auswählen → **Start → Abfragen zusammenführen**. Kunden als rechte Tabelle wählen, Kundennummer in beiden Vorschauen markieren. **Links außen** erhält alle Bestandszeilen.
4. Ergebnisspalte über das Doppelpfeil-Symbol **erweitern** und nur Segment auswählen. Erst beim Erweitern können mehrere Treffer mehrere Ergebniszeilen erzeugen.
5. Zeilenzahl und Summe vorher/nachher vergleichen. Fehlendes Segment bedeutet hier keinen passenden Treffer; Ursache prüfen, nicht automatisch als gültiges Segment behandeln.
6. Bei Mehrfachtreffern prüfen, ob die neue Zeilenebene gewünscht ist. Wenn nur ein Attribut gebraucht wird, rechte Tabelle fachlich eindeutig machen; bei benötigten Details deren Granularität bewusst übernehmen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
**Bestand**
| Kundennummer | Bestand |
| --- | --- |
| 1001 | 300 |
| 1002 | 500 |

**Kunden**
| Kundennummer | Segment |
| --- | --- |
| 1001 | Privat |
| 1002 | Gewerbe |

### Aktion
Links außen verbinden, Segment erweitern.

### Nachher
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1001 | 300 | Privat |
| 1002 | 500 | Gewerbe |

### Warum entstehen plötzlich mehr Zeilen?
Eine linke Kundenzeile 1001 mit Kundenbestand 300 trifft rechts auf Konten A, B und C. Nach Expand entstehen **3 Zeilen**. Der Kundenbestand 300 steht nun dreimal; eine Summe 900 wäre falsch. Das zusätzliche Kontodetail kann gewünscht sein, die wiederholte Kundenkennzahl ist aber nicht auf dieser Ebene additiv.

Bei zwei linken und drei rechten Zeilen desselben Schlüssels entstehen **2 × 3 = 6** Trefferkombinationen. Bei 1:1 bleibt je Treffer eine Zeile, bei 1:n wächst die Zeilenmenge, bei n:m können sich beide Seiten vervielfachen.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Merge ergänzt zu einer Tabelle passende Werte einer zweiten Tabelle. Prüfe vor dem Erweitern, wie viele Treffer je Schlüssel erwartet werden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Merge: Tabellen über Schlüssel zusammenführen · Schritt 4

- Artikel: [Merge: Tabellen über Schlüssel zusammenführen](../src/content/articles/zusammenfuehren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Merge: Tabellen über Schlüssel zusammenführen
- Dateiname: `pbi-merge-erweitern.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Ziel festlegen: Bestand soll das Segment aus Kunden erhalten. Kunden muss dafür genau eine gültige Segmentzeile je Kundennummer enthalten.
2. Schlüssel beider Tabellen auf gleichen Datentyp, Leerzeichen, führende Nullen, fehlende Werte und Eindeutigkeit prüfen. Mehrteilige Schlüssel in derselben Reihenfolge auswählen.
3. Bestand auswählen → **Start → Abfragen zusammenführen**. Kunden als rechte Tabelle wählen, Kundennummer in beiden Vorschauen markieren. **Links außen** erhält alle Bestandszeilen.
4. Ergebnisspalte über das Doppelpfeil-Symbol **erweitern** und nur Segment auswählen. Erst beim Erweitern können mehrere Treffer mehrere Ergebniszeilen erzeugen.
5. Zeilenzahl und Summe vorher/nachher vergleichen. Fehlendes Segment bedeutet hier keinen passenden Treffer; Ursache prüfen, nicht automatisch als gültiges Segment behandeln.
6. Bei Mehrfachtreffern prüfen, ob die neue Zeilenebene gewünscht ist. Wenn nur ein Attribut gebraucht wird, rechte Tabelle fachlich eindeutig machen; bei benötigten Details deren Granularität bewusst übernehmen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
**Bestand**
| Kundennummer | Bestand |
| --- | --- |
| 1001 | 300 |
| 1002 | 500 |

**Kunden**
| Kundennummer | Segment |
| --- | --- |
| 1001 | Privat |
| 1002 | Gewerbe |

### Aktion
Links außen verbinden, Segment erweitern.

### Nachher
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1001 | 300 | Privat |
| 1002 | 500 | Gewerbe |

### Warum entstehen plötzlich mehr Zeilen?
Eine linke Kundenzeile 1001 mit Kundenbestand 300 trifft rechts auf Konten A, B und C. Nach Expand entstehen **3 Zeilen**. Der Kundenbestand 300 steht nun dreimal; eine Summe 900 wäre falsch. Das zusätzliche Kontodetail kann gewünscht sein, die wiederholte Kundenkennzahl ist aber nicht auf dieser Ebene additiv.

Bei zwei linken und drei rechten Zeilen desselben Schlüssels entstehen **2 × 3 = 6** Trefferkombinationen. Bei 1:1 bleibt je Treffer eine Zeile, bei 1:n wächst die Zeilenmenge, bei n:m können sich beide Seiten vervielfachen.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Merge ergänzt zu einer Tabelle passende Werte einer zweiten Tabelle. Prüfe vor dem Erweitern, wie viele Treffer je Schlüssel erwartet werden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Append: Tabellen untereinander anhängen · Schritt 3

- Artikel: [Append: Tabellen untereinander anhängen](../src/content/articles/anhaengen.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Append: Tabellen untereinander anhängen
- Dateiname: `pbi-anhaengen.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Prüfe Bedeutung, Spaltennamen und Datentypen beider Tabellen. Gleicher Name muss auch dieselbe Bedeutung haben.
2. Zeitbezug oder Dateiquelle vorab als Spalte aufnehmen. Append erfindet keinen Monat aus dem Abfragenamen.
3. **Start → Abfragen anfügen/anhängen → Als neue Abfrage** wählen, Tabellen auswählen und bestätigen.
4. Spalten werden nach Namen zugeordnet, nicht nach Position. Eine in einer Quelle fehlende Spalte erhält dort null; abweichende Namen können zwei getrennte Spalten erzeugen.
5. Zeilenzahl gegen die Summe der Quellen prüfen. Append entfernt keine Dubletten; Überschneidungen der Lieferungen gezielt untersuchen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
**Januar**
| Monat | Kunde | Bestand |
| --- | --- | --- |
| 2026-01 | 1001 | 100 |

**Februar**
| Monat | Kunde | Bestand |
| --- | --- | --- |
| 2026-02 | 1001 | 120 |

### Aktion
Januar und Februar anhängen.

### Nachher
| Monat | Kunde | Bestand |
| --- | --- | --- |
| 2026-01 | 1001 | 100 |
| 2026-02 | 1001 | 120 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Append ergänzt Zeilen gleicher fachlicher Struktur. Monat oder Herkunft muss vor dem Anhängen vorhanden sein, damit wiederkehrende Schlüssel unterscheidbar bleiben.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Pivotieren: eine breite Übergabetabelle erstellen · Schritt 3

- Artikel: [Pivotieren: eine breite Übergabetabelle erstellen](../src/content/articles/pivotieren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Pivotieren: eine breite Übergabetabelle erstellen
- Dateiname: `pbi-pivotieren.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Festlegen, welche Spalten die Ergebniszeile identifizieren. Im Beispiel nur Kunde; unnötige Detailspalten vorher entfernen.
2. Monat markieren → **Transformieren → Spalte pivotieren**; als Wertespalte Wert auswählen.
3. Unter erweiterten Optionen **Nicht aggregieren** wählen, wenn jede Kombination Kunde/Monat genau einen Wert hat. Bei mehreren Werten zunächst deren Ursache klären; nur bei fachlicher Additivität Summe wählen.
4. Neue Spalten und ihre Typen prüfen. Neue oder fehlende Monatswerte verändern das Schema und können spätere Schritte beeinflussen.
5. Jeden Schnittpunkt gegen die lange Quelle prüfen, einschließlich fehlender Kombinationen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Kunde | Monat | Wert |
| --- | --- | --- |
| 1001 | Jan | 100 |
| 1001 | Feb | 120 |
| 1001 | Mär | 130 |

### Aktion
Monat pivotieren, Wertespalte Wert, Nicht aggregieren.

### Nachher
| Kunde | Jan | Feb | Mär |
| --- | --- | --- | --- |
| 1001 | 100 | 120 | 130 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Erzeuge eine Spalte je Merkmalswert, wenn eine Übergabe bewusst eine breite Tabelle benötigt. Für ein Datenmodell ist die lange Ausgangsstruktur häufig geeigneter.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Entpivotieren: Monate von breit nach lang · Schritt 2

- Artikel: [Entpivotieren: Monate von breit nach lang](../src/content/articles/entpivotieren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Entpivotieren: Monate von breit nach lang
- Dateiname: `pbi-entpivotieren.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Identifikatoren von Messspalten trennen. Kunde bleibt Schlüsselmerkmal, Jan/Feb/Mär enthalten dieselbe Messgröße.
2. Kunde und weitere zu behaltende Identifikatoren markieren → **Transformieren → Andere Spalten entpivotieren**. So werden auch neue Monatsspalten erfasst; unerwartete Textspalten würden ebenfalls erfasst und müssen kontrolliert werden.
3. Attribut in Monat und Wert in den fachlichen Messnamen umbenennen. Datentypen prüfen.
4. Für mehrere Jahre Monat und Jahr in einen echten Monats-/Datumsbezug überführen. Nur Jan als Text reicht für ein dauerhaftes Zeitmodell nicht aus.
5. Zeilenzahl, fehlende Werte und Zuordnung prüfen. null-Zellen werden beim Entpivotieren nicht als normale Wertezeilen ausgegeben; eine vollständige Zeitreihe gegebenenfalls über einen Kalender herstellen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Kunde | Jan | Feb | Mär |
| --- | --- | --- | --- |
| 1001 | 100 | 120 | 130 |

### Aktion
Monatsspalten entpivotieren.

### Nachher
| Kunde | Monat | Wert |
| --- | --- | --- |
| 1001 | Jan | 100 |
| 1001 | Feb | 120 |
| 1001 | Mär | 130 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Wiederkehrende Monatsspalten werden zu den Merkmalen Monat und Wert. Die lange Struktur lässt sich leichter filtern, mit einem Kalender verbinden und visualisieren.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Was ist Power Query? · Schritt 3

- Artikel: [Was ist Power Query?](../src/content/articles/power-query.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Was ist Power Query?
- Dateiname: `excel-power-query.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. In Power BI **Start → Daten transformieren**, in Excel **Daten → Daten abrufen** bzw. **Aus Tabelle/Bereich** öffnen. Der Editor enthält Abfragen links, Vorschau in der Mitte und Abfrageeinstellungen rechts.
2. Wähle eine Abfrage. Sie ist eine Transformationsanweisung an eine Quelle, keine von Hand gepflegte Ergebnistabelle. Beginne bei neuen Daten mit dem [Aufbereitungsworkflow](#/wissen/pq-workflow).
3. Unter **Ansicht → Abfrageeinstellungen** den Bereich **Angewendete Schritte** einblenden. Quelle, Navigation und Geänderter Typ können schon automatisch vorhanden sein.
4. Klicke nacheinander auf Schritte, um Zwischenstände zu sehen. Jede über die Oberfläche hinzugefügte Transformation wird normalerweise als weiterer Schritt festgehalten. Namen wie „Schlüssel als Text“ machen die Absicht verständlich.
5. Rechtsklick auf einen Schritt → **Umbenennen**. Über das Zahnrad lassen sich Einstellungen ändern, sofern der Schritt einen entsprechenden Dialog besitzt. Über X bzw. **Löschen** einen Schritt entfernen. Danach alle folgenden Schritte auf Fehler prüfen.
6. Kontrolliere die Reihenfolge: Eine entfernte Spalte kann später nicht mehr verwendet werden; ein Filter vor einer Gruppierung verändert die Summe. Prüfe den letzten Schritt vor dem Laden.
7. Power BI: **Schließen & übernehmen** lädt ins Modell. Excel: **Schließen & laden** bzw. **Schließen & laden in…** wählt Tabelle, Verbindung oder Datenmodell. [Excel-spezifischer Einstieg](#/wissen/excel-power-query).

### Synthetische Daten und erwartetes Ergebnis

| Ebene | Aufgabe | Beispiel |
| --- | --- | --- |
| Power Query | Daten vorbereiten | Kennungen als Text und Beträge als Zahl lesen |
| Datenmodell | Tabellen verbinden | Kunden filtern ihre Konten über eine Beziehung |
| DAX | Kennzahl berechnen | Bestand im aktuellen Filterkontext summieren |
| Visual | Ergebnis darstellen | Summe je Segment als Balken |

**Schrittkette:** Quelle → Navigation → Schlüssel als Text → Text bereinigt → Ergebnis geprüft.

Wird „Schlüssel als Text“ geändert, werden die nachfolgenden Schritte auf diesem neuen Zwischenstand ausgewertet.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Power Query bereitet Daten wiederholbar auf. Das Datenmodell verbindet Tabellen, DAX berechnet Kennzahlen und Visuals stellen Ergebnisse dar.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## XVERWEIS: Segment aus Stammdaten holen · Schritt 3

- Artikel: [XVERWEIS: Segment aus Stammdaten holen](../src/content/articles/xverweis.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · XVERWEIS: Segment aus Stammdaten holen
- Dateiname: `excel-xverweis.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Suchschlüssel in beiden Tabellen auf gleichen Datentyp und störende Leerzeichen prüfen. Stammdaten sollten pro Kundennummer genau ein gültiges Segment enthalten.
2. Im Auswertungsblatt die Ergebniszelle C2 wählen. A2 enthält die Kundennummer, B2 den Bestand.
3. =XVERWEIS(A2;Stammdaten!A:A;Stammdaten!B:B;"nicht gefunden") eingeben. Die Bereiche liegen auf dem Blatt Stammdaten; für große Listen besser benannte Tabellen oder begrenzte Bereiche verwenden.
4. Ergebnis mit der Stammdatenzeile vergleichen und Formel nach unten kopieren. Fehlende Zuordnungen gezielt prüfen.
5. Mehrfachtreffer zum Beispiel mit ZÄHLENWENN auf der Suchspalte kontrollieren. XVERWEIS summiert sie nicht und liefert nicht automatisch den neuesten Datensatz.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · Blatt Stammdaten, A1:B4
| Kundennummer | Segment |
| --- | --- |
| 1001 | Privat |
| 1002 | Gewerbe |
| 1003 | Privat |

**Blatt Auswertung, A1:C2**
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1002 | 500 | ? |

### Aktion · in C2
~~~excel
=XVERWEIS(A2;Stammdaten!A:A;Stammdaten!B:B;"nicht gefunden")
~~~

### Nachher
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1002 | 500 | Gewerbe |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Ergänze zu einer Kundennummer das passende Segment. XVERWEIS vergleicht standardmäßig exakt und liefert bei Mehrfachtreffern den ersten Treffer.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## PivotTable erstellen · Schritt 5

- Artikel: [PivotTable erstellen](../src/content/articles/pivottable.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · PivotTable: Felder, Aggregation und Ergebnis
- Dateiname: `pivottable-5.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Quelldaten prüfen: eine Überschriftenzeile, keine verbundenen Zellen oder Zwischensummen, konsistente Datentypen. Eine Zeile beschreibt ein Konto am betrachteten Stichtag.
2. Innerhalb der Liste **Einfügen → Tabelle** wählen, Überschriften bestätigen und die Tabelle benennen. Der Tabellenname macht spätere neue Zeilen Teil der Quelle.
3. In dieser Tabelle **Einfügen → PivotTable** wählen. Quelle prüfen und Neues Arbeitsblatt auswählen.
4. **Personennummer → Zeilen**, **Bestand_EUR → Werte** ziehen. **Produktgruppe → Spalten** erlaubt einen Vergleich; alternativ nach **Filter** ziehen, um den Umfang einzuschränken.
5. **Wertfeldeinstellungen → Summe** prüfen. Steht dort Anzahl, den Zahlentyp in der Quelle kontrollieren und korrigieren. Ein Zahlenformat allein macht Text nicht numerisch.
6. Mit Produktgruppenfilter eine Teilmenge auswählen und deren passende Quellzeilen vergleichen. Vor der Gesamtkontrolle alle Filter zurücksetzen.
7. Bei Quellenänderung in der PivotTable **Rechtsklick → Aktualisieren** wählen. Neue Zeilen außerhalb eines festen Quellbereichs werden nicht automatisch erfasst; benannte Tabelle verwenden oder Datenquelle ändern.
8. Gesamtergebnis und einzelne Personen gegen die Quelle prüfen. In einer Arbeitskopie würde die Änderung K001 von 1250 auf 1300 nach Aktualisierung P001 von 2000 auf 2050 und das Gesamtergebnis von 9000 auf 9050 ändern.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · Beispieldaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

### Aktion

Wähle innerhalb der Tabelle Einfügen → PivotTable. Prüfe den Tabellenbereich und wähle Neues Arbeitsblatt.
Ziehe Personennummer aus der Feldliste nach Zeilen.

### Nachher · Beispielergebnis

P001 = 2.000; P002 = 2.000; P003 = 4.000; P004 = 1.000. Gesamtergebnis 9.000.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Eine PivotTable verdichtet eine flache Ausgangstabelle nach frei gewählten Merkmalen.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Balkendiagramm: Kategorien vergleichen · Schritt 3

- Artikel: [Balkendiagramm: Kategorien vergleichen](../src/content/articles/balkendiagramm.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Balkendiagramm: Kategorien vergleichen
- Dateiname: `pbi-balken.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Freie Berichtsfläche → Visualisierungen → Gruppiertes Balkendiagramm. Ziehe Segment auf die Y-Achse und die Betragssumme auf die X-Achse.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Zwei horizontale Balken mit Längen 120 und 80.**.

### Synthetische Daten und erwartetes Ergebnis

| Ausgangswerte |
| --- |
| Segment A: 120; B: 80 |

**Sichtbar:** Balkendiagramm: Kategorien vergleichen; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Sehr kleine Aufnahme, Achsen und Werte kaum lesbar; Feldzuweisung fehlt.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## Beziehung erstellen · Schritt 4

- Artikel: [Beziehung erstellen](../src/content/articles/beziehungen.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Beziehung erstellen
- Dateiname: `pbi-beziehungen.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Lade die benötigte Dimension und Faktentabelle. Prüfe die Schlüsselspalten auf denselben Datentyp und dieselbe fachliche Bedeutung.
2. Prüfe **DimKunde[Kunde]**: Jeder Schlüssel muss genau einmal vorkommen. In FaktKonten darf ein Kunde mehrfach vorkommen.
3. Öffne links die **Modellansicht**, dann **Modellierung → Beziehungen verwalten → Neu**. Wähle DimKunde und FaktKonten mit jeweils der Spalte Kunde.
4. Stelle die Kardinalität auf **Eins-zu-Viele (1:*)**, die Kreuzfilterrichtung auf **Einfach** und die Beziehung auf **aktiv**. Prüfe, welche Tabelle tatsächlich auf der 1-Seite steht.

### Synthetische Daten und erwartetes Ergebnis

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Tabellennamen und Schlüssel; 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Beziehung erstellen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## CSV korrekt importieren · Schritt 3

- Artikel: [CSV korrekt importieren](../src/content/articles/csv-import.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Importdialog – CSV korrekt importieren
- Dateiname: `pbi-csv-import.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Wähle in Power BI **Start → Daten abrufen → Text/CSV** und die gewünschte Datei.
2. Prüfe die Vorschau. Wähle **Semikolon** als Trennzeichen für das Beispiel. Stelle den Dateiursprung passend zur tatsächlichen Codierung ein, zum Beispiel **UTF-8**, wenn die Datei so gespeichert wurde.
3. Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**.

### Synthetische Daten und erwartetes Ergebnis

```text
Konto;Betrag;Datum
00123;1.250,50;31.01.2026
00124;20,00;01.02.2026
```

**Sichtbar:** Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**.; Spaltenüberschriften und zugehörige Ausgangswerte

**Ausschnitt:** Importdialog – CSV korrekt importieren mit Semikolon lesen, Kennung als Text erhalten, deutsche Zahl und Datum umwandeln., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Mehrere Dateien kombinieren · Schritt 4

- Artikel: [Mehrere Dateien kombinieren](../src/content/articles/dateien-kombinieren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Importdialog – Mehrere Dateien kombinieren
- Dateiname: `pbi-dateien-kombinieren.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Prüfe den Ordner: Dateien müssen denselben fachlichen Aufbau, passende Spaltennamen und ein kompatibles Format besitzen. Entferne keine Originaldateien; schließe unpassende Dateien in der Abfrage aus.
2. Wähle **Start → Daten abrufen → Ordner** und den Ordner, der die zu kombinierenden Dateien enthält.
3. Wähle **Daten transformieren**. Filtere die Dateiliste nach Erweiterung, Ordnerpfad und bei Bedarf Namen; schließe temporäre Dateien aus.
4. Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.

### Synthetische Daten und erwartetes Ergebnis

Bestand_2026-01.xlsx und Bestand_2026-02.xlsx: jeweils Tabelle Monatsbestand mit Kundennummer, Produkt, Bestand, Stichtag; je zwei synthetische Zeilen gemäß Artikel.

**Sichtbar:** Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.; Spaltenüberschriften und zugehörige Ausgangswerte

**Ausschnitt:** Importdialog – Mehrere Dateien kombinieren mit Passende XLSX-Dateien filtern und die Tabelle Monatsbestand kombinieren., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Daten in Power BI laden · Schritt 6

- Artikel: [Daten in Power BI laden](../src/content/articles/daten-laden.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Daten in Power BI laden
- Dateiname: `pbi-daten-abrufen.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. **Power BI Desktop → Start → Daten abrufen** öffnen. Wähle die Quelle nach Herkunft der Daten, nicht nach dem gewünschten Diagramm.
2. **Excel:** Datei wählen und im Navigator möglichst eine benannte Tabelle auswählen. Ein Arbeitsblatt kann zusätzliche Titel, Leerzeilen oder Summen enthalten. Kontrolliere den tatsächlich erkannten Bereich.
3. **Text/CSV:** Trennzeichen, Dateiursprung/Encoding und Vorschau prüfen. Kennungen mit führenden Nullen vor einer automatischen Zahlumwandlung schützen. Vertiefung: [CSV korrekt importieren](#/wissen/csv-import).
4. **Ordner:** Gleich aufgebaute Dateien gemeinsam einlesen. Dateiliste vor dem Kombinieren nach Endung und fachlichem Umfang filtern; temporäre Dateien und alte Versionen ausschließen. [Ordnerimport](#/wissen/dateien-kombinieren).
5. **Datenbank:** Den passenden Connector verwenden, berechtigte Verbindung und benötigte Tabellen/Views wählen. Import liest Daten ein; DirectQuery fragt die Quelle zur Berichtszeit ab und hat andere Anforderungen. [Modus auswählen](#/wissen/import-oder-directquery).
6. **Laden** wählen, wenn die Vorschau bereits eine saubere Tabelle zeigt. **Daten transformieren** wählen, wenn Typen, Kopfzeile, fehlende Werte oder Struktur geprüft und bearbeitet werden müssen.
7. Nach dem Import mit dem [Power-Query-Workflow](#/wissen/pq-workflow) weiterarbeiten. Anschließend im Modell Beziehungen und Kennzahlen aufbauen.

### Synthetische Daten und erwartetes Ergebnis

| Quelle | Beobachtung | Entscheidung |
| --- | --- | --- |
| Excel-Tabelle Konten | Eine Kopfzeile, Kennung als Text, Betrag numerisch | Laden nach Kontrolle möglich |
| CSV-Auszug | 00123 und 1.250,50 als Text | Transformieren und Typen bewusst festlegen |
| Monatsordner | Mehrere gleich aufgebaute Dateien | Dateiliste prüfen, dann kombinieren |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Wähle eine passende Quelle und entscheide vor dem Laden, ob Struktur, Typen oder Zeilen noch aufbereitet werden müssen.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Dubletten anhand der richtigen Zeilenebene prüfen · Schritt 4

- Artikel: [Dubletten anhand der richtigen Zeilenebene prüfen](../src/content/articles/dubletten.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Dubletten anhand der richtigen Zeilenebene prüfen
- Dateiname: `pbi-dubletten.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Die [Granularität](#/wissen/granularitaet) notieren: eine Zeile je Konto, Kunde oder Konto und Stichtag? Daraus ergibt sich der zu prüfende Schlüssel.
2. Die relevanten Schlüsselspalten gemeinsam markieren. Power Query prüft Duplikate über **die ausgewählten Spalten**, nicht automatisch über die ganze Zeile.
3. Für die Prüfung eine Referenz der Abfrage erstellen und nach dem Schlüssel gruppieren, Aggregation **Anzahl Zeilen**. Gruppen größer 1 untersuchen, einschließlich fehlender Schlüssel.
4. Sind vollständige Zeilen versehentlich identisch doppelt geliefert, alle fachlich relevanten Spalten auswählen und **Start → Zeilen entfernen → Duplikate entfernen** verwenden.
5. Bei gleichem Schlüssel und unterschiedlichen Werten zuerst eine fachliche Auswahlregel klären. Nicht voraussetzen, dass ein vorheriges Sortieren zuverlässig die gewünschte Zeile beim Entfernen bewahrt.
6. Zeilenzahl und Summenabgang gegen die identifizierten Wiederholungen prüfen. Für eine Kundensumme [gruppieren](#/wissen/gruppieren) statt ein Konto wegzulöschen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Personennummer | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |
| 1002 | C | 500 |

### Aktion
Personennummer allein würde A/B fälschlich zusammenfallen lassen. Personennummer + Konto zeigt nur die wiederholte Kombination 1002/C. Hier sind auch alle übrigen Werte identisch; die doppelte Lieferung kann entfernt werden.

### Nachher
| Personennummer | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Erst festlegen, was eine Zeile beschreibt, dann Wiederholungen beurteilen. Mehrere Konten eines Kunden sind in einer Kontentabelle keine Dubletten.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## EINDEUTIG: Liste ohne Wiederholungen · Schritt 3

- Artikel: [EINDEUTIG: Liste ohne Wiederholungen](../src/content/articles/eindeutig.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · Excel – EINDEUTIG: Liste ohne Wiederholungen
- Dateiname: `excel-eindeutig.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Beispieltabelle in A1:D4 eintragen.
2. Keine weitere Eingabezelle
3. Zelle H2 auswählen und =EINDEUTIG(A2:A4) eingeben.

### Synthetische Daten und erwartetes Ergebnis

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
Keine weitere Eingabezelle

**Sichtbar:** Quelltabelle A1:D4; Kriterienzellen F2/G2 soweit genutzt; Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – EINDEUTIG: Liste ohne Wiederholungen mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Zusammenhang zwischen Eingabezellen, Formelargumenten und Ergebnis zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Duplikate in Excel prüfen und gezielt entfernen · Schritt 2

- Artikel: [Duplikate in Excel prüfen und gezielt entfernen](../src/content/articles/excel-dubletten-finden.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Excel · Excel – Duplikate finden
- Dateiname: `excel-dubletten.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Markiere die zu prüfende Schlüsselspalte ohne Überschrift, im Beispiel **A2:A4**.
2. Wähle **Start → Bedingte Formatierung → Regeln zum Hervorheben von Zellen → Doppelte Werte**.

### Synthetische Daten und erwartetes Ergebnis

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Duplikate finden; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Markierungen sind erkennbar, aber die neue Anleitung nutzt Kunde in A2:A4. Menü und markierter Prüfbereich sollten gemeinsam sichtbar sein.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## FILTER: passende Zeilen ausgeben · Schritt 3

- Artikel: [FILTER: passende Zeilen ausgeben](../src/content/articles/excel-filtern.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · Excel – FILTER: passende Zeilen ausgeben
- Dateiname: `excel-excel-filtern.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = A
3. Zelle H2 auswählen und =FILTER(A2:D4;C2:C4=F2;"Keine Treffer") eingeben.

### Synthetische Daten und erwartetes Ergebnis

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = A

**Sichtbar:** Quelltabelle A1:D4; Kriterienzellen F2/G2 soweit genutzt; Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – FILTER: passende Zeilen ausgeben mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Zusammenhang zwischen Eingabezellen, Formelargumenten und Ergebnis zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Excel-Liste für Auswertung vorbereiten · Schritt 4

- Artikel: [Excel-Liste für Auswertung vorbereiten](../src/content/articles/excel-liste-vorbereiten.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · Excel-Datenprüfung vor der Auswertung
- Dateiname: `excel-liste-vorbereiten-4.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Ziel und Zeilenebene festlegen. Entferne Titel, Leer- und Summenzeilen aus dem Datenbereich; verwende eine eindeutige Überschriftenzeile ohne verbundene Zellen.
2. Innerhalb des zusammenhängenden Bereichs **Einfügen → Tabelle** oder **Strg+T** wählen, Bereich und Tabelle hat Überschriften bestätigen.
3. Unter **Tabellenentwurf → Tabellenname** einen sprechenden Namen vergeben. Neue Zeilen innerhalb der Tabelle ergänzen.
4. Kennungen als Text erhalten, Beträge als Zahlen und Datum als Datum prüfen. **[Textzahlen erkennen](#/wissen/excel-zahl-text)** und **[Datumswerte korrigieren](#/wissen/excel-datum)** zeigen die unterschiedlichen Fehlerbilder.
5. **[Leerzeichen und Steuerzeichen bereinigen](#/wissen/glaetten)** und **[Duplikate prüfen](#/wissen/excel-dubletten-finden)**. Fehlende Pflichtschlüssel getrennt untersuchen; leere optionale Felder nicht blind durch 0 ersetzen.
6. Zeilenzahl und eine Kontrollsumme festhalten. Für wiederkehrende Lieferungen **[Excel Power Query](#/wissen/excel-power-query)** verwenden, für die anschließende flexible Auswertung eine **[PivotTable](#/wissen/pivottable)**.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

A1:C4 in die Excel-Tabelle Konten umwandeln.

### Nachher · Beispielergebnis

| Beispielergebnis |
| --- |
| Dieselben drei Datenzeilen mit Tabellenüberschriften und Filterpfeilen. |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Eine Auswertung braucht eine rechteckige Liste mit einer Kopfzeile, konsistenten Typen und einer klaren Zeilenebene.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Fakt- und Dimensionstabelle · Schritt 2

- Artikel: [Fakt- und Dimensionstabelle](../src/content/articles/fakt-dimension.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Fakt- und Dimensionstabelle
- Dateiname: `pbi-dimension.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Notiere die fachliche Zeilenebene jeder Quelle. Bei einem Bestand ist etwa Konto und Stichtag erforderlich.
2. Ordne beschreibende Merkmale wie Kundensegment einer **Dimension** zu. Ihr Schlüssel identifiziert jeweils genau eine Dimensionszeile.

### Synthetische Daten und erwartetes Ergebnis

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Fakt- und Dimensionstabelle; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Zeigt nur DISTINCT in der Tabellenansicht statt Dimension mit Merkmalen und Beziehung zur Faktentabelle.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## Filterrichtung verstehen · Schritt 3

- Artikel: [Filterrichtung verstehen](../src/content/articles/filterrichtung.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Filterrichtung verstehen
- Dateiname: `pbi-filterrichtung.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Öffne die **Modellansicht** und doppelklicke auf die Beziehungslinie zwischen DimKunde und FaktKonten.
2. Prüfe **Kreuzfilterrichtung: Einfach**. Bei 1:* läuft der Filter von der 1-Seite zur *-Seite.
3. Teste im Bericht einen Datenschnitt aus DimKunde und eine Kontenliste aus FaktKonten.

### Synthetische Daten und erwartetes Ergebnis

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Tabellennamen und Schlüssel; 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Filterrichtung verstehen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## INDEX / VERGLEICH · Schritt 3

- Artikel: [INDEX / VERGLEICH](../src/content/articles/index-vergleich.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · Excel – INDEX / VERGLEICH
- Dateiname: `excel-index-vergleich.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = K002
3. Zelle H2 auswählen und =INDEX(D2:D4;VERGLEICH(F2;B2:B4;0)) eingeben.

### Synthetische Daten und erwartetes Ergebnis

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = K002

**Sichtbar:** Quelltabelle A1:D4; Kriterienzellen F2/G2 soweit genutzt; Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – INDEX / VERGLEICH mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Zusammenhang zwischen Eingabezellen, Formelargumenten und Ergebnis zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Kardinalität prüfen: 1:1, 1:n oder n:m · Schritt 3

- Artikel: [Kardinalität prüfen: 1:1, 1:n oder n:m](../src/content/articles/kardinalitaet.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m
- Dateiname: `pbi-kardinalitaet.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Öffne die betroffenen Abfragen im **Power Query-Editor**.
2. Prüfe jeden Beziehungsschlüssel auf NULL, leere Texte und normalisierte Schreibweise.
3. Erzeuge für die Prüfung einen Verweis auf jede Abfrage und wähle **Start → Gruppieren nach** mit dem Schlüssel und **Anzahl Zeilen**.

### Synthetische Daten und erwartetes Ergebnis

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Tabellennamen und Schlüssel; 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Karte: eine Kennzahl anzeigen · Schritt 3

- Artikel: [Karte: eine Kennzahl anzeigen](../src/content/articles/karte.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Karte: eine Kennzahl anzeigen
- Dateiname: `pbi-karte.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Freie Berichtsfläche → Visualisierungen → Karte. Ziehe eine vorhandene Kennzahl in das Wertefeld. Unter Visual formatieren Titel, Anzeigeeinheit und Dezimalstellen setzen.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Karte Gesamtbestand: 3500.**.

### Synthetische Daten und erwartetes Ergebnis

| Ausgangswerte |
| --- |
| K001: 1000; K002: 2000; K003: 500 |

**Sichtbar:** Karte: eine Kennzahl anzeigen; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Sehr kleine Aufnahme ohne Feldzuweisung; abweichender Beispielwert 9 Tsd.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## Matrix: nach Dimensionen auswerten · Schritt 4

- Artikel: [Matrix: nach Dimensionen auswerten](../src/content/articles/matrix.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Matrix: nach Dimensionen auswerten
- Dateiname: `pbi-matrix.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Prüfe die vorhandenen Quellfelder und Datentypen. Verwende bei Bedarf ein bereits angelegtes Gesamtbestand-Measure; die Erstellung erklärt der verlinkte Measure-Artikel.
2. Wähle eine freie Berichtsfläche und das Matrixvisual.
3. Ziehe Personennummer nach Zeilen, Produktgruppe nach Spalten und Gesamtbestand nach Werte.
4. Prüfe P001: Einlagen 1.250, Anlagen 750, Gesamt 2.000.

### Synthetische Daten und erwartetes Ergebnis

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

**Sichtbar:** Matrix: nach Dimensionen auswerten; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Sehr kleine Aufnahme ohne Produktgruppe als Spaltendimension; damit fehlt das zentrale Matrixprinzip.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## Measure erstellen · Schritt 7

- Artikel: [Measure erstellen](../src/content/articles/measure.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Measures organisieren
- Dateiname: `pbi-measure-tabelle.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Start → Daten eingeben; Kennzahlen mit einer Hilfsspalte und einer Zeile anlegen.
2. Measure Gesamtbestand auswählen.
3. Measuretools → Basistabelle → Kennzahlen wählen.
4. Hilfsspalte im Modell ausblenden.

### Synthetische Daten und erwartetes Ergebnis

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Kennzahlen-Tabelle; Measure-Symbol; Basistabelle-Einstellung

**Ausschnitt:** Power BI – Measures organisieren mit Kennzahlen-Tabelle, Measure-Symbol, Basistabelle-Einstellung. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Optionale Organisation ohne technische Pflicht zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Measure erstellen · Schritt 2

- Artikel: [Measure erstellen](../src/content/articles/measure.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Neues Measure
- Dateiname: `pbi-measure-formelleiste.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Tabelle Fakt mit den Beispieldaten laden.
2. Im Datenbereich Fakt auswählen.
3. Modellierung → Neues Measure; Gesamtbestand = SUM ( Fakt[Bestand] ) eingeben.

### Synthetische Daten und erwartetes Ergebnis

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Formelleiste mit Name und Formel; Tabelle Fakt im Datenbereich

**Ausschnitt:** Power BI – Neues Measure mit Formelleiste mit Name und Formel, Tabelle Fakt im Datenbereich. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Bedienort und vollständigen Ausdruck sichtbar machen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Modellansicht lesen · Schritt 3

- Artikel: [Modellansicht lesen](../src/content/articles/modellansicht.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Modellansicht lesen
- Dateiname: `pbi-modellansicht.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Öffne in Power BI Desktop links die **Modellansicht**.
2. Suche die beteiligten Tabellenkarten und ihre Schlüsselspalten. Klappe die Karten bei Bedarf auf.
3. Lies die Zeichen an der Beziehung: **1** kennzeichnet eindeutige Schlüssel, ***** die Mehrfachseite.

### Synthetische Daten und erwartetes Ergebnis

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Sichtbar:** Tabellennamen und Schlüssel; 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Modellansicht lesen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Was mache ich mit fehlenden Werten? · Schritt 6

- Artikel: [Was mache ich mit fehlenden Werten?](../src/content/articles/nullwerte.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Was mache ich mit fehlenden Werten?
- Dateiname: `pbi-nullwerte.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. In Profiling und Filter prüfen, welche Werte fehlen. **null ≠ 0**, **null ≠ ""** und **null ≠ Leerzeichen**. Der Text "null" ist ebenfalls kein echter null-Wert.
2. **Fachlich korrekt:** Ein aktiver Vertrag hat kein Kündigungsdatum. null behalten, weil kein Datum existiert. Kein fiktives Datum einsetzen.
3. **Fachlich tatsächlich 0:** Ein optionaler Zusatzmengenwert darf nur dann auf 0 gesetzt werden, wenn die Quellendefinition „keine Zusatzmenge“ ausdrücklich so abbildet. Regel und betroffene Anzahl festhalten.
4. **Unbekannter Wert:** Fehlender Bestand oder fehlende Messung bleibt fehlend und wird in einer Prüfmenge untersucht. Nicht durch 0 Vollständigkeit vortäuschen.
5. **Pflichtschlüssel fehlt:** Betroffene Zeilen separat sichern und Quelle klären. Wenn die Auswertung gültige Schlüssel voraussetzt, diese Zeilen nachvollziehbar ausschließen. Leere Texte und Leerzeichen zusätzlich prüfen.
6. Eine bestätigte Regel gezielt auf die betroffene Spalte anwenden. In M ersetzt zum Beispiel Table.ReplaceValue(Quelle, null, 0, Replacer.ReplaceValue, {"Zusatzmenge"}) ausschließlich echte null-Werte dieser Spalte.
7. Vor und nach der Regel Fehlwerte, ausgeschlossene Zeilen und Auswirkungen auf Summen oder Durchschnitt vergleichen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Vertrag | Status | Kündigungsdatum | Zusatzmenge | Bestand |
| --- | --- | --- | --- | --- |
| V01 | aktiv | null | null | 100 |
| V02 | gekündigt | 31.12.2026 | 2 | null |
| null | aktiv | null | 1 | 50 |

### Aktion
Laut Beispieldefinition bedeutet fehlende Zusatzmenge „keine Zusatzmenge“. Dort null → 0. Leeres Kündigungsdatum eines aktiven Vertrags behalten. Unbekannten Bestand von V02 zur Prüfung markieren. Die Zeile ohne Vertragsschlüssel separat ablegen und aus der zuordenbaren Ergebnistabelle ausschließen.

### Nachher · zuordenbare Verträge
| Vertrag | Kündigungsdatum | Zusatzmenge | Bestand |
| --- | --- | --- | --- |
| V01 | null | 0 | 100 |
| V02 | 31.12.2026 | 2 | null |

**Prüfmenge:** eine Zeile ohne Schlüssel mit bekanntem Bestand 50; ein unbekannter Bestand bei V02. Keine der beiden Auffälligkeiten verschwindet stillschweigend.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Entscheide nach der fachlichen Bedeutung: null kann korrekt, tatsächlich null Menge oder eine Datenlücke sein. Fehlende Pflichtschlüssel müssen gesondert geprüft werden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Bedingte Spalte · Schritt 4

- Artikel: [Bedingte Spalte](../src/content/articles/pq-bedingt.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power Query – Bedingte Spalte
- Dateiname: `pbi-pq-bedingt.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Spalte hinzufügen → Bedingte Spalte öffnen.
3. Name Kategorie; Bestand ist größer als 1000; Ausgabe hoch; Sonst niedrig. Vor OK aufnehmen.

### Synthetische Daten und erwartetes Ergebnis

| Bestand |
| --- |
| 500 |
| 1000 |
| 1500 |

**Sichtbar:** Komplette Regel einschließlich Sonst und Grenzwert

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck:** Bedienort und Auswahl für Bedingte Spalte zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Benutzerdefinierte Spalte · Schritt 4

- Artikel: [Benutzerdefinierte Spalte](../src/content/articles/pq-benutzerdefiniert.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power Query – Benutzerdefinierte Spalte
- Dateiname: `pbi-pq-benutzerdefiniert.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Spalte hinzufügen → Benutzerdefinierte Spalte öffnen.
3. Name Wert; Formel [Menge] * [Preis] eingeben. Vor OK aufnehmen.

### Synthetische Daten und erwartetes Ergebnis

| Menge | Preis |
| --- | --- |
| 2 | 10 |
| 3 | 20 |

**Sichtbar:** Name Wert, Formel und Liste verfügbarer Spalten

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck:** Bedienort und Auswahl für Benutzerdefinierte Spalte zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Datum in Power Query transformieren · Schritt 3

- Artikel: [Datum in Power Query transformieren](../src/content/articles/pq-datum.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power Query-Editor – Datum in Power Query transformieren
- Dateiname: `pbi-pq-datum.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Markiere **Zeitstempel** und stelle **Datum/Uhrzeit** mit dem passenden Gebietsschema ein.
2. Soll die Uhrzeit erhalten bleiben, wähle **Spalte hinzufügen → Datum → Nur Datum**. Für eine Umwandlung derselben Spalte nutze das Register Transformieren.
3. Nenne die neue Spalte **Datum** und setze sie auf Datentyp Datum.

### Synthetische Daten und erwartetes Ergebnis

| Zeitstempel |
| --- |
| 31.01.2026 14:30:00 |
| 01.02.2026 09:15:00 |

**Sichtbar:** Aus Zeitstempel eine zusätzliche Datumsspalte ableiten.; Spaltenüberschriften und relevante Optionen

**Ausschnitt:** Power Query-Editor – Datum in Power Query transformieren mit Aus Zeitstempel eine zusätzliche Datumsspalte ableiten., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Referenz oder Duplikat einer Abfrage? · Schritt 2

- Artikel: [Referenz oder Duplikat einer Abfrage?](../src/content/articles/pq-duplizieren.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Referenz oder Duplikat einer Abfrage?
- Dateiname: `pbi-pq-duplizieren.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Eine gemeinsame Basisabfrage so weit bereinigen, dass mehrere Ergebnisse darauf aufbauen können.
2. Rechtsklick auf die Abfrage → **Verweis/Referenz** erzeugt eine Abfrage, deren Quelle das Ergebnis der ursprünglichen Abfrage ist. Änderungen an der Basis wirken auf abhängige Abfragen.
3. **Duplizieren** kopiert die bisherige Schrittkette. Spätere Änderungen an dieser Kette sind unabhängig; ein Duplikat kann aber weiterhin dieselbe Datenquelle oder andere referenzierte Abfragen verwenden.
4. Basis, Ergebnis und Prüf-Abfrage sinnvoll benennen. Über **Ansicht → Abfrageabhängigkeiten** die Verbindungen prüfen.
5. Laden nur für benötigte Endtabellen aktivieren. Eine Referenz garantiert keine einmalige Quellabfrage und ist kein dauerhafter Cache.

### Synthetische Daten und erwartetes Ergebnis

~~~text
Quelle → Basis bereinigt → Referenz Kundenübersicht
                       → Referenz Fehlerprüfung
Quelle → Duplikat mit eigener Schrittkette
~~~

Eine Korrektur der Textbereinigung in Basis erreicht beide Referenzen. Die unabhängig duplizierte Schrittkette muss separat korrigiert werden.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Nutze eine Referenz für gemeinsame Bereinigungslogik und ein Duplikat für eine unabhängig weiterentwickelte Schrittkopie. Beide bleiben Abfragen ihrer Datenquellen.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Fehlerhafte Werte prüfen · Schritt 4

- Artikel: [Fehlerhafte Werte prüfen](../src/content/articles/pq-fehler.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power Query – Fehlerhafte Werte prüfen
- Dateiname: `pbi-pq-fehler.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Betrag mit den Textwerten 100 und unbekannt laden; Datentyp auf Zahl ändern.
3. Error-Zelle von K002 anklicken und die Fehlerdetails unterhalb der Vorschau sichtbar lassen.

### Synthetische Daten und erwartetes Ergebnis

| Konto | Betrag als Text |
| --- | --- |
| K001 | 100 |
| K002 | unbekannt |

**Sichtbar:** Error-Zelle, Ursache der Typumwandlung und Angewendete Schritte

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Laden einer Hilfsabfrage steuern · Schritt 3

- Artikel: [Laden einer Hilfsabfrage steuern](../src/content/articles/pq-laden.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power Query – Laden einer Hilfsabfrage steuern
- Dateiname: `pbi-pq-laden.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Basis_Konten als Hilfsabfrage und FaktKonten als Verweis auf Basis_Konten anlegen.
3. Rechtsklick auf Basis_Konten; Laden aktivieren deaktivieren und Kontextmenü erneut öffnen.

### Synthetische Daten und erwartetes Ergebnis

| Abfrage | Zweck |
| --- | --- |
| Basis_Konten | Import und Bereinigung |
| FaktKonten | Verwendet Basis_Konten; fertige Daten |

**Sichtbar:** Basis_Konten, FaktKonten und fehlendes Häkchen bei Laden aktivieren

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Text bereinigen, ersetzen und teilen · Schritt 5

- Artikel: [Text bereinigen, ersetzen und teilen](../src/content/articles/pq-text.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Text bereinigen, ersetzen und teilen
- Dateiname: `pbi-pq-text.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Originalspalte bei Bedarf in einer Prüf-Abfrage behalten. Betroffene Textspalte auswählen und **Transformieren → Format → Kürzen/Trim** für führende und nachgestellte Leerzeichen verwenden.
2. **Bereinigen/Clean** entfernt nicht druckbare Zeichen. Es ersetzt nicht jede Form von Leerzeichen; geschützte Leerzeichen gesondert prüfen.
3. Für Vergleichsschlüssel eine vereinbarte Groß-/Kleinschreibung anwenden, etwa **GROSSBUCHSTABEN** für Ortswerte. Schreibweisen nur vereinheitlichen, wenn sie fachlich gleichbedeutend sind.
4. **Werte ersetzen** für bestätigte Varianten verwenden. Achte auf ganzen Zellinhalt statt unbeabsichtigtem Teiltext-Ersatz. Bei Platzhalter n/a für fehlende Daten echtes null statt Text "null" erzeugen.
5. Enthält ein Feld mehrere Merkmale, **Spalte teilen → Nach Trennzeichen** verwenden. Festlegen, ob am ersten, letzten oder jedem Vorkommen geteilt wird. Für nur einen Teil **Extrahieren → Text vor/nach Trennzeichen** nutzen.
6. Teile nur bei Bedarf mit **Spalten zusammenführen** und eindeutigem Trennzeichen wieder zusammen. Kontrolliere Mehrfachtrennzeichen, fehlende Teile und erhaltene Nullen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Ort | Standortfeld |
| --- | --- |
| " Mannheim " | MA-01 |
| "MANNHEIM" | MA-02 |
| "mannheim" | MA-03 |

### Aktion
Ort trimmen, bereinigen und großschreiben. Standortfeld am Bindestrich in Ortcode und Standortnummer teilen; beide Teile als Text behalten.

### Nachher
| Ort | Ortcode | Standortnummer |
| --- | --- | --- |
| MANNHEIM | MA | 01 |
| MANNHEIM | MA | 02 |
| MANNHEIM | MA | 03 |

**Bestätigter Platzhalter:** Table.ReplaceValue(Quelle, "n/a", null, Replacer.ReplaceValue, {"Wert"}) ersetzt ausschließlich den gesamten Textwert n/a durch echtes null. Erst danach den Zahlentyp setzen.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Vereinheitliche Schreibweisen vor Gruppierung und Zuordnung. Zerlege zusammengesetzte Felder nur anhand einer klaren Trennregel.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## SORTIEREN: dynamische Liste ordnen · Schritt 5

- Artikel: [SORTIEREN: dynamische Liste ordnen](../src/content/articles/sortieren.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Excel · Excel – SORTIEREN: dynamische Liste ordnen
- Dateiname: `excel-sortieren.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Keine weitere Eingabezelle**. Passe diese Bezüge für deine Liste an.
3. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Der benötigte Überlaufbereich ab H2 muss frei sein und außerhalb einer Excel-Tabelle liegen.
4. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.
5. Prüfe einen zweiten Fall und fehlende Werte. Bei wachsenden Listen verwende Excel-Tabellen mit strukturierten Bezügen oder erweitere alle zusammengehörenden Bereiche.

### Synthetische Daten und erwartetes Ergebnis

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

Keine weitere Eingabezelle

**Sichtbar:** SORTIEREN: dynamische Liste ordnen; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Ältere Quellwerte und Zellbezüge; Quelle, Formel und Ausgabe müssen das neue Beispiel zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## Benötigte Spalten bewusst auswählen · Schritt 3

- Artikel: [Benötigte Spalten bewusst auswählen](../src/content/articles/spalten-entfernen.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Benötigte Spalten bewusst auswählen
- Dateiname: `pbi-spalten-entfernen.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. Auswertungsziel festlegen und benötigte Schlüssel, Merkmale, Messgrößen und Zeitspalten auswählen.
2. **Spalten entfernen** löscht markierte Spalten. Geeignet, wenn wenige eindeutig unnötige Spalten entfallen sollen.
3. **Andere Spalten entfernen** behält ausschließlich markierte Spalten. Geeignet für sehr breite Quellen, wenn nur wenige Felder gebraucht werden.
4. Schemaänderungen bedenken: Bei einer Auswahl bleiben neue Quellspalten außen vor. Fehlt eine erwartete Spalte oder wird sie umbenannt, kann die Aktualisierung fehlschlagen. Eine reine Löschliste kann neue, unerwünschte Spalten mitladen.
5. Spaltennamen und letzte Abfrageschritte prüfen; bei einer Quellenänderung bewusst entscheiden, ob die Auswahl angepasst werden muss.

### Synthetische Daten und erwartetes Ergebnis

### Vorher
| Konto | Stichtag | Bestand | Importnotiz |
| --- | --- | --- | --- |
| A | 31.01.2026 | 100 | Datei 1 |

### Aktion
Konto, Stichtag und Bestand markieren → Andere Spalten entfernen.

### Nachher
| Konto | Stichtag | Bestand |
| --- | --- | --- |
| A | 31.01.2026 | 100 |

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Reduziere eine breite Tabelle auf relevante Felder, ohne Schlüssel, Zeitbezug oder später benötigte Prüfwerte zu verlieren.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Star Schema aufbauen · Schritt 4

- Artikel: [Star Schema aufbauen](../src/content/articles/star-schema.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Sternschema
- Dateiname: `pbi-star-schema.webp`
- Bestehende Aufnahme ersetzen: Nein

### Vorbereitung und Ablauf

1. DimKunde mit P001/A und P002/B laden.
2. DimDatum mit jedem Datum vom 01.01. bis 31.12.2026 laden.
3. FaktBestand: P001/K001/31.01.2026/1000; P001/K002/31.01.2026/2000; P002/K003/31.01.2026/500 laden.
4. Modellansicht: DimKunde[Kunde] → FaktBestand[Kunde] und DimDatum[Datum] → FaktBestand[Datum] als aktive 1:*-Beziehungen mit einfacher Richtung anlegen.

### Synthetische Daten und erwartetes Ergebnis

DimKunde: Kunde/Segment = P001/A, P002/B. DimDatum: lückenloser Kalender 2026. FaktBestand: Kunde/Konto/Datum/Bestand wie oben.

**Sichtbar:** Alle drei Tabellen; Beziehungslinien; Schlüssel und 1/*; Filterpfeile

**Ausschnitt:** Power BI – Sternschema mit Alle drei Tabellen, Beziehungslinien, Schlüssel und 1/*, Filterpfeile. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck:** Dimensionen und zentrale Fakten in einer lesbaren Modellansicht zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## SUMMEWENNS: nach Geschäftsstelle und Produkt auswerten · Schritt 3

- Artikel: [SUMMEWENNS: nach Geschäftsstelle und Produkt auswerten](../src/content/articles/summewenns.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · SUMMEWENNS: nach Geschäftsstelle und Produkt auswerten
- Dateiname: `excel-summewenns.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Quelle mit einer Kopfzeile in A1:C5 prüfen. Eine Zeile steht im Beispiel für einen Datensatz zu einem gemeinsamen Stichtag; Bestand muss numerisch sein.
2. Außerhalb der Liste E2 = Nord und F2 = Einlagen als Kriterien setzen.
3. In G2 die Formel =SUMMEWENNS(C2:C5;A2:A5;E2;B2:B5;F2) eingeben. Alle Kriterienbereiche müssen dieselben Zeilen abdecken.
4. Ergebnis gegen die zwei passenden Quellzeilen kontrollieren. E2 testweise auf Süd ändern und erneut vergleichen.
5. Für wachsende Listen Excel-Tabellen mit strukturierten Bezügen nutzen. Bei einem Zeitverlauf ein Stichtagskriterium ergänzen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · A1:C5
| Geschäftsstelle | Produkt | Bestand |
| --- | --- | --- |
| Nord | Einlagen | 100 |
| Nord | Einlagen | 200 |
| Nord | Kredit | 500 |
| Süd | Einlagen | 400 |

E2 = Nord; F2 = Einlagen.

### Aktion · G2
~~~excel
=SUMMEWENNS(C2:C5;A2:A5;E2;B2:B5;F2)
~~~

### Nachher
G2 = **300**. Die passende Teilmenge besteht aus den ersten beiden Datenzeilen mit Bestand 100 und 200.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Wie hoch ist der Einlagenbestand der Geschäftsstelle Nord? Summiere nur Zeilen, die beide Kriterien erfüllen.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten

## Tabelle: Details prüfen · Schritt 3

- Artikel: [Tabelle: Details prüfen](../src/content/articles/tabelle.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Power BI Desktop · Power BI – Tabelle: Details prüfen
- Dateiname: `pbi-tabelle.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Freie Berichtsfläche → Tabelle. Ziehe Konto und Bestand in die Spalten. Prüfe im Feldmenü von Bestand die gewünschte Zusammenfassung und ergänze bei mehreren Stichtagen das Datum.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Drei Kontenzeilen und Gesamtsumme 3500.**.

### Synthetische Daten und erwartetes Ergebnis

| Ausgangswerte |
| --- |
| K001: 1000; K002: 2000; K003: 500 |

**Sichtbar:** Tabelle: Details prüfen; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Sehr kleine Aufnahme mit Personenaggregation statt der beschriebenen Kontendetails.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## TEILERGEBNIS: gefilterte Zeilen auswerten · Schritt 5

- Artikel: [TEILERGEBNIS: gefilterte Zeilen auswerten](../src/content/articles/teilergebnis.md)
- Priorität: Mittel
- Werkzeug/Oberfläche: Excel · Excel – TEILERGEBNIS: gefilterte Zeilen auswerten
- Dateiname: `excel-teilergebnis.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Filter in Spalte C nur A**. Passe diese Bezüge für deine Liste an.
3. Aktiviere **Daten → Filter**. Öffne den Filterpfeil von Segment und wähle nur **A**.
4. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Achte auf gleich große und gleich ausgerichtete Bereiche.
5. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.

### Synthetische Daten und erwartetes Ergebnis

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

Filter in Spalte C nur A

**Sichtbar:** TEILERGEBNIS: gefilterte Zeilen auswerten; Gewähltes Feld oder vollständige Formel; Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck:** Zeigt nur die ungefilterte Summe; der didaktisch wichtige gefilterte Zustand fehlt.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten

## ZÄHLENWENNS: nach Geschäftsstelle und Produkt auswerten · Schritt 3

- Artikel: [ZÄHLENWENNS: nach Geschäftsstelle und Produkt auswerten](../src/content/articles/zaehlenwenns.md)
- Priorität: Hoch
- Werkzeug/Oberfläche: Excel · ZÄHLENWENNS: nach Geschäftsstelle und Produkt auswerten
- Dateiname: `excel-zaehlenwenns.webp`
- Bestehende Aufnahme ersetzen: Ja

### Vorbereitung und Ablauf

1. Quelle mit einer Kopfzeile in A1:C5 prüfen. Eine Zeile steht im Beispiel für einen Datensatz zu einem gemeinsamen Stichtag; Bestand muss numerisch sein.
2. Außerhalb der Liste E2 = Nord und F2 = Einlagen als Kriterien setzen.
3. In G2 die Formel =ZÄHLENWENNS(A2:A5;E2;B2:B5;F2) eingeben. Alle Kriterienbereiche müssen dieselben Zeilen abdecken.
4. Ergebnis gegen die zwei passenden Quellzeilen kontrollieren. E2 testweise auf Süd ändern und erneut vergleichen.
5. Für wachsende Listen Excel-Tabellen mit strukturierten Bezügen nutzen. Bei einem Zeitverlauf ein Stichtagskriterium ergänzen.

### Synthetische Daten und erwartetes Ergebnis

### Vorher · A1:C5
| Geschäftsstelle | Produkt | Bestand |
| --- | --- | --- |
| Nord | Einlagen | 100 |
| Nord | Einlagen | 200 |
| Nord | Kredit | 500 |
| Süd | Einlagen | 400 |

E2 = Nord; F2 = Einlagen.

### Aktion · G2
~~~excel
=ZÄHLENWENNS(A2:A5;E2;B2:B5;F2)
~~~

### Nachher
G2 = **2**. Die passende Teilmenge besteht aus den ersten beiden Datenzeilen mit Bestand 100 und 200.

**Sichtbar:** Überschriften und Werte des aktuellen Artikelbeispiels; Einstellung und Ergebnis des zugeordneten Schritts

**Ausschnitt:** Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.

**Zweck:** Wie viele Datenzeilen gehören zu Einlagen in Nord? Zähle passende Zeilen und unterscheide diese Zahl von eindeutigen Kunden.

**Nicht zeigen:** Lokale Dateipfade; Benutzerprofile und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten
