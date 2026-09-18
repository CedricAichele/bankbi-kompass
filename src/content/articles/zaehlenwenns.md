---
{
  "id": "zaehlenwenns",
  "slug": "zaehlenwenns",
  "titel": "ZÄHLENWENNS",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Aggregieren",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "ZÄHLENWENNS zählt Zeilen, die alle Kriterien erfüllen.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "ZÄHLENWENNS",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "eindeutig",
    "distinctcount"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": [
    {
      "src": "images/excel/excel-zaehlenwenns.webp",
      "alt": "ZÄHLENWENNS zählt für P001 zwei Kontenzeilen.",
      "caption": "ZÄHLENWENNS zählt für P001 zwei Kontenzeilen.",
      "schritt": 5,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true,
  "kurzformel": "```excel\n=ZÄHLENWENNS(Konten!B2:B7;\"P001\";Konten!C2:C7;\"Einlagen\")\n```",
  "schnellschritte": [
    "Quelldaten im Blatt Konten vorbereiten.",
    "Formel in einer freien Zelle eingeben.",
    "Ausgabe und Randfälle gegen das Beispiel prüfen."
  ]
}
---

## Wann brauche ich das?

Du willst eine vorhandene Liste ohne manuelle Zuordnung reproduzierbar auswerten.

## Voraussetzungen

Deutsches Excel; für XVERWEIS und dynamische Arrays Microsoft 365 oder Excel 2021 oder neuer. Andere Sprachversionen verwenden andere Funktionsnamen und Trennzeichen.

## Schritte

1. Öffne eine leere Arbeitsmappe und benenne das erste Blatt Konten. Übertrage die Spaltenüberschriften des Beispiels nach A1:D1 und die sechs Datenzeilen nach A2:D7.
2. Prüfe in D2:D7, dass die Beträge echte Zahlen sind. Gib 1250 ohne Tausenderpunkt ein; formatiere erst danach als Zahl.
3. Lege über das Plus neben dem Blattregister ein Blatt Auswertung an. Klicke dort A2 an. Für dynamische Arrays müssen mindestens sechs Zeilen und vier Spalten frei sein.
4. Kopiere die angegebene Formel in A2 und bestätige mit Enter. Nutze die Bereiche einschließlich Blattname exakt wie angegeben.
5. Vergleiche die Ausgabe mit dem erwarteten Ergebnis. Bei Nachschlag teste zusätzlich den nicht vorhandenen Schlüssel K999.
6. Ändere in der Quelldatei testweise den Betrag von K001 auf 1300. Beobachte die Neuberechnung, sofern die Funktion Beträge verwendet. Setze ihn anschließend wieder auf 1250.
7. Prüfe bei neuen Daten, ob sie innerhalb der Formelbereiche liegen. Für dauerhaft wachsende Listen ist eine Excel-Tabelle mit strukturierten Bezügen vorzuziehen.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

```excel
=ZÄHLENWENNS(Konten!B2:B7;"P001";Konten!C2:C7;"Einlagen")
```

## Ergebnis

1

## Warum funktioniert das?

Jedes Paar beschreibt eine Bedingung. Gezählt werden Zeilen, die gleichzeitig P001 und Einlagen erfüllen.

## Typischer Fehler

**Symptom und Ursache:** Die Anzahl von Zeilen ist keine Anzahl verschiedener Personen. **Lösung:** Vergleiche Datentypen, Schlüssel und die markierten Formelbereiche, bevor du Fehler mit WENNFEHLER verdeckst.

## Plausibilitätscheck

P001 kommt genau zweimal vor und hat 1.250 + 750 = 2.000. Alle sechs Beträge ergeben 9.000. Prüfe außerdem einen leeren und einen nicht vorhandenen Suchwert.
