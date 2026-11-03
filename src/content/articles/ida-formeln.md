---
{
  "id": "ida-formeln",
  "slug": "ida-formeln",
  "titel": "IDA / Cognos – Formeln & Funktionen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Formeln & Funktionen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nach Aufgabe suchen, ein passendes Cognos-Muster verstehen und den Eingabekontext beachten. Häufige Ausdrücke zuerst; OLAP und datenquellenabhängiges SQL bewusst getrennt.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Formeln & Funktionen",
    "synthetisch"
  ],
  "synonyme": [
    "ida formeln",
    "cognos formeln",
    "ida funktionen",
    "cognos funktionen"
  ],
  "verwandteThemen": [
    "ida-erste-auswertung",
    "ida-granularitaet",
    "ida-filter-praxis",
    "ida-prompts"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Referenz",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=editor-creating-expressions",
    "https://public.dhe.ibm.com/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=behavior-selecting-function-sets",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=macros-creating-prompts-using-query"
  ]
}
---

## Wann brauche ich das?

Du kennst die fachliche Aufgabe, aber noch nicht den passenden Ausdruck. Die Schnellreferenz erklärt 40 häufige Funktionen und Muster.

## Schritte

1. Wähle eine Aufgabe oder suche nach einem Begriff.
2. Prüfe Herkunft, Kategorie und Eingabeort.
3. Vergleiche Ausgangswert, Ausdruck und erwartetes Ergebnis.
4. Passe Datenelemente und fachliche Regeln an und validiere den Ausdruck.
5. Nutze den erweiterten Katalog nur für gezielt benötigte Spezialfälle.

## Beispiel

Drei Kontozeilen zu den Personen P-A, P-A, P-B: count([Konto] for report) zählt drei gefüllte Kontoschlüssel, count(distinct [Person] for report) zählt zwei Personen. Die UI erklärt die Ausdrücke einzeln.

## Ergebnis

Ein zum Eingabekontext passender Ausdruck mit erwartbarem Ergebnis. Herkunft und Verfügbarkeit bleiben sichtbar.

## Warum funktioniert das?

Cognos-Berichtsberechnungen, Makroblöcke, dimensionale Modelle und SQL der Datenquelle verwenden unterschiedliche Sprach- und Ausführungskontexte. Ähnliche Namen sind keine Austauschbarkeitsgarantie.

## Typischer Fehler

Eine SQL-Funktion als universelle Cognos-Berichtsformel kopieren oder Pflichtparameter, NULL und Aggregationsumfang ungeprüft übernehmen.

## Plausibilitätscheck

Ein passendes synthetisches Beispiel und mindestens einen Grenzfall testen. Die Referenz führt keine Abfragen gegen ein IDA-System aus.
