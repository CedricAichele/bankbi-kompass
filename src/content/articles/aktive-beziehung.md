---
{
  "id": "aktive-beziehung",
  "slug": "aktive-beziehung",
  "titel": "Aktive und inaktive Beziehung",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI"],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Aktive Beziehungen übertragen Filter standardmäßig. Eine inaktive Beziehung benötigt für ein Measure eine bewusste Aktivierung.",
  "ort": "Power BI Desktop → Modellansicht",
  "tags": ["Aktive und inaktive Beziehung"],
  "synonyme": ["inaktive beziehung", "userelationship"],
  "verwandteThemen": ["mehrere-datumsbeziehungen", "datumstabelle"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://learn.microsoft.com/en-us/power-bi/guidance/relationships-active-inactive",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Vorgang hat Start- und Enddatum.

## Schritte

1. Standard-Datumsrolle festlegen und aktive Linie prüfen.
2. Alternative Beziehung inaktiv lassen, wenn sonst ein mehrdeutiger Filterpfad entsteht.
3. Für die alternative Auswertung USERELATIONSHIP im passenden Measure verwenden.

## Beispiel

```dax
Abgeschlossene Vorgänge =
CALCULATE ( COUNTROWS ( Demo_Vorgaenge ),
    USERELATIONSHIP ( Demo_Datum[Date], Demo_Vorgaenge[Enddatum] ) )
```

## Typischer Fehler

Start- und Enddatum gleichzeitig über dieselbe Achse filtern wollen, ohne die Rollen zu trennen.
