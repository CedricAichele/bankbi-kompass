---
{
  "id": "anhaengen",
  "slug": "anhaengen",
  "titel": "Append: Tabellen untereinander anhängen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Append ergänzt Zeilen gleicher fachlicher Struktur. Monat oder Herkunft muss vor dem Anhängen vorhanden sein, damit wiederkehrende Schlüssel unterscheidbar bleiben.",
  "ort": "Power Query → Start → Abfragen anfügen / anhängen",
  "tags": [
    "Tabellen anhängen",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [
    "tabellen untereinander",
    "Append",
    "Anfügen",
    "Zeilen ergänzen",
    "zwei tabellen",
    "untereinander",
    "Tabellen anhängen"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "dateien-kombinieren",
    "bestand-bewegung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/append-queries"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Tabellen anhängen",
      "caption": "Geplante Aufnahme: Power Query – Tabellen anhängen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Append: Tabellen untereinander anhängen",
        "klickfolge": [
          "Prüfe Bedeutung, Spaltennamen und Datentypen beider Tabellen. Gleicher Name muss auch dieselbe Bedeutung haben.",
          "Zeitbezug oder Dateiquelle vorab als Spalte aufnehmen. Append erfindet keinen Monat aus dem Abfragenamen.",
          "**Start → Abfragen anfügen/anhängen → Als neue Abfrage** wählen, Tabellen auswählen und bestätigen.",
          "Spalten werden nach Namen zugeordnet, nicht nach Position. Eine in einer Quelle fehlende Spalte erhält dort null; abweichende Namen können zwei getrennte Spalten erzeugen.",
          "Zeilenzahl gegen die Summe der Quellen prüfen. Append entfernt keine Dubletten; Überschneidungen der Lieferungen gezielt untersuchen."
        ],
        "daten": "### Vorher\n**Januar**\n| Monat | Kunde | Bestand |\n| --- | --- | --- |\n| 2026-01 | 1001 | 100 |\n\n**Februar**\n| Monat | Kunde | Bestand |\n| --- | --- | --- |\n| 2026-02 | 1001 | 120 |\n\n### Aktion\nJanuar und Februar anhängen.\n\n### Nachher\n| Monat | Kunde | Bestand |\n| --- | --- | --- |\n| 2026-01 | 1001 | 100 |\n| 2026-02 | 1001 | 120 |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-anhaengen.webp",
        "zweck": "Append ergänzt Zeilen gleicher fachlicher Struktur. Monat oder Herkunft muss vor dem Anhängen vorhanden sein, damit wiederkehrende Schlüssel unterscheidbar bleiben.",
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

Append ergänzt Zeilen gleicher fachlicher Struktur. Monat oder Herkunft muss vor dem Anhängen vorhanden sein, damit wiederkehrende Schlüssel unterscheidbar bleiben.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Prüfe Bedeutung, Spaltennamen und Datentypen beider Tabellen. Gleicher Name muss auch dieselbe Bedeutung haben.
2. Zeitbezug oder Dateiquelle vorab als Spalte aufnehmen. Append erfindet keinen Monat aus dem Abfragenamen.
3. **Start → Abfragen anfügen/anhängen → Als neue Abfrage** wählen, Tabellen auswählen und bestätigen.
4. Spalten werden nach Namen zugeordnet, nicht nach Position. Eine in einer Quelle fehlende Spalte erhält dort null; abweichende Namen können zwei getrennte Spalten erzeugen.
5. Zeilenzahl gegen die Summe der Quellen prüfen. Append entfernt keine Dubletten; Überschneidungen der Lieferungen gezielt untersuchen.

## Beispiel

### Vorher
**Januar**
| Monat | Kunde | Bestand |
| --- | --- | --- |
| 2026-01 | 1001 | 100 |

**Februar**
| Monat | Kunde | Bestand |
| --- | --- | --- |
| 2026-02 | 1001 | 120 |

### Aktion
Januar und Februar anhängen.

### Nachher
| Monat | Kunde | Bestand |
| --- | --- | --- |
| 2026-01 | 1001 | 100 |
| 2026-02 | 1001 | 120 |

## Ergebnis

Eine Tabelle enthält beide Monatslieferungen untereinander. Der Monat hält die zwei Bestände desselben Kunden unterscheidbar.

## Warum funktioniert das?

Append stapelt Zeilen. Merge ordnet Treffer zu und ergänzt Spalten. Der wiederkehrende Kunde ist hier kein Duplikat: die beiden Zeilen beschreiben unterschiedliche Monate.

## Typischer Fehler

Monat weglassen, abweichende Spaltennamen übersehen oder erwarten, dass Append doppelte Lieferungen entfernt.

## Plausibilitätscheck

1 + 1 = 2 Zeilen. Pro Monat bleibt der Bestand 100 bzw. 120. Die Summe 220 ist keine sinnvolle Bestandskennzahl über beide Stichtage.
