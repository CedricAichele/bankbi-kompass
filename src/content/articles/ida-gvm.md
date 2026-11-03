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

Bankindividuelle Geschäftsvorfälle basieren auf einer vorhandenen GVM-Vorlage. Für eine konkrete Anforderung passe ich die dazugehörige Datenbasis in IDA an die gewünschten Fälle, Filter und fachlichen Kriterien des Anfragers an. Die Vorlage bildet den Ausgangspunkt; die IDA-Auswertung bestimmt, welche Fälle für die Verarbeitung ausgewählt werden.

## Wofür ich GVM im IDA-Kontext brauche

Eine Auswertung kann die relevanten Personen, Konten oder Vorgänge bestimmen. Aus dieser Auswahl ergibt sich ein Bearbeitungsanlass; eine Ergebniszeile ist dabei nicht automatisch ein eigener Geschäftsvorfall.

## Zusammenhang mit IDA-Auswertungen

### Fall 1: Daten bereits im GVM-Package vorhanden

- Das vorhandene GVM-Package verwenden.
- Die benötigten GVM-Daten in die Abfrage aufnehmen.
- Den passenden Vorlagenbezug verwenden.
- Buchungsdatum bzw. Zeitraum bei Bedarf über Parameter steuerbar machen.
- Die benötigten fachlichen Filter ergänzen.

### Fall 2: Daten nicht vollständig im GVM-Package vorhanden

- Die GVM-Abfrage wie im ersten Fall vorbereiten.
- Eine zusätzliche IDA-Abfrage aus einem anderen geeigneten Package erstellen.
- Dort die zusätzlich benötigten Daten aufnehmen und die benötigten Filter setzen.
- Die zusätzliche Abfrage über geeignete Schlüssel mit der GVM-Abfrage verbinden.

**Vor dem Join die Granularität prüfen:** Kundenebene, Kontoebene und andere Ebenen dürfen nicht unkontrolliert vervielfacht werden. Zeilenzahlen und fachliche Schlüssel vor und nach der Verbindung vergleichen.

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
