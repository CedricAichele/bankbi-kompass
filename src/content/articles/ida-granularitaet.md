---
{
  "id": "ida-granularitaet",
  "slug": "ida-granularitaet",
  "titel": "Granularität und Zeilenebene in IDA",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Zeile je Person ist etwas anderes als eine Zeile je Konto oder Vorgang. Die richtige Ebene schützt Zählungen und Summen vor unbemerkter Vervielfachung.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida granularität",
    "ida zeilenebene",
    "count rows ida",
    "ida count distinct",
    "mehrfachzeilen ida"
  ],
  "verwandteThemen": [
    "ida-erste-auswertung",
    "ida-filter-praxis",
    "ida-prompts",
    "ida-abfragen-verbinden"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=query-create-join-relationship",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations"
  ]
}
---

## Wann brauche ich das?

Eine Anzahl wirkt zu hoch, nach einem Join entstehen zusätzliche Zeilen oder du willst von Konten auf Personen verdichten. Kläre die Zähleinheit vor der Verknüpfung.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Beschreibe die Quellzeile: Person, Konto, Person × Konto, Konto × Stichtag oder Vorgang.
2. Bestimme den fachlichen Schlüssel dieser Ebene; gegebenenfalls aus mehreren Merkmalen.
3. Vergleiche Zeilenanzahl mit Anzahl gefüllter und eindeutiger Schlüssel.
4. Lege die gewünschte Ergebnisebene fest.
5. Prüfe für jede Verbindung, wie viele Partner pro Schlüssel vorkommen.
6. Verdichte nur dann vor einem Join, wenn die fachliche Frage diese Verdichtung erlaubt.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Ohne Gruppierung sind es drei Konten. Person P-A erscheint zweimal, weil sie zwei unterschiedliche Konten hat. Mit Person als Ergebnisgruppe entstehen zwei Zeilen: P-A/300 und P-B/50. Eine Vorgangstabelle könnte wiederum mehrere Vorgänge je Konto enthalten; ihre Zeilenzahl wäre keine Kontoanzahl.

| Ausdruck im Cognos-Berichtsgesamt | Erwartung |
|---|---:|
| count([Konto] for report) | 3 |
| count(distinct [Person] for report) | 2 |
| total([Betrag] for report) | 350 |

## Ergebnis

Eine Kontoauswertung zeigt 3 Detailzeilen, eine Personenauswertung 2 Ergebniszeilen. Beide können korrekt sein und denselben Betrag 350 erklären. `COUNT(rows)` ist hier eine Fragestellung, keine pauschal kopierbare Cognos-Funktion. Für Zeilen einen zuverlässig gefüllten Schlüssel zählen.

## Warum funktioniert das?

COUNT eines Datenelements zählt vorhandene Werte und lässt NULL aus. DISTINCT bezieht sich auf den gewählten Wert, nicht automatisch auf die gesamte fachliche Zeile. Auch zwei gleiche Beträge sind nicht dieselbe Kontobeziehung. Ein späterer Join kann dieselbe Kontozeile mehrfach abbilden.

## Join und Dubletten

Hat P-A zusätzlich zwei passende Klassifizierungen, treffen beide auf jedes ihrer zwei Konten: vier P-A-Zeilen statt zwei. Mit der unveränderten P-B-Zeile entstehen 5 Zeilen und fälschlich aufsummiert 650. Die Quelle hatte weiterhin nur 3 Konten und 350. DISTINCT auf den Beträgen wäre keine fachlich sichere Reparatur. [Join prüfen](#/wissen/ida-abfragen-verbinden).

## Was muss ich anpassen?

Eigenen fachlichen Schlüssel und Datenstand einsetzen. Bei Person × Konto sind mehrere Konten je Person normal; bei Konto × Stichtag sind mehrere Stichtage normal. Erst echte Wiederholungen derselben fachlichen Zeile separat untersuchen.

## Typischer Fehler

Mehrfachzeilen allein anhand der Personennummer löschen. Dadurch würde für P-A eines der beiden korrekten Konten verloren gehen.

## Plausibilitätscheck

Zähle 3 Konten und 2 Personen. P-A/300 plus P-B/50 ergibt 350. Werden nach einem Join 5 Zeilen und 650 sichtbar, an der ersten vervielfachenden Verbindung ansetzen.
