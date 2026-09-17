---
{
  "id": "saeubern",
  "slug": "saeubern",
  "titel": "Text bereinigen: SÄUBERN",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SÄUBERN entfernt bestimmte nicht druckbare Steuerzeichen aus Texten.",
  "ort": "Excel → Hilfsspalte",
  "tags": ["Text bereinigen: SÄUBERN", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["glaetten", "excel-ersetzen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Importtexte enthalten unsichtbare Zeichen oder unerwartete Zeilenumbrüche.

## Schritte

1. Originaltext behalten.
2. SÄUBERN anwenden und Länge/Anzeige vergleichen.
3. Bei Bedarf anschließend GLÄTTEN einsetzen.

## Beispiel

```excel
=GLÄTTEN(SÄUBERN(A2))
```

## Typischer Fehler

SÄUBERN beseitigt nicht alle Unicode-Sonderzeichen; gezielte Regeln bleiben nötig.
