---
{
  "id": "nullwerte",
  "slug": "nullwerte",
  "titel": "Was mache ich mit fehlenden Werten?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Entscheide nach der fachlichen Bedeutung: null kann korrekt, tatsächlich null Menge oder eine Datenlücke sein. Fehlende Pflichtschlüssel müssen gesondert geprüft werden.",
  "ort": "Power Query → Spaltenfilter / benutzerdefinierte Spalte",
  "tags": [
    "Nullwerte behandeln",
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [
    "nullwerte",
    "fehlende Werte",
    "NULL behalten",
    "n/a",
    "Nullwerte behandeln"
  ],
  "verwandteThemen": [
    "pq-profiling",
    "pq-fehler",
    "datenbereinigung"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/replace-values",
    "https://learn.microsoft.com/en-us/powerquery-m/m-spec-values"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Nullwerte behandeln",
      "caption": "Geplante Aufnahme: Power Query – Nullwerte behandeln",
      "schritt": 6,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Was mache ich mit fehlenden Werten?",
        "klickfolge": [
          "In Profiling und Filter prüfen, welche Werte fehlen. **null ≠ 0**, **null ≠ \"\"** und **null ≠ Leerzeichen**. Der Text \"null\" ist ebenfalls kein echter null-Wert.",
          "**Fachlich korrekt:** Ein aktiver Vertrag hat kein Kündigungsdatum. null behalten, weil kein Datum existiert. Kein fiktives Datum einsetzen.",
          "**Fachlich tatsächlich 0:** Ein optionaler Zusatzmengenwert darf nur dann auf 0 gesetzt werden, wenn die Quellendefinition „keine Zusatzmenge“ ausdrücklich so abbildet. Regel und betroffene Anzahl festhalten.",
          "**Unbekannter Wert:** Fehlender Bestand oder fehlende Messung bleibt fehlend und wird in einer Prüfmenge untersucht. Nicht durch 0 Vollständigkeit vortäuschen.",
          "**Pflichtschlüssel fehlt:** Betroffene Zeilen separat sichern und Quelle klären. Wenn die Auswertung gültige Schlüssel voraussetzt, diese Zeilen nachvollziehbar ausschließen. Leere Texte und Leerzeichen zusätzlich prüfen.",
          "Eine bestätigte Regel gezielt auf die betroffene Spalte anwenden. In M ersetzt zum Beispiel Table.ReplaceValue(Quelle, null, 0, Replacer.ReplaceValue, {\"Zusatzmenge\"}) ausschließlich echte null-Werte dieser Spalte.",
          "Vor und nach der Regel Fehlwerte, ausgeschlossene Zeilen und Auswirkungen auf Summen oder Durchschnitt vergleichen."
        ],
        "daten": "### Vorher\n| Vertrag | Status | Kündigungsdatum | Zusatzmenge | Bestand |\n| --- | --- | --- | --- | --- |\n| V01 | aktiv | null | null | 100 |\n| V02 | gekündigt | 31.12.2026 | 2 | null |\n| null | aktiv | null | 1 | 50 |\n\n### Aktion\nLaut Beispieldefinition bedeutet fehlende Zusatzmenge „keine Zusatzmenge“. Dort null → 0. Leeres Kündigungsdatum eines aktiven Vertrags behalten. Unbekannten Bestand von V02 zur Prüfung markieren. Die Zeile ohne Vertragsschlüssel separat ablegen und aus der zuordenbaren Ergebnistabelle ausschließen.\n\n### Nachher · zuordenbare Verträge\n| Vertrag | Kündigungsdatum | Zusatzmenge | Bestand |\n| --- | --- | --- | --- |\n| V01 | null | 0 | 100 |\n| V02 | 31.12.2026 | 2 | null |\n\n**Prüfmenge:** eine Zeile ohne Schlüssel mit bekanntem Bestand 50; ein unbekannter Bestand bei V02. Keine der beiden Auffälligkeiten verschwindet stillschweigend.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-nullwerte.webp",
        "zweck": "Entscheide nach der fachlichen Bedeutung: null kann korrekt, tatsächlich null Menge oder eine Datenlücke sein. Fehlende Pflichtschlüssel müssen gesondert geprüft werden.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Entscheide nach der fachlichen Bedeutung: null kann korrekt, tatsächlich null Menge oder eine Datenlücke sein. Fehlende Pflichtschlüssel müssen gesondert geprüft werden.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. In Profiling und Filter prüfen, welche Werte fehlen. **null ≠ 0**, **null ≠ ""** und **null ≠ Leerzeichen**. Der Text "null" ist ebenfalls kein echter null-Wert.
2. **Fachlich korrekt:** Ein aktiver Vertrag hat kein Kündigungsdatum. null behalten, weil kein Datum existiert. Kein fiktives Datum einsetzen.
3. **Fachlich tatsächlich 0:** Ein optionaler Zusatzmengenwert darf nur dann auf 0 gesetzt werden, wenn die Quellendefinition „keine Zusatzmenge“ ausdrücklich so abbildet. Regel und betroffene Anzahl festhalten.
4. **Unbekannter Wert:** Fehlender Bestand oder fehlende Messung bleibt fehlend und wird in einer Prüfmenge untersucht. Nicht durch 0 Vollständigkeit vortäuschen.
5. **Pflichtschlüssel fehlt:** Betroffene Zeilen separat sichern und Quelle klären. Wenn die Auswertung gültige Schlüssel voraussetzt, diese Zeilen nachvollziehbar ausschließen. Leere Texte und Leerzeichen zusätzlich prüfen.
6. Eine bestätigte Regel gezielt auf die betroffene Spalte anwenden. In M ersetzt zum Beispiel Table.ReplaceValue(Quelle, null, 0, Replacer.ReplaceValue, {"Zusatzmenge"}) ausschließlich echte null-Werte dieser Spalte.
7. Vor und nach der Regel Fehlwerte, ausgeschlossene Zeilen und Auswirkungen auf Summen oder Durchschnitt vergleichen.

## Beispiel

### Vorher
| Vertrag | Status | Kündigungsdatum | Zusatzmenge | Bestand |
| --- | --- | --- | --- | --- |
| V01 | aktiv | null | null | 100 |
| V02 | gekündigt | 31.12.2026 | 2 | null |
| null | aktiv | null | 1 | 50 |

### Aktion
Laut Beispieldefinition bedeutet fehlende Zusatzmenge „keine Zusatzmenge“. Dort null → 0. Leeres Kündigungsdatum eines aktiven Vertrags behalten. Unbekannten Bestand von V02 zur Prüfung markieren. Die Zeile ohne Vertragsschlüssel separat ablegen und aus der zuordenbaren Ergebnistabelle ausschließen.

### Nachher · zuordenbare Verträge
| Vertrag | Kündigungsdatum | Zusatzmenge | Bestand |
| --- | --- | --- | --- |
| V01 | null | 0 | 100 |
| V02 | 31.12.2026 | 2 | null |

**Prüfmenge:** eine Zeile ohne Schlüssel mit bekanntem Bestand 50; ein unbekannter Bestand bei V02. Keine der beiden Auffälligkeiten verschwindet stillschweigend.

## Ergebnis

Fachlich richtige Lücken bleiben erhalten, bestätigte Nullmengen werden als 0 dargestellt und problematische Datensätze bleiben als Prüfmenge nachvollziehbar.

## Warum funktioniert das?

Ersetzen und Ausschließen verändern Aussage und Grundgesamtheit. Ein unbekannter Wert ist keine gemessene Null. Bei 0 und 500 ist der Durchschnitt der bekannten Werte 250; ein zusätzliches unbekanntes Feld als 0 auszugeben würde ihn auf 166,67 senken.

## Typischer Fehler

Pauschal jede leere Spalte mit 0 füllen oder wegen eines optionalen Datums ganze Zeilen entfernen.

## Plausibilitätscheck

Aus 3 Quellzeilen werden 2 zuordenbare Zeilen plus 1 Prüfzeile. Bekannter Bestand 150 = 100 im Ergebnis + 50 in der Prüfmenge. Der Gesamtbestand aller Verträge bleibt wegen des fehlenden Werts unbekannt.
