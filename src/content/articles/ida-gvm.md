---
{
  "id": "ida-gvm",
  "slug": "ida-gvm",
  "titel": "Geschäftsvorfallmanagement (GVM)",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "GVM",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Rolle von Geschäftsvorfällen im agree21-Umfeld verstehen: Eine fachlich begründete Fallmenge ist die Grundlage einer nachvollziehbaren Bearbeitung.",
  "ort": "Konzeptionelle fachliche Prüfmethode; keine bankindividuelle Bedienfolge",
  "tags": [
    "GVM",
    "synthetisch"
  ],
  "synonyme": [
    "gvm",
    "geschäftsvorfallmanagement",
    "geschäftsvorfall",
    "agree21 gvm"
  ],
  "verwandteThemen": [
    "ida-gvm-datenbasis",
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
    "https://bankinghub.de/operations/migration-ausbaustufen-agree21",
    "https://www.rurberatung.de/"
  ]
}
---

## Wann brauche ich das?

Du willst verstehen, wie eine fachliche Beobachtung aus einer Auswertung in eine nachgelagerte Bearbeitung einzuordnen ist. GVM ist ein öffentlich verwendeter Begriff im agree21-Umfeld.

## Voraussetzungen

Ein allgemein beschreibbares fachliches Anliegen. Die Beispiele sind generisch und enthalten keine realen Unternehmens- oder Kundendaten. Öffentlich zugängliche Produkt- und Praxisquellen belegen die Einordnung, keine konkrete Institutsimplementierung.

## Schritte

1. Formuliere die Beobachtung und das fachliche Ziel einer möglichen Bearbeitung.
2. Lege fest, was ein Fall in diesem Beispiel bedeutet: Person, Konto oder anderer fachlicher Bezug.
3. Bestimme die relevanten Fälle mit nachvollziehbaren Kriterien.
4. Prüfe Vollständigkeit, Mehrfachzuordnungen und die Aktualität der Auswahl.
5. Trenne die analytische Fallliste von der Entscheidung über eine nachgelagerte Bearbeitung.
6. Prüfe später, ob die fachliche Beobachtung nachvollziehbar behandelt wurde.

## Beispiel

Rein konzeptionell: In einer erfundenen Merkmalsprüfung fehlt bei zwei Konten derselben Person P-A eine Angabe; bei P-B ist sie vorhanden. Für die Beispiel-Frage soll genau ein Prüffall je Person entstehen. Die zwei Kontozeilen liefern deshalb einen Fall für P-A mit zwei zugehörigen Detailbelegen. Es ist keine reale GVM-Vorlage und keine Empfehlung für eine bankfachliche Regel.

## Ergebnis

Die Auswertung liefert eine begründete Fallmenge. GVM steht im agree21-Umfeld für die Bearbeitung beziehungsweise Steuerung von Geschäftsvorfällen. Wie ein konkreter Fall technisch erzeugt oder weitergeleitet wird, ist durch die hier verwendeten öffentlichen Quellen nicht festgelegt.

## Warum funktioniert das?

Auswahl und Bearbeitung beantworten verschiedene Fragen. Eine Auswertung fragt: Welche fachlichen Objekte erfüllen das Kriterium? Ein Geschäftsvorfall ordnet einen Bearbeitungsanlass ein. Eine doppelte Detailzeile muss nicht einen zweiten fachlichen Anlass bedeuten.

## Gute Kriterien und Kontrolle

Eine Regel braucht eine eindeutige Bezugsgröße, einen geklärten Datenstand und verständliche Ein-/Ausschlüsse. Unbekannte Merkmale sind nicht automatisch Fehler. Gegenbeispiele und Grenzfälle gehören genauso zur Prüfung wie positive Treffer. Saubere Kriterien machen nachvollziehbar, warum ein Objekt in der Fallmenge erscheint. [Zusammenspiel mit IDA](#/wissen/ida-gvm-datenbasis).

## Typischer Fehler

Jede Ergebniszeile ungeprüft als eigenen Geschäftsvorfall interpretieren. Ob ein Fall je Person, Konto oder Anlass entsteht, ist eine fachliche Entscheidung und keine allgemeine GVM-Konstante.

## Plausibilitätscheck

Zwei auffällige Kontozeilen zu P-A ergeben bei der hier gewählten Personenebene einen Prüffall. P-B bleibt ausgeschlossen. Eine andere Falldefinition müsste andere, ausdrücklich erklärte Kontrollwerte besitzen.
