---
{
  "id": "ida-gvm",
  "slug": "ida-gvm",
  "titel": "GVM",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "GVM",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Meine Merkpunkte zu Geschäftsvorfallmanagement: Zusammenhang mit IDA, Vorlagenbezug, Fallmenge und Abgleich mit der nachgelagerten Bearbeitung.",
  "ort": "Persönliche IDA-Arbeitsnotizen",
  "tags": [
    "GVM",
    "IDA-Notizen"
  ],
  "synonyme": [
    "gvm",
    "geschäftsvorfallmanagement",
    "ida gvm",
    "geschäftsvorfall",
    "gvm vorlage"
  ],
  "verwandteThemen": [
    "ida-reporting",
    "ida-formeln",
    "ida-ci-batch"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Kernwissen",
  "praxis": false,
  "screenshots": [],
  "quellen": [
    "https://bankinghub.de/operations/migration-ausbaustufen-agree21",
    "https://www.rurberatung.de/"
  ],
  "darstellung": "ida-note"
}
---

GVM steht für Geschäftsvorfallmanagement und ist eines der drei großen Themen meiner IDA-Arbeit. Geschäftsvorfälle können auf definierten Vorlagen bzw. standardisierten Strukturen aufbauen; IDA kann die Datenbasis und die relevanten Fälle liefern.

## Wofür ich GVM im IDA-Kontext brauche

Eine Auswertung kann die relevanten Personen, Konten oder Vorgänge bestimmen. Aus dieser Auswahl ergibt sich ein Bearbeitungsanlass; eine Ergebniszeile ist dabei nicht automatisch ein eigener Geschäftsvorfall.

## Zusammenhang mit IDA-Auswertungen

Fachliche Regel → IDA-Auswertung → relevante Fälle → nachgelagerte Bearbeitung in GVM. Das beschreibt die fachliche Zuordnung; die konkrete technische Übergabe hängt von der Umgebung ab.

Reichen die vorhandenen Daten und Filter der GVM-Datengrundlage nicht aus, ergänze ich weitere IDA-Abfragen:

1. Benötigte GVM-Daten in einer Abfrage zusammenstellen.
2. Ergänzende Daten, etwa auf Kunden- oder Kontoebene, in einer weiteren Abfrage aufbereiten.
3. Die benötigten Filter dort anwenden.
4. Zeilenebenen und Verbindungsschlüssel prüfen, dann die Abfragen gezielt verbinden.

Dabei den passenden Vorlagenbezug filtern und das Buchungsdatum bzw. den benötigten Zeitraum über Parameter steuerbar machen. Weitere fachlich erforderliche Filter ergänzen.

## Allgemeiner Ablauf

- Anlass und gewünschte Bearbeitung festhalten.
- Auswertung auf die richtige Ebene bringen und Fallmenge prüfen.
- Eine passende Geschäftsvorfallvorlage zuordnen. Vor einer Umstellung prüfen, welche Vorlage aktiv verwendet wird.
- Auswahl und spätere Bearbeitung über denselben fachlichen Bezug abgleichen.

## Worauf ich bei der Datenbasis achte

Personen-, Konto- und Vorgangsebene unterscheiden. Hat eine Person mehrere betroffene Konten, muss klar sein, ob ein Fall je Person oder je Konto gemeint ist. Schlüssel, Stichtag, Filter und Mehrfachtreffer kontrollieren; Detailbelege bei einer Verdichtung nachvollziehbar halten.

## Was nicht in IDA selbst passiert

Die Auswertung liefert die Datenbasis. Das operative Anlegen und Bearbeiten der Geschäftsvorfälle gehört zum nachgelagerten Kontext und ist für die reine Auswertungsaufgabe nicht immer relevant. Ein Berichtslauf bestätigt diese Bearbeitung nicht.

## Eigene Merkpunkte

- Auswahlregel und Fallbegriff vor der Weiterverwendung klären.
- Vorlagenbezug bei Änderungen erneut prüfen.
- Wiederholte Detailzeilen nicht als zusätzliche Fälle zählen.
- Für den Abgleich dieselbe Auswahl und denselben Datenstand verwenden.
