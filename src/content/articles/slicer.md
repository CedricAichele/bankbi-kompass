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
    "visualinteraktionen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Eine sichtbare Auswahl im Bericht anbieten.

## Voraussetzungen

Power BI Desktop; Beispieltabelle Konten über Start → Daten eingeben anlegen.

## Schritte

1. Verwende die Tabelle Konten aus dem Beispiel und erstelle Gesamtbestand = SUM(Konten[Bestand_EUR]).
2. Füge eine Karte mit Gesamtbestand hinzu; ohne Auswahl soll 9.000 erscheinen.
3. Klicke auf eine freie Berichtsfläche und wähle das Visual Datenschnitt.
4. Ziehe Konten[Produktgruppe] in das Feld des Datenschnitts.
5. Wähle Einlagen. Kontrolliere 4.050 in der Karte.
6. Passe im Formatbereich bei Bedarf Einzel- oder Mehrfachauswahl an. Bei Stichtagsbeständen ist eine klare Einzelauswahl oft nötig.
7. Lösche die Auswahl und kontrolliere wieder 9.000; teste anschließend jede weitere Berichtsseite, auf der der Slicer synchronisiert wird.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

## Ergebnis

Einlagen → 4.050, Kredite → 4.200, ohne Filter → 9.000.

## Warum funktioniert das?

Der Datenschnitt erzeugt einen Filterkontext für verbundene Daten und aktivierte Visualinteraktionen.

## Typischer Fehler

**Symptom/Ursache:** Eine unverbundene Slicertabelle hat ohne zusätzliche Logik keinen automatischen Filterweg. **Lösung:** die betroffene Einstellung anhand des Beispiels gezielt korrigieren.

## Plausibilitätscheck

Einlagen plus Kredite ergibt bei Mehrfachauswahl 8.250.
