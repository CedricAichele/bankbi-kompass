---
{
  "id": "modell-oder-flach",
  "slug": "modell-oder-flach",
  "titel": "Datenmodell oder flache Tabelle?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Gemeinsame Filter ohne Vervielfachung der Fakten. Sternschema und flache Tabelle lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Datenmodell oder flache Tabelle?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "star-schema",
    "beziehung-oder-merge"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Sternschema**, wenn mehrere Fakten, gemeinsame Dimensionen oder wiederverwendbare Filter gebraucht werden.
3. Nimm **flache Tabelle**, wenn eine begrenzte, eindeutig definierte Export- oder Einzelanalyse genügt.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

Monatsplan und Kontenbestand getrennt an Dimensionen; einfache Kontenliste mit Segment für Excel flach.

## Typischer Fehler

Ein flacher Join kann Monatspläne je Konto wiederholen.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Sternschema | mehrere Fakten, gemeinsame Dimensionen oder wiederverwendbare Filter gebraucht werden |
| flache Tabelle | eine begrenzte, eindeutig definierte Export- oder Einzelanalyse genügt |

## Merksatz

Gemeinsame Filter ohne Vervielfachung der Fakten.
