---
{
  "id": "problem-zahl-text",
  "slug": "problem-zahl-text",
  "titel": "Zahl ist als Text gespeichert",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "SUMME ignoriert einen Betrag, weil er als Text gespeichert ist. Prüfe den Typ vor einer gezielten Umwandlung.",
  "ort": "Excel → ISTZAHL / ISTTEXT in Hilfsspalten; ZAHLENWERT",
  "tags": [
    "Zahl ist als Text gespeichert"
  ],
  "synonyme": [
    "Zahl ist als Text gespeichert",
    "SUMME ignoriert einen angezeigten Betrag."
  ],
  "verwandteThemen": [
    "excel-zahl-text",
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
    "https://support.microsoft.com/en-us/excel/functions/numbervalue-function"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

SUMME ignoriert einen Betrag, weil er als Text gespeichert ist. Prüfe den Typ vor einer gezielten Umwandlung.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Behalte A2 als Originaltext „1.250,50“ und A3 als Zahl 750. =SUMME(A2:A3) liefert nur 750.
2. Prüfe =ISTZAHL(A2) und =ISTTEXT(A2): FALSCH und WAHR. ISTZAHL=FALSCH allein beweist nicht Text; auch leere Zellen sind keine Zahl.
3. Wandle in D2 mit =ZAHLENWERT(A2;",";".") um; übernimm A3 mit =A3 in D3. Kennungen bleiben Text.
4. Prüfe die Typen und die Summe. [Zahlen als Text erkennen und umwandeln](#/wissen/excel-zahl-text) erklärt auch leere und ungültige Eingaben.

## Beispiel

Vorher: A2 ist Text „1.250,50“, A3 ist Zahl 750. Die Bereichssumme ist **750**.

```excel
=ZAHLENWERT(A2;",";".")
```

Formel in D2, in D3 =A3. D2 ergibt **1250,50 als Zahl**; =SUMME(D2:D3) ergibt **2000,50**. Spalte und Trennzeichen an das bestätigte Quellformat anpassen.

## Ergebnis

Die Summe steigt nachvollziehbar um den konvertierten Betrag 1250,50 auf 2000,50.

## Warum funktioniert das?

SUMME eines Bereichs ignoriert Textwerte; ZAHLENWERT ändert den zugrunde liegenden Werttyp.

## Typischer Fehler

Nur ein Zahlenformat zuweisen oder Kennungen mit führenden Nullen konvertieren.

## Plausibilitätscheck

ISTZAHL(D2) und ISTZAHL(D3) sind WAHR. Die Differenz zwischen den Summen beträgt 1250,50.
