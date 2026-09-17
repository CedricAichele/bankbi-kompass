---
{
  "id": "excel-dubletten-finden",
  "slug": "excel-dubletten-finden",
  "titel": "Duplikate finden",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Markiere Wiederholungen anhand des fachlichen Schlüssels, bevor du Zeilen löschst.",
  "ort": "Excel → Hilfsspalte oder Start → Bedingte Formatierung → Doppelte Werte",
  "tags": ["Duplikate finden", "Kundenanalyse", "Datenqualität"],
  "synonyme": ["Dubletten"],
  "verwandteThemen": ["excel-dubletten-entfernen", "granularitaet"],
  "kontexte": ["Kundenanalyse", "Datenqualität"],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-17",
  "art": "artikel",
  "quellen": [],
  "screenshots":
    [
      {
        "src": "images/excel/excel-dubletten.webp",
        "alt": "Bedingte Formatierung markiert P001 und P003 als mehrfach vorkommende Personennummern.",
        "caption": "Bedingte Formatierung markiert P001 und P003 als mehrfach vorkommende Personennummern.",
        "schritt": 2,
        "schema": false,
        "status": "bereit",
        "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen.",
      },
    ],
}
---

## Wann brauche ich das?

Du möchtest doppelte Konto-Stichtags-Kombinationen untersuchen.

## Schritte

1. Schlüsselkombination festlegen.
2. Häufigkeit je Kombination berechnen.
3. Markierte Zeilen auf echte Konflikte prüfen.

## Beispiel

```excel
=ZÄHLENWENNS($A$2:$A$10;A2;$B$2:$B$10;B2)>1
```

A = Konto, B = Stichtag.

## Typischer Fehler

Nur Personenkennungen markieren und dann gültige weitere Konten entfernen.
