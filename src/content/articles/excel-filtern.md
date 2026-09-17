---
{
  "id": "excel-filtern",
  "slug": "excel-filtern",
  "titel": "FILTER: passende Zeilen ausgeben",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "FILTER gibt alle Zeilen aus, die eine Bedingung erfüllen.",
  "ort": "Excel → freie Formelzelle außerhalb einer Tabelle; dynamische Arrays erforderlich",
  "tags": ["FILTER: passende Zeilen ausgeben", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["eindeutig", "sortieren"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-filter.webp",
        "alt": "FILTER gibt beide Konten von P001 als dynamischen Bereich zurück.",
        "caption": "FILTER gibt beide Konten von P001 als dynamischen Bereich zurück.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst eine dynamische Liste für ein Segment.

## Schritte

1. Ausgabebereich freihalten.
2. Datenbereich und gleich hohe Bedingungsspalte angeben.
3. Ersatzwert für eine leere Trefferliste setzen.

## Beispiel

```excel
=FILTER(Konten!A2:D7;Konten!B2:B7="P001";"Kein Treffer")
```

Ergebnis: K001 und K002 mit 1.250 und 750. Die Ausgabe benötigt zwei freie Zeilen und vier Spalten.

## Typischer Fehler

Blockierte Ausgabe erzeugt #ÜBERLAUF!. FILTER ist nicht dasselbe wie DAX FILTER.
