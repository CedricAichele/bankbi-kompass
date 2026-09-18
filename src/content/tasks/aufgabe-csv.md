---
{
  "id": "aufgabe-csv",
  "slug": "aufgabe-csv",
  "titel": "CSV korrekt öffnen und kontrollieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Importiere CSV mit bewusst gewählten Typen statt über unkontrollierte automatische Erkennung.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": [
    "CSV korrekt öffnen und kontrollieren"
  ],
  "synonyme": [
    "csv"
  ],
  "verwandteThemen": [
    "csv-import",
    "ida-nullstellen",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Kennungen, Umlaute oder Beträge ändern sich beim Öffnen.

## Schritte

1. Trennzeichen und Zeichencodierung in der Vorschau prüfen.
2. Kennungen als Text und Zahlen mit passendem Gebietsschema importieren.
3. Zeilenzahl und Kontrollsumme sowie führende Nullen prüfen.
4. Öffne die [konkrete CSV korrekt importieren-Anleitung](#/wissen/csv-import) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Vergleiche eine Kennung mit führenden Nullen und einen Dezimalbetrag mit der Originaldatei.

## Beispiel

00123 bleibt fünfstellig; 1.250,50 bleibt ein Betrag von 1250,50.

## Typischer Fehler

Verlorene führende Nullen nachträglich ohne belegte Längenregel rekonstruieren.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Power BI        | [CSV korrekt importieren](#/wissen/csv-import) · [Datentyp ändern / Daten bereinigen](#/wissen/datenbereinigung) |
| Excel           | [CSV korrekt importieren](#/wissen/csv-import)                                                                   |
| IDA / Reporting | [CSV für die Weiterverarbeitung](#/wissen/ida-csv); generisches Konzept                                          |

## Ergebnis

00123 bleibt Text; 1.250,50 wird als Zahl 1250,50 geladen.

## Warum funktioniert das?

Trennzeichen, Kodierung und Gebietsschema bestimmen die Interpretation.

## Plausibilitätscheck

Vergleiche eine Kennung mit führenden Nullen und einen Dezimalbetrag mit der Originaldatei.
