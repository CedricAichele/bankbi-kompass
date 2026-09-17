---
{
  "id": "sortierennach",
  "slug": "sortierennach",
  "titel": "SORTIERENNACH: nach mehreren Feldern sortieren",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SORTIERENNACH erzeugt eine dynamisch sortierte Ergebnisliste anhand separater Sortierbereiche.",
  "ort": "Excel Desktop → Datenliste / Formelzelle",
  "tags": ["SORTIERENNACH: nach mehreren Feldern sortieren"],
  "synonyme": ["sortierennach"],
  "verwandteThemen": ["sortieren", "excel-filtern"],
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

Segmente sollen alphabetisch, Beträge innerhalb des Segments absteigend stehen.

## Schritte

1. Ausgabebereich frei halten; Funktion in Microsoft 365 / Excel 2021 oder neuer verwenden.
2. Datenmatrix und gleich lange Sortierbereiche angeben.
3. Für jedes Kriterium 1 aufsteigend oder −1 absteigend festlegen.

## Beispiel

```excel
=SORTIERENNACH(A2:C9;B2:B9;1;C2:C9;-1)
```

## Typischer Fehler

Quellzeilen umsortieren wollen, obwohl die Formel nur eine neue Ansicht erzeugt.
