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
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand",
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
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

### Ausgangslage und Entscheidung

Monatsplan und Kontenbestand getrennt an Dimensionen; einfache Kontenliste mit Segment für Excel flach.

| Alternative | Geeignet, wenn |
| --- | --- |
| Sternschema | mehrere Fakten, gemeinsame Dimensionen oder wiederverwendbare Filter gebraucht werden. |
| flache Tabelle | eine begrenzte, eindeutig definierte Export- oder Einzelanalyse genügt. |

## Typischer Fehler

Ein flacher Join kann Monatspläne je Konto wiederholen.

## Merksatz

Gemeinsame Filter ohne Vervielfachung der Fakten.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Sternschema**, wenn mehrere Fakten, gemeinsame Dimensionen oder wiederverwendbare Filter gebraucht werden. Nimm **flache Tabelle**, wenn eine begrenzte, eindeutig definierte Export- oder Einzelanalyse genügt.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Ein flacher Join kann Monatspläne je Konto wiederholen. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
