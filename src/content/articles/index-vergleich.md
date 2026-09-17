---
{
  "id": "index-vergleich",
  "slug": "index-vergleich",
  "titel": "INDEX / VERGLEICH",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Nachschlagen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "VERGLEICH findet eine Position; INDEX liefert den Wert an dieser Position.",
  "ort": "Excel → Formelzelle",
  "tags": ["INDEX / VERGLEICH", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["xverweis", "wennnv"],
  "kontexte": ["Reporting"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-index-vergleich.webp",
        "alt": "INDEX und VERGLEICH liefern für K004 den Bestand 3.200.",
        "caption": "INDEX und VERGLEICH liefern für K004 den Bestand 3.200.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du brauchst einen exakten Nachschlagewert, auch ohne XVERWEIS.

## Schritte

1. Such- und Rückgabebereich gleich ausrichten.
2. VERGLEICH mit 0 für genaue Übereinstimmung verwenden.
3. Fehlenden Treffer bei Bedarf gezielt mit WENNNV behandeln.

## Beispiel

```excel
=INDEX(Konten!D2:D7;VERGLEICH("K004";Konten!A2:A7;0))
```

Ergebnis: 3.200. VERGLEICH sucht die exakte Position von K004, INDEX liefert den Wert aus D.

## Typischer Fehler

Den dritten Parameter von VERGLEICH weglassen: Eine ungeeignete ungefähre Suche kann falsche Zuordnungen liefern.
