---
{
  "id": "ida-ci-batch",
  "slug": "ida-ci-batch",
  "titel": "agree21CI-Batch / aCI-Batch",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "aCI-Batch",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bestandsänderungen als kontrollierte Verarbeitung einer fachlich vorbereiteten Datenmenge verstehen. Auswahl, beabsichtigte Änderung und Ergebnisprüfung bleiben getrennt nachvollziehbar.",
  "ort": "Konzeptionelle fachliche Prüfmethode; keine bankindividuelle Bedienfolge",
  "tags": [
    "aCI-Batch",
    "synthetisch"
  ],
  "synonyme": [
    "ci batch",
    "aci batch",
    "agree21ci batch",
    "aCI-Batch",
    "massenänderung",
    "bestandsänderung"
  ],
  "verwandteThemen": [
    "ida-ci-datenbasis",
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
    "https://www.rurberatung.de/",
    "https://www.arbeitsagentur.de/jobsuche/jobdetail/14935-00011588_007-S"
  ]
}
---

## Wann brauche ich das?

Du willst die Rolle von aCI-Batch bei fachlich vorbereiteten Bestandsänderungen verstehen. Öffentlich zugängliche Quellen nennen agree21CI-Batch im Zusammenhang mit Bestandsänderungen nach fachlichen Vorgaben. Hier geht es um die Prüfmethode, nicht um ein technisches Importformat.

## Voraussetzungen

Eine fachlich geklärte Anforderung und eine bekannte Ausgangsmenge. Die Beispiele sind erfunden. Die Darstellung enthält keine echte Dateistruktur, Bedienfolge oder Übertragungslogik.

## Schritte

1. Fachliche Anforderung und gewünschten Zielzustand beschreiben.
2. Relevanten Bestand anhand klarer Auswahlkriterien bestimmen.
3. Ausgangswerte, Zielwerte und eindeutig identifizierbare fachliche Objekte prüfen.
4. Datenqualität und die Anforderungen an Typ und Format im tatsächlich zugelassenen Kontext klären.
5. Kontrollierte Verarbeitung als eigenen Umsetzungsschritt betrachten.
6. Tatsächlichen Endzustand mit der erwarteten Änderungsmenge vergleichen.

## Beispiel

**Fachliche Kontrolltabelle – kein aCI-Batch-Dateischema:**

| Erfundenes Objekt | Ausgangszustand | Gewünschter Zustand | Fachliche Bewertung |
|---|---|---|---|
| Demo-A | bisher | gewünscht | Änderung erforderlich |
| Demo-B | gewünscht | gewünscht | bereits im Zielzustand |
| Demo-C | bisher | gewünscht | Änderung erforderlich |

Die Spalten sind Erklärungshilfen. Die Texte sind keine realen Änderungskennzeichen oder erlaubten Importwerte. Die drei ausgewählten Objekte bedeuten nur zwei erwartete fachliche Änderungen.

## Ergebnis

Auswahlmenge 3, erwartete Änderungsmenge 2, bereits passend 1. Ob und wie diese fachliche Menge technisch verarbeitet werden kann, hängt von der konkreten Umgebung ab und wird aus den öffentlichen Quellen nicht abgeleitet.

## Warum funktioniert das?

Eine Massenänderung braucht eine nachvollziehbare Abgrenzung zwischen ausgewählten Objekten und wirklich zu ändernden Objekten. Bereits passende Objekte und Konflikte sind keine zusätzlichen notwendigen Änderungen. Die Auswertung selbst ändert den Bestand noch nicht.

## Kontrolle und Grenzen

Formale Verarbeitbarkeit und fachliche Richtigkeit sind verschiedene Prüfungen. Ein formal akzeptierter Datensatz kann das falsche Objekt oder einen fachlich falschen Zielwert betreffen. Vorher/Nachher muss sich auf denselben Bezug und einen geeigneten Datenstand beziehen. Ein unbekanntes Ergebnis ist keine bestätigte erfolgreiche Änderung. [IDA-Datenbasis vorbereiten](#/wissen/ida-ci-datenbasis).

## Typischer Fehler

Alle drei ausgewählten Objekte als drei notwendige Änderungen zählen oder eine erfolgreiche technische Verarbeitung mit einem geprüften fachlichen Zielzustand gleichsetzen.

## Plausibilitätscheck

Demo-A und Demo-C sollen den Zielzustand erreichen; Demo-B war schon passend. Erwartung 2 Änderungen, danach 3 passende Zustände. Abweichungen je fachlichem Objekt untersuchen; daraus keine allgemeingültigen aCI-Protokoll- oder Statuscodes ableiten.
