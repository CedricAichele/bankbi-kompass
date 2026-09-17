---
{
  "id": "zaehlenwenn",
  "slug": "zaehlenwenn",
  "titel": "ZÄHLENWENN: Treffer zählen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ZÄHLENWENN zählt Zellen, die eine Bedingung erfüllen. Das ist keine eindeutige Personenanzahl.",
  "ort": "Excel → Formelzelle",
  "tags": ["ZÄHLENWENN: Treffer zählen"],
  "synonyme": ["zählen wenn"],
  "verwandteThemen": ["zaehlenwenns", "excel-dubletten-finden"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen":
    ["https://support.microsoft.com/de-DE/Excel/excel-functions-alphabetical"],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du prüfst, wie oft eine Kennung vorkommt.

## Schritte

1. Zu prüfenden Schlüssel in einer Zelle festlegen.
2. ZÄHLENWENN auf den Schlüsselbereich anwenden.
3. Ergebnisse größer 1 fachlich untersuchen.

## Beispiel

```excel
=ZÄHLENWENN($A$2:$A$9;A2)
```

P001 dreimal → 3.

## Typischer Fehler

Mehrere Konten einer Person als fehlerhafte Dublette behandeln.
