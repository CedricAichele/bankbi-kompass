---
{
  "id": "datenbereinigung",
  "slug": "datenbereinigung",
  "titel": "Datentyp ändern / Daten bereinigen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Setze Datentypen ausdrücklich: Schlüssel häufig als Text, Stichtage als Datum und Beträge als passende Zahl.",
  "ort": "Power Query → Typsymbol links am Spaltennamen",
  "tags": [
    "Datentyp ändern / Daten bereinigen",
    "Datenqualität"
  ],
  "synonyme": [
    "datum falsch"
  ],
  "verwandteThemen": [
    "csv-import",
    "pq-datum",
    "schluessel",
    "nullwerte",
    "dubletten"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-types"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Datentyp ändern / Daten bereinigen",
      "caption": "Geplante Aufnahme: Power Query-Editor – Datentyp ändern / Daten bereinigen",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query-Editor – Datentyp ändern / Daten bereinigen",
        "klickfolge": [
          "Markiere die betreffende Spalte. Klicke auf das **Datentypsymbol links im Spaltenkopf** oder nutze **Transformieren → Datentyp**.",
          "Wähle für Schlüssel **Text**, für Beträge einen passenden Zahlentyp und für Kalendertage **Datum**.",
          "Bei länderspezifischen Texten verwende **Datentyp → Mit Gebietsschema**: hier Dezimalzahl beziehungsweise Datum mit **Deutsch (Deutschland)**."
        ],
        "daten": "| Kennung als Zahl | Betrag als Text | Datum als Text |\n| --- | --- | --- |\n| 123 | 1.250,50 | 31.01.2026 |",
        "sichtbar": [
          "Ursprüngliche Kennung \"00123\" aus der Quelle als Text erhalten; Betrag und Datum passend interpretieren.",
          "Spaltenüberschriften und relevante Optionen"
        ],
        "ausschnitt": "Power Query-Editor – Datentyp ändern / Daten bereinigen mit Ursprüngliche Kennung \"00123\" aus der Quelle als Text erhalten; Betrag und Datum passend interpretieren., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-datenbereinigung.webp",
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
      "src": "images/power-bi/pbi-datentyp.webp",
      "alt": "Datentyp über das Symbol am Spaltenkopf auswählen.",
      "caption": "Datentyp über das Symbol am Spaltenkopf auswählen.",
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

Datentypen so einstellen, dass Sortierung, Berechnung und Verknüpfung die beabsichtigte Bedeutung haben.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere die betreffende Spalte. Klicke auf das **Datentypsymbol links im Spaltenkopf** oder nutze **Transformieren → Datentyp**.
3. Wähle für Schlüssel **Text**, für Beträge einen passenden Zahlentyp und für Kalendertage **Datum**.
4. Bei länderspezifischen Texten verwende **Datentyp → Mit Gebietsschema**: hier Dezimalzahl beziehungsweise Datum mit **Deutsch (Deutschland)**.
5. Prüfe den Schritt **Geänderter Typ**. Eine bereits als Zahl importierte Kennung hat verlorene führende Nullen; stelle sie aus der ursprünglichen Textquelle wieder her.
6. Kontrolliere Fehlerzellen, Summen und Datumssortierung.

## Beispiel

### Vorher · Beispieldaten

| Kennung als Zahl | Betrag als Text | Datum als Text |
| --- | --- | --- |
| 123 | 1.250,50 | 31.01.2026 |

### Aktion

Ursprüngliche Kennung "00123" aus der Quelle als Text erhalten; Betrag und Datum passend interpretieren.

### Nachher · Beispielergebnis

| Kennung (Text) | Betrag (Zahl) | Datum |
| --- | --- | --- |
| 00123 | 1250,50 | 31.01.2026 |

## Ergebnis

Jede Spalte erhält einen Typ, der ihre fachliche Verwendung unterstützt.

## Warum funktioniert das?

Zahlentypen ermöglichen Rechnen, Datumstypen zeitliche Vergleiche und Texttypen erhalten Kennungen. Ein Format verändert nur die Anzeige; eine Typumwandlung interpretiert den Inhalt.

## Typischer Fehler

Nachträgliches Formatieren mit Nullen repariert keine verlorene ursprüngliche Kennung. Falsches Gebietsschema kann Zahlen falsch lesen oder Fehler erzeugen.

## Plausibilitätscheck

00123 enthält fünf Zeichen; der Betrag lässt sich summieren; das Datum nach Monaten sortieren.
