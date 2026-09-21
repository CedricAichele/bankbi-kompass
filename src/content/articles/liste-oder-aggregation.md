---
{
  "id": "liste-oder-aggregation",
  "slug": "liste-oder-aggregation",
  "titel": "Liste oder aggregierter Bericht?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erst die gewünschte Ergebniszeile definieren. Detailliste und aggregierter Bericht lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Liste oder aggregierter Bericht?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "reporting",
    "ida-zielgranularitaet"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reports-viewing-interacting",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=relationships-creating-relationship-manually"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Detailliste**, wenn Einzelfälle kontrolliert oder weiterbearbeitet werden.
3. Nimm **aggregierter Bericht**, wenn Überblick, Vergleich und zusammengefasste Kennzahlen gebraucht werden.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

Konten K001/K002 prüfen: Liste. P001 mit Gesamtbestand 2.000: Aggregation.

| Alternative | Geeignet, wenn |
| --- | --- |
| Detailliste | Einzelfälle kontrolliert oder weiterbearbeitet werden. |
| aggregierter Bericht | Überblick, Vergleich und zusammengefasste Kennzahlen gebraucht werden. |

## Typischer Fehler

Eine gruppierte Liste enthält nicht mehr jede ursprüngliche Zeile.

## Vergleich

| Option | Geeignet, wenn |
| --- | --- |
| Detailliste | Einzelfälle kontrolliert oder weiterbearbeitet werden |
| aggregierter Bericht | Überblick, Vergleich und zusammengefasste Kennzahlen gebraucht werden |

## Merksatz

Erst die gewünschte Ergebniszeile definieren.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Detailliste**, wenn Einzelfälle kontrolliert oder weiterbearbeitet werden. Nimm **aggregierter Bericht**, wenn Überblick, Vergleich und zusammengefasste Kennzahlen gebraucht werden.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Eine gruppierte Liste enthält nicht mehr jede ursprüngliche Zeile. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
