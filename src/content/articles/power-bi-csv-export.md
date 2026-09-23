---
{
  "id": "power-bi-csv-export",
  "slug": "power-bi-csv-export",
  "titel": "Power-BI-Tabelle als CSV exportieren und in Excel öffnen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Berichte & Visualisierung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Exportiere die Daten eines Tabellenvisuals als CSV. Wenn Excel anschließend alles in einer Spalte zeigt, führt die verlinkte Excel-Anleitung durch Import und Text in Spalten.",
  "ort": "Power BI → Tabellenvisual → Weitere Optionen (…) → Daten exportieren",
  "tags": [
    "CSV",
    "Export",
    "Reporting"
  ],
  "synonyme": [
    "power bi export",
    "tabelle als csv exportieren",
    "power bi csv excel",
    "export alles in einer spalte"
  ],
  "verwandteThemen": [
    "excel-csv-spalten",
    "tabelle",
    "csv-import",
    "problem-export"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/de-de/power-bi/visuals/power-bi-visualization-export-data"
  ],
  "screenshots": [],
  "praxis": true,
  "zuletztGeprueft": "2026-09-23"
}
---

## Wann brauche ich das?

Du möchtest die angezeigten Werte einer Power-BI-Tabelle in Excel weiterprüfen. **CSV in Excel geöffnet und alles steht in einer Spalte?** Hier geht es direkt zur [Excel-Anleitung: CSV richtig in Spalten trennen und als Tabelle laden](#/wissen/excel-csv-spalten), einschließlich **Daten → Text in Spalten** für eine bereits geöffnete Datei.

## Voraussetzungen

Ein Tabellenvisual und ein erlaubter Datenexport. Berichtseinstellungen, Berechtigungen und organisatorische Vorgaben können den Export einschränken. Desktop und Service bieten je nach Kontext unterschiedliche Formate und Exportoptionen; eine fehlende Option nicht umgehen. Die folgenden Werte sind synthetisch.

## Schritte

1. Im Bericht die gewünschte Tabelle auswählen. **Filter, Slicer, Stichtag und Zeilenebene** prüfen und notieren: Exportierst du einzelne Datensätze oder bereits aggregierte Werte?
2. Am Visual **Weitere Optionen (…) → Daten exportieren** wählen. In Power BI Desktop erfolgt der Visualexport als CSV. Im Service **CSV** wählen, sofern angeboten; die dort angebotenen Exportarten und Formate hängen vom Visual und den Berechtigungen ab.
3. Datei speichern und etwaige Hinweise auf Begrenzungen beachten. Der Export eines Visuals ist kein vollständiger Export des gesamten Datenmodells. Zeilenanzahl und Aggregation vor der Weiterverarbeitung kontrollieren.
4. In Excel eine leere Arbeitsmappe öffnen und **Daten → Aus Text/CSV** verwenden. **Nicht davon ausgehen, dass Doppelklick die Datei korrekt interpretiert.** Trennzeichen in der Vorschau passend zur Datei auswählen und Kennungen als Text erhalten.
5. Wenn alles in Spalte A steht: [CSV in Excel: Importweg und Text in Spalten Schritt für Schritt](#/wissen/excel-csv-spalten). Dort werden Komma/Semikolon, führende Nullen, deutsche Beträge, Datumswerte und die Umwandlung in eine Excel-Tabelle erklärt.
6. Geladene Werte mit genau derselben Auswahl im Power-BI-Bericht abgleichen und die Excel-Arbeitsmappe als **.xlsx** speichern.

## Beispiel

Das synthetische Tabellenvisual enthält zwei Einzelzeilen zum selben Stichtag:

| Kundennummer | Produkt | Bestand | Stichtag |
| --- | --- | ---: | --- |
| 00123 | Giro | 1.250,50 | 31.01.2026 |
| 00124 | Sparen | 750,00 | 31.01.2026 |

Nach korrektem CSV-Import in Excel stehen diese Werte in vier getrennten Spalten. In der [Excel-Anleitung](#/wissen/excel-csv-spalten) siehst du das Fehlerbild einer einzelnen Spalte, das Trennen und die fertige Ergebnistabelle.

## Ergebnis

Zwei Datenzeilen, vier Spalten, unveränderte Textkennungen und eine numerische Kontrollsumme von **2.000,50**. CSV überträgt Daten; eine formatierte Excel-Tabelle mit Abfrage und Formatierungen entsteht erst durch die Weiterverarbeitung in Excel.

## Warum funktioniert das?

Der Power-BI-Export und das Öffnen in Excel sind getrennte Schritte. Wenn Excel einen anderen Feldtrenner erwartet als die Datei verwendet, bleiben die Werte zusammen in einer Spalte. Ein korrekt gewähltes Trennzeichen stellt die Spaltenstruktur her; passende Datentypen erhalten ihre fachliche Bedeutung.

## Typischer Fehler

Eine sichtbare Summe mit exportierten Einzelwerten vergleichen, obwohl andere Filter oder eine andere Zeilenebene gelten. Oder eine unvollständige Datei allein wegen ihrer sauber getrennten Spalten für vollständig halten. Exportumfang und Werteinterpretation getrennt prüfen.

## Plausibilitätscheck

Im Beispiel: **2 Datenzeilen**, Kundennummern **00123 / 00124**, Stichtag **31.01.2026**, Summe **2.000,50**. Für reale Auswertungen zusätzlich den Exportumfang und eventuelle Begrenzungshinweise kontrollieren. Bei Unterschieden hilft [Ergebnis nach Export anders](#/wissen/problem-export).
