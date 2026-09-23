---
{
  "id": "excel-datum",
  "slug": "excel-datum",
  "titel": "Datumswerte korrigieren",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Datum & Datentypen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Wandle eindeutig interpretierbaren Datumstext in einen echten Datumswert um. Wähle DATWERT für Einzelwerte, Text in Spalten für einen bekannten Aufbau oder Power Query für wiederkehrende Importe.",
  "ort": "Excel → Hilfszelle H2 mit DATWERT; alternative Importwege im Artikel",
  "tags": [
    "Datumswerte korrigieren",
    "Reporting"
  ],
  "synonyme": [
    "datum falsch"
  ],
  "verwandteThemen": [
    "excel-monatsende",
    "excel-datumsdifferenz",
    "pq-datum",
    "datum-sortieren",
    "datenbereinigung"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/datevalue-function",
    "https://support.microsoft.com/de-de/excel/functions/datevalue-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=DATWERT(A2)\n```",
  "formelreferenz": {
    "funktion": "DATWERT",
    "eingabe": "A2 enthält Text „31.01.2026“, bestätigte deutsche Datumsinterpretation. Ergebnis H2 als Datum formatieren.",
    "anpassen": "A2 durch die Datumstextzelle ersetzen. Mehrdeutige Formate erst nach Quellenklärung konvertieren.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Wandle eindeutig interpretierbaren Datumstext in einen echten Datumswert um. Wähle DATWERT für Einzelwerte, Text in Spalten für einen bekannten Aufbau oder Power Query für wiederkehrende Importe.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Prüfe die Quelle. A2 enthält den Text „31.01.2026“ mit bekannter deutscher Datumsreihenfolge Tag–Monat–Jahr; zum Nachbauen mit Apostroph eingeben.
2. Gib in H2 =DATWERT(A2) ein. Das Beispiel setzt eine passende deutsche Datumsinterpretation der Excel-Umgebung voraus.
3. Wähle für H2 Start → Zahlenformat → Datum. Die Formatierung macht die bereits umgewandelte Zahl lesbar.
4. Prüfe =ISTZAHL(H2) und =H2=DATUM(2026;1;31). Beide müssen WAHR ergeben. Bei 03/04/2026 ohne Quellkonvention zuerst die Quelle klären.

## Beispiel

A2: Text „31.01.2026“. Ergebniszelle H2:

```excel
=DATWERT(A2)
```

Nach Datumsformatierung steht dort **31.01.2026**. Ein Zahlenformatwechsel an A2 allein würde den Text nicht konvertieren. Ersetze A2 durch deine Textzelle. Ein mehrdeutiger Wert 03/04/2026 kann 3. April oder 4. März bedeuten; keine automatische Annahme treffen.

## Ergebnis

H2 ist ein echter Datumswert für den 31.01.2026 und kann numerisch verglichen werden. Die ursprüngliche Textzelle bleibt erhalten.

## Warum funktioniert das?

DATWERT interpretiert einen Datumstext mit der passenden Umgebungskonvention. Das Zellformat steuert nur die Darstellung der resultierenden Datumszahl.

## Typischer Fehler

Eine erfolgreich gelesene, aber falsch interpretierte Datumszahl für korrekt halten. ISTZAHL allein beweist weder die richtige Reihenfolge noch die fachliche Bedeutung.

## Plausibilitätscheck

=TAG(H2) ergibt 31, =MONAT(H2) ergibt 1 und =JAHR(H2) ergibt 2026. =H2=DATUM(2026;1;31) ist WAHR.

## Alternative: Text in Spalten

Auf einer Kopie die Datumstextspalte auswählen → Daten → Text in Spalten. Für eine einzelne Datumsspalte „Getrennt“ wählen, in der Vorschau keine Aufteilung durch Trennzeichen zulassen → Weiter → Spaltendatenformat Datum → **TMJ** für bestätigtes Tag–Monat–Jahr. Ein freies Ziel wählen und Fertig stellen. Für bestätigtes Monat–Tag–Jahr stattdessen MTJ; unbekannte Reihenfolge nicht raten. Danach dieselben Tag-/Monat-Kontrollen ausführen.

## Alternative: Power Query mit Gebietsschema

Für wiederkehrende oder anders formatierte Lieferungen: [Excel Power Query](#/wissen/excel-power-query) öffnen. Automatischen Typ-Schritt prüfen, die ursprüngliche Textspalte auswählen → Datentyp → Mit Gebietsschema → Datum und Gebietsschema der Quelle. Der [CSV-Import](#/wissen/csv-import) führt vom Import bis zum Laden; der [Power-Query-Workflow](#/wissen/pq-workflow) erklärt die Reihenfolge der Typprüfung. Beispielsweise deutsches TMJ nur bei bestätigter deutscher Quelle wählen.
