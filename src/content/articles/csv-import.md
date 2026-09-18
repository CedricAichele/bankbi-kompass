---
{
  "id": "csv-import",
  "slug": "csv-import",
  "titel": "CSV korrekt importieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lade CSV über den Importdialog und prüfe Trennzeichen, Zeichencodierung und Datentypen.",
  "ort": "Power BI: Daten abrufen → Text/CSV · Excel: Daten → Aus Text/CSV",
  "tags": [
    "CSV korrekt importieren"
  ],
  "synonyme": [
    "csv",
    "csv öffnen",
    "csv korrekt laden"
  ],
  "verwandteThemen": [
    "datenbereinigung",
    "excel-zahl-text",
    "ida-csv"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-csv-import.webp",
      "alt": "CSV-Vorschau: UTF-8 und Semikolon trennen die fünf Spalten korrekt.",
      "caption": "CSV-Vorschau: UTF-8 und Semikolon trennen die fünf Spalten korrekt.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine CSV ohne Verlust von Kennungen und Datumswerten importieren.

## Voraussetzungen

Power Query in Power BI Desktop oder Excel; nur synthetische Dateien verwenden.

## Schritte

1. Wähle Daten abrufen → Text/CSV und öffne ausschließlich die synthetische Beispieldatei.
2. Prüfe im Dialog das Trennzeichen Semikolon und die passende Zeichenkodierung; Umlaute müssen lesbar sein.
3. Wähle Daten transformieren statt direkt Laden.
4. Prüfe, ob die erste Zeile als Überschriften erkannt wurde.
5. Setze Kennung auf Text, bevor eine numerische Umwandlung führende Nullen entfernt.
6. Setze Betrag per Typ ändern → Mit Gebietsschema auf Dezimalzahl / Deutsch (Deutschland). Stelle Datum auf Datum.
7. Prüfe Spaltenqualität und lade erst nach Abgleich der Kontrollwerte.

## Beispiel

```text
Kennung;Betrag;Datum
00123;1.250,50;31.03.2026
00456;75,00;31.03.2026
```

## Ergebnis

Zwei Kennungen mit fünf Zeichen, Summe 1.325,50, beide Datumswerte 31.03.2026.

## Warum funktioniert das?

CSV speichert Zeichenfolgen. Der Import muss die Bedeutung ihrer Trennzeichen und Typen ausdrücklich festlegen.

## Typischer Fehler

**Symptom/Ursache:** CSV per Doppelklick zu öffnen kann Kennungen automatisch als Zahlen interpretieren. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Prüfe 00123 und 1.250,50 nach dem Import, nicht nur die Spaltenüberschrift.
