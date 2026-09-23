---
{
  "id": "excel-liste-vorbereiten",
  "slug": "excel-liste-vorbereiten",
  "titel": "Excel-Liste für Auswertung vorbereiten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
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
    "daten-laden",
    "xverweis",
    "csv-import",
    "pq-workflow"
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
      "hinweis": "Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    },
    {
      "alt": "Excel-Datenprüfung vor der Auswertung mit vollständig erfundenen Daten",
      "caption": "Excel-Datenprüfung vor der Auswertung",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel-Datenprüfung vor der Auswertung",
        "klickfolge": [
          "Ziel und Zeilenebene festlegen. Entferne Titel, Leer- und Summenzeilen aus dem Datenbereich; verwende eine eindeutige Überschriftenzeile ohne verbundene Zellen.",
          "Innerhalb des zusammenhängenden Bereichs **Einfügen → Tabelle** oder **Strg+T** wählen, Bereich und Tabelle hat Überschriften bestätigen.",
          "Unter **Tabellenentwurf → Tabellenname** einen sprechenden Namen vergeben. Neue Zeilen innerhalb der Tabelle ergänzen.",
          "Kennungen als Text erhalten, Beträge als Zahlen und Datum als Datum prüfen. **[Textzahlen erkennen](#/wissen/excel-zahl-text)** und **[Datumswerte korrigieren](#/wissen/excel-datum)** zeigen die unterschiedlichen Fehlerbilder.",
          "**[Leerzeichen und Steuerzeichen bereinigen](#/wissen/glaetten)** und **[Duplikate prüfen](#/wissen/excel-dubletten-finden)**. Fehlende Pflichtschlüssel getrennt untersuchen; leere optionale Felder nicht blind durch 0 ersetzen.",
          "Zeilenzahl und eine Kontrollsumme festhalten. Für wiederkehrende Lieferungen **[Excel Power Query](#/wissen/excel-power-query)** verwenden, für die anschließende flexible Auswertung eine **[PivotTable](#/wissen/pivottable)**."
        ],
        "daten": "### Vorher · Beispieldaten\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |\n\n### Aktion\n\nA1:C4 in die Excel-Tabelle Konten umwandeln.\n\n### Nachher · Beispielergebnis\n\n| Beispielergebnis |\n| --- |\n| Dieselben drei Datenzeilen mit Tabellenüberschriften und Filterpfeilen. |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "excel-liste-vorbereiten-4.webp",
        "zweck": "Eine Auswertung braucht eine rechteckige Liste mit einer Kopfzeile, konsistenten Typen und einer klaren Zeilenebene.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
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

1. Ziel und Zeilenebene festlegen. Entferne Titel, Leer- und Summenzeilen aus dem Datenbereich; verwende eine eindeutige Überschriftenzeile ohne verbundene Zellen.
2. Innerhalb des zusammenhängenden Bereichs **Einfügen → Tabelle** oder **Strg+T** wählen, Bereich und Tabelle hat Überschriften bestätigen.
3. Unter **Tabellenentwurf → Tabellenname** einen sprechenden Namen vergeben. Neue Zeilen innerhalb der Tabelle ergänzen.
4. Kennungen als Text erhalten, Beträge als Zahlen und Datum als Datum prüfen. **[Textzahlen erkennen](#/wissen/excel-zahl-text)** und **[Datumswerte korrigieren](#/wissen/excel-datum)** zeigen die unterschiedlichen Fehlerbilder.
5. **[Leerzeichen und Steuerzeichen bereinigen](#/wissen/glaetten)** und **[Duplikate prüfen](#/wissen/excel-dubletten-finden)**. Fehlende Pflichtschlüssel getrennt untersuchen; leere optionale Felder nicht blind durch 0 ersetzen.
6. Zeilenzahl und eine Kontrollsumme festhalten. Für wiederkehrende Lieferungen **[Excel Power Query](#/wissen/excel-power-query)** verwenden, für die anschließende flexible Auswertung eine **[PivotTable](#/wissen/pivottable)**.

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
