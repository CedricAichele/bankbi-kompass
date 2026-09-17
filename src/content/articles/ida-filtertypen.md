---
{
  "id": "ida-filtertypen",
  "slug": "ida-filtertypen",
  "titel": "Text-, Zahlen- und Datumsfilter",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Vergleiche Werte in ihrem tatsächlichen Datentyp. Eine formatierte Anzeige ist keine verlässliche Filterbasis.",
  "ort": "Allgemeines Filterprinzip; konkrete IDA-Ausdruckssyntax TODO",
  "tags": ["Text-, Zahlen- und Datumsfilter"],
  "synonyme": ["textfilter", "zahlenfilter", "datumsfilter"],
  "verwandteThemen": ["ida-filter", "ida-null"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Datums- oder Betragsfilter liefert unerwartete Zeilen.

## Schritte

1. Typ und fachlichen Vergleich bestimmen: exakt, Bereich oder Textmuster.
2. Bei Zeitstempeln einen Bereich mit inklusivem Beginn und exklusivem Folgetag verwenden.
3. Grenzwerte, Groß-/Kleinschreibung und fehlende Werte testen.

## Beispiel

Für März: ab 01.03.2026 einschließlich und vor 01.04.2026. Dadurch sind alle Uhrzeiten des 31.03. enthalten.

## Typischer Fehler

Text „100“ und „20“ lexikalisch statt numerisch vergleichen.
