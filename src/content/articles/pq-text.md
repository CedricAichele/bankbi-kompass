---
{
  "id": "pq-text",
  "slug": "pq-text",
  "titel": "Text in Power Query bereinigen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Trimmen entfernt äußere Leerzeichen; Bereinigen entfernt bestimmte nicht druckbare Zeichen. Prüfe geschützte Leerzeichen gesondert.",
  "ort": "Power Query → Transformieren → Format",
  "tags": [
    "Text in Power Query bereinigen"
  ],
  "synonyme": [
    "text bereinigen power query"
  ],
  "verwandteThemen": [
    "schluessel",
    "dubletten",
    "glaetten",
    "saeubern",
    "zusammenfuehren",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/powerquery-m/text-functions"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Text in Power Query bereinigen",
      "caption": "Geplante Aufnahme: Power Query-Editor – Text in Power Query bereinigen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query-Editor – Text in Power Query bereinigen",
        "klickfolge": [
          "Markiere die Textspalte und prüfe, ob Leerzeichen fachlich bedeutungslos sind.",
          "Wähle **Transformieren → Format → Kürzen** für führende und nachgestellte Leerzeichen.",
          "Wähle **Transformieren → Format → Bereinigen** für nicht druckbare Steuerzeichen. Das Zeichen ↵ steht im Beispiel für einen Zeilenumbruch, nicht für ein zu löschendes Pfeilsymbol."
        ],
        "daten": "| Schlüssel roh |\n| --- |\n|  p001  |\n| P002↵ |",
        "sichtbar": [
          "Kürzen, Bereinigen und Großschreibung auf Kennungen anwenden.",
          "Spaltenüberschriften und relevante Optionen"
        ],
        "ausschnitt": "Power Query-Editor – Text in Power Query bereinigen mit Kürzen, Bereinigen und Großschreibung auf Kennungen anwenden., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-pq-text.webp",
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
      "src": "images/power-bi/pbi-text-bereinigen.webp",
      "alt": "Das Format-Menü enthält Kürzen und Bereinigen.",
      "caption": "Das Format-Menü enthält Kürzen und Bereinigen.",
      "schritt": 3,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Technisch unterschiedliche Schreibweisen vor Vergleichen oder Verknüpfungen vereinheitlichen.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere die Textspalte und prüfe, ob Leerzeichen fachlich bedeutungslos sind.
3. Wähle **Transformieren → Format → Kürzen** für führende und nachgestellte Leerzeichen.
4. Wähle **Transformieren → Format → Bereinigen** für nicht druckbare Steuerzeichen. Das Zeichen ↵ steht im Beispiel für einen Zeilenumbruch, nicht für ein zu löschendes Pfeilsymbol.
5. Verwende **Transformieren → Format → GROSSBUCHSTABEN**, wenn die Kennungen unabhängig von der Schreibweise verglichen werden sollen.
6. Prüfe anschließend doppelte Schlüssel: Verschiedene Rohtexte können nun denselben bereinigten Wert ergeben.

## Beispiel

### Vorher · Beispieldaten

| Schlüssel roh |
| --- |
|  p001  |
| P002↵ |

### Aktion

Kürzen, Bereinigen und Großschreibung auf Kennungen anwenden.

### Nachher · Beispielergebnis

| Schlüssel sauber |
| --- |
| P001 |
| P002 |

## Ergebnis

Vergleichbare Textwerte folgen einer definierten Schreibweise.

## Warum funktioniert das?

Kürzen bearbeitet Ränder, Bereinigen Steuerzeichen und Großschreibung Buchstaben. Keine dieser Operationen löst automatisch alle Unicode-Leerzeichen oder fachlich unterschiedliche Schreibweisen auf.

## Typischer Fehler

Power Query Kürzen mit Excel GLÄTTEN gleichsetzen: Innere mehrfache Leerzeichen werden durch Kürzen nicht allgemein zusammengezogen.

## Plausibilitätscheck

Keine Rand-Leerzeichen oder Steuerzeichen; nach der Normalisierung Eindeutigkeit erneut prüfen.
