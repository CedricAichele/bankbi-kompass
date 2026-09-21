---
{
  "id": "distinct-oder-gruppieren",
  "slug": "distinct-oder-gruppieren",
  "titel": "DISTINCT oder Gruppieren?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Liste verschiedener Werte oder Kennzahl je Gruppe? DISTINCT / EINDEUTIG und Gruppieren lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "DISTINCT oder Gruppieren?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "eindeutig",
    "gruppieren"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/unique-function",
    "https://learn.microsoft.com/en-us/power-query/group-by"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **DISTINCT / EINDEUTIG**, wenn nur unterschiedliche Schlüsselwerte ausgegeben werden sollen.
3. Nimm **Gruppieren**, wenn je Schlüssel zusätzlich Summe, Anzahl oder anderes Aggregat gebraucht wird.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Personenliste P001/P002: eindeutig. Personen mit Gesamtbestand: gruppieren.

| Alternative | Geeignet, wenn |
| --- | --- |
| DISTINCT / EINDEUTIG | nur unterschiedliche Schlüsselwerte ausgegeben werden sollen. |
| Gruppieren | je Schlüssel zusätzlich Summe, Anzahl oder anderes Aggregat gebraucht wird. |

## Typischer Fehler

Eindeutig über Person und Konto ist nicht eindeutig nach Person allein.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| DISTINCT / EINDEUTIG | nur unterschiedliche Schlüsselwerte ausgegeben werden sollen |
| Gruppieren | je Schlüssel zusätzlich Summe, Anzahl oder anderes Aggregat gebraucht wird |

## Merksatz

Liste verschiedener Werte oder Kennzahl je Gruppe?

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **DISTINCT / EINDEUTIG**, wenn nur unterschiedliche Schlüsselwerte ausgegeben werden sollen. Nimm **Gruppieren**, wenn je Schlüssel zusätzlich Summe, Anzahl oder anderes Aggregat gebraucht wird.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Eindeutig über Person und Konto ist nicht eindeutig nach Person allein. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
