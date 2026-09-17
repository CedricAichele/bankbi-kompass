---
{
  "id": "wennnv",
  "slug": "wennnv",
  "titel": "WENNNV: fehlende Treffer kennzeichnen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "WENNNV behandelt gezielt #NV und lässt andere Fehler sichtbar.",
  "ort": "Excel → Formelzelle",
  "tags": ["WENNNV: fehlende Treffer kennzeichnen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["xverweis", "wennfehler"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Ein Nachschlagen findet eine synthetische Produkt-ID nicht.

## Schritte

1. Nachschlageformel aufbauen.
2. WENNNV mit eindeutigem Ersatztext ergänzen.
3. Fehlende Zuordnungen vor Weiterverarbeitung zählen.

## Beispiel

```excel
=WENNNV(INDEX($G$2:$G$4;VERGLEICH(A2;$F$2:$F$4;0));"Zuordnung fehlt")
```

## Typischer Fehler

Jede fehlende Zuordnung als normalen Standardwert behandeln.
