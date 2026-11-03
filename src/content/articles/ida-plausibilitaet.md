---
{
  "id": "ida-plausibilitaet",
  "slug": "ida-plausibilitaet",
  "titel": "Plausibilitätsprüfung und Fehlersuche in IDA",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Auffällige Ergebnisse über Zeilen, Schlüssel, Filter, NULL und Summen eingrenzen. Den ersten verändernden Verarbeitungsschritt finden statt das Endergebnis zu kaschieren.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida plausibilität",
    "ida fehlersuche",
    "ida count zu hoch",
    "ida summe vervielfacht",
    "ida null verschwindet",
    "ida bericht andere zahl"
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
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=query-create-join-relationship",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page"
  ]
}
---

## Wann brauche ich das?

Der Bericht zeigt eine andere Anzahl als erwartet, eine Summe vervielfacht sich oder eine neue Auswahl liefert keine Daten. Eine feste Kontrollfolge macht den Fehler lokalisierbar.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Halte Frage, Datenstand, Parameter und erwartete Zähleinheit fest.
2. Zeige eine überschaubare Detailmenge mit fachlichen Schlüsseln.
3. Zähle Zeilen über einen vollständigen Schlüssel und zusätzlich eindeutige Werte.
4. Vergleiche Summen, NULL und nicht zugeordnete Schlüssel vor/nach jedem Filter, Join oder Union.
5. Suche den ersten Schritt, an dem sich die Kontrollwerte unerwartet ändern.
6. Prüfe die Ursache an einzelnen bekannten Schlüsseln und einem Gegenbeispiel.
7. Nach der Korrektur auch leere Auswahl, Mehrfachtreffer und Gesamtergebnis erneut prüfen.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Ausgang: 3 Konten, 2 Personen, 350. Eine Zuordnungsabfrage enthält versehentlich zwei Partner zu P-A. Nach Join: K-A1/X/100, K-A1/Y/100, K-A2/X/200, K-A2/Y/200, K-B1/Z/50. Damit entstehen 5 Zeilen und 650. Ein DISTINCTCOUNT auf Konto zeigt weiterhin 3 und würde allein den falschen Betrag nicht aufdecken.

## Ergebnis

Die Ursache liegt bei der Partneranzahl der Zuordnungsabfrage. Eine fachlich eindeutige Zuordnung oder eine bewusst gewählte andere Ebene muss vor der weiteren Summierung hergestellt werden.

## Warum funktioniert das?

Mehrere Kontrollgrößen ergänzen sich. DISTINCTCOUNT kann eine Vervielfachung verdecken, eine unveränderte Zeilenzahl kann trotzdem geänderte Werte enthalten. Der erste auffällige Schritt grenzt die Ursache stärker ein als ein Vergleich nur der fertigen Ausgabe.

## Symptom → Prüfhinweis

| Symptom | Zuerst prüfen | Kontrollfrage |
|---|---|---|
| Nach Join mehr Zeilen | Partner je Verbindungsschlüssel | Gibt es mehrere passende rechte Zeilen? |
| COUNT zu hoch | Zähleinheit und Wiederholungen | Zähle ich Konten oder Personen? |
| COUNT DISTINCT anders als COUNT | Schlüssel und NULL | Welche Werte kommen mehrfach vor oder fehlen? |
| Summe vervielfacht | Join und Aggregationsebene | Wird derselbe Betrag mehrfach dargestellt? |
| Filter greift nicht wie erwartet | Klammern, Typ, Filterebene | Gilt die Bedingung vor oder nach Aggregation? |
| NULL verschwindet | Outer Join und nachfolgender Filter | Entfernt ein Vergleich die nicht zugeordneten Zeilen? |
| Prompt ohne Werte | Werteabfrage, Auswahltyp, Wert/Beschriftung | Wird die Werteliste bereits weggefiltert? |
| Bericht anders als Detailtabelle | gleicher Datenstand und Kontext | Sind Auswahl, Gruppierung und Rollup identisch? |

## Kontrolle nach jeder Änderung

Für Filter ausgeschlossene Zeilen erklären. Für Join zusätzlich ungematchte und mehrfach passende Schlüssel prüfen. Für Union die erwartete Eingabesumme mit der gewählten Duplikatbehandlung vergleichen. Für Berechnungen NULL und Grenzwerte testen. Eine Stichprobe ergänzt diese Summenprüfung, ersetzt sie aber nicht.

## Typischer Fehler

Nur das Endergebnis plausibel aussehen lassen, etwa durch DISTINCT, Ausblenden oder einen pauschalen NULL-Ersatz. Eine Reparatur braucht eine geklärte fachliche Ursache.

## Plausibilitätscheck

Kontrollprotokoll vorher 3/2/350 und nach korrektem n:1-Join wieder 3/2/350. Bei Segment A danach 2/1/300. Jede bewusste Abweichung muss sich auf konkrete ein- oder ausgeschlossene Zeilen zurückführen lassen.
