---
{
  "id": "werte-holen",
  "slug": "werte-holen",
  "titel": "Werte aus anderer Tabelle holen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Für einen Zellwert: XVERWEIS. Für zusätzliche Spalten: Zusammenführen. Für Modellfilter: Beziehung.",
  "ort": "Excel / Power Query / Power-BI-Modell; IDA nur allgemeines Join-Konzept",
  "tags": [
    "Werte aus anderer Tabelle holen",
    "Reporting"
  ],
  "synonyme": [
    "Werte aus anderer Tabelle holen"
  ],
  "verwandteThemen": [
    "xverweis",
    "zusammenfuehren",
    "beziehungen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Zu einer Kennung fehlt eine passende Beschreibung.

## Schritte

1. Eindeutigkeit und Typ des Suchschlüssels prüfen.
2. Passenden Ansatz nach benötigtem Ergebnis wählen.
3. Fehlende und mehrfache Treffer separat prüfen.
4. Öffne die [konkrete XVERWEIS-Anleitung](#/wissen/xverweis) und baue deren synthetisches Beispiel nach.
5. Übertrage die dort beschriebene Werkzeugaktion auf die Ausgangsdaten dieser Aufgabe; ersetze Feldnamen bewusst, nicht nur per Textsuche.
6. Prüfe diesen Gegenfall: Ändere den Suchwert K003 auf K004: Ergebnis muss 3.200 sein.

## Beispiel

PR-A soll „Gruppe A“ erhalten.

[Excel: XVERWEIS](#/wissen/xverweis) · [Power Query: Zusammenführen](#/wissen/zusammenfuehren) · [Power BI: Beziehung](#/wissen/beziehungen) · [IDA: Join prüfen](#/wissen/ida-join-pruefen)

## Typischer Fehler

Eine willkürlich erste Zuordnung übernehmen, obwohl mehrere widersprüchliche Treffer vorliegen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Power BI        | [Beziehung erstellen](#/wissen/beziehungen) · [Tabellen zusammenführen](#/wissen/zusammenfuehren) |
| Excel           | [XVERWEIS](#/wissen/xverweis)                                                                     |
| IDA / Reporting | [Ergebnis vor / nach Join plausibilisieren](#/wissen/ida-join-pruefen); generisches Konzept       |

## Ergebnis

K003 → 2.000; K999 → Fehlt.

## Warum funktioniert das?

Ein eindeutiger Schlüssel verbindet Suchwert und Ergebniszeile.

## Plausibilitätscheck

Ändere den Suchwert K003 auf K004: Ergebnis muss 3.200 sein.
