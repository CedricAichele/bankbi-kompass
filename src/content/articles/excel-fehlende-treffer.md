---
{
  "id": "excel-fehlende-treffer",
  "slug": "excel-fehlende-treffer",
  "titel": "Fehlende Treffer gezielt behandeln",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen & Zuordnen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kennzeichne nicht gefundene Schlüssel ausdrücklich. Ein fehlender Treffer ist nicht automatisch ein Betrag von 0.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "Fehlende Treffer gezielt behandeln"
  ],
  "synonyme": [
    "nicht gefunden",
    "fehlender treffer"
  ],
  "verwandteThemen": [
    "xverweis",
    "wennnv",
    "wennfehler",
    "glaetten"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/xlookup-function"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Zuordnungen sollen fehlen dürfen, aber als Prüffälle sichtbar bleiben.

## Voraussetzungen

Eine Quellliste und eine Zuordnungstabelle mit gleichartigen Schlüsseln.

## Schritte

1. Prüfe Schlüsseltyp, Leerzeichen und Eindeutigkeit der Zuordnung.
2. Trage den Suchwert in **F2** ein; im Beispiel K999.
3. Gib in **H2** die Formel aus dem Beispiel ein.
4. Filtere die Ergebnisliste nach **Zuordnung fehlt** und kläre diese Fälle; verwende keinen erfundenen Ersatzbetrag.

## Beispiel

### Vorher · Beispieldaten

| B: Konto | D: Betrag |
| --- | --- |
| K001 | 100 |
| K002 | 50 |

Suchwert F2 = K999; Daten in Zeile 2 und 3.

### Aktion

```excel
=XVERWEIS(F2;B2:B3;D2:D3;"Zuordnung fehlt";0)
```

### Nachher · Beispielergebnis

| Suchwert | Ergebnis |
| --- | --- |
| K999 | Zuordnung fehlt |
| K001 | 100 |

## Ergebnis

Fehlende Treffer sind als eigene Prüffälle erkennbar.

## Warum funktioniert das?

Der Ersatzwert beantwortet nur den Fall ohne passenden Schlüssel. Er bestätigt weder die Eindeutigkeit vorhandener Treffer noch die Richtigkeit der Quelle.

## Typischer Fehler

WENNFEHLER pauschal einsetzen und dadurch andere Formelprobleme verdecken.

## Plausibilitätscheck

K999 liefert den Hinweis; K001 liefert 100.
