---
{
  "id": "excel-filtern",
  "slug": "excel-filtern",
  "titel": "FILTER, EINDEUTIG und SORTIEREN",
  "bereich": "Excel",
  "kategorie": "Filtern",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Dynamische Arrayfunktionen geben mehrere Ergebnisse aus: FILTER wählt Zeilen, EINDEUTIG entfernt Wiederholungen und SORTIEREN ordnet das Ergebnis.",
  "tags": ["FILTER", "EINDEUTIG", "SORTIEREN", "einzigartige Kunden"],
  "synonyme": ["FILTER", "EINDEUTIG", "SORTIEREN", "einzigartige Kunden"],
  "verwandteThemen": ["xverweis", "distinctcount", "excel-fehler"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Diese Funktionen liefern Ergebnisbereiche, die mit den Daten wachsen oder schrumpfen können. Der benötigte Ausgabebereich muss frei sein.

## Synthetisches Beispiel

A2:A5 enthält P001, P001, P002, P003. B2:B5 enthält die zugehörigen erfundenen Segmente.

```excel
=EINDEUTIG(A2:A5)
=SORTIEREN(EINDEUTIG(A2:A5))
=FILTER(A2:B5;B2:B5="Segment A";"Keine Treffer")
```

EINDEUTIG ergibt drei Personenkennungen. FILTER liefert nur die Zeilen des gewünschten Segments; SORTIEREN ordnet die Kennungen aufsteigend.

## Typischer Fehler

Bei #ÜBERLAUF! stehen Zellen im Ausgabebereich im Weg. Räume nur den vorgesehenen Ergebnisbereich frei. Dynamische Arrayformeln gehören außerhalb einer strukturierten Excel-Tabelle in einen freien Bereich.

## Wann brauche ich etwas anderes?

EINDEUTIG über mehrere Spalten prüft unterschiedliche Zeilenkombinationen. Für eindeutige Personen darf die Kontospalte nicht unbeabsichtigt Teil dieser Kombination sein. Leere Kennungen vor dem Zählen bewusst behandeln.

## Brücke zu Power BI

DISTINCTCOUNT liefert eine Anzahl im aktuellen Kontext. Excel EINDEUTIG erzeugt dagegen eine sichtbare Werteliste. Die Funktionen lösen verwandte, aber verschiedene Aufgaben.

## Versionshinweis

Die Beispiele benötigen eine Excel-Version mit dynamischen Arrays, etwa Microsoft 365 oder Excel 2021 und neuer.
