---
{
  "id": "import-oder-directquery",
  "slug": "import-oder-directquery",
  "titel": "Import oder DirectQuery?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Speicher- und Aktualisierungsbedarf gemeinsam entscheiden. Import und DirectQuery lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Import oder DirectQuery?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "daten-laden",
    "star-schema"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-sources",
    "https://learn.microsoft.com/en-us/power-query/connectors/excel",
    "https://learn.microsoft.com/en-us/power-query/connectors/text-csv"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Import**, wenn eine lokale Modellkopie mit geplanter Aktualisierung genügt und Volumen/Regeln dies erlauben.
3. Nimm **DirectQuery**, wenn Abfragen an eine unterstützte Quelle fachlich und technisch erforderlich sind.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Ein kleiner Datenbestand passt in Import. DirectQuery erfordert eine passende Quelle, getestete Antwortzeiten und Berechtigungen.

| Alternative | Geeignet, wenn |
| --- | --- |
| Import | eine lokale Modellkopie mit geplanter Aktualisierung genügt und Volumen/Regeln dies erlauben. |
| DirectQuery | Abfragen an eine unterstützte Quelle fachlich und technisch erforderlich sind. |

## Typischer Fehler

DirectQuery bedeutet nicht uneingeschränkt Echtzeit; Quelle, Caches und Modellbeschränkungen bleiben relevant.

## Merksatz

Speicher- und Aktualisierungsbedarf gemeinsam entscheiden.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Import**, wenn eine lokale Modellkopie mit geplanter Aktualisierung genügt und Volumen/Regeln dies erlauben. Nimm **DirectQuery**, wenn Abfragen an eine unterstützte Quelle fachlich und technisch erforderlich sind.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

DirectQuery bedeutet nicht uneingeschränkt Echtzeit; Quelle, Caches und Modellbeschränkungen bleiben relevant. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
