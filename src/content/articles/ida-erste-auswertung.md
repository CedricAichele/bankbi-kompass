---
{
  "id": "ida-erste-auswertung",
  "slug": "ida-erste-auswertung",
  "titel": "Erste IDA-Auswertung aufbauen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine fachliche Frage in eine prüfbare Liste überführen: Datenelemente wählen, Zeilenebene sichern, filtern, berechnen und das Ergebnis kontrollieren.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "erste auswertung",
    "ida auswertung erstellen",
    "ida bericht",
    "reporting workflow"
  ],
  "verwandteThemen": [
    "ida-granularitaet",
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
  "ebene": "Kernwissen",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions"
  ]
}
---

## Wann brauche ich das?

Du hast Zugriff auf eine geeignete Quelle und möchtest eine neue Arbeitsliste oder Kennzahl aufbauen. Ziel ist zuerst eine überprüfbare Ausgabe, nicht sofort eine umfangreiche Berichtsoberfläche.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Schreibe die fachliche Frage auf: beispielsweise Konten und Betrag je Person an einem festgelegten Datenstand.
2. Wähle die passende Datenebene. Halte fest: Eine Zeile beschreibt ein Konto am Stichtag.
3. Füge Person, Konto, Stichtag und Betrag als Datenelemente hinzu.
4. Zeige eine kleine Detailmenge und prüfe vollständige sowie eindeutige Schlüssel.
5. Ergänze die gewünschte fachliche Auswahl als Filter; prüfe vorher/nachher.
6. Lege berechnete Datenelemente oder Aggregationen an und validiere ihre Ausdrücke.
7. Wähle eine Liste für Details oder eine Kreuztabelle für verdichtete Vergleiche.
8. Prüfe Anzahl der Konten, eindeutige Personen, Summen und fehlende Werte.
9. Teste die vorgesehene Ausgabe einschließlich Filter- und Parameterauswahl.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Zunächst alle drei Detailzeilen anzeigen. Danach nur Segment A wählen. Die Auswahl trifft K-A1 und K-A2. Beide Konten gehören derselben Person; keine Zeile entfernen. Für das Berichtsgesamt können im Cognos-Ausdruckseditor `count([Konto] for report)`, `count(distinct [Person] for report)` und `total([Betrag] for report)` verwendet werden. Namen aus der eigenen Quelle einsetzen.

## Ergebnis

Vor Auswahl: 3 Konten, 2 Personen, Betrag 350. Nach Segment A: 2 Konten, 1 Person, Betrag 300. Eine gruppierte Liste je Person hat danach eine Ergebniszeile mit 300.

## Warum funktioniert das?

Filter bestimmen die enthaltene Datenmenge. Gruppierung bestimmt die angezeigte Ebene. Aggregation berechnet den Kennzahlenwert innerhalb dieses Umfangs. Das sind getrennte Entscheidungen. Ein Berichtsgesamt ist nicht einfach die sichtbare Zeilenzahl einer gruppierten Liste.

## Was muss ich anpassen?

Die erfundenen Spalten Person, Konto, Segment und Betrag durch passende Datenelemente ersetzen. Einen fachlich passenden Stichtag wählen. Bei Zeitstempeln die Abgrenzung eines Tages ausdrücklich prüfen. Einen ausgeblendeten Schlüssel bei der Kontrolle zunächst mit anzeigen.

## Typischer Fehler

Nur das fertige Layout prüfen. Eine schön formatierte Summe kann auf einer falschen Zeilenebene beruhen. Erst Details und Kontrollwerte prüfen, dann die Ausgabe vereinfachen.

## Plausibilitätscheck

Segment A muss genau die Konten K-A1 und K-A2 enthalten. P-B darf in dieser Auswahl nicht vorkommen. Rücknahme des Filters muss wieder 3 Konten, 2 Personen und 350 ergeben.
