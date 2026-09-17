---
{
  "id": "summewenns",
  "slug": "summewenns",
  "titel": "SUMMEWENNS",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUMMEWENNS summiert Zahlen aus Zeilen, die alle angegebenen Bedingungen erfüllen.",
  "ort": "Excel → Formelzelle",
  "tags": ["SUMMEWENNS", "Bestandsanalyse", "Reporting"],
  "synonyme": ["SUMME"],
  "verwandteThemen": ["calculate", "stichtag"],
  "kontexte": ["Bestandsanalyse", "Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-summewenns.webp",
        "alt": "SUMMEWENNS summiert die zwei Konten von P001 zu 2.000.",
        "caption": "SUMMEWENNS summiert die zwei Konten von P001 zu 2.000.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst einen Bestand für eine bestimmte Person oder mehrere Kriterien.

## Schritte

1. Summenbereich und gleich große Kriterienbereiche wählen.
2. Personenkriterium setzen; falls nötig den Stichtag als weiteres Datumskriterium ergänzen.
3. Mit wenigen bekannten Zeilen gegenprüfen.

## Beispiel

```excel
=SUMMEWENNS(Konten!D2:D7;Konten!B2:B7;"P001")
```

Ergebnis: 2.000 aus 1.250 + 750. Alle Demo-Zeilen gehören zum selben Stichtag; bei mehreren Stichtagen ein zusätzliches Kriterium angeben.

## Typischer Fehler

Ohne Stichtag werden möglicherweise mehrere Snapshots addiert. In Power BI wirkt ein vorhandener Filter bereits auf SUM.
