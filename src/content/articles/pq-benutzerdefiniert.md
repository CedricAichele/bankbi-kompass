---
{
  "id": "pq-benutzerdefiniert",
  "slug": "pq-benutzerdefiniert",
  "titel": "Benutzerdefinierte Spalte",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine benutzerdefinierte Spalte berechnet mit M einen Wert je Zeile während der Aktualisierung.",
  "ort": "Power Query → Spalte hinzufügen → Benutzerdefinierte Spalte",
  "tags": ["Benutzerdefinierte Spalte"],
  "synonyme": ["benutzerdefinierte spalte"],
  "verwandteThemen": ["pq-bedingt", "measure-spalte"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://learn.microsoft.com/en-us/power-query/add-custom-column"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst eine feste Abweichung je Plan-/Ist-Zeile.

## Schritte

1. Spalte hinzufügen → Benutzerdefinierte Spalte öffnen.
2. Spalten über die Auswahl einsetzen und M-Ausdruck eingeben.
3. Ergebnistyp festlegen; Null- und Fehlerfälle prüfen.

## Beispiel

```m
[Neugeschaeft_EUR] - [Plan_EUR]
```

80 minus 100 ergibt −20 Euro.

## Typischer Fehler

DAX-Syntax in den M-Editor einsetzen oder eine dynamische Berichtsquote hier festschreiben.
