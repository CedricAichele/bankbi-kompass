---
{
  "id": "import-oder-directquery",
  "slug": "import-oder-directquery",
  "titel": "Import oder DirectQuery?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
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
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
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

Ein kleiner Demo-Datensatz passt in Import. DirectQuery erfordert eine passende Quelle, getestete Antwortzeiten und Berechtigungen.

## Typischer Fehler

DirectQuery bedeutet nicht uneingeschränkt Echtzeit; Quelle, Caches und Modellbeschränkungen bleiben relevant.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Import | eine lokale Modellkopie mit geplanter Aktualisierung genügt und Volumen/Regeln dies erlauben |
| DirectQuery | Abfragen an eine unterstützte Quelle fachlich und technisch erforderlich sind |

## Merksatz

Speicher- und Aktualisierungsbedarf gemeinsam entscheiden.
