---
{
  "id": "excel-mehrere-kriterien",
  "slug": "excel-mehrere-kriterien",
  "titel": "Nachschlagen mit mehreren Kriterien",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Nachschlagen & Zuordnen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Kombiniere Kriterien zu einer eindeutigen fachlichen Zuordnung. Mehrere Treffer verlangen eine Aggregation oder eine Ergebnisliste.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "Nachschlagen mit mehreren Kriterien"
  ],
  "synonyme": [
    "mehrere kriterien"
  ],
  "verwandteThemen": [
    "summewenns",
    "und",
    "eindeutig",
    "xverweis",
    "zaehlenwenns",
    "excel-filtern"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/and-function"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=WENN(UND(A2=\"P001\";B2=\"A\");C2;0)\n```"
}
---

## Wann brauche ich das?

Eine Zeilenentscheidung von mehreren gleichzeitigen Kriterien abhängig machen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001; B2 = A; C2 = 1000**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001; B2 = A; C2 = 1000 |

### Aktion

```excel
=WENN(UND(A2="P001";B2="A");C2;0)
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| 1000 |

## Ergebnis

Eine Zeilenentscheidung von mehreren gleichzeitigen Kriterien abhängig machen.

## Warum funktioniert das?

UND bündelt die Prüfungen. Nur wenn beide zutreffen, wird der Betrag übernommen; sonst liefert diese ausdrücklich gewählte Regel 0.

## Typischer Fehler

Die Zeilenformel mit einer Gesamtaggregation verwechseln; für eine direkte Gesamtsumme SUMMEWENNS nutzen.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **1000** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.
