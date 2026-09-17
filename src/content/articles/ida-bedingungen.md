---
{
  "id": "ida-bedingungen",
  "slug": "ida-bedingungen",
  "titel": "Mehrere Bedingungen: UND / ODER",
  "bereich": "IDA",
  "werkzeuge": ["IDA"],
  "kategorie": "Filter",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "UND verlangt alle Bedingungen. ODER lässt Alternativen zu. Klammern machen gemischte Logik eindeutig.",
  "ort": "IDA / Reporting: allgemeine Boolesche Logik, keine IDA-Syntax",
  "tags": ["Mehrere Bedingungen: UND / ODER", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["ida-filter-pruefen", "ida-mehrfachauswahl"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Zwei Segmente sollen zugelassen werden, aber beide nur mit positivem Betrag.

## Schritte

1. Jede Einzelbedingung prüfen.
2. Alternativen klammern und danach gemeinsame Bedingung ergänzen.
3. Alle Kombinationen mit synthetischen Testfällen durchgehen.

## Beispiel

```text
(Segment = A ODER Segment = B) UND Betrag > 0
```

A/10: ja; B/0: nein; C/10: nein.

## Typischer Fehler

Ohne Klammern kann die positive-Betrag-Bedingung nur für einen Teil der Alternativen wirken.
