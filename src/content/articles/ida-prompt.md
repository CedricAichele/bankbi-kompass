---
{
  "id": "ida-prompt",
  "slug": "ida-prompt",
  "titel": "Parameter und Eingabeaufforderung unterscheiden",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Parameter / Eingabeaufforderungen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Der Parameter trägt den Wert; die Eingabeaufforderung erfasst die Auswahl. Der Filter verwendet den Parameter.",
  "ort": "Öffentlich dokumentiertes Cognos-Prinzip; IDA-Menüweg TODO",
  "tags": ["Parameter und Eingabeaufforderung unterscheiden"],
  "synonyme": ["prompt", "eingabeaufforderung"],
  "verwandteThemen": ["ida-parameter", "ida-parameter-filter"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    [
      "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=reporting-adding-prompts-filter-data",
    ],
  "screenshots":
    [
      {
        "src": "images/ida/parameter-filter.svg",
        "alt": "Eingabeaufforderung: Auswahl: Demo Nord: Benutzer wählt einen Wert. Parameter und Filter: Parameter übernimmt Auswahl: Geschäftsstelle = Auswahl. Berichtsliste: Nur passende Detailzeilen: Filter im Bericht kenntlich machen",
        "caption": "Vom Eingabewert zur Berichtsliste",
        "hinweis": "Generisches Reportingprinzip, keine Nachbildung einer IDA-Oberfläche.",
        "schema": true,
        "status": "bereit",
        "schritt": 2,
      },
    ],
}
---

## Wann brauche ich das?

Ein Bericht soll nach einem gewählten Segment laufen.

## Schritte

1. Parameterwert und Datentyp definieren.
2. Passende Eingabe und Filterverwendung aufeinander abstimmen.
3. Einzelwert, Mehrfachwert und fehlende Auswahl testen.

## Beispiel

Auswahl Segment A → Parameterwert A → Liste nur für Segment A.

## Typischer Fehler

Ein Auswahlfeld anzeigen, ohne dessen Wert tatsächlich im Filter zu verwenden.
