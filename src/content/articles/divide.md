---
{
  "id": "divide",
  "slug": "divide",
  "titel": "DIVIDE: Quote berechnen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "DIVIDE teilt Zähler durch Nenner und liefert bei Nenner 0 oder BLANK standardmäßig BLANK.",
  "ort": "Power BI → Neues Measure",
  "tags": ["DIVIDE: Quote berechnen", "Marktsteuerung", "Neugeschäft"],
  "synonyme": [],
  "verwandteThemen": ["plan-ist", "blank", "measure"],
  "kontexte": ["Marktsteuerung", "Neugeschäft"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du berechnest Planerreichung oder einen Anteil.

## Schritte

1. Zähler und Nenner als fachlich passende Measures definieren.
2. DIVIDE verwenden und Ergebnis als Prozent formatieren.
3. Gesamtquote separat auf Plausibilität prüfen.

## Beispiel

```dax
Planerreichung = DIVIDE ( [Ist], [Plan] )
```

Ist = 80, Plan = 100 → 80 %. Beide Measures müssen denselben Zeitraum abdecken.

## Typischer Fehler

Einzelquoten addieren: Die Gesamtquote muss normalerweise aus Gesamtzähler und Gesamtnenner entstehen.
