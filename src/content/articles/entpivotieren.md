---
{
  "id": "entpivotieren",
  "slug": "entpivotieren",
  "titel": "Entpivotieren: von breit nach lang",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entpivotieren wandelt viele gleichartige Wertspalten in eine Kategorie- und eine Wertspalte um.",
  "ort": "Power Query → Transformieren → Spalten entpivotieren",
  "tags": [
    "Entpivotieren: von breit nach lang",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pivotieren",
    "granularitaet",
    "pq-datum",
    "datumstabelle"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/unpivot-column"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Entpivotieren: von breit nach lang",
      "caption": "Geplante Aufnahme: Power Query – Entpivotieren: von breit nach lang",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Entpivotieren: von breit nach lang zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Entpivotieren: von breit nach lang",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Kunde als Schlüsselspalte markieren.",
          "Transformieren → Spalten entpivotieren öffnen, Option Andere Spalten entpivotieren sichtbar lassen."
        ],
        "daten": "| Kunde | Jan | Feb |\n| --- | --- | --- |\n| P001 | 10 | 15 |\n| P002 | 20 | 25 |",
        "sichtbar": [
          "Kunde markiert; Jan und Feb als Wertespalten; Menüoption"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-entpivotieren.webp",
        "zweck": "Bedienort und Auswahl für Entpivotieren: von breit nach lang zeigen.",
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

Eine breite Tabelle für flexible Filter und Zeitvergleiche in ein langes Format bringen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere die Schlüsselspalte **Kunde**.
3. Wähle **Transformieren → Spalten entpivotieren → Andere Spalten entpivotieren**. Dadurch werden auch später hinzukommende Monatsspalten erfasst.
4. Benenne **Attribut** in **Monat** und **Wert** in **Betrag** um.
5. Prüfe die Datentypen und die Anzahl der erzeugten Zeilen. NULL-Zellen erzeugen beim Entpivotieren keine Wertzeile.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Jan | Feb |
| --- | --- | --- |
| P001 | 10 | 15 |
| P002 | 20 | 25 |

### Aktion

Jan und Feb in Monat/Betrag-Zeilen umformen.

### Nachher · Beispielergebnis

| Kunde | Monat | Betrag |
| --- | --- | --- |
| P001 | Jan | 10 |
| P001 | Feb | 15 |
| P002 | Jan | 20 |
| P002 | Feb | 25 |

## Ergebnis

Wertespalten werden zu Attribut-Wert-Paaren untereinander.

## Warum funktioniert das?

Eine bisher in der Überschrift gespeicherte Kategorie wird selbst zu einem Datenwert. Die neue Zeilenebene ist Kunde und Monat.

## Typischer Fehler

Schlüsselspalten mit entpivotieren oder aus ausgebliebenen NULL-Zeilen einen Betrag von null ableiten.

## Plausibilitätscheck

Zwei Kunden × zwei gefüllte Monatsspalten ergeben vier Zeilen; Summe 70.
