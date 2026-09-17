---
{
  "id": "distinctcount",
  "slug": "distinctcount",
  "titel": "DISTINCTCOUNT: eindeutige Kunden zählen",
  "bereich": "Power BI",
  "kategorie": "DAX",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zeilen, Konten und Personen sind unterschiedliche Zählgrößen. DISTINCTCOUNT zählt unterschiedliche Werte einer Spalte im aktuellen Filterkontext.",
  "tags":
    [
      "einzigartige Kunden",
      "eindeutige Kunden",
      "Kundenanzahl",
      "COUNTROWS",
      "COUNT",
      "mehrere Zeilen",
    ],
  "synonyme":
    [
      "einzigartige Kunden",
      "eindeutige Kunden",
      "Kundenanzahl",
      "COUNTROWS",
      "COUNT",
      "mehrere Zeilen",
    ],
  "verwandteThemen": ["granularitaet", "kundenstruktur", "beziehungen"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Eine Person mit zwei Konten erzeugt in einer Kontotabelle zwei Zeilen. Das sind zwei Konten, aber nur eine Person.

## Vollständig synthetisches Beispiel

| PERSON_ID | KONTO_ID |
| --------- | -------- |
| P001      | K-A      |
| P001      | K-B      |
| P002      | K-C      |

```dax
Zeilen = COUNTROWS ( Demo_Konto )
Personen = DISTINCTCOUNT ( Demo_Konto[PERSON_ID] )
```

Ergebnis: 3 Zeilen, 2 Personen. COUNT auf einer Spalte zählt deren nichtleere unterstützte Werte, nicht automatisch Personen.

## Typischer Fehler

DISTINCTCOUNT zählt BLANK als eigenen unterschiedlichen Wert mit. Prüfe fehlende Schlüssel oder verwende nach fachlicher Klärung DISTINCTCOUNTNOBLANK.

## Warum stimmt die Gesamtsumme nicht mit den Zeilen überein?

Eine Person kann in mehreren Produktgruppen vorkommen. Pro Produktgruppe wird sie jeweils einmal gezählt; im Gesamtergebnis nur einmal. Eindeutige Anzahlen sind über solche Gruppen nicht additiv.

## Wenn du aus Excel kommst

EINDEUTIG liefert die Liste unterschiedlicher Werte. DISTINCTCOUNT liefert direkt die Anzahl im Filterkontext. Auch bei EINDEUTIG musst du vorher festlegen, welche Spalte die Person identifiziert.
