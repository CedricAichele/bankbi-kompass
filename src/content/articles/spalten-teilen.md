---
{
  "id": "spalten-teilen",
  "slug": "spalten-teilen",
  "titel": "Spalten teilen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zerlege zusammengesetzte Texte an einem definierten Trennzeichen in eigene Spalten.",
  "ort": "Power Query → Transformieren → Spalte teilen",
  "tags": [
    "Spalten teilen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "pq-umbenennen",
    "pq-text",
    "datenbereinigung",
    "excel-text-teilen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/split-columns-delimiter"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Spalten teilen",
      "caption": "Geplante Aufnahme: Power Query – Spalten teilen",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Spalten teilen zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Spalten teilen",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Kennung markieren → Transformieren → Spalte teilen → Nach Trennzeichen.",
          "Benutzerdefiniert: -; ganz links stehendes Trennzeichen; Ausgabe in Spalten. Dialog vor OK aufnehmen."
        ],
        "daten": "| Kennung |\n| --- |\n| P001-K001 |\n| P002-K003 |",
        "sichtbar": [
          "Trennzeichen -, Trennposition, Spaltenausgabe"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-spalten-teilen.webp",
        "zweck": "Bedienort und Auswahl für Spalten teilen zeigen.",
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

Mehrere Bestandteile einer Textspalte in eigene Felder aufteilen.

## Voraussetzungen

Eine geladene Abfrage mit den benötigten Spalten. Die folgenden Tabellen sind frei erfundene Beispiele.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere die Textspalte **Kennung**.
3. Wähle **Transformieren → Spalte teilen → Nach Trennzeichen**.
4. Wähle als benutzerdefiniertes Trennzeichen **-** und als Position **Ganz links stehendes Trennzeichen**. Unter den erweiterten Optionen muss die Ausgabe in **Spalten** stehen.
5. Bestätige. Benenne die zwei entstandenen Spalten in **Kunde** und **Konto** um.
6. Prüfe Werte ohne Trennzeichen und mit mehreren Trennzeichen gesondert. Setze die neuen Kennungsspalten auf Text.

## Beispiel

### Vorher · Beispieldaten

| Kennung |
| --- |
| P001-K001 |
| P002-K003 |

### Aktion

Kennung am ersten Bindestrich von links teilen.

### Nachher · Beispielergebnis

| Kunde | Konto |
| --- | --- |
| P001 | K001 |
| P002 | K003 |

## Ergebnis

Die Bestandteile stehen in getrennten, einzeln nutzbaren Spalten.

## Warum funktioniert das?

Das Trennzeichen definiert die Grenze zwischen den Bestandteilen. Die gewählte Position entscheidet, ob nur diese Grenze oder jede Fundstelle verwendet wird.

## Typischer Fehler

Namen nicht pauschal an jedem Leerzeichen teilen: Mehrteilige Namen haben keine feste Anzahl von Bestandteilen.

## Plausibilitätscheck

Zwei Ausgangszeilen ergeben zwei Ergebniszeilen; beide Kennungen bleiben vollständig erhalten.
