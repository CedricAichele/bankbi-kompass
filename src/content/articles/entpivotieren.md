---
{
  "id": "entpivotieren",
  "slug": "entpivotieren",
  "titel": "Entpivotieren: Monate von breit nach lang",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wiederkehrende Monatsspalten werden zu den Merkmalen Monat und Wert. Die lange Struktur lässt sich leichter filtern, mit einem Kalender verbinden und visualisieren.",
  "ort": "Power Query → Transformieren → Spalten entpivotieren",
  "tags": [
    "Entpivotieren: von breit nach lang",
    "Reporting"
  ],
  "synonyme": [
    "Entpivotieren: von breit nach lang"
  ],
  "verwandteThemen": [
    "pivotieren",
    "bestand-bewegung",
    "pq-workflow"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/unpivot-column"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Entpivotieren: von breit nach lang",
      "caption": "Geplante Aufnahme: Power Query – Entpivotieren: von breit nach lang",
      "schritt": 2,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Entpivotieren: von breit nach lang zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Entpivotieren: Monate von breit nach lang",
        "klickfolge": [
          "Identifikatoren von Messspalten trennen. Kunde bleibt Schlüsselmerkmal, Jan/Feb/Mär enthalten dieselbe Messgröße.",
          "Kunde und weitere zu behaltende Identifikatoren markieren → **Transformieren → Andere Spalten entpivotieren**. So werden auch neue Monatsspalten erfasst; unerwartete Textspalten würden ebenfalls erfasst und müssen kontrolliert werden.",
          "Attribut in Monat und Wert in den fachlichen Messnamen umbenennen. Datentypen prüfen.",
          "Für mehrere Jahre Monat und Jahr in einen echten Monats-/Datumsbezug überführen. Nur Jan als Text reicht für ein dauerhaftes Zeitmodell nicht aus.",
          "Zeilenzahl, fehlende Werte und Zuordnung prüfen. null-Zellen werden beim Entpivotieren nicht als normale Wertezeilen ausgegeben; eine vollständige Zeitreihe gegebenenfalls über einen Kalender herstellen."
        ],
        "daten": "### Vorher\n| Kunde | Jan | Feb | Mär |\n| --- | --- | --- | --- |\n| 1001 | 100 | 120 | 130 |\n\n### Aktion\nMonatsspalten entpivotieren.\n\n### Nachher\n| Kunde | Monat | Wert |\n| --- | --- | --- |\n| 1001 | Jan | 100 |\n| 1001 | Feb | 120 |\n| 1001 | Mär | 130 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-entpivotieren.webp",
        "zweck": "Wiederkehrende Monatsspalten werden zu den Merkmalen Monat und Wert. Die lange Struktur lässt sich leichter filtern, mit einem Kalender verbinden und visualisieren.",
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

Wiederkehrende Monatsspalten werden zu den Merkmalen Monat und Wert. Die lange Struktur lässt sich leichter filtern, mit einem Kalender verbinden und visualisieren.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Identifikatoren von Messspalten trennen. Kunde bleibt Schlüsselmerkmal, Jan/Feb/Mär enthalten dieselbe Messgröße.
2. Kunde und weitere zu behaltende Identifikatoren markieren → **Transformieren → Andere Spalten entpivotieren**. So werden auch neue Monatsspalten erfasst; unerwartete Textspalten würden ebenfalls erfasst und müssen kontrolliert werden.
3. Attribut in Monat und Wert in den fachlichen Messnamen umbenennen. Datentypen prüfen.
4. Für mehrere Jahre Monat und Jahr in einen echten Monats-/Datumsbezug überführen. Nur Jan als Text reicht für ein dauerhaftes Zeitmodell nicht aus.
5. Zeilenzahl, fehlende Werte und Zuordnung prüfen. null-Zellen werden beim Entpivotieren nicht als normale Wertezeilen ausgegeben; eine vollständige Zeitreihe gegebenenfalls über einen Kalender herstellen.

## Beispiel

### Vorher
| Kunde | Jan | Feb | Mär |
| --- | --- | --- | --- |
| 1001 | 100 | 120 | 130 |

### Aktion
Monatsspalten entpivotieren.

### Nachher
| Kunde | Monat | Wert |
| --- | --- | --- |
| 1001 | Jan | 100 |
| 1001 | Feb | 120 |
| 1001 | Mär | 130 |

## Ergebnis

Die lange Tabelle enthält je Kunde und Monat eine Wertezeile statt separater Monatsspalten.

## Warum funktioniert das?

Die Spaltennamen werden Werte einer Attributspalte. Ein Visual kann Monat auf der Achse und Wert als Messgröße nutzen, ohne jeden Monat als eigenes Feld zu behandeln.

## Typischer Fehler

Monatsbestände nach der Umformung über die Zeit addieren oder verschwundene null-Zellen übersehen.

## Plausibilitätscheck

Eine Quellzeile ergibt hier drei Wertezeilen. Die Werte 100, 120 und 130 sind unverändert; bei Beständen sind sie drei Stichtage und keine fachliche Jahressumme.
