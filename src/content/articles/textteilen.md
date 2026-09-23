---
{
  "id": "textteilen",
  "slug": "textteilen",
  "titel": "TEXTTEILEN: Text dynamisch verteilen",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Text bearbeiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "TEXTTEILEN teilt Text anhand eines Trennzeichens in mehrere Zellen. Der Ausgabebereich muss frei sein.",
  "ort": "Excel → Formelzelle",
  "tags": [
    "TEXTTEILEN: Text dynamisch verteilen"
  ],
  "synonyme": [
    "textteilen"
  ],
  "verwandteThemen": [
    "text-trennzeichen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/textsplit-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference"
  ],
  "screenshots": [],
  "praxis": true,
  "kurzformel": "```excel\n=TEXTTEILEN(A2;\"-\")\n```",
  "formelreferenz": {
    "funktion": "TEXTTEILEN",
    "eingabe": "A2 enthält P001-K001. H2:I2 ist frei und außerhalb einer Excel-Tabelle.",
    "anpassen": "A2 und Spaltentrennzeichen - ersetzen; Überlaufbereich für alle Bestandteile freihalten.",
    "version": "Microsoft 365 oder Excel 2024."
  }
}
---

## Wann brauche ich das?

Einen Text an Trennzeichen in mehrere Zellen aufteilen.

## Voraussetzungen

Eine Arbeitsmappe mit bekannten Quelldatentypen. Formeln sind für deutsches Excel angegeben; Hinweise zu neueren Funktionen stehen beim jeweiligen Beispiel.

## Schritte

1. Prüfe die Ausgangszellen und ihre Bedeutung: **A2 = P001-K001**. Die Zelladressen dienen als Beispiel und können auf die eigene Liste angepasst werden.
2. Wähle eine freie Ergebniszelle **H2** und gib die Formel ein. H2 und I2 freihalten; die Ausgabe muss außerhalb einer Excel-Tabelle liegen.
3. Bestätige mit Enter.
4. Vergleiche das Ergebnis mit dem Beispiel und prüfe mindestens einen leeren oder anders aufgebauten Ausgangswert, bevor du die Formel nach unten kopierst.

## Beispiel

### Vorher · Beispieldaten

| Ausgangswerte |
| --- |
| A2 = P001-K001 |

### Aktion

```excel
=TEXTTEILEN(A2;"-")
```

### Nachher · Beispielergebnis

| Ergebnis |
| --- |
| H2: P001; I2: K001 |

## Ergebnis

H2 enthält P001 und I2 enthält K001.

## Warum funktioniert das?

Das Spaltentrennzeichen - erzeugt zwei benachbarte Ergebniszellen. Die Quelle bleibt erhalten.

## Typischer Fehler

Den Überlaufbereich blockieren. TEXTTEILEN benötigt Microsoft 365 oder Excel 2024.

## Plausibilitätscheck

Für die genannten Ausgangswerte wird **H2: P001; I2: K001** erwartet. Die Originalzellen bleiben unverändert; ergänzte Ergebniszellen werden separat geprüft.

## Verfügbarkeit

TEXTTEILEN: Microsoft 365 oder Excel 2024.
