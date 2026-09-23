---
{
  "id": "pivotieren",
  "slug": "pivotieren",
  "titel": "Pivotieren: eine breite Übergabetabelle erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erzeuge eine Spalte je Merkmalswert, wenn eine Übergabe bewusst eine breite Tabelle benötigt. Für ein Datenmodell ist die lange Ausgangsstruktur häufig geeigneter.",
  "ort": "Power Query → Transformieren → Spalte pivotieren",
  "tags": [
    "Pivotieren: von lang nach breit",
    "Reporting"
  ],
  "synonyme": [
    "Pivotieren: von lang nach breit"
  ],
  "verwandteThemen": [
    "entpivotieren",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
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
        "oberflaeche": "Pivotieren: eine breite Übergabetabelle erstellen",
        "klickfolge": [
          "Festlegen, welche Spalten die Ergebniszeile identifizieren. Im Beispiel nur Kunde; unnötige Detailspalten vorher entfernen.",
          "Monat markieren → **Transformieren → Spalte pivotieren**; als Wertespalte Wert auswählen.",
          "Unter erweiterten Optionen **Nicht aggregieren** wählen, wenn jede Kombination Kunde/Monat genau einen Wert hat. Bei mehreren Werten zunächst deren Ursache klären; nur bei fachlicher Additivität Summe wählen.",
          "Neue Spalten und ihre Typen prüfen. Neue oder fehlende Monatswerte verändern das Schema und können spätere Schritte beeinflussen.",
          "Jeden Schnittpunkt gegen die lange Quelle prüfen, einschließlich fehlender Kombinationen."
        ],
        "daten": "### Vorher\n| Kunde | Monat | Wert |\n| --- | --- | --- |\n| 1001 | Jan | 100 |\n| 1001 | Feb | 120 |\n| 1001 | Mär | 130 |\n\n### Aktion\nMonat pivotieren, Wertespalte Wert, Nicht aggregieren.\n\n### Nachher\n| Kunde | Jan | Feb | Mär |\n| --- | --- | --- | --- |\n| 1001 | 100 | 120 | 130 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-pivotieren.webp",
        "zweck": "Erzeuge eine Spalte je Merkmalswert, wenn eine Übergabe bewusst eine breite Tabelle benötigt. Für ein Datenmodell ist die lange Ausgangsstruktur häufig geeigneter.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
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

Erzeuge eine Spalte je Merkmalswert, wenn eine Übergabe bewusst eine breite Tabelle benötigt. Für ein Datenmodell ist die lange Ausgangsstruktur häufig geeigneter.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Festlegen, welche Spalten die Ergebniszeile identifizieren. Im Beispiel nur Kunde; unnötige Detailspalten vorher entfernen.
2. Monat markieren → **Transformieren → Spalte pivotieren**; als Wertespalte Wert auswählen.
3. Unter erweiterten Optionen **Nicht aggregieren** wählen, wenn jede Kombination Kunde/Monat genau einen Wert hat. Bei mehreren Werten zunächst deren Ursache klären; nur bei fachlicher Additivität Summe wählen.
4. Neue Spalten und ihre Typen prüfen. Neue oder fehlende Monatswerte verändern das Schema und können spätere Schritte beeinflussen.
5. Jeden Schnittpunkt gegen die lange Quelle prüfen, einschließlich fehlender Kombinationen.

## Beispiel

### Vorher
| Kunde | Monat | Wert |
| --- | --- | --- |
| 1001 | Jan | 100 |
| 1001 | Feb | 120 |
| 1001 | Mär | 130 |

### Aktion
Monat pivotieren, Wertespalte Wert, Nicht aggregieren.

### Nachher
| Kunde | Jan | Feb | Mär |
| --- | --- | --- | --- |
| 1001 | 100 | 120 | 130 |

## Ergebnis

Eine breite Übergabetabelle enthält je Kunde die Spalten Jan, Feb und Mär.

## Warum funktioniert das?

Merkmalswerte werden Spaltenüberschriften. „Nicht aggregieren“ benötigt einen einzelnen Wert je Schnittpunkt; mehrere Werte verursachen Fehler, statt automatisch den richtigen Datensatz auszuwählen.

## Typischer Fehler

Mit Summe widersprüchliche Mehrfachwerte verdecken oder Pivotieren mit einer normalen Gruppierung gleichsetzen.

## Plausibilitätscheck

Drei Wertezeilen ergeben eine Kundenzeile mit den unveränderten Monatswerten 100, 120, 130.
