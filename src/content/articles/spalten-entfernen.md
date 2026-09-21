---
{
  "id": "spalten-entfernen",
  "slug": "spalten-entfernen",
  "titel": "Spalten entfernen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entferne nur Spalten, die weder für Beziehungen noch für spätere Analysen benötigt werden.",
  "ort": "Power Query → Spalten markieren → Spalten entfernen",
  "tags": [
    "Spalten entfernen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "power-query",
    "schluessel",
    "granularitaet",
    "beziehungen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/choose-remove-columns"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Spalten entfernen",
      "caption": "Geplante Aufnahme: Power Query – Spalten entfernen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Spalten entfernen zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Spalten entfernen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Notiz im Spaltenkopf markieren.",
          "Start → Spalten entfernen: das Auswahlmenü öffnen. Noch keine Option anklicken."
        ],
        "daten": "| Konto | Bestand | Notiz |\n| --- | --- | --- |\n| K001 | 1000 | alt |\n| K002 | 2000 | alt |",
        "sichtbar": [
          "Markierte Notiz-Spalte und Optionen Spalten entfernen / Andere Spalten entfernen"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-spalten-entfernen.webp",
        "zweck": "Bedienort und Auswahl für Spalten entfernen zeigen.",
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

Nicht benötigte Felder aus einer Abfrage entfernen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere die Überschrift **Notiz**. Mehrere Spalten markierst du mit gedrückter Strg-Taste.
3. Wähle **Start → Spalten entfernen → Spalten entfernen**. Die markierten Spalten verschwinden.
4. Alternative: Markiere **Konto** und **Bestand** und wähle **Andere Spalten entfernen**. Damit bleiben ausschließlich die markierten Spalten erhalten.
5. Kontrolliere die verbliebenen Überschriften und die unveränderte Zeilenzahl.

## Beispiel

### Vorher · Beispieldaten

| Konto | Bestand | Notiz |
| --- | --- | --- |
| K001 | 1000 | alt |
| K002 | 2000 | alt |

### Aktion

Notiz entfernen.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |
| K002 | 2000 |

## Ergebnis

Die Abfrage enthält nur noch die benötigten Spalten.

## Warum funktioniert das?

Eine Spaltenauswahl ändert die Breite einer Tabelle, nicht die Ebene ihrer Zeilen. Schlüssel müssen erhalten bleiben, solange spätere Verknüpfungen sie benötigen.

## Typischer Fehler

Andere Spalten entfernen behält die Auswahl; Spalten entfernen löscht sie. Nicht verwechseln.

## Plausibilitätscheck

Zwei Zeilen und Bestandssumme 3.000 bleiben erhalten.
