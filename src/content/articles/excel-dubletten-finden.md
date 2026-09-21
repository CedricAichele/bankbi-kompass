---
{
  "id": "excel-dubletten-finden",
  "slug": "excel-dubletten-finden",
  "titel": "Duplikate finden",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Markiere Wiederholungen anhand des fachlichen Schlüssels, bevor du Zeilen löschst.",
  "ort": "Excel → Hilfsspalte oder Start → Bedingte Formatierung → Doppelte Werte",
  "tags": [
    "Duplikate finden",
    "Kundenanalyse",
    "Datenqualität"
  ],
  "synonyme": [
    "Dubletten"
  ],
  "verwandteThemen": [
    "excel-dubletten-entfernen",
    "granularitaet"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/find-and-remove-duplicates"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-dubletten.webp",
      "alt": "Bedingte Formatierung markiert P001 und P003 als mehrfach vorkommende Personennummern.",
      "caption": "Ersatzaufnahme: Excel – Duplikate finden",
      "schritt": 2,
      "schema": false,
      "status": "ersetzen",
      "hinweis": "Ältere Aufnahme: Markierungen sind erkennbar, aber die neue Anleitung nutzt Kunde in A2:A4. Menü und markierter Prüfbereich sollten gemeinsam sichtbar sein. Maßgeblich sind die aktuellen Tabellen und Schritte im Artikel.",
      "todo": "Markierungen sind erkennbar, aber die neue Anleitung nutzt Kunde in A2:A4. Menü und markierter Prüfbereich sollten gemeinsam sichtbar sein.",
      "aufnahmeplan": {
        "prioritaet": "Mittel",
        "werkzeug": "Excel",
        "oberflaeche": "Excel – Duplikate finden",
        "klickfolge": [
          "Markiere die zu prüfende Schlüsselspalte ohne Überschrift, im Beispiel **A2:A4**.",
          "Wähle **Start → Bedingte Formatierung → Regeln zum Hervorheben von Zellen → Doppelte Werte**."
        ],
        "daten": "| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Duplikate finden",
          "Gewähltes Feld oder vollständige Formel",
          "Ergebnis passend zu den Beispieldaten"
        ],
        "ausschnitt": "Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.",
        "dateiname": "excel-dubletten.webp",
        "zweck": "Markierungen sind erkennbar, aber die neue Anleitung nutzt Kunde in A2:A4. Menü und markierter Prüfbereich sollten gemeinsam sichtbar sein.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmensdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Mehrfach vorkommende Schlüssel sichtbar machen, ohne Daten zu löschen.

## Voraussetzungen

Eine vorhandene Excel-Liste mit geklärter Zeilenebene und bekanntem Aufbau.

## Schritte

1. Markiere die zu prüfende Schlüsselspalte ohne Überschrift, im Beispiel **A2:A4**.
2. Wähle **Start → Bedingte Formatierung → Regeln zum Hervorheben von Zellen → Doppelte Werte**.
3. Wähle eine gut erkennbare Formatierung und bestätige.
4. Prüfe, ob die mehrfach markierten Werte fachlich erlaubt sind. Kunde P001 mit zwei verschiedenen Konten ist kein doppelter Kontodatensatz.

## Beispiel

### Vorher · Beispieldaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Aktion

Kundenspalte auf doppelte Werte markieren.

### Nachher · Beispielergebnis

| Beispielergebnis |
| --- |
| P001 in beiden Zeilen markiert; P002 nicht markiert. |

## Ergebnis

Gleiche Zellwerte werden hervorgehoben; die Datensätze bleiben unverändert.

## Warum funktioniert das?

Die Prüfung betrachtet die markierte Spalte. Sie beantwortet nicht automatisch, ob komplette Datensätze doppelt sind.

## Typischer Fehler

Markierte Kundenzeilen ungeprüft löschen.

## Plausibilitätscheck

Zwei Markierungen zeigen einen zweimal vorkommenden Kunden, nicht zwei fehlerhafte Konten.
