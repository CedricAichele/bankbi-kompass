---
{
  "id": "pq-workflow",
  "slug": "pq-workflow",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "ort": "Power Query-Editor",
  "tags": [],
  "synonyme": [
    "daten bereinigen",
    "was nach import",
    "neue daten power bi",
    "Power Query Workflow",
    "Datenaufbereitung"
  ],
  "verwandteThemen": [
    "pq-profiling",
    "datenbereinigung",
    "nullwerte",
    "dubletten",
    "gruppieren",
    "zusammenfuehren",
    "anhaengen"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/best-practices",
    "https://learn.microsoft.com/en-us/power-query/data-types",
    "https://learn.microsoft.com/en-us/power-query/power-query-ui"
  ],
  "screenshots": [
    {
      "alt": "Power-Query-Workflow: Datenprofil und Abfrageschritte mit vollständig erfundenen Daten",
      "caption": "Power-Query-Workflow: Datenprofil und Abfrageschritte",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power-Query-Workflow: Datenprofil und Abfrageschritte",
        "klickfolge": [
          "**Quelle öffnen:** Power BI → Start → Daten abrufen → Daten transformieren. In Excel → Daten → Daten abrufen bzw. Aus Tabelle/Bereich. Quelle, Tabelle und Zeitraum bewusst wählen.",
          "**Vorschau ansehen:** Sind die Überschriften korrekt und wurden Titel, Fußzeilen oder Summenzeilen als Daten eingelesen? Kopfzeilen erst nach Entfernen von Vorspannzeilen verwenden. Spalten sprechend und eindeutig benennen.",
          "**Struktur verstehen:** Formuliere „Eine Zeile beschreibt …“. Im Beispiel ist es ein Konto zu einem Stichtag. [Granularität](#/wissen/granularitaet) entscheidet, ob mehrere Zeilen je Kunde richtig sind.",
          "**Profiling aktivieren:** Unter Ansicht Spaltenqualität, Spaltenverteilung und Spaltenprofil einschalten. Für eine vollständige Prüfung unten von den ersten 1000 Zeilen auf den gesamten Datensatz wechseln. [Profiling lesen](#/wissen/pq-profiling).",
          "**Datentypen prüfen:** Kennungen als Text erhalten, Betrag passend numerisch, Datum als Datum und Zeitstempel als Datum/Uhrzeit. Gebietsschema für Textzahlen und Datumsangaben bewusst wählen. [Datentypen](#/wissen/datenbereinigung).",
          "**Schlüssel prüfen:** Sind Konto und Stichtag gemeinsam eindeutig und vollständig? Kundennummer allein ist in einer Kontentabelle normalerweise nicht eindeutig. Fehlende Schlüssel separat untersuchen.",
          "**Fehlende Werte entscheiden:** Ein leeres Kündigungsdatum kann korrekt sein; ein unbekannter Bestand bleibt unbekannt. null nur nach fachlicher Regel ersetzen. [Entscheidung bei fehlenden Werten](#/wissen/nullwerte).",
          "**Spalten reduzieren:** Benötigte Schlüssel, Zeitbezug und Messgrößen behalten. Bei breiten Quellen Andere Spalten entfernen verwenden; erwartete Schemaänderungen berücksichtigen. [Spaltenauswahl](#/wissen/spalten-entfernen).",
          "**Text standardisieren:** Führende/nachgestellte Leerzeichen entfernen und relevante Schreibweisen vereinheitlichen. Eine vereinbarte Schreibweise für Segmente hilft bei Vergleichen. [Textbereinigung](#/wissen/pq-text).",
          "**Dubletten untersuchen:** Nach dem fachlichen Schlüssel gruppieren und Häufigkeiten prüfen. Erst bei identischen oder fachlich eindeutig auflösbaren Wiederholungen entfernen. [Dublettenprüfung](#/wissen/dubletten).",
          "**Spalten bei Bedarf teilen oder kombinieren:** Nur wenn ein Feld mehrere Merkmale enthält, etwa Ort und Region mit vereinbartem Trennzeichen. IDs nicht ohne Regel zerlegen. [Text vor/nach Trennzeichen](#/wissen/pq-text).",
          "**Werte gezielt ersetzen:** Fachlich bestätigte Platzhalter wie n/a in einer Datums-/Zahlenspalte in null umwandeln, bevor der Datentyp gesetzt wird. Originalwert und Umfang der Änderung nachvollziehbar halten.",
          "**Datenstruktur prüfen:** Wiederholen Monatsnamen dieselbe Messgröße in vielen Spalten? Dann eine lange Struktur anstreben. Detailspalten nicht vorschnell wegaggregieren.",
          "**Struktur nur bei Bedarf ändern:** [Gruppieren](#/wissen/gruppieren) für eine Zeile je Kunde; [Entpivotieren](#/wissen/entpivotieren) für Monat/Wert; [Pivotieren](#/wissen/pivotieren) für eine bewusst breite Übergabetabelle.",
          "**Tabellen bei Bedarf kombinieren:** [Merge](#/wissen/zusammenfuehren) ergänzt passende Attribute. [Append](#/wissen/anhaengen) ergänzt Zeilen gleicher Struktur. Bei Merge Eindeutigkeit und Trefferzahl, bei Append Zeitraum und Spaltennamen prüfen.",
          "**Angewendete Schritte kontrollieren:** Reihenfolge, Benennung und erste Fehlerstelle prüfen. Spaltenänderungen in einem frühen Schritt können spätere Schritte brechen. [Schritte verwalten](#/wissen/power-query).",
          "**Ergebnis plausibilisieren:** Zeilenzahl, eindeutige Schlüssel, fehlende Werte, Fehler und Kontrollsumme mit dem Ausgang vergleichen. Bewusst ausgeschlossene Zeilen gesondert nachweisen.",
          "**Laden:** Power BI → Schließen & übernehmen; Excel → Schließen & laden. Hilfsabfragen nur laden, wenn deren Ergebnis wirklich gebraucht wird. Anschließend Beziehungen bzw. Pivot-Auswertung prüfen."
        ],
        "daten": "### Vorher · Konten zu einem Stichtag\n\n| Konto | Kunde | Ort | Bestand (Text) | Kündigungsdatum |\n| --- | --- | --- | --- | --- |\n| 001 | 1001 | \" Mannheim \" | \"100,00\" | null |\n| 002 | 1001 | \"MANNHEIM\" | \"200,00\" | null |\n| 003 | 1002 | \"mannheim\" | \"500,00\" | 31.12.2026 |\n\n### Aktion\n\nKonto und Kunde als Text, Bestand mit deutschem Gebietsschema als Festkommazahl, Kündigungsdatum als Datum. Ort trimmen und großschreiben. Kunde 1001 erscheint zweimal, weil er zwei Konten hat: **keine Dublette entfernen**. null im Kündigungsdatum bleibt bei aktiven Verträgen erhalten. Keine Gruppierung, da das Modell Kontendetails benötigt.\n\n### Nachher\n\n| Konto (Text) | Kunde (Text) | Ort | Bestand (Zahl) | Kündigungsdatum |\n| --- | --- | --- | --- | --- |\n| 001 | 1001 | MANNHEIM | 100,00 | null |\n| 002 | 1001 | MANNHEIM | 200,00 | null |\n| 003 | 1002 | MANNHEIM | 500,00 | 31.12.2026 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pq-workflow-4.webp",
        "zweck": "Neue Daten geladen? Prüfe zuerst Struktur und Qualität, entscheide dann über Bereinigung und Kombination und kontrolliere das Ergebnis vor dem Laden.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "alt": "Angewendete Schritte und geprüfter Endstand mit vollständig erfundenen Daten",
      "caption": "Angewendete Schritte und geprüfter Endstand",
      "schritt": 16,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Angewendete Schritte und geprüfter Endstand",
        "klickfolge": [
          "**Quelle öffnen:** Power BI → Start → Daten abrufen → Daten transformieren. In Excel → Daten → Daten abrufen bzw. Aus Tabelle/Bereich. Quelle, Tabelle und Zeitraum bewusst wählen.",
          "**Vorschau ansehen:** Sind die Überschriften korrekt und wurden Titel, Fußzeilen oder Summenzeilen als Daten eingelesen? Kopfzeilen erst nach Entfernen von Vorspannzeilen verwenden. Spalten sprechend und eindeutig benennen.",
          "**Struktur verstehen:** Formuliere „Eine Zeile beschreibt …“. Im Beispiel ist es ein Konto zu einem Stichtag. [Granularität](#/wissen/granularitaet) entscheidet, ob mehrere Zeilen je Kunde richtig sind.",
          "**Profiling aktivieren:** Unter Ansicht Spaltenqualität, Spaltenverteilung und Spaltenprofil einschalten. Für eine vollständige Prüfung unten von den ersten 1000 Zeilen auf den gesamten Datensatz wechseln. [Profiling lesen](#/wissen/pq-profiling).",
          "**Datentypen prüfen:** Kennungen als Text erhalten, Betrag passend numerisch, Datum als Datum und Zeitstempel als Datum/Uhrzeit. Gebietsschema für Textzahlen und Datumsangaben bewusst wählen. [Datentypen](#/wissen/datenbereinigung).",
          "**Schlüssel prüfen:** Sind Konto und Stichtag gemeinsam eindeutig und vollständig? Kundennummer allein ist in einer Kontentabelle normalerweise nicht eindeutig. Fehlende Schlüssel separat untersuchen.",
          "**Fehlende Werte entscheiden:** Ein leeres Kündigungsdatum kann korrekt sein; ein unbekannter Bestand bleibt unbekannt. null nur nach fachlicher Regel ersetzen. [Entscheidung bei fehlenden Werten](#/wissen/nullwerte).",
          "**Spalten reduzieren:** Benötigte Schlüssel, Zeitbezug und Messgrößen behalten. Bei breiten Quellen Andere Spalten entfernen verwenden; erwartete Schemaänderungen berücksichtigen. [Spaltenauswahl](#/wissen/spalten-entfernen).",
          "**Text standardisieren:** Führende/nachgestellte Leerzeichen entfernen und relevante Schreibweisen vereinheitlichen. Eine vereinbarte Schreibweise für Segmente hilft bei Vergleichen. [Textbereinigung](#/wissen/pq-text).",
          "**Dubletten untersuchen:** Nach dem fachlichen Schlüssel gruppieren und Häufigkeiten prüfen. Erst bei identischen oder fachlich eindeutig auflösbaren Wiederholungen entfernen. [Dublettenprüfung](#/wissen/dubletten).",
          "**Spalten bei Bedarf teilen oder kombinieren:** Nur wenn ein Feld mehrere Merkmale enthält, etwa Ort und Region mit vereinbartem Trennzeichen. IDs nicht ohne Regel zerlegen. [Text vor/nach Trennzeichen](#/wissen/pq-text).",
          "**Werte gezielt ersetzen:** Fachlich bestätigte Platzhalter wie n/a in einer Datums-/Zahlenspalte in null umwandeln, bevor der Datentyp gesetzt wird. Originalwert und Umfang der Änderung nachvollziehbar halten.",
          "**Datenstruktur prüfen:** Wiederholen Monatsnamen dieselbe Messgröße in vielen Spalten? Dann eine lange Struktur anstreben. Detailspalten nicht vorschnell wegaggregieren.",
          "**Struktur nur bei Bedarf ändern:** [Gruppieren](#/wissen/gruppieren) für eine Zeile je Kunde; [Entpivotieren](#/wissen/entpivotieren) für Monat/Wert; [Pivotieren](#/wissen/pivotieren) für eine bewusst breite Übergabetabelle.",
          "**Tabellen bei Bedarf kombinieren:** [Merge](#/wissen/zusammenfuehren) ergänzt passende Attribute. [Append](#/wissen/anhaengen) ergänzt Zeilen gleicher Struktur. Bei Merge Eindeutigkeit und Trefferzahl, bei Append Zeitraum und Spaltennamen prüfen.",
          "**Angewendete Schritte kontrollieren:** Reihenfolge, Benennung und erste Fehlerstelle prüfen. Spaltenänderungen in einem frühen Schritt können spätere Schritte brechen. [Schritte verwalten](#/wissen/power-query).",
          "**Ergebnis plausibilisieren:** Zeilenzahl, eindeutige Schlüssel, fehlende Werte, Fehler und Kontrollsumme mit dem Ausgang vergleichen. Bewusst ausgeschlossene Zeilen gesondert nachweisen.",
          "**Laden:** Power BI → Schließen & übernehmen; Excel → Schließen & laden. Hilfsabfragen nur laden, wenn deren Ergebnis wirklich gebraucht wird. Anschließend Beziehungen bzw. Pivot-Auswertung prüfen."
        ],
        "daten": "### Vorher · Konten zu einem Stichtag\n\n| Konto | Kunde | Ort | Bestand (Text) | Kündigungsdatum |\n| --- | --- | --- | --- | --- |\n| 001 | 1001 | \" Mannheim \" | \"100,00\" | null |\n| 002 | 1001 | \"MANNHEIM\" | \"200,00\" | null |\n| 003 | 1002 | \"mannheim\" | \"500,00\" | 31.12.2026 |\n\n### Aktion\n\nKonto und Kunde als Text, Bestand mit deutschem Gebietsschema als Festkommazahl, Kündigungsdatum als Datum. Ort trimmen und großschreiben. Kunde 1001 erscheint zweimal, weil er zwei Konten hat: **keine Dublette entfernen**. null im Kündigungsdatum bleibt bei aktiven Verträgen erhalten. Keine Gruppierung, da das Modell Kontendetails benötigt.\n\n### Nachher\n\n| Konto (Text) | Kunde (Text) | Ort | Bestand (Zahl) | Kündigungsdatum |\n| --- | --- | --- | --- | --- |\n| 001 | 1001 | MANNHEIM | 100,00 | null |\n| 002 | 1001 | MANNHEIM | 200,00 | null |\n| 003 | 1002 | MANNHEIM | 500,00 | 31.12.2026 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pq-workflow-16.webp",
        "zweck": "Neue Daten geladen? Prüfe zuerst Struktur und Qualität, entscheide dann über Bereinigung und Kombination und kontrolliere das Ergebnis vor dem Laden.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "titel": "Daten in Power Query aufbereiten",
  "kurzbeschreibung": "Neue Daten geladen? Prüfe zuerst Struktur und Qualität, entscheide dann über Bereinigung und Kombination und kontrolliere das Ergebnis vor dem Laden.",
  "praxis": true,
  "zuletztGeprueft": "2026-09-23"
}
---

## Wann brauche ich das?

Neue Daten geladen? Prüfe zuerst Struktur und Qualität, entscheide dann über Bereinigung und Kombination und kontrolliere das Ergebnis vor dem Laden.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

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

## Beispiel

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

## Ergebnis

Eine aufbereitete Kontentabelle behält ihre drei Detailzeilen, korrekten Schlüssel und den nachvollziehbaren Zeitbezug. Fehlende Werte haben eine geklärte Bedeutung.

## Warum funktioniert das?

Die Reihenfolge schützt Information: erst Bedeutung und Typen verstehen, dann Regeln anwenden. Profiling zeigt technische Auffälligkeiten; nur die fachliche Interpretation entscheidet, ob eine Änderung richtig ist. Nicht jeder Datensatz benötigt jede Transformation.

## Typischer Fehler

Alle Schritte mechanisch ausführen. Ein sauberer Datensatz braucht weder Dublettenlöschung noch Gruppierung; jede Änderung benötigt ein Ziel.

## Plausibilitätscheck

Drei Konten, zwei Kunden, Bestand 800, keine fehlenden Kontoschlüssel. Zwei leere Kündigungsdaten sind fachlich erwartet. Nach der Bereinigung bleiben diese Größen unverändert.


## Überschriften und Spaltennamen

Wenn die Vorschau zunächst Column1/Column2 und in der ersten Zeile Konto/Bestand zeigt: Vorspannzeilen entfernen, dann **Start → Erste Zeile als Überschriften verwenden**. Aus zwei Vorschauzeilen (Kopfzeile plus Konto A/100) wird eine Datenzeile mit den richtigen Spaltennamen. Bereits erkannte Überschriften nicht erneut hochstufen. Per Doppelklick auf einen Spaltenkopf sprechend umbenennen und nachfolgende Schritte kontrollieren.
