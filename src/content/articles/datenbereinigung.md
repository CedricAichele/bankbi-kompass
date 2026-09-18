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
    "nullwerte",
    "dubletten"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-types"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/pbi-datentyp.webp",
      "alt": "Datentyp über das Symbol am Spaltenkopf auswählen.",
      "caption": "Datentyp über das Symbol am Spaltenkopf auswählen.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Kennungen und Zahlen wurden beim Import falsch erkannt.

## Voraussetzungen

Synthetische Daten; Power Query in Power BI Desktop oder Excel. Die Menübezeichnung kann je Version leicht abweichen.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel: Quelldaten als Tabelle formatieren und **Daten → Aus Tabelle/Bereich** wählen. Die folgenden Aktionen erfolgen im Power-Query-Editor.
2. Klicke einen automatisch angelegten Schritt Geänderter Typ an und kontrolliere, ob 00123 schon zu 123 wurde. Wenn ja, entferne diesen Schritt und setze den Typ an der ursprünglichen Textquelle neu.
3. Markiere Kennung und wähle am Datentypsymbol Text. Eine schon verlorene führende Null entsteht durch Textformatierung nicht wieder.
4. Klicke Betrag mit rechts an → Typ ändern → Mit Gebietsschema.
5. Wähle Dezimalzahl und Deutsch (Deutschland). Bestätige und prüfe 1250,50 sowie 75,00.
6. Aktiviere unter Ansicht die Spaltenqualität und untersuche Fehler sowie leere Werte. Ein falscher Typ darf nicht durch stilles Ersetzen mit 0 verdeckt werden.
7. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

## Beispiel

| Kennung als Text | Betrag als Text |
| --- | --- |
| 00123 | 1.250,50 |
| 00456 | 75,00 |

## Ergebnis

Kennungen 00123 und 00456 bleiben erhalten; Summe der Beträge = 1.325,50.

## Warum funktioniert das?

Ein Datentyp steuert Interpretation und Berechnung. Das Gebietsschema bestimmt, wie Punkt und Komma beim Umwandeln von Text verstanden werden.

## Typischer Fehler

**Symptom:** 125050 oder Error statt 1250,50. **Ursache:** falsches Gebietsschema. **Lösung:** Umwandlung an der Textquelle mit passender Kultur wiederholen.

## Plausibilitätscheck

Vergleiche mindestens einen Wert mit Tausendertrennzeichen, einen Dezimalwert und eine Kennung mit führender Null.
