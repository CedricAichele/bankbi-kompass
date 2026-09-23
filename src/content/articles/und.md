---
{
  "id": "und",
  "slug": "und",
  "titel": "UND: alle Bedingungen erfüllen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Logik & Fehlerbehandlung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "UND ist nur WAHR, wenn jede Bedingung WAHR ist.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "UND: alle Bedingungen erfüllen",
    "Reporting"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "oder",
    "nicht",
    "zaehlenwenns",
    "excel-fehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/and-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=UND(A2=F2;C2=G2)\n```",
  "schnellschritte": [
    "Quellbereiche und Kriterienzellen festlegen.",
    "Formel in einer freien Ergebniszelle eingeben.",
    "Ausgabe anhand der passenden Quellzeilen kontrollieren."
  ],
  "formelreferenz": {
    "funktion": "UND",
    "eingabe": "A1:D4: Kunde/Konto/Segment/Bestand; Zeile 2=P001/K001/A/1000, Zeile 3=P001/K002/B/2000, Zeile 4=P002/K003/A/500. Ergebnis in H2. F2=P001, G2=A.",
    "anpassen": "Die beiden Zellvergleiche ersetzen. Beide müssen WAHR sein; die Formel prüft eine Zeile, keine Zuordnungstabelle.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Mehrere Bedingungen für dieselbe Zeile gleichzeitig verlangen.

## Voraussetzungen

Eine zusammenhängende Liste mit Überschriften und passenden Datentypen. Die Formeln verwenden deutsches Excel und Semikolon als Trennzeichen. Die hier verwendete klassische Funktion ist in Excel 2016/2019/2021/2024 und Microsoft 365 verfügbar.

## Schritte

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **F2 = P001; G2 = A**. Passe diese Bezüge für deine Liste an.
3. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Achte auf gleich große und gleich ausgerichtete Bereiche.
4. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.
5. Prüfe einen zweiten Fall und fehlende Werte. Bei wachsenden Listen verwende Excel-Tabellen mit strukturierten Bezügen oder erweitere alle zusammengehörenden Bereiche.

## Beispiel

### Vorher · Beispieldaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

F2 = P001; G2 = A

### Aktion

```excel
=UND(A2=F2;C2=G2)
```

### Nachher · Beispielergebnis

| Ausgabe ab H2 |
| --- |
| WAHR |

## Ergebnis

A2=P001, C2=A, F2=P001 und G2=A ergeben WAHR, weil beide Bedingungen erfüllt sind.

## Warum funktioniert das?

K001 gehört zu P001 und Segment A; deshalb ist die gesamte Aussage wahr.

## Typischer Fehler

UND als zeilenweisen Filter über eine ganze Matrix statt als einzelne logische Gesamtaussage einsetzen.

## Plausibilitätscheck

Erwartete Ausgabe: **WAHR**. Die Ausgangsliste umfasst drei Kontenzeilen, zwei Kunden und insgesamt 3500. Prüfe bei Kriterienwechsel die betreffenden Zeilen erneut.

## Argumente verstehen

Beide Vergleiche müssen WAHR sein.
