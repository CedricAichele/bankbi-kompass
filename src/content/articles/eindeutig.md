---
{
  "id": "eindeutig",
  "slug": "eindeutig",
  "titel": "EINDEUTIG: Liste ohne Wiederholungen",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Filtern und Listen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "EINDEUTIG gibt unterschiedliche Werte oder Zeilenkombinationen als Liste aus.",
  "ort": "Excel → freie Formelzelle; Microsoft 365 / Excel 2021 oder neuer",
  "tags":
    ["EINDEUTIG: Liste ohne Wiederholungen", "Kundenanalyse", "Datenqualität"],
  "synonyme": ["eine Liste ohne doppelte Werte"],
  "verwandteThemen": ["distinctcount", "eine-zeile-je-person"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-eindeutig.webp",
        "alt": "EINDEUTIG liefert vier unterschiedliche Personennummern.",
        "caption": "EINDEUTIG liefert vier unterschiedliche Personennummern.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du willst jede Personenkennung genau einmal anzeigen.

## Schritte

1. Die fachliche Schlüsselspalte wählen.
2. Leere Kennungen vorab bewusst behandeln.
3. EINDEUTIG auf diese Spalte anwenden.

## Beispiel

```excel
=EINDEUTIG(Konten!B2:B7)
```

Ergebnis: P001, P002, P003 und P004. Wiederholungen werden nur in der Ergebnisliste zusammengefasst.

## Typischer Fehler

Person plus Konto als Bereich wählen: Das erzeugt eindeutige Kombinationen, nicht eine Zeile je Person.
