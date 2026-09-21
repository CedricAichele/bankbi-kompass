---
{
  "id": "dubletten",
  "slug": "dubletten",
  "titel": "Dubletten prüfen und entfernen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erst die fachliche Schlüsselkombination bestimmt, ob zwei Zeilen wirklich doppelt sind.",
  "ort": "Power Query → Schlüsselspalten markieren → Zeilen entfernen → Duplikate entfernen",
  "tags": [
    "Dubletten prüfen und entfernen",
    "Kundenanalyse",
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "falsche summe",
    "eine Liste ohne doppelte Werte",
    "mehrere Zeilen",
    "Dubletten",
    "doppelte kunden",
    "duplikate",
    "doppelte personen",
    "summe stimmt nicht"
  ],
  "verwandteThemen": [
    "granularitaet",
    "schluessel",
    "gruppieren",
    "eins-zu-viele",
    "excel-dubletten-finden"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/working-with-duplicates"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Dubletten prüfen und entfernen",
      "caption": "Geplante Aufnahme: Power Query – Dubletten prüfen und entfernen",
      "schritt": 5,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Dubletten prüfen und entfernen zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Dubletten prüfen und entfernen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Konto und Stichtag mit Strg gemeinsam markieren.",
          "Start → Zeilen entfernen öffnen; Duplikate entfernen noch nicht ausführen."
        ],
        "daten": "| Kunde | Konto | Stichtag | Bestand |\n| --- | --- | --- | --- |\n| P001 | K001 | 31.01.2026 | 1000 |\n| P001 | K001 | 31.01.2026 | 1000 |\n| P001 | K002 | 31.01.2026 | 2000 |",
        "sichtbar": [
          "Beide markierten Schlüsselspalten; Option Duplikate entfernen"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-dubletten.webp",
        "zweck": "Bedienort und Auswahl für Dubletten prüfen und entfernen zeigen.",
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

Nach einer fachlich definierten Schlüsselkombination doppelte Datensätze entfernen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Lege zuerst fest, was eine Zeile eindeutig macht: hier **Konto und Stichtag**, nicht Kunde.
3. Prüfe wiederholte Schlüssel vor dem Löschen: Stimmen auch die übrigen Werte überein? Bei Abweichungen ist eine fachliche Auswahlregel nötig.
4. Markiere **Konto** und mit Strg zusätzlich **Stichtag**.
5. Wähle **Start → Zeilen entfernen → Duplikate entfernen**.
6. Prüfe die Anzahl und Summe nach dem Entfernen. Verlasse dich bei unterschiedlichen Datensätzen nicht darauf, welche Zeile Power Query behält.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Stichtag | Bestand |
| --- | --- | --- | --- |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K002 | 31.01.2026 | 2000 |

### Aktion

Identisches Duplikat nach Konto + Stichtag entfernen.

### Nachher · Beispielergebnis

| Kunde | Konto | Stichtag | Bestand |
| --- | --- | --- | --- |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K002 | 31.01.2026 | 2000 |

## Ergebnis

Pro gewählter Schlüsselkombination bleibt eine Zeile übrig.

## Warum funktioniert das?

Die markierten Spalten definieren Gleichheit. Kunde allein wäre zu grob: Eine Person kann mehrere gültige Konten besitzen. Das Entfernen ist keine fachliche Entscheidung über den neuesten Datensatz.

## Typischer Fehler

Eine vorherige Sortierung garantiert nicht allgemein, welcher Datensatz beim Entfernen erhalten bleibt. Unterschiedliche Versionen zuerst fachlich auflösen.

## Plausibilitätscheck

Drei Zeilen werden zwei; die um ein Duplikat erhöhte Summe 4.000 wird korrekt zu 3.000.
