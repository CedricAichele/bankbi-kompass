---
{
  "id": "excel-text-zerlegen",
  "slug": "excel-text-zerlegen",
  "titel": "Text in Excel zerlegen: Position oder Trennzeichen?",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Text bearbeiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "LINKS, RECHTS und TEIL schneiden nach Position. TEXTVOR, TEXTNACH und TEXTTEILEN nutzen Trennzeichen. Die gemeinsame Anleitung erklärt Auswahl, Ergebnis und Versionsgrenzen.",
  "ort": "Excel → Ergebniszelle außerhalb der Quelltabelle",
  "tags": [],
  "synonyme": [
    "links",
    "rechts",
    "teil",
    "textvor",
    "textnach",
    "textteilen",
    "text zerlegen",
    "kennung teilen",
    "text nach bindestrich"
  ],
  "verwandteThemen": [
    "excel-csv-spalten",
    "glaetten",
    "excel-power-query",
    "excel-formeln"
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
    "https://support.microsoft.com/en-us/excel/functions/left-function",
    "https://support.microsoft.com/de-de/excel/text-functions-reference",
    "https://support.microsoft.com/en-us/excel/functions/textbefore-function",
    "https://support.microsoft.com/en-us/excel/functions/textsplit-function"
  ],
  "formelreferenzen": [
    {
      "funktion": "LINKS",
      "code": "=LINKS(A2;4)",
      "ergebnis": "P001",
      "zweck": "Die ersten 4 Zeichen lesen.",
      "falle": "Die Zeichenanzahl muss zur Struktur passen.",
      "eingabe": "A2 = P001-K001. Formel in einer freien Ergebniszelle, z. B. H2.",
      "anpassen": "Zellbezug und Zeichenanzahl beziehungsweise Trennzeichen anpassen.",
      "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
    },
    {
      "funktion": "RECHTS",
      "code": "=RECHTS(A2;4)",
      "ergebnis": "K001",
      "zweck": "Die letzten 4 Zeichen lesen.",
      "falle": "Feste Länge bei unterschiedlich langen Kennungen prüfen.",
      "eingabe": "A2 = P001-K001. Formel in einer freien Ergebniszelle, z. B. H2.",
      "anpassen": "Zellbezug und Zeichenanzahl beziehungsweise Trennzeichen anpassen.",
      "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
    },
    {
      "funktion": "TEIL",
      "code": "=TEIL(A2;6;4)",
      "ergebnis": "K001",
      "zweck": "Vier Zeichen ab Position 6 lesen.",
      "falle": "Positionen beginnen bei 1; der Bindestrich steht hier an Position 5.",
      "eingabe": "A2 = P001-K001. Formel in einer freien Ergebniszelle, z. B. H2.",
      "anpassen": "A2, Startposition 6 und Zeichenanzahl 4 ersetzen.",
      "version": "Excel 2016/2019/2021/2024 und Microsoft 365."
    },
    {
      "funktion": "TEXTVOR",
      "code": "=TEXTVOR(A2;\"-\")",
      "ergebnis": "P001",
      "zweck": "Text vor dem Bindestrich lesen.",
      "falle": "Ein fehlendes Trennzeichen kann #NV ergeben; erst die Daten prüfen.",
      "eingabe": "A2 = P001-K001. Formel in einer freien Ergebniszelle, z. B. H2.",
      "anpassen": "Zellbezug und Zeichenanzahl beziehungsweise Trennzeichen anpassen.",
      "version": "Microsoft 365 oder Excel 2024; nicht Excel 2021."
    },
    {
      "funktion": "TEXTNACH",
      "code": "=TEXTNACH(A2;\"-\")",
      "ergebnis": "K001",
      "zweck": "Text nach dem Bindestrich lesen.",
      "falle": "Mehrere Bindestriche erfordern eine bewusste Wahl der Instanz.",
      "eingabe": "A2 = P001-K001. Formel in einer freien Ergebniszelle, z. B. H2.",
      "anpassen": "Zellbezug und Zeichenanzahl beziehungsweise Trennzeichen anpassen.",
      "version": "Microsoft 365 oder Excel 2024; nicht Excel 2021."
    },
    {
      "funktion": "TEXTTEILEN",
      "code": "=TEXTTEILEN(A3;\";\")",
      "ergebnis": "H7 = Nord, I7 = Giro, J7 = 1250",
      "zweck": "Text in mehrere Zellen aufteilen.",
      "falle": "Freien Überlaufbereich außerhalb einer Excel-Tabelle verwenden.",
      "eingabe": "A3 = Nord;Giro;1250. Formel in H7; H7:J7 frei halten.",
      "anpassen": "Zellbezug und Zeichenanzahl beziehungsweise Trennzeichen anpassen.",
      "version": "Microsoft 365 oder Excel 2024; nicht Excel 2021."
    }
  ]
}
---

## Wann brauche ich das?
Eine synthetische Kennung verbindet mehrere Merkmale. Du möchtest diese als eigene Spalten auswerten. Für eine vollständig in einer Spalte gelandete CSV nutze zuerst [den strukturierten CSV-Import](#/wissen/excel-csv-spalten): Textfunktionen sind dafür meist nicht der passende Importweg.
## Schritte
1. Prüfe, ob Position und Länge zuverlässig feststehen oder ob ein Trennzeichen die Teile kennzeichnet.
2. Schreibe die synthetischen Testwerte in A2 beziehungsweise A3 und lege freie Ergebniszellen rechts davon an.
3. Wähle das unten passende Formelverfahren und passe Bezug, Zeichenanzahl oder Trennzeichen an.
4. Prüfe kurze, leere und abweichende Kennungen sowie fehlende oder zusätzliche Trennzeichen.
5. Behalte IDs als Text und kontrolliere, ob führende Nullen erhalten sind.
## Beispiel
A2 enthält **P001-K001**, A3 enthält **Nord;Giro;1250**. Jede Formel wird einzeln in eine freie Zelle außerhalb der Quelltabelle geschrieben.

| Aufgabe | Formel | Ergebnis | Eingabe |
|---|---|---|---|
| Fester Anfang | =LINKS(A2;4) | P001 | H2 |
| Festes Ende | =RECHTS(A2;4) | K001 | H3 |
| Ab bestimmter Position | =TEIL(A2;6;4) | K001 | H4 |
| Vor Trennzeichen | =TEXTVOR(A2;"-") | P001 | H5 |
| Nach Trennzeichen | =TEXTNACH(A2;"-") | K001 | H6 |
| Alle Teile aufteilen | =TEXTTEILEN(A3;";") | Nord / Giro / 1250 in drei Zellen | H7:J7 frei halten |

TEIL zählt Zeichen **ab 1**: In P001-K001 ist Zeichen 5 der Bindestrich, Zeichen 6 das K. Ist die Kennung dagegen P01-K001, wäre die feste Position 6 falsch. Trennzeichenfunktionen kommen mit unterschiedlichen Längen zurecht, sofern das Trennzeichen zuverlässig vorkommt.
## Ergebnis
Einzelausdrücke liefern Text; TEXTTEILEN erzeugt einen dynamischen Überlaufbereich. Das Teilstück 1250 ist zunächst Text und muss für eine fachliche Zahl mit passendem Gebietsschema konvertiert werden.
## Warum funktioniert das?
Positionsfunktionen lesen eine festgelegte Anzahl von Zeichen. Trennzeichenfunktionen suchen die Struktur des Texts. TEXTVOR/TEXTNACH liefern standardmäßig den Teil vor beziehungsweise nach dem ersten passenden Trennzeichen; für andere Vorkommen kann der Instanzparameter angepasst werden. Mehrteilige Kennungen bewusst prüfen.
## Version und Alternativen
LINKS, RECHTS und TEIL stehen auch in älteren unterstützten Excel-Versionen zur Verfügung. TEXTVOR, TEXTNACH und TEXTTEILEN benötigen Microsoft 365 oder Excel 2024; Excel 2021 besitzt sie nicht. Bei #NAME? zuerst die Verfügbarkeit prüfen. In älteren Versionen Daten → Text in Spalten oder Power Query → Spalte teilen verwenden. Text in Spalten schreibt Werte in Nachbarspalten; vorher Platz schaffen oder auf einer Kopie arbeiten. Für wiederkehrende Exporte eignet sich [Excel Power Query](#/wissen/excel-power-query).
## Was muss ich anpassen?
A2/A3 ersetzen, Zeichenanzahl 4 und Startposition 6 an die eigene Struktur anpassen. Für TEXTVOR/TEXTNACH/TEXTTEILEN das Trennzeichen in Anführungszeichen setzen, etwa ";". Der Überlaufbereich muss frei sein und außerhalb einer formatierten Excel-Tabelle liegen. TEXTTEILEN kann später einen Bereich variabler Breite erzeugen.
## Typischer Fehler
Variable Kennungen mit festen Positionen schneiden; ein fehlendes Trennzeichen mit einer leeren gültigen Kennung verwechseln; #ÜBERLAUF! durch belegte Nachbarzellen oder Formeleingabe innerhalb einer Tabelle. Fehler erst verstehen, bevor WENNFEHLER sie verbirgt.
## Plausibilitätscheck
Für P001-K001 müssen beide Verfahren P001 und K001 ergeben. Teste außerdem P01-K001 und eine Kennung ohne Bindestrich. In H7:J7 müssen exakt Nord, Giro, 1250 stehen; weitere Trennzeichen können zusätzliche Spalten erzeugen.
