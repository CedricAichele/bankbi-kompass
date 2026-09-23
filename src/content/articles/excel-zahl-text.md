---
{
  "id": "excel-zahl-text",
  "slug": "excel-zahl-text",
  "titel": "Zahlen als Text erkennen und umwandeln",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum & Datentypen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erkenne Textzahlen mit ISTZAHL und ISTTEXT und wandle bekannte Rechengrößen mit ZAHLENWERT um. Kennungen mit führenden Nullen bleiben Text.",
  "ort": "Excel → Prüf- und Ergebnisspalten; ISTZAHL, ISTTEXT und ZAHLENWERT",
  "tags": [
    "Zahlen als Text erkennen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "problem-zahl-text",
    "datenbereinigung",
    "excel-datum"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/numbervalue-function",
    "https://support.microsoft.com/de-de/excel/functions/numbervalue-function",
    "https://support.microsoft.com/de-de/excel/functions/is-functions"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ZAHLENWERT(A2;\",\";\".\")\n```",
  "formelreferenz": {
    "funktion": "ZAHLENWERT / ISTZAHL",
    "eingabe": "A2 ist Text „1.250,50“, A3 Zahl 750. Umwandlung in D2, D3=A3.",
    "anpassen": "A2 und die bestätigten Dezimal-/Gruppentrennzeichen ersetzen; anschließend ISTZAHL(D2) prüfen. Kennungen bleiben Text.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Erkenne Textzahlen mit ISTZAHL und ISTTEXT und wandle bekannte Rechengrößen mit ZAHLENWERT um. Kennungen mit führenden Nullen bleiben Text.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Kläre die Bedeutung: Betrag als Rechengröße umwandeln, Kennung wie 00123 als Text erhalten. Bewahre die Originalspalte.
2. Trage A2 als Text „1.250,50“ ein (zum Nachbauen mit führendem Apostroph), A3 als Zahl 750. Prüfe B2 =ISTZAHL(A2) und C2 =ISTTEXT(A2); kopiere beide bis Zeile 3.
3. Wandle nur den bestätigten Textbetrag in D2 mit =ZAHLENWERT(A2;",";".") um; übernimm die bereits numerische A3 in D3 mit =A3.
4. Prüfe E2 =ISTZAHL(D2), E3 =ISTZAHL(D3) sowie =SUMME(A2:A3) und =SUMME(D2:D3) in freien Kontrollzellen.

## Beispiel

| Zelle | Original | ISTZAHL | ISTTEXT | Bereinigtes Ergebnis |
| --- | --- | --- | --- | --- |
| A2 | Text „1.250,50“ | FALSCH | WAHR | D2: 1250,50 als Zahl |
| A3 | Zahl 750 | WAHR | FALSCH | D3: 750 |

```excel
=ZAHLENWERT(A2;",";".")
```

**A2** ist der Zahlentext, **","** das Dezimalzeichen, **"."** das Gruppentrennzeichen der Quelle. Diese drei Angaben anpassen. Für Text „1,250.50“ wäre die Reihenfolge der Trennzeichen umzukehren. ISTZAHL=FALSCH bedeutet nur „keine Zahl“: Eine leere Zelle, Text, logische Werte und Fehler sind dadurch nicht unterschieden. ISTTEXT prüft ergänzend auf Text. Zahlenformat allein ändert keinen Zelltyp.

## Ergebnis

SUMME(A2:A3) liefert zunächst 750, weil der Textbetrag nicht summiert wird. Nach bestätigter Umwandlung ergibt SUMME(D2:D3) 2000,50; beide Ergebnistypen sind numerisch.

## Warum funktioniert das?

ZAHLENWERT interpretiert den Text anhand ausdrücklich gewählter Trennzeichen. Die Differenz 1250,50 entspricht genau dem vorher ignorierten Betrag.

## Typischer Fehler

Leere oder ungültige Eingaben verdecken: ZAHLENWERT("") ergibt 0, „unbekannt“ dagegen #WERT!. Eine technisch erzeugte 0 beweist keinen gemessenen Nullbetrag.

## Plausibilitätscheck

E2 und E3 sind WAHR; 1250,50 + 750 = 2000,50. Teste eine separate leere Zelle und „unbekannt“. Halte diese Fälle zur Klärung getrennt, statt sie in die Kontrollsumme einzuschleusen.

## Wiederkehrende Importe

Nutze [Excel Power Query](#/wissen/excel-power-query). Im Editor Spalte auswählen → Datentyp → Mit Gebietsschema → Dezimalzahl und Quellgebietsschema. Der [CSV-Import](#/wissen/csv-import) erklärt den vollständigen Importweg mit Schutz führender Nullen.
