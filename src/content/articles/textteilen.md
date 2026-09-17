---
{
  "id": "textteilen",
  "slug": "textteilen",
  "titel": "TEXTTEILEN: Text dynamisch verteilen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEXTTEILEN teilt Text anhand eines Trennzeichens in mehrere Zellen. Der Ausgabebereich muss frei sein.",
  "ort": "Excel → Formelzelle",
  "tags": ["TEXTTEILEN: Text dynamisch verteilen"],
  "synonyme": ["textteilen"],
  "verwandteThemen": ["excel-text-teilen", "text-trennzeichen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-de/excel/text-functions-reference"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Eine Demo-Liste enthält mehrere Produktgruppen in einer Zelle.

## Schritte

1. In Microsoft 365 / Excel 2024 eine freie Ausgabezelle wählen.
2. Text und Spaltentrennzeichen angeben.
3. Leere Elemente und die Breite des Ergebnisses prüfen.

## Beispiel

```excel
=TEXTTEILEN(A2;";")
```

A;B;C wird zu drei nebeneinanderliegenden Zellen.

## Typischer Fehler

Die Formel in einer Excel-Tabelle ausgeben, in der dynamische Arrays nicht überlaufen können.
