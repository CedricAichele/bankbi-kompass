---
{
  "id": "pivotieren",
  "slug": "pivotieren",
  "titel": "Pivotieren: von lang nach breit",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Pivotieren macht Werte einer Spalte zu neuen Spaltenüberschriften.",
  "ort": "Power Query → Transformieren → Spalte pivotieren",
  "tags": [
    "Pivotieren: von lang nach breit",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "entpivotieren",
    "granularitaet",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/pivot-columns"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Pivotieren: von lang nach breit",
      "caption": "Geplante Aufnahme: Power Query – Pivotieren: von lang nach breit",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Pivotieren: von lang nach breit zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Pivotieren: von lang nach breit",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Monat markieren → Transformieren → Spalte pivotieren.",
          "Wertespalte Betrag; erweiterte Optionen Nicht aggregieren für die eindeutigen Beispieldaten. Dialog offen lassen."
        ],
        "daten": "| Kunde | Monat | Betrag |\n| --- | --- | --- |\n| P001 | Jan | 10 |\n| P001 | Feb | 15 |\n| P002 | Jan | 20 |\n| P002 | Feb | 25 |",
        "sichtbar": [
          "Markierte Monatsspalte; Wertespalte Betrag und Aggregationsoption"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pivotieren.webp",
        "zweck": "Bedienort und Auswahl für Pivotieren: von lang nach breit zeigen.",
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

Kategorien einer langen Tabelle als eigene Spalten darstellen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere **Monat**: Seine Werte sollen zu Spaltenüberschriften werden.
3. Wähle **Transformieren → Spalte pivotieren**.
4. Wähle als Wertespalte **Betrag**.
5. Wähle unter den erweiterten Optionen **Nicht aggregieren**, wenn je Kunde und Monat genau ein Wert existiert. Bei mehreren fachlich addierbaren Werten wähle stattdessen **Summe**.
6. Bestätige. Prüfe die verbleibenden Schlüsselspalten: Sie bestimmen die Ergebniszeilen.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Monat | Betrag |
| --- | --- | --- |
| P001 | Jan | 10 |
| P001 | Feb | 15 |
| P002 | Jan | 20 |
| P002 | Feb | 25 |

### Aktion

Monat pivotieren; Betrag als Wert verwenden.

### Nachher · Beispielergebnis

| Kunde | Jan | Feb |
| --- | --- | --- |
| P001 | 10 | 15 |
| P002 | 20 | 25 |

## Ergebnis

Aus Kategorien in einer Spalte werden mehrere Wertespalten.

## Warum funktioniert das?

Die verbleibenden Spalten identifizieren eine Ergebniszeile. Ein Wert wird am Schnittpunkt aus diesem Schlüssel und der pivotierten Kategorie abgelegt.

## Typischer Fehler

Eine zusätzliche Detailspalte unverändert behalten und sich über mehrere Zeilen je Kunde wundern.

## Plausibilitätscheck

Vier Betragswerte ergeben vier gefüllte Zellen in zwei Kundenzeilen; Summe 70.
