---
{
  "id": "problem-summewenns",
  "slug": "problem-summewenns",
  "titel": "SUMMEWENNS stimmt nicht",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine SUMMEWENNS-Auswertung liefert 0 oder einen zu hohen Bestand. Prüfe Trefferzahl, Datentyp und Stichtag anhand derselben Ausgangszeilen.",
  "ort": "Excel → Kriterien F2:H2; Kontrollformeln J2:J4",
  "tags": [
    "SUMMEWENNS stimmt nicht"
  ],
  "synonyme": [
    "SUMMEWENNS stimmt nicht",
    "Summe bleibt 0 oder ist unerwartet hoch."
  ],
  "verwandteThemen": [
    "summewenns",
    "zaehlenwenns",
    "stichtag"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/sumifs-function"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

Eine SUMMEWENNS-Auswertung liefert 0 oder einen zu hohen Bestand. Prüfe Trefferzahl, Datentyp und Stichtag anhand derselben Ausgangszeilen.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Lege die untenstehenden vier Zeilen in A1:D5 an. A ist Kunde, B Stichtag, C Produkt und D Bestand; alle Bestände sind Zahlen und alle Stichtage echte Daten.
2. Trage F2 = P001, G2 = A und H2 = 31.01.2026 außerhalb der Quelle ein. Prüfe, welche Ausgangszeilen alle drei Kriterien erfüllen.
3. Ergänze das Stichtagskriterium in SUMMEWENNS und prüfe ZÄHLENWENNS mit genau denselben Kriterienbereichen.
4. Prüfe bei 0 Treffern Kriterien auf Schreibweise und Typ. Bei richtigen Treffern, aber falscher Summe, prüfe die Beträge mit ISTZAHL. [SUMMEWENNS](#/wissen/summewenns) erklärt die Argumente ausführlich.

## Beispiel

| Zeile | A: Kunde | B: Stichtag | C: Produkt | D: Bestand |
| --- | --- | --- | --- | ---: |
| 2 | P001 | 31.01.2026 | A | 1250 |
| 3 | P001 | 31.01.2026 | A | 750 |
| 4 | P001 | 28.02.2026 | A | 2200 |
| 5 | P002 | 31.01.2026 | A | 500 |

### Vorher · Fehlerbild

F2=P001, G2=A und H2=31.01.2026. In J2 steht ohne Stichtagsprüfung:

```excel
=SUMMEWENNS(D2:D5;A2:A5;F2;C2:C5;G2)
```

Das ergibt **4200** und vermischt Januar und Februar.

### Korrektur · J3 und J4

```excel
=SUMMEWENNS(D2:D5;A2:A5;F2;C2:C5;G2;B2:B5;H2)
```

```excel
=ZÄHLENWENNS(A2:A5;F2;C2:C5;G2;B2:B5;H2)
```

D2:D5 ist der Summenbereich, A/C/B sind die Kriterienbereiche für Kunde/Produkt/Stichtag; F2/G2/H2 enthalten die Auswahl. Bereiche und Kriterienzellen passend zur Quelle ersetzen.

## Ergebnis

J3 ergibt 2000 und J4 ergibt 2 Treffer. Nur Zeilen 2 und 3 erfüllen Kunde, Produkt und Januar-Stichtag zugleich.

## Warum funktioniert das?

Die Kriterien wirken als UND. Die zusätzliche Datumsprüfung schließt den Februar-Bestand 2200 aus.

## Typischer Fehler

Bestände verschiedener Monate summieren oder Textbeträge für numerisch halten.

## Plausibilitätscheck

1250 + 750 = 2000. Februar mit H2=28.02.2026 ergibt 2200 bei einem Treffer; P999 ergibt 0 Treffer und Summe 0.
