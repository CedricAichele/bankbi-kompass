---
{
  "id": "problem-datum-excel",
  "slug": "problem-datum-excel",
  "titel": "Datum wird nicht erkannt",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Datumssortierung oder Datumsfilter funktionieren nicht, weil Text oder falsch interpretierte Datumswerte vorliegen.",
  "ort": "Excel → Hilfszelle DATWERT; alternativ Power Query mit Gebietsschema",
  "tags": [
    "Datum wird nicht erkannt"
  ],
  "synonyme": [
    "Datum wird nicht erkannt",
    "Datumsfilter oder zeitliche Sortierung funktionieren nicht."
  ],
  "verwandteThemen": [
    "excel-datum",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/datevalue-function"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

Datumssortierung oder Datumsfilter funktionieren nicht, weil Text oder falsch interpretierte Datumswerte vorliegen.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Prüfe =ISTZAHL(A2). Ein Datum ist eine Zahl, aber nicht jede Zahl ein gültiger fachlicher Stichtag.
2. Bei bestätigtem deutschen Text „31.01.2026“ in A2 verwende =DATWERT(A2) in H2 und formatiere H2 als Datum.
3. Bei 03/04/2026 ohne bestätigte Herkunft stoppe die Umwandlung und kläre Tag/Monat-Reihenfolge. Für wiederkehrende Importe das bestätigte Gebietsschema in Power Query setzen.
4. Prüfe Tag, Monat und Jahr. [Datumswerte korrigieren](#/wissen/excel-datum) zeigt DATWERT, die Datumsreihenfolge bei Text in Spalten und den Power-Query-Weg.

## Beispiel

Vorher: A2 enthält Text „31.01.2026“, ISTZAHL(A2) ist FALSCH. In H2:

```excel
=DATWERT(A2)
```

Nachher bei passender deutscher Interpretation: Datumswert **31.01.2026**, ISTZAHL(H2) ist WAHR. Bei 03/04/2026 ist ohne Quellkonvention kein eindeutiges erwartetes Datum festgelegt.

## Ergebnis

Der eindeutige Datumstext wird zu 31.01.2026. Mehrdeutige Werte bleiben bis zur Quellenklärung als Prüffälle erhalten.

## Warum funktioniert das?

Erst die Interpretation erzeugt eine Datumszahl; ein Datumsformat allein macht aus Text kein Datum.

## Typischer Fehler

Ein erfolgreich umgewandeltes, aber fachlich falsches Datum ungeprüft akzeptieren.

## Plausibilitätscheck

=H2=DATUM(2026;1;31) ergibt WAHR. Tag=31, Monat=1 und Jahr=2026 kontrollieren.
