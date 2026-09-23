---
{
  "id": "ida-prompt",
  "slug": "ida-prompt",
  "titel": "Parameter und Eingabeaufforderung unterscheiden",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Parameter trägt den Wert; die Eingabeaufforderung erfasst die Auswahl. Der Filter verwendet den Parameter.",
  "ort": "Allgemeines Cognos-/Reportingprinzip. Konkreter IDA-Menüweg nicht öffentlich belegt.",
  "tags": [
    "Parameter und Eingabeaufforderung unterscheiden"
  ],
  "synonyme": [
    "prompt",
    "eingabeaufforderung"
  ],
  "verwandteThemen": [
    "ida-parameter",
    "ida-parameter-anzeigen",
    "ida-parameter-filter"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=data-build-your-own-prompt-prompt-page"
  ],
  "screenshots": [
    {
      "src": "images/ida/parameter-filter.svg",
      "alt": "Eingabeaufforderung: Auswahl: Demo Nord: Benutzer wählt einen Wert. Parameter und Filter: Parameter übernimmt Auswahl: Geschäftsstelle = Auswahl. Berichtsliste: Nur passende Detailzeilen: Filter im Bericht kenntlich machen",
      "caption": "Vom Eingabewert zur Berichtsliste",
      "hinweis": "Generisches Reportingprinzip, keine Nachbildung einer IDA-Oberfläche.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Ein Bericht soll nach einem gewählten Segment laufen.

## Voraussetzungen

Allgemeines Cognos-/Reportingprinzip. Die Felder und Daten im Beispiel sind frei erfunden.

## Schritte

1. Prompt, Parametername und verwendeten Filter als drei getrennte Bestandteile prüfen.
2. Formuliere die gewünschte Regel: **Eine Eingabeaufforderung mit Parameter AuswahlSegment verbinden; Filter nutzt den Parameter**.
3. Prüfe die Umsetzungsmöglichkeiten anhand der öffentlichen Dokumentation und der tatsächlich eingesetzten Umgebung. Die Beschreibung ist keine zugesicherte IDA-Klickfolge.
4. Auswahl A und B jeweils ausführen; eine bloß veränderte Überschrift reicht nicht als Beweis.
5. Halte Datenstand, Auswahl und fachliche Kontrollwerte gemeinsam mit dem Ergebnis fest.

## Beispiel

### Vorher · Beispieldaten

| Ausgangslage |
| --- |
| Daten: P001/A, P002/B. Gewünschte sichtbare Auswahl: Segment A oder B. |

### Aktion

```text
Fachliche Regel: Eine Eingabeaufforderung mit Parameter AuswahlSegment verbinden; Filter nutzt den Parameter.
```

### Nachher · Beispielergebnis

| Erwartete Ausgabe |
| --- |
| Auswahl A → Parameter A → nur P001. |

## Ergebnis

Der Parameter trägt den Wert; die Eingabeaufforderung erfasst die Auswahl. Der Filter verwendet den Parameter.

## Warum funktioniert das?

Die sichtbare Beschriftung kann vom technischen Schlüssel abweichen. Entscheidend für die Zuordnung ist der übergebene Wert.

## Typischer Fehler

Ein Auswahlfeld anzeigen, ohne dessen Wert tatsächlich im Filter zu verwenden.

## Plausibilitätscheck

Auswahl A → Parameter A → nur P001.
