---
{
  "id": "pq-duplizieren",
  "slug": "pq-duplizieren",
  "titel": "Abfrage duplizieren oder referenzieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Duplizieren kopiert die bisherigen Schritte. Ein Verweis beginnt beim Ergebnis einer anderen Abfrage.",
  "ort": "Power Query → Rechtsklick auf Abfrage → Duplizieren / Verweis",
  "tags": [
    "Abfrage duplizieren oder referenzieren"
  ],
  "synonyme": [
    "abfrage referenzieren",
    "abfrage duplizieren"
  ],
  "verwandteThemen": [
    "pq-laden",
    "power-query",
    "gruppieren"
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
      "alt": "Bedienort: Power Query-Editor – Abfrage duplizieren oder referenzieren",
      "caption": "Geplante Aufnahme: Power Query – Abfrage duplizieren oder referenzieren",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Abfrage duplizieren oder referenzieren",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Eine Abfrage Konten auswählen.",
          "Rechtsklick auf Konten; Menü mit Duplizieren und Verweis geöffnet lassen."
        ],
        "daten": "| Abfrage | Schritte |\n| --- | --- |\n| Konten | Quelle → Typen → Filter |",
        "sichtbar": [
          "Abfragename, Duplizieren und Verweis gleichzeitig"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pq-duplizieren.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "src": "images/power-bi/pbi-abfragen.webp",
      "alt": "Das Kontextmenü bietet Duplizieren und Verweis.",
      "caption": "Das Kontextmenü bietet Duplizieren und Verweis.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine alternative Transformationsfolge ausprobieren oder eine gemeinsame Basis referenzieren.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Klicke im linken Abfragebereich mit der rechten Maustaste auf **Konten**.
3. Wähle **Duplizieren** für eine Kopie der vorhandenen Schritte und benenne sie aussagekräftig um.
4. Ändere einen Filter in der Kopie. Prüfe, dass der ursprüngliche Abfrageplan unverändert bleibt.
5. Wähle stattdessen **Verweis**, wenn die neue Abfrage auf dem Ergebnis der bestehenden aufbauen soll. Änderungen an der Basis wirken dann weiter.

## Beispiel

### Vorher · Beispieldaten

| Abfrage | Schritte |
| --- | --- |
| Konten | Quelle → Typen → Filter |

### Aktion

Konten duplizieren und nur in Konten_Alternative einen anderen Filter verwenden.

### Nachher · Beispielergebnis

| Abfrage | Abhängigkeit |
| --- | --- |
| Konten | Eigene Schritte zur Quelle |
| Konten_Alternative | Kopierte, danach unabhängig bearbeitete Schritte |
| Konten_Verweis | Beginnt mit dem Ergebnis von Konten |

## Ergebnis

Duplizieren erzeugt einen unabhängig bearbeitbaren Abfrageplan; ein Verweis verwendet eine bestehende Abfrage als Ausgangspunkt.

## Warum funktioniert das?

Unabhängig sind die Schritte, nicht zwangsläufig die Datenquelle: Beide Kopien können dieselbe Datei lesen. Ein Verweis bildet dagegen eine logische Abhängigkeit von der Basis.

## Typischer Fehler

Duplizieren als eingefrorene Datenkopie oder Verweis als garantierten Ausführungscache verstehen.

## Plausibilitätscheck

Ein Filterwechsel in der Kopie verändert die Basis nicht; ein Wechsel in der Basis kann das Verweisergebnis verändern.
