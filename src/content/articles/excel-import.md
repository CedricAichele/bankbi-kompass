---
{
  "id": "excel-import",
  "slug": "excel-import",
  "titel": "Excel-Datei importieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lade eine benannte Excel-Tabelle, wenn der Datenbereich regelmäßig wächst. Prüfe vor dem Laden Überschriften und Typen.",
  "ort": "Power BI: Daten abrufen → Excel · Excel: Daten → Daten abrufen → Aus Datei",
  "tags": [
    "Excel-Datei importieren"
  ],
  "synonyme": [
    "excel importieren"
  ],
  "verwandteThemen": [
    "daten-laden",
    "csv-import",
    "pq-ueberschriften",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/excel"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Importdialog – Excel-Datei importieren",
      "caption": "Geplante Aufnahme: Importdialog – Excel-Datei importieren",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Importdialog – Excel-Datei importieren",
        "klickfolge": [
          "Wähle **Start → Daten abrufen → Excel-Arbeitsmappe** und die Datei.",
          "Unterscheide im **Navigator** die benannte Tabelle **Konten** vom Arbeitsblatt **Bericht**. Eine Tabelle besitzt definierte Überschriften und einen zusammenhängenden Datenbereich.",
          "Wähle möglichst die benötigte benannte Tabelle und prüfe die Vorschau. Ein ganzes Blatt kann Titel, Leerzeilen und Summenzeilen zusätzlich enthalten."
        ],
        "daten": "Eine Arbeitsmappe enthält ein Blatt Bericht mit Titelzeilen und die benannte Excel-Tabelle **Konten** mit K001/1000 und K002/2000.",
        "sichtbar": [
          "Im Navigator die Tabelle Konten statt des gesamten Berichtsblatts auswählen.",
          "Spaltenüberschriften und relevante Optionen"
        ],
        "ausschnitt": "Importdialog – Excel-Datei importieren mit Im Navigator die Tabelle Konten statt des gesamten Berichtsblatts auswählen., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-excel-import.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Aus einer Excel-Arbeitsmappe den richtigen strukturierten Datenbereich übernehmen.

## Voraussetzungen

Zugriff auf die gewünschte Quelle und Kenntnis ihres fachlichen Aufbaus.

## Schritte

1. Wähle **Start → Daten abrufen → Excel-Arbeitsmappe** und die Datei.
2. Unterscheide im **Navigator** die benannte Tabelle **Konten** vom Arbeitsblatt **Bericht**. Eine Tabelle besitzt definierte Überschriften und einen zusammenhängenden Datenbereich.
3. Wähle möglichst die benötigte benannte Tabelle und prüfe die Vorschau. Ein ganzes Blatt kann Titel, Leerzeilen und Summenzeilen zusätzlich enthalten.
4. Wähle **Daten transformieren**, kontrolliere Datentypen und entferne nur tatsächlich vorhandene Nicht-Datenzeilen.
5. Prüfe, ob neue Zeilen in Excel innerhalb der Tabelle liegen; speichere die Arbeitsmappe vor der Aktualisierung.

## Beispiel

### Vorher · Beispieldaten

Eine Arbeitsmappe enthält ein Blatt Bericht mit Titelzeilen und die benannte Excel-Tabelle **Konten** mit K001/1000 und K002/2000.

### Aktion

Im Navigator die Tabelle Konten statt des gesamten Berichtsblatts auswählen.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |
| K002 | 2000 |

## Ergebnis

Die Abfrage übernimmt gezielt einen Excel-Datenbereich statt beliebiger Layoutzellen.

## Warum funktioniert das?

Eine benannte Excel-Tabelle beschreibt ihre Grenzen und Überschriften. Ein Arbeitsblatt ist dagegen ein Raster, in dem fachliche Daten und Darstellung gemischt sein können.

## Typischer Fehler

Summenzeilen eines formatierten Berichts als weitere Datensätze laden oder neue Werte außerhalb der Tabelle ergänzen.

## Plausibilitätscheck

Zwei Konten, keine Titelzeile als Datensatz, Summe 3000.
