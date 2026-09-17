---
{
  "id": "oder",
  "slug": "oder",
  "titel": "ODER: mindestens eine Bedingung erfüllen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Logik und Fehler",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ODER ist WAHR, sobald mindestens eine Bedingung WAHR ist.",
  "ort": "Excel → Formelzelle",
  "tags": ["ODER: mindestens eine Bedingung erfüllen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["und", "excel-fehler"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du willst zwei synthetische Statuswerte gemeinsam markieren.

## Schritte

1. Erlaubte Alternativen formulieren.
2. Mit ODER verbinden.
3. Auch einen Wert außerhalb der Alternativen testen.

## Beispiel

```excel
=ODER(B2="Offen";B2="In Bearbeitung")
```

## Typischer Fehler

Die Alternativen mit UND verbinden: Ein einzelner Status ist selten gleichzeitig beides.
