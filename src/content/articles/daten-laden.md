---
{
  "id": "daten-laden",
  "slug": "daten-laden",
  "titel": "Daten laden / importieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Öffne die Quelle zuerst in Power Query, prüfe Typen und Zeilen und lade erst dann das Ergebnis.",
  "ort": "Power BI: Start → Daten abrufen · Excel: Daten → Daten abrufen",
  "tags": [
    "Daten laden / importieren",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "power-query",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/excel",
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du möchtest eine Excel- oder CSV-Datei kontrolliert in Power BI importieren.

## Voraussetzungen

Eine ausschließlich synthetische Datei mit eindeutigen Überschriften. Die Tabelle Konten im Beispiel lässt sich in Excel als Tabelle speichern.

## Schritte

1. Öffne Power BI Desktop → Start → Daten abrufen. Wähle Excel-Arbeitsmappe für Excel oder Text/CSV für eine Textdatei.
2. Wähle deine Demo-Datei. Für Excel zeigt der Navigator Blätter und formatierte Tabellen; bevorzuge die passende Tabelle und kontrolliere die Vorschau.
3. Bei CSV prüfe Trennzeichen und Dateiursprung. Umlaute und vier getrennte Spalten müssen in der Vorschau richtig aussehen.
4. Wähle Daten transformieren, um vor dem Laden die Struktur zu prüfen.
5. Prüfe die Überschriften. Falls Column1 etc. angezeigt wird, verwende Erste Zeile als Überschriften nur dann, wenn diese Zeile tatsächlich Namen enthält.
6. Setze Kennungen auf Text und Bestand_EUR auf Zahl. Prüfe führende Nullen, leere Zellen und Fehler über die Spaltenqualität.
7. Benenne die Abfrage Konten. Kontrolliere sechs Zeilen und vier Spalten im Beispiel.
8. Wähle Schließen & übernehmen. Erstelle ein Tabellenvisual und eine Summe von Bestand_EUR zur Kontrolle.

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

Sechs Kontenzeilen und 9.000 Bestand sind im Modell verfügbar.

## Warum funktioniert das?

Der Import lädt eine Kopie. Power Query speichert die Transformationsschritte; eine Aktualisierung liest die Quelle erneut. Vorschau und vollständiger Datenbestand sind zu unterscheiden.

## Typischer Fehler

**Symptom:** nur eine CSV-Spalte oder kaputte Umlaute. **Ursache:** Trennzeichen beziehungsweise Kodierung falsch. **Lösung:** Importdialog korrigieren, nicht nachträglich jede Zeile reparieren.

## Plausibilitätscheck

Kontrolliere Zeilenzahl, Summe und wenigstens eine Kennung direkt gegen die Quelldatei.
