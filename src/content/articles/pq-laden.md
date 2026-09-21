---
{
  "id": "pq-laden",
  "slug": "pq-laden",
  "titel": "Laden einer Hilfsabfrage steuern",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Lade nur benötigte Ergebnistabellen. Eine Hilfsabfrage kann weiterhin andere Abfragen versorgen.",
  "ort": "Power Query → Abfragekontextmenü / Excel: Laden in",
  "tags": [
    "Laden einer Hilfsabfrage steuern"
  ],
  "synonyme": [
    "laden deaktivieren",
    "nur verbindung"
  ],
  "verwandteThemen": [
    "pq-duplizieren",
    "dateien-kombinieren",
    "fakt-dimension",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/queries-pane"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Laden einer Hilfsabfrage steuern",
      "caption": "Geplante Aufnahme: Power Query – Laden einer Hilfsabfrage steuern",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Laden einer Hilfsabfrage steuern",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Basis_Konten als Hilfsabfrage und FaktKonten als Verweis auf Basis_Konten anlegen.",
          "Rechtsklick auf Basis_Konten; Laden aktivieren deaktivieren und Kontextmenü erneut öffnen."
        ],
        "daten": "| Abfrage | Zweck |\n| --- | --- |\n| Basis_Konten | Import und Bereinigung |\n| FaktKonten | Verwendet Basis_Konten; fertige Daten |",
        "sichtbar": [
          "Basis_Konten, FaktKonten und fehlendes Häkchen bei Laden aktivieren"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pq-laden.webp",
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

Eine Hilfsabfrage weiterverwenden, ohne sie zusätzlich als Modelltabelle zu laden.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Prüfe, welche Abfrage nur Vorbereitung ist und welche fertige Tabelle im Modell benötigt wird.
3. Klicke in Power BI im Abfragebereich mit der rechten Maustaste auf **Basis_Konten**.
4. Entferne das Häkchen bei **Laden aktivieren**. Prüfe bei bereits geladenen Tabellen die Warnung: abhängige Modellobjekte können betroffen sein.
5. Lasse **FaktKonten** weiterhin zum Laden aktiviert. Wähle **Schließen & übernehmen**.
6. Prüfe, dass FaktKonten im Modell erscheint und ihre Aktualisierung weiterhin funktioniert. In Excel wird das Ladeziel über **Schließen & laden in… → Nur Verbindung erstellen** gesteuert.

## Beispiel

### Vorher · Beispieldaten

| Abfrage | Zweck |
| --- | --- |
| Basis_Konten | Import und Bereinigung |
| FaktKonten | Verwendet Basis_Konten; fertige Daten |

### Aktion

Nur das Ergebnis FaktKonten ins Modell laden.

### Nachher · Beispielergebnis

| Abfrage | Im Editor | Im Modell |
| --- | --- | --- |
| Basis_Konten | Ja | Nein |
| FaktKonten | Ja | Ja |

## Ergebnis

Die Hilfsabfrage bleibt Teil der Datenaufbereitung, erhält aber keine eigene geladene Modelltabelle.

## Warum funktioniert das?

Transformation und Modell sind zwei verschiedene Ebenen. Eine abhängige Ergebnisabfrage benötigt die Hilfsabfrage weiterhin; deaktiviertes Laden bedeutet deshalb nicht, dass ihre Quelle nie gelesen wird.

## Typischer Fehler

Laden aktivieren mit In Berichtsaktualisierung einschließen verwechseln oder eine bereits verwendete Modelltabelle ohne Prüfung entfernen.

## Plausibilitätscheck

FaktKonten enthält weiterhin alle erwarteten Zeilen; Basis_Konten ist nur im Abfragebereich sichtbar.
