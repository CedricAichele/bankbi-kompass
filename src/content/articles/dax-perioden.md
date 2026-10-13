---
{
  "id": "dax-perioden",
  "slug": "dax-perioden",
  "titel": "Monat, Quartal und Vorperiode in DAX vergleichen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "DAX & Measures",
  "schwierigkeit": "Fortgeschritten",
  "kurzbeschreibung": "DATESMTD/TOTALMTD, DATESQTD/TOTALQTD und vollständige Vorperioden werden an Bewegungsdaten gegenübergestellt. Stichtag und Periodengrenzen bestimmen das Ergebnis.",
  "ort": "Power BI Desktop → Modellierung; Eingabeort steht bei jeder Formel",
  "tags": [
    "DATESMTD",
    "TOTALMTD",
    "DATESQTD",
    "TOTALQTD",
    "PARALLELPERIOD",
    "PREVIOUSMONTH",
    "PREVIOUSYEAR"
  ],
  "synonyme": [
    "datesmtd",
    "totalmtd",
    "datesqtd",
    "totalqtd",
    "parallelperiod",
    "previousmonth",
    "previousyear"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "bestand-bewegung",
    "datesytd-totalytd",
    "dateadd",
    "dax-formeln"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-10-13",
  "art": "artikel",
  "ebene": "Praxisartikel",
  "praxis": true,
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/datesmtd-function-dax",
    "https://learn.microsoft.com/en-us/dax/totalmtd-function-dax",
    "https://learn.microsoft.com/en-us/dax/datesqtd-function-dax",
    "https://learn.microsoft.com/en-us/dax/totalqtd-function-dax",
    "https://learn.microsoft.com/en-us/dax/parallelperiod-function-dax",
    "https://learn.microsoft.com/en-us/dax/previousmonth-function-dax",
    "https://learn.microsoft.com/en-us/dax/previousyear-function-dax"
  ]
}
---

## Wann brauche ich das?
Du möchtest Bewegungen seit Monats- oder Quartalsbeginn aufsummieren oder mit einem vollständigen Vormonat beziehungsweise Vorjahr vergleichen. Monatsbestände dürfen dagegen nicht einfach über die Zeit addiert werden.
## Voraussetzungen
Vorgaenge enthält synthetische Bewegungen mit Datum und Betrag: 05.03.2025/40, 10.01.2026/10, 05.02.2026/20, 05.03.2026/30. Kalender hat jeden Tag vom 01.01.2025 bis 31.12.2026 genau einmal; Datum als Datumswert. Als Datumstabelle markieren und Kalender[Datum] aktiv 1:n mit Vorgaenge[Datum] verbinden. Keine Uhrzeitanteile. Basismeasure: Betrag gesamt = SUM(Vorgaenge[Betrag]).
## Schritte
1. Prüfe Kalender, Beziehung und Bewegungskennzahl.
2. Lege jede folgende Definition einzeln als neues Measure an.
3. Filtere im Bericht Kalender[Datum] auf 05.03.2026.
4. Kontrolliere Monats-/Quartalsanfang und die vollständigen Vergleichsperioden.
## Beispiel
```dax
Betrag MTD = CALCULATE([Betrag gesamt], DATESMTD(Kalender[Datum]))
```
```dax
Betrag MTD kurz = TOTALMTD([Betrag gesamt], Kalender[Datum])
```
Beide ergeben am 05.03.2026 **30**. DATESMTD liefert die Datumsmenge vom Monatsanfang bis zum letzten Datum im aktuellen Kontext; CALCULATE wertet das Basismeasure darauf aus. TOTALMTD verbindet die beiden Aufgaben.

```dax
Betrag QTD = CALCULATE([Betrag gesamt], DATESQTD(Kalender[Datum]))
```
```dax
Betrag QTD kurz = TOTALQTD([Betrag gesamt], Kalender[Datum])
```
Beide ergeben **60** (10 + 20 + 30) seit 01.01.2026. Am 05.02.2026 wäre MTD 20 und QTD 30.

```dax
Betrag Vormonat = CALCULATE([Betrag gesamt], PREVIOUSMONTH(Kalender[Datum]))
```
Am 05.03.2026 ergibt das **20** aus dem gesamten Februar. PREVIOUSMONTH orientiert sich am ersten Datum im aktuellen Kontext. Die Auswahl muss fachlich klar sein, besonders wenn sie mehrere Monate umfasst.

```dax
Betrag vorheriges Jahr = CALCULATE([Betrag gesamt], PREVIOUSYEAR(Kalender[Datum]))
```
Ergebnis **40** aus dem gesamten Jahr 2025. PREVIOUSYEAR verwendet bei klassischer Datumsspalten-Syntax das letzte sichtbare Datum zur Bestimmung des Vorjahrs. Das ist kein Vorjahreswert nur für den 05.03. oder nur bis März.

```dax
Betrag vorherige Monatsperiode = CALCULATE(
    [Betrag gesamt],
    PARALLELPERIOD(Kalender[Datum], -1, MONTH)
)
```
Ergebnis ebenfalls **20**. PARALLELPERIOD liefert volle verschobene Perioden. DATEADD verschiebt dagegen bei klassischer Datumsspalten-Syntax die sichtbaren Tage; ein einzelner 05.03. verschoben um einen Monat entspricht 05.02., nicht dem ganzen Februar. Mit zusätzlichen Bewegungen am 20.02. würde diese Differenz sichtbar.
## Ergebnis
Am 05.03.2026: MTD 30, QTD 60, Vormonat 20, vollständiges Vorjahr 40. Für [Jahresfortschritt](#/wissen/datesytd-totalytd) und [gleichen Zeitraum im Vorjahr](#/wissen/dateadd) gelten andere Fragestellungen.
## Warum funktioniert das?
Datumsfunktionen liefern einen Filterzeitraum, TOTAL-Funktionen eine berechnete Zahl. Alle Beispiele nutzen klassische Zeitintelligenz mit einer Datumsspalte. Neuere kalenderbasierte Varianten können zusätzliche Parameter und andere Semantik haben; deshalb offizielle Syntax und Modellvoraussetzungen beachten.
## Was muss ich anpassen?
Basismeasure, Kalendername, Datumsspalte und Beziehung ersetzen. Für abweichende Geschäftsjahre oder Kalender ist eine eigene fachliche Periodendefinition nötig. „Vormonat“ und „gleiche Tage des Vormonats“ nicht gleichsetzen.
## Typischer Fehler
Kalenderlücken, Filter auf dem Faktendatum statt Kalenderdatum oder Addition monatlicher Bestandsstände. Dann kann technisch gültiger Code eine fachlich falsche Kennzahl liefern.
## Plausibilitätscheck
Teste 05.02.2026 (MTD 20 / QTD 30) und 05.03.2026 (30 / 60). Ergänze testweise 20.02.2026/7: PREVIOUSMONTH und PARALLELPERIOD im März ergeben 27, DATEADD für nur 05.03. bleibt 20. Prüfe Perioden ohne Bewegung und Jahreswechsel.
