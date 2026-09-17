---
{
  "id": "beziehung-oder-merge",
  "slug": "beziehung-oder-merge",
  "titel": "Beziehung oder Zusammenführen?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Beziehung erhält getrennte Modelltabellen und überträgt Filter. Zusammenführen erzeugt eine angereicherte Tabelle beim Laden.",
  "ort": "Kurze Auswahlhilfe nach Arbeitssituation",
  "tags": ["Beziehung oder Zusammenführen?"],
  "synonyme": ["beziehung oder zusammenführen"],
  "verwandteThemen": ["beziehungen", "zusammenfuehren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Segmentinformationen sollen Konten zugeordnet werden.

## Schritte

1. Benötigst du einen Modellfilter oder eine physisch ergänzte Ausgabetabelle?
2. Für Modellfilter Dimension und Fakten getrennt halten.
3. Für einen Export notwendige Spalten zusammenführen und Zeilenanzahl prüfen.

## Beispiel

Bericht nach Segment filtern → Beziehung. Flache Excel-Liste mit Segmentspalte → Zusammenführen.

## Typischer Fehler

Beziehungen und Joins für austauschbar halten; ein Join kann Zeilen vervielfachen.
