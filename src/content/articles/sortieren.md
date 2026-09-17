---
{
  "id": "sortieren",
  "slug": "sortieren",
  "titel": "SORTIEREN: dynamische Liste ordnen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SORTIEREN gibt einen geordneten Ergebnisbereich aus, ohne die Quelltabelle umzubauen.",
  "ort": "Excel → freie Formelzelle; dynamische Arrays erforderlich",
  "tags": ["SORTIEREN: dynamische Liste ordnen", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["eindeutig", "excel-zahl-text"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-sortieren.webp",
        "alt": "SORTIEREN ordnet die Konten nach Bestand absteigend.",
        "caption": "SORTIEREN ordnet die Konten nach Bestand absteigend.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Eine Liste soll automatisch nach einer ausgewählten Spalte geordnet erscheinen.

## Schritte

1. Bereich oder dynamisches Array wählen.
2. Sortierspalte und Richtung festlegen.
3. Datentypen prüfen.

## Beispiel

```excel
=SORTIEREN(Konten!A2:D7;4;-1)
```

Die vierte Spalte wird absteigend sortiert: K004 mit 3.200 zuerst, K002 mit 750 zuletzt. 1 bedeutet aufsteigend, −1 absteigend.

## Typischer Fehler

Als Text gespeicherte Zahlen können wie Texte sortieren: 10 vor 2.
