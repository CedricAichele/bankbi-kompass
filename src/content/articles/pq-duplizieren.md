---
{
  "id": "pq-duplizieren",
  "slug": "pq-duplizieren",
  "titel": "Abfrage duplizieren oder referenzieren",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Duplizieren kopiert die bisherigen Schritte. Ein Verweis beginnt beim Ergebnis einer anderen Abfrage.",
  "ort": "Power Query → Rechtsklick auf Abfrage → Duplizieren / Verweis",
  "tags": ["Abfrage duplizieren oder referenzieren"],
  "synonyme": ["abfrage referenzieren", "abfrage duplizieren"],
  "verwandteThemen": ["pq-laden", "gruppieren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": ["https://learn.microsoft.com/en-us/power-query/queries-pane"],
  "screenshots":
    [
      {
        "src": "images/power-bi/pbi-abfragen.webp",
        "alt": "Das Kontextmenü bietet Duplizieren und Verweis.",
        "caption": "Das Kontextmenü bietet Duplizieren und Verweis.",
        "schritt": 1,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst zwei Varianten derselben Datenvorbereitung.

## Schritte

1. Unabhängige Variante: im Abfragenbereich Duplizieren wählen.
2. Gemeinsame Basis: Verweis wählen und darauf zusätzliche Schritte aufbauen.
3. Basisänderung testweise prüfen; Ladeziele bewusst festlegen.

## Beispiel

Die Basis bereinigt Konten; ein Verweis gruppiert sie nach Person. Eine Kopie übernimmt spätere Basisänderungen nicht automatisch.

## Typischer Fehler

Einen Verweis als garantierten Zwischenspeicher verstehen; Quellen können erneut ausgewertet werden.
