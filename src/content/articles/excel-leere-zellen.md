---
{
  "id": "excel-leere-zellen",
  "slug": "excel-leere-zellen",
  "titel": "Leere Zellen und Fehlerwerte prüfen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten prüfen & bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Unterscheide unbefüllte Zellen, leere Formelausgaben, 0, Leerzeichen und Fehlerwerte, bevor du fehlende Werte behandelst.",
  "ort": "Excel → Prüfspalten B:D neben den Ausgangswerten",
  "tags": [
    "Leere Zellen und Fehlerwerte prüfen"
  ],
  "synonyme": [
    "leere zellen",
    "fehlerwerte"
  ],
  "verwandteThemen": [
    "nullwerte",
    "wennfehler",
    "wennnv"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/is-functions",
    "https://support.microsoft.com/de-de/excel/functions/is-functions"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=ISTLEER(A2)\n```",
  "formelreferenz": {
    "funktion": "ISTLEER / ISTFEHLER",
    "eingabe": "A2 unbefüllt; A3 Formel =\"\"; A4 Zahl 0; A5 ein Leerzeichen; A6 Formel =1/0. ISTLEER-Prüfung in B2 und nach unten kopieren.",
    "anpassen": "A2 durch die Prüfadresse ersetzen. Zusätzliche Vergleiche mit leerem Text und ISTFEHLER sind im Artikel vollständig gegenübergestellt.",
    "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
  }
}
---

## Wann brauche ich das?

Unterscheide unbefüllte Zellen, leere Formelausgaben, 0, Leerzeichen und Fehlerwerte, bevor du fehlende Werte behandelst.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Lasse A2 wirklich unbefüllt. Trage in A3 ="", A4 die Zahl 0, A5 ein einzelnes Leerzeichen und A6 =1/0 ein.
2. Prüfe in B2 mit =ISTLEER(A2), in C2 mit =A2="" und in D2 mit =ISTFEHLER(A2).
3. Kopiere die drei Prüfungen bis Zeile 6 und vergleiche die Ergebnistabelle.
4. Entscheide fachlich über jeden Fall. Ersetze weder fehlende Angaben noch Fehler pauschal durch 0.

## Beispiel

| Zelle / Inhalt | ISTLEER | Vergleich mit "" | ISTFEHLER |
| --- | --- | --- | --- |
| A2 wirklich unbefüllt | WAHR | WAHR | FALSCH |
| A3 Formel `=""` | FALSCH | WAHR | FALSCH |
| A4 Zahl 0 | FALSCH | FALSCH | FALSCH |
| A5 ein Leerzeichen | FALSCH | FALSCH | FALSCH |
| A6 Formel `=1/0`, zeigt #DIV/0! | FALSCH | #DIV/0! | WAHR |

```excel
=ISTLEER(A2)
```

ISTLEER erkennt nur eine Zelle ohne Inhalt. Der Vergleich =A2="" erfasst auch eine leere Textausgabe, fängt aber keinen Fehler ab. ISTFEHLER erkennt Fehler wie #NV und #DIV/0!, nicht fehlende Werte. Ersetze A2 durch die zu prüfende Zelle. Für gezielte Behandlung siehe [WENNNV](#/wissen/wennnv) und [WENNFEHLER](#/wissen/wennfehler).

## Ergebnis

Nur A2 ist technisch leer. A2 und A3 vergleichen sich gleich leerem Text. Nur A6 liefert bei ISTFEHLER WAHR.

## Warum funktioniert das?

Zellinhalt, angezeigter Wert und Fehlerzustand sind verschiedene Eigenschaften.

## Typischer Fehler

ISTLEER=FALSCH als Beweis für eine gültige Zahl oder eine optisch leere Zelle als gemessene 0 ansehen.

## Plausibilitätscheck

Fünf unterschiedliche Fälle bleiben unterscheidbar. Der Vergleich in C6 muss den Fehler weitergeben; D6 erkennt ihn.
