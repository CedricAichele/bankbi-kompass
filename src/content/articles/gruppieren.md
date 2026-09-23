---
{
  "id": "gruppieren",
  "slug": "gruppieren",
  "titel": "Gruppieren: eine Zeile je Kunde",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Kontentabelle soll eine Kundenübersicht werden. Gruppiere nach Kunde und berechne Bestandssumme und Kontenzahl, wenn die Detailzeilen im Ergebnis nicht mehr gebraucht werden.",
  "ort": "Power Query → Start → Gruppieren nach",
  "tags": [
    "Gruppieren: Werte je Schlüssel zusammenfassen",
    "Reporting"
  ],
  "synonyme": [
    "eine zeile pro kunde",
    "eine zeile je kunde",
    "mehrere konten pro kunde",
    "Gruppieren",
    "eine Zeile je Person",
    "eine zeile pro person",
    "nur eindeutige kunden",
    "Gruppieren: Werte je Schlüssel zusammenfassen"
  ],
  "verwandteThemen": [
    "granularitaet",
    "dubletten",
    "pq-workflow"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-gruppieren.webp",
      "alt": "Alternative Aggregation: Kontenzeilen je Person zählen. Für einen Bestand stattdessen Summe und die Betragsspalte wählen.",
      "caption": "Gruppieren nach im Power Query-Editor.",
      "schritt": 4,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Der Dialog zeigt die Alternative Anzahl Zeilen. Für die Bestandssumme im Textbeispiel wähle Summe und die Spalte Bestand.",
      "todo": "Der vorhandene Dialog zeigt Zeilen zählen. Das neue Hauptbeispiel benötigt Summe von Bestand nach Kunde.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Gruppieren: eine Zeile je Kunde",
        "klickfolge": [
          "Ziel festlegen: vorher eine Zeile je Konto, nachher eine Zeile je Kunde. Alle Bestände müssen zum gleichen Stichtag gehören; sonst den Stichtag zusätzlich gruppieren.",
          "Kunde auswählen → **Start/Transformieren → Gruppieren nach**. Für mehrere Kennzahlen auf **Erweitert** wechseln.",
          "Ausgabespalte **Summe Bestand**, Operation **Summe**, Quellspalte **Bestand** wählen.",
          "Zweite Aggregation **Konten**, Operation **Anzahl Zeilen** hinzufügen. Das zählt nur dann Konten, wenn vorher tatsächlich genau eine Zeile je Konto vorhanden ist.",
          "Bei Bedarf andere Aggregationen wählen: **Durchschnitt**, **Minimum**, **Maximum** oder **Alle Zeilen**. Alle Zeilen bewahrt Detailtabellen pro Gruppe, statt direkt eine Kennzahl zu liefern.",
          "Ergebnis gegen die Quellgruppen und Gesamtsumme prüfen. Für spätere Kontodetails die Quellabfrage behalten oder im Modell mit Measures aggregieren."
        ],
        "daten": "### Vorher\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| 1001 | A | 100 |\n| 1001 | B | 200 |\n| 1002 | C | 500 |\n\n### Aktion\nNach Kunde gruppieren; Summe von Bestand und Anzahl Zeilen bilden.\n\n### Nachher\n| Kunde | Summe Bestand | Konten |\n| --- | --- | --- |\n| 1001 | 300 | 2 |\n| 1002 | 500 | 1 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-gruppieren.webp",
        "zweck": "Eine Kontentabelle soll eine Kundenübersicht werden. Gruppiere nach Kunde und berechne Bestandssumme und Kontenzahl, wenn die Detailzeilen im Ergebnis nicht mehr gebraucht werden.",
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

Eine Kontentabelle soll eine Kundenübersicht werden. Gruppiere nach Kunde und berechne Bestandssumme und Kontenzahl, wenn die Detailzeilen im Ergebnis nicht mehr gebraucht werden.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Ziel festlegen: vorher eine Zeile je Konto, nachher eine Zeile je Kunde. Alle Bestände müssen zum gleichen Stichtag gehören; sonst den Stichtag zusätzlich gruppieren.
2. Kunde auswählen → **Start/Transformieren → Gruppieren nach**. Für mehrere Kennzahlen auf **Erweitert** wechseln.
3. Ausgabespalte **Summe Bestand**, Operation **Summe**, Quellspalte **Bestand** wählen.
4. Zweite Aggregation **Konten**, Operation **Anzahl Zeilen** hinzufügen. Das zählt nur dann Konten, wenn vorher tatsächlich genau eine Zeile je Konto vorhanden ist.
5. Bei Bedarf andere Aggregationen wählen: **Durchschnitt**, **Minimum**, **Maximum** oder **Alle Zeilen**. Alle Zeilen bewahrt Detailtabellen pro Gruppe, statt direkt eine Kennzahl zu liefern.
6. Ergebnis gegen die Quellgruppen und Gesamtsumme prüfen. Für spätere Kontodetails die Quellabfrage behalten oder im Modell mit Measures aggregieren.

## Beispiel

### Vorher
| Kunde | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |

### Aktion
Nach Kunde gruppieren; Summe von Bestand und Anzahl Zeilen bilden.

### Nachher
| Kunde | Summe Bestand | Konten |
| --- | --- | --- |
| 1001 | 300 | 2 |
| 1002 | 500 | 1 |

## Ergebnis

Die Kundenübersicht hat zwei Zeilen: 1001 mit Bestand 300 und zwei Konten, 1002 mit Bestand 500 und einem Konto.

## Warum funktioniert das?

Die Gruppierung verändert die Granularität: aus Kontenzeilen werden Kundenzeilen. Einzelne Kontonummern und andere nicht gruppierte bzw. aggregierte Spalten sind im Ergebnis nicht mehr direkt vorhanden.

## Typischer Fehler

Mehrere Monatsbestände je Kunde summieren oder Anzahl Zeilen mit eindeutiger Kontenanzahl verwechseln.

## Plausibilitätscheck

3 Kontenzeilen → 2 Kundenzeilen; Summe bleibt 800, Summe der Kontenzahlen bleibt 3.
