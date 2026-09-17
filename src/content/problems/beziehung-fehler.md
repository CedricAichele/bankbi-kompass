---
{
  "id": "beziehung-fehler",
  "slug": "beziehung-fehler",
  "titel": "Beziehung lässt sich nicht erstellen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Prüfe eindeutige Schlüssel auf der 1-Seite und kompatible Datentypen auf beiden Seiten.",
  "ort": "Power Query → Schlüsselprüfung; Power BI → Modellansicht",
  "tags": ["Beziehung lässt sich nicht erstellen", "Datenqualität"],
  "synonyme": [],
  "verwandteThemen": ["beziehungen", "dubletten", "datenbereinigung"],
  "kontexte": ["Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "problem",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Power BI akzeptiert die gewünschte 1:n-Beziehung nicht.

## Schritte

1. Wiederholte und leere Dimensionsschlüssel suchen.
2. Schlüsseltypen und Leerzeichen angleichen.
3. Mehrdeutige Modellwege kontrollieren und erneut prüfen.

## Beispiel

PRODUKT_ID PR-A darf in der Produktdimension einmal, in den Fakten mehrfach stehen.

## Typischer Fehler

Widersprüchliche Dimensionszeilen blind löschen oder n:m wählen, nur damit der Dialog schließt.
