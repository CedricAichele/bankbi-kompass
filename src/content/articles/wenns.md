---
{
  "id": "wenns",
  "slug": "wenns",
  "titel": "WENNS: geordnete Regeln",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENNS gibt das Ergebnis der ersten wahren Bedingung zurück. Ein abschließender WAHR-Fall kann den Rest abdecken.",
  "ort": "Excel → Formelzelle",
  "tags": ["WENNS: geordnete Regeln"],
  "synonyme": ["wenns"],
  "verwandteThemen": ["excel-fehler", "und"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-DE/Excel/excel-functions-alphabetical"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du klassifizierst synthetische Beträge in Größenklassen.

## Schritte

1. Spezielle Bedingungen zuerst formulieren.
2. Je Bedingung ein Ergebnis angeben.
3. Grenzwerte und einen abschließenden Restfall prüfen.

## Beispiel

```excel
=WENNS(C2>=1000;"Ab 1000";C2>=100;"Ab 100";WAHR;"Unter 100")
```

## Typischer Fehler

Breite Bedingungen zuerst prüfen, sodass spätere Regeln nie greifen.
