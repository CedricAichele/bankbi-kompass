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
    "csv-import",
    "datenqualitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/excel/excel-tabelle-erstellen.jpg",
      "alt": "Excel-Dialog Tabelle erstellen mit Bereich A1 bis D7 und aktivierten Überschriften",
      "caption": "Echter Excel-Dialog der synthetischen Demo: Bereich A1:D7, Tabelle hat Überschriften.",
      "schema": false,
      "schritt": 3
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

Ein Export soll eine zuverlässige Quelle für Pivot oder Power Query werden.

## Voraussetzungen

Leere Excel-Arbeitsmappe; verwende ausschließlich die sechs synthetischen Konten unten.

## Schritte

1. Kopiere die Beispieltabelle nach A1:D7. Zeile 1 enthält die Überschriften; jede folgende Zeile genau ein Konto desselben Stichtags.
2. Prüfe: keine Leerzeile im Datenblock, keine verbundenen Zellen, keine Zwischensummen. Kennungen bleiben Text, Bestand_EUR muss eine Zahl sein.
3. Markiere A1:D7 und drücke Strg+T. Prüfe den Bereich $A$1:$D$7 und aktiviere Tabelle hat Überschriften. Bestätige mit OK.
4. Wähle eine Tabellenzelle. Unter Tabellenentwurf → Tabellenname vergib Konten. Die Filterpfeile gehören zur Kopfzeile, nicht zur ersten Datenzeile.
5. Schreibe außerhalb der Tabelle =SUMME(Konten[Bestand_EUR]) und =ZEILEN(Konten[Kontonummer]). Prüfe die Ergebnisse 9000 und 6.
6. Lege eine Pivot-Auswertung auf einem neuen Blatt an oder wähle Daten → Aus Tabelle/Bereich für Power Query. Eine spätere neue Kontozeile direkt unter der Tabelle muss zum Tabellenbereich gehören; aktualisiere danach die Auswertung.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

## Ergebnis

Sechs Datensätze, eindeutige Kontonummern und Gesamtsumme 9.000. P001 hat zwei Konten; diese Personenwiederholung ist kein Kontoduplikat.

## Warum funktioniert das?

Die benannte Tabelle wächst mit und stellt Überschriften und Datenbereich eindeutig bereit. Zahlformat allein wandelt Textzahlen nicht um.

## Typischer Fehler

Eine Summenzeile als normalen Datensatz importieren verdoppelt die Summe. Zahlen als Text können in Pivot zu Anzahl statt Summe führen.

## Plausibilitätscheck

Vergleiche 6 Konten, 4 Personen und 9.000 Gesamtbestand vor und nach jedem Import.
