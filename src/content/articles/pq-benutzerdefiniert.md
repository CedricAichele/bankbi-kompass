---
{
  "id": "pq-benutzerdefiniert",
  "slug": "pq-benutzerdefiniert",
  "titel": "Benutzerdefinierte Spalte",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Berechne beispielsweise einen Zeilenbetrag aus Menge und Preis. Ein M-Ausdruck ergänzt den Wert bei der Datenaufbereitung; er reagiert später nicht auf Slicer.",
  "ort": "Power Query → Spalte hinzufügen → Benutzerdefinierte Spalte",
  "tags": [
    "Benutzerdefinierte Spalte"
  ],
  "synonyme": [
    "benutzerdefinierte spalte"
  ],
  "verwandteThemen": [
    "pq-bedingt",
    "berechnete-spalte",
    "power-query-oder-dax",
    "measure-spalte"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/add-custom-column"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Benutzerdefinierte Spalte",
      "caption": "Geplante Aufnahme: Power Query – Benutzerdefinierte Spalte",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Benutzerdefinierte Spalte zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Benutzerdefinierte Spalte",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Spalte hinzufügen → Benutzerdefinierte Spalte öffnen.",
          "Name Wert; Formel [Menge] * [Preis] eingeben. Vor OK aufnehmen."
        ],
        "daten": "| Menge | Preis |\n| --- | --- |\n| 2 | 10 |\n| 3 | 20 |",
        "sichtbar": [
          "Name Wert, Formel und Liste verfügbarer Spalten"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pq-benutzerdefiniert.webp",
        "zweck": "Bedienort und Auswahl für Benutzerdefinierte Spalte zeigen.",
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

Eine Mengen-/Preisliste enthält noch keinen Zeilenwert. Berechne Menge × Preis einmal pro Datensatz, damit die vorbereitete Tabelle einen auswertbaren Betrag enthält.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Prüfe die numerischen Datentypen von **Menge** und **Preis**.
3. Wähle **Spalte hinzufügen → Benutzerdefinierte Spalte**.
4. Gib als Namen **Wert** und als Formel **[Menge] * [Preis]** ein. Die Spaltenliste hilft, Namen korrekt einzusetzen.
5. Bestätige und setze den Datentyp der neuen Spalte anschließend auf eine geeignete Zahl.
6. Prüfe Nullwerte und Fehler. Verwende die bedingte Spalte für einfache Regeln ohne freien Formelausdruck.

## Beispiel

### Vorher · Beispieldaten

| Menge | Preis |
| --- | --- |
| 2 | 10 |
| 3 | 20 |

### Aktion

Wert = [Menge] * [Preis].

### Nachher · Beispielergebnis

| Menge | Preis | Wert |
| --- | --- | --- |
| 2 | 10 | 20 |
| 3 | 20 | 60 |

## Ergebnis

Ein M-Ausdruck erzeugt pro Zeile einen neuen Wert während der Datenaufbereitung.

## Warum funktioniert das?

Die Feldzugriffe in eckigen Klammern verwenden jeweils die Werte derselben Zeile. Die Berechnung geschieht beim Aktualisieren und reagiert später nicht auf Berichtsslicer.

## Typischer Fehler

M im Power Query-Editor mit DAX im Datenmodell verwechseln.

## Plausibilitätscheck

2 × 10 = 20 und 3 × 20 = 60; zwei Zeilen bleiben zwei Zeilen.
