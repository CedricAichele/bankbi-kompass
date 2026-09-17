---
{
  "id": "zaehlenwenns",
  "slug": "zaehlenwenns",
  "titel": "ZÄHLENWENNS",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ZÄHLENWENNS zählt Zeilen, die alle Kriterien erfüllen.",
  "ort": "Excel → Formelzelle",
  "tags": ["ZÄHLENWENNS", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["eindeutig", "distinctcount"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-zaehlenwenns.webp",
        "alt": "ZÄHLENWENNS zählt für P001 zwei Kontenzeilen.",
        "caption": "ZÄHLENWENNS zählt für P001 zwei Kontenzeilen.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du willst die Anzahl positiver Bestandszeilen eines Segments ermitteln.

## Schritte

1. Gleich große Kriterienbereiche auswählen.
2. Text- und Zahlenbedingungen angeben.
3. Prüfen, ob Zeilen oder eindeutige Personen gemeint sind.

## Beispiel

```excel
=ZÄHLENWENNS(Konten!B2:B7;"P001")
```

Ergebnis: 2 Kontenzeilen. Das ist keine eindeutige Personenzahl.

## Typischer Fehler

Eine Person mit zwei passenden Konten wird zweimal gezählt.
