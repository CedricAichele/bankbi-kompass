---
{
  "id": "pivottable",
  "slug": "pivottable",
  "titel": "PivotTable erstellen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "PivotTables & Auswertung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine PivotTable verdichtet eine flache Ausgangstabelle nach frei gewählten Merkmalen.",
  "ort": "Excel → Einfügen → PivotTable",
  "tags": [
    "PivotTable erstellen",
    "Reporting"
  ],
  "synonyme": [
    "eine Zeile je Person"
  ],
  "verwandteThemen": [
    "pivotchart",
    "matrix",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",
    "https://support.microsoft.com/en-us/excel/refresh-pivottable-data"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-pivot-erstellen.webp",
      "alt": "PivotTable aus der synthetischen Tabelle DemoKonten auf einem neuen Arbeitsblatt erstellen.",
      "caption": "PivotTable aus der synthetischen Tabelle DemoKonten auf einem neuen Arbeitsblatt erstellen.",
      "schritt": 3,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    },
    {
      "alt": "PivotTable: Felder, Aggregation und Ergebnis mit vollständig erfundenen Daten",
      "caption": "PivotTable: Felder, Aggregation und Ergebnis",
      "schritt": 5,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "PivotTable: Felder, Aggregation und Ergebnis",
        "klickfolge": [
          "Quelldaten prüfen: eine Überschriftenzeile, keine verbundenen Zellen oder Zwischensummen, konsistente Datentypen. Eine Zeile beschreibt ein Konto am betrachteten Stichtag.",
          "Innerhalb der Liste **Einfügen → Tabelle** wählen, Überschriften bestätigen und die Tabelle benennen. Der Tabellenname macht spätere neue Zeilen Teil der Quelle.",
          "In dieser Tabelle **Einfügen → PivotTable** wählen. Quelle prüfen und Neues Arbeitsblatt auswählen.",
          "**Personennummer → Zeilen**, **Bestand_EUR → Werte** ziehen. **Produktgruppe → Spalten** erlaubt einen Vergleich; alternativ nach **Filter** ziehen, um den Umfang einzuschränken.",
          "**Wertfeldeinstellungen → Summe** prüfen. Steht dort Anzahl, den Zahlentyp in der Quelle kontrollieren und korrigieren. Ein Zahlenformat allein macht Text nicht numerisch.",
          "Mit Produktgruppenfilter eine Teilmenge auswählen und deren passende Quellzeilen vergleichen. Vor der Gesamtkontrolle alle Filter zurücksetzen.",
          "Bei Quellenänderung in der PivotTable **Rechtsklick → Aktualisieren** wählen. Neue Zeilen außerhalb eines festen Quellbereichs werden nicht automatisch erfasst; benannte Tabelle verwenden oder Datenquelle ändern.",
          "Gesamtergebnis und einzelne Personen gegen die Quelle prüfen. In einer Arbeitskopie würde die Änderung K001 von 1250 auf 1300 nach Aktualisierung P001 von 2000 auf 2050 und das Gesamtergebnis von 9000 auf 9050 ändern."
        ],
        "daten": "### Vorher · Beispieldaten\n\n| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |\n| --- | --- | --- | --- |\n| K001 | P001 | Einlagen | 1250 |\n| K002 | P001 | Anlagen | 750 |\n| K003 | P002 | Einlagen | 2000 |\n| K004 | P003 | Kredite | 3200 |\n| K005 | P003 | Einlagen | 800 |\n| K006 | P004 | Kredite | 1000 |\n\n### Aktion\n\nWähle innerhalb der Tabelle Einfügen → PivotTable. Prüfe den Tabellenbereich und wähle Neues Arbeitsblatt.\nZiehe Personennummer aus der Feldliste nach Zeilen.\n\n### Nachher · Beispielergebnis\n\nP001 = 2.000; P002 = 2.000; P003 = 4.000; P004 = 1.000. Gesamtergebnis 9.000.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pivottable-5.webp",
        "zweck": "Eine PivotTable verdichtet eine flache Ausgangstabelle nach frei gewählten Merkmalen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Kontenliste soll je Person summiert werden, ohne Formeln für jede Person zu schreiben.

## Voraussetzungen

Excel; eine vorhandene Kontenliste mit Personennummer, Kontonummer, Produktgruppe und numerischem Bestand_EUR. Alle Beträge gehören zu einem Stichtag.

## Schritte

1. Quelldaten prüfen: eine Überschriftenzeile, keine verbundenen Zellen oder Zwischensummen, konsistente Datentypen. Eine Zeile beschreibt ein Konto am betrachteten Stichtag.
2. Innerhalb der Liste **Einfügen → Tabelle** wählen, Überschriften bestätigen und die Tabelle benennen. Der Tabellenname macht spätere neue Zeilen Teil der Quelle.
3. In dieser Tabelle **Einfügen → PivotTable** wählen. Quelle prüfen und Neues Arbeitsblatt auswählen.
4. **Personennummer → Zeilen**, **Bestand_EUR → Werte** ziehen. **Produktgruppe → Spalten** erlaubt einen Vergleich; alternativ nach **Filter** ziehen, um den Umfang einzuschränken.
5. **Wertfeldeinstellungen → Summe** prüfen. Steht dort Anzahl, den Zahlentyp in der Quelle kontrollieren und korrigieren. Ein Zahlenformat allein macht Text nicht numerisch.
6. Mit Produktgruppenfilter eine Teilmenge auswählen und deren passende Quellzeilen vergleichen. Vor der Gesamtkontrolle alle Filter zurücksetzen.
7. Bei Quellenänderung in der PivotTable **Rechtsklick → Aktualisieren** wählen. Neue Zeilen außerhalb eines festen Quellbereichs werden nicht automatisch erfasst; benannte Tabelle verwenden oder Datenquelle ändern.
8. Gesamtergebnis und einzelne Personen gegen die Quelle prüfen. In einer Arbeitskopie würde die Änderung K001 von 1250 auf 1300 nach Aktualisierung P001 von 2000 auf 2050 und das Gesamtergebnis von 9000 auf 9050 ändern.

## Beispiel

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

## Ergebnis

Eine PivotTable verdichtet eine flache Ausgangstabelle nach frei gewählten Merkmalen.

## Warum funktioniert das?

Zeilen und Spalten definieren Gruppen, Werte aggregiert deren Datensätze. Eine Pivot-Zelle kann mehrere Konten enthalten und entspricht nicht zwingend einer Detailzeile. Die Ausgabe verwendet einen aktualisierbaren Zwischenspeicher; nach einer Quellenänderung ist eine Aktualisierung erforderlich.

## Typischer Fehler

**Symptom:** 2 statt 2.000 für P001. **Ursache:** Anzahl statt Summe. **Lösung:** Zahlen als Zahlen importieren, Pivot aktualisieren und Aggregationsart kontrollieren.

## Plausibilitätscheck

Summe aller Personen = 9.000. Eine eindeutige Personenanzahl benötigt das Datenmodell mit entsprechender Aggregation; die normale Anzahl zählt Kontenzeilen.
