---
{
  "id": "glaetten",
  "slug": "glaetten",
  "titel": "Leerzeichen entfernen: GLÄTTEN",
  "bereich": "Excel",
  "werkzeuge": ["Excel"],
  "kategorie": "Daten bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "GLÄTTEN entfernt äußere normale Leerzeichen und reduziert mehrfache innere normale Leerzeichen.",
  "ort": "Excel → Hilfsspalte",
  "tags": ["Leerzeichen entfernen: GLÄTTEN", "Reporting"],
  "synonyme": [],
  "verwandteThemen": ["saeubern", "xverweis"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen":
    [
      "https://support.microsoft.com/de-de/office/gl%C3%A4tten-funktion-410388fa-c5df-49c6-b16c-9e5630b479f9",
    ],
  "screenshots": [],
}
---

## Wann brauche ich das?

Schlüssel sehen gleich aus, liefern aber keinen Treffer.

## Schritte

1. Mit GLÄTTEN bereinigte Vergleichsspalte erzeugen.
2. Bei importierten Webtexten geschützte Leerzeichen gezielt ersetzen.
3. Vor dem Überschreiben stichprobenartig vergleichen.

## Beispiel

```excel
=GLÄTTEN(WECHSELN(A2;ZEICHEN(160);" "))
```

## Typischer Fehler

GLÄTTEN entfernt nicht sämtliche Unicode-Leerzeichen. Innenliegende Leerzeichen können fachlich relevant sein.
