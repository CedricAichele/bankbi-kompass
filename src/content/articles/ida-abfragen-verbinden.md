---
{
  "id": "ida-abfragen-verbinden",
  "slug": "ida-abfragen-verbinden",
  "titel": "Abfragen verbinden: Join, Union, Intersect, Except",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die gewünschte Ergebnisstruktur vor der Verbindung festlegen: Join ergänzt Spalten, Mengenoperationen kombinieren vergleichbare Zeilen. Trefferzahlen und Summen bleiben prüfbar.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida join",
    "ida union",
    "ida intersect",
    "ida except",
    "ida abfragen verbinden",
    "ida mehr zeilen nach join"
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
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=subjects-creating-query-sets",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-create-detail-summary-filter"
  ]
}
---

## Wann brauche ich das?

Zusätzliche Attribute sollen zu einer Auswertung hinzukommen oder gleich strukturierte Datenmengen sollen gemeinsam ausgewertet werden. Die Wahl hängt davon ab, ob du Spalten ergänzen oder Zeilenmengen kombinieren willst.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Beschreibe die gewünschte Ergebnisebene und die Zeilenebene beider Eingaben.
2. Entscheide Join für Attribute oder eine Mengenoperation für vergleichbare Zeilen.
3. Prüfe Schlüssel, Datentypen, NULL und Anzahl passender Partner.
4. Bei Join die Verbindungsspalten und gewünschte Ein-/Ausschlussregel festlegen. Mehrere Spalten können gemeinsam den fachlichen Schlüssel bilden.
5. In Cognos Reporting die beteiligten Abfragen im Abfragebereich verbinden und die Beziehung definieren; konkrete Rechte und IDA-Ansicht prüfen.
6. Für Mengenoperationen Bedeutung, Reihenfolge und kompatible Typen der Ausgabespalten angleichen.
7. Erst danach Zeilen, eindeutige Schlüssel, Trefferquote und Summen vergleichen.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Eine zweite synthetische Abfrage hat je Person genau eine Zuordnung: P-A → Gruppe X; P-B → Gruppe Y. Ein Join über Person ergänzt die Gruppe zu allen drei Kontozeilen. Die Zeilenebene bleibt Konto.

Problemfall: P-A hat in der zweiten Abfrage zwei passende Zuordnungen X und Y. Dann erscheinen K-A1 und K-A2 jeweils zweimal; mit K-B1 sind es 5 Zeilen. Die Konto-Beträge ergeben fälschlich addiert 650 statt 350.

## Ergebnis

Bei eindeutiger Zuordnung: 3 Konten, 2 Personen und Betrag 350. Mit zwei Partnern zu P-A: 5 Ergebniszeilen und wiederholte Beträge. Ob dies fachlich erlaubt ist, entscheidet die gewünschte Ebene.

## Warum funktioniert das?

Ein Join erzeugt passende Kombinationen. 1:1 erwartet höchstens einen passenden Partner auf beiden Seiten, 1:n beziehungsweise n:1 lässt Mehrfachpartner auf einer Seite zu. Bei n:m können sich die Kombinationen beider Seiten vervielfachen. Eine deklarierte Kardinalität macht tatsächlich doppelte Schlüssel nicht eindeutig.

## Join bewusst wählen

Ein Inner Join lässt nur passende Kombinationen zu. Ein Left Outer Join kann linke Zeilen ohne Partner erhalten; ergänzte Attribute bleiben dann NULL. Ein späterer Filter auf ein rechtes Attribut kann diese Zeilen trotzdem entfernen. Bei zeitabhängigen Daten kann Person allein zu wenig sein: etwa Person und Stichtag gemeinsam prüfen. Modellierte Beziehungen bevorzugen; ad-hoc-Berichtsjoins nachvollziehbar begründen.

## Union, Intersect und Except

| Operation | Bedeutung | Synthetisches Ergebnis für links A,A,B und rechts A,C |
|---|---|---|
| UNION | Alle unterschiedlichen Zeilen | A,B,C |
| UNION ALL | Beide Eingaben mit Wiederholungen | A,A,B,A,C |
| INTERSECT | Gemeinsame Zeilen | A |
| EXCEPT | Links ohne die rechts vorhandenen Zeilen | B |

IBM dokumentiert auch ALL-Varianten für Query Sets. Welche Variante der konkrete Reporting-/Datenquellenkontext anbietet, muss geprüft werden. Unterschiedlich benannte oder vertauschte Spalten nicht nur wegen ähnlicher Werte untereinander kombinieren. EXCEPT ist richtungsabhängig.

## Typischer Fehler

UNION mit Join verwechseln oder vervielfachte Beträge durch DISTINCT auf Messwerten kaschieren. Unterschiedliche Konten können denselben Betrag haben und müssen trotzdem getrennt bleiben.

## Plausibilitätscheck

Vor Join 3 Zeilen/350 dokumentieren. Nach einem erwarteten n:1-Join müssen diese Größen erhalten bleiben. Zusätzlich nicht zugeordnete Schlüssel zählen. Bei 5/650 die Mehrfachpartner von P-A untersuchen, bevor weitere Berechnungen folgen.
