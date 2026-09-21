---
{
  "id": "werte-ersetzen",
  "slug": "werte-ersetzen",
  "titel": "Werte ersetzen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ersetze einen klar definierten Ausgangswert durch einen vereinheitlichten Zielwert.",
  "ort": "Power Query → Transformieren → Werte ersetzen",
  "tags": [
    "Werte ersetzen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pq-text",
    "nullwerte",
    "datenbereinigung",
    "excel-ersetzen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/replace-values"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Werte ersetzen",
      "caption": "Geplante Aufnahme: Power Query – Werte ersetzen",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Werte ersetzen zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Werte ersetzen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Status markieren → Transformieren → Werte ersetzen.",
          "Alt suchen; Aktiv einsetzen; unter erweiterten Optionen gesamten Zellinhalt abgleichen. Dialog offen lassen."
        ],
        "daten": "| Status |\n| --- |\n| Alt |\n| Altbestand |\n| Neu |",
        "sichtbar": [
          "Suchwert Alt, Ersatz Aktiv und vollständiger Zellvergleich"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-werte-ersetzen.webp",
        "zweck": "Bedienort und Auswahl für Werte ersetzen zeigen.",
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

Bekannte Schreibweisen gezielt vereinheitlichen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere **Status** und öffne **Transformieren → Werte ersetzen**.
3. Trage als zu suchenden Wert **Alt** und als Ersatz **Aktiv** ein.
4. Aktiviere bei Text unter den erweiterten Optionen **Gesamten Zellinhalt abgleichen**, wenn nur exakt Alt ersetzt werden soll.
5. Bestätige und prüfe auch einen ähnlichen, aber nicht identischen Text.

## Beispiel

### Vorher · Beispieldaten

| Status |
| --- |
| Alt |
| Altbestand |
| Neu |

### Aktion

Exakten Zellwert Alt durch Aktiv ersetzen.

### Nachher · Beispielergebnis

| Status |
| --- |
| Aktiv |
| Altbestand |
| Neu |

## Ergebnis

Passende Werte werden nach der festgelegten Vergleichsregel ersetzt.

## Warum funktioniert das?

Ein vollständiger Zellvergleich unterscheidet den Wert Alt vom Teiltext in Altbestand. Ein Teiltextvergleich würde dagegen auch längere Texte verändern.

## Typischer Fehler

Ohne vollständigen Zellvergleich kann aus Altbestand unbeabsichtigt Aktivbestand werden.

## Plausibilitätscheck

Nur eine Zelle ändert sich; Zeilenzahl und Neu bleiben unverändert.
