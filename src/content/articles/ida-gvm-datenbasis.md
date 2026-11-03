---
{
  "id": "ida-gvm-datenbasis",
  "slug": "ida-gvm-datenbasis",
  "titel": "IDA und GVM: von der Auswahl zur Fallmenge",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "GVM",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine IDA-Auswertung als fachliche Grundlage möglicher Geschäftsvorfälle einordnen. Kriterien, Zeilenebene und Belegbarkeit sind wichtiger als eine vermeintlich allgemeingültige Schnittstelle.",
  "ort": "Konzeptionelle fachliche Prüfmethode; keine bankindividuelle Bedienfolge",
  "tags": [
    "GVM",
    "synthetisch"
  ],
  "synonyme": [
    "ida gvm",
    "zusammenspiel ida gvm",
    "datenbasierte geschäftsvorfälle",
    "gvm kontrolle"
  ],
  "verwandteThemen": [
    "ida-gvm",
    "ida-granularitaet",
    "ida-plausibilitaet"
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
    "https://bankinghub.de/operations/migration-ausbaustufen-agree21",
    "https://www.arbeitsagentur.de/jobsuche/jobdetail/14935-00011588_007-S"
  ]
}
---

## Wann brauche ich das?

Eine Auswertung identifiziert fachlich relevante Objekte und du möchtest beurteilen, ob daraus ein konsistenter Bearbeitungsanlass entsteht. Das folgende Modell ist ein Konzept, keine zugesicherte automatische IDA-GVM-Integration.

## Voraussetzungen

Die fachliche Auswahl ist beschrieben und mit geeigneten Daten plausibilisiert. Die Falldefinition ist bekannt. Es werden ausschließlich synthetische Bezüge und allgemeine Methoden gezeigt.

## Schritte

1. Fachliche Regel und Datenstand festhalten.
2. Die Regel in einer überprüfbaren IDA-Auswertung abbilden.
3. Relevante Fälle auf der beabsichtigten Ebene bestimmen.
4. Mehrere Detailzeilen desselben Falls bewusst zusammenführen oder als Belege zuordnen.
5. Die Fallmenge fachlich bewerten; eine nachgelagerte GVM-Bearbeitung ist eine gesonderte Umsetzung.
6. Auswahl, ausgeschlossene Fälle und beobachtetes Ergebnis später miteinander vergleichen.

## Beispiel

Konzeptioneller Weg: **Fachliche Regel → IDA-Auswertung → relevante Fälle → möglicher Geschäftsvorfall → Bearbeitung**.

| Synthetische Detailzeile | Beobachtung | Fall bei Personenebene |
|---|---|---|
| P-A / K-A1 | Demo-Merkmal fehlt | P-A |
| P-A / K-A2 | Demo-Merkmal fehlt | derselbe Fall P-A |
| P-B / K-B1 | Demo-Merkmal vorhanden | kein Fall |

Das Demo-Merkmal steht für eine erfundene Fragestellung. Es gibt keine echte Vorlage, keinen technischen Schlüssel und keine vorgegebene Produktregel.

## Ergebnis

Zwei relevante Detailzeilen belegen eine Fallmenge mit einer Person. Die Tabelle beschreibt eine analytische Zuordnung; sie ist weder ein Übergabeformat noch eine Anleitung zum Erzeugen realer Geschäftsvorfälle.

## Warum funktioniert das?

Die fachliche Ebene legt fest, wann zwei Treffer denselben Fall beschreiben. Durch die getrennten Schritte bleibt erkennbar, ob eine Abweichung bei der Auswahl, Zusammenfassung oder späteren Bearbeitung entstanden ist. Die öffentliche Quellenlage belegt keine einheitliche technische Prozesskette für jede Installation.

## Worauf achten?

Schlüssel müssen vollständig und auf der gewählten Ebene eindeutig sein. Datenstand und Gültigkeit der Merkmale müssen zusammenpassen. Ein fehlendes Merkmal ist zunächst eine Beobachtung; seine Bedeutung muss fachlich festgelegt werden. Eine veränderte Regel kann eine andere Fallmenge erzeugen, ohne dass die Daten falsch sind.

## Typischer Fehler

Eine zeitlich andere oder anders gefilterte Fallliste mit dem Bearbeitungsergebnis vergleichen und daraus einen technischen Fehler ableiten. Ebenso wenig beweist eine hohe Trefferanzahl eine gute Regel.

## Plausibilitätscheck

Detailtreffer 2; eindeutige Personen 1; erwarteter Beispielfall P-A. K-A1 und K-A2 bleiben als nachvollziehbare Belege erhalten. Bei einer Regeländerung jeden Ein-/Ausschluss begründen.
