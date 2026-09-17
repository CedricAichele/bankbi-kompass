---
{
  "id": "related",
  "slug": "related",
  "titel": "RELATED: Wert aus einer Beziehung holen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "RELATED holt in einem Zeilenkontext einen passenden Wert von der eindeutigen Seite einer geeigneten Beziehung.",
  "ort": "Power BI → Neue Spalte; aktive n:1-Beziehung erforderlich",
  "tags": ["RELATED: Wert aus einer Beziehung holen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["beziehungen", "berechnete-spalte", "xverweis"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine berechnete Spalte braucht ein Attribut der verbundenen Produktdimension.

## Schritte

1. Eindeutige Produktschlüssel und Beziehung prüfen.
2. RELATED auf das Dimensionsattribut anwenden.
3. Fehlende Zuordnungen kontrollieren.

## Beispiel

```dax
Produktgruppe = RELATED ( Demo_Produkt[GRUPPE] )
```

Die Formel steht in Demo_Bestand; dessen PRODUKT_ID verweist auf Demo_Produkt.

## Typischer Fehler

Ein Measure ohne passenden Zeilenkontext verwenden oder Attribute unnötig in alle Faktzeilen kopieren.
