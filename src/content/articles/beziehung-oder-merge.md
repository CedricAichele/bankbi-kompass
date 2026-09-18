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
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": []
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

Personenslicer filtert Konten über eine Beziehung. Segment in einer exportierbaren Kontenliste wird per Merge ergänzt.

## Typischer Fehler

Mehrere rechte Treffer können beim Merge Zeilen vervielfachen.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Beziehung | getrennte Tabellen im Modell über einen eindeutigen Schlüssel filtern sollen |
| Merge | ein Attribut beim Laden physisch an die Ergebniszeilen angefügt werden soll |

## Merksatz

Filterweg im Modell oder neue Spalten beim Laden?
