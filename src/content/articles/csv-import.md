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
  "kategorie": "Daten importieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lade CSV über den Importdialog und prüfe Trennzeichen, Zeichencodierung und Datentypen.",
  "ort": "Power BI: Daten abrufen → Text/CSV · Excel: Daten → Aus Text/CSV",
  "tags": [
    "CSV korrekt importieren"
  ],
  "synonyme": [
    "csv",
    "csv öffnen",
    "csv korrekt laden",
    "CSV korrekt importieren"
  ],
  "verwandteThemen": [
    "daten-laden",
    "datenbereinigung",
    "pq-workflow",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-csv-import.webp",
      "alt": "CSV-Vorschau: UTF-8 und Semikolon trennen die fünf Spalten korrekt.",
      "caption": "Ersatzaufnahme: Importdialog – CSV korrekt importieren",
      "schritt": 3,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Zu viel Leerfläche und kleine Schrift; automatische Typerkennung ist aktiv. Neue Aufnahme muss Kennungen mit führenden Nullen und deaktivierte Typerkennung zeigen. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Zu viel Leerfläche und kleine Schrift; automatische Typerkennung ist aktiv. Neue Aufnahme muss Kennungen mit führenden Nullen und deaktivierte Typerkennung zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Importdialog – CSV korrekt importieren",
        "klickfolge": [
          "Wähle in Power BI **Start → Daten abrufen → Text/CSV** und die gewünschte Datei.",
          "Prüfe die Vorschau. Wähle **Semikolon** als Trennzeichen für das Beispiel. Stelle den Dateiursprung passend zur tatsächlichen Codierung ein, zum Beispiel **UTF-8**, wenn die Datei so gespeichert wurde.",
          "Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**."
        ],
        "daten": "```text\nKonto;Betrag;Datum\n00123;1.250,50;31.01.2026\n00124;20,00;01.02.2026\n```",
        "sichtbar": [
          "Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**.",
          "Spaltenüberschriften und zugehörige Ausgangswerte"
        ],
        "ausschnitt": "Importdialog – CSV korrekt importieren mit Semikolon lesen, Kennung als Text erhalten, deutsche Zahl und Datum umwandeln., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-csv-import.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Textdatei ohne falsch getrennte Spalten, verlorene Nullen oder falsch gelesene Zahlen importieren.

## Voraussetzungen

Zugriff auf die gewünschte Quelle und Kenntnis ihres fachlichen Aufbaus.

## Schritte

1. In Excel: **Daten → Daten abrufen → Aus Datei → Aus Text/CSV**; Abschluss über **Schließen & laden**. Wähle in Power BI **Start → Daten abrufen → Text/CSV** und die gewünschte Datei.
2. Prüfe die Vorschau. Wähle **Semikolon** als Trennzeichen für das Beispiel. Stelle den Dateiursprung passend zur tatsächlichen Codierung ein, zum Beispiel **UTF-8**, wenn die Datei so gespeichert wurde.
3. Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**.
4. Prüfe, ob Konto, Betrag und Datum bereits Überschriften sind. Nur sonst **Erste Zeile als Überschriften verwenden**.
5. Prüfe automatische Schritte **Geänderter Typ**. Entferne eine verfrühte Zahlenumwandlung der Kennung und setze Konto direkt vom Quelltext auf Text.
6. Wandle Betrag und Datum mit passendem **Gebietsschema Deutsch (Deutschland)** in Zahl und Datum um.
7. Prüfe Zeilenanzahl, Umlaute, Nullen und Summen; anschließend **Schließen & übernehmen**.

## Beispiel

### Vorher · Beispieldaten

```text
Konto;Betrag;Datum
00123;1.250,50;31.01.2026
00124;20,00;01.02.2026
```

### Aktion

Semikolon lesen, Kennung als Text erhalten, deutsche Zahl und Datum umwandeln.

### Nachher · Beispielergebnis

| Konto (Text) | Betrag (Zahl) | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.01.2026 |
| 00124 | 20,00 | 01.02.2026 |

## Ergebnis

Die Datei wird mit korrekt erkannten Spalten, Zeichen und Datentypen zur Tabelle.

## Warum funktioniert das?

CSV enthält Text und keine verlässlichen Excel-Zelltypen. Trennzeichen definieren Spalten, Codierung definiert Zeichen, Gebietsschema steuert die Interpretation von Zahl- und Datumstexten.

## Typischer Fehler

Die Vorschau mit einer einzigen langen Spalte akzeptieren oder 00123 erst nach einer Zahlenumwandlung auf Text setzen.

## Plausibilitätscheck

Zwei Datenzeilen, drei Spalten, beide Kennungen fünfstellig; Summe 1270,50.
