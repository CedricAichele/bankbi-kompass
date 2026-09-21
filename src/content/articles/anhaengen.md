---
{
  "id": "anhaengen",
  "slug": "anhaengen",
  "titel": "Tabellen anhängen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Anhängen setzt gleichartige Tabellen untereinander. Die Zuordnung erfolgt über Spaltennamen.",
  "ort": "Power Query → Start → Abfragen anfügen / anhängen",
  "tags": [
    "Tabellen anhängen",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "untereinander"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "dateien-kombinieren",
    "merge-oder-append"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
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
        "oberflaeche": "Power Query – Tabellen anhängen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Januar und Februar als getrennte Abfragen laden.",
          "Start → Abfragen anfügen → Abfragen als neue Abfrage anfügen. Zwei Tabellen wählen, Januar und Februar einstellen. Vor OK aufnehmen."
        ],
        "daten": "**Januar**\n\n| Konto | Monat | Betrag |\n| --- | --- | --- |\n| K001 | Jan | 10 |\n| K002 | Jan | 20 |\n| K003 | Jan | 30 |\n\n**Februar**\n\n| Konto | Monat | Betrag |\n| --- | --- | --- |\n| K001 | Feb | 15 |\n| K002 | Feb | 25 |",
        "sichtbar": [
          "Beide Abfragen und Auswahl Zwei Tabellen"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-anhaengen.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
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

Gleichartige Datensätze aus mehreren Tabellen untereinander sammeln.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Prüfe, dass die Spalten dieselbe Bedeutung und dieselben Namen besitzen. Die Reihenfolge der Spalten ist nicht entscheidend.
3. Wähle **Start → Abfragen anfügen → Abfragen als neue Abfrage anfügen**. Je Sprachversion heißt die Funktion auch Anhängen.
4. Wähle **Zwei Tabellen**, dann Januar und Februar. Für mehr Tabellen wähle die entsprechende Mehrfachoption.
5. Bestätige und kontrolliere alle Spalten. Fehlt eine Spalte in einer Quelle, entstehen dort null-Werte.
6. Prüfe Zeilenzahl, Datentypen und doppelt gelieferte Datensätze.

## Beispiel

### Vorher · Beispieldaten

**Januar**

| Konto | Monat | Betrag |
| --- | --- | --- |
| K001 | Jan | 10 |
| K002 | Jan | 20 |
| K003 | Jan | 30 |

**Februar**

| Konto | Monat | Betrag |
| --- | --- | --- |
| K001 | Feb | 15 |
| K002 | Feb | 25 |

### Aktion

Januar und Februar untereinander anfügen.

### Nachher · Beispielergebnis

| Konto | Monat | Betrag |
| --- | --- | --- |
| K001 | Jan | 10 |
| K002 | Jan | 20 |
| K003 | Jan | 30 |
| K001 | Feb | 15 |
| K002 | Feb | 25 |

## Ergebnis

Die Zeilen mehrerer Tabellen stehen untereinander in einer gemeinsamen Tabelle.

## Warum funktioniert das?

Append ordnet Spalten nach Namen zu und fügt Datensätze hinzu. Es sucht keine Schlüsselübereinstimmung und entfernt auch keine Duplikate. Merge ergänzt dagegen passende Informationen über Schlüssel.

## Typischer Fehler

Betrag und Bestand_EUR trotz gleicher Bedeutung unvereinheitlicht lassen: Dann entstehen getrennte Spalten.

## Plausibilitätscheck

3 + 2 = 5 Zeilen; 60 + 40 = 100 Gesamtsumme. Monat bleibt zur Unterscheidung erhalten.
