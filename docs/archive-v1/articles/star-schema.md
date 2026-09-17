---
{
  "id": "star-schema",
  "slug": "star-schema",
  "titel": "Star Schema: Fakten und Dimensionen",
  "bereich": "Power BI",
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Fakten enthalten Messwerte auf einer festgelegten Ebene. Dimensionen beschreiben, nach welchen Merkmalen diese Werte ausgewertet werden.",
  "tags":
    ["Faktentabelle", "Dimensionstabelle", "Fakt", "Dimension", "Datenmodell"],
  "synonyme":
    ["Faktentabelle", "Dimensionstabelle", "Fakt", "Dimension", "Datenmodell"],
  "verwandteThemen": ["beziehungen", "granularitaet", "datumstabelle"],
  "prozessBezug": [],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Im Sternschema liegt eine Faktentabelle in der Mitte. Dimensionstabellen liefern die beschreibenden Merkmale zum Filtern und Gruppieren.

## Synthetisches Modell

Demo_Bestand enthält je KONTO_ID und STICHTAG eine Zeile mit PRODUKT_ID und BESTAND_EUR. Demo_Produkt enthält je PRODUKT_ID eine eindeutige Zeile mit PRODUKTGRUPPE. Demo_Datum enthält je Datum eine Zeile.

Die Dimensionen filtern über 1:n-Beziehungen die Fakten. Beschreibungen stehen an einer klaren Stelle; Kennzahlen nutzen die Fakten.

## Warum brauche ich das?

Eine saubere Struktur macht Filterwege nachvollziehbar und reduziert widersprüchliche Beschreibungen. Mehrere Faktentabellen können dieselben Dimensionen nutzen, wenn die fachliche Bedeutung der Schlüssel übereinstimmt.

## Typischer Fehler

Planwerte je Produkt und Monat direkt an tägliche Kontobestände anhängen. Der Plan wird dabei möglicherweise pro Konto oder Tag wiederholt. Halte unterschiedliche Datenebenen getrennt und stimme die Auswertung über gemeinsame Dimensionen ab.

## Wenn du aus Excel kommst

Statt alle Attribute mit Nachschlageformeln in eine große Tabelle zu kopieren, können sie in einer Dimension bleiben. Eine Beziehung fügt keine neuen Zellwerte hinzu, sondern schafft einen Filterweg.

## Öffentliche Quelle

[Microsoft Learn: Sternschema in Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/star-schema)
