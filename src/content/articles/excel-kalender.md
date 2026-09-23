---
{
  "id": "excel-kalender",
  "slug": "excel-kalender",
  "titel": "JAHR, MONAT, TAG und DATUM",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum & Datentypen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zerlege ein echtes Datum in Jahr, Monat und Tag oder baue aus drei Zahlen einen Datumswert auf.",
  "ort": "Excel → separate Formelzellen; Datumsergebnisse als Datum formatieren",
  "tags": [
    "JAHR, MONAT, TAG und DATUM"
  ],
  "synonyme": [
    "jahr",
    "monat",
    "tag",
    "datum"
  ],
  "verwandteThemen": [
    "excel-datum",
    "excel-monatsende"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/date-function",
    "https://support.microsoft.com/de-de/excel/functions/date-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=DATUM(B2;C2;D2)\n```",
  "formelreferenz": {
    "funktion": "DATUM",
    "eingabe": "B2=2026, C2=9, D2=23. Formel in E2, als Datum formatiert.",
    "anpassen": "B2/C2/D2 sind Jahr/Monat/Tag; die drei Zahlenzellen ersetzen. JAHR, MONAT und TAG zum Zerlegen stehen im Artikel.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Zerlege ein echtes Datum in Jahr, Monat und Tag oder baue aus drei Zahlen einen Datumswert auf.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Trage A2 als echtes Datum 23.09.2026 ein, etwa mit =DATUM(2026;9;23).
2. Gib in B2 =JAHR(A2), C2 =MONAT(A2) und D2 =TAG(A2) ein.
3. Baue in E2 mit =DATUM(B2;C2;D2) den Datumswert wieder auf und formatiere E2 als Datum.
4. Prüfe B2:D2 = 2026, 9, 23 und E2 = A2. Ersetze A2 beziehungsweise die drei Zahlenzellen durch deine eigenen Bezüge.

## Beispiel

| Ergebniszelle | Eingabe | Formel | Ergebnis |
| --- | --- | --- | --- |
| B2 | A2 = echtes Datum 23.09.2026 | `=JAHR(A2)` | 2026 |
| C2 | A2 wie oben | `=MONAT(A2)` | 9 |
| D2 | A2 wie oben | `=TAG(A2)` | 23 |
| E2 | B2=2026, C2=9, D2=23 | `=DATUM(B2;C2;D2)` | 23.09.2026 |

Text „23.09.2026“ ist kein verlässlich nutzbarer Datumswert. Zunächst [Datumswerte korrigieren](#/wissen/excel-datum). Monatsnummer 9 allein unterscheidet September 2025 und September 2026 nicht; für Zeitgruppen immer Jahr berücksichtigen.

## Ergebnis

B2:D2 ergeben 2026, 9 und 23. E2 stellt wieder 23.09.2026 dar.

## Warum funktioniert das?

Excel speichert Datum als Zahl. Die Funktionen lesen Kalenderbestandteile; DATUM setzt sie zusammen.

## Typischer Fehler

DATUM validiert nicht einfach jeden Eingabewert: =DATUM(2026;13;1) ergibt 01.01.2027 und =DATUM(2026;2;30) ergibt 02.03.2026. Überläufe werden normalisiert.

## Plausibilitätscheck

=E2=A2 ergibt WAHR. Bei 23.09.2026 ist der Tag 23, nicht die Monatsnummer 9.
