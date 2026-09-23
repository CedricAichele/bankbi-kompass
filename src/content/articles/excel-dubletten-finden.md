---
{
  "id": "excel-dubletten-finden",
  "slug": "excel-dubletten-finden",
  "titel": "Duplikate in Excel prüfen und gezielt entfernen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe Wiederholungen am fachlichen Schlüssel und entferne nur bestätigte doppelte Datensätze. Mehrere Konten eines Kunden bleiben erhalten.",
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

1. Lege die Zeilenebene fest: bei einer Kontenliste identifizieren Konto und gegebenenfalls Stichtag den Datensatz, nicht Kunde allein.
2. Markiere die Kontoschlüssel und wähle **Start → Bedingte Formatierung → Regeln zum Hervorheben von Zellen → Doppelte Werte**. Bei mehrteiligen Schlüsseln mit ZÄHLENWENNS die Kombination prüfen.
3. Vergleiche die vollständigen auffälligen Zeilen. Gleicher Kunde mit anderem Konto ist zulässig; gleicher Schlüssel mit unterschiedlichen Beträgen benötigt eine fachliche Klärung.
4. Nur für bestätigte Duplikate: sichere die Ausgangsliste, markiere die gesamte Tabelle und wähle **Daten → Duplikate entfernen**. Die gewählten Prüfspalten bestimmen die Gleichheit; die übrigen Spalten werden mit der Zeile entfernt.
5. Bei vollständig identischen Zeilen alle fachlich relevanten Spalten prüfen. Bei widersprüchlichen Versionen zuerst eine Auswahlregel festlegen, statt einfach die erste Zeile zu behalten.
6. Notiere entfernte Zeilenzahl und Summendifferenz und vergleiche sie mit den bestätigten Duplikaten.

## Beispiel

### Vorher
| Kunde | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |
| 1002 | C | 500 |

### Aktion
Konto C als Wiederholung markieren. Beide Zeilen sind vollständig identisch; die zusätzliche Lieferung entfernen. Beide Konten von 1001 behalten.

### Nachher
| Kunde | Konto | Bestand |
| --- | --- | --- |
| 1001 | A | 100 |
| 1001 | B | 200 |
| 1002 | C | 500 |

## Ergebnis

Eine bestätigte Doppelzeile wurde entfernt; mehrere gültige Konten eines Kunden bleiben erhalten.

## Warum funktioniert das?

Die Prüfung betrachtet die markierte Spalte. Sie beantwortet nicht automatisch, ob komplette Datensätze doppelt sind.

## Typischer Fehler

Markierte Kundenzeilen ungeprüft löschen.

## Plausibilitätscheck

4 → 3 Zeilen; 1300 → 800 Bestand. Der Abgang 500 entspricht genau der zusätzlichen C-Zeile.
