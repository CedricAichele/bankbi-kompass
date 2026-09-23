---
{
  "id": "pq-bedingt",
  "slug": "pq-bedingt",
  "titel": "Bedingte Spalte",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Markiere Datensätze anhand einer vereinbarten Schwelle, etwa für eine Prüfübersicht. Die Reihenfolge der Regeln und der Umgang mit fehlenden Werten bestimmen das Ergebnis.",
  "ort": "Power Query → Spalte hinzufügen → Bedingte Spalte",
  "tags": [
    "Bedingte Spalte"
  ],
  "synonyme": [
    "bedingte spalte"
  ],
  "verwandteThemen": [
    "pq-benutzerdefiniert",
    "nullwerte",
    "dax-switch"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/add-conditional-column"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Bedingte Spalte",
      "caption": "Geplante Aufnahme: Power Query – Bedingte Spalte",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Bedingte Spalte zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Bedingte Spalte",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Spalte hinzufügen → Bedingte Spalte öffnen.",
          "Name Kategorie; Bestand ist größer als 1000; Ausgabe hoch; Sonst niedrig. Vor OK aufnehmen."
        ],
        "daten": "| Bestand |\n| --- |\n| 500 |\n| 1000 |\n| 1500 |",
        "sichtbar": [
          "Komplette Regel einschließlich Sonst und Grenzwert"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pq-bedingt.webp",
        "zweck": "Bedienort und Auswahl für Bedingte Spalte zeigen.",
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

Für eine Prüfübersicht sollen Zeilen oberhalb einer vereinbarten Betragsschwelle gesondert markiert werden. Im Beispiel ist 1000 eine frei gewählte Demonstrationsgrenze, keine fachliche Vorgabe.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Prüfe, dass **Bestand** ein numerischer Datentyp ist. Kläre fehlende Werte vor der Einstufung.
3. Wähle **Spalte hinzufügen → Bedingte Spalte** und nenne die neue Spalte **Kategorie**.
4. Wähle Spaltenname **Bestand**, Operator **ist größer als**, Wert **1000**, Ausgabe **hoch**.
5. Trage bei **Sonst** den Text **niedrig** ein und bestätige.
6. Setze Kategorie auf **Text**. Prüfe insbesondere den Grenzwert 1000.

## Beispiel

### Vorher · Beispieldaten

| Bestand |
| --- |
| 500 |
| 1000 |
| 1500 |

### Aktion

Bestand > 1000 → hoch, sonst niedrig.

### Nachher · Beispielergebnis

| Bestand | Kategorie |
| --- | --- |
| 500 | niedrig |
| 1000 | niedrig |
| 1500 | hoch |

## Ergebnis

Eine zusätzliche Spalte enthält das Ergebnis der ersten zutreffenden Regel.

## Warum funktioniert das?

Die Bedingungen werden in ihrer Reihenfolge geprüft. Größer als schließt den Grenzwert aus; Sonst übernimmt die übrigen Fälle. Fehlende Beträge sind fachlich nicht automatisch niedrige Beträge.

## Typischer Fehler

Größer als mit größer oder gleich verwechseln oder NULL ungeklärt einer Kategorie zuordnen.

## Plausibilitätscheck

500 und 1000 sind niedrig, nur 1500 ist hoch. Die Ausgangsspalte bleibt erhalten.
