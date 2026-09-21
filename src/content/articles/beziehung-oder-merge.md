---
{
  "id": "beziehung-oder-merge",
  "slug": "beziehung-oder-merge",
  "titel": "Beziehung oder Zusammenführen?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Beziehung erhält getrennte Modelltabellen und überträgt Filter. Zusammenführen erzeugt eine angereicherte Tabelle beim Laden.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": [
    "Beziehung oder Zusammenführen?"
  ],
  "synonyme": [
    "beziehung oder zusammenführen"
  ],
  "verwandteThemen": [
    "beziehungen",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand",
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Beziehung**, wenn getrennte Tabellen im Modell über einen eindeutigen Schlüssel filtern sollen.
3. Nimm **Merge**, wenn ein Attribut beim Laden physisch an die Ergebniszeilen angefügt werden soll.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Personenslicer filtert Konten über eine Beziehung. Segment in einer exportierbaren Kontenliste wird per Merge ergänzt.

| Alternative | Geeignet, wenn |
| --- | --- |
| Beziehung | getrennte Tabellen im Modell über einen eindeutigen Schlüssel filtern sollen. |
| Merge | ein Attribut beim Laden physisch an die Ergebniszeilen angefügt werden soll. |

## Typischer Fehler

Mehrere rechte Treffer können beim Merge Zeilen vervielfachen.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Beziehung | getrennte Tabellen im Modell über einen eindeutigen Schlüssel filtern sollen |
| Merge | ein Attribut beim Laden physisch an die Ergebniszeilen angefügt werden soll |

## Merksatz

Filterweg im Modell oder neue Spalten beim Laden?

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Beziehung**, wenn getrennte Tabellen im Modell über einen eindeutigen Schlüssel filtern sollen. Nimm **Merge**, wenn ein Attribut beim Laden physisch an die Ergebniszeilen angefügt werden soll.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Mehrere rechte Treffer können beim Merge Zeilen vervielfachen. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
