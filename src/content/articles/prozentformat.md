---
{
  "id": "prozentformat",
  "slug": "prozentformat",
  "titel": "0,95 als 95 % anzeigen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Bericht",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ein Prozentformat stellt den Dezimalwert 0,95 als 95 % dar. Die Formel bleibt numerisch.",
  "ort": "Power BI Desktop → Berichtsansicht",
  "tags": ["0,95 als 95 % anzeigen"],
  "synonyme": ["0 95 statt 95", "prozentwert", "prozentformat"],
  "verwandteThemen": ["divide", "anzeigeeinheiten"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Quote erscheint als Dezimalzahl.

## Schritte

1. DIVIDE oder eine andere numerische Quotientenformel prüfen.
2. Measure markieren und Format Prozent wählen.
3. Dezimalstellen sowie Anzeige im Visual kontrollieren.

## Beispiel

```dax
Planerreichung = DIVIDE ( [Ist], [Plan] )
```

95 / 100 = 0,95 → Anzeige 95 %.

## Typischer Fehler

Mit 100 multiplizieren und zusätzlich Prozentformat setzen: Das zeigt 9500 %.
