---
{
  "id": "problem-xverweis-fehlt",
  "slug": "problem-xverweis-fehlt",
  "titel": "XVERWEIS findet Wert nicht",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "XVERWEIS meldet einen fehlenden Treffer, obwohl die Kennung optisch passt. Prüfe Typ und unerwünschte Leerzeichen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "XVERWEIS findet Wert nicht"
  ],
  "synonyme": [
    "XVERWEIS findet Wert nicht",
    "Fehlt oder #NV trotz scheinbar vorhandener Kennung."
  ],
  "verwandteThemen": [
    "xverweis",
    "glaetten",
    "excel-zahl-text"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/trim-function",
    "https://support.microsoft.com/de-de/office/gl%C3%A4tten-funktion-410388fa-c5df-49c6-b16c-9e5630b479f9"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

XVERWEIS meldet einen fehlenden Treffer, obwohl die Kennung optisch passt. Prüfe Typ und unerwünschte Leerzeichen.

## Voraussetzungen

XVERWEIS benötigt Microsoft 365 oder Excel 2021/2024.

## Schritte

1. A2 enthält den Text „K003 “ mit abschließendem Leerzeichen, B2 den Bestand 2000. F2 enthält „K003“ ohne Leerzeichen. Original erhalten.
2. Prüfe =A2=F2 (FALSCH), =LÄNGE(A2) (5) und =LÄNGE(F2) (4). Bei numerischen Kennungen zusätzlich ISTTEXT und ISTZAHL auf beiden Seiten vergleichen.
3. Bereinige das bestätigte äußere Leerzeichen in G2 mit =GLÄTTEN(A2). Die [Textbereinigung](#/wissen/glaetten) erklärt auch geschützte Leerzeichen.
4. Suche in H2 mit =XVERWEIS(F2;G2;B2;"Fehlt") über den bereinigten Schlüssel. Für mehrere Zeilen beide Bereiche passend erweitern.

## Beispiel

Vorher liefert =XVERWEIS(F2;A2;B2;"Fehlt") den Text **Fehlt**. Nach =GLÄTTEN(A2) in G2:

```excel
=XVERWEIS(F2;G2;B2;"Fehlt")
```

H2 ergibt **2000**. F2 ist das Suchkriterium, G2 die bereinigte Suchzelle und B2 die positionsgleiche Rückgabe. Diese Bezüge anpassen.

## Ergebnis

Der bereinigte Schlüssel K003 stimmt mit F2 überein; H2 liefert 2000.

## Warum funktioniert das?

Das normale äußere Leerzeichen wurde entfernt, ohne die Originalkennung zu überschreiben.

## Typischer Fehler

Kennungen pauschal in Zahlen umwandeln oder fachlich bedeutsame Leerzeichen entfernen.

## Plausibilitätscheck

=G2=F2 ergibt WAHR, beide Längen sind 4 und H2 ist 2000.
