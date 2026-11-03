---
{
  "id": "ida-ci-datenbasis",
  "slug": "ida-ci-datenbasis",
  "titel": "Von der IDA-Auswertung zur Bestandsänderung",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "aCI-Batch",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die relevante Datenmenge bestimmen und als fachliche Änderungsbasis prüfen. Eindeutige Bezüge, alte und neue Werte sowie Vorher/Nachher-Kontrollen stehen im Mittelpunkt.",
  "ort": "Konzeptionelle fachliche Prüfmethode; keine bankindividuelle Bedienfolge",
  "tags": [
    "aCI-Batch",
    "synthetisch"
  ],
  "synonyme": [
    "ida aci batch",
    "ida ci batch",
    "ida datenbasis bestandsänderung",
    "aci plausibilisierung"
  ],
  "verwandteThemen": [
    "ida-ci-batch",
    "ida-plausibilitaet",
    "ida-granularitaet"
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
    "https://www.arbeitsagentur.de/jobsuche/jobdetail/14935-00011588_007-S",
    "https://www.rurberatung.de/",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=query-create-join-relationship",
    "https://www.ibm.com/docs/en/cognos-analytics/12.1.x?topic=relationally-summary-functions"
  ]
}
---

## Wann brauche ich das?

Eine fachlich begründete Auswahl soll als Grundlage einer späteren Bestandsänderung dienen. IDA kann die relevante Datenmenge bestimmen oder vorbereiten; aCI-Batch gehört zum möglichen nachgelagerten Änderungskontext. Dieser Zusammenhang wird konzeptionell beschrieben.

## Voraussetzungen

Auswahlregel, Stichtag, gewünschte Änderung und Zielmenge sind fachlich geklärt. Eine für den Bericht zulässige Datengrundlage ist vorhanden. Keine technische Verarbeitungsanleitung oder Schnittstellenzusage ist Teil dieses Beispiels.

## Schritte

1. Die relevanten Objekte in der IDA-Auswertung auswählen.
2. Gewünschte Zeilenebene und eindeutigen fachlichen Bezug festlegen.
3. Ausgangs- und Zielzustand gegenüberstellen und bereits passende Objekte aus der Änderungszählung nehmen.
4. Fehlende Angaben, doppelte Objekte und widersprüchliche Zielzustände gesondert prüfen.
5. Im tatsächlich zugelassenen Kontext klären, welche Angaben erforderlich sind und welche Typen/Formate erwartet werden.
6. Die geprüfte fachliche Menge von der nachgelagerten technischen Verarbeitung trennen.
7. Den Endzustand anhand derselben Objekte und geeigneter Vergleichsdaten prüfen.

## Beispiel

**Nur eine erfundene fachliche Prüfübersicht, kein Importformat:**

| Objekt | Ausgang | Ziel | Prüfung |
|---|---|---|---|
| Demo-A | bisher | gewünscht | ein eindeutiger Änderungsfall |
| Demo-B | gewünscht | gewünscht | keine fachliche Änderung nötig |
| Demo-C | bisher | gewünscht | ein eindeutiger Änderungsfall |

Zusätzlicher Konfliktfall: Demo-C erscheint ein zweites Mal mit Ziel „anderes Ziel“. Damit ist die Änderungsbasis nicht eindeutig. Die Zielregel muss geklärt werden, bevor diese Zeilen als konsistente Menge gelten. Die Beispieltexte stellen keine echten aCI-Batch-Werte dar.

## Ergebnis

Ohne Konflikt: drei ausgewählte Objekte, zwei erwartete Änderungen. Mit dem zusätzlichen widersprüchlichen Demo-C ist die Menge zunächst ungeklärt; die zweite Zeile wird nicht automatisch als weitere Änderung gezählt.

## Warum funktioniert das?

Auswertung und Bestandsänderung sind verschiedene Tätigkeiten. Die Analyse kann Auswahl und Kontrollbasis liefern. Erst die geeignete nachgelagerte Umsetzung kann einen Zustand verändern. Die öffentlich belegte Rolle des Produkts erlaubt keine Schlussfolgerung auf ein universelles Dateischema oder einen einheitlichen Transferweg.

## Prüfmatrix vor und nach der Änderung

Vorher: Auswahl vollständig, fachlicher Schlüssel vorhanden, je Objekt eindeutiges Ziel, benötigte Angaben bekannt, Typ und Format kompatibel, bereits passender Zustand erkannt. Nachher: erwartete Zielobjekte wiederfinden, tatsächlichen Zustand vergleichen, unveränderte und unklare Fälle getrennt erklären. Summen und Anzahlen ergänzen die Objektprüfung; sie ersetzen sie nicht. [Allgemeine Plausibilitätsprüfung](#/wissen/ida-plausibilitaet).

## Typischer Fehler

Eine doppelte Zeile durch blindes Entfernen einer beliebigen Variante „bereinigen“, obwohl die Zielwerte widersprüchlich sind. Oder nach einer Änderung einen anderen Datenstand beziehungsweise eine andere Auswahl vergleichen.

## Plausibilitätscheck

Ohne Konflikt 3 ausgewählt, 2 Änderungen erwartet, 1 bereits passend. Nach erfolgreicher fachlicher Umsetzung sollen alle drei im Zielzustand sein. Mit Konflikt Demo-C gesondert ausweisen und erst nach begründeter Klärung erneut zählen.
