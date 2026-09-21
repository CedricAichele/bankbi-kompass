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
    "csv-import",
    "excel-import",
    "dateien-kombinieren",
    "power-query",
    "import-oder-directquery",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources",
    "https://learn.microsoft.com/en-us/power-query/connectors/excel",
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Daten abrufen",
      "caption": "Geplante Aufnahme: Power BI – Daten abrufen",
      "schritt": 2,
      "schema": false,
      "status": "todo",
      "todo": "Zeigen, dass zahlreiche Quelltypen verfügbar sind.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Daten abrufen",
        "klickfolge": [
          "Power BI Desktop öffnen.",
          "Start → Daten abrufen → Mehr… öffnen."
        ],
        "daten": "| Konto | Bestand |\n| --- | --- |\n| K001 | 1000 |\n| K002 | 2000 |",
        "sichtbar": [
          "Connectorliste",
          "Suchfeld",
          "Excel, Text/CSV und Datenbankkategorien"
        ],
        "ausschnitt": "Power BI – Daten abrufen mit Connectorliste, Suchfeld, Excel, Text/CSV und Datenbankkategorien. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-daten-abrufen.webp",
        "zweck": "Zeigen, dass zahlreiche Quelltypen verfügbar sind.",
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

Daten aus einer neuen Quelle in Power BI verwenden.

## Voraussetzungen

Berechtigter Zugriff auf die Datenquelle; gegebenenfalls Servername, Datenbank und passende Anmeldung.

## Schritte

1. Öffne **Power BI Desktop → Start → Daten abrufen → Mehr…**.
2. Wähle den passenden Connector: beispielsweise Excel, Text/CSV, SQL Server, Ordner, SharePoint oder eine unterstützte Onlinedatenquelle. Suche nach dem tatsächlichen Quellsystem.
3. Trage die vom Connector geforderten Verbindungsangaben ein und melde dich mit dem dafür vorgesehenen Konto an. Gib keine Kennwörter in Abfrageformeln ein.
4. Wähle, falls angeboten, im **Navigator** die benötigten Tabellen. Prüfe die Vorschau statt pauschal alles auszuwählen.
5. Wähle **Daten transformieren**, um Spaltennamen, Datentypen und Zeilen vor dem Laden zu prüfen.
6. Wähle im Editor **Schließen & übernehmen**. Bei geeigneten Quellen kann Import oder DirectQuery angeboten werden; die Betriebsfolgen behandelt der verlinkte Entscheidungsartikel.

## Beispiel

### Vorher · Beispieldaten

| Quelle | Enthaltener Bereich |
| --- | --- |
| Excel-Arbeitsmappe | Tabelle Konten: K001/1000, K002/2000 |

### Aktion

Excel-Connector wählen und ausschließlich Tabelle Konten übernehmen.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |
| K002 | 2000 |

## Ergebnis

Eine Verbindung und die ausgewählten Daten stehen für die weitere Aufbereitung beziehungsweise das Modell bereit.

## Warum funktioniert das?

Ein Connector übersetzt das jeweilige Quellformat in eine tabellarische Vorschau. Die Auswahl begrenzt den Umfang; Transformationen machen die Daten anschließend fachlich nutzbar.

## Typischer Fehler

Daten abrufen auf Excel und CSV reduzieren oder alle Tabellen ungeprüft laden.

## Plausibilitätscheck

Der gewählte Bereich liefert zwei Konten und Summe 3000. Verbindungsart und Aktualisierungszugriff sind bekannt.
