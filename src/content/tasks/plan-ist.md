---
{
  "id": "plan-ist",
  "slug": "plan-ist",
  "titel": "Plan/Ist darstellen",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Stimme Plan und Ist auf dieselbe Ebene und denselben Zeitraum ab; zeige dann Abweichung und Planerreichung.",
  "ort": "Power BI: DIVIDE und Karte · Excel: PivotTable / Formeln · IDA: Gruppenquote",
  "tags": [
    "Plan/Ist darstellen",
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "divide",
    "bedingte-formatierung",
    "ida-quote"
  ],
  "kontexte": [
    "Marktsteuerung",
    "Neugeschäft"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "aufgabe",
  "quellen": [
    "https://learn.microsoft.com/en-us/dax/divide-function-dax",
    "https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-conditional-table-formatting",
    "https://www.ibm.com/docs/en/cognos-analytics/12.0.x?topic=style-summarizing-data-relationally"
  ],
  "screenshots": [],
  "praxis": true
}
---

## Wann brauche ich das?

Plan und Ist auf identischer Monats- und Personenebene vergleichen.

## Voraussetzungen

Ein vorhandener Datenbestand mit passender Zeilenebene. Tabellen- und Feldnamen im Beispiel auf die eigene Quelle übertragen.

## Schritte

1. Lege die vier Spalten in einer Tabelle Vergleich an. Plan und Ist sind hier bereits auf derselben Ebene.
2. Prüfe, dass Monat und Person zusammen eindeutig sind. Bei getrennten Quellen Ist zuerst auf diese Planebene verdichten.
3. Erstelle in Power BI die Measures Plan = SUM(Vergleich[Plan]) und Ist = SUM(Vergleich[Ist]).
4. Erstelle Abweichung = [Ist] - [Plan] und Erreichung = DIVIDE([Ist], [Plan]). Formatiere Erreichung als Prozent.
5. Lege eine Tabelle mit Person, Plan, Ist, Abweichung und Erreichung an. Filtere auf März.
6. Zeige zusätzlich die Gesamtzeile. Prüfe insbesondere, dass die Gesamtquote neu aus den Gesamtsummen entsteht.

## Beispiel

### Vorher · Beispieldaten

| Monat | Person | Plan | Ist |
| --- | --- | --- | --- |
| 2026-03 | P001 | 100 | 90 |
| 2026-03 | P002 | 200 | 220 |

```dax
Abweichung = [Ist] - [Plan]
Erreichung = DIVIDE ( [Ist], [Plan] )
```

### Aktion

Erstelle in Power BI die Measures Plan = SUM(Vergleich[Plan]) und Ist = SUM(Vergleich[Ist]).
Erstelle Abweichung = [Ist] - [Plan] und Erreichung = DIVIDE([Ist], [Plan]). Formatiere Erreichung als Prozent.

### Nachher · Beispielergebnis

P001: −10 und 90 %. P002: +20 und 110 %. Gesamt: Plan 300, Ist 310, Abweichung +10, Erreichung 103,33 %.

## Ergebnis

Stimme Plan und Ist auf dieselbe Ebene und denselben Zeitraum ab; zeige dann Abweichung und Planerreichung.

## Warum funktioniert das?

Quoten benötigen Zähler und Nenner auf derselben Ebene. Der Gesamtwert ist 310/300, nicht der Mittelwert 100 % der beiden Personenquoten.

## Typischer Fehler

**Ursache und Lösung:** Bei Monatsplan je Konto kann ein Join den Plan vervielfachen. Plan nie nach dem Join ungeprüft summieren.

## Plausibilitätscheck

Summe Plan 300 und Summe Ist 310 unabhängig von der Darstellung bestätigen.

## Vergleich

Excel: =(D2-C2) und =WENN(C2=0;"";D2/C2). Reporting: gruppierte Summen vor Quotientenbildung.
