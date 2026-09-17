---
{
  "id": "ida-statusverlauf",
  "slug": "ida-statusverlauf",
  "titel": "Mehrere Status je Vorgang",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Mehrfachzeilen / Joins",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Statushistorie erzeugt mehrere Zeilen je Vorgang. Für einen aktuellen Status brauchst du eine zeitliche und eindeutige Auswahlregel.",
  "ort": "Allgemeines Daten- und Joinprinzip; keine interne Implementierung",
  "tags": ["Mehrere Status je Vorgang"],
  "synonyme": ["mehrere status je vorgang", "letzter status"],
  "verwandteThemen": ["ida-vorgang", "ida-extrema"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/ida/statusverlauf.svg",
        "alt": "Historie · V001: 01.03. · Prüfung: 03.03. · Erledigt. Auswahlregel: Letzter gültiger Zeitpunkt: Gleichstand eindeutig auflösen. Aktueller Stand: 03.03. · Erledigt: Datum und Status gemeinsam",
        "caption": "Aktuellen Status aus derselben Zeile lesen",
        "hinweis": "MAX(Status) ist keine zeitliche Auswahlregel.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Eine Vorgangsliste enthält mehrere Bearbeitungsstände.

## Schritte

1. Zwischen Historienliste und aktuellem Stand entscheiden.
2. Für aktuellen Stand den letzten gültigen Zeitpunkt sowie eine Gleichstandsregel definieren.
3. Status und weitere Felder aus derselben ausgewählten Zeile übernehmen.

## Beispiel

V001: 01.03. „Prüfung“, 03.03. „Erledigt“ → aktueller Status aus der Zeile vom 03.03.

## Typischer Fehler

Maximum von Datum und Status unabhängig aggregieren und dadurch eine nie vorhandene Kombination erzeugen.
