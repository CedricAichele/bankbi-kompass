---
{
  "id": "aufgabe-csv",
  "slug": "aufgabe-csv",
  "titel": "CSV korrekt öffnen und kontrollieren",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Importiere CSV mit bewusst gewählten Typen statt über unkontrollierte automatische Erkennung.",
  "ort": "Werkzeug passend zur Aufgabe wählen",
  "tags": ["CSV korrekt öffnen und kontrollieren"],
  "synonyme": ["csv"],
  "verwandteThemen": ["csv-import", "ida-nullstellen", "excel-zahl-text"],
  "kontexte": ["Reporting", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Kennungen, Umlaute oder Beträge ändern sich beim Öffnen.

## Schritte

1. Trennzeichen und Zeichencodierung in der Vorschau prüfen.
2. Kennungen als Text und Zahlen mit passendem Gebietsschema importieren.
3. Zeilenzahl und Kontrollsumme sowie führende Nullen prüfen.

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
