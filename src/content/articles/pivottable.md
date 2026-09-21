---
{
  "id": "pivottable",
  "slug": "pivottable",
  "titel": "PivotTable erstellen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten auswerten",
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
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-excel-stunning-report",
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-matrix-visual",
    "https://support.microsoft.com/en-us/excel/functions/numbervalue-function"
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
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Kontenliste soll je Person summiert werden, ohne Formeln für jede Person zu schreiben.

## Voraussetzungen

Excel; eine vorhandene Kontenliste mit Kunde, Konto, Produktgruppe und numerischem Bestand. Alle Beträge gehören zu einem Stichtag.

## Schritte

1. Prüfe die vorhandene Quellliste einschließlich Überschriften. Eine Zeile muss genau einem Konto am betrachteten Stichtag entsprechen. Das Beispiel zeigt dafür einen möglichen Aufbau.
2. Klicke in den Datenbereich und wähle Einfügen → Tabelle. Aktiviere Tabelle hat Überschriften und bestätige.
3. Wähle innerhalb der Tabelle Einfügen → PivotTable. Prüfe den Tabellenbereich und wähle Neues Arbeitsblatt.
4. Ziehe Personennummer aus der Feldliste nach Zeilen.
5. Ziehe Bestand_EUR nach Werte. Öffne das Menü des Wertefelds → Wertfeldeinstellungen und wähle Summe. Bei Anzahl zuerst den numerischen Datentyp in der Quelle korrigieren.
6. Ziehe Produktgruppe nach Spalten, wenn du zusätzlich nach Produkt vergleichen willst; alternativ nach Filter für eine gezielte Auswahl.
7. Kontrolliere die Personenwerte und das Gesamtergebnis. Stelle über Zahlenformat das gewünschte Euro- oder Zahlenformat ein.
8. Ändere K001 testweise von 1250 auf 1300 und wähle Rechtsklick → Aktualisieren in der PivotTable. Prüfe P001 = 2050; setze den Wert zurück und aktualisiere erneut.

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

Zeilen gruppiert nach Person; Werte aggregiert die zugehörigen Kontobeträge. Die Pivot-Ausgabe ist ein aktualisierbarer Zwischenspeicher und muss nach Quellenänderungen aktualisiert werden.

## Typischer Fehler

**Symptom:** 2 statt 2.000 für P001. **Ursache:** Anzahl statt Summe. **Lösung:** Zahlen als Zahlen importieren, Pivot aktualisieren und Aggregationsart kontrollieren.

## Plausibilitätscheck

Summe aller Personen = 9.000. Eine eindeutige Personenanzahl benötigt das Datenmodell mit entsprechender Aggregation; die normale Anzahl zählt Kontenzeilen.
