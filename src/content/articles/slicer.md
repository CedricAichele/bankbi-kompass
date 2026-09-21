---
{
  "id": "slicer",
  "slug": "slicer",
  "titel": "Slicer: Auswahl anbieten",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Slicer stellt eine sichtbare Filterauswahl für verbundene Visuals bereit.",
  "ort": "Power BI → Berichtsansicht → Datenschnitt / Slicer",
  "tags": [
    "Slicer: Auswahl anbieten",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "filterrichtung",
    "visualinteraktionen",
    "measure"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine sichtbare Auswahl im Bericht anbieten.

## Voraussetzungen

Ein vorhandener Datenbestand mit den genannten Feldern. Die Tabelle im Beispiel dient ausschließlich zur Veranschaulichung.

## Schritte

1. Prüfe die vorhandenen Quellfelder und Datentypen. Verwende bei Bedarf ein bereits angelegtes Gesamtbestand-Measure; die Erstellung erklärt der verlinkte Measure-Artikel.
2. Füge eine Karte mit Gesamtbestand hinzu; ohne Auswahl soll 9.000 erscheinen.
3. Klicke auf eine freie Berichtsfläche und wähle das Visual Datenschnitt.
4. Ziehe Konten[Produktgruppe] in das Feld des Datenschnitts.
5. Wähle Einlagen. Kontrolliere 4.050 in der Karte.
6. Passe im Formatbereich bei Bedarf Einzel- oder Mehrfachauswahl an. Bei Stichtagsbeständen ist eine klare Einzelauswahl oft nötig.
7. Lösche die Auswahl und kontrolliere wieder 9.000; teste anschließend jede weitere Berichtsseite, auf der der Slicer synchronisiert wird.

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

Die im Ablauf genannten Felder dem Visual zuweisen und die Auswahl prüfen.

### Nachher · Beispielergebnis

Einlagen → 4.050, Kredite → 4.200, ohne Filter → 9.000.

## Ergebnis

Ein Slicer stellt eine sichtbare Filterauswahl für verbundene Visuals bereit.

## Warum funktioniert das?

Der Datenschnitt erzeugt einen Filterkontext für verbundene Daten und aktivierte Visualinteraktionen.

## Typischer Fehler

**Symptom/Ursache:** Eine unverbundene Slicertabelle hat ohne zusätzliche Logik keinen automatischen Filterweg. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Einlagen plus Kredite ergibt bei Mehrfachauswahl 8.250.
