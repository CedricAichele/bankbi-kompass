---
{
  "id": "ida-orientierung",
  "slug": "ida-orientierung",
  "titel": "IDA / Cognos verstehen",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Auswertungen & Reporting",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Von der fachlichen Frage zur kontrollierten Auswertung: Zeilenebene, Auswahl, Berechnung und Ausgabe als zusammenhängenden Arbeitsablauf verstehen.",
  "ort": "Cognos Reporting: Quelle, Abfrage oder Ausdruckseditor je Aufgabe; tatsächliche IDA-Oberfläche prüfen",
  "tags": [
    "Auswertungen & Reporting",
    "synthetisch"
  ],
  "synonyme": [
    "ida",
    "agree21 ida",
    "agree21ida",
    "cognos",
    "auswertung",
    "bericht"
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
  "ebene": "Kernwissen",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://www.rurberatung.de/",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=editor-creating-expressions",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-using-relational-calculations"
  ]
}
---

## Wann brauche ich das?

Du willst eine wiederkehrende Frage beantworten und vor der Formelerstellung wissen, welche Daten du wirklich brauchst. Der Bereich verbindet allgemeine Cognos-Methoden mit dem Arbeitskontext agree21IDA. Er beschreibt keine bankindividuelle Installation.

## Voraussetzungen

Allgemeines Reportingprinzip für relationale Daten. Die Datenelemente und Werte sind vollständig erfunden. Bezeichnungen, verfügbare Funktionen und Bedienung können je Cognos-/IDA-Version, Datenquelle und Berechtigung abweichen. Verwende eine bereits zugelassene Quelle und kläre ihre fachliche Bedeutung.

## Schritte

1. Formuliere die Frage mit Zähleinheit, Zeitraum und gewünschtem Ergebnis.
2. Kläre, ob die Quelle Personen, Konten, Vorgänge oder bereits verdichtete Werte enthält.
3. Wähle nur die dafür benötigten Datenelemente und einen bekannten Datenstand.
4. Setze fachliche Filter und bei wiederholter Nutzung passende Parameter.
5. Verbinde zusätzliche Daten erst nach einer Prüfung der Verbindungsschlüssel.
6. Berechne Kennzahlen auf der gewünschten Ergebnisebene und zeige eine prüfbare Detailansicht.
7. Vergleiche Zeilen, eindeutige Schlüssel, NULL-Werte und Summen mit den Ausgangswerten.

## Beispiel

| Person | Konto | Segment | Region | Produkt | Betrag |
|---|---|---|---|---|---:|
| P-A | K-A1 | A | Nord | Giro | 100 |
| P-A | K-A2 | A | Nord | Giro | 200 |
| P-B | K-B1 | B | Süd | Depot | 50 |

Die Frage lautet: Wie viele Personen mit Konten sind enthalten und wie hoch ist der Betrag an diesem einen Stichtag? Eine Zeile beschreibt ein Konto. Zwei Kontozeilen gehören zu P-A. [Granularität verstehen](#/wissen/ida-granularitaet).

## Ergebnis

Drei Kontozeilen, zwei Personen, Betrag 350. Eine reine Zeilenanzahl von 3 beantwortet nicht die Personenfrage. Die Ausgabe kann als Liste zur Prüfung und als verdichtete Auswertung genutzt werden.

## Warum funktioniert das?

Die Methode trennt Quelle, fachliche Auswahl, Berechnung und Darstellung. Ein Bericht führt diese Entscheidungen zusammen; er ersetzt sie nicht. Die öffentliche Bezeichnung agree21IDA ist bei einem spezialisierten Anbieter belegt. Daraus folgt keine Zusage, dass jede Funktion einer bestimmten Cognos-Version in jeder IDA-Umgebung verfügbar ist.

## Analyse und Folgeprozess

Eine Auswertung beschreibt zunächst eine Datenmenge. Ein möglicher späterer Geschäftsvorfall oder eine Bestandsänderung ist eine eigene fachliche Entscheidung. [GVM](#/wissen/ida-gvm) und [aCI-Batch](#/wissen/ida-ci-batch) behandeln deshalb bewusst Konzepte und Kontrollen, keine technischen Schnittstellen oder internen Abläufe.

## Typischer Fehler

Mit einer fertigen Formel beginnen, obwohl Zähleinheit, Datenstand und gewünschte Granularität noch unklar sind. Mehrfachzeilen anschließend zu löschen kann korrekte Konten entfernen.

## Plausibilitätscheck

Prüfe die drei Kontoschlüssel K-A1, K-A2, K-B1. P-A hat zusammen 300, P-B 50. Zusammen bleibt es bei 350. Nach jeder Änderung sind diese Kontrollwerte erneut erklärbar.
