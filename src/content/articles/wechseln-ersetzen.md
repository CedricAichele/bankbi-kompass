---
{
  "id": "wechseln-ersetzen",
  "slug": "wechseln-ersetzen",
  "titel": "WECHSELN oder ERSETZEN?",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Text",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WECHSELN tauscht gefundenen Text, ERSETZEN ersetzt Zeichen anhand ihrer Position.",
  "ort": "Excel → Formelzelle",
  "tags": ["WECHSELN oder ERSETZEN?"],
  "synonyme": ["wechseln", "ersetzen funktion"],
  "verwandteThemen": ["glaetten", "saeubern"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-de/excel/text-functions-reference"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein störendes Zeichen muss aus Kennungen entfernt werden.

## Schritte

1. Inhaltliche Ersetzung oder feste Position unterscheiden.
2. WECHSELN für einen Text, ERSETZEN für Startposition und Länge einsetzen.
3. Originalwerte erhalten und ungewöhnliche Fälle prüfen.

## Beispiel

```excel
=WECHSELN(A2;" ";"")
=ERSETZEN(A2;1;2;"XY")
```

## Typischer Fehler

Alle inneren Leerzeichen entfernen, obwohl sie Teil einer Beschreibung sind.
