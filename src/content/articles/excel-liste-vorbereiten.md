---
{
  "id": "excel-liste-vorbereiten",
  "slug": "excel-liste-vorbereiten",
  "titel": "Excel-Liste für Auswertung vorbereiten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Auswertung braucht eine rechteckige Liste mit einer Kopfzeile, konsistenten Typen und einer klaren Zeilenebene.",
  "ort": "Excel → Datenbereich prüfen",
  "tags": [
    "Excel-Liste für Auswertung vorbereiten"
  ],
  "synonyme": [
    "große liste plausibilisieren",
    "unterschiedliche formate"
  ],
  "verwandteThemen": [
    "pivottable",
    "excel-import",
    "xverweis",
    "csv-import",
    "datenqualitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/create-and-format-tables"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-tabelle-erstellen.jpg",
      "alt": "Excel-Dialog Tabelle erstellen mit Bereich A1 bis D7 und aktivierten Überschriften",
      "caption": "Echter Excel-Dialog der synthetischen Demo: Bereich A1:D7, Tabelle hat Überschriften.",
      "schema": false,
      "schritt": 2,
      "hinweis": "undefined Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true,
  "schnellschritte": [
    "Rechteckigen Datenbereich mit einer Kopfzeile vorbereiten.",
    "Mit Strg+T als Tabelle anlegen und benennen.",
    "Zeilenzahl und Kontrollsumme vor der Weiterverarbeitung prüfen."
  ]
}
---

## Wann brauche ich das?

Eine robuste Quelle für Formeln, PivotTables und Power Query herstellen.

## Voraussetzungen

Eine vorhandene Excel-Liste mit geklärter Zeilenebene und bekanntem Aufbau.

## Schritte

1. Prüfe eine einzige Überschriftenzeile mit eindeutigen Namen. Entferne Zwischensummen und verbundene Zellen aus dem Datenbereich.
2. Klicke in den zusammenhängenden Bereich und wähle **Einfügen → Tabelle** oder **Strg+T**.
3. Prüfe den Bereich und aktiviere **Tabelle hat Überschriften**.
4. Vergib unter **Tabellenentwurf → Tabellenname** einen eindeutigen Namen, zum Beispiel Konten.
5. Prüfe Datentypen und ergänze neue Zeilen innerhalb der Tabelle.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

A1:C4 in die Excel-Tabelle Konten umwandeln.

### Nachher · Beispielergebnis

| Beispielergebnis |
| --- |
| Dieselben drei Datenzeilen mit Tabellenüberschriften und Filterpfeilen. |

## Ergebnis

Eine benannte Excel-Tabelle stellt einen klar begrenzten, erweiterbaren Datenbereich bereit.

## Warum funktioniert das?

Formeln und Pivotquellen können den Tabellennamen verwenden. Eine neue Tabellenzeile erweitert den strukturierten Bereich automatisch.

## Typischer Fehler

Titel- oder Summenzeilen als Daten mit aufnehmen.

## Plausibilitätscheck

Drei Zeilen, drei eindeutige Spaltennamen, Bestand als Zahl.
