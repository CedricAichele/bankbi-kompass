---
{
  "id": "zusammenfuehren",
  "slug": "zusammenfuehren",
  "titel": "Merge: Tabellen über Schlüssel zusammenführen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Merge ergänzt zu einer Tabelle passende Werte einer zweiten Tabelle. Prüfe vor dem Erweitern, wie viele Treffer je Schlüssel erwartet werden.",
  "ort": "Power Query → Start → Abfragen zusammenführen",
  "tags": [
    "Tabellen zusammenführen",
    "Reporting",
    "Grundbegriff"
  ],
  "synonyme": [
    "tabellen verbinden",
    "mehr zeilen nach merge",
    "zwei tabellen",
    "Merge",
    "Join",
    "Werte aus anderer Tabelle holen",
    "zwei Tabellen verbinden",
    "mehrere Zeilen",
    "zwei tabellen zusammen",
    "wert aus anderer tabelle",
    "Tabellen zusammenführen"
  ],
  "verwandteThemen": [
    "anhaengen",
    "granularitaet",
    "problem-merge-zeilen",
    "beziehung-oder-merge"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Tabellen zusammenführen",
      "caption": "Geplante Aufnahme: Power Query-Editor – Tabellen zusammenführen",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Merge: Tabellen über Schlüssel zusammenführen",
        "klickfolge": [
          "Ziel festlegen: Bestand soll das Segment aus Kunden erhalten. Kunden muss dafür genau eine gültige Segmentzeile je Kundennummer enthalten.",
          "Schlüssel beider Tabellen auf gleichen Datentyp, Leerzeichen, führende Nullen, fehlende Werte und Eindeutigkeit prüfen. Mehrteilige Schlüssel in derselben Reihenfolge auswählen.",
          "Bestand auswählen → **Start → Abfragen zusammenführen**. Kunden als rechte Tabelle wählen, Kundennummer in beiden Vorschauen markieren. **Links außen** erhält alle Bestandszeilen.",
          "Ergebnisspalte über das Doppelpfeil-Symbol **erweitern** und nur Segment auswählen. Erst beim Erweitern können mehrere Treffer mehrere Ergebniszeilen erzeugen.",
          "Zeilenzahl und Summe vorher/nachher vergleichen. Fehlendes Segment bedeutet hier keinen passenden Treffer; Ursache prüfen, nicht automatisch als gültiges Segment behandeln.",
          "Bei Mehrfachtreffern prüfen, ob die neue Zeilenebene gewünscht ist. Wenn nur ein Attribut gebraucht wird, rechte Tabelle fachlich eindeutig machen; bei benötigten Details deren Granularität bewusst übernehmen."
        ],
        "daten": "### Vorher\n**Bestand**\n| Kundennummer | Bestand |\n| --- | --- |\n| 1001 | 300 |\n| 1002 | 500 |\n\n**Kunden**\n| Kundennummer | Segment |\n| --- | --- |\n| 1001 | Privat |\n| 1002 | Gewerbe |\n\n### Aktion\nLinks außen verbinden, Segment erweitern.\n\n### Nachher\n| Kundennummer | Bestand | Segment |\n| --- | --- | --- |\n| 1001 | 300 | Privat |\n| 1002 | 500 | Gewerbe |\n\n### Warum entstehen plötzlich mehr Zeilen?\nEine linke Kundenzeile 1001 mit Kundenbestand 300 trifft rechts auf Konten A, B und C. Nach Expand entstehen **3 Zeilen**. Der Kundenbestand 300 steht nun dreimal; eine Summe 900 wäre falsch. Das zusätzliche Kontodetail kann gewünscht sein, die wiederholte Kundenkennzahl ist aber nicht auf dieser Ebene additiv.\n\nBei zwei linken und drei rechten Zeilen desselben Schlüssels entstehen **2 × 3 = 6** Trefferkombinationen. Bei 1:1 bleibt je Treffer eine Zeile, bei 1:n wächst die Zeilenmenge, bei n:m können sich beide Seiten vervielfachen.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-zusammenfuehren.webp",
        "zweck": "Merge ergänzt zu einer Tabelle passende Werte einer zweiten Tabelle. Prüfe vor dem Erweitern, wie viele Treffer je Schlüssel erwartet werden.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    },
    {
      "alt": "Bedienort: Power Query – Tabellenspalte erweitern",
      "caption": "Geplante Aufnahme: Power Query – Tabellenspalte erweitern",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Den zweiten notwendigen Schritt nach dem Merge zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Merge: Tabellen über Schlüssel zusammenführen",
        "klickfolge": [
          "Ziel festlegen: Bestand soll das Segment aus Kunden erhalten. Kunden muss dafür genau eine gültige Segmentzeile je Kundennummer enthalten.",
          "Schlüssel beider Tabellen auf gleichen Datentyp, Leerzeichen, führende Nullen, fehlende Werte und Eindeutigkeit prüfen. Mehrteilige Schlüssel in derselben Reihenfolge auswählen.",
          "Bestand auswählen → **Start → Abfragen zusammenführen**. Kunden als rechte Tabelle wählen, Kundennummer in beiden Vorschauen markieren. **Links außen** erhält alle Bestandszeilen.",
          "Ergebnisspalte über das Doppelpfeil-Symbol **erweitern** und nur Segment auswählen. Erst beim Erweitern können mehrere Treffer mehrere Ergebniszeilen erzeugen.",
          "Zeilenzahl und Summe vorher/nachher vergleichen. Fehlendes Segment bedeutet hier keinen passenden Treffer; Ursache prüfen, nicht automatisch als gültiges Segment behandeln.",
          "Bei Mehrfachtreffern prüfen, ob die neue Zeilenebene gewünscht ist. Wenn nur ein Attribut gebraucht wird, rechte Tabelle fachlich eindeutig machen; bei benötigten Details deren Granularität bewusst übernehmen."
        ],
        "daten": "### Vorher\n**Bestand**\n| Kundennummer | Bestand |\n| --- | --- |\n| 1001 | 300 |\n| 1002 | 500 |\n\n**Kunden**\n| Kundennummer | Segment |\n| --- | --- |\n| 1001 | Privat |\n| 1002 | Gewerbe |\n\n### Aktion\nLinks außen verbinden, Segment erweitern.\n\n### Nachher\n| Kundennummer | Bestand | Segment |\n| --- | --- | --- |\n| 1001 | 300 | Privat |\n| 1002 | 500 | Gewerbe |\n\n### Warum entstehen plötzlich mehr Zeilen?\nEine linke Kundenzeile 1001 mit Kundenbestand 300 trifft rechts auf Konten A, B und C. Nach Expand entstehen **3 Zeilen**. Der Kundenbestand 300 steht nun dreimal; eine Summe 900 wäre falsch. Das zusätzliche Kontodetail kann gewünscht sein, die wiederholte Kundenkennzahl ist aber nicht auf dieser Ebene additiv.\n\nBei zwei linken und drei rechten Zeilen desselben Schlüssels entstehen **2 × 3 = 6** Trefferkombinationen. Bei 1:1 bleibt je Treffer eine Zeile, bei 1:n wächst die Zeilenmenge, bei n:m können sich beide Seiten vervielfachen.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-merge-erweitern.webp",
        "zweck": "Merge ergänzt zu einer Tabelle passende Werte einer zweiten Tabelle. Prüfe vor dem Erweitern, wie viele Treffer je Schlüssel erwartet werden.",
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

Merge ergänzt zu einer Tabelle passende Werte einer zweiten Tabelle. Prüfe vor dem Erweitern, wie viele Treffer je Schlüssel erwartet werden.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Ziel festlegen: Bestand soll das Segment aus Kunden erhalten. Kunden muss dafür genau eine gültige Segmentzeile je Kundennummer enthalten.
2. Schlüssel beider Tabellen auf gleichen Datentyp, Leerzeichen, führende Nullen, fehlende Werte und Eindeutigkeit prüfen. Mehrteilige Schlüssel in derselben Reihenfolge auswählen.
3. Bestand auswählen → **Start → Abfragen zusammenführen**. Kunden als rechte Tabelle wählen, Kundennummer in beiden Vorschauen markieren. **Links außen** erhält alle Bestandszeilen.
4. Ergebnisspalte über das Doppelpfeil-Symbol **erweitern** und nur Segment auswählen. Erst beim Erweitern können mehrere Treffer mehrere Ergebniszeilen erzeugen.
5. Zeilenzahl und Summe vorher/nachher vergleichen. Fehlendes Segment bedeutet hier keinen passenden Treffer; Ursache prüfen, nicht automatisch als gültiges Segment behandeln.
6. Bei Mehrfachtreffern prüfen, ob die neue Zeilenebene gewünscht ist. Wenn nur ein Attribut gebraucht wird, rechte Tabelle fachlich eindeutig machen; bei benötigten Details deren Granularität bewusst übernehmen.

## Beispiel

### Vorher
**Bestand**
| Kundennummer | Bestand |
| --- | --- |
| 1001 | 300 |
| 1002 | 500 |

**Kunden**
| Kundennummer | Segment |
| --- | --- |
| 1001 | Privat |
| 1002 | Gewerbe |

### Aktion
Links außen verbinden, Segment erweitern.

### Nachher
| Kundennummer | Bestand | Segment |
| --- | --- | --- |
| 1001 | 300 | Privat |
| 1002 | 500 | Gewerbe |

### Warum entstehen plötzlich mehr Zeilen?
Eine linke Kundenzeile 1001 mit Kundenbestand 300 trifft rechts auf Konten A, B und C. Nach Expand entstehen **3 Zeilen**. Der Kundenbestand 300 steht nun dreimal; eine Summe 900 wäre falsch. Das zusätzliche Kontodetail kann gewünscht sein, die wiederholte Kundenkennzahl ist aber nicht auf dieser Ebene additiv.

Bei zwei linken und drei rechten Zeilen desselben Schlüssels entstehen **2 × 3 = 6** Trefferkombinationen. Bei 1:1 bleibt je Treffer eine Zeile, bei 1:n wächst die Zeilenmenge, bei n:m können sich beide Seiten vervielfachen.

## Ergebnis

Die beiden Bestandszeilen erhalten ihr Segment aus den Stammdaten. Die Tabellen wurden über den Kundenschlüssel zugeordnet.

## Warum funktioniert das?

Ein Join ordnet jede passende Kombination von Schlüsselwerten zu. Die Kardinalität bestimmt die Zahl der Treffer; „Merge = Spalten ergänzen“ bedeutet daher keine Garantie unveränderter Zeilenzahl.

## Typischer Fehler

Nach einem Expand nur die neuen Attribute anschauen und vervielfachte Beträge unbemerkt summieren.

## Plausibilitätscheck

Im Segmentbeispiel 2 → 2 Zeilen und Summe 800. Für jeden fehlenden oder mehrfachen Treffer liegt eine Erklärung vor. Prüfe zusätzlich [Mehr Zeilen nach Merge](#/wissen/problem-merge-zeilen).
