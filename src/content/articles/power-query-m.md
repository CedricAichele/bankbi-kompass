---
{
  "id": "power-query-m",
  "slug": "power-query-m",
  "titel": "Power Query M – Formeln & Funktionen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Finde die passende M-Funktion für deine Arbeitsfrage – mit Ausgangswert, Code, Ergebnis, Anpassungshinweisen und dem richtigen Eingabeort.",
  "ort": "Power Query Editor → Benutzerdefinierte Spalte, Formelleiste oder Erweiterter Editor",
  "tags": [
    "Power Query",
    "M",
    "Formeln",
    "Funktionen"
  ],
  "synonyme": [
    "m",
    "m code",
    "power query formel",
    "power query code",
    "text trim",
    "leerzeichen entfernen",
    "großschreibung",
    "monatsende",
    "datum jahr",
    "fehler abfangen",
    "try otherwise",
    "if power query",
    "and power query",
    "or power query",
    "null power query",
    "table selectrows",
    "list contains"
  ],
  "verwandteThemen": [
    "pq-benutzerdefiniert",
    "pq-bedingt",
    "pq-text",
    "pq-datum",
    "dateien-kombinieren"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/powerquery-m/power-query-m-function-reference",
    "https://learn.microsoft.com/en-us/powerquery-m/understanding-power-query-m-functions"
  ],
  "screenshots": [],
  "praxis": false
}
---

## Wann brauche ich das?

Wenn du eine konkrete Transformation suchst und wissen möchtest, welche Formel passt, wo sie eingegeben wird und welche Namen du ersetzen musst.

## Schritte

1. Suche nach Arbeitsproblem oder Funktionsname und wähle bei Bedarf eine Kategorie.
2. Vergleiche Ausgangswert und Ergebnis und beachte den Eingabeort.
3. Passe Spalten, Schrittnamen und Parameter an und kontrolliere das Ergebnis.

## Beispiel

Text.Upper(Text.Trim([Ort])) macht aus „ mannheim “ den Wert MANNHEIM. Innen wird bereinigt, außen die Großschreibung vereinheitlicht.

## Typischer Fehler

Einen vollständigen Table-Schritt in den Dialog Benutzerdefinierte Spalte kopieren oder Platzhalter für Spalten- und Schrittnamen unverändert übernehmen. Nutze die Eingabehinweise direkt am Beispiel.
