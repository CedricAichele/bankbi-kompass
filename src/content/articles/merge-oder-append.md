---
{
  "id": "merge-oder-append",
  "slug": "merge-oder-append",
  "titel": "Zusammenführen oder Anhängen?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zusammenführen ergänzt passende Spalten über Schlüssel. Anhängen setzt gleichartige Zeilen untereinander.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "Zusammenführen oder Anhängen?"
  ],
  "synonyme": [
    "zusammenführen oder anhängen",
    "untereinander"
  ],
  "verwandteThemen": [
    "zusammenfuehren",
    "anhaengen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview",
    "https://learn.microsoft.com/en-us/power-query/append-queries"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Merge**, wenn du passende Zeilen über gemeinsame Kennungen zuordnest.
3. Nimm **Append**, wenn gleichartige Zeilen aus mehreren Tabellen untereinander gehören.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Konten plus Personenattribute: Merge. Zwei Monatsdateien mit gleichen Spalten: Append.

| Alternative | Geeignet, wenn |
| --- | --- |
| Merge | du passende Zeilen über gemeinsame Kennungen zuordnest. |
| Append | gleichartige Zeilen aus mehreren Tabellen untereinander gehören. |

## Typischer Fehler

Append gleicht Spaltennamen ab, nicht ihre Position.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Merge | du passende Zeilen über gemeinsame Kennungen zuordnest |
| Append | gleichartige Zeilen aus mehreren Tabellen untereinander gehören |

## Merksatz

Nebeneinander zuordnen oder untereinander stapeln?

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Merge**, wenn du passende Zeilen über gemeinsame Kennungen zuordnest. Nimm **Append**, wenn gleichartige Zeilen aus mehreren Tabellen untereinander gehören.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Append gleicht Spaltennamen ab, nicht ihre Position. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
