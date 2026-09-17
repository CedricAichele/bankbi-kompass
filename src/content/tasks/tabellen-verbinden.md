---
{
  "id": "tabellen-verbinden",
  "slug": "tabellen-verbinden",
  "titel": "Zwei Tabellen verbinden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel", "IDA"],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wähle nach dem Ziel: Filterweg im Modell, Spalten über Schlüssel ergänzen oder gleichartige Zeilen untereinander setzen.",
  "ort": "Power BI / Excel / IDA: zuerst gewünschte Ergebnisform festlegen",
  "tags": ["Zwei Tabellen verbinden", "Reporting"],
  "synonyme": ["zwei tabellen", "zwei Tabellen verbinden"],
  "verwandteThemen":
    [
      "zusammenfuehren",
      "anhaengen",
      "beziehungen",
      "xverweis",
      "ida-join-pruefen",
    ],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "aufgabe",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du kennst die benötigte Funktion noch nicht und willst zwei Tabellen gemeinsam auswerten.

## Schritte

1. Brauche ich mehr Spalten? → Zusammenführen oder XVERWEIS.
2. Brauche ich mehr Zeilen? → Anhängen.
3. Brauche ich einen Modellfilter? → Beziehung.

## Beispiel

| Werkzeug | Passender Ansatz                                                                  |
| -------- | --------------------------------------------------------------------------------- |
| Power BI | [Beziehung](#/wissen/beziehungen) oder [Zusammenführen](#/wissen/zusammenfuehren) |
| Excel    | [XVERWEIS](#/wissen/xverweis) oder Power Query                                    |
| IDA      | [Join-Ergebnis prüfen](#/wissen/ida-join-pruefen); nur allgemeines Konzept        |

## Typischer Fehler

Mehrfachtreffer können Zeilen vervielfachen. Vorher Schlüssel und Datenebene prüfen.

## Vergleich

| Werkzeug        | Passender Einstieg                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------- |
| Power BI        | [Beziehung erstellen](#/wissen/beziehungen) · [Tabellen zusammenführen](#/wissen/zusammenfuehren) |
| Excel           | [XVERWEIS](#/wissen/xverweis)                                                                     |
| IDA / Reporting | [Mehrere 1:n-Joins plausibilisieren](#/wissen/ida-mehrere-joins); generisches Konzept             |
