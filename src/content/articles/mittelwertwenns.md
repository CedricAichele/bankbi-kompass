---
{
  "id": "mittelwertwenns",
  "slug": "mittelwertwenns",
  "titel": "MITTELWERTWENNS",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "MITTELWERTWENNS bildet den Durchschnitt passender Zahlenwerte.",
  "ort": "Excel → Formelzelle",
  "tags": ["MITTELWERTWENNS", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["median", "wennfehler"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen": [],
  "screenshots": [],
}
---

## Wann brauche ich das?

Du brauchst die mittlere synthetische Dauer in einer bestimmten Gruppe.

## Schritte

1. Dauerspalte und gleich große Kriterienbereiche wählen.
2. Ausgewertete Ebene und Umgang mit fehlenden Werten klären.
3. Ausreißer zusätzlich mit Median prüfen.

## Beispiel

```excel
=MITTELWERTWENNS(C2:C10;B2:B10;"Gruppe A")
```

## Typischer Fehler

Keine passenden numerischen Werte können #DIV/0! ergeben. Mittelwerte von Teilgruppen nicht ungewichtet zu einem Gesamtmittel mitteln.
