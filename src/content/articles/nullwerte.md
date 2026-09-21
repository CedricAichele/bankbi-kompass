---
{
  "id": "nullwerte",
  "slug": "nullwerte",
  "titel": "Nullwerte behandeln",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Null bedeutet fehlend. Ersetze es nur durch 0, wenn „fehlend“ fachlich wirklich „kein Betrag“ bedeutet.",
  "ort": "Power Query → Spaltenfilter / benutzerdefinierte Spalte",
  "tags": [
    "Nullwerte behandeln",
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pq-fehler",
    "ida-null",
    "problem-null",
    "datenbereinigung"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/replace-values"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Nullwerte behandeln",
      "caption": "Geplante Aufnahme: Power Query – Nullwerte behandeln",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Nullwerte behandeln",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Bestand als Zahlenspalte mit einem null, 0 und 500 vorbereiten.",
          "Bestand markieren → Transformieren → Werte ersetzen. Suche null, Ersatz 0 einstellen, aber noch nicht bestätigen. Diese Aufnahme zeigt nur die Option bei fachlich zulässigem Ersatz."
        ],
        "daten": "| Konto | Bestand | Kommentar |\n| --- | --- | --- |\n| K001 | null | unbekannt |\n| K002 | 0 | gemessen |\n| K003 | 500 | vorhanden |",
        "sichtbar": [
          "null und 0 als verschiedene Ausgangswerte; Ersetzen-Dialog"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-nullwerte.webp",
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

Fehlende Werte sichtbar und fachlich korrekt behandeln.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere die betroffene Spalte und untersuche im Filter die Einträge **null**, leeren Text und Zahlen getrennt. Power Query null ist kein Text "null" und kein Betrag 0.
3. Soll unbekannt erhalten bleiben, ändere nichts; zähle fehlende Werte in einer separaten Prüfung.
4. Nur wenn fehlend fachlich sicher 0 bedeutet: **Transformieren → Werte ersetzen**, zu suchender Wert **null**, Ersatz **0**. Prüfe anschließend den erzeugten Schritt und Datentyp.
5. Soll eine Zeile ohne erforderlichen Schlüssel ausgeschlossen werden, öffne den Filter dieser Schlüsselspalte und entferne das Häkchen bei **(null)**. Prüfe leere Texte zusätzlich.
6. Dokumentiere die Regel und kontrolliere die ausgeschlossenen beziehungsweise ersetzten Werte.

## Beispiel

### Vorher · Beispieldaten

| Konto | Bestand | Kommentar |
| --- | --- | --- |
| K001 | null | unbekannt |
| K002 | 0 | gemessen |
| K003 | 500 | vorhanden |

### Aktion

Unbekannten Bestand bewusst erhalten; gemessene 0 bleibt 0.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | null |
| K002 | 0 |
| K003 | 500 |

## Ergebnis

Fehlende Werte werden nach Bedeutung erhalten, ersetzt oder als ausgeschlossene Datensätze nachgewiesen.

## Warum funktioniert das?

NULL beschreibt Abwesenheit. Leerer Text ist ein vorhandener Text mit Länge null. Wird ein unbekannter Betrag durch 0 ersetzt, ändert sich etwa der Durchschnitt von 250 auf rund 166,67; die Daten sehen vollständiger aus, als sie sind.

## Typischer Fehler

Nullwerte blind ersetzen oder ganze Zeilen aufgrund eines optionalen Kommentars entfernen.

## Plausibilitätscheck

Im Beispiel ein unbekannter Betrag, zwei vorhandene Zahlen, Summe 500. Das Ergebnis muss die fehlende Information weiterhin erkennen lassen.
